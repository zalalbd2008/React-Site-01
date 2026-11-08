/**
 * Bylines. Only verified people may be added here, with a biography the
 * owner has approved. No individual author profiles exist yet, so content is
 * attributed to the organisation's editorial team and no /authors/ pages are
 * generated. See docs/owner-inputs.md.
 */
export type Author = {
  slug: string;
  name: string;
  kind: 'Organization' | 'Person';
  bio: string;
  verified: boolean;
  profileRoute?: string;
  sameAs?: string[];
};

export const authors: Record<string, Author> = {
  'editorial-team': {
    slug: 'editorial-team',
    name: 'Alpha Dental Media editorial team',
    kind: 'Organization',
    bio: 'Written for dental practice owners, managers and dental groups evaluating marketing decisions. Platform guidance is checked against the official documentation cited on the page; clinical topics are out of scope.',
    verified: true,
  },
};

/** People with verified, published profiles. Empty until the owner supplies biographies. */
export const personAuthors = Object.values(authors).filter((a) => a.kind === 'Person' && a.verified && a.profileRoute);
