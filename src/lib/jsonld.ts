import type { Entry } from './content';
import { authors } from './authors';
import { absoluteUrl, site } from './site';
import type { Crumb } from '@/components/PageParts';

/*
 * One consistent graph with stable @id values. The agency is an Organization:
 * no Dentist/MedicalClinic types (we are not a dental provider), no
 * LocalBusiness (no verified public office address or hours), and no
 * deprecated ProfessionalService. areaServed describes coverage, not offices.
 */
export const ORG_ID = `${site.origin}/#organization`;
export const SITE_ID = `${site.origin}/#website`;

const states = [
  { '@type': 'State', name: 'Texas' },
  { '@type': 'State', name: 'Florida' },
  { '@type': 'State', name: 'Georgia' },
  { '@type': 'AdministrativeArea', name: 'Greater Los Angeles, California' },
];

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: `${site.origin}/`,
    description: site.description,
    knowsAbout: ['Dental practice marketing', 'Search engine optimization', 'Google Ads management', 'Website conversion', 'Marketing measurement'],
    address: { '@type': 'PostalAddress', addressLocality: site.headquarters.locality, addressRegion: site.headquarters.region, addressCountry: site.headquarters.country },
    areaServed: [{ '@type': 'Country', name: 'United States' }, ...states],
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function websiteNode() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: `${site.origin}/`, name: site.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' };
}

function areaFor(e: Entry) {
  if (e.geo.scope === 'city' && e.geo.city) return { '@type': 'City', name: `${e.geo.city}, ${e.geo.state}` };
  if (e.geo.scope === 'state' && e.geo.state) return { '@type': 'State', name: e.geo.state };
  return { '@type': 'Country', name: 'United States' };
}

export function breadcrumbNode(url: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
  };
}

export function pageGraph(e: Entry, crumbs: Crumb[]) {
  const url = absoluteUrl(e.route);
  const author = authors[e.author];
  const graph: Record<string, unknown>[] = [organizationNode(), websiteNode()];
  const pageType = e.route === '/contact/' ? 'ContactPage' : e.route === '/about/' ? 'AboutPage' : e.type.endsWith('hub') || e.type === 'market-hub' ? 'CollectionPage' : 'WebPage';
  const page: Record<string, unknown> = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: e.metaTitle,
    description: e.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
    ...(e.published ? { datePublished: e.published } : {}),
    ...(e.updated ? { dateModified: e.updated } : {}),
  };
  if (crumbs.length > 1) {
    graph.push(breadcrumbNode(url, crumbs));
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
  }
  graph.push(page);

  if (e.type === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: e.title,
      serviceType: e.primaryIntent,
      description: e.description,
      provider: { '@id': ORG_ID },
      areaServed: [{ '@type': 'Country', name: 'United States' }],
      audience: { '@type': 'BusinessAudience', audienceType: 'Dental practices, dental groups and DSOs' },
      url,
    });
  }
  if (e.type === 'city' || e.type === 'state') {
    // Market pages describe coverage of an area; they are not branch locations.
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: e.title,
      serviceType: 'Dental marketing',
      provider: { '@id': ORG_ID },
      areaServed: areaFor(e),
      url,
    });
  }
  if (e.type === 'article' || e.type === 'resource') {
    graph.push({
      '@type': e.type === 'article' ? 'BlogPosting' : 'Article',
      '@id': `${url}#article`,
      headline: e.title,
      description: e.description,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      publisher: { '@id': ORG_ID },
      author: author?.kind === 'Person' ? { '@type': 'Person', name: author.name, url: author.profileRoute ? absoluteUrl(author.profileRoute) : undefined } : { '@id': ORG_ID },
      ...(e.published ? { datePublished: e.published } : {}),
      ...(e.updated ? { dateModified: e.updated } : {}),
      inLanguage: 'en-US',
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Serialize safely for a <script> tag. */
export const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
