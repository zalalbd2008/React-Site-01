import type { Metadata, Viewport } from 'next';
import './globals.css';
import { inter, serif } from './fonts';
import { SiteChrome } from '@/components/SiteChrome';
import { Footer } from '@/components/Footer';
import { Consent } from '@/components/Consent';
import { AttributionCapture } from '@/components/AttributionCapture';
import { primaryNav } from '@/lib/nav';
import { getChildren } from '@/lib/content';
import { env, site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  ...(env.isProduction ? {} : { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b1f3a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const groups = primaryNav.map((g) => ({
    ...g,
    children: ['/services/', '/who-we-help/', '/markets/'].includes(g.href)
      ? getChildren(g.href).map((c) => ({ label: c.navLabel ?? c.title, href: c.route }))
      : [],
  }));
  return (
    <html lang="en-US" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteChrome groups={groups} audit={site.ctas.primary} consult={site.ctas.secondary} />
        <div id="page-root">
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <AttributionCapture />
        {env.gaId && <Consent gaId={env.gaId} />}
      </body>
    </html>
  );
}
