import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { paramsFor } from '@/lib/content';
import { metadataForRoute } from '@/lib/page-factory';

type Params = { state: string; city: string };
export const dynamicParams = false;

export function generateStaticParams() {
  return paramsFor('city', (s) => ({ state: s[1], city: s[2] }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  return metadataForRoute(`/markets/${p.state}/${p.city}/`);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = await params;
  return <ContentPage route={`/markets/${p.state}/${p.city}/`} />;
}
