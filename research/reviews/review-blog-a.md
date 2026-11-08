# Independent review — batch review-blog-a (2026-11-08)

Reviewer: independent editor/fact-checker (agent). Every cited source for the 14 articles was re-fetched on 2026-11-08 with curl (no 403s were hit in this batch) and the page wording was checked against the source text. Validation: `node scripts/check-mdx.mjs` OK for all 15 files; `npm run content:check -- --filter /blog/` reports no Problems.

Cross-cutting finding: Google's local ranking help page (support.google.com/business/answer/7091) now says local results are "mainly based on relevance, distance, and popularity", while its section heading for the third factor is still "Prominence". Pages that paraphrased the summary sentence as "relevance, distance and prominence" were corrected in this batch. **Outside this batch**, the same paraphrase appears in `content/services/local-seo-multi-location-clinics.mdx` (FAQ and limits section) and `content/services/dental-local-seo-google-business-profile.mdx` (KeyAnswer); the owners of those pages should align the wording.

Overlap checks: articles 7–10 (match types, negatives, emergency, budget) each own a distinct question; shared material is limited to one-line references (30-conversion guidance, primary/secondary conversions) with links. S2 summarises match types and budget in a paragraph each and links to the articles. Articles 4–6 vs S5: S5 summarises the ranking factors in a table and links to article 4 for diagnosis and article 6 for practitioner rules; article 5's practitioner section was cut back to a pointer to article 6, and article 4's duplicates paragraph now defers to article 6.

## /blog/why-dental-websites-do-not-rank/
- Decision: **Ready** (3,024 words).
- Changed: local-ranking sentence corrected (popularity/prominence); "free" removed from the checklist link; description trimmed to 156 characters.
- Remaining risks: slightly above the ~2,800 target; Search Console status names may change.

## /blog/dental-seo-cost/
- Decision: **Ready** (2,487 words).
- Changed: reporting bullet narrowed to what Google's third-party policy requires (separate Business Profile data where other platforms are reported).
- Remaining risks: none beyond policy drift; no prices stated by design.

## /blog/how-long-dental-seo-takes/
- Decision: **Ready** (2,277 words).
- Changed: none required; all quotations and Business Profile timings confirmed.
- Remaining risks: Google may add or remove timing language on "Do you need an SEO?".

## /blog/google-maps-visibility-for-dentists/
- Decision: **Ready** (2,487 words).
- Changed: verification paragraph rewritten (current page no longer says verification makes a profile "more likely to show"); unsupported "Google detects categories from your website" replaced with the sourcing page's statement on crawled web content; KeyAnswer aligned with Google's headings; duplicates paragraph shortened with link to article 6; description trimmed.
- Remaining risks: factor explanation partly parallels S5's table (different format and purpose; acceptable).

## /blog/dental-google-business-profile-suspension/
- Decision: **Ready** (2,597 words).
- Changed: practitioner-rules section replaced with a short check and link to article 6; metaTitle shortened to 54 characters.
- Remaining risks: Google changes the appeals tool and evidence list without notice.

## /blog/dentist-practice-google-business-profiles/
- Decision: **Ready** (2,975 words).
- Changed: closing sentences reworded so they describe only what S5 and the audit page state (removed "starts with that inventory" and "includes a check of every profile").
- Remaining risks: departing-associate section is reasoning, labelled as such; slightly above ~2,800 words.

## /blog/dental-google-ads-keyword-match-types/
- Decision: **Ready** (2,584 words).
- Changed: description trimmed to 159 characters.
- Remaining risks: AI Max and prioritisation rules change often.

## /blog/dental-google-ads-negative-keywords/
- Decision: **Ready** (2,288 words).
- Changed: closing sentence softened ("quick, low-risk improvement" → "low-risk place to start").
- Remaining risks: list limits may change.

## /blog/emergency-dental-advertising/
- Decision: **Ready** (2,261 words).
- Changed: description trimmed to 157 characters.
- Remaining risks: none; no clinical guidance given.

## /blog/dental-google-ads-budget/
- Decision: **Ready** (2,463 words).
- Changed: added Keyword Planner's note that sensitive health keywords often return no results; clarified which Google page does not address healthcare privacy; description trimmed. All illustrative arithmetic rechecked.
- Remaining risks: Target CPA label transition (June 2026) may finish and change wording.

## /blog/dental-implant-advertising/
- Decision: **Ready** (3,017 words).
- Changed: metaTitle shortened to 58 characters; description trimmed.
- Remaining risks: slightly above ~2,800 words; Regulation Z summary is limited to triggering terms and points to counsel; state dental-board advertising rules not covered.

## /blog/dental-website-conversion-audit/
- Decision: **Ready** (2,494 words).
- Changed: metaTitle shortened to 54 characters.
- Remaining risks: DOJ guidance is informal (2022); ADA web obligations for businesses may change.

## /blog/wordpress-vs-nextjs-dental-websites/
- Decision: **Ready** (2,306 words).
- Changed: the flagged word "best" was no longer present in the file at review time (content:check reports no Problems); description trimmed to 156 characters.
- Remaining risks: version and support dates (Next.js 15 security releases to 31 Jan 2027) will date quickly.

## /blog/dental-online-booking-vs-request-forms/
- Decision: **Ready** (2,324 words).
- Changed: added link to article 12 for detailed form checks; description trimmed.
- Remaining risks: no dental no-show data exists to cite; stated as such.

## /blog/ (hub)
- Decision: **Ready** (406 words, blog-hub type).
- Changed: websites-and-conversion summary now mentions call tracking (dental-call-tracking is in that category); verificationNotes updated.
- Remaining risks: hub lists categories automatically; linked editorial policy and resources pages are still Drafted and will render as plain text until Ready.
