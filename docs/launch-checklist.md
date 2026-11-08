# Launch checklist

Production launch has **not** been authorised. Complete every item; ask the owner for approval of the final live release.

## Before approval (reviewable work)

- [ ] Owner inputs resolved or consciously deferred (`docs/owner-inputs.md`), especially #1 legal name, #2 inquiry destination, #5 leadership, #11 old URLs, #13 repository/hosting, #14 legal review of privacy policy and terms.
- [ ] Every route intended for launch is `Ready` after page-level review (see `docs/route-report.md`). Pages that are not ready stay `Drafted` and are invisible in production.
- [ ] `npm test` passes.
- [ ] `npm run content:check` shows no Problems for Ready routes.
- [ ] `SITE_ENV=production next build` succeeds with no type errors.
- [ ] `scripts/release-check.mjs` against the production build: 0 failures (statuses, canonicals, titles, H1s, JSON-LD, sitemap, robots, llms.txt, 404s for drafts, orphans, broken links, secrets).
- [ ] `scripts/e2e.mjs` passes on a preview build with the test sink.
- [ ] Manual accessibility review (keyboard, focus, zoom 200%/400%, screen reader headings, reduced motion, contrast) at 360, 390, 768, 1024, 1440 px.
- [ ] Lab performance check (Lighthouse/PageSpeed) of home, a service page, a city page and an article on mobile; fix LCP/CLS/INP issues found. (Lab data finds problems; it is not field data.)
- [ ] Schema validated with validator.schema.org; Rich Results Test only for supported features (Breadcrumb, Article). Unsupported types are not errors.
- [ ] Privacy policy and terms reviewed by counsel.

## Go-live (after approval)

- [ ] Set production env vars (`SITE_ENV=production`, inquiry destination, analytics ID). No `PREVIEW_PASSWORD`.
- [ ] Set real `published` dates on Ready pages (the launch date), and status `Published`.
- [ ] Point DNS for `alphadentalmedia.com`; `www` → apex redirect. Verify HTTPS certificate.
- [ ] Verify on the production hostname: `curl -I https://alphadentalmedia.com/` → 200, no `X-Robots-Tag: noindex`; `https://www.alphadentalmedia.com/` → single 308 to apex; `/services` → single 308 to `/services/`.
- [ ] View source on 5 representative pages: canonical, title, description, H1, JSON-LD all present without JavaScript.
- [ ] `robots.txt` allows crawling and lists the sitemap; `sitemap.xml` lists only published URLs; `llms.txt` lists only published URLs.
- [ ] Send a real test inquiry with designated test details; confirm it arrives at the destination and the success page appears only after acceptance. Confirm a failure (temporarily wrong webhook) shows the retry message.
- [ ] Check host firewall/bot protection is not blocking Googlebot, Bingbot or OAI-SearchBot.

## After go-live (requires account access — currently incomplete)

- [ ] Google Search Console: add Domain property (DNS TXT), submit `https://alphadentalmedia.com/sitemap.xml`, inspect `/`, one service, one city, one article; request indexing.
- [ ] Search Console now has a setting to include or exclude a site from Search generative AI features, and a Generative AI performance report (AI Overviews and AI Mode impressions; all sites since 31 Aug 2026). Leave the site included unless the owner decides otherwise; do not apply nosnippet / data-nosnippet / max-snippet by default. Open the report once data accrues.
- [ ] Bing Webmaster Tools: import from Search Console or verify; submit sitemap.
- [ ] GA4: confirm consent banner, verify `audit_request_accepted` arrives once per accepted submission and carries no personal data; mark it as a key event.
- [ ] CRM: add the `qualified_lead` stage and record qualification for each inquiry (service, market, source).
- [ ] Start the AI-visibility sample (`docs/ai-visibility-plan.md`) — day 0 baseline.
