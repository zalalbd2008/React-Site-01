# Santa Monica, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/santa-monica/`

## 1. Market definition

- **Santa Monica is an incorporated city** ("Santa Monica city", GEOID 160XX00US0670000, LSAD 25) in **Los Angeles County**, which is a central county of the **Los Angeles–Long Beach–Anaheim, CA Metropolitan Statistical Area** (CBSA 31080; Los Angeles–Long Beach–Glendale Metropolitan Division 31084) — OMB July 2023 delineation (`omb-cbsa-delineation-2023`).
- Land area 8.409 sq mi (2023 Gazetteer). Persons per sq mi ≈ 10,840 (our arithmetic: 91,169 / 8.409) — the densest of the seven wave-2 cities.
- Bordered by City of Los Angeles neighborhoods (e.g. Pacific Palisades, Brentwood, West Los Angeles, Mar Vista, Venice). Those are **not** part of Santa Monica city; ACS figures below describe Santa Monica residents only.
- Delivery model: Alpha Dental Media serves Santa Monica practices **remotely from Houston**; no California office, no local staff, no local clients.

## 2. Public data — ACS 2020–2024 5-year (Data Profiles DP02–DP05; detailed table C16001)

Retrieved 2026-11-08 with `node scripts/census.mjs "Santa Monica" CA` and the data.census.gov table API (same endpoints). Source ids: `acs-2024-dp02-santa-monica-city`, `acs-2024-dp03-santa-monica-city`, `acs-2024-dp04-santa-monica-city`, `acs-2024-dp05-santa-monica-city`, `acs-2024-c16001-santa-monica-city`; county column from `acs-2024-dp0X-la-county` (markets-ca2).

| Measure (ACS variable) | Santa Monica city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 91169 ± 42 | 9808667 |
| Median age (years) (DP05_0018E) | 42.7 ± 1.2 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 13.8 ± 0.9 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 19.5 ± 1.2 | 15.2 |
| Households (DP02_0001E) | 47297 ± 1126 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 23.3 ± 1.6 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 27.8 ± 2.0 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 7.6 ± 0.9 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 10.3 ± 1.3 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 2.6 ± 0.5 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 9.8 ± 1.4 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 5.2 ± 1.1 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 1.9 ± 0.5 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 70.7 ± 1.8 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 114885 ± 7492 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 24.8 ± 1.3 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 47.0 ± 2.1 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 2.2 ± 0.6 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 38.4 ± 2.1 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 75.3 ± 1.8 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 30.5 ± 1.6 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 3.5 ± 0.9 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 27.9 ± 1.5 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 87,482** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 63,175 ± 1869 | 72.2% |
| Spanish (C16001_003E) | 9,034 ± 1165 | 10.3% |
| Other Indo-European languages (C16001_015E) | 5,297 ± 814 | 6.1% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 1,736 ± 540 | 2.0% |
| Russian, Polish, or other Slavic languages (C16001_012E) | 1,672 ± 508 | 1.9% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,491 ± 811 | 1.7% |
| Other and unspecified languages (C16001_036E) | 1,452 ± 409 | 1.7% |
| French, Haitian, or Cajun (C16001_006E) | 978 ± 317 | 1.1% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 93,082; July 2020–2025: 92,921, 91,249, 90,520, 90,459, 90,506, 90,082. Change base→2025: -3.2% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. What stands out (facts) and hypotheses (to test with client data)

| Fact (source) | Hypothesis — NOT a conclusion |
|---|---|
| Owner-occupied units 27.9% ± 1.5 vs county 45.9% (DP04) | A renter-heavy population may turn over faster, so a steady stream of "new to area" searches could matter more than in owner-heavy suburbs. Test: share of new patients new to the area (ask at intake), PMS new-patient source. |
| Worked from home 38.4% ± 2.1 vs county 17.1% (DP03) | Mid-day weekday appointments may be more acceptable to resident patients than in commuter suburbs. Test: fill rate by time slot; online-booking time-of-day. |
| Under 18 13.8% vs county 20.6%; 65+ 19.5% vs 15.2% (DP05) | Child-focused acquisition may have a smaller resident base; older-adult restorative and maintenance demand may matter more. Test with PMS age mix — never infer demand from age alone. |
| Bachelor's+ 70.7% (DP02); median household income $114,885 ± 7,492 (DP03) | **Do not infer cosmetic demand from income or education.** |
| Language other than English 27.8%; Spanish 10.3%; English less than "very well" 7.6% (DP02/C16001) | Language is a smaller conversion variable here than in Downey or West Covina; a Spanish page is a test, not a priority. |
| Density ≈10,840/sq mi; 8.4 sq mi (Gazetteer + ACS) | Distance differences between offices are small; relevance and prominence carry more weight. Test: geo-grid checks; compare GBP actions. |
| ACS counts residents only | Daytime-worker/visitor demand is a hypothesis. Google Ads "location of interest" can reach people interested in Santa Monica who are not there (google-ads-location-targeting) — consider "Presence" targeting. |
| PEP Vintage 2025: −3.2% from 2020 base (93,082 → 90,082) | Slowly shrinking resident base; growth from share and retention. |

## 4. Gaps

- No daytime/worker population data retrieved (LEHD OnTheMap not attempted). Daytime demand stays a hypothesis.
- No practice counts used (directory counts ≠ active offices).
- DHCS Medi-Cal Dental provider dataset page returned 403 on 2026-11-08 — not bypassed, not used.
