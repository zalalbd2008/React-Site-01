/**
 * Verified business facts used by the site. Anything not listed here is
 * unverified and must not be displayed. See docs/business-facts.md for the
 * source of each value and docs/owner-inputs.md for what is still missing.
 */
export const site = {
  name: 'Alpha Dental Media',
  // Legal entity name has not been supplied. Do not display one.
  legalName: null as string | null,
  domain: 'alphadentalmedia.com',
  origin: 'https://alphadentalmedia.com',
  locale: 'en-US',
  description:
    'Alpha Dental Media is a Houston-based dental marketing agency serving dental practices, dental groups and DSOs nationwide, with priority markets in Texas, Florida, Georgia and Greater Los Angeles.',
  headquarters: { locality: 'Houston', region: 'TX', regionName: 'Texas', country: 'US' },
  // No street address, phone, hours or public email have been verified.
  phone: null as string | null,
  email: null as string | null,
  sameAs: [] as string[],
  priorityStates: ['Texas', 'Florida', 'Georgia', 'California'] as const,
  ctas: {
    primary: { label: 'Request a Dental Growth Audit', href: '/dental-marketing-audit/' },
    secondary: { label: 'Book a Strategy Call', href: '/contact/?type=consultation' },
  },
} as const;

/** Environment-driven flags. Read on the server only. */
export const env = {
  /** "production" builds publish Ready/Published content only. Anything else is the protected preview. */
  isProduction: process.env.SITE_ENV === 'production',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export const absoluteUrl = (path: string) => new URL(path, site.origin).toString();
