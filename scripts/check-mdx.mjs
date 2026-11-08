// Compile-check MDX files: node scripts/check-mdx.mjs content/blog/a.mdx [more files]
import fs from 'node:fs';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';

let failed = 0;
for (const file of process.argv.slice(2)) {
  const { content } = matter(fs.readFileSync(file, 'utf8'));
  try {
    await compile(content, { remarkPlugins: [remarkGfm] });
    console.log(`OK   ${file}`);
  } catch (e) {
    failed++;
    console.log(`FAIL ${file}: ${e.message} (line ${e.line ?? e.place?.line ?? '?'})`);
  }
}
process.exit(failed ? 1 : 0);
