# Implementation progress and handoff — 2026-11-09

## Launch status (2026-11-09)

Launch approved by the owner and deployed to Vercel: **https://alphadentalmedia.vercel.app** (117 published pages; live release check 0 failures / 0 warnings; live Lighthouse home: performance 95, accessibility 100, best practices 100). `alphadentalmedia.com` and `www` are attached in Vercel but **DNS must still be pointed at Vercel by the domain owner** (records in docs/deployment.md). Until then the vercel.app address is deliberately noindexed. All Ready pages are now `Published` with date 2026-11-09. `main` and `staging` both contain the deployed code.

Fixed during launch: `proxy.ts` had to live in `src/` to be loaded, so preview password protection, the www redirect and the vercel.app noindex were not active before — they are now verified.


## Summary

The website is built, written, independently reviewed and verified against a production build. **117 of 118 routes are Ready**; `/leadership/` is deliberately Blocked until verified biographies exist. Nothing has been deployed, and no DNS, hosting or paid service was changed. Launch requires the owner inputs listed below and explicit approval.

The code is in GitHub: https://github.com/zalalbd2008/React-Site-01, branch `staging` (pushed 2026-11-09). `main` is untouched and should receive the code only when launch is approved.

## What works

| Area | Status | Evidence |
|---|---|---|
| Next.js 16.4.5 / React 19.3.1 / TypeScript app, static generation for all content | Done | `npm run build` clean, 126 static pages generated |
| Content system (MDX + zod-validated frontmatter + source register) | Done | Invalid content fails the build; `npm run content:check` |
| Publication control (Ready/Published only in production; drafts 404, excluded everywhere) | Done | Release check: unpublished and unknown routes return 404 |
| Navigation: header, accessible drawer, mobile bottom bar, breadcrumbs, scrollspy contents | Done | e2e: drawer focus trap / Escape / focus return; bottom bar hides during form input |
| Inquiry form + server endpoint (validation, honeypot, rate limit, duplicate protection, origin check) | Done; **delivery destination not configured** | e2e: success only after server acceptance; honest error + retry when unconfigured; one request on double-click |
| General requests (privacy, corrections, accessibility) without practice details | Done | Unit tests |
| Growth calculator (zero-denominator and invalid-input handling, ROAS vs profit ROI) | Done | Unit tests + e2e |
| SEO: unique titles/descriptions, self-canonicals, one H1, OG/Twitter, lang, breadcrumbs | Done | Release check: 0 failures, 0 warnings on 117 pages |
| Structured data graph (Organization, WebSite, WebPage types, Service, BreadcrumbList, BlogPosting/Article) | Done | validator.schema.org: 0 errors, 0 warnings (docs/qa/schema-validation-2026-11-08.md) |
| sitemap.xml, robots.txt (OAI-SearchBot allowed), llms.txt from published content | Done | 117 sitemap URLs = 117 published routes |
| Preview protection (Basic auth via `PREVIEW_PASSWORD`, noindex header + meta, robots disallow) | Done | Preview responds `X-Robots-Tag: noindex, nofollow` |
| Consent-gated analytics (loads only with GA ID + consent; no PII in events) | Done; **no analytics account configured** | e2e: no personal data in dataLayer or URLs |
| Accessibility (target WCAG 2.2 AA) | Automated checks pass | axe-core 0 violations; 80/80 checks at 360/390/768/1024/1440 px incl. focus-not-obscured (docs/qa/a11y-responsive-final.txt) |
| Performance (lab) | Good | Lighthouse with devtools throttling (mobile): LCP 1.0–1.8 s, CLS ≈ 0.001, TBT 100–210 ms; perf 96–99, a11y/SEO/best practices 100. Lab data only — not field data. |

## Content delivered

| Type | Routes | Status | Words |
|---|---|---|---|
| Homepage | 1 | Ready | 2,722 |
| Service pages (S1–S9) + hub | 10 | Ready | 2,849–3,337 each |
| Audience pages + hub | 7 | Ready | 2,286–2,774 each |
| State hubs | 4 | Ready | 2,729–2,939 |
| City pages (wave 1: 19, wave 2: 31) | 50 | Ready | 2,082–2,965 each |
| Articles | 28 | Ready | 2,082–3,024 each |
| Resources (metrics glossary, calculator, website checklist, agency scorecard, research methodology) + hub | 6 | Ready | — |
| Company, legal, utility pages | 11 | Ready (privacy/terms pending counsel review) | — |
| Leadership | 1 | **Blocked** — no verified biographies | — |

Long-form total: 98 pages, ~254,000 words of main content. Every long-form page has sources, at least one visual, labelled illustrative examples, FAQs and a specific next step. Full detail: `docs/route-report.md`.

## Research delivered

- Research brief for every page: `research/briefs/`
- National agency competitor study (13 agencies, 12 queries): `research/competitors/national-agency-*.md`, `serp-log.md`
- Per-city agency scans and local practice-website observations (observed → interpretation → action → test): `research/competitors/`, `research/local/`
- Census ACS 2020–2024 data with margins of error for all 50 cities (via `scripts/census.mjs`)
- Independent review logs including manual sibling comparisons per state: `research/reviews/`
- Source register: `content/sources/*.json` (every cited page opened and dated 2026-11-08/09)

## Blocked or incomplete (owner inputs — see docs/owner-inputs.md)

1. ~~GitHub repository~~ — done: `zalalbd2008/React-Site-01`, branch `staging`. Hosting choice still open (#13).
2. **Inquiry destination** (CRM webhook or Resend email) (#2) — the form cannot deliver until set.
3. Booking provider (#3) — "Book a Strategy Call" opens a request form; `consultation_booked` not implemented.
4. Public phone/email/hours (#4) — not displayed; `phone_link_clicked` unused.
5. Leadership bios (#5) — `/leadership/`, author pages and Person schema blocked.
6. Confirmation that all nine services are delivered (#6), legal name (#1), prices if any (#7).
7. Case studies with permission (#8) — none published; evidence standard published instead.
8. Analytics, Search Console, Bing access (#9, #10).
9. Counsel review: privacy policy and terms (#14); official text of FL/TX/GA dental advertising rules (#18); HHS primary documents (#19).
10. AI-visibility baseline (docs/ai-visibility-plan.md) — not yet run; no results claimed.

## Next actions

1. Connect the repository to a host (Vercel recommended): `staging` → protected preview, `main` → production after approval.
2. Owner chooses hosting (Vercel recommended) → configure preview with `PREVIEW_PASSWORD` and the inquiry destination; send a real test inquiry.
3. Counsel review of privacy, terms and state-rule sections.
4. Owner approval for launch → follow `docs/launch-checklist.md` (set published dates, DNS, verification on the production hostname, Search Console/Bing sitemap submission).
5. Day-0 AI visibility baseline, then 30/60/90-day reviews.
6. Maintenance: re-verify platform guidance quarterly (Google Ads naming changes, FCC opt-out rule effective 2026-11-25, Search Console AI reporting), refresh ACS data when the 2021–2025 release appears.
