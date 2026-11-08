// Release checks against a running server (default http://localhost:3200).
// Usage: BASE=http://localhost:3200 node scripts/release-check.mjs [--json out.json]
// Run against a PRODUCTION build (SITE_ENV=production) to check what will go live.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const BASE = process.env.BASE || 'http://localhost:3200';
const ORIGIN = 'https://alphadentalmedia.com';
const root = path.resolve(import.meta.dirname, '..');
const outIdx = process.argv.indexOf('--json');
const failures = [];
const warnings = [];
const fail = (route, msg) => failures.push(`${route}: ${msg}`);
const warn = (route, msg) => warnings.push(`${route}: ${msg}`);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : d.name.endsWith('.mdx') && !d.name.startsWith('_') ? [p] : [];
  });
}
const entries = walk(path.join(root, 'content')).map((f) => matter(fs.readFileSync(f, 'utf8')).data);
const PUBLIC = ['Ready', 'Published'];
const publicRoutes = new Set(entries.filter((e) => PUBLIC.includes(e.status)).map((e) => e.route));
const hiddenRoutes = entries.filter((e) => !PUBLIC.includes(e.status)).map((e) => e.route);

async function get(url, opts = {}) {
  const res = await fetch(url, { redirect: 'manual', ...opts });
  const text = res.headers.get('content-type')?.includes('text') || res.headers.get('content-type')?.includes('xml') || res.headers.get('content-type')?.includes('json') ? await res.text() : '';
  return { status: res.status, headers: res.headers, text };
}

const attr = (html, re) => (html.match(re) || [])[1];
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');

const BANNED_TYPES = ['Dentist', 'MedicalClinic', 'Physician', 'ProfessionalService', 'LocalBusiness', 'MedicalBusiness'];
const report = [];
const titles = new Map();
const descs = new Map();
const inbound = new Map();

async function checkPage(route) {
  const { status, headers, text: html } = await get(BASE + route);
  const row = { route, status };
  report.push(row);
  if (status !== 200) return fail(route, `HTTP ${status}`);
  if (headers.get('x-robots-tag')?.includes('noindex')) fail(route, 'X-Robots-Tag noindex on a published page');
  const robots = attr(html, /<meta name="robots" content="([^"]+)"/);
  if (robots?.includes('noindex')) fail(route, `meta robots ${robots}`);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
  row.canonical = canonical;
  if (canonical !== ORIGIN + route) fail(route, `canonical ${canonical} ≠ ${ORIGIN + route}`);
  if (!/<html lang="en-US"/.test(html)) fail(route, 'missing lang="en-US"');
  const title = attr(html, /<title>([^<]+)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]+)"/);
  row.title = title;
  if (!title) fail(route, 'no <title>');
  if (!desc) fail(route, 'no meta description');
  if (title) titles.set(title, [...(titles.get(title) || []), route]);
  if (desc) descs.set(desc, [...(descs.get(desc) || []), route]);
  if (title && title.length > 65) warn(route, `title ${title.length} chars may truncate`);
  if (desc && desc.length > 165) warn(route, `description ${desc.length} chars may truncate`);
  if (!/<meta property="og:title"/.test(html)) fail(route, 'no og:title');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  row.h1 = h1s;
  if (h1s !== 1) fail(route, `${h1s} h1 elements`);
  // Heading order: no skipped level inside the article (h2 -> h4).
  const levels = all(html.split('<footer')[0], /<h([1-6])[\s>]/g).map(Number);
  for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i - 1] > 1) { warn(route, `heading jump h${levels[i - 1]}→h${levels[i]}`); break; }
  // Main content present without JS.
  const main = html.split('<main')[1]?.split('</main>')[0] ?? '';
  row.htmlWords = (strip(main).match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  if (row.htmlWords < 120) fail(route, `only ${row.htmlWords} words in server HTML`);
  // Images need alt and dimensions.
  for (const img of html.match(/<img[^>]*>/g) || []) {
    if (!/ alt="/.test(img)) fail(route, 'img without alt');
    if (!/ width="/.test(img) || !/ height="/.test(img)) warn(route, 'img without width/height');
  }
  // Structured data.
  const blocks = all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  row.schemaTypes = [];
  for (const b of blocks) {
    try {
      const data = JSON.parse(b);
      const graph = data['@graph'] || [data];
      for (const n of graph) {
        const types = [].concat(n['@type'] || []);
        row.schemaTypes.push(...types);
        for (const t of types) if (BANNED_TYPES.includes(t)) fail(route, `disallowed schema type ${t}`);
        if (n.url && typeof n.url === 'string' && n.url.startsWith('http') && !n.url.startsWith(ORIGIN)) fail(route, `schema url off-domain ${n.url}`);
        if (n.aggregateRating || n.review) fail(route, 'schema contains ratings/reviews');
      }
    } catch (e) {
      fail(route, `invalid JSON-LD: ${e.message}`);
    }
  }
  if (route !== '/' && !row.schemaTypes.includes('BreadcrumbList')) warn(route, 'no BreadcrumbList');
  // Internal links.
  const links = all(html, /<a [^>]*href="([^"#?]*)[^"]*"/g).filter((h) => h.startsWith('/') && !h.startsWith('//'));
  row.links = links.length;
  for (const l of new Set(links)) {
    if (l.startsWith('/_next') || l.startsWith('/api')) continue;
    if (l === route) continue;
    inbound.set(l, new Set([...(inbound.get(l) || []), route]));
  }
  // Drafts never appear as links.
  for (const h of hiddenRoutes) if (links.includes(h)) fail(route, `links to unpublished ${h}`);
  // Placeholder or fabricated markers.
  if (/lorem ipsum|TODO|TBD|\(555\)|555-01/i.test(strip(html))) fail(route, 'placeholder text found');
  return row;
}

async function main() {
  // Infrastructure files.
  const robots = await get(BASE + '/robots.txt');
  if (robots.status !== 200) fail('/robots.txt', `HTTP ${robots.status}`);
  if (/Disallow: \/\s*$/m.test(robots.text) && !/Allow: \//.test(robots.text)) fail('/robots.txt', 'disallows the whole site (preview robots in production?)');
  if (!/Sitemap: https:\/\/alphadentalmedia\.com\/sitemap\.xml/.test(robots.text)) fail('/robots.txt', 'no sitemap line');
  const sm = await get(BASE + '/sitemap.xml');
  const smUrls = all(sm.text, /<loc>([^<]+)<\/loc>/g);
  if (!smUrls.length) fail('/sitemap.xml', 'empty sitemap');
  const smRoutes = smUrls.map((u) => u.replace(ORIGIN, ''));
  for (const r of smRoutes) if (!publicRoutes.has(r)) fail('/sitemap.xml', `contains non-public ${r}`);
  for (const r of publicRoutes) if (!smRoutes.includes(r) && r !== '/contact/') warn('/sitemap.xml', `missing public route ${r}`);
  const llms = await get(BASE + '/llms.txt');
  if (llms.status !== 200) fail('/llms.txt', `HTTP ${llms.status}`);
  for (const h of hiddenRoutes) if (llms.text.includes(ORIGIN + h + ')')) fail('/llms.txt', `lists unpublished ${h}`);
  if (/preview build/i.test(llms.text)) fail('/llms.txt', 'preview note in production');

  for (const r of [...publicRoutes].sort()) await checkPage(r);

  // Unpublished and unknown routes must 404.
  for (const r of [...hiddenRoutes, '/definitely-not-a-page/', '/markets/texas/not-a-city/', '/authors/someone/']) {
    const { status } = await get(BASE + r);
    if (status !== 404) fail(r, `expected 404, got ${status}`);
  }
  // Trailing-slash normalisation: one redirect, to the slash form.
  const ns = await get(BASE + '/services');
  if (![301, 308].includes(ns.status) || !ns.headers.get('location')?.endsWith('/services/')) fail('/services', `no single redirect to /services/ (got ${ns.status} ${ns.headers.get('location')})`);

  // Duplicates and orphans.
  for (const [t, rs] of titles) if (rs.length > 1) fail(rs.join(', '), `duplicate title "${t}"`);
  for (const [d, rs] of descs) if (rs.length > 1) fail(rs.join(', '), `duplicate description`);
  for (const r of publicRoutes) {
    if (r === '/') continue;
    const from = [...(inbound.get(r) || [])];
    if (!from.length) fail(r, 'orphan: no internal links from published pages');
  }
  for (const [target, from] of inbound) {
    if (!publicRoutes.has(target) && target !== '/' && !target.startsWith('/thank-you')) fail([...from][0], `broken internal link ${target}`);
  }

  // Secrets in client bundles.
  const staticDir = path.join(root, '.next', 'static');
  if (fs.existsSync(staticDir)) {
    const files = walkAll(staticDir).filter((f) => f.endsWith('.js'));
    const secretNames = ['RESEND_API_KEY', 'INQUIRY_WEBHOOK_SECRET', 'INQUIRY_WEBHOOK_URL', 'PREVIEW_PASSWORD', 're_'];
    for (const f of files) {
      const t = fs.readFileSync(f, 'utf8');
      for (const s of secretNames.slice(0, 4)) if (t.includes(s)) fail('client bundle', `${path.basename(f)} references ${s}`);
      for (const v of [process.env.RESEND_API_KEY, process.env.INQUIRY_WEBHOOK_SECRET, process.env.PREVIEW_PASSWORD].filter(Boolean)) if (t.includes(v)) fail('client bundle', `secret value present in ${path.basename(f)}`);
    }
  }

  const result = { base: BASE, checkedAt: new Date().toISOString(), published: publicRoutes.size, failures, warnings, pages: report };
  if (outIdx > -1) fs.writeFileSync(process.argv[outIdx + 1], JSON.stringify(result, null, 2));
  console.log(`Checked ${report.length} published pages, ${hiddenRoutes.length} unpublished routes.`);
  console.log(`Failures: ${failures.length}`);
  failures.slice(0, 200).forEach((f) => console.log('  FAIL ' + f));
  console.log(`Warnings: ${warnings.length}`);
  warnings.slice(0, 80).forEach((w) => console.log('  warn ' + w));
  process.exit(failures.length ? 1 : 0);
}

function walkAll(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walkAll(path.join(dir, d.name)) : [path.join(dir, d.name)]));
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
