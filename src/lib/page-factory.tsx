import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { getEntry } from '@/lib/content';
import { metadataFor } from '@/lib/meta';

/** Metadata for a route; unknown or unpublished routes get no-index metadata and render a 404. */
export function metadataForRoute(route: string): Metadata {
  const e = getEntry(route);
  return e ? metadataFor(e) : { title: 'Page not found', robots: { index: false, follow: false } };
}

export function staticPage(route: string) {
  return {
    generateMetadata: async (): Promise<Metadata> => metadataForRoute(route),
    Page: async function Page() {
      return <ContentPage route={route} />;
    },
  };
}
