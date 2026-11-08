// Functional browser tests for the lead flow and key interactions.
// Usage: BASE=http://localhost:3300 EXPECT_DELIVERY=ok|unconfigured node scripts/e2e.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// Uses the environment's pre-installed Playwright (see README); falls back to a local install.
const { chromium } = require('playwright');
import assert from 'node:assert/strict';

const BASE = process.env.BASE || 'http://localhost:3300';
const EXPECT = process.env.EXPECT_DELIVERY || 'ok';
const results = [];
const step = async (name, fn) => {
  try {
    await fn();
    results.push(['PASS', name]);
  } catch (e) {
    results.push(['FAIL', `${name}: ${e.message.split('\n')[0]}`]);
  }
};

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const events = [];
await page.exposeFunction('__captureEvent', (e) => events.push(e));
await page.addInitScript(() => {
  const dl = (window.dataLayer = window.dataLayer || []);
  const push = dl.push.bind(dl);
  dl.push = (...a) => {
    a.forEach((x) => window.__captureEvent(JSON.stringify(x)));
    return push(...a);
  };
});

await step('audit page renders form server-side', async () => {
  const res = await page.goto(`${BASE}/dental-marketing-audit/`);
  assert.equal(res.status(), 200);
  await page.getByLabel('Your name (required)').waitFor();
});

await step('empty submit shows accessible field errors and moves focus', async () => {
  await page.waitForTimeout(2600); // minimum fill time guard
  await page.getByRole('button', { name: /send audit request/i }).click();
  await page.locator('.field__error').first().waitFor();
  const invalid = await page.locator('[aria-invalid="true"]').count();
  assert.ok(invalid >= 3, `expected ≥3 invalid fields, got ${invalid}`);
  const focused = await page.evaluate(() => document.activeElement?.getAttribute('name'));
  assert.ok(focused, 'focus moved to a field');
});

await step('clinical-content warning appears for patient details', async () => {
  await page.getByLabel(/anything else/i).fill('patient name John, date of birth 1/1/80');
  await page.getByText(/may contain patient or clinical details/i).waitFor();
  await page.getByLabel(/anything else/i).fill('We want more implant consultations.');
});

await step(`valid submission → ${EXPECT === 'ok' ? 'thank-you only after server acceptance' : 'honest failure with retry'}`, async () => {
  await page.getByLabel('Your name (required)').fill('Test Owner');
  await page.getByLabel('Business email (required)').fill('qa-test@example.com');
  await page.getByLabel('Practice or group name (required)').fill('QA Test Dental');
  await page.getByLabel('Practice website (required)').fill('example.com');
  await page.getByLabel('Main office city and state (required)').fill('Houston, TX');
  await page.getByLabel('Main growth challenge (required)').selectOption('Google Ads performance');
  await page.getByLabel(/may contact me/i).check();
  const [resp] = await Promise.all([
    page.waitForResponse((r) => r.url().includes('/api/inquiry/')),
    page.getByRole('button', { name: /send audit request|try again/i }).click(),
  ]);
  if (EXPECT === 'ok') {
    assert.equal(resp.status(), 200);
    await page.waitForURL(/\/thank-you\/\?type=audit/);
    await page.getByRole('heading', { name: /audit request was received/i }).waitFor();
  } else {
    assert.equal(resp.status(), 503);
    await page.getByText(/not being accepted yet/i).waitFor();
    assert.ok(!page.url().includes('thank-you'), 'must not show success');
    await page.getByRole('button', { name: /try again/i }).waitFor();
  }
});

await step('no personal data in analytics payloads or URL', async () => {
  for (const e of events) assert.ok(!/qa-test@example.com|Test Owner|QA Test Dental/.test(e), `PII in event ${e}`);
  assert.ok(!/qa-test|Owner/.test(page.url()));
});

await step('double-click sends one request', async () => {
  await page.goto(`${BASE}/contact/`);
  await page.waitForTimeout(2600);
  let count = 0;
  page.on('request', (r) => r.url().includes('/api/inquiry/') && r.method() === 'POST' && count++);
  await page.getByLabel('Your name (required)').fill('Test Owner');
  await page.getByLabel('Business email (required)').fill('qa-test@example.com');
  await page.getByLabel('Practice or group name (required)').fill('QA Test Dental');
  await page.getByLabel('Practice website (required)').fill('example.com');
  await page.getByLabel('Main office city and state (required)').fill('Houston, TX');
  await page.getByLabel('Main growth challenge (required)').selectOption('Other');
  await page.getByLabel(/may contact me/i).check();
  const btn = page.getByRole('button', { name: /send call request/i });
  await btn.dblclick();
  await page.waitForTimeout(1500);
  assert.equal(count, 1, `sent ${count} requests`);
});

await step('mobile drawer: opens, traps focus, closes on Escape, returns focus', async () => {
  await page.goto(`${BASE}/`);
  const opener = page.locator('.bottom-bar button[aria-controls="site-drawer"]');
  await opener.click();
  const dialog = page.getByRole('dialog', { name: 'Site menu' });
  await dialog.waitFor();
  for (let i = 0; i < 40; i++) await page.keyboard.press('Tab');
  const inside = await page.evaluate(() => !!document.activeElement?.closest('#site-drawer'));
  assert.ok(inside, 'focus escaped the drawer');
  await page.keyboard.press('Escape');
  await dialog.waitFor({ state: 'detached' });
  await page.waitForTimeout(100);
  const back = await page.evaluate(() => document.activeElement?.getAttribute('aria-controls'));
  assert.equal(back, 'site-drawer');
});

await step('bottom bar hides while a form field has focus', async () => {
  await page.goto(`${BASE}/contact/`);
  await page.getByLabel('Your name (required)').focus();
  const visible = await page.locator('.bottom-bar').isVisible();
  assert.equal(visible, false);
});

await step('no horizontal overflow at 360px on key templates', async () => {
  await page.setViewportSize({ width: 360, height: 780 });
  for (const r of ['/', '/services/', '/dental-marketing-audit/', '/resources/dental-growth-calculator/']) {
    const res = await page.goto(BASE + r);
    if (res.status() !== 200) continue;
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert.ok(over <= 1, `${r} overflows by ${over}px`);
  }
});

await step('calculator handles zero CPC without Infinity', async () => {
  const res = await page.goto(`${BASE}/resources/dental-growth-calculator/`);
  if (res.status() !== 200) throw new Error('calculator page not available in this build');
  await page.getByLabel(/assumed average cost per click/i).fill('0');
  await page.getByText(/must be greater than zero/i).waitFor();
  const text = await page.locator('.calc__out').innerText();
  assert.ok(!/Infinity|NaN/.test(text));
});

await browser.close();
for (const [s, n] of results) console.log(`${s} ${n}`);
process.exit(results.some(([s]) => s === 'FAIL') ? 1 : 0);
