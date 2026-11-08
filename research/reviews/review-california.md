# Independent review — batch review-california (2026-11-08)

Reviewer: independent editor/fact-checker (not the writers of markets-ca1 or markets-ca2). Scope: `/markets/california/` and the 11 Greater Los Angeles city pages. Briefs followed: docs/review-brief.md, docs/city-brief.md (incl. Data vintage policy), docs/writer-brief.md, docs/authoring-guide.md, docs/business-facts.md, docs/query-ownership.md, research/competitors/national-agency-matrix.md.

## Method and sources re-opened

- **ACS 2020–2024 5-year** (DP02–DP05, C16001) pulled with `node scripts/census.mjs "<City>" CA` for Los Angeles, Long Beach, Pasadena and Glendale, plus the data.census.gov table API for all 11 places, Los Angeles County (0500000US06037), the metro (310XX00US31080) and California (0400000US06). Second-wave values spot-checked against the same pulls: all matched.
- **Vintage 2025** population estimates: `sub-est2025_6.csv` (April 2020 estimates base → July 1, 2025, our arithmetic). Every one of the 11 cities declined: LA city −0.8%, Santa Clarita −1.9%, Pasadena −2.7%, Santa Monica −3.2%, Long Beach −3.5%, West Covina −3.8%, Burbank −4.0%, Glendale −4.8%, Downey −5.1%, Torrance −5.8%, Beverly Hills −5.9%; county −3.2%; California −0.5%.
- **Medi-Cal Dental measures** (CHHS portal CSV `mdsd-multi-year-measures-by-county-cy-2013-to-2024_supp_v2.csv`, metadata modified 2026-07-23): LA County CY 2024, measure "Overall Utilization of Dental Services 1 year", 12 age bands summed: 1,379,973 / 3,495,987 = 39.5%; 0–20: 674,592 / 1,162,603 = 58.0%; 21+: 705,381 / 2,333,384 = 30.2%. Hub figures confirmed.
- **Medi-Cal Dental FFS provider listing** (ArcGIS FeatureServer, data last edited 2025-09-18): distinct NPIs by language, billing city. Los Angeles needed pagination (3,465 rows; 1,868 NPIs) — Spanish 316, Korean 67, Farsi 54, Tagalog 46, Russian 32, Armenian 31. Glendale: Armenian 58, Spanish 39, Russian 29, Farsi 29. Pasadena: Spanish 24, Armenian 12. Long Beach: Spanish 76, Vietnamese 17, Tagalog 16, Farsi 10, Cambodian 7. All page statements confirmed.
- **CCPA/CPRA**: oag.ca.gov/privacy/ccpa ("Updated on August 28, 2026"; thresholds incl. $25 million on that page; exempts certain medical information; GPC "must be honored by covered businesses") and cppa.ca.gov/faq.html ($26.625 million effective 2025-01-01). Hub wording cautious, counsel recommended, no compliance claims.
- **Penal Code 632**: current code page (leginfo.legislature.ca.gov) returned 403 — not bypassed. AB 925 (2015) Legislative Counsel's Digest re-opened; hub and FAQ now say "in 2015 the Legislative Counsel summarised…" rather than "has long required", and recommend counsel.
- **Google**: Ads location options (1722043, 1722038: Presence vs Presence or Interest; "consider Presence… when you only want to target users in specific locations"; nearby related areas), ad scheduling (2404244), local ranking (7091: "relevance, distance, and popularity"; "More reviews and positive ratings can help"), GBP guidelines (3038177: real-world name, address and/or service area), Search Central multilingual (2025-12-10: visible content determines language) and localized versions (2026-09-21: each version lists itself and others). All page claims within what the pages say.

## Source-file changes

- New `content/sources/review-california.json` (23 ids): `acs-2024-dp02/03/04/05-{los-angeles,long-beach,pasadena,glendale}-city`, `acs-2024-c16001-{same four}`, `acs-2024-c16001-la-county`, `acs-2024-dp02-california`, `acs-2024-dp03-california`.
- Reused (not redefined) the 2024 county ids in markets-ca2.json (`acs-2024-dp02/03/04/05-la-county`) and `census-sub-est2025-california`; extended the latter's geography/measures to the first-wave cities and the state row.
- Removed the 40 now-unused 2019–2023 and 2014–2018 entries from markets-ca1.json (no remaining references in content/). Writer briefs in research/briefs/ still mention the old ids as history.

## First-wave values, 2020–2024 (old 2019–2023 in brackets)

| Measure | LA city | Long Beach | Pasadena | Glendale |
|---|---|---|---|---|
| Population | 3,857,263 (3,857,897) | 455,548 (458,491) | 136,969 (136,462) | 190,748 (192,270) |
| Households | 1,439,097 | 170,927 | 57,425 | 72,573 |
| Language other than English, 5+ | 56.4% ±0.3 (56.8) | 44.7% ±0.9 | 41.9% ±1.6 (42.6) | 66.2% ±1.4 (66.0) |
| English less than very well | 25.0% | 16.2% (16.3) | 15.0% | 31.1% (31.0) |
| Spanish at home (C16001) | 39.3% (39.7) | 33.0% (33.2) | 24.2% (25.2) | 13.7% (13.6) |
| Median age | 37.2 | 37.1 (36.8) | 40.1 | 41.4 |
| Under 18 | 19.2% | 19.9% (20.3) | 16.7% | 18.4% |
| Median household income | $81,939 | $87,430 | $105,192 ±3,444 | $88,393 |
| No health insurance | 9.5% (10.0) | 8.4% (9.0) | 5.7% (6.3) | 5.7% (6.7) |
| Public coverage | 42.9% | 39.9% | 36.1% | 42.3% |
| Mean commute (min) | 30.7 (31.1) | 29.9 | 26.9 | 27.1 |
| Owner-occupied | 36.0% (36.3) | 41.2% | 42.5% | 35.2% |
| Worked from home | — | — | 27.6% (23.6) | — |
| SNAP households | — | — | — | 20.3% (18.7) |
| Vintage 2025 change | −0.8% | −3.5% | −2.7% | −4.8% |

County 2020–2024: LOTE 55.1%, LEP 23.4%, Spanish 37.6%, public coverage 41.2%, uninsured 8.2%, median income $90,112, bachelor's+ 36.0%, worked from home 17.1%. California: LOTE 44.4%.

Dependent wording that no longer held and was rewritten: Long Beach "youngest / highest under-18 share of the four" (now below county); Long Beach "densest of the four" (now second to Santa Monica of eleven); Pasadena "smallest of the four" and "coverage different from other cities"; Glendale "highest median age" and "largest decline"; hub "four cities account for 4.6 million" and "county 2.5% lower than 2014–2018".

## Manual sibling comparison (all 12 pages read side by side)

| City | Distinct angle | Evidence | Overlap found | Fix |
|---|---|---|---|---|
| Hub | County structure, scope, cross-city comparison, Medi-Cal, CCPA, PC 632 | lacounty-about, ACS 2024 ×11, V2025, DHCS CSV, AG/CPPA, AB 925 | Linked only 4 cities; 4-city table; "four researched cities" in FAQ and decision tree | 11-city DataTable with each page's first question; cluster prose linking all 11; three cross-county patterns (all cities declining; language varies between neighbours; 4 of 38 sampled sites had Spanish pages/option, none any other language); FAQ/tree updated; plain "Greater Los Angeles only" scope in lede and opening |
| Los Angeles | Scale: neighbourhoods, not the city, are the unit; per-service radii | 470 sq mi, 30.7-min commute, directories dominate broad searches | Houston FAQ wording shared with Santa Monica ("built on local data"); Presence rationale repeated on SM/BH; ZIP-catchment illustrative also on Burbank, Pasadena, BH; timeline item identical to Long Beach; "LA" in FAQ question | Houston FAQ now about ZIP export; Presence paragraph reasoned on intra-city distance and per-service radius; illustrative "One city, three radii"; FAQ question rewritten; links to SM, BH, Burbank, Glendale |
| Santa Monica | Density, shared buildings, renter churn, visitor-driven "interest" targeting | 8.4 sq mi, ~10,800/sq mi, 27.9% owner-occupied, 38.4% WFH | "What will you need from us" FAQ ≈ LA; GBP name-suspension paragraph ≈ BH; default-targeting paragraph ≈ BH; template timeline caption | FAQ replaced (commuter-worker test); profile paragraph → shared-building entrance angle, suspension point left to BH; ads paragraph shortened to visitor angle; matrix claims fixed; trimmed to ~2,765 words |
| Beverly Hills | Small resident base, contested place name, referral vs search for specialists | 31,624 residents, 5.7 sq mi, wide MOEs, 3/3 sites describe out-of-city patients | Ads geography paragraph ≈ SM; ZIP-based illustrative ≈ Burbank/LA | Ads paragraph reframed on specialist vs general practice; illustrative now referral + brand-search reading; Wilshire "cluster" claim replaced by sample evidence |
| Glendale | Language pages the team can support; Glendale CA vs AZ | 66.2% LOTE, C16001 "other Indo-European" 38.6%, DHCS Armenian | Lede asserted how patients choose; Armenian FAQ ≈ Burbank's; intro template ≈ other first-wave pages | Lede rewritten to observed gap; resident-not-preference sentence; intro → translation sign-off dependency; Burbank FAQ changed (below) |
| Burbank | Trade area across Glendale and Valley neighbourhoods | 17.3 sq mi, 3/4 sites name outside places, Search Console place-name groups | Armenian FAQ ≈ Glendale; Houston FAQ ≈ Torrance/Santa Clarita; GBP "keep name as on sign" ≈ Downey/WC/SM; volume disclaimer repeated | FAQ now compares Burbank vs Glendale language shares and tests by ZIP; Houston FAQ on remote trade-area mapping; GBP subsection for patients arriving from three directions; caption/disclaimer rewritten |
| Pasadena | Elective consult quality and booking attribution (marketplace widget) | 1/3 marketplace booking, 2/3 implant/cosmetic prominence, 56.1% bachelor's, income as context only | Trade-area framing and ZIP-share illustrative overlapped Burbank; Houston FAQ ≈ LA | Lede/description refocused; catchment section defers to Burbank; illustrative replaced with marketplace-attribution example; Houston FAQ on consult outcomes |
| Long Beach | Phones, numbers and offer governance before spend; county line | 2/3 multiple numbers, 2/3 priced offers, 1 expired offer | Family-heavy claim no longer true; timeline end item = LA; intro template | Section rewritten (age close to county; families a choice); SEO bullet → recall content for offer patients; timeline item → recall comparison; intro → call-log dependency; lede no longer generalises |
| Torrance | Shrinking, older city: retention and reactivation before acquisition | −5.8%, median age 43.2, 55.0% owner-occupied, 23.0% Asian-language speakers | Houston FAQ ≈ Burbank/Santa Clarita; intro dependency ≈ Santa Clarita; "Neighbouring cities" ≈ West Covina word for word | Houston FAQ on reactivation programme; intro on front-desk time; neighbouring-cities subsection tied to reactivation-first order; caption explains sequencing |
| Downey | Spanish-language conversion path and plan-type clarity | 56.7% Spanish at home, 17.7% Spanish LEP, 0/3 Spanish pages | KeyAnswer/barrier wording presented resident data as patient preference; Houston FAQ ≈ West Covina | Wording softened to testable hypotheses; WC FAQ changed instead; volume disclaimer rewritten |
| Santa Clarita | Valley of communities: visibility sampled at several points | 73.6 sq mi, ~3,100/sq mi, 34.1-min commute, 71.8% owner-occupied | Houston FAQ ≈ Burbank/Torrance; template caption | Houston FAQ on remote multi-point visibility checks; caption on evening phone cover; description shortened |
| West Covina | Choosing among several languages; implant ads vs a national brand; Covina confusion | Spanish 34.6%, Chinese 12.0%, Tagalog 6.4%; Asian-language LEP 12.2% | Houston FAQ ≈ Downey; "Neighbouring cities" ≈ Torrance; GBP paragraph ≈ Burbank/Downey; unsourced "most practices can… one or two languages" | All three rewritten with West Covina evidence (multi-language review capacity, Covina results in searches, two-county practice); staffing sentence reasoned, not asserted; still ≥2,000 words |

Each page keeps its own channel order: LA (profile → conversion → bounded ads → travel-worthy content); Long Beach (call handling → listings → offer governance → scheduled ads); Pasadena (consult conversion → listings → comparison content → catchment ads); Glendale (multilingual structure → entity → form response → language ads); Burbank (trade-area baseline → visibility → area content/ads → measurement); Santa Monica (visibility → conversion → Presence ads → measurement); Beverly Hills (referral / search / ads separated); Torrance (retention matrix first); Downey (bilingual conversion → profile → call handling → ads); Santa Clarita (home community → reach communities that already send patients); West Covina (language and conversion → profile → consult-level ads → tracking by language).

Residual, accepted repetition: every city has a "Can a Houston-based agency…" FAQ (required by the city brief) but each answer now addresses a different dependency; method phrases such as "a 60-day call-language log" recur because they describe one method, not copied paragraphs.

## Per-page entries

### /markets/california/ — Ready (2,904 words)
- Changed: 2024/V2025 data throughout; 11-city comparison table and cluster prose linking all 11; cross-county patterns with aggregated, dated observation counts (38 sites); scope stated plainly in lede and opening; PC 632 wording dated to the 2015 digest; FAQs and decision tree updated to eleven cities; Medi-Cal figures confirmed; description updated. No "LA" abbreviation in headings or entity data.
- Risks: slightly above ~2,800 words because of the comparison table (judged useful, not filler). PC 632 current text unverified (403) — counsel recommended on page. Observation source URLs point to /resources/research-methodology/ (site-wide convention), not the observed sites.

### /markets/california/los-angeles/ — Ready (2,765 words)
- Changed: data refresh; V2025 change; Houston FAQ, Presence rationale and illustrative de-duplicated; FAQ question no longer uses "LA"; Valley wording corrected (not all Valley communities are in the city); links to SM, BH, Burbank, Glendale.
- Risks: small observation sample (4 sites).

### /markets/california/long-beach/ — Ready (2,434 words)
- Changed: data refresh; age-profile section rewritten because the 2024 data no longer supports "youngest"; density comparison updated; lede de-generalised; recall SEO bullet; Torrance link.
- Risks: 3-site sample.

### /markets/california/pasadena/ — Ready (2,483 words)
- Changed: data refresh; outdated comparisons removed; consult-quality focus sharpened; new illustrative; links to Glendale and Burbank.
- Risks: 3-site sample; income shown only as context.

### /markets/california/glendale/ — Ready (2,377 words)
- Changed: data refresh; outdated "highest/largest" claims removed; lede no longer asserts patient behaviour; resident-vs-preference sentence; Burbank link.
- Risks: no ACS Armenian figure exists in C16001 (stated); DHCS listing describes providers, not patients (stated).

### /markets/california/santa-monica/ — Ready (2,765 words)
- Changed: trimmed ~200 words; duplicate FAQ replaced; profile, ads and matrix wording de-duplicated and de-claimed; description shortened.
- Risks: 4-site sample.

### /markets/california/burbank/ — Ready (2,509 words)
- Changed: Armenian and Houston FAQs, Business Profile subsection, disclaimer and caption rewritten; description shortened.
- Risks: only one Burbank-specific agency page could be opened.

### /markets/california/torrance/ — Ready (2,198 words)
- Changed: Houston FAQ, intro dependency, neighbouring-cities subsection and caption rewritten; unsupported generalisation removed.
- Risks: 4-site sample.

### /markets/california/beverly-hills/ — Ready (2,285 words)
- Changed: lede shortened; unsupported office-cluster claim replaced; ads paragraph and illustrative de-duplicated; description shortened. Income never used to infer cosmetic demand.
- Risks: thin, specialist-weighted sample (3 sites; six general-practice sites unretrievable) — disclosed on page.

### /markets/california/downey/ — Ready (2,301 words)
- Changed: preference wording softened; FAQ question rephrased; disclaimer rewritten; lede specifies "aged five and over". No content:check or frontmatter problem was present at review (schema, sources and link checks all pass).
- Risks: 3-site sample; several candidate sites unretrievable (disclosed); DHCS program pages unavailable (not cited).

### /markets/california/santa-clarita/ — Ready (2,242 words)
- Changed: Houston FAQ, caption and description rewritten.
- Risks: 4-site sample.

### /markets/california/west-covina/ — Ready (2,185 words)
- Changed: Houston FAQ, Business Profile and neighbouring-cities subsections rewritten with city-specific evidence; staffing and "Is Spanish enough?" wording de-claimed; description shortened; word count raised from 2,059.
- Risks: no West Covina agency page could be opened; 3-site sample.

## Validation

`node scripts/check-mdx.mjs` OK for all 12 files; `npm run content:check` shows no Problems (full run). `published: null`, `reviewer: null` left as required.
