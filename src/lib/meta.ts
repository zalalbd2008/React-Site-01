import type { Metadata } from 'next';
import type { Entry } from './content';
import { absoluteUrl, env, site } from './site';
import type { Crumb } from '@/components/PageParts';
import { getEntry } from './content';

export function metadataFor(e: Entry, opts: { noindex?: boolean } = {}): Metadata {
  const url = absoluteUrl(e.route);
  const noindex = opts.noindex || !env.isProduction || !['Ready', 'Published'].includes(e.status);
  return {
    // The layout template appends " | Alpha Dental Media"; titles that already name the brand are used as-is.
    // Long titles drop the " | Alpha Dental Media" suffix rather than truncate in results.
    title: e.route === '/' || e.metaTitle.includes(site.name) || e.metaTitle.length + site.name.length + 3 > 65 ? { absolute: e.metaTitle } : e.metaTitle,
    description: e.description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: e.type === 'article' ? 'article' : 'website',
      url,
      siteName: site.name,
      title: e.metaTitle,
      description: e.description,
      locale: 'en_US',
      images: [{ url: absoluteUrl('/opengraph-image'), width: 1200, height: 630, alt: 'Alpha Dental Media — dental marketing for practices and dental groups' }],
      ...(e.type === 'article' && e.published ? { publishedTime: e.published, modifiedTime: e.updated ?? e.published } : {}),
    },
    twitter: { card: 'summary_large_image', title: e.metaTitle, description: e.description, images: [absoluteUrl('/opengraph-image')] },
  };
}

const HUB_NAMES: Record<string, string> = {
  '/services/': 'Services',
  '/who-we-help/': 'Who We Help',
  '/markets/': 'Markets',
  '/blog/': 'Blog',
  '/resources/': 'Resources',
  '/case-studies/': 'Results',
};

/** Breadcrumbs follow the URL hierarchy; each crumb uses the target page's short label. */
export function crumbsFor(e: Entry): Crumb[] {
  const segs = e.route.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Home', href: '/' }];
  let acc = '/';
  segs.forEach((s, i) => {
    acc += `${s}/`;
    if (i === segs.length - 1) crumbs.push({ name: e.navLabel ?? e.title, href: acc });
    else {
      // Skip levels that are not published in this build, so breadcrumbs never link to a 404.
      const parent = getEntry(acc);
      if (parent) crumbs.push({ name: parent.navLabel ?? HUB_NAMES[acc] ?? s, href: acc });
    }
  });
  return crumbs;
}
