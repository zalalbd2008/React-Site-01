# Market definition and public data — Atlanta, Georgia

- **Batch:** markets-ga1 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/atlanta/
- **Method:** `node scripts/census.mjs "Atlanta" GA` (ACS 2020–2024 5-year Data Profiles via the data.census.gov table API) for the city; the same API and table IDs for counties, the metro and the state (script in the batch scratchpad; variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json`). Population change from Census PEP Vintage 2025 files `sub-est2025_13.csv` and `cbsa-est2025-alldata.csv` (www2.census.gov). Census QuickFacts was not used (403 to automated clients; not bypassed).
- **Census geography:** Atlanta city, Georgia · GEOID 160XX00US1304000 · land area 135.253 sq mi (2023 Gazetteer).
- **Source ids:** `census-acs5-2024-dp-atlanta-city-ga`, `census-acs5-2024-dp-fulton-county-ga`, `census-acs5-2024-dp-dekalb-county-ga`, `census-acs5-2024-dp-cobb-county-ga`, `census-acs5-2024-dp-gwinnett-county-ga`, `census-acs5-2024-dp-atlanta-msa`, `census-acs5-2024-dp-georgia`, `ga1-census-pep-v2025-places`, `ga1-census-pep-v2025-cbsa`.

## 1. Market definition
- **City:** Atlanta is an incorporated city. Most of it lies in Fulton County; part extends into DeKalb County. (County split is general knowledge, not quantified here — do not state shares on the page.)
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metro Area (CBSA 12060). The Vintage 2025 CBSA file lists **29 component counties**, all in Georgia.
- **Scale:** Atlanta city (529,110, July 2025) is about **8.2%** of the metro (6,482,182) — derived. The metro's Georgia counties hold about **57.4%** of Georgia's July 2025 population (derived from the CBSA file and the state total).
- **Correct labels:** "Atlanta (the city)" vs "metro Atlanta (the 29-county Atlanta-Sandy Springs-Roswell metro area)". Sandy Springs, Roswell, Alpharetta, Marietta, Johns Creek and Lawrenceville are separate cities with their own pages (markets-ga2).

## 2. ACS 2020–2024 5-year estimates
Table URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1304000 (and DP03, DP05); counties 0500000US13121 / 13089 / 13067 / 13135; metro 310XX00US12060; state 0400000US13.

| Measure (ACS 2020–2024 5-year) | Atlanta city | Fulton Co | DeKalb Co | Cobb Co | Gwinnett Co | Atlanta MSA | Georgia | Table |
|---|---|---|---|---|---|---|---|---|
| Total population | 505268 (±79) | 1076561 (no MOE published) | 765351 (no MOE published) | 775208 (no MOE published) | 979864 (no MOE published) | 6256377 (no MOE published) | 10940407 (no MOE published) | DP05 |
| Median age (years) | 34.2 (±0.3) | 36.4 (±0.1) | 36.4 (±0.2) | 37.5 (±0.2) | 36.0 (±0.2) | 37.2 (±0.1) | 37.6 (±0.1) | DP05 |
| Under 18 years (%) | 16.6 (±0.5) | 20.9 (±0.1) | 22.7 (±0.1) | 22.6 (no MOE published) | 26.0 (±0.1) | 23.6 (±0.1) | 23.2 (±0.1) | DP05 |
| 65 years and over (%) | 12.3 (±0.3) | 12.7 (±0.1) | 13.8 (±0.1) | 13.7 (±0.1) | 11.3 (±0.1) | 13.4 (±0.1) | 15.0 (±0.1) | DP05 |
| Total households | 236468 (±2330) | 462481 (±1915) | 287239 (±1844) | 295714 (±1381) | 327043 (±1100) | 2313055 (±5155) | 4074366 (±9635) | DP02 |
| Median household income (2024 dollars) | 85652 (±1846) | 95292 (±1748) | 80644 (±1859) | 102738 (±1561) | 87890 (±1617) | 89724 (±630) | 77353 (±407) | DP03 |
| Mean travel time to work (minutes) | 26.5 (±0.7) | 27.7 (±0.4) | 30.4 (±0.5) | 29.4 (±0.4) | 32.8 (±0.3) | 31.0 (±0.1) | 28.3 (±0.1) | DP03 |
| Worked from home (% of workers 16+) | 29.7 (±1.0) | 29.1 (±0.6) | 22.6 (±0.7) | 23.6 (±0.7) | 18.4 (±0.6) | 20.6 (±0.2) | 15.9 (±0.2) | DP03 |
| With private health insurance (%) | 71.5 (±0.9) | 72.9 (±0.7) | 66.1 (±0.8) | 72.9 (±0.8) | 65.7 (±0.7) | 69.2 (±0.3) | 66.0 (±0.3) | DP03 |
| With public coverage (%) | 26.6 (±0.8) | 26.0 (±0.5) | 30.8 (±0.7) | 24.4 (±0.6) | 26.8 (±0.6) | 28.4 (±0.2) | 32.7 (±0.2) | DP03 |
| No health insurance coverage (%) | 10.1 (±0.7) | 9.5 (±0.4) | 12.7 (±0.4) | 12.0 (±0.6) | 15.2 (±0.5) | 12.0 (±0.2) | 12.4 (±0.2) | DP03 |
| Bachelor's degree or higher (% of 25+) | 59.2 (±0.9) | 58.5 (±0.6) | 47.4 (±0.7) | 50.8 (±0.8) | 39.0 (±0.7) | 42.2 (±0.3) | 34.9 (±0.3) | DP02 |
| Civilian veterans (% of civilians 18+) | 3.9 (±0.3) | 4.6 (±0.2) | 5.4 (±0.3) | 6.1 (±0.2) | 5.0 (±0.3) | 6.2 (±0.1) | 7.2 (±0.1) | DP02 |
| Language other than English at home (% of 5+) | 12.2 (±0.6) | 17.7 (±0.4) | 21.1 (±0.7) | 21.9 (±0.6) | 38.1 (±0.6) | 19.9 (±0.2) | 15.5 (±0.1) | DP02 |
| Spanish at home (% of 5+) | 4.6 (±0.4) | 6.5 (±0.2) | 8.7 (±0.2) | 12.1 (±0.3) | 20.3 (±0.3) | 10.0 (±0.1) | 8.6 (±0.1) | DP02 |
| Armed Forces (count, population 16+) | 501 (±259) | 1044 (±395) | 482 (±180) | 956 (±270) | 588 (±222) | 6959 (±859) | 58682 (±2191) | DP03 |
| Armed Forces (% of population 16+) | 0.1 (±0.1) | 0.1 (±0.1) | 0.1 (±0.1) | 0.2 (±0.1) | 0.1 (±0.1) | 0.1 (±0.1) | 0.7 (±0.1) | DP03 |

## 3. Population change (PEP Vintage 2025)
| Geography (PEP Vintage 2025) | Base Apr 1 2020 | Jul 1 2024 | Jul 1 2025 | Change base→2025 (derived) |
|---|---|---|---|---|
| Georgia | 10,713,861 | 11,204,208 | 11,302,748 | +588,887 (+5.5%) |
| Atlanta city | 498,805 | 520,760 | 529,110 | +30,305 (+6.1%) |
| DeKalb County | 764,458 | 772,584 | 774,394 | +9,936 (+1.3%) |
| Fulton County | 1,066,559 | 1,090,468 | 1,098,791 | +32,232 (+3.0%) |
| Atlanta-Sandy Springs-Roswell, GA [metro] | 6,106,816 | 6,420,229 | 6,482,182 | +375,366 (+6.1%) |
| Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (part of the metro) | 4,766,683 | 4,999,054 | 5,044,702 | +278,019 (+5.8%) |
| Fulton County, GA (metro county) | 1,066,559 | 1,090,468 | 1,098,791 | +32,232 (+3.0%) |
| Gwinnett County, GA (metro county) | 957,385 | 1,009,864 | 1,018,099 | +60,714 (+6.3%) |
| Cobb County, GA (metro county) | 766,088 | 788,879 | 793,345 | +27,257 (+3.6%) |
| DeKalb County, GA (metro county) | 764,458 | 772,584 | 774,394 | +9,936 (+1.3%) |
| Cherokee County, GA (metro county) | 266,615 | 294,030 | 299,273 | +32,658 (+12.2%) |
| Clayton County, GA (metro county) | 299,406 | 297,233 | 297,471 | -1,935 (-0.6%) |
| Forsyth County, GA (metro county) | 251,285 | 278,797 | 282,805 | +31,520 (+12.5%) |
| Henry County, GA (metro county) | 240,686 | 259,972 | 264,922 | +24,236 (+10.1%) |
| Paulding County, GA (metro county) | 168,630 | 187,933 | 190,996 | +22,366 (+13.3%) |
| Coweta County, GA (metro county) | 146,159 | 158,178 | 160,240 | +14,081 (+9.6%) |

## 4. What the data supports — and what it does not
| Data point | Supported reading | Not supported (do not write) |
|---|---|---|
| City +6.1% vs metro +6.1% (base 2020→2025) | The city grew at the metro's pace; growth is not only suburban. Fastest metro counties in the top 10 by size are exurban (Forsyth +12.5%, Cherokee +12.2%, Henry +10.1%). | "Atlanta is booming with new patients"; any patient-demand estimate. |
| City is ~8% of metro population | A practice's real catchment is a set of nearby neighborhoods/corridors, not "Atlanta". | That a practice should target the metro. |
| Mean commute 26.5 min (city), 31.0 (metro); 29.7% of city workers worked from home | Long commutes metro-wide; a large remote-work share in the city — hypothesis: work-adjacent vs home-adjacent appointment demand differs by neighborhood. | That patients prefer lunch-hour or evening slots. |
| Language other than English: city 12.2%, Gwinnett 38.1%, DeKalb 21.1%, Cobb 21.9% | Language mix varies sharply by county; city figure is below metro (19.9%). | That any practice needs Spanish or other-language pages. Test with intake data. |
| Median household income city $85,652, Cobb $102,738, Fulton $95,292 | Income varies across the metro. | Cosmetic or implant demand. |
| Uninsured: city 10.1%, Gwinnett 15.2% | Coverage differs by county. | Dental-insurance rates (ACS measures health insurance, not dental). |
| Bachelor's+ 59.2% in the city | Highly educated resident base — hypothesis: comparison shopping and detailed reading of treatment/fee pages. | That copy should be "more sophisticated". |

## 6. Raw output of `node scripts/census.mjs "Atlanta" GA` (default vintage 2024; retrieved 2026-11-08)

Geography: Atlanta city · 160XX00US1304000 · American Community Survey 2020–2024 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)

| Variable | Label | Estimate | MOE |
|---|---|---|---|
| DP02_0001E | Total households | 236468 | 2330 |
| DP02_0114PE | Percent of population 5+ speaking a language other than English at home | 12.2 | 0.6 |
| DP02_0115PE | Percent of population 5+ who speak English less than "very well" | 3.0 | 0.3 |
| DP02_0116PE | Percent of population 5+ speaking Spanish at home | 4.6 | 0.4 |
| DP02_0068PE | Percent of population 25+ with a bachelor's degree or higher | 59.2 | 0.9 |
| DP03_0062E | Median household income (inflation-adjusted dollars of the survey year) | 85652 | 1846 |
| DP03_0025E | Mean travel time to work (minutes) | 26.5 | 0.7 |
| DP03_0099PE | Percent of civilian noninstitutionalized population with no health insurance coverage | 10.1 | 0.7 |
| DP03_0074PE | Percent of households receiving SNAP/food stamp benefits in past 12 months | 13.9 | 0.8 |
| DP04_0046PE | Percent of occupied housing units that are owner-occupied | 46.4 | 0.9 |
| DP05_0001E | Total population | 505268 | 79 |
| DP05_0019PE | Percent of population under 18 years | 16.6 | 0.5 |
| DP05_0024PE | Percent of population 65 years and over | 12.3 | 0.3 |
| DP05_0018E | Median age (years) | 34.2 | 0.3 |

Citable URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2024.DP03?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2024.DP04?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US1304000
