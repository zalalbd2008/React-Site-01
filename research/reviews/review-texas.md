# Independent review — batch review-texas (2026-11-08)

Reviewer: independent editor/fact-checker (not one of the three writers). Scope: `/markets/texas/` and the 14 Texas city pages. Sources re-opened on 2026-11-08 with curl; no 403 was bypassed (api.census.gov now requires a key, so the keyless data.census.gov table API used by `scripts/census.mjs` was used instead). No `next build`, no servers.

## Data and sources checked

- **ACS 2020–2024 (data-vintage policy).** First-wave pages (hub, Houston, Dallas, Fort Worth, Austin, San Antonio) were written with 2019–2023 values. Re-pulled with `node scripts/census.mjs "<City>" TX` (five cities) and the data.census.gov table API (`ACSDP5Y2024.DP02–DP05`) for the Houston, DFW, Austin and San Antonio metros and Texas; every figure on those six pages, the dependent wording and the tables were updated. Values with MOEs appended to `research/local/texas-{state,houston,dallas,fort-worth,austin,san-antonio}.md` ("Review update" sections). Cross-check: the re-pulled Dallas, Fort Worth and DFW values are identical to those already used by the wave-2 pages.
- **Source ids.** In `content/sources/markets-tx1.json` the ten `census-acs-2023-*` entries were removed; new `census-acs-2024-houston-city-tx`, `-austin-city-tx`, `-san-antonio-city-tx`, `-houston-msa`, `-austin-msa`, `-san-antonio-msa` added. Dallas, Fort Worth, DFW metro and Texas reuse the existing ids in `markets-tx2a.json` (same URLs). No page cites a 2019–2023 id any more.
- **Wave-2 spot-check.** `census.mjs` re-run for all nine wave-2 cities: language, Spanish, limited English, uninsured, income, owner-occupancy, age and commute values match the pages.
- **Vintage 2025.** CB26-80 (cities) and CB26-56 (counties/metros) re-opened; SUB-EST2025_48 re-downloaded. Verified: Fort Worth 2nd-largest numeric gain after Charlotte (+19,512); San Antonio 3rd; Houston 6th; McKinney 10th; five fastest-growing cities of 20,000+ all Texan (four DFW suburbs + Fulshear); Hutto 13th; Austin crossed 1 million; metro ranks (Houston 1st, DFW 2nd, Austin 6th, San Antonio 9th); five Texas counties in the top 10 numeric gains; "outer edges … especially pronounced in Texas" quote; four-metro share 68.8% of state and 87.5% of 2024–25 gain; all city base/2025 values and the county figures used for Arlington, El Paso, Corpus Christi, Lubbock, McKinney and Round Rock tables.
- **Superlatives against all 14 cities.** "Highest/lowest of the cities we cover" claims were recomputed across all 14 places (2020–2024): Frisco highest under-18 (27.2%), longest commute (28.6) and highest work-from-home (37.8%); Irving highest under-5 (8.1%), lowest 65+ (8.7%), lowest owner-occupancy (38.1%), highest foreign-born (42.5%); Plano highest median age (39.6). Batch-relative wording ("in this batch") removed. Irving's "fewest in the same house" claim was false across the 14 (Austin, Lubbock, Houston, San Antonio, Round Rock lower) and was removed. Fort Worth's "only one of the five largest cities with a homeowner majority" was false (San Antonio 52.2%) and was corrected.
- **Texas legal sources.** 22 TAC §108.53, §108.55, §108.59 re-read on Cornell LII; page paraphrases match (fee disclosures incl. minimum fee, dates, standard fee, cash-only limit; "free" prohibited with third-party payor incl. Medicaid; "General Dentist/General Dentistry" directly after the name, font no smaller than the largest service term; website disclosures "should clearly disclose" four items). The Texas SOS TAC viewer now redirects to a new portal that could not be read as text, so the hub now states that LII is an unofficial mirror and that counsel should confirm the official text from the Texas Secretary of State. Source entries already carried "Unofficial mirror" limitations.
- **HHSC.** Texas Health Steps (birth through 20 with Medicaid; dental checkups from 6 months), THSteps dental providers (Children's Medicaid Dental Services via dental MCOs; checkups every three to six months) and both comparison charts (M-DECC-PRD-10/01/26, C-DECC-10/01/26: DentaQuest, MCNA Dental, UnitedHealthcare Dental) re-opened; page statements supported.
- **Google Ads language targeting** (September 2026 change) and **Business Profile local ranking** re-opened; wording supported. (Google's summary sentence now says "popularity"; the pages' "prominence" matches the section heading.)
- **Secondary sources.** RCFP call-recording summary now attributed on the hub ("the Reporters Committee … reports/summarises"), not stated as law.
- **Growth calculator.** Code checked (`src/components/GrowthCalculator.tsx`): it works forward from spend and rates to attended visits. Plano, Frisco, El Paso and Austin described it as working backwards or modelling capacity; corrected.

## Manual sibling comparison

Method: all 15 pages read in full side by side, plus a sentence-level similarity scan (city names and numbers normalised, difflib ratio ≥ 0.8) before and after editing. Before: 69 distinct near-duplicate sentence groups of 12+ words outside boilerplate; the largest was the "Can a Houston-based agency run/handle/manage marketing for X?" FAQ, near-identical on 10 pages. After: 36 groups, all short disclosures, market-definition sentences, sample-method sentences or data bullets with different figures (listed below as accepted).

| City | Distinct angle | Evidence | Overlap found | Fix |
|---|---|---|---|---|
| Houston | Intake capacity across languages; corridor catchments | Highest language-other-than-English (47.1%) and limited English (22.1%) of the five largest cities; longest metro commute (29.9 min) | Agency paragraph without sample size; office-visit FAQ implied a Houston office | Sample size added (4 pages); FAQ and intro now say no office address is listed and on-site work is agreed case by case |
| Dallas | Share-of-market core: reviews → neighbourhood relevance → retention → selective ads | +1.9% since 2020, −1,808 in 2024–25; 42.4% owner-occupied | Remote-delivery FAQ shared with 9 pages | Kept here as the one DFW page carrying it (answer is Dallas-specific); siblings rewritten |
| Irving | Recall/reactivation first, then staffed-language content; Las Colinas vs residential | 38.1% owner-occupied (lowest of 14); 42.5% foreign-born; three language groups | Remote FAQ; "Keywords as research candidates" bullet identical to Arlington/Plano/Frisco; Texas Health Steps sentence identical to Arlington; audit closing identical to Arlington/Plano/Frisco/El Paso; final timeline phase identical to El Paso | FAQ → "Should we list every language?"; keyword bullet → language-specific queries; THSteps sentence rewritten around toddlers' first visits; closing now starts from lapsed patients; final phase counts reactivations |
| Plano | Standing out among look-alike offices: reputation → specific service content → narrow ads → recall | +2.6%, −367; 76.7% privately insured; 3 of 5 sampled sites group-branded | Remote FAQ; keyword bullet; audit closing; work-from-home hypothesis repeated on 5 pages | FAQ → look-alike reviews question; keyword bullet → comparison phrases; closing → side-by-side benchmark; WFH hypothesis cut |
| Frisco | Growth-phase decision: when to shift from acquisition to retention | +18.2% since 2020 but +1,796 in 2024–25 (after +8,281) | Remote FAQ; keyword bullet; audit closing; timeline caption | FAQ → multi-office template question; keyword bullet → newcomer phrasing; closing → phase question first; caption tied to verification/hiring |
| McKinney | Defend home ZIPs, then measured tests in growth towns north/east | +20.8%; Melissa/Anna/Princeton +106–156%; Allen +8.4% | Opening, remote FAQ, "channel mix … and why" heading and closing shared with Corpus Christi/Lubbock/Round Rock | All four rewritten; FAQ → "How long should we test a growth town?"; WFH hypothesis cut |
| Fort Worth | New-resident discovery and family clarity; paid search earlier than Dallas | +11.9%; 2nd-largest U.S. numeric gain; 26.4% under 18 | Single-agency criticism (stale population figure) | Replaced with aggregate, counted description |
| Arlington | Catchment boundaries and payer-specific pages | +2.0%, −1,214 while Tarrant +18,428; payer split in sample | Remote FAQ; keyword bullet; audit closing; agency paragraph near-identical to Irving's | FAQ → "Dallas, Fort Worth or Arlington practice?"; keyword bullet → payer/boundary phrases; closing → catchment map; agency paragraph counted and itemised |
| Austin | Website conversion and decision content before paid traffic | 30.7% work from home; 59.6% degree; 5 of 5 sampled sites with online booking | Calculator described as modelling capacity | Corrected; remains distinct from Round Rock (paid last vs paid first) |
| Round Rock | Ad geography that stays out of central Austin | +18.2%; Georgetown +58.5%, Hutto +66.9%; 10.0% limited English | Template opening, remote FAQ, method sentence, heading, closing shared with tx2b siblings | All rewritten; FAQ → reconciling ad-reported Austin conversions with patient ZIPs |
| San Antonio | Reputation and bilingual trust | 63.7% Texas-born; 36.4% Spanish at home vs 12.9% limited English | Listicle-headline reference; FAQ inferred individuals' language preference | Removed; FAQ reworded as a hypothesis |
| El Paso | Spanish-language depth and payment clarity in a flat market | 63.7% Spanish at home; +0.6%; 35.0% public coverage | Remote FAQ; audit closing; final timeline phase (same as Irving); hreflang and ads text duplicated within the page; 2,981 words | FAQ → who checks the Spanish; closing → Spanish-path walk-through; phase made language-specific; trimmed to 2,794 |
| Corpus Christi | Conversion-first in a fixed pool; storm-season listing accuracy | −0.3% since 2020; 17.8% uninsured; 1 of 5 sampled sites with self-scheduling | Template opening, remote FAQ, heading, closing | Rewritten; FAQ → who updates listings during a closure |
| Lubbock | Near-office visibility, always-available booking, short weeks | Median age 30.5; 16.3-min commute; 3 of 5 sampled sites closed/half-day Fridays | Template opening, remote FAQ, method sentence, heading, closing | Rewritten; FAQ → profile upkeep when many residents are new |

Channel orders after review (all distinct): Dallas reviews-first; Irving recall-first; Plano reputation + distinctiveness; Frisco maps + capacity-sized ads with a phase check; McKinney home ZIPs then two-zone ads; Fort Worth profile then new-resident search ads; Arlington catchment then payer pages; Austin conversion/content first, paid last; Round Rock paid-geography first; Houston intake/measurement first; San Antonio reputation first; El Paso bilingual visibility then payment clarity; Corpus Christi website conversion first; Lubbock near-office profile and reviews.

Residual, accepted similarity: one-line "no local office, no local clients or results" disclosures (required on every page), "'X' here means the incorporated city" definitions, sample-method sentences, `<SourceNote>` lines and the shared observation-table format required by the city brief.

## Page entries

### /markets/texas/ — Ready (2,815 words)
- Changed: ACS table and FAQ to 2020–2024; added a 14-city relationship table (metro/division, V2025 change, page lead) and rewrote "How the cities relate" so every city page is linked in prose by metro and division (DFW's two divisions, Austin/Round Rock, three stand-alone metros); added a sentence on wider language spread (El Paso, Frisco, Irving); removed office implications ("no other Texas offices"); LII stated as unofficial mirror; RCFP attributed; "five-city samples" corrected to per-city samples; city-list FAQ now names all 14; metaTitle shortened.
- Risks: city table summarises page leads — update it if a city page's channel order changes.

### /markets/texas/houston/ — Ready (2,681 words)
- Changed: ACS 2020–2024 (city, metro, Texas incl. income); agency paragraph with sample size; office/visit wording; capacity promise reworded as an audit finding.
- Risks: practice sample of five, non-random; Vietnamese/Chinese observation is from the sample only (no Census language detail beyond groups).

### /markets/texas/dallas/ — Ready (2,375 words)
- Changed: ACS 2020–2024 and dependent wording; agency paragraph restated (three pages readable; one 403 not used); removed "best" wording.
- Risks: agency sample thin (3 readable).

### /markets/texas/fort-worth/ — Ready (2,184 words)
- Changed: ACS 2020–2024; corrected two comparisons ("younger", homeowner-majority uniqueness); agency paragraph aggregated; $79 offer tied to observation source.
- Risks: 6 FAQs (minimum of range).

### /markets/texas/austin/ — Ready (2,082 words)
- Changed: ACS 2020–2024 (WFH now 30.7%; Houston 13.0% cited); agency counts; calculator note. Kept ≥ 2,000.
- Risks: practice sample biased toward online booking by query wording (disclosed on page).

### /markets/texas/san-antonio/ — Ready (2,234 words)
- Changed: ACS 2020–2024 incl. Hispanic, birthplace and coverage; superlatives limited to the five largest cities; agency paragraph; Spanish-preference FAQ reworded as hypothesis.
- Risks: sample all north-side and query-biased (disclosed).

### /markets/texas/arlington/ — Ready (2,585 words)
- Changed: remote FAQ, keyword bullet, closing and timeline caption rewritten; agency paragraph counted.
- Risks: four-site sample.

### /markets/texas/plano/ — Ready (2,607 words)
- Changed: superlative corrected; agency criticism removed; calculator note; FAQ, keyword bullet, closing, caption rewritten; WFH hypothesis cut; description ≤ 160.
- Risks: three agency pages only.

### /markets/texas/frisco/ — Ready (2,412 words)
- Changed: lede (McKinney grew faster), superlatives vs 14 cities, single-agency criticisms removed, calculator note, FAQ/keyword bullet/closing/caption rewritten.
- Risks: ACS predates part of the growth (disclosed); one-year slowdown may be revised.

### /markets/texas/irving/ — Ready (2,652 words)
- Changed: false same-house comparison removed; superlatives verified vs 14; agency paragraph itemised; FAQ, keyword bullet, THSteps sentence, closing, final phase, caption rewritten.
- Risks: Las Colinas daytime population unavailable (page says so).

### /markets/texas/el-paso/ — Ready (2,794 words)
- Changed: trimmed from 2,981; single-agency Medicaid criticism removed; calculator note; FAQ, closing, final phase, caption rewritten; description ≤ 160.
- Risks: no cross-border patient data (page says so).

### /markets/texas/mckinney/ — Ready (2,703 words)
- Changed: opening, remote FAQ (→ test length), heading, closing rewritten; agency paragraph aggregate; WFH hypothesis cut.
- Risks: five-site convenience sample only.

### /markets/texas/corpus-christi/ — Ready (2,659 words)
- Changed: opening, remote FAQ (→ storm-procedure ownership, no response-time promise), heading, closing rewritten; agency claim aggregated; description ≤ 160.
- Risks: health coverage ≠ dental benefits (stated on page).

### /markets/texas/lubbock/ — Ready (2,415 words)
- Changed: opening, remote FAQ (→ profile upkeep), method sentence, heading, closing rewritten.
- Risks: Texas Tech enrollment from the university's own release.

### /markets/texas/round-rock/ — Ready (2,415 words)
- Changed: opening, remote FAQ (→ ad-conversion reconciliation), method sentence, heading, closing rewritten; description ≤ 160.
- Risks: five-site convenience sample only.

## Cross-batch risks

- Services still need owner confirmation (owner input #6); city pages describe methodology only.
- The official Texas Administrative Code could not be read as text (SOS portal migration); LII is unofficial and pages say so.
- All practice/agency observations are single-day, 3–5-site convenience samples; every page labels them as such.
