// Generates docs/route-report.md: one row per route with status, type, words, intent,
// evidence, author/reviewer, visuals, links, schema/canonical checks (if a release-check JSON is given).
// Usage: node scripts/route-report.mjs [release-report.json]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const content = JSON.parse(execFileSync('node', ['--experimental-strip-types', 'scripts/content-report.ts', '--json'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }));
const release = process.argv[2] && fs.existsSync(process.argv[2]) ? JSON.parse(fs.readFileSync(process.argv[2], 'utf8')) : null;
const pages = new Map((release?.pages || []).map((p) => [p.route, p]));
const fails = release?.failures || [];
import matter from 'gray-matter';
function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.mdx') ? [path.join(d, e.name)] : []); }
const fm = new Map(walk(path.join(root, 'content')).map((f) => { const d = matter(fs.readFileSync(f, 'utf8')).data; return [d.route, d]; }));

const counts = {};
for (const r of content.rows) counts[r.status] = (counts[r.status] || 0) + 1;
const lines = [];
lines.push('# Route-by-route report', '');
lines.push(`Generated ${new Date().toISOString().slice(0, 10)} from the content system${release ? ` and the release check of ${release.checkedAt.slice(0, 10)} (${release.base})` : ' (no release-check data supplied)'}.`, '');
lines.push('Status counts: ' + Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(' · '), '');
lines.push('Statuses: **Ready/Published** render in production. **Drafted/Fact-checked** render only in the protected preview. **Researching/Planned/Blocked** render nowhere.', '');
lines.push('| Route | Type | Status | Words (req.) | Primary intent | Evidence | Sources | Author / reviewer | Visual | Related | Checks | Notes / owner inputs |');
lines.push('|---|---|---|---|---|---|---|---|---|---|---|---|');
for (const r of content.rows.sort((a, b) => a.route.localeCompare(b.route))) {
  const f = fm.get(r.route) || {};
  const p = pages.get(r.route);
  const pf = fails.filter((x) => x.startsWith(r.route + ':'));
  const checks = p ? (pf.length ? `FAIL: ${pf.map((x) => x.split(': ').slice(1).join(': ')).join('; ')}` : `200 · canonical ✓ · H1 ${p.h1} · ${(p.schemaTypes || []).filter((t, i, a) => a.indexOf(t) === i).join(', ')}`) : 'not in production build';
  const note = [f.statusReason, (f.verificationNotes || '').slice(0, 140)].filter(Boolean).join(' — ').replace(/\|/g, '/');
  lines.push(`| \`${r.route}\` | ${r.type} | ${r.status} | ${r.words}${r.required ? ` (${r.required})` : ''} | ${String(f.primaryIntent || '').replace(/\|/g, '/')} | ${r.evidence} | ${r.sources} | ${f.author || ''} / ${f.reviewer || 'none claimed'} | ${r.visual ? 'yes' : '—'} | ${(f.related || []).length} | ${checks} | ${note} |`);
}
if (content.problems.length) {
  lines.push('', '## Content problems', '', ...content.problems.map((p) => `- ${p}`));
}
fs.writeFileSync(path.join(root, 'docs', 'route-report.md'), lines.join('\n') + '\n');
console.log(`Wrote docs/route-report.md (${content.rows.length} routes).`);
