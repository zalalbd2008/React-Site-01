import { z } from 'zod';

export const STATUSES = ['Planned', 'Researching', 'Drafted', 'Fact-checked', 'Ready', 'Published', 'Blocked'] as const;
export type Status = (typeof STATUSES)[number];

/** Statuses that may appear on the production site. Everything else is preview-only. */
export const PUBLIC_STATUSES: Status[] = ['Ready', 'Published'];

export const PAGE_TYPES = [
  'home',
  'service-hub',
  'service',
  'audience-hub',
  'audience',
  'market-hub',
  'state',
  'city',
  'blog-hub',
  'article',
  'resource-hub',
  'resource',
  'case-study-hub',
  'case-study',
  'company',
  'legal',
  'utility',
  'author',
] as const;
export type PageType = (typeof PAGE_TYPES)[number];

/** Page types that carry the 2,000-word editorial depth requirement. */
export const LONG_FORM_TYPES: PageType[] = ['home', 'service', 'audience', 'state', 'city', 'article'];

export const ARTICLE_CATEGORIES = [
  'seo-local',
  'advertising',
  'websites-conversion',
  'dental-groups',
  'ai-search',
  'reputation-strategy',
] as const;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');

export const faqSchema = z.object({ q: z.string().min(8), a: z.string().min(20) });

export const frontmatterSchema = z
  .object({
    route: z.string().regex(/^\/([a-z0-9-]+\/)*$/, 'Routes are lowercase, hyphenated and end with a slash'),
    type: z.enum(PAGE_TYPES),
    status: z.enum(STATUSES),
    statusReason: z.string().optional(),
    title: z.string().min(4), // visible H1
    metaTitle: z.string().min(10).max(70),
    description: z.string().min(50).max(170),
    navLabel: z.string().optional(),
    eyebrow: z.string().optional(),
    lede: z.string().optional(),
    parent: z.string().nullable().default(null),
    lang: z.enum(['en', 'es']).default('en'),
    serviceId: z.enum(['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9']).optional(),
    category: z.enum(ARTICLE_CATEGORIES).optional(),
    primaryIntent: z.string().min(3),
    secondaryQuestions: z.array(z.string()).default([]),
    audience: z.string().default('Dental practice owners and managers'),
    geo: z
      .object({
        scope: z.enum(['national', 'state', 'city', 'metro']),
        state: z.string().optional(),
        city: z.string().optional(),
        wave: z.union([z.literal(1), z.literal(2)]).optional(),
      })
      .default({ scope: 'national' }),
    author: z.string().default('editorial-team'),
    reviewer: z.string().nullable().default(null),
    sources: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    cta: z.enum(['audit', 'call', 'none']).default('audit'),
    published: isoDate.nullable().default(null),
    updated: isoDate.nullable().default(null),
    evidence: z.enum(['none-required', 'sourced', 'illustrative-only', 'needs-research', 'verified-client-data']).default('sourced'),
    verificationNotes: z.string().optional(),
    faqs: z.array(faqSchema).default([]),
    toc: z.boolean().default(true),
    order: z.number().default(100),
    /** Case studies only: permission and measurement record. */
    caseStudy: z
      .object({
        clientPermission: z.boolean(),
        permissionRecord: z.string(),
        baselinePeriod: z.string(),
        measurementPeriod: z.string(),
        dataSource: z.string(),
        services: z.array(z.string()),
        market: z.string().optional(),
        confounders: z.array(z.string()),
      })
      .optional(),
  })
  .superRefine((fm, ctx) => {
    if (fm.type === 'service' && !fm.serviceId) ctx.addIssue({ code: 'custom', message: 'Service pages need serviceId' });
    if (fm.type === 'article' && !fm.category) ctx.addIssue({ code: 'custom', message: 'Articles need a category' });
    if (fm.type === 'city' && (!fm.geo.city || !fm.geo.state)) ctx.addIssue({ code: 'custom', message: 'City pages need geo.city and geo.state' });
    if (PUBLIC_STATUSES.includes(fm.status) && fm.type === 'case-study' && !fm.caseStudy?.clientPermission)
      ctx.addIssue({ code: 'custom', message: 'A case study cannot be public without recorded client permission' });
    if (fm.status === 'Published' && !fm.published) ctx.addIssue({ code: 'custom', message: 'Published pages need a real publication date' });
  });

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export const sourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  publisher: z.string(),
  url: z.string().url(),
  published: z.string().nullable(),
  retrieved: isoDate,
  dataYear: z.string().nullable().optional(),
  geography: z.string().nullable().optional(),
  measures: z.string().optional(),
  limitations: z.string().optional(),
  kind: z.enum(['official-docs', 'government-data', 'industry-research', 'standard', 'legal', 'observation', 'other']),
});
export type Source = z.infer<typeof sourceSchema>;
