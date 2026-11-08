// Route-by-route content report: status, word count vs requirement, sources, links.
// Usage: npm run content:check [-- --json] [-- --filter /markets/]
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { frontmatterSchema, LONG_FORM_TYPES } from '../src/lib/schema.ts';
import { countWords } from '../src/lib/text.ts';

const root = path.resolve(import.meta.dirname, '..');
const contentDir = path.join(root, 'content');
const args = process.argv.slice(2);
const json = args.includes('--json');
const filter = args.includes('--filter') ? args[args.indexOf('--filter') + 1] : '';

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : d.name.endsWith('.mdx') && !d.name.startsWith('_') ? [p] : [];
  });
}

const sourceDir = path.join(contentDir, 'sources');
const sources = new Set(
  fs.readdirSync(sourceDir).filter((n) => n.endsWith('.json')).flatMap((f) => (JSON.parse(fs.readFileSync(path.join(sourceDir, f), 'utf8')) as { id: string }[]).map((s) => s.id)),
);
const rows: Record<string, unknown>[] = [];
const problems: string[] = [];
const allRoutes = new Set<string>();
const parsed = walk(contentDir).map((file) => {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  const r = frontmatterSchema.safeParse(data);
  if (!r.success) {
    problems.push(`${path.relative(root, file)}: invalid frontmatter: ${r.error.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; ')}`);
    return null;
  }
  allRoutes.add(r.data.route);
  return { file, fm: r.data, body: content };
});

const BANNED = /\b(best|number one|#1|top-rated|leading|guarantee[ds]?|proven|in our experience|we['’]ve helped|our clients)\b/gi;

for (const p of parsed) {
  if (!p) continue;
  const { fm, body, file } = p;
  if (filter && !fm.route.startsWith(filter)) continue;
  const words = countWords(body, fm.faqs);
  const longForm = LONG_FORM_TYPES.includes(fm.type);
  const inline = [...body.matchAll(/SourceNote\s+ids=\{\[([^\]]*)\]\}/g)].flatMap((m) => [...m[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1]));
  const missingSources = [...new Set([...fm.sources, ...inline])].filter((id) => !sources.has(id));
  const links = [...body.matchAll(/\]\((\/[^)\s#?]*)/g)].map((m) => (m[1].endsWith('/') ? m[1] : m[1] + '/'));
  const unknownLinks = links.filter((l) => l !== '/' && !allRoutes.has(l));
  const banned = [...new Set((body.match(BANNED) || []).map((s) => s.toLowerCase()))];
  const hasVisual = /<(Funnel|Timeline|Matrix|DecisionTree|Lanes|DataTable|Checklist|GrowthCalculator)\b/.test(body) || /\n\|.*\|\n\|[-: |]+\|/.test(body);
  rows.push({
    route: fm.route,
    type: fm.type,
    status: fm.status,
    words,
    required: longForm ? 2000 : null,
    meetsDepth: longForm ? words >= 2000 : null,
    faqs: fm.faqs.length,
    sources: [...new Set([...fm.sources, ...inline])].length,
    visual: hasVisual,
    evidence: fm.evidence,
    reviewer: fm.reviewer,
    published: fm.published,
  });
  if (missingSources.length) problems.push(`${fm.route}: unknown source ids ${missingSources.join(', ')}`);
  if (unknownLinks.length) problems.push(`${fm.route}: links to routes not in the content system: ${[...new Set(unknownLinks)].join(', ')}`);
  if (banned.length && body.trim()) problems.push(`${fm.route}: review wording: ${banned.join(', ')}`);
  if (longForm && body.trim() && fm.status !== 'Planned' && words < 2000) problems.push(`${fm.route}: ${words} words (< 2,000 required for ${fm.type})`);
  if (longForm && body.trim() && !hasVisual) problems.push(`${fm.route}: no visual/table found`);
}

if (json) {
  console.log(JSON.stringify({ rows, problems }, null, 2));
} else {
  const counts: Record<string, number> = {};
  for (const r of rows) counts[r.status as string] = (counts[r.status as string] ?? 0) + 1;
  console.log('Status counts:', counts);
  console.log('');
  for (const r of rows.sort((a, b) => String(a.route).localeCompare(String(b.route)))) {
    const depth = r.required ? (r.meetsDepth ? 'OK ' : 'LOW') : '   ';
    console.log(`${String(r.status).padEnd(12)} ${depth} ${String(r.words).padStart(5)}w  faq:${r.faqs} src:${r.sources} ${r.visual ? 'vis' : '   '}  ${r.route}`);
  }
  if (problems.length) {
    console.log('\nProblems:');
    for (const p of problems) console.log(' - ' + p);
  }
}
