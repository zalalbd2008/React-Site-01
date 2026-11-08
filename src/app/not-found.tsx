import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container prose">
        <h1>Page not found</h1>
        <p className="hero__lede">The page you asked for does not exist or is not published.</p>
        <ul>
          <li><Link href="/services/">Dental marketing services</Link></li>
          <li><Link href="/markets/">Markets we serve</Link></li>
          <li><Link href="/blog/">Guides for practice owners</Link></li>
          <li><Link href="/dental-marketing-audit/">Request a Dental Growth Audit</Link></li>
        </ul>
      </div>
    </section>
  );
}
