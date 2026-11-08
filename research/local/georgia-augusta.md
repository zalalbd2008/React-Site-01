# Market definition and public data — Augusta, Georgia

- **Batch:** markets-ga1 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/augusta/
- **Method:** `node scripts/census.mjs "Augusta" GA` (resolves to the consolidated-government balance), plus the same ACS 2019–2023 tables for Richmond County, the metro and Georgia; PEP Vintage 2025 files. QuickFacts not used.
- **Census geography:** Augusta-Richmond County consolidated government (balance), Georgia · GEOID 160XX00US1304204 · land area 302.282 sq mi.
- **Source ids:** `census-acs5-2023-dp-augusta-richmond-balance-ga`, `census-acs5-2023-dp-richmond-county-ga`, `census-acs5-2023-dp-augusta-msa`, `census-acs5-2023-dp-georgia`, `ga1-census-pep-v2025-places`, `ga1-census-pep-v2025-cbsa`, `army-fort-gordon-home`, `wrdw-fort-gordon-name-restored-2025`, `augusta-dcg-heritage`, `tricare-dental-care-overview`.

## 1. Market definition
- **Government:** Augusta and Richmond County operate as a **consolidated city-county government**. The Census Bureau reports the "Augusta-Richmond County consolidated government (balance)" separately from Richmond County. PEP Vintage 2025: balance 201,999 vs Richmond County 206,559 (difference 4,560, derived) — the "balance" excludes other incorporated places inside the county. We did not name those places from a primary source; the page says only that the county total is slightly larger.
- **Metro:** Augusta-Richmond County, GA-SC Metro Area (CBSA 12260) = Burke, Columbia, Lincoln, McDuffie and Richmond counties (GA) **plus Aiken and Edgefield counties (SC)** (Vintage 2025 CBSA file). Two of seven counties are in South Carolina; Aiken County (181,515) is the metro's second-largest county after Richmond County (206,559) and ahead of Columbia County (169,189).
- **Correct labels:** "Augusta (the consolidated Augusta-Richmond County government)"; "the Augusta-Richmond County, GA-SC metro area". Do not call Columbia County "Augusta".

## 2. ACS 2019–2023 5-year estimates
Table URLs: https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US1304204 (and DP02, DP03); county 0500000US13245; metro 310XX00US12260.

| Measure (ACS 2019–2023 5-year) | Augusta-Richmond (balance) | Richmond Co | Augusta MSA | Georgia | Table |
|---|---|---|---|---|---|
| Total population | 201504 (±20) | 206040 (no MOE published) | 618022 (no MOE published) | 10822590 (no MOE published) | DP05 |
| Median age (years) | 34.9 (±0.1) | 35.0 (±0.2) | 38.2 (±0.2) | 37.4 (±0.1) | DP05 |
| Under 18 years (%) | 23.1 (±0.1) | 23.0 (±0.1) | 23.0 (±0.1) | 23.5 (±0.1) | DP05 |
| 65 years and over (%) | 14.8 (±0.1) | 14.9 (±0.1) | 16.9 (±0.1) | 14.6 (±0.1) | DP05 |
| Total households | 73493 (±1136) | 75023 (±1142) | 225591 (±1984) | 4008013 (±9372) | DP02 |
| Median household income (2023 dollars) | 53134 (±2396) | 53197 (±2385) | 66628 (±1362) | 74664 (±431) | DP03 |
| Mean travel time to work (minutes) | 20.6 (±0.6) | 20.8 (±0.6) | 23.9 (±0.4) | 28.3 (±0.1) | DP03 |
| Worked from home (% of workers 16+) | 8.3 (±1.2) | 8.3 (±1.1) | 8.7 (±0.6) | 14.2 (±0.2) | DP03 |
| With private health insurance (%) | 58.8 (±1.4) | 58.8 (±1.4) | 66.4 (±0.8) | 65.9 (±0.3) | DP03 |
| With public coverage (%) | 43.5 (±1.3) | 43.6 (±1.2) | 38.1 (±0.6) | 32.4 (±0.2) | DP03 |
| No health insurance coverage (%) | 11.5 (±0.9) | 11.6 (±0.8) | 10.0 (±0.5) | 12.6 (±0.2) | DP03 |
| Bachelor's degree or higher (% of 25+) | 24.2 (±1.3) | 24.1 (±1.3) | 28.8 (±0.8) | 34.2 (±0.3) | DP02 |
| Civilian veterans (% of civilians 18+) | 11.3 (±0.7) | 11.5 (±0.7) | 11.3 (±0.4) | 7.4 (±0.1) | DP02 |
| Language other than English at home (% of 5+) | 7.0 (±0.6) | 7.0 (±0.6) | 7.3 (±0.3) | 15.0 (±0.1) | DP02 |
| Spanish at home (% of 5+) | 3.7 (±0.4) | 3.7 (±0.4) | 4.2 (±0.2) | 8.4 (±0.1) | DP02 |
| Armed Forces (count, population 16+) | 7332 (±642) | 7369 (±646) | 11406 (±947) | 59494 (±2036) | DP03 |
| Armed Forces (% of population 16+) | 4.6 (±0.4) | 4.5 (±0.4) | 2.3 (±0.2) | 0.7 (±0.1) | DP03 |

## 3. Population change (PEP Vintage 2025)
| Geography (PEP Vintage 2025) | Base Apr 1 2020 | Jul 1 2024 | Jul 1 2025 | Change base→2025 (derived) |
|---|---|---|---|---|
| Georgia | 10,713,861 | 11,204,208 | 11,302,748 | +588,887 (+5.5%) |
| Augusta-Richmond County consolidated government (balance) | 202,071 | 201,979 | 201,999 | -72 (-0.0%) |
| Richmond County | 206,602 | 206,544 | 206,559 | -43 (-0.0%) |
| Augusta-Richmond County, GA-SC [metro] | 610,994 | 635,550 | 641,231 | +30,237 (+4.9%) |
| Burke County, GA | 24,597 | 24,365 | 24,408 | -189 (-0.8%) |
| Columbia County, GA | 156,019 | 167,263 | 169,189 | +13,170 (+8.4%) |
| Lincoln County, GA | 7,689 | 8,025 | 8,112 | +423 (+5.5%) |
| McDuffie County, GA | 21,628 | 21,743 | 21,640 | +12 (+0.1%) |
| Richmond County, GA | 206,602 | 206,544 | 206,559 | -43 (-0.0%) |
| Aiken County, SC | 168,810 | 178,363 | 181,515 | +12,705 (+7.5%) |
| Edgefield County, SC | 25,649 | 29,247 | 29,808 | +4,159 (+16.2%) |

**Key derived finding:** the consolidated-government balance was flat (−72 people, 0.0%) between the 2020 base and July 2025; Columbia County grew +8.4%, Aiken County SC +7.5%, Edgefield County SC +16.2%; metro +4.9%.

## 4. Other local context (sourced)
- **Fort Gordon:** the Augusta post was Fort Eisenhower for about a year and a half and became Fort Gordon again in June 2025 (`wrdw-fort-gordon-name-restored-2025`); the Army site shows "U.S. Army Fort Gordon" on 2026-11-08 (`army-fort-gordon-home`). Brief's "Fort Eisenhower" label is outdated.
- **ACS:** Armed Forces 4.6% of the balance's population 16+ (±0.4); civilian veterans 11.3% of adults (±0.7) vs 7.4% statewide.
- **Dental College of Georgia:** Augusta University describes DCG as Georgia's only dental school (`augusta-dcg-heritage`). Hypotheses: (a) a university clinic is part of the local patient-choice set; (b) associate recruitment and new-graduate practice starts are a local dynamic. Neither is quantified.
- **TRICARE dental:** see `tricare-dental-care-overview`.

## 5. What the data supports — and what it does not
| Data point | Supported reading | Not supported |
|---|---|---|
| Balance flat; Columbia County +8.4%; SC counties growing | Household growth is in Columbia County and across the river in SC. | That SC residents will cross for care (test with patient ZIPs). |
| Public coverage 43.5% (balance) vs 32.4% state; private 58.8% | Payer mix in the consolidated city differs markedly from the state; insurance and payment clarity on the website is a deciding detail. | Dental Medicaid participation or acceptance rates. |
| Bachelor's+ 24.2% (balance) vs 34.2% state | Different education profile from Athens/Atlanta. | Reading-level prescriptions beyond plain-language good practice. |
| Commute 20.6 min; WFH 8.3% | Short commutes, mostly on-site work. | Appointment time preferences. |
| Language other than English 7.0% | Lower than state (15.0%). | That no language pages are needed — check intake data. |

## 6. Raw output of `node scripts/census.mjs "Augusta" GA` (retrieved 2026-11-08)

Geography: Augusta-Richmond County consolidated government (balance) · 160XX00US1304204 · American Community Survey 2019–2023 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)

| Variable | Label | Estimate | MOE |
|---|---|---|---|
| DP02_0001E | Total households | 73493 | 1136 |
| DP02_0114PE | Percent of population 5+ speaking a language other than English at home | 7.0 | 0.6 |
| DP02_0115PE | Percent of population 5+ who speak English less than "very well" | 1.7 | 0.2 |
| DP02_0116PE | Percent of population 5+ speaking Spanish at home | 3.7 | 0.4 |
| DP02_0068PE | Percent of population 25+ with a bachelor's degree or higher | 24.2 | 1.3 |
| DP03_0062E | Median household income (inflation-adjusted dollars of the survey year) | 53134 | 2396 |
| DP03_0025E | Mean travel time to work (minutes) | 20.6 | 0.6 |
| DP03_0099PE | Percent of civilian noninstitutionalized population with no health insurance coverage | 11.5 | 0.9 |
| DP03_0074PE | Percent of households receiving SNAP/food stamp benefits in past 12 months | 21.1 | 1.2 |
| DP04_0046PE | Percent of occupied housing units that are owner-occupied | 50.9 | 1.4 |
| DP05_0001E | Total population | 201504 | 20 |
| DP05_0019PE | Percent of population under 18 years | 23.1 | 0.1 |
| DP05_0024PE | Percent of population 65 years and over | 14.8 | 0.1 |
| DP05_0018E | Median age (years) | 34.9 | 0.1 |

Citable URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1304204, https://data.census.gov/table/ACSDP5Y2023.DP03?g=160XX00US1304204, https://data.census.gov/table/ACSDP5Y2023.DP04?g=160XX00US1304204, https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US1304204
