import Link from 'next/link';
import type { Entry } from '@/lib/content';
import type { Source } from '@/lib/schema';
import { site } from '@/lib/site';
import { authors } from '@/lib/authors';

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.href}>
            {i === items.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.href}>{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Hero({ entry, variant }: { entry: Entry; variant?: 'home' }) {
  return (
    <section className={`hero ${variant === 'home' ? 'hero--home' : ''}`}>
      <div className="container">
        {entry.eyebrow && <p className="hero__eyebrow">{entry.eyebrow}</p>}
        <h1>{entry.title}</h1>
        {entry.lede && <p className="hero__lede">{entry.lede}</p>}
        {entry.cta !== 'none' && (
          <div className="btn-row">
            <Link className="btn btn--primary" href={site.ctas.primary.href}>
              {site.ctas.primary.label}
            </Link>
            <Link className={`btn btn--secondary ${variant === 'home' ? 'btn--on-dark' : ''}`} href={site.ctas.secondary.href}>
              {site.ctas.secondary.label}
            </Link>
          </div>
        )}
        <PageMeta entry={entry} />
      </div>
    </section>
  );
}

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function PageMeta({ entry }: { entry: Entry }) {
  if (!['article', 'resource', 'service', 'city', 'state', 'audience'].includes(entry.type)) return null;
  const author = authors[entry.author];
  return (
    <p className="hero__meta page-meta">
      {author && <span>By {author.name}</span>}
      {entry.published && (
        <span>
          Published <time dateTime={entry.published}>{fmt(entry.published)}</time>
        </span>
      )}
      {entry.updated && entry.updated !== entry.published && (
        <span>
          Updated <time dateTime={entry.updated}>{fmt(entry.updated)}</time>
        </span>
      )}
    </p>
  );
}

export function Faq({ items, heading = 'Questions practice owners ask' }: { items: { q: string; a: string }[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">{heading}</h2>
      <div className="faq">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <div className="faq__answer">
              {f.a.split(/\n{2,}/).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section className="sources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">Sources and notes</h2>
      <ol>
        {sources.map((s) => (
          <li key={s.id} id={`src-${s.id}`}>
            <a href={s.url} rel="noopener" target="_blank">
              {s.title}
            </a>
            . {s.publisher}
            {s.published ? `, ${s.published}` : ''}. Retrieved {s.retrieved}.
            {s.dataYear ? ` Data year: ${s.dataYear}.` : ''}
            {s.geography ? ` Geography: ${s.geography}.` : ''}
            {s.limitations ? ` Limitations: ${s.limitations}` : ''}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AuthorPanel({ entry }: { entry: Entry }) {
  const author = authors[entry.author];
  if (!author) return null;
  return (
    <aside className="author-panel" aria-label="About this content">
      <span className="author-panel__name">{author.name}</span>
      <span>{author.bio}</span>
      <span>
        {entry.reviewer
          ? `Reviewed by ${authors[entry.reviewer]?.name ?? entry.reviewer}.`
          : 'No external expert review is claimed for this page.'}{' '}
        Read our <Link href="/editorial-policy/">editorial policy</Link>, including how we correct errors.
      </span>
    </aside>
  );
}

export function CtaBand({ kind = 'audit' }: { kind?: 'audit' | 'call' | 'none' }) {
  if (kind === 'none') return null;
  return (
    <aside className="cta-band" aria-labelledby="cta-heading">
      <h2 id="cta-heading">{kind === 'call' ? 'Talk through your situation' : 'Start with a Dental Growth Audit'}</h2>
      <p>
        The audit reviews your website, local listings, advertising setup and measurement against the patients and services you
        want more of. You tell us your goals and constraints; we tell you what we found, what we would do first, and what we would
        not do.
      </p>
      <div className="btn-row">
        <Link className="btn btn--primary" href={site.ctas.primary.href}>
          {site.ctas.primary.label}
        </Link>
        <Link className="btn btn--secondary btn--on-dark" href={site.ctas.secondary.href}>
          {site.ctas.secondary.label}
        </Link>
      </div>
    </aside>
  );
}

export function RelatedReading({ entries, heading = 'Related reading' }: { entries: Entry[]; heading?: string }) {
  if (!entries.length) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading">{heading}</h2>
      <ul className="card-grid">
        {entries.map((e) => (
          <li key={e.route}>
            <EntryCard entry={e} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EntryCard({ entry, headingLevel = 3 }: { entry: Entry; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className="card">
      <H>
        <Link href={entry.route}>{entry.navLabel ?? entry.title}</Link>
      </H>
      <p>{entry.description}</p>
    </article>
  );
}

export function StatusBanner({ entry }: { entry: Entry }) {
  if (entry.status === 'Ready' || entry.status === 'Published') return null;
  return (
    <div className="status-banner" role="note">
      <div className="container">
        Preview only. Status: <strong>{entry.status}</strong>
        {entry.statusReason ? ` — ${entry.statusReason}` : ''}. This page is excluded from the production site, sitemap and llms.txt.
      </div>
    </div>
  );
}
