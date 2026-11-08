# Georgia state hub — public data and regional structure (markets-ga1, 2026-11-08)

- **Route:** /markets/georgia/ · **Method:** ACS 2020–2024 5-year Data Profiles via the data.census.gov table API (cities via `scripts/census.mjs`, state and metros via the same API); PEP Vintage 2025 (`sub-est2025_13.csv`, `cbsa-est2025-alldata.csv`); official pages for consolidated governments, Army installations, TRICARE, Augusta University and UGA; Georgia Board of Dentistry Rule 150-10-.01 on rules.sos.ga.gov. All retrieved 2026-11-08. QuickFacts not used (403; not bypassed).
- City-level detail lives in `research/local/georgia-{atlanta,savannah,augusta,columbus,athens}.md` and the markets-ga2 files for Sandy Springs, Alpharetta, Roswell, Marietta, Johns Creek, Lawrenceville and Macon.

## 1. Metro structure (PEP Vintage 2025, derived shares)
- Georgia July 2025: 11,302,748 (+5.5% from the 2020 base).
- Atlanta-Sandy Springs-Roswell metro (29 Georgia counties): 6,482,182 — about **57.4%** of the state.
- Savannah metro (Bryan, Chatham, Effingham): 438,314 (~3.9%); Augusta-Richmond County GA-SC metro (Georgia counties ~3.8% of the state; metro total 641,231 including Aiken and Edgefield, SC); Columbus GA-AL metro (Georgia counties ~2.4%; metro total 324,830 including Russell County, AL); Athens-Clarke County metro (4 counties) 224,148 (~2.0%).

| Metro (PEP Vintage 2025) | Base 2020 | July 2025 | Change |
|---|---|---|---|
| Athens-Clarke County, GA | 215,396 | 224,148 | +8,752 (+4.1%) |
| Atlanta-Sandy Springs-Roswell, GA | 6,106,816 | 6,482,182 | +375,366 (+6.1%) |
| (Metropolitan Division) Atlanta-Sandy Springs-Roswell, GA | 4,766,683 | 5,044,702 | +278,019 (+5.8%) |
| (Metropolitan Division) Marietta, GA | 1,340,133 | 1,437,480 | +97,347 (+7.3%) |
| Augusta-Richmond County, GA-SC | 610,994 | 641,231 | +30,237 (+4.9%) |
| Columbus, GA-AL | 328,880 | 324,830 | -4,050 (-1.2%) |
| Savannah, GA | 404,791 | 438,314 | +33,523 (+8.3%) |

| Principal city (PEP Vintage 2025) | Base 2020 | July 2025 | Change |
|---|---|---|---|
| Athens-Clarke County unified government (balance) | 127,357 | 128,612 | +1,255 (+1.0%) |
| Atlanta city | 498,805 | 529,110 | +30,305 (+6.1%) |
| Augusta-Richmond County consolidated government (balance) | 202,071 | 201,999 | -72 (-0.0%) |
| Columbus city | 206,914 | 202,171 | -4,743 (-2.3%) |
| Savannah city | 147,777 | 149,440 | +1,663 (+1.1%) |

**Pattern used on the hub:** in every metro except Columbus, the principal city grew more slowly than (or, for Atlanta, at the same rate as) its metro; growth concentrates in surrounding counties (Forsyth/Cherokee/Henry; Bryan/Effingham; Columbia/Aiken/Edgefield; Oconee/Madison/Oglethorpe). Columbus city and metro both declined.

## 2. Consolidated and unified governments (label accurately)
| Market | Census geography name | Government's own description | Notes |
|---|---|---|---|
| Augusta | Augusta-Richmond County consolidated government (balance) | — (augustaga.gov home page checked; consolidation not quoted) | County total 206,559 vs balance 201,999 (July 2025) |
| Columbus | Columbus city | "Columbus Consolidated Government is Georgia's first consolidated government" (`columbus-consolidated-government-home`) | City and Muscogee County totals identical |
| Athens | Athens-Clarke County unified government (balance) | "Athens-Clarke County Unified Government (ACCGov)" (`accgov-home`) | County 129,921 vs balance 128,612 |
| Macon (ga2) | Macon-Bibb County | consolidated 2014 (ga2 source) | Not our page |

## 3. ACS 2020–2024 comparison — the five principal cities and the state
| Measure (ACS 2020–2024 5-year) | Georgia | Atlanta city | Savannah city | Augusta-Richmond (balance) | Columbus city | Athens-Clarke (balance) | Table |
|---|---|---|---|---|---|---|---|
| Total population | 10940407 (no MOE published) | 505268 (±79) | 147898 (±64) | 201528 (±20) | 203711 (no MOE published) | 127345 (±606) | DP05 |
| Median age (years) | 37.6 (±0.1) | 34.2 (±0.3) | 34.0 (±0.5) | 35.2 (±0.1) | 35.4 (±0.2) | 29.4 (±0.2) | DP05 |
| Under 18 years (%) | 23.2 (±0.1) | 16.6 (±0.5) | 20.4 (±0.8) | 22.8 (±0.1) | 24.9 (±0.1) | 16.6 (±0.2) | DP05 |
| 65 years and over (%) | 15.0 (±0.1) | 12.3 (±0.3) | 14.3 (±0.7) | 15.3 (±0.1) | 14.8 (±0.1) | 12.4 (±0.1) | DP05 |
| Total households | 4074366 (±9635) | 236468 (±2330) | 58192 (±1157) | 75222 (±1069) | 81415 (±740) | 53643 (±492) | DP02 |
| Median household income (2024 dollars) | 77353 (±407) | 85652 (±1846) | 57137 (±1715) | 55485 (±2918) | 58073 (±1832) | 52974 (±2410) | DP03 |
| Mean travel time to work (minutes) | 28.3 (±0.1) | 26.5 (±0.7) | 20.7 (±0.7) | 21.1 (±0.6) | 20.9 (±0.7) | 20.6 (±0.8) | DP03 |
| Worked from home (% of workers 16+) | 15.9 (±0.2) | 29.7 (±1.0) | 11.5 (±1.3) | 9.1 (±1.1) | 12.1 (±1.3) | 13.5 (±1.1) | DP03 |
| With private health insurance (%) | 66.0 (±0.3) | 71.5 (±0.9) | 58.5 (±1.5) | 58.6 (±1.6) | 63.1 (±1.6) | 73.1 (±1.5) | DP03 |
| With public coverage (%) | 32.7 (±0.2) | 26.6 (±0.8) | 37.9 (±1.2) | 43.7 (±1.3) | 41.4 (±1.2) | 24.5 (±1.1) | DP03 |
| No health insurance coverage (%) | 12.4 (±0.2) | 10.1 (±0.7) | 13.9 (±1.1) | 11.8 (±1.0) | 11.1 (±0.9) | 11.3 (±1.0) | DP03 |
| Bachelor's degree or higher (% of 25+) | 34.9 (±0.3) | 59.2 (±0.9) | 33.3 (±1.3) | 24.7 (±1.1) | 30.5 (±1.2) | 47.3 (±1.7) | DP02 |
| Civilian veterans (% of civilians 18+) | 7.2 (±0.1) | 3.9 (±0.3) | 7.2 (±0.6) | 11.1 (±0.9) | 14.0 (±0.8) | 3.7 (±0.4) | DP02 |
| Language other than English at home (% of 5+) | 15.5 (±0.1) | 12.2 (±0.6) | 10.4 (±1.0) | 6.8 (±0.5) | 8.3 (±0.6) | 15.9 (±0.8) | DP02 |
| Spanish at home (% of 5+) | 8.6 (±0.1) | 4.6 (±0.4) | 5.4 (±0.7) | 3.8 (±0.4) | 4.9 (±0.4) | 9.3 (±0.5) | DP02 |
| Armed Forces (count, population 16+) | 58682 (±2191) | 501 (±259) | 1868 (±374) | 6646 (±595) | 6595 (±571) | 231 (±152) | DP03 |
| Armed Forces (% of population 16+) | 0.7 (±0.1) | 0.1 (±0.1) | 1.6 (±0.3) | 4.1 (±0.4) | 4.2 (±0.4) | 0.2 (±0.1) | DP03 |

## 4. ACS 2020–2024 comparison — metros
| Measure (ACS 2020–2024 5-year) | Atlanta MSA | Savannah MSA | Augusta MSA | Columbus MSA | Athens MSA | Table |
|---|---|---|---|---|---|---|
| Total population | 6256377 (no MOE published) | 418285 (no MOE published) | 624181 (no MOE published) | 325615 (no MOE published) | 220197 (no MOE published) | DP05 |
| Median age (years) | 37.2 (±0.1) | 36.9 (±0.2) | 38.3 (±0.2) | 36.5 (±0.2) | 33.6 (±0.2) | DP05 |
| Under 18 years (%) | 23.6 (±0.1) | 22.6 (±0.1) | 22.8 (±0.1) | 23.7 (±0.1) | 19.8 (±0.1) | DP05 |
| 65 years and over (%) | 13.4 (±0.1) | 15.4 (±0.1) | 17.3 (±0.1) | 15.5 (±0.1) | 14.7 (±0.1) | DP05 |
| Total households | 2313055 (±5155) | 161273 (±1313) | 231857 (±2041) | 127512 (±1104) | 86101 (±752) | DP02 |
| Median household income (2024 dollars) | 89724 (±630) | 77180 (±1575) | 69344 (±1537) | 59336 (±1529) | 65608 (±2404) | DP03 |
| Mean travel time to work (minutes) | 31.0 (±0.1) | 25.6 (±0.5) | 23.9 (±0.4) | 22.6 (±0.6) | 23.5 (±0.6) | DP03 |
| Worked from home (% of workers 16+) | 20.6 (±0.2) | 10.5 (±0.6) | 9.8 (±0.6) | 11.1 (±0.9) | 13.0 (±1.0) | DP03 |
| With private health insurance (%) | 69.2 (±0.3) | 67.5 (±0.8) | 66.2 (±0.9) | 64.0 (±1.2) | 71.8 (±1.3) | DP03 |
| With public coverage (%) | 28.4 (±0.2) | 33.4 (±0.6) | 38.6 (±0.6) | 41.0 (±0.9) | 27.3 (±0.9) | DP03 |
| No health insurance coverage (%) | 12.0 (±0.2) | 11.7 (±0.7) | 10.2 (±0.5) | 10.9 (±0.6) | 10.9 (±0.8) | DP03 |
| Bachelor's degree or higher (% of 25+) | 42.2 (±0.3) | 35.8 (±0.9) | 29.5 (±0.6) | 28.1 (±0.9) | 43.2 (±1.2) | DP02 |
| Civilian veterans (% of civilians 18+) | 6.2 (±0.1) | 9.9 (±0.5) | 11.2 (±0.5) | 13.4 (±0.6) | 4.9 (±0.3) | DP02 |
| Language other than English at home (% of 5+) | 19.9 (±0.2) | 10.3 (±0.5) | 7.2 (±0.3) | 7.2 (±0.4) | 12.4 (±0.5) | DP02 |
| Spanish at home (% of 5+) | 10.0 (±0.1) | 5.7 (±0.4) | 4.2 (±0.2) | 4.5 (±0.3) | 7.2 (±0.4) | DP02 |
| Armed Forces (count, population 16+) | 6959 (±859) | 5751 (±709) | 10841 (±941) | 13450 (±729) | 292 (±166) | DP03 |
| Armed Forces (% of population 16+) | 0.1 (±0.1) | 1.7 (±0.2) | 2.2 (±0.2) | 5.2 (±0.3) | 0.2 (±0.1) | DP03 |

## 5. Military installations (current names verified 2026-11-08)
| Installation | Near | Name history | Sources |
|---|---|---|---|
| Fort Benning | "just outside Columbus" (AP) | Fort Benning → Fort Moore (2023) → Fort Benning restored April 2025, now honoring Cpl. Fred G. Benning | `army-fort-benning-home`, `ap-fort-benning-name-restored-2025` |
| Fort Gordon | Augusta | Fort Gordon → Fort Eisenhower (Oct 2023) → Fort Gordon again June 2025 | `army-fort-gordon-home`, `wrdw-fort-gordon-name-restored-2025` |
| Fort Stewart–Hunter Army Airfield | Hunter AAF is in Savannah | — | `army-fort-stewart-hunter-about` |

**The assignment brief's names "Fort Moore" and "Fort Eisenhower" are outdated; pages use Fort Benning and Fort Gordon.**

Patient-population consideration (sourced): TRICARE dental coverage depends on beneficiary type — active duty (active duty dental benefits), active-duty family members (may purchase TRICARE Dental Program, administered by United Concordia), retirees (may be eligible for FEDVIP) (`tricare-dental-care-overview`, `tricare-dental-program-tdp`). ACS: Armed Forces share of population 16+ — Columbus city 4.2%, Augusta balance 4.1%, Savannah city 1.6%, Atlanta city 0.1%, Athens 0.2%; civilian veterans 14.0% (Columbus), 11.1% (Augusta), 7.2% (Savannah), 7.2% (state).

## 6. University and dental-education dynamics
- UGA total enrollment 43,888 in fall 2025 (`uga-fall-2025-enrollment`) — Athens.
- Dental College of Georgia at Augusta University: Georgia's only dental school (`augusta-dcg-heritage`); a Savannah campus is slated to open summer 2028; ~400 dental students and 60 hygiene students enrolled each year; the university states Georgia ranks 46th in dentists per capita and 18 counties have no practicing dentist (`augusta-dcg-savannah-campus`) — attributed, not independently verified.

## 7. Regulation: Georgia Board of Dentistry Rule 150-10-.01 (as displayed 2026-11-08)
Marketing-relevant provisions (paraphrased; see `ga-board-dentistry-rule-150-10-01`):
1. "Advertising" includes any information designed to attract public attention to the practice, including trade names.
2. The dentist has ultimate responsibility for ads placed by agents (i.e. agencies) and must retain a copy for at least one year after last use and provide it to the Board within 10 days of a request.
3. Fee advertising for "routine dental services": ranges must disclose minimum and maximum; advertised fees and "free" services must remain available for 60 days after last publication unless another date is stated; related services must be provided without extra charge unless the ad includes the statement "ADDITIONAL CHARGES MAY BE INCURRED FOR RELATED SERVICES WHICH MAY BE REQUIRED IN INDIVIDUAL CASES."
4. Ads must not reveal patient-identifiable information without written consent.
5. Deemed misleading: superiority claims; specialist claims unless a Board-recognised specialty and education requirements are met; implying a dentist practises at a location they do not regularly treat patients at; "quality dentistry"-type phrases; "latest modern equipment"-type claims; painless claims; confusingly similar trade names.

Marketing implications for pages (no legal advice): agency-written copy is the dentist's responsibility; location pages must not list dentists who do not regularly practise there; promo pages need the fee-ad conditions; keep an ad archive. Recommend counsel review.

## 8. Gaps
- No primary source fetched for the list of incorporated places excluded from the Augusta and Athens "balance" geographies — pages describe the difference numerically only.
- No dental-specific insurance data (ACS measures health insurance only). No Georgia Medicaid adult dental benefit source retrieved — the hub does not describe Medicaid dental coverage.
- HRSA dental HPSA data not retrieved this session.
