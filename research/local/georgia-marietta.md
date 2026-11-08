# Market definition and public data — Marietta, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/marietta/
- **Method:** `node scripts/census.mjs "Marietta" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Marietta city · GEOID 160XX00US1349756 · County: Cobb County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Marietta, GA Metropolitan Division (31924)

## 1. Market definition
- **Incorporated geography:** Marietta city (GEOID 1349756), entirely in **Cobb County**; the city's own site states Marietta "serves as the county seat in the center of Cobb County" (`mariettaga-where-is-marietta`). Land 23.507 sq mi. Population 63,574 (July 2025) vs Cobb County 793,345 — the city is about 8% of the county (derived).
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), but in a **separate Metropolitan Division: "Marietta, GA"** (31924), comprising Bartow, Cherokee, Cobb, Haralson and Paulding counties (July 2025 division population 1,437,480). This is the clearest statistical distinction from the Fulton and Gwinnett suburbs in this batch.
- **Postal caveat:** "Marietta" mailing addresses (and the East Cobb area) extend far beyond city limits; sampled practice sites with Marietta addresses describe "East Cobb" locations. City figures below describe city residents only.

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1349756 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1349756. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Marietta city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 62263 | 89 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 34.8 | 1.1 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 21.4% | 1.8 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 13.9% | 1.2 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 17.1% | 1.9 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.8% | 1.4 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 7.9% | 0.9 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 24707 | 883 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 47.2% | 2.5 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 52.8% | 2.5 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 72725 | 6808 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 44683 | 2650 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 12.8% | 2.0 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 8.9% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 82.1% | 2.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 64.0% | 3.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 25.8% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 17.9% | 2.6 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 24.9% | 2.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 11.3% | 1.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 15.8% | 2.1 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 8.7% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 5.0% | 1.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 1.4% | 0.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.7% | 0.9 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 18.1% | 2.3 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 47.4% | 2.8 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 27.5 | 1.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 63.2% | 2.8 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 0.7% | 0.3 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 19.3% | 2.5 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 94.0% | 1.4 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 18.1% | 2.0 | DP05 |
| SEX AND AGE › Total population › Under 5 years | 6.6% | 1.1 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 5.9% | 1.3 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 5.9% | 0.9 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 7.1% | 0.9 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 31982 | 1308 | B08008 |
| B08008 › living in a place › worked in place of residence | 13522 (42.3% of workers; derived) | 1133 | B08008 |
| B08008 › living in a place › worked outside place of residence | 18460 | 1328 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Marietta city) | Value |
|---|---|
| Estimates base April 1, 2020 | 61,060 |
| July 1, 2020 | 61,046 |
| July 1, 2021 | 61,458 |
| July 1, 2022 | 62,884 |
| July 1, 2023 | 63,217 |
| July 1, 2024 | 63,359 |
| July 1, 2025 | 63,574 |
| Change, base 2020 → July 2025 (derived) | +2,514 (+4.1%) |

## 4. Comparison with the other markets-ga2 cities (same tables)
| Measure | Macon | Sandy Springs | Alpharetta | Roswell | Marietta | Johns Creek | Lawrenceville |
|---|---|---|---|---|---|---|---|
| Population (ACS) | 156,578 | 107,087 | 66,855 | 92,621 | 62,263 | 81,988 | 30,954 |
| Median age | 36.8 | 36.8 | 41.3 | 40.5 | 34.8 | 43.3 | 32.9 |
| Under 18 | 24.4% | 18.4% | 23.9% | 24.5% | 21.4% | 26.0% | 24.8% |
| 65+ | 16.4% | 14.3% | 13.3% | 15.6% | 13.9% | 13.7% | 12.0% |
| Median HH income | $51,234 | $104,340 | $147,612 | $128,654 | $72,725 | $160,093 | $61,561 |
| Owner-occupied | 51.4% | 50.2% | 65.1% | 71.9% | 47.2% | 80.4% | 47.0% |
| Language other than English | 5.9% | 20.1% | 32.8% | 23.0% | 24.9% | 39.1% | 41.4% |
| Spanish at home | 3.1% | 8.3% | 7.5% | 13.4% | 15.8% | 4.9% | 26.1% |
| Asian/Pacific Isl. languages | 1.3% | 4.8% | 12.5% | 2.7% | 1.4% | 18.5% | 4.5% |
| Other Indo-European | 1.1% | 4.9% | 10.0% | 5.7% | 5.0% | 13.8% | 7.4% |
| No health insurance | 13.6% | 8.6% | 5.4% | 8.5% | 17.9% | 4.6% | 18.0% |
| Public coverage | 43.1% | 21.4% | 18.3% | 24.4% | 25.8% | 19.5% | 32.6% |
| Worked from home | 9.5% | 31.9% | 36.7% | 32.2% | 19.3% | 37.8% | 11.2% |
| Mean commute (min) | 22.2 | 25.8 | 26.3 | 26.9 | 27.5 | 30.1 | 32.1 |
| Workers who work in their city of residence (B08008, derived) | 78.5% | 47.4% | 56.5% | 47.5% | 42.3% | 47.3% | 29.4% |
| PEP change, 2020 base → July 2025 | +0.1% | -2.9% | +1.7% | -1.4% | +4.1% | -2.5% | +7.1% |
| Land area, sq mi (2023 Gazetteer) | 249.383 | 37.663 | 26.9 | 40.714 | 23.507 | 30.813 | 13.795 |

## 5. Working hypotheses (to test with client data — not conclusions)
1. **Uninsured share 17.9%, second only to Lawrenceville (18.0%)**, and lower private coverage (64.0%). Hypothesis: self-pay pricing transparency, membership plans and financing explanations will affect conversion more here than in north Fulton. Test: tag payment questions.
2. **Spanish-language need is measurable.** Spanish at home 15.8%; Spanish speakers with limited English 8.7% — second to Lawrenceville (10.0%). Hispanic 18.1% (DP05_0090PE). Hypothesis to test, not a conclusion.
3. **Renter-majority, younger city** (renters 52.8%; median age 34.8; 25–34 17.1%). Turnover-driven new-patient demand.
4. **Out-commuting:** 42.3% work in the city (incl. 19.3% WFH) — most working residents commute out.
5. **Growing** (+4.1% 2020–2025; Cobb +3.6%).
6. **City vs "Marietta" market:** a practice's real catchment probably spans East Cobb, Kennesaw and Smyrna (observed in agency announcements and practice sites). City-level Census data describe only one part of it; use county or ZIP data for East Cobb if the client is there.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
