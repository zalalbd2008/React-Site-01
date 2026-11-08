import type { Metadata } from 'next';
import { ContentPage } from '@/components/ContentPage';
import { paramsFor } from '@/lib/content';
import { metadataForRoute } from '@/lib/page-factory';

type Params = { state: string };
export const dynamicParams = false;

export function generateStaticParams() {
  return paramsFor('state', (s) => ({ state: s[1] }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  return metadataForRoute(`/markets/${p.state}/`);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const p = await params;
  return <ContentPage route={`/markets/${p.state}/`} />;
}
