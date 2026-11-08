import { getChildren, resolveRelated } from '@/lib/content';
import { EntryCard } from '../PageParts';

/** Cards for the visible children of a hub, e.g. <ChildCards of="/services/" />. Drafts are excluded automatically. */
export function ChildCards({ of, limit }: { of: string; limit?: number }) {
  const kids = getChildren(of).slice(0, limit);
  if (!kids.length) return null;
  return (
    <ul className="card-grid" style={{ margin: 'var(--space-5) 0 var(--space-6)' }}>
      {kids.map((k) => (
        <li key={k.route}>
          <EntryCard entry={k} />
        </li>
      ))}
    </ul>
  );
}

/** Cards for specific routes, e.g. <LinkCards routes={["/blog/dental-seo-cost/"]} />. Unpublished routes are skipped. */
export function LinkCards({ routes }: { routes: string[] }) {
  const items = resolveRelated(routes);
  if (!items.length) return null;
  return (
    <ul className="card-grid" style={{ margin: 'var(--space-5) 0 var(--space-6)' }}>
      {items.map((k) => (
        <li key={k.route}>
          <EntryCard entry={k} />
        </li>
      ))}
    </ul>
  );
}
