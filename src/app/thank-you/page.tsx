import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Request received', robots: { index: false, follow: false } };

type SP = Promise<{ type?: string }>;

export default async function ThankYou({ searchParams }: { searchParams: SP }) {
  const { type } = await searchParams;
  const isCall = type === 'consultation';
  return (
    <section className="hero">
      <div className="container prose">
        <h1>{isCall ? 'Your call request was received' : 'Your audit request was received'}</h1>
        <p className="hero__lede">
          Our system confirmed your request. We will reply by email to the address you provided
          {isCall ? ' to arrange a time for the call.' : ' with any questions we need answered before we start the audit.'}
        </p>
        <h2>What happens next</h2>
        <ol>
          <li>We check that the practice is one we can help and that we have no conflict in your market.</li>
          <li>{isCall ? 'We propose call times by email. No appointment exists until you confirm one.' : 'We may ask for read-only access to Google Business Profile, Search Console, Analytics or Ads if you want those reviewed.'}</li>
          <li>{isCall ? 'On the call we discuss your goals, capacity and what you have tried.' : 'We review the website, local visibility, advertising and measurement and share what we found.'}</li>
        </ol>
        <p>Please do not reply with patient information.</p>
        <p>
          <Link href="/resources/">Browse our resources</Link> or <Link href="/">return to the homepage</Link>.
        </p>
      </div>
    </section>
  );
}
