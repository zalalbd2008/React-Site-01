'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { NavGroup } from '@/lib/nav';
import { Wordmark } from './Wordmark';
import { IconAudit, IconChat, IconClose, IconGrid, IconHome, IconMenu } from './Icons';

type Props = {
  groups: NavGroup[];
  audit: { label: string; href: string };
  consult: { label: string; href: string };
  /** null when the services hub is not published in this build. */
  servicesHref: string | null;
};

const isCurrent = (path: string, href: string) => (href === '/' ? path === '/' : path.startsWith(href.split('?')[0]));

/**
 * Header, off-canvas drawer and mobile bottom bar. All links render on the
 * server, so navigation works without JavaScript; the drawer needs JS only to
 * open, and the same links are reachable through hub pages and the footer.
 */
export function SiteChrome({ groups, audit, consult, servicesHref }: Props) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openDrawer = (e: React.MouseEvent<HTMLButtonElement>) => {
    returnFocusRef.current = e.currentTarget;
    setOpen(true);
  };
  const close = useCallback(() => {
    setOpen(false);
    // Return focus to whichever control opened the drawer.
    requestAnimationFrame(() => returnFocusRef.current?.focus());
  }, []);

  // Close on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []).filter((el) => el.offsetParent !== null);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Content behind the modal drawer is inert.
    const main = document.getElementById('page-root');
    main?.setAttribute('inert', '');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      main?.removeAttribute('inert');
    };
  }, [open, close]);

  // Keep keyboard focus clear of the sticky header and the fixed mobile bottom bar (WCAG 2.2 SC 2.4.11).
  // Browsers do not scroll an element that is technically in the viewport but sits under a fixed bar.
  useEffect(() => {
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || !el.matches?.(':focus-visible') || el.closest('.site-header, .bottom-bar, .section-nav, #site-drawer')) return;
      const r = el.getBoundingClientRect();
      const header = document.querySelector('.site-header')?.getBoundingClientRect();
      const subnav = document.querySelector('.section-nav');
      const subRect = subnav && getComputedStyle(subnav).display !== 'none' ? subnav.getBoundingClientRect() : null;
      const bar = document.querySelector('.bottom-bar');
      const barRect = bar && getComputedStyle(bar).display !== 'none' ? bar.getBoundingClientRect() : null;
      const topLimit = Math.max(header?.bottom ?? 0, subRect?.bottom ?? 0) + 8;
      const bottomLimit = (barRect ? barRect.top : window.innerHeight) - 8;
      const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      if (r.bottom > bottomLimit) window.scrollBy({ top: r.bottom - bottomLimit, behavior });
      else if (r.top < topLimit) window.scrollBy({ top: r.top - topLimit, behavior });
    };
    document.addEventListener('focusin', onFocus);
    return () => document.removeEventListener('focusin', onFocus);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Wordmark />
          <nav className="primary-nav" aria-label="Primary">
            <ul>
              {groups.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} aria-current={isCurrent(pathname, g.href) ? 'page' : undefined}>
                    {g.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={audit.href} className="btn btn--primary">
                  Request an Audit
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={audit.href} className="btn btn--primary header-cta">
            Audit
          </Link>
          <button type="button" className="menu-button" aria-expanded={open} aria-controls="site-drawer" onClick={openDrawer}>
            <IconMenu /> Menu
          </button>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-backdrop" onClick={close} aria-hidden="true" />
          <div id="site-drawer" ref={drawerRef} className="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="drawer__top">
              <Wordmark />
              <button type="button" className="icon-button" onClick={close} aria-label="Close menu">
                <IconClose />
              </button>
            </div>
            <nav aria-label="Mobile">
              <ul>
                {groups.map((g) => (
                  <li key={g.href}>
                    <Link href={g.href} aria-current={isCurrent(pathname, g.href) ? 'page' : undefined}>
                      {g.label}
                    </Link>
                    {g.children.length > 0 && (
                      <ul className="drawer__sub">
                        {g.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <Link href={audit.href} className="btn btn--primary">
              {audit.label}
            </Link>
            <Link href={consult.href} className="btn btn--secondary">
              {consult.label}
            </Link>
          </div>
        </>
      )}

      <nav className="bottom-bar" aria-label="Quick actions">
        <ul>
          <li>
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
              <IconHome /> Home
            </Link>
          </li>
          {servicesHref && (
            <li>
              <Link href={servicesHref} aria-current={isCurrent(pathname, servicesHref) ? 'page' : undefined}>
                <IconGrid /> Services
              </Link>
            </li>
          )}
          <li>
            <Link href={audit.href} className="bottom-bar__audit" aria-current={isCurrent(pathname, audit.href) ? 'page' : undefined}>
              <IconAudit /> Audit
            </Link>
          </li>
          <li>
            <Link href={consult.href}>
              <IconChat /> Consult
            </Link>
          </li>
          <li>
            <button type="button" aria-expanded={open} aria-controls="site-drawer" onClick={openDrawer}>
              <IconMenu /> Menu
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
