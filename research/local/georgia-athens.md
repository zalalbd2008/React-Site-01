# Market definition and public data — Athens, Georgia

- **Batch:** markets-ga1 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/athens/
- **Method:** `node scripts/census.mjs "Athens" GA` (resolves to the unified-government balance) plus the same ACS 2019–2023 tables for Clarke County, the metro and Georgia; PEP Vintage 2025 files. QuickFacts not used.
- **Census geography:** Athens-Clarke County unified government (balance), Georgia · GEOID 160XX00US1303440 · land area 116.437 sq mi.
- **Source ids:** `census-acs5-2023-dp-athens-clarke-balance-ga`, `census-acs5-2023-dp-clarke-county-ga`, `census-acs5-2023-dp-athens-msa`, `census-acs5-2023-dp-georgia`, `ga1-census-pep-v2025-places`, `ga1-census-pep-v2025-cbsa`, `accgov-home`, `uga-fall-2025-enrollment`.

## 1. Market definition
- **Government:** Athens-Clarke County Unified Government (ACCGov) (`accgov-home`). Census reports the "unified government (balance)" (128,612, July 2025) separately from Clarke County (129,921) — difference 1,309 (derived) because the balance excludes other incorporated places in the county (not named on the page).
- **Metro:** Athens-Clarke County, GA Metro Area (CBSA 12020) = **Clarke, Madison, Oconee and Oglethorpe counties** (Vintage 2025 CBSA file).
- **Correct labels:** "Athens (Athens-Clarke County)"; "the four-county Athens-Clarke County metro area". Watkinsville appears on sampled practice sites (Oconee County per the practice address) — page refers to "Oconee County" only.
- **University:** UGA total enrollment 43,888 in fall 2025 (`uga-fall-2025-enrollment`). Enrollment is not residence; we do not equate it with Athens-Clarke population.

## 2. ACS 2019–2023 5-year estimates
Table URLs: https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US1303440 (and DP02, DP03); county 0500000US13059; metro 310XX00US12020.

| Measure (ACS 2019–2023 5-year) | Athens-Clarke (balance) | Clarke Co | Athens MSA | Georgia | Table |
|---|---|---|---|---|---|
| Total population | 126987 (±688) | 129267 (no MOE published) | 218190 (no MOE published) | 10822590 (no MOE published) | DP05 |
| Median age (years) | 29.2 (±0.2) | 29.4 (±0.1) | 33.2 (±0.2) | 37.4 (±0.1) | DP05 |
| Under 18 years (%) | 16.7 (±0.2) | 17.0 (no MOE published) | 20.0 (±0.1) | 23.5 (±0.1) | DP05 |
| 65 years and over (%) | 12.0 (±0.1) | 12.1 (±0.1) | 14.2 (±0.1) | 14.6 (±0.1) | DP05 |
| Total households | 53397 (±558) | 54161 (±474) | 85019 (±699) | 4008013 (±9372) | DP02 |
| Median household income (2023 dollars) | 51655 (±1834) | 52267 (±1999) | 62897 (±2390) | 74664 (±431) | DP03 |
| Mean travel time to work (minutes) | 20.7 (±0.9) | 20.8 (±0.9) | 23.6 (±0.7) | 28.3 (±0.1) | DP03 |
| Worked from home (% of workers 16+) | 11.9 (±1.3) | 11.8 (±1.2) | 12.1 (±1.0) | 14.2 (±0.2) | DP03 |
| With private health insurance (%) | 72.8 (±1.6) | 72.8 (±1.6) | 71.4 (±1.3) | 65.9 (±0.3) | DP03 |
| With public coverage (%) | 25.0 (±1.3) | 25.1 (±1.3) | 27.8 (±0.9) | 32.4 (±0.2) | DP03 |
| No health insurance coverage (%) | 11.2 (±1.1) | 11.1 (±1.0) | 11.0 (±0.8) | 12.6 (±0.2) | DP03 |
| Bachelor's degree or higher (% of 25+) | 48.7 (±1.7) | 48.7 (±1.7) | 43.5 (±1.3) | 34.2 (±0.3) | DP02 |
| Civilian veterans (% of civilians 18+) | 4.0 (±0.4) | 4.1 (±0.4) | 5.0 (±0.3) | 7.4 (±0.1) | DP02 |
| Language other than English at home (% of 5+) | 15.3 (±0.8) | 15.1 (±0.8) | 12.0 (±0.5) | 15.0 (±0.1) | DP02 |
| Spanish at home (% of 5+) | 9.0 (±0.5) | 9.0 (±0.5) | 7.0 (±0.4) | 8.4 (±0.1) | DP02 |
| Armed Forces (count, population 16+) | 241 (±173) | 256 (±177) | 298 (±182) | 59494 (±2036) | DP03 |
| Armed Forces (% of population 16+) | 0.2 (±0.2) | 0.2 (±0.2) | 0.2 (±0.1) | 0.7 (±0.1) | DP03 |

## 3. Population change (PEP Vintage 2025)
| Geography (PEP Vintage 2025) | Base Apr 1 2020 | Jul 1 2024 | Jul 1 2025 | Change base→2025 (derived) |
|---|---|---|---|---|
| Georgia | 10,713,861 | 11,204,208 | 11,302,748 | +588,887 (+5.5%) |
| Athens-Clarke County unified government (balance) | 127,357 | 129,429 | 128,612 | +1,255 (+1.0%) |
| Clarke County | 128,670 | 130,750 | 129,921 | +1,251 (+1.0%) |
| Athens-Clarke County, GA [metro] | 215,396 | 224,159 | 224,148 | +8,752 (+4.1%) |
| Clarke County, GA | 128,670 | 130,750 | 129,921 | +1,251 (+1.0%) |
| Madison County, GA | 30,116 | 32,767 | 32,919 | +2,803 (+9.3%) |
| Oconee County, GA | 41,783 | 44,524 | 44,893 | +3,110 (+7.4%) |
| Oglethorpe County, GA | 14,827 | 16,118 | 16,415 | +1,588 (+10.7%) |

**Key derived finding:** the unified-government balance grew +1.0% (base 2020 → July 2025) and dipped 2024→2025 (−817); Oconee +7.4%, Madison +9.3%, Oglethorpe +10.7%; metro +4.1%.

## 4. What the data supports — and what it does not
| Data point | Supported reading | Not supported |
|---|---|---|
| Median age 29.2 (lowest of the five); under-18 16.7%; 65+ 12.0% | Young adult-heavy resident base consistent with a university town. | Student share of any practice's patients. |
| Owner-occupied 40.5% of housing units (script DP04) | Majority renters — hypothesis: higher resident turnover; recall and reactivation matter. | Turnover rates. |
| Median household income $51,655 (balance) vs Oconee growth | Income figure is depressed by student households (hypothesis); the surrounding counties differ. | Ability to pay; cosmetic demand. |
| Language other than English 15.3%; Spanish 9.0%; English less than "very well" 5.2% | Highest Spanish-at-home share of the five cities. | That Spanish pages will produce bookings — test with intake data and staff capability. |
| Private coverage 72.8%; public 25.0% | Highest private-coverage share of the five; note students may be on parents' or university plans (not measured). | Dental insurance rates. |
| Commute 20.7 min; WFH 11.9% | Short commutes. | Appointment preferences. |
| Academic calendar | Hypothesis: demand and staffing patterns may follow the semester calendar. Test with 24 months of new-patient data by week. | Any seasonal demand figure. |

## 6. Raw output of `node scripts/census.mjs "Athens" GA` (retrieved 2026-11-08)

Geography: Athens-Clarke County unified government (balance) · 160XX00US1303440 · American Community Survey 2019–2023 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)

| Variable | Label | Estimate | MOE |
|---|---|---|---|
| DP02_0001E | Total households | 53397 | 558 |
| DP02_0114PE | Percent of population 5+ speaking a language other than English at home | 15.3 | 0.8 |
| DP02_0115PE | Percent of population 5+ who speak English less than "very well" | 5.2 | 0.6 |
| DP02_0116PE | Percent of population 5+ speaking Spanish at home | 9.0 | 0.5 |
| DP02_0068PE | Percent of population 25+ with a bachelor's degree or higher | 48.7 | 1.7 |
| DP03_0062E | Median household income (inflation-adjusted dollars of the survey year) | 51655 | 1834 |
| DP03_0025E | Mean travel time to work (minutes) | 20.7 | 0.9 |
| DP03_0099PE | Percent of civilian noninstitutionalized population with no health insurance coverage | 11.2 | 1.1 |
| DP03_0074PE | Percent of households receiving SNAP/food stamp benefits in past 12 months | 9.2 | 1.0 |
| DP04_0046PE | Percent of occupied housing units that are owner-occupied | 40.5 | 1.4 |
| DP05_0001E | Total population | 126987 | 688 |
| DP05_0019PE | Percent of population under 18 years | 16.7 | 0.2 |
| DP05_0024PE | Percent of population 65 years and over | 12.0 | 0.1 |
| DP05_0018E | Median age (years) | 29.2 | 0.2 |

Citable URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1303440, https://data.census.gov/table/ACSDP5Y2023.DP03?g=160XX00US1303440, https://data.census.gov/table/ACSDP5Y2023.DP04?g=160XX00US1303440, https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US1303440
