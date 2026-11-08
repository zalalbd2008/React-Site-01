import Link from 'next/link';

/** Typographic wordmark used until a final logo is supplied. */
export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Alpha Dental Media home">
      <span className="wordmark__alpha">Alpha</span>
      <span className="wordmark__rest">Dental Media</span>
    </Link>
  );
}
