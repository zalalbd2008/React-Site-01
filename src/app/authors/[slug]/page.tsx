import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { personAuthors } from '@/lib/authors';
import { absoluteUrl, env } from '@/lib/site';

/** Author profiles exist only for verified people. None are verified yet, so every /authors/ URL is a 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  return personAuthors.map((a) => ({ slug: a.slug }));
}

type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const a = personAuthors.find((x) => x.slug === slug);
  if (!a) return { robots: { index: false } };
  return { title: a.name, description: a.bio.slice(0, 160), alternates: { canonical: absoluteUrl(a.profileRoute!) }, robots: env.isProduction ? undefined : { index: false } };
}

export default async function AuthorPage({ params }: P) {
  const { slug } = await params;
  const a = personAuthors.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <section className="hero">
      <div className="container prose">
        <h1>{a.name}</h1>
        <p>{a.bio}</p>
      </div>
    </section>
  );
}
