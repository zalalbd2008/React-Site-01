import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import type { ComponentPropsWithoutRef } from 'react';
import { Callout, Checklist, DataTable, DecisionTree, Funnel, Illustrative, KeyAnswer, Lanes, Matrix, SourceNote, Timeline } from './mdx/Diagrams';
import { GrowthCalculator } from './GrowthCalculator';
import { InquiryForm } from './InquiryForm';
import { ChildCards, LinkCards } from './mdx/Listings';
import { getEntry } from '@/lib/content';

/** Internal links to routes that are not visible in this build render as plain text, so drafts never leak through body copy. */
function A({ href = '', children, ...rest }: ComponentPropsWithoutRef<'a'>) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    const [beforeHash, hash] = href.split('#');
    const [pathPart, query] = beforeHash.split('?');
    const route = pathPart.endsWith('/') ? pathPart : `${pathPart}/`;
    if (route !== '/' && !getEntry(route)) return <span data-unpublished-link={route}>{children}</span>;
    return (
      <Link href={`${route}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`} {...rest}>
        {children}
      </Link>
    );
  }
  if (href.startsWith('#')) return <a href={href} {...rest}>{children}</a>;
  return (
    <a href={href} rel="noopener" target="_blank" {...rest}>
      {children}
    </a>
  );
}

function Table(props: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className="table-wrap" role="region" aria-label="Table" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

export const mdxComponents = {
  a: A,
  table: Table,
  KeyAnswer,
  Callout,
  Illustrative,
  Funnel,
  Timeline,
  Matrix,
  DecisionTree,
  Lanes,
  Checklist,
  DataTable,
  SourceNote,
  GrowthCalculator,
  InquiryForm,
  ChildCards,
  LinkCards,
};

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      // Content is authored in this repository and reviewed; JS expressions are needed for component props.
      blockJS: false,
      blockDangerousJS: true,
      mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
    },
  });
  return content;
}

/** Source ids referenced by inline <SourceNote ids={[...]} /> so the page's source list always includes them. */
export function inlineSourceIds(body: string): string[] {
  const out = new Set<string>();
  for (const m of body.matchAll(/SourceNote\s+ids=\{\[([^\]]*)\]\}/g)) {
    for (const id of m[1].matchAll(/["']([^"']+)["']/g)) out.add(id[1]);
  }
  return [...out];
}
