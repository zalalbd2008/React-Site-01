# Review batch: review-audiences (2026-11-08)

Independent review of `/who-we-help/` and the six audience pages. Sources re-opened directly on 2026-11-08: ADA HPI 2025 practice-modality XLSX (all tabs), HPI State of the U.S. Dental Economy Q3 2026 PDF, HPI Dental Care in Medicaid Programs PDF (Dec 2025), HPI Coverage FAQ page, Medicaid.gov Dental Care page, ADA Code of Ethics 2026 complete PDF, NCRDSCB recognized specialties, Google Business Profile Help answers 9174409, 7107242, 3038177, 13763036, 3403100, 4490296, Google Ads policy 143465, Google SEO Starter Guide, eCFR 16 CFR 255 and 465.

Cross-page finding: the site layout appends ` | Alpha Dental Media` to every metaTitle (`src/app/layout.tsx` title template). Four pages in this batch had the brand written into `metaTitle`, so the `<title>` would show the brand twice; fixed here. 14 metaTitles elsewhere in `content/` still have the same problem (other batches).

Duplication check: 8-gram overlap against every `content/services/*.mdx` page and all blog/resource pages. The largest overlap with any service page was DSO vs S3 (24 shared 8-grams, all frontmatter or link text). No passages were copied. The only overlap in substance was the DSO page's owner/manager role detail and the bulk-verification note, which belong to S3. Both were removed and replaced with a link.

## /who-we-help/
- Decision: Ready (hub, 766 words; no word minimum for this type).
- Checked: HPI Q3 2026 (704; 38%; about one-third recruiting); HPI 2025 (17.0%; GP 16.3, ped 16.6, ortho 24.4; solo range 21.1 to 36.6 holds across all specialty columns).
- Changes: status and verificationNotes only.
- Remaining risks: none material.

## /who-we-help/general-dentists/
- Decision: Ready (2,774 words).
- Changes: wait time made exact ("about 12 business days", reported by owner dentists accepting new patients); ADA Code wording aligned to "false or misleading"; added Code 5.I (general dentists should not imply specialization and should state that services are provided by general dentists) in the body and an FAQ; brand removed from metaTitle.
- Remaining risks: near the top of the target length. State board advertising rules vary; the page already points readers to them.

## /who-we-help/dental-startups/
- Decision: Ready (2,633 words).
- Checked the Google pre-opening rule against answer/9174409: date up to one year ahead, year and month required, profile shows 90 days before opening after verification, no reviews/photos/suggested edits until officially open, "Recently opened" tag for 90 days. The page now matches the help page exactly.
- Changes: added the year-and-month detail; verification wording now says "up to five business days and, on rare occasions, longer"; an unsourced claim in the ads FAQ ("tend to work better") was reworded as a point about control and measurement.
- Remaining risks: Google may change the help page. Re-check before publishing.

## /who-we-help/dental-groups-dsos/
- Decision: Ready (2,497 words).
- Checked: HPI national, early-career (27.1% and 31.4%), specialty and state DSO shares (TX 23.3, FL 24.9, GA 26.1, CA 12.1; statewide, shares of dentists); HPI Medicaid DSO participation (49% in 2024 vs 67% in 2015); Google eligibility and the chain-name and sub-brand rules.
- Changes: removed the owner/manager role detail and the bulk-verification note, which S3 owns; linked to S3 instead; dropped the `google-gbp-owners-managers` and `google-gbp-bulk-verification` citations; new metaTitle "Dental Group and DSO Marketing: Governance and Budget".
- Remaining risks: none material.

## /who-we-help/orthodontists/
- Decision: Ready (2,416 words).
- Changes: ADA Code wording aligned to "false or misleading"; the FAQ claim "tend to convert better" reworded as a measurement point; the fee comparison softened; new metaTitle.
- Remaining risks: how far Medicaid covers orthodontics depends on each state's medical-necessity criteria. The page says so but gives no state detail.

## /who-we-help/pediatric-dentists/
- Decision: Ready (2,435 words).
- Checked: HPI coverage FAQ figures; HPI Medicaid figures (41%; pediatric dentists highest; reimbursement below 50% and 60%); Medicaid.gov statements (EPSDT, required dental referral, CHIP options, InsureKidsNow listing); HPI pediatric practice-size shares (21.1 / 43.8 / 14.3 / 16.6).
- Changes: "tend to be group practices" and "payer mix heavier in public coverage" restated to what the data shows; the referral FAQ now uses Medicaid.gov's own wording (an oral screening does not replace a dental exam; a dental referral is required) instead of inferring physicians' role; Code wording aligned; new metaTitle.
- Remaining risks: none material.

## /who-we-help/cosmetic-and-implant-practices/
- Decision: Ready (2,338 words).
- Changes: removed unsourced performance statements ("lose more revenue at this stage than any other", "no-shows are common", "largest gains", per-case deals being "common", "tends to"/"usually work better"); replaced candidacy content in the body, FAQ and table with wording that says suitability is decided at the consultation, so there is no patient-selection or clinical content; the Google audience statement now says what the policy page says (Health listed; advertiser-curated audiences unavailable; predefined Google audiences allowed; dental not named) and no longer claims a review mechanism; description trimmed to 160 characters.
- Remaining risks: how Google classifies dental ads under the sensitive-category rule is not documented on the page. The page now says this.
