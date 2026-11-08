# Market definition and public data — Columbus, Georgia

- **Batch:** markets-ga1 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/columbus/ (Columbus, **Georgia** — not Columbus, Ohio)
- **Method:** `node scripts/census.mjs "Columbus" GA` plus the same ACS 2020–2024 tables for the metro and Georgia; PEP Vintage 2025 files. QuickFacts not used.
- **Census geography:** Columbus city, Georgia · GEOID 160XX00US1319000 · land area 216.5 sq mi.
- **Source ids:** `census-acs5-2024-dp-columbus-city-ga`, `census-acs5-2024-dp-columbus-ga-al-msa`, `census-acs5-2024-dp-georgia`, `ga1-census-pep-v2025-places`, `ga1-census-pep-v2025-cbsa`, `columbus-consolidated-government-home`, `army-fort-benning-home`, `ap-fort-benning-name-restored-2025`, `tricare-dental-care-overview`, `tricare-dental-program-tdp`.

## 1. Market definition
- **Government:** Columbus and Muscogee County are consolidated. The government describes itself as "Georgia's first consolidated government" (`columbus-consolidated-government-home`). In PEP Vintage 2025 the Columbus city and Muscogee County totals are identical (202,171), consistent with the consolidation.
- **Metro:** Columbus, GA-AL Metro Area (CBSA 17980) = Chattahoochee, Harris, Marion, Muscogee, Stewart and Talbot counties (GA) **plus Russell County, Alabama** (Vintage 2025 CBSA file).
- **Correct labels:** "Columbus (Columbus Consolidated Government, coextensive with Muscogee County)"; "the Columbus, GA-AL metro area".
- **Name ambiguity:** both our agency queries ("dental marketing agency Columbus Georgia", "dental SEO Columbus GA") returned mostly Columbus, Ohio pages (see `research/competitors/georgia-columbus-agencies.md`). This is an SEO consideration for local practices (state qualifiers, GA-specific entity signals).

## 2. ACS 2020–2024 5-year estimates
Table URLs: https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US1319000 (and DP02, DP03); metro 310XX00US17980.

| Measure (ACS 2020–2024 5-year) | Columbus city | Columbus MSA | Georgia | Table |
|---|---|---|---|---|
| Total population | 203711 (no MOE published) | 325615 (no MOE published) | 10940407 (no MOE published) | DP05 |
| Median age (years) | 35.4 (±0.2) | 36.5 (±0.2) | 37.6 (±0.1) | DP05 |
| Under 18 years (%) | 24.9 (±0.1) | 23.7 (±0.1) | 23.2 (±0.1) | DP05 |
| 65 years and over (%) | 14.8 (±0.1) | 15.5 (±0.1) | 15.0 (±0.1) | DP05 |
| Total households | 81415 (±740) | 127512 (±1104) | 4074366 (±9635) | DP02 |
| Median household income (2024 dollars) | 58073 (±1832) | 59336 (±1529) | 77353 (±407) | DP03 |
| Mean travel time to work (minutes) | 20.9 (±0.7) | 22.6 (±0.6) | 28.3 (±0.1) | DP03 |
| Worked from home (% of workers 16+) | 12.1 (±1.3) | 11.1 (±0.9) | 15.9 (±0.2) | DP03 |
| With private health insurance (%) | 63.1 (±1.6) | 64.0 (±1.2) | 66.0 (±0.3) | DP03 |
| With public coverage (%) | 41.4 (±1.2) | 41.0 (±0.9) | 32.7 (±0.2) | DP03 |
| No health insurance coverage (%) | 11.1 (±0.9) | 10.9 (±0.6) | 12.4 (±0.2) | DP03 |
| Bachelor's degree or higher (% of 25+) | 30.5 (±1.2) | 28.1 (±0.9) | 34.9 (±0.3) | DP02 |
| Civilian veterans (% of civilians 18+) | 14.0 (±0.8) | 13.4 (±0.6) | 7.2 (±0.1) | DP02 |
| Language other than English at home (% of 5+) | 8.3 (±0.6) | 7.2 (±0.4) | 15.5 (±0.1) | DP02 |
| Spanish at home (% of 5+) | 4.9 (±0.4) | 4.5 (±0.3) | 8.6 (±0.1) | DP02 |
| Armed Forces (count, population 16+) | 6595 (±571) | 13450 (±729) | 58682 (±2191) | DP03 |
| Armed Forces (% of population 16+) | 4.2 (±0.4) | 5.2 (±0.3) | 0.7 (±0.1) | DP03 |

## 3. Population change (PEP Vintage 2025)
| Geography (PEP Vintage 2025) | Base Apr 1 2020 | Jul 1 2024 | Jul 1 2025 | Change base→2025 (derived) |
|---|---|---|---|---|
| Georgia | 10,713,861 | 11,204,208 | 11,302,748 | +588,887 (+5.5%) |
| Columbus city | 206,914 | 202,072 | 202,171 | -4,743 (-2.3%) |
| Muscogee County | 206,914 | 202,072 | 202,171 | -4,743 (-2.3%) |
| Columbus, GA-AL [metro] | 328,880 | 324,393 | 324,830 | -4,050 (-1.2%) |
| Russell County, AL | 59,170 | 58,959 | 58,898 | -272 (-0.5%) |
| Chattahoochee County, GA | 9,568 | 8,391 | 8,465 | -1,103 (-11.5%) |
| Harris County, GA | 34,674 | 36,965 | 37,280 | +2,606 (+7.5%) |
| Marion County, GA | 7,503 | 7,616 | 7,676 | +173 (+2.3%) |
| Muscogee County, GA | 206,914 | 202,072 | 202,171 | -4,743 (-2.3%) |
| Stewart County, GA | 5,313 | 4,636 | 4,631 | -682 (-12.8%) |
| Talbot County, GA | 5,738 | 5,754 | 5,709 | -29 (-0.5%) |

**Key derived finding:** Columbus city −2.3% (base 2020 → July 2025), slight uptick 2024→2025 (+99); metro −1.2%; Harris County +7.5% is the growth exception; Chattahoochee County (−11.5%) — Fort Benning-area county — fell most. We do not attribute the decline to military changes (no source).

## 4. Other local context (sourced)
- **Fort Benning:** restored from Fort Moore at an April 16, 2025 ceremony "at the base just outside Columbus"; AP reported roughly 70,000 soldiers, civilian workers and military family members stationed there (`ap-fort-benning-name-restored-2025`). Army site shows "U.S. Army Fort Benning" on 2026-11-08 (`army-fort-benning-home`). Brief's "Fort Moore" label is outdated.
- **ACS:** civilian veterans 14.0% of city adults (±0.8) — about double the state's 7.2%; Armed Forces 4.2% of population 16+ (±0.4); metro Armed Forces 5.2%.
- **TRICARE dental:** active-duty members are covered by active duty dental benefits; family members can purchase the TRICARE Dental Program (administered by United Concordia, network search); retirees may be eligible for FEDVIP (`tricare-dental-care-overview`, `tricare-dental-program-tdp`). Hypothesis: for a meaningful share of Columbus households the deciding question is "is this office in my family's dental network?" — test with intake data.
- **One practice site** in our sample said it "proudly serve[s] military families"; none stated TDP network status on the homepage.

## 5. What the data supports — and what it does not
| Data point | Supported reading | Not supported |
|---|---|---|
| City −2.3%, metro −1.2% | Flat-to-declining resident base: growth must come from share and retention rather than market expansion. | That demand is falling (dental demand not measured). |
| Veterans 14.0%, Armed Forces 4.2% | Military-connected households are a large, identifiable segment; turnover from PCS moves is plausible but not measured here. | PCS move rates; TRICARE enrollment counts. |
| Public coverage 41.4% (city) | Payer clarity matters. | Medicaid dental participation. |
| Commute 20.9 min; WFH 12.1% | Short, on-site commutes. | Appointment time preferences. |
| Under-18 24.9% (highest of the five cities) | Large child population; family/pediatric content relevant. | Pediatric demand. |

## 6. Raw output of `node scripts/census.mjs "Columbus" GA` (default vintage 2024; retrieved 2026-11-08)

Geography: Columbus city · 160XX00US1319000 · American Community Survey 2020–2024 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)

| Variable | Label | Estimate | MOE |
|---|---|---|---|
| DP02_0001E | Total households | 81415 | 740 |
| DP02_0114PE | Percent of population 5+ speaking a language other than English at home | 8.3 | 0.6 |
| DP02_0115PE | Percent of population 5+ who speak English less than "very well" | 2.5 | 0.4 |
| DP02_0116PE | Percent of population 5+ speaking Spanish at home | 4.9 | 0.4 |
| DP02_0068PE | Percent of population 25+ with a bachelor's degree or higher | 30.5 | 1.2 |
| DP03_0062E | Median household income (inflation-adjusted dollars of the survey year) | 58073 | 1832 |
| DP03_0025E | Mean travel time to work (minutes) | 20.9 | 0.7 |
| DP03_0099PE | Percent of civilian noninstitutionalized population with no health insurance coverage | 11.1 | 0.9 |
| DP03_0074PE | Percent of households receiving SNAP/food stamp benefits in past 12 months | 16.8 | 1.2 |
| DP04_0046PE | Percent of occupied housing units that are owner-occupied | 50.8 | 1.4 |
| DP05_0001E | Total population | 203711 | no MOE published |
| DP05_0019PE | Percent of population under 18 years | 24.9 | 0.1 |
| DP05_0024PE | Percent of population 65 years and over | 14.8 | 0.1 |
| DP05_0018E | Median age (years) | 35.4 | 0.2 |

Citable URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1319000, https://data.census.gov/table/ACSDP5Y2024.DP03?g=160XX00US1319000, https://data.census.gov/table/ACSDP5Y2024.DP04?g=160XX00US1319000, https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US1319000
