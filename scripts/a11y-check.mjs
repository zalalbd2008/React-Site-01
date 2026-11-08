// Automated accessibility + responsive sweep. Requires a running server and axe-core installed
// (npm i -D axe-core) or AXE_PATH pointing to axe.min.js.
// Usage: BASE=http://localhost:3200 node scripts/a11y-check.mjs [route ...]
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const BASE = process.env.BASE || 'http://localhost:3200';
const axePath = process.env.AXE_PATH || require.resolve('axe-core/axe.min.js');
const axeSource = fs.readFileSync(axePath, 'utf8');
const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['/', '/services/', '/services/dental-seo-company/', '/who-we-help/orthodontists/', '/markets/', '/markets/florida/', '/markets/georgia/atlanta/', '/blog/', '/blog/dental-group-marketing-dashboard/', '/resources/dental-growth-calculator/', '/resources/dental-agency-comparison-scorecard/', '/dental-marketing-audit/', '/contact/', '/privacy-policy/', '/thank-you/?type=audit', '/does-not-exist/'];
const widths = [360, 390, 768, 1024, 1440];

const browser = await chromium.launch();
let failures = 0;
const summary = [];
for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const res = await page.goto(BASE + route, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    // Sticky bars must not cover the focused element when tabbing through the page with the keyboard.
    let covered = 0;
    for (let i = 0; i < 45; i++) {
      await page.keyboard.press('Tab');
      covered += await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body || el.matches('.skip-link') || el.closest('.site-header, .bottom-bar, .section-nav, #site-drawer')) return 0;
        const r = el.getBoundingClientRect();
        if (!r.height) return 0;
        // WCAG 2.2 SC 2.4.11: the focused element must not be entirely hidden by author-created sticky content.
        const bars = [...document.querySelectorAll('.site-header, .bottom-bar, .section-nav')].filter((b) => getComputedStyle(b).display !== 'none').map((b) => b.getBoundingClientRect());
        const top = Math.max(0, ...bars.filter((b) => b.top <= 1).map((b) => b.bottom));
        const bottom = Math.min(window.innerHeight, ...bars.filter((b) => b.bottom >= window.innerHeight - 1).map((b) => b.top));
        const visible = Math.min(r.bottom, bottom) - Math.max(r.top, top);
        return visible <= 0 ? 1 : 0;
      });
    }
    let axe = { violations: [] };
    if (width === 390 || width === 1440) {
      await page.addScriptTag({ content: axeSource });
      axe = await page.evaluate(async () =>
        // eslint-disable-next-line no-undef
        axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } }),
      );
    }
    const v = axe.violations.map((x) => `${x.id}(${x.nodes.length})`);
    const bad = overflow > 1 || covered > 0 || v.length > 0;
    if (bad) failures++;
    summary.push(`${bad ? 'FAIL' : 'ok  '} ${String(res.status())} ${width}px ${route} overflow:${overflow} focus-covered:${covered} ${v.join(' ')}`);
    await page.close();
  }
}
await browser.close();
console.log(summary.join('\n'));
console.log(`\n${failures} failing checks`);
process.exit(failures ? 1 : 0);
