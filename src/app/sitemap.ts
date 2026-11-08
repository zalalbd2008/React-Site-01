import type { MetadataRoute } from 'next';
import { getVisibleEntries } from '@/lib/content';
import { absoluteUrl, env } from '@/lib/site';

/** Only Ready/Published, canonical, indexable routes. The preview publishes an empty sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!env.isProduction) return [];
  return getVisibleEntries()
    .filter((e) => e.type !== 'utility')
    .map((e) => ({
      url: absoluteUrl(e.route),
      ...(e.updated || e.published ? { lastModified: e.updated ?? e.published! } : {}),
    }));
}
