# Market definition and public data — Atlanta, Georgia

- **Batch:** markets-ga1 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/atlanta/
- **Method:** `node scripts/census.mjs "Atlanta" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API) for the city; the same API and table IDs for counties, the metro and the state (script in the batch scratchpad; variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`). Population change from Census PEP Vintage 2025 files `sub-est2025_13.csv` and `cbsa-est2025-alldata.csv` (www2.census.gov). Census QuickFacts was not used (403 to automated clients; not bypassed).
- **Census geography:** Atlanta city, Georgia · GEOID 160XX00US1304000 · land area 135.253 sq mi (2023 Gazetteer).
- **Source ids:** `census-acs5-2023-dp-atlanta-city-ga`, `census-acs5-2023-dp-fulton-county-ga`, `census-acs5-2023-dp-dekalb-county-ga`, `census-acs5-2023-dp-cobb-county-ga`, `census-acs5-2023-dp-gwinnett-county-ga`, `census-acs5-2023-dp-atlanta-msa`, `census-acs5-2023-dp-georgia`, `ga1-census-pep-v2025-places`, `ga1-census-pep-v2025-cbsa`.

## 1. Market definition
- **City:** Atlanta is an incorporated city. Most of it lies in Fulton County; part extends into DeKalb County. (County split is general knowledge, not quantified here — do not state shares on the page.)
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metro Area (CBSA 12060). The Vintage 2025 CBSA file lists **29 component counties**, all in Georgia.
- **Scale:** Atlanta city (529,110, July 2025) is about **8.2%** of the metro (6,482,182) — derived. The metro's Georgia counties hold about **57.4%** of Georgia's July 2025 population (derived from the CBSA file and the state total).
- **Correct labels:** "Atlanta (the city)" vs "metro Atlanta (the 29-county Atlanta-Sandy Springs-Roswell metro area)". Sandy Springs, Roswell, Alpharetta, Marietta, Johns Creek and Lawrenceville are separate cities with their own pages (markets-ga2).

## 2. ACS 2019–2023 5-year estimates
Table URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1304000 (and DP03, DP05); counties 0500000US13121 / 13089 / 13067 / 13135; metro 310XX00US12060; state 0400000US13.

| Measure (ACS 2019–2023 5-year) | Atlanta city | Fulton Co | DeKalb Co | Cobb Co | Gwinnett Co | Atlanta MSA | Georgia | Table |
|---|---|---|---|---|---|---|---|---|
| Total population | 499287 (±90) | 1068507 (no MOE published) | 762105 (no MOE published) | 769152 (no MOE published) | 966972 (no MOE published) | 6176937 (no MOE published) | 10822590 (no MOE published) | DP05 |
| Median age (years) | 34.0 (±0.3) | 36.2 (±0.2) | 36.3 (±0.2) | 37.4 (±0.2) | 35.9 (±0.2) | 37.0 (±0.2) | 37.4 (±0.1) | DP05 |
| Under 18 years (%) | 17.1 (±0.6) | 21.1 (±0.1) | 23.0 (±0.1) | 22.9 (no MOE published) | 26.4 (±0.1) | 23.8 (±0.1) | 23.5 (±0.1) | DP05 |
| 65 years and over (%) | 12.3 (±0.3) | 12.4 (±0.1) | 13.3 (±0.1) | 13.2 (±0.1) | 10.9 (±0.1) | 13.1 (±0.1) | 14.6 (±0.1) | DP05 |
| Total households | 231504 (±2419) | 457791 (±1671) | 284681 (±1814) | 293410 (±1383) | 322852 (±1128) | 2280747 (±4767) | 4008013 (±9372) | DP02 |
| Median household income (2023 dollars) | 81938 (±1945) | 91490 (±1266) | 77683 (±1640) | 98712 (±2149) | 84823 (±1363) | 86338 (±676) | 74664 (±431) | DP03 |
| Mean travel time to work (minutes) | 26.8 (±0.6) | 28.0 (±0.4) | 30.8 (±0.5) | 29.5 (±0.3) | 32.8 (±0.4) | 31.2 (±0.1) | 28.3 (±0.1) | DP03 |
| Worked from home (% of workers 16+) | 26.6 (±0.9) | 26.1 (±0.6) | 20.0 (±0.7) | 21.1 (±0.6) | 16.5 (±0.6) | 18.5 (±0.2) | 14.2 (±0.2) | DP03 |
| With private health insurance (%) | 70.4 (±1.0) | 72.3 (±0.7) | 65.8 (±0.8) | 73.2 (±0.7) | 65.7 (±0.8) | 69.1 (±0.3) | 65.9 (±0.3) | DP03 |
| With public coverage (%) | 27.2 (±0.8) | 26.4 (±0.5) | 30.6 (±0.6) | 24.0 (±0.5) | 26.3 (±0.7) | 28.2 (±0.2) | 32.4 (±0.2) | DP03 |
| No health insurance coverage (%) | 10.5 (±0.6) | 9.7 (±0.4) | 13.0 (±0.5) | 12.2 (±0.5) | 15.4 (±0.6) | 12.2 (±0.2) | 12.6 (±0.2) | DP03 |
| Bachelor's degree or higher (% of 25+) | 58.4 (±0.9) | 58.0 (±0.6) | 46.7 (±0.8) | 50.4 (±0.7) | 38.7 (±0.7) | 41.5 (±0.3) | 34.2 (±0.3) | DP02 |
| Civilian veterans (% of civilians 18+) | 4.1 (±0.3) | 4.7 (±0.3) | 5.7 (±0.3) | 6.5 (±0.3) | 5.3 (±0.3) | 6.5 (±0.1) | 7.4 (±0.1) | DP02 |
| Language other than English at home (% of 5+) | 11.7 (±0.5) | 17.2 (±0.4) | 20.6 (±0.7) | 21.6 (±0.5) | 37.4 (±0.6) | 19.5 (±0.2) | 15.0 (±0.1) | DP02 |
| Spanish at home (% of 5+) | 4.5 (±0.3) | 6.2 (±0.2) | 8.6 (±0.2) | 12.0 (±0.3) | 20.0 (±0.3) | 9.8 (±0.1) | 8.4 (±0.1) | DP02 |
| Armed Forces (count, population 16+) | 487 (±200) | 1084 (±325) | 448 (±197) | 1002 (±225) | 692 (±255) | 6795 (±803) | 59494 (±2036) | DP03 |
| Armed Forces (% of population 16+) | 0.1 (±0.1) | 0.1 (±0.1) | 0.1 (±0.1) | 0.2 (±0.1) | 0.1 (±0.1) | 0.1 (±0.1) | 0.7 (±0.1) | DP03 |

## 3. Population change (PEP Vintage 2025)
| Geography (PEP Vintage 2025) | Base Apr 1 2020 | Jul 1 2024 | Jul 1 2025 | Change base→2025 (derived) |
|---|---|---|---|---|
| Georgia | 10,713,861 | 11,204,208 | 11,302,748 | +588,887 (+5.5%) |
| Atlanta city | 498,805 | 520,760 | 529,110 | +30,305 (+6.1%) |
| DeKalb County | 764,458 | 772,584 | 774,394 | +9,936 (+1.3%) |
| Fulton County | 1,066,559 | 1,090,468 | 1,098,791 | +32,232 (+3.0%) |
| Atlanta-Sandy Springs-Roswell, GA [metro] | 6,106,816 | 6,420,229 | 6,482,182 | +375,366 (+6.1%) |
| Atlanta-Sandy Springs-Roswell, GA [metro] | 4,766,683 | 4,999,054 | 5,044,702 | +278,019 (+5.8%) |
| DeKalb County, GA | 764,458 | 772,584 | 774,394 | +9,936 (+1.3%) |
| Fulton County, GA | 1,066,559 | 1,090,468 | 1,098,791 | +32,232 (+3.0%) |
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
| Mean commute 26.8 min (city), 31.2 (metro); 26.6% of city workers worked from home | Long commutes metro-wide; a large remote-work share in the city — hypothesis: work-adjacent vs home-adjacent appointment demand differs by neighborhood. | That patients prefer lunch-hour or evening slots. |
| Language other than English: city 11.7%, Gwinnett 37.4%, DeKalb 20.6%, Cobb 21.6% | Language mix varies sharply by county; city figure is below metro (19.5%). | That any practice needs Spanish or other-language pages. Test with intake data. |
| Median household income city $81,938, Cobb $98,712, Fulton $91,490 | Income varies across the metro. | Cosmetic or implant demand. |
| Uninsured: city 10.5%, Gwinnett 15.4% | Coverage differs by county. | Dental-insurance rates (ACS measures health insurance, not dental). |
| Bachelor's+ 58.4% in the city | Highly educated resident base — hypothesis: comparison shopping and detailed reading of treatment/fee pages. | That copy should be "more sophisticated". |

## 6. Raw output of `node scripts/census.mjs "Atlanta" GA` (retrieved 2026-11-08)

Geography: Atlanta city · 160XX00US1304000 · American Community Survey 2019–2023 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)

| Variable | Label | Estimate | MOE |
|---|---|---|---|
| DP02_0001E | Total households | 231504 | 2419 |
| DP02_0114PE | Percent of population 5+ speaking a language other than English at home | 11.7 | 0.5 |
| DP02_0115PE | Percent of population 5+ who speak English less than "very well" | 3.0 | 0.3 |
| DP02_0116PE | Percent of population 5+ speaking Spanish at home | 4.5 | 0.3 |
| DP02_0068PE | Percent of population 25+ with a bachelor's degree or higher | 58.4 | 0.9 |
| DP03_0062E | Median household income (inflation-adjusted dollars of the survey year) | 81938 | 1945 |
| DP03_0025E | Mean travel time to work (minutes) | 26.8 | 0.6 |
| DP03_0099PE | Percent of civilian noninstitutionalized population with no health insurance coverage | 10.5 | 0.6 |
| DP03_0074PE | Percent of households receiving SNAP/food stamp benefits in past 12 months | 14.3 | 0.7 |
| DP04_0046PE | Percent of occupied housing units that are owner-occupied | 46.3 | 0.8 |
| DP05_0001E | Total population | 499287 | 90 |
| DP05_0019PE | Percent of population under 18 years | 17.1 | 0.6 |
| DP05_0024PE | Percent of population 65 years and over | 12.3 | 0.3 |
| DP05_0018E | Median age (years) | 34.0 | 0.3 |

Citable URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2023.DP03?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2023.DP04?g=160XX00US1304000, https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US1304000
