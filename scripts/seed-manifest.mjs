// Creates a frontmatter-only MDX entry for every planned route that does not exist yet.
// Existing files are never overwritten. Run: node scripts/seed-manifest.mjs
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'content');
const q = (s) => JSON.stringify(s);

function write(rel, fm) {
  const file = path.join(root, rel);
  if (fs.existsSync(file)) return false;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const lines = Object.entries(fm)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : q(v)}`);
  fs.writeFileSync(file, `---\n${lines.join('\n')}\n---\n`);
  return true;
}

const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

export const services = [
  ['S1', 'dental-seo-company', 'Dental SEO Services', 'Dental SEO company and dental SEO services'],
  ['S2', 'dental-google-ads-management', 'Dental Google Ads Management', 'Dental Google Ads management and dental PPC'],
  ['S3', 'local-seo-multi-location-clinics', 'Multi-Location Dental SEO', 'Multi-location dental SEO and DSO local SEO'],
  ['S4', 'dental-web-design-conversion', 'Dental Website Design and Conversion', 'Dental website design and conversion optimization'],
  ['S5', 'dental-local-seo-google-business-profile', 'Dental Local SEO and Google Business Profile', 'Dental local SEO and Google Business Profile optimization'],
  ['S6', 'dental-ai-search-optimization', 'Dental AI Search Optimization', 'Dental AI search optimization, AEO and GEO'],
  ['S7', 'dental-reputation-management', 'Dental Reputation Management', 'Dental reputation management'],
  ['S8', 'dental-content-marketing', 'Dental Content Marketing', 'Dental content marketing'],
  ['S9', 'dental-conversion-tracking', 'Dental Conversion Tracking and Attribution', 'Dental marketing attribution and conversion tracking'],
];

export const audiences = [
  ['general-dentists', 'General Dentists', 'Marketing for general dental practices'],
  ['dental-startups', 'Dental Startups', 'Marketing for new and startup dental practices'],
  ['dental-groups-dsos', 'Dental Groups and DSOs', 'Dental group and DSO marketing'],
  ['orthodontists', 'Orthodontists', 'Orthodontic practice marketing'],
  ['pediatric-dentists', 'Pediatric Dentists', 'Pediatric dental practice marketing'],
  ['cosmetic-and-implant-practices', 'Cosmetic and Implant Practices', 'Marketing for cosmetic and implant dental practices'],
];

export const cities = {
  texas: {
    name: 'Texas',
    w1: ['Houston', 'Dallas', 'Fort Worth', 'Austin', 'San Antonio'],
    w2: ['El Paso', 'Arlington', 'Plano', 'Frisco', 'Irving', 'McKinney', 'Corpus Christi', 'Lubbock', 'Round Rock'],
  },
  florida: {
    name: 'Florida',
    w1: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    w2: ['St. Petersburg', 'West Palm Beach', 'Boca Raton', 'Sarasota', 'Naples', 'Tallahassee', 'Gainesville', 'Port St. Lucie'],
  },
  georgia: {
    name: 'Georgia',
    w1: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Athens'],
    w2: ['Macon', 'Sandy Springs', 'Alpharetta', 'Roswell', 'Marietta', 'Johns Creek', 'Lawrenceville'],
  },
  california: {
    name: 'California',
    w1: ['Los Angeles', 'Long Beach', 'Pasadena', 'Glendale'],
    w2: ['Santa Monica', 'Burbank', 'Torrance', 'Beverly Hills', 'Downey', 'Santa Clarita', 'West Covina'],
  },
};

export const slugify = (s) => s.toLowerCase().replace(/\./g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const articles = [
  ['why-dental-websites-do-not-rank', 'Why Dental Websites Fail to Rank: A Technical and Local Diagnosis', 'seo-local', ['S1', 'S4']],
  ['dental-seo-cost', 'Dental SEO Costs: Scope, Deliverables and Comparing Proposals', 'seo-local', ['S1']],
  ['how-long-dental-seo-takes', 'How Long Dental SEO Takes and What to Measure First', 'seo-local', ['S1']],
  ['google-maps-visibility-for-dentists', 'Diagnosing Dental Google Maps Visibility', 'seo-local', ['S5']],
  ['dental-google-business-profile-suspension', 'Evidence to Prepare Before Appealing a Dental Google Business Profile Suspension', 'seo-local', ['S5']],
  ['dentist-practice-google-business-profiles', 'Practitioner and Practice Google Business Profiles: Eligibility and Duplicates', 'seo-local', ['S5']],
  ['dental-google-ads-keyword-match-types', 'Dental Google Ads Match Types: Tradeoffs and Controls', 'advertising', ['S2']],
  ['dental-google-ads-negative-keywords', 'Dental Negative Keywords: Frameworks and Exclusions That Remove Good Leads', 'advertising', ['S2']],
  ['emergency-dental-advertising', 'Emergency Dental Advertising Aligned With Real Hours and Capacity', 'advertising', ['S2']],
  ['dental-google-ads-budget', 'Building a Dental Google Ads Budget Around Qualified Inquiries and Attended Visits', 'advertising', ['S2', 'S9']],
  ['dental-implant-advertising', 'Dental Implant Advertising: Intent, Landing Pages and Consultation Quality', 'advertising', ['S2']],
  ['dental-website-conversion-audit', 'Why Dental Website Visitors Do Not Book: A Mobile Conversion Audit', 'websites-conversion', ['S4']],
  ['wordpress-vs-nextjs-dental-websites', 'WordPress, Headless CMS or Next.js for a Dental Website', 'websites-conversion', ['S4']],
  ['dental-online-booking-vs-request-forms', 'Online Booking Versus Request Forms for Dental Practices', 'websites-conversion', ['S4']],
  ['dental-call-tracking', 'Dental Call Tracking Without Treating Every Call as a New Patient', 'websites-conversion', ['S9']],
  ['multi-location-dental-website-structure', 'Subfolders, Subdomains or Separate Domains for Dental Groups', 'dental-groups', ['S3']],
  ['dental-group-location-pages', 'Useful Dental Group Location Pages Without Repeated Content', 'dental-groups', ['S3']],
  ['dental-practice-rebrand-seo-migration', 'Preserving Search Visibility Through Dental Acquisitions, Rebrands and Migrations', 'dental-groups', ['S3', 'S4']],
  ['dental-group-marketing-dashboard', 'A Dental Group Marketing Dashboard That Compares Offices Fairly', 'dental-groups', ['S3', 'S9']],
  ['ai-search-visibility-for-dentists', 'GEO, AEO and AI Search: What Dental Practices Should Understand', 'ai-search', ['S6']],
  ['checking-dental-practice-ai-answers', 'Checking Whether AI Answers Represent Your Dental Practice Accurately', 'ai-search', ['S6']],
  ['structured-data-for-dental-websites', 'Structured Data for Dental Websites That Matches the Real Practice', 'ai-search', ['S1', 'S6']],
  ['measuring-ai-referrals-and-citations', 'What AI Referral Traffic and Citation Observations Can Establish', 'ai-search', ['S6', 'S9']],
  ['dental-review-request-process', 'A Dental Review Request Process Without Incentives or Review Gating', 'reputation-strategy', ['S7']],
  ['responding-to-negative-dental-reviews', 'Responding to Negative Dental Reviews Without Disclosing Patient Information', 'reputation-strategy', ['S7']],
  ['new-dental-practice-marketing-plan', 'The First 90 Days of Marketing a New Dental Practice', 'reputation-strategy', []],
  ['choosing-a-dental-marketing-agency', 'Choosing a Dental Marketing Agency: Ownership, Fees, Reporting and Evidence', 'reputation-strategy', []],
  ['dental-marketing-roi', 'Dental Marketing ROI: Leads, Bookings, Attended Visits, Revenue and Profit', 'reputation-strategy', ['S9']],
];

const svcRoute = Object.fromEntries(services.map(([id, slug]) => [id, `/services/${slug}/`]));

function run() {
  let n = 0;
  const base = { status: 'Planned', author: 'editorial-team', reviewer: null };
  services.forEach(([id, slug, title, intent], i) => {
    n += write(`services/${slug}.mdx`, {
      route: `/services/${slug}/`, type: 'service', serviceId: id, ...base, title, navLabel: title,
      metaTitle: clip(title, 60), description: clip(`${title} for dental practices and dental groups: diagnosis, deliverables, dependencies and reporting from Alpha Dental Media.`, 160),
      parent: '/services/', primaryIntent: intent, order: i + 1,
    });
  });
  audiences.forEach(([slug, title, intent], i) => {
    n += write(`audiences/${slug}.mdx`, {
      route: `/who-we-help/${slug}/`, type: 'audience', ...base, title: `Marketing for ${title}`, navLabel: title,
      metaTitle: clip(`Marketing for ${title}`, 60), description: clip(`How Alpha Dental Media approaches marketing for ${title.toLowerCase()}: business model, priorities, constraints and the service mix that fits.`, 160),
      parent: '/who-we-help/', primaryIntent: intent, order: i + 1,
    });
  });
  for (const [stateSlug, s] of Object.entries(cities)) {
    n += write(`markets/${stateSlug}/index.mdx`, {
      route: `/markets/${stateSlug}/`, type: 'state', ...base, title: stateSlug === 'california' ? 'Dental Marketing in Greater Los Angeles, California' : `Dental Marketing for Practices in ${s.name}`,
      navLabel: stateSlug === 'california' ? 'California (Greater Los Angeles)' : s.name,
      metaTitle: stateSlug === 'california' ? 'Dental Marketing in Greater Los Angeles, CA' : `Dental Marketing Agency for ${s.name} Practices`,
      description: clip(`How Alpha Dental Media serves dental practices in ${stateSlug === 'california' ? 'Greater Los Angeles' : s.name} from Houston: regional considerations, delivery model and the markets we cover.`, 160),
      parent: '/markets/', primaryIntent: `Dental marketing agency ${s.name}`, geo: { scope: 'state', state: s.name },
    });
    [...s.w1.map((c) => [c, 1]), ...s.w2.map((c) => [c, 2])].forEach(([city, wave], i) => {
      const cs = slugify(city);
      n += write(`markets/${stateSlug}/${cs}.mdx`, {
        route: `/markets/${stateSlug}/${cs}/`, type: 'city', ...base, title: `Dental Marketing for Practices in ${city}`, navLabel: city,
        metaTitle: clip(`Dental Marketing Agency in ${city}, ${s.name === 'California' ? 'CA' : s.name}`, 60),
        description: clip(`Dental marketing for practices in ${city}, ${s.name}: local research, channel priorities, website implications and a phased plan, delivered from Houston.`, 160),
        parent: `/markets/${stateSlug}/`, primaryIntent: `dental marketing agency in ${city}`, secondaryQuestions: [`dental SEO ${city}`],
        geo: { scope: 'city', state: s.name, city, wave }, order: wave * 100 + i,
      });
    });
  }
  articles.forEach(([slug, title, category, svc], i) => {
    n += write(`blog/${slug}.mdx`, {
      route: `/blog/${slug}/`, type: 'article', category, ...base, title, metaTitle: clip(title, 60),
      description: clip(`${title}. A practical guide for dental practice owners and managers from Alpha Dental Media.`, 160),
      parent: '/blog/', primaryIntent: title, related: svc.map((id) => svcRoute[id]), order: i + 1,
    });
  });
  const resources = [
    ['dental-marketing-metrics', 'Dental Marketing Metrics Glossary', 'Definitions for dental marketing metrics, from inquiry to collected revenue'],
    ['dental-growth-calculator', 'Dental Growth Calculator', 'Estimate inquiries, bookings and cost per attended visit from your own assumptions'],
    ['dental-website-audit-checklist', 'Dental Website Audit Checklist', 'A practical checklist for auditing a dental practice website'],
    ['dental-agency-comparison-scorecard', 'Dental Agency Comparison Scorecard', 'A scorecard for comparing dental marketing agency proposals'],
    ['research-methodology', 'Research Methodology', 'How Alpha Dental Media collects, dates and limits its research observations'],
  ];
  resources.forEach(([slug, title, intent], i) => {
    n += write(`resources/${slug}.mdx`, {
      route: `/resources/${slug}/`, type: 'resource', ...base, title, navLabel: title, metaTitle: clip(title, 60),
      description: clip(`${intent}. A free reference from Alpha Dental Media for dental practice owners and managers.`, 160),
      parent: '/resources/', primaryIntent: intent, order: i + 1,
    });
  });
  console.log(`Created ${n} planned entries.`);
}

if (process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]))) run();
