import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { paramsFor } from '@/lib/content';
import { metadataForRoute } from '@/lib/page-factory';

type Params = { slug: string };
export const dynamicParams = false;

export function generateStaticParams() {
  return paramsFor('audience', (s) => ({ slug: s[1] }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  return metadataForRoute(`/who-we-help/${p.slug}/`);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = await params;
  return <ContentPage route={`/who-we-help/${p.slug}/`} />;
}
