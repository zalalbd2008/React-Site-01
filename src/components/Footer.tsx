import Link from 'next/link';
import { getEntriesByType, getEntry } from '@/lib/content';
import { Wordmark } from './Wordmark';

/** Footer links are drawn from the content system, so unpublished pages never appear here. */
export function Footer() {
  const services = getEntriesByType('service');
  const states = getEntriesByType('state');
  const company = ['/about/', '/our-process/', '/leadership/', '/editorial-policy/', '/case-studies/', '/contact/'].map(getEntry).filter(Boolean);
  const legal = ['/privacy-policy/', '/terms/', '/accessibility/'].map(getEntry).filter(Boolean);
  const resources = ['/resources/', '/blog/', '/resources/dental-marketing-metrics/', '/resources/dental-growth-calculator/'].map(getEntry).filter(Boolean);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Wordmark />
            <p style={{ marginTop: 'var(--space-3)' }}>
              A Houston-based dental marketing agency working with practices and dental groups nationwide. Priority markets: Texas,
              Florida, Georgia and Greater Los Angeles.
            </p>
            <p>
              <Link href="/dental-marketing-audit/">Request a Dental Growth Audit →</Link>
            </p>
          </div>
          {services.length > 0 && (
            <nav aria-labelledby="f-services">
              <h2 id="f-services">Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.route}>
                    <Link href={s.route}>{s.navLabel ?? s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <nav aria-labelledby="f-markets">
            <h2 id="f-markets">Markets</h2>
            <ul>
              <li>
                <Link href="/markets/">All markets</Link>
              </li>
              {states.map((s) => (
                <li key={s.route}>
                  <Link href={s.route}>{s.navLabel ?? s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="f-company">
            <h2 id="f-company">Company</h2>
            <ul>
              {company.map((e) => (
                <li key={e!.route}>
                  <Link href={e!.route}>{e!.navLabel ?? e!.title}</Link>
                </li>
              ))}
              {resources.map((e) => (
                <li key={e!.route}>
                  <Link href={e!.route}>{e!.navLabel ?? e!.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Alpha Dental Media</span>
          {legal.map((e) => (
            <Link key={e!.route} href={e!.route}>
              {e!.navLabel ?? e!.title}
            </Link>
          ))}
          <span>We are a marketing agency, not a dental provider, and do not offer dental care or clinical advice.</span>
        </div>
      </div>
    </footer>
  );
}
