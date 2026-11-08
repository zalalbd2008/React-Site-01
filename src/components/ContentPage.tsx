import { notFound } from 'next/navigation';
import { getChildren, getEntry, resolveRelated, resolveSources, type Entry } from '@/lib/content';
import { crumbsFor } from '@/lib/meta';
import { pageGraph, toJsonLd } from '@/lib/jsonld';
import { ARTICLE_CATEGORIES } from '@/lib/schema';
import { AuthorPanel, Breadcrumbs, CtaBand, EntryCard, Faq, Hero, RelatedReading, SourceList, StatusBanner } from './PageParts';
import { DesktopToc, SectionNav } from './Scrollspy';
import { inlineSourceIds, renderMdx } from './Mdx';

export const CATEGORY_LABELS: Record<(typeof ARTICLE_CATEGORIES)[number], string> = {
  'seo-local': 'SEO and local visibility',
  advertising: 'Advertising',
  'websites-conversion': 'Websites and conversion',
  'dental-groups': 'Dental groups',
  'ai-search': 'AI search',
  'reputation-strategy': 'Reputation and strategy',
};

function ChildListing({ entry }: { entry: Entry }) {
  const kids = getChildren(entry.route);
  if (entry.type === 'blog-hub') {
    return (
      <>
        {ARTICLE_CATEGORIES.map((cat) => {
          const items = kids.filter((k) => k.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2 id={`cat-${cat}`}>{CATEGORY_LABELS[cat]}</h2>
              <ul className="card-grid">
                {items.map((k) => (
                  <li key={k.route}>
                    <EntryCard entry={k} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </>
    );
  }
  if (!kids.length) return null;
  const heading =
    entry.type === 'state' ? `Markets we cover in ${entry.geo.state}` : entry.type === 'market-hub' ? 'Priority markets' : entry.type === 'service-hub' ? 'Our services' : entry.type === 'audience-hub' ? 'Practice types' : 'In this section';
  return (
    <section aria-labelledby="children-heading">
      <h2 id="children-heading">{heading}</h2>
      <ul className="card-grid">
        {kids.map((k) => (
          <li key={k.route}>
            <EntryCard entry={k} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function ContentPage({ route, children }: { route: string; children?: React.ReactNode }) {
  const entry = getEntry(route);
  if (!entry) notFound();
  const crumbs = crumbsFor(entry);
  const body = await renderMdx(entry.body);
  const sources = resolveSources([...new Set([...entry.sources, ...inlineSourceIds(entry.body)])]);
  const related = resolveRelated(entry.related);
  const headings = entry.toc ? entry.headings.filter((h) => h.depth <= 3) : [];
  const tocHeadings = entry.faqs.length && entry.toc ? [...headings, { id: 'faq-heading', text: 'Questions', depth: 2 }] : headings;
  const showToc = tocHeadings.filter((h) => h.depth === 2).length >= 3;
  const isHub = entry.type.endsWith('hub') || entry.type === 'state';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(pageGraph(entry, crumbs)) }} />
      <StatusBanner entry={entry} />
      {entry.type !== 'home' && <Breadcrumbs items={crumbs} />}
      <Hero entry={entry} variant={entry.type === 'home' ? 'home' : undefined} />
      {showToc && <SectionNav headings={tocHeadings} />}
      <div className={`container page-grid ${showToc ? 'page-grid--toc' : ''}`}>
        <article className="prose" id="main-article">
          {showToc && (
            <details className="toc-mobile">
              <summary>Contents</summary>
              <ol>
                {tocHeadings
                  .filter((h) => h.depth === 2)
                  .map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
              </ol>
            </details>
          )}
          {body}
          {children}
          {isHub && <ChildListing entry={entry} />}
          <Faq items={entry.faqs} />
          <RelatedReading entries={related} />
          <CtaBand kind={entry.cta} />
          <SourceList sources={sources} />
          {['article', 'resource', 'service', 'city', 'state', 'audience'].includes(entry.type) && <AuthorPanel entry={entry} />}
        </article>
        {showToc && <DesktopToc headings={tocHeadings} />}
      </div>
    </>
  );
}
