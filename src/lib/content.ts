import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';
import { frontmatterSchema, sourceSchema, PUBLIC_STATUSES, type Frontmatter, type Source, type PageType } from './schema';
import { env } from './site';
import { countWords, extractHeadings } from './text';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type Entry = Frontmatter & {
  file: string;
  body: string;
  wordCount: number;
  headings: { id: string; text: string; depth: number }[];
};

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    return d.name.endsWith('.mdx') && !d.name.startsWith('_') ? [p] : [];
  });
}

/** Every entry in the content system, whatever its status. Throws on invalid frontmatter so bad content fails the build. */
export const getAllEntries = cache((): Entry[] => {
  const seen = new Map<string, string>();
  return walk(CONTENT_DIR).map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(raw);
    const parsed = frontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(`Invalid frontmatter in ${path.relative(process.cwd(), file)}:\n${parsed.error.message}`);
    }
    const fm = parsed.data;
    if (seen.has(fm.route)) throw new Error(`Duplicate route ${fm.route} in ${file} and ${seen.get(fm.route)}`);
    seen.set(fm.route, file);
    return {
      ...fm,
      file: path.relative(process.cwd(), file),
      body: content,
      wordCount: countWords(content, fm.faqs),
      headings: extractHeadings(content),
    };
  });
});

/** Whether an entry may be rendered in this build. Production shows Ready/Published only; the protected preview also shows drafts that have a body. */
export function isVisible(e: Pick<Entry, 'status' | 'body'>): boolean {
  if (PUBLIC_STATUSES.includes(e.status)) return true;
  if (env.isProduction) return false;
  return e.body.trim().length > 0 && e.status !== 'Planned';
}

/** Whether an entry belongs on public discovery surfaces (sitemap, llms.txt, related links, hubs) in this build. */
export const isListed = isVisible;

export const getVisibleEntries = cache(() => getAllEntries().filter(isVisible));

export function getEntry(route: string): Entry | undefined {
  const e = getAllEntries().find((x) => x.route === route);
  return e && isVisible(e) ? e : undefined;
}

export function getEntriesByType(type: PageType): Entry[] {
  return getVisibleEntries()
    .filter((e) => e.type === type)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getChildren(parentRoute: string): Entry[] {
  return getVisibleEntries()
    .filter((e) => e.parent === parentRoute)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

/** Static params for a dynamic segment: only visible entries, so anything else is a genuine 404. */
export function paramsFor(type: PageType, toParams: (segments: string[]) => Record<string, string>) {
  return getEntriesByType(type).map((e) => toParams(e.route.split('/').filter(Boolean)));
}

export const getSources = cache((): Map<string, Source> => {
  // Sources live in content/sources/*.json (one file per topic or writer). Identical duplicates are tolerated; conflicting ones fail the build.
  const dir = path.join(CONTENT_DIR, 'sources');
  const map = new Map<string, Source>();
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.json')).sort()) {
    const list = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as unknown[];
    for (const item of list) {
      const parsed = sourceSchema.safeParse(item);
      if (!parsed.success) throw new Error(`Invalid source in content/sources/${f}: ${parsed.error.message}`);
      const s = parsed.data;
      const prev = map.get(s.id);
      if (prev && prev.url !== s.url) throw new Error(`Source id "${s.id}" is defined twice with different URLs (content/sources/${f})`);
      map.set(s.id, s);
    }
  }
  return map;
});

export function resolveSources(ids: string[]): Source[] {
  const all = getSources();
  return ids.map((id) => {
    const s = all.get(id);
    if (!s) throw new Error(`Unknown source id "${id}". Add it to a file in content/sources/.`);
    return s;
  });
}

/** Related links that are visible in this build. Drafts never leak into public modules. */
export function resolveRelated(routes: string[]): Entry[] {
  return routes.map((r) => getEntry(r)).filter((e): e is Entry => Boolean(e));
}
