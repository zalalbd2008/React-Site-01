# Santa Monica, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/santa-monica/`

## 1. Market definition

- **Santa Monica is an incorporated city** ("Santa Monica city", GEOID 160XX00US0670000, LSAD 25) in **Los Angeles County**, which is a central county of the **Los Angeles–Long Beach–Anaheim, CA Metropolitan Statistical Area** (CBSA 31080; Los Angeles–Long Beach–Glendale Metropolitan Division 31084) — OMB July 2023 delineation (`omb-cbsa-delineation-2023`).
- Land area 8.409 sq mi (2023 Gazetteer). Persons per sq mi ≈ 10,885 (our arithmetic: 91,535 / 8.409) — the densest of the seven wave-2 cities.
- Bordered by City of Los Angeles neighborhoods (e.g. Pacific Palisades, Brentwood, West Los Angeles, Mar Vista, Venice). Those are **not** part of Santa Monica city; ACS figures below describe Santa Monica residents only.
- Delivery model: Alpha Dental Media serves Santa Monica practices **remotely from Houston**; no California office, no local staff, no local clients.

## 2. Public data — ACS 2019–2023 5-year (Data Profiles DP02–DP05; detailed table C16001)

Retrieved 2026-11-08 with `node scripts/census.mjs "Santa Monica" CA` and the data.census.gov table API (same endpoints). Source ids: `acs-2023-dp02-santa-monica-city`, `acs-2023-dp03-santa-monica-city`, `acs-2023-dp04-santa-monica-city`, `acs-2023-dp05-santa-monica-city`, `acs-2023-c16001-santa-monica-city`; county column from `acs-2023-dp0X-la-county` (markets-ca1, re-verified 2026-11-08).

| Measure (ACS variable) | Santa Monica city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 91535 ± 46 | 9848406 |
| Median age (years) (DP05_0018E) | 42.9 ± 1.4 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 14.2 ± 1.0 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 19.2 ± 1.1 | 14.7 |
| Households (DP02_0001E) | 46457 ± 1128 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 23.2 ± 1.5 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 27.9 ± 1.8 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 7.9 ± 1.0 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 10.9 ± 1.3 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 2.8 ± 0.6 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 9.3 ± 1.2 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 5.3 ± 1.2 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.0 ± 0.6 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 68.9 ± 1.8 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 109739 ± 8887 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 25.8 ± 1.2 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 50.6 ± 2.4 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 2.8 ± 0.6 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 33.1 ± 2.1 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 75.5 ± 1.9 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 30.2 ± 1.6 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 4.2 ± 1.1 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 28.8 ± 1.6 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 87,562** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 63,163 ± 1588 | 72.1% |
| Spanish (C16001_003E) | 9,562 ± 1158 | 10.9% |
| Other Indo-European languages (C16001_015E) | 4,562 ± 772 | 5.2% |
| Russian, Polish, or other Slavic languages (C16001_012E) | 1,874 ± 690 | 2.1% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 1,736 ± 580 | 2.0% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,535 ± 745 | 1.8% |
| Other and unspecified languages (C16001_036E) | 1,401 ± 414 | 1.6% |
| French, Haitian, or Cajun (C16001_006E) | 1,057 ± 308 | 1.2% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 93,082; July 2020–2025: 92,921, 91,249, 90,520, 90,459, 90,506, 90,082. Change base→2025: -3.2% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. What stands out (facts) and hypotheses (to test with client data)

| Fact (source) | Hypothesis — NOT a conclusion |
|---|---|
| Owner-occupied units 28.8% ± 1.6 vs county 46.1% (DP04) | A renter-heavy population may turn over faster, so a steady stream of "new to area" searches could matter more than in owner-heavy suburbs. Test: share of new patients with an address < 12 months old (ask at intake), PMS new-patient source. |
| Worked from home 33.1% ± 2.1 vs county 15.2% (DP03) | Mid-day weekday appointments may be more acceptable to resident patients than in commuter suburbs. Test: fill rate by time slot; online-booking time-of-day. |
| Under 18 14.2% vs county 20.9%; 65+ 19.2% vs 14.7% (DP05) | Child-focused acquisition may have a smaller resident base than elsewhere; older-adult restorative and maintenance demand may matter more. Test with PMS age mix — never infer demand from age alone. |
| Bachelor's+ 68.9% (DP02); median household income $109,739 ± 8,887 (DP03) | **Do not infer cosmetic demand from income or education.** At most: patients may read longer explanatory content; test with engagement and consult conversion. |
| Language other than English 27.9%; Spanish 10.9%; English less than "very well" 7.9% (DP02/C16001) | Language is a smaller conversion variable here than in Downey or West Covina; a Spanish page is a test, not a priority. |
| Density ≈10,900/sq mi; 8.4 sq mi (Gazetteer + ACS) | With many offices close together, distance differences are small; relevance and prominence (Google's other two local factors) carry more weight. Test: geo-grid checks at several points; compare GBP actions. |
| ACS counts residents only | People who work in or visit Santa Monica are not in these figures; any daytime-worker demand is a hypothesis. Google Ads "location of interest" can show ads to people interested in Santa Monica who are not there (google-ads-location-targeting) — consider "Presence" targeting. |
| PEP Vintage 2025: −3.2% from 2020 base (93,082 → 90,082) | A slowly shrinking resident base; growth must come from share and retention, not population growth. |

## 4. Gaps

- No daytime/worker population data retrieved (LEHD OnTheMap not attempted). Daytime demand stays a hypothesis.
- No practice counts used (directory counts ≠ active offices).
- DHCS Medi-Cal Dental provider dataset page returned 403 on 2026-11-08 — not bypassed, not used.
