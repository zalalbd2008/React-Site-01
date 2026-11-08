'use client';

import { useEffect, useRef, useState } from 'react';

type Heading = { id: string; text: string; depth: number };

/**
 * Tracks which section is in view and marks the matching link with
 * aria-current. It never moves focus and never scrolls the page; on mobile it
 * only scrolls its own horizontal strip so the active chip stays visible.
 */
function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length || !('IntersectionObserver' in window)) return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // The active section is the last heading that has passed the top band.
        const passed = els.filter((el) => el.getBoundingClientRect().top < window.innerHeight * 0.35);
        const next = passed.length ? passed[passed.length - 1].id : els[0].id;
        setActive((prev) => (prev === next ? prev : next));
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export function DesktopToc({ headings }: { headings: Heading[] }) {
  const active = useActiveHeading(headings.map((h) => h.id));
  return (
    <nav className="toc-desktop" aria-label="On this page">
      <p>On this page</p>
      <ol>
        {headings.map((h) => (
          <li key={h.id} className={`toc-depth-${h.depth}`}>
            <a href={`#${h.id}`} aria-current={active === h.id ? 'true' : undefined}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionNav({ headings }: { headings: Heading[] }) {
  const top = headings.filter((h) => h.depth === 2);
  const active = useActiveHeading(top.map((h) => h.id));
  const listRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [active]);
  if (top.length < 3) return null;
  return (
    <nav className="section-nav" aria-label="Sections">
      <ol ref={listRef}>
        {top.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} aria-current={active === h.id ? 'true' : undefined}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
