import type { CSSProperties, ReactNode } from 'react';
import { getSources } from '@/lib/content';

/* All diagrams are plain semantic HTML (lists, tables), so they are readable
   by screen readers, print cleanly and need no client JavaScript. */

function Figure({ title, caption, children, label }: { title?: string; caption?: ReactNode; children: ReactNode; label?: string }) {
  return (
    <figure className="figure" aria-label={title ?? label}>
      {title && <p className="figure__title">{title}</p>}
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function KeyAnswer({ children }: { children: ReactNode }) {
  return <div className="lead-answer">{children}</div>;
}

export function Callout({ title, tone = 'note', children }: { title?: string; tone?: 'note' | 'caution' | 'example'; children: ReactNode }) {
  return (
    <aside className={`callout ${tone === 'caution' ? 'callout--caution' : tone === 'example' ? 'callout--example' : ''}`}>
      {title && <p className="callout__title">{title}</p>}
      {children}
    </aside>
  );
}

/** A worked example with invented numbers. Always labelled so it cannot be mistaken for a client result. */
export function Illustrative({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="callout callout--example" aria-label={`Illustrative example: ${title}`}>
      <span className="label label--illustrative">Illustrative example — not client data</span>
      <p className="callout__title">{title}</p>
      {children}
    </aside>
  );
}

export function Funnel({ title, steps, caption }: { title?: string; steps: { label: string; note?: string }[]; caption?: string }) {
  return (
    <Figure title={title} caption={caption}>
      <ol className="funnel">
        {steps.map((s, i) => (
          <li key={s.label} style={{ '--i': i } as CSSProperties}>
            <strong>
              {i + 1}. {s.label}
            </strong>
            {s.note && <span>{s.note}</span>}
          </li>
        ))}
      </ol>
    </Figure>
  );
}

export function Timeline({
  title,
  phases,
  caption,
}: {
  title?: string;
  phases: { when: string; title: string; items: string[] }[];
  caption?: string;
}) {
  return (
    <Figure title={title} caption={caption}>
      <ol className="timeline timeline--cols" style={{ '--cols': Math.min(phases.length, 4) } as CSSProperties}>
        {phases.map((p) => (
          <li key={p.when + p.title}>
            <span className="timeline__when">{p.when}</span>
            <p className="timeline__title">{p.title}</p>
            <ul>
              {p.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Figure>
  );
}

type Cell = { title: string; text: string; hot?: boolean };
/** 2×2 matrix. Cells are given in reading order: top-left, top-right, bottom-left, bottom-right. */
export function Matrix({
  title,
  xLabel,
  yLabel,
  cells,
  caption,
}: {
  title?: string;
  xLabel: string;
  yLabel: string;
  cells: [Cell, Cell, Cell, Cell];
  caption?: string;
}) {
  return (
    <Figure title={title} caption={caption}>
      <div className="matrix" role="group" aria-label={`${yLabel} by ${xLabel}`}>
        <div className="matrix__axis matrix__axis--y" style={{ gridRow: 'span 2' }}>
          {yLabel} →
        </div>
        {cells.map((c) => (
          <div key={c.title} className={`matrix__cell ${c.hot ? 'matrix__cell--hot' : ''}`}>
            <strong>{c.title}</strong>
            {c.text}
          </div>
        ))}
        <div />
        <div className="matrix__axis" style={{ gridColumn: 'span 2' }}>
          {xLabel} →
        </div>
      </div>
    </Figure>
  );
}

type Branch = { answer: string; outcome?: string; q?: string; branches?: Branch[] };
function TreeNode({ q, branches }: { q: string; branches: Branch[] }) {
  return (
    <ul className="tree">
      <li>
        <div className="tree__q">{q}</div>
        <div className="tree__branches">
          {branches.map((b) => (
            <div key={b.answer}>
              <div className="tree__answer">{b.answer}</div>
              {b.q && b.branches ? <TreeNode q={b.q} branches={b.branches} /> : <div className="tree__outcome">{b.outcome}</div>}
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
}
export function DecisionTree({ title, q, branches, caption }: { title?: string; q: string; branches: Branch[]; caption?: string }) {
  return (
    <Figure title={title} caption={caption}>
      <TreeNode q={q} branches={branches} />
    </Figure>
  );
}

export function Lanes({ title, lanes, caption }: { title?: string; lanes: { title: string; items: string[] }[]; caption?: string }) {
  return (
    <Figure title={title} caption={caption}>
      <div className="lanes" style={{ '--cols': Math.min(lanes.length, 4) } as CSSProperties}>
        {lanes.map((l) => (
          <section key={l.title} className="lane" aria-label={l.title}>
            <p className="lane__title">{l.title}</p>
            <ul>
              {l.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Figure>
  );
}

export function Checklist({ items, title }: { items: string[]; title?: string }) {
  return (
    <>
      {title && <p className="callout__title">{title}</p>}
      <ul className="checklist">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
}

export function DataTable({ caption, columns, rows, note }: { caption: string; columns: string[]; rows: string[][]; note?: string }) {
  return (
    <>
      <div className="table-wrap" role="region" aria-label={caption} tabIndex={0}>
        <table>
          <caption>{caption}</caption>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={j}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="source-note">{note}</p>}
    </>
  );
}

/** Inline evidence note placed next to the claim it supports. */
export function SourceNote({ ids, children }: { ids: string[]; children?: ReactNode }) {
  const all = getSources();
  const list = ids.map((id) => {
    const s = all.get(id);
    if (!s) throw new Error(`SourceNote: unknown source id "${id}"`);
    return s;
  });
  return (
    <p className="source-note">
      {children ? <>{children} </> : null}
      Source{list.length > 1 ? 's' : ''}:{' '}
      {list.map((s, i) => (
        <span key={s.id}>
          {i > 0 ? '; ' : ''}
          <a href={`#src-${s.id}`}>{s.title}</a> ({s.publisher}
          {s.published ? `, ${s.published}` : ''})
        </span>
      ))}
      .
    </p>
  );
}
