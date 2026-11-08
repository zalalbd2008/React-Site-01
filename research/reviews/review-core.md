# Independent review — batch review-core (2026-11-08)

Reviewer: independent editor/fact-checker (not the writer). Sources re-opened via curl on 2026-11-08; eCFR via the versioner API (title 16 as of 2026-11-05). No 403s bypassed. Not touched: `/leadership/` (Blocked), `/who-we-help/` (still in progress with another writer).

## / (home) — Ready (2,722 words)
- Changed: calculator description corrected (tool works forward from spend; it does not work backwards from target visits); OAI-SearchBot sentence now includes OpenAI's "can still appear as navigational links" exception; Business Profile access wording fixed (no view-only role — manager is the minimum); removed "fastest lever" comparative and "we will say so" promise; replaced an example "300 percent" claim; condensed the five funnel definitions into a paragraph that links to the metrics glossary (query owner); description trimmed to 157 chars.
- Checked: business facts (Houston, remote nationwide, TX/FL/GA/Greater LA only, nine services), no proof claims, links to services, state hubs, resources, audit. Google local-ranking page now summarises factors as "relevance, distance, and popularity" while its sections define "prominence"; page uses prominence with a gloss.
- Risks: state hubs (TX, GA Planned; FL, CA Drafted) and most city pages are not Ready, so those links render as plain text in production. Services still need owner confirmation (owner input #6).

## /about/ — Ready (713 words)
- Changed: claims list converted to a rule / how-to-check table (adds a visual); removed link and related entry for Blocked `/leadership/`; softened promises into method; clarified strategy calls are answered by email, not booked.
- Risks: owner inputs #1, #4, #5 (legal name, contact details, leadership) still open.

## /our-process/ — Ready (1,677 words)
- Changed: Business Profile has no view-only role (Business Profile Help, owners & managers) — access list and diagnosis paragraph corrected; removed implied "short" duration; whitespace fix.
- Risks: none beyond owner input #6.

## /editorial-policy/ — Ready (1,244 words)
- Checked Google "Creating helpful… content" (last updated 2026-10-05): AI disclosure questions, date-refresh warning, fabricated creator profiles = deception — all supported.
- Changed: removed Blocked `/leadership/` link/related; "first published" shown once live; corrections routed via form "Other"; clinical-review sentence made a requirement (no implied client history).

## /dental-marketing-audit/ — Ready (1,122 words)
- Changed: added "What you receive" table (summary, findings with evidence, priority order, what not to spend on, measurement limits, practice-side actions), "does not include" paragraph, reviews and AI-fact checks within Visibility, ad schedules/primary-vs-secondary conversions in Advertising, a fourth FAQ; removed "no conflict in your market" (implied exclusivity — owner input #6); access wording sourced (Ads, Search Console, Business Profile Help).
- No turnaround, price or free-work promise; charge/scope/timing "confirmed in writing before review work starts".
- Risks: form fails closed until owner input #2; whether the audit is charged is undecided (owner input #7).

## /contact/ — Ready (335 words, utility)
- Changed: added "What happens after you send it" (delivery confirmation behaviour matches InquiryForm/route.ts; no timing promised) and a privacy/corrections/accessibility routing section.
- Risks (launch blocker): the form is the only contact channel; it requires practice name/website/location on every request (website regex rejects "n/a"), and it returns 503 until a destination is configured (owner inputs #2, #4). Privacy, correction and accessibility requests from non-practices cannot currently be sent.

## /case-studies/ — Ready (797 words)
- Changed: 255.2(b) paraphrase tightened (experience on a key attribute; disclose generally expected performance); 465.2 paraphrase now reflects (a) write/create/sell and (b) buy/disseminate when knew or should have known.

## /markets/ — Ready (827 words)
- Changed: removed claims that state/city pages already cover each metro; added priority-market coverage table built from planned city routes under content/markets/ (California = Los Angeles County cities only); clarified pages are published in stages.
- Risks: table lists planned cities; if a city is dropped, update the table.

## /resources/ — Ready (326 words, hub)
- Changed: removed "free" from description; methodology link text no longer implies AI-answer observations exist.

## /privacy-policy/ — Ready for preview (statusReason: counsel review, owner input #14, before launch) (1,360 words)
- Verified against inquiry.ts, inquiry-shared.ts, delivery.ts, analytics.ts, Consent.tsx, InquiryForm.tsx, route.ts, layout.tsx, fonts.ts.
- Corrected: campaign (UTM) values are read when the form is submitted, from the page where it is submitted — `readAttribution()` is only called in `onSubmit`, so the "first landing page" description was wrong — and this happens regardless of analytics consent; if analytics are allowed GA also records page views/automatically collected data and uses cookies (gtag config sends page_view by default); site events carry only request type and chosen challenge; preview-only file sink disclosed; requests routed via form "Other".
- Visible "Draft pending legal review" callout retained.
- Developer note (not changed — outside batch): if attribution from the landing URL is intended, `readAttribution()` must be called on first page load; update the policy if that changes. `anonymize_ip` has no effect in GA4; the policy does not claim IP anonymisation.

## /terms/ — Ready for preview (statusReason: counsel review, owner input #14) (660 words)
- Changed: "free tools" → "online tools" (description, lede, body). Calculator "not sent to us" confirmed (no fetch in GrowthCalculator.tsx).
- Risks: legal name (#1), governing law and venue open.

## /accessibility/ — Ready (607 words)
- Verified skip link, lang, focus-visible, reduced motion, landmarks, labelled fields, aria-live status, focusable table regions in code.
- Changed: skip-link name matches code; contrast sentence now uses recalculated ratios (≈5.9:1–15:1). The ratio comments in src/app/globals.css are slightly wrong (documented 8.9/6.1/6.0 vs computed 8.4/5.9/6.3 — all still pass 4.5:1); developer should correct them. Reporting section now states the form is currently the only channel.
- Risks: no independent audit; same contact-channel blocker as /contact/.

## /resources/dental-marketing-metrics/ — Ready (3,121 words)
- Re-opened all 11 Google sources; definitions match (incl. GBP calls = call-button clicks, views once per day, organic + Ads, verified profiles only; Ads click counted even if site unavailable; conversion rate can exceed 100%; engaged session rules).
- Changed: added explicit four-test rule for a qualified inquiry (matrix opportunity).
- Risk: slightly above the ~2,800 guide; not trimmed because it is the canonical definitions owner.

## /resources/dental-growth-calculator/ — Ready (1,657 words)
- Formula table matches `calculate()`/`validate()` in src/lib/calculator.ts exactly; rounding and dash rules match GrowthCalculator.tsx; defaults = DEMO_INPUTS, labelled illustrative four times; worked example recalculated. No changes needed.

## /resources/dental-website-audit-checklist/ — Ready (2,272 words)
- Re-checked web.dev CWV, WCAG 2.2 target size, GA4 key events and URL builders, 16 CFR 465.4. Description shortened. HIPAA sentence hedged; HHS not cited (403).

## /resources/dental-agency-comparison-scorecard/ — Ready (1,862 words)
- Corrected: Google's one-admin warning concerns losing access to tags. Added call-tracking numbers/recordings, hosting, review accounts and creative to ownership; permission, definitions and production vs collections to evidence (matrix opportunities). Totals re-checked.

## /resources/research-methodology/ — Ready (1,273 words)
- Corrected the claim that no observation sets existed: research/competitors and research/local hold small agency/practice samples observed 2026-11-08; research/ai-visibility is empty. Page now states no study is published, nothing on the site is a study finding, and no AI answer samples exist yet. Record fields aligned with how observations were captured (curl retrieval; screenshots only where kept).
