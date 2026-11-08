import { getEntriesByType, getEntry, type Entry } from '@/lib/content';
import { absoluteUrl, env, site } from '@/lib/site';

export const dynamic = 'force-static';

/** A plain summary generated from published content only. It is a convenience file; no search engine is promised to use it. */
export function GET() {
  const line = (e: Entry) => `- [${e.navLabel ?? e.title}](${absoluteUrl(e.route)}): ${e.description}`;
  const section = (title: string, list: (Entry | undefined)[]) => {
    const items = list.filter((x): x is Entry => Boolean(x));
    return items.length ? `\n## ${title}\n\n${items.map(line).join('\n')}\n` : '';
  };
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description} Alpha Dental Media is a marketing agency, not a dental provider. Market pages describe areas we serve remotely from Houston; they are not branch offices.`,
    '',
    env.isProduction ? '' : 'NOTE: preview build. This file is not published.',
    section('Company', ['/about/', '/our-process/', '/editorial-policy/', '/dental-marketing-audit/', '/contact/'].map(getEntry)),
    section('Services', getEntriesByType('service')),
    section('Who we help', getEntriesByType('audience')),
    section('Markets', [getEntry('/markets/'), ...getEntriesByType('state'), ...getEntriesByType('city')]),
    section('Reference resources', getEntriesByType('resource')),
    section('Guides', getEntriesByType('article')),
  ].join('\n');
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', ...(env.isProduction ? {} : { 'x-robots-tag': 'noindex' }) },
  });
}
