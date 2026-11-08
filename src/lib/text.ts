import GithubSlugger from 'github-slugger';

/** Strip MDX/markdown syntax to approximate the words a reader sees in the main content. */
export function plainText(mdx: string): string {
  return mdx
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<Sources[\s\S]*?\/>/g, ' ') // source lists are excluded from counts
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ') // MDX comments
    .replace(/<[^>]+>/g, ' ') // JSX tags (string props inside tags are skipped)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~-]+/g, ' ');
}

export function countWords(mdx: string, faqs: { q: string; a: string }[] = []): number {
  // Words inside component data props (tables, timelines) count, because readers see them.
  const propText = Array.from(mdx.matchAll(/(?:"|')([^"'\n]{3,})(?:"|')/g))
    .map((m) => m[1])
    .filter((s) => /\s/.test(s) && !/^[\/#.]|^https?:/.test(s))
    .join(' ');
  const text = plainText(mdx) + ' ' + propText + ' ' + faqs.map((f) => `${f.q} ${f.a}`).join(' ');
  return (text.match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) || []).length;
}

export function extractHeadings(mdx: string) {
  const slugger = new GithubSlugger();
  const out: { id: string; text: string; depth: number }[] = [];
  let inFence = false;
  for (const line of mdx.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence;
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (m) {
      const text = m[2].replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
      out.push({ depth: m[1].length, text, id: slugger.slug(text) });
    }
  }
  return out;
}
