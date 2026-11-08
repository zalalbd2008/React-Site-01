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
};

const isCurrent = (path: string, href: string) => (href === '/' ? path === '/' : path.startsWith(href.split('?')[0]));

/**
 * Header, off-canvas drawer and mobile bottom bar. All links render on the
 * server, so navigation works without JavaScript; the drawer needs JS only to
 * open, and the same links are reachable through hub pages and the footer.
 */
export function SiteChrome({ groups, audit, consult }: Props) {
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
          <li>
            <Link href="/services/" aria-current={isCurrent(pathname, '/services/') ? 'page' : undefined}>
              <IconGrid /> Services
            </Link>
          </li>
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
