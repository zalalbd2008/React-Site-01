# Market definition and public data — Marietta, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/marietta/
- **Method:** `node scripts/census.mjs "Marietta" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Marietta city · GEOID 160XX00US1349756 · County: Cobb County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Marietta, GA Metropolitan Division (31924)

## 1. Market definition
- **Incorporated geography:** Marietta city (GEOID 1349756), entirely in **Cobb County**; the city's own site states Marietta "serves as the county seat in the center of Cobb County" (`mariettaga-where-is-marietta`). Land 23.507 sq mi. Population 63,574 (July 2025) vs Cobb County 793,345 — the city is about 8% of the county (derived).
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), but in a **separate Metropolitan Division: "Marietta, GA"** (31924), comprising Bartow, Cherokee, Cobb, Haralson and Paulding counties (July 2025 division population 1,437,480). This is the clearest statistical distinction from the Fulton and Gwinnett suburbs in this batch.
- **Postal caveat:** "Marietta" mailing addresses (and the East Cobb area) extend far beyond city limits; sampled practice sites with Marietta addresses describe "East Cobb" locations. City figures below describe city residents only.

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1349756 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1349756. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Marietta city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 61773 | 52 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 35.2 | 1.0 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 20.9% | 1.8 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 14.8% | 1.3 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 16.2% | 1.6 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.3% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 8.9% | 0.9 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 24574 | 855 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 47.2% | 2.7 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 52.8% | 2.7 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 70086 | 4523 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 43074 | 2677 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 12.7% | 2.2 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 9.4% | 2.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 81.9% | 2.3 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 63.9% | 2.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 26.8% | 1.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 18.1% | 2.3 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 25.4% | 2.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 12.2% | 1.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 17.7% | 1.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 10.1% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 4.1% | 1.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 1.1% | 0.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.4% | 0.9 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 18.3% | 2.1 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 46.8% | 2.4 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 27.5 | 1.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 64.9% | 3.5 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 1.2% | 0.6 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 17.0% | 2.8 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 93.1% | 1.5 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 19.8% | 1.9 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 31909 | 1294 | B08008 |
| B08008 › living in a place › worked in place of residence | 12738 (39.9% of workers; derived) | 1378 | B08008 |
| B08008 › living in a place › worked outside place of residence | 19171 | 1357 | B08008 |

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
| Population (ACS) | 156,543 | 107,198 | 66,355 | 92,577 | 61,773 | 82,115 | 30,626 |
| Median age | 36.6 | 37.1 | 41.7 | 40.0 | 35.2 | 43.1 | 32.6 |
| Under 18 | 24.5% | 18.1% | 24.0% | 24.4% | 20.9% | 26.6% | 24.8% |
| 65+ | 16.2% | 14.1% | 12.1% | 15.1% | 14.8% | 12.5% | 12.0% |
| Median HH income | $50,747 | $101,593 | $146,581 | $124,422 | $70,086 | $160,185 | $58,606 |
| Owner-occupied | 51.5% | 50.7% | 68.0% | 71.2% | 47.2% | 79.7% | 49.4% |
| Language other than English | 5.9% | 19.1% | 31.6% | 22.6% | 25.4% | 37.6% | 40.3% |
| Spanish at home | 3.1% | 7.7% | 7.2% | 13.6% | 17.7% | 4.7% | 23.3% |
| Asian/Pacific Isl. languages | 1.2% | 4.4% | 11.8% | 2.6% | 1.1% | 17.6% | 5.5% |
| Other Indo-European | 1.2% | 5.2% | 9.8% | 5.1% | 4.1% | 13.0% | 6.9% |
| No health insurance | 13.6% | 8.2% | 5.3% | 8.9% | 18.1% | 4.0% | 17.7% |
| Public coverage | 42.6% | 21.1% | 16.9% | 24.2% | 26.8% | 18.2% | 33.6% |
| Worked from home | 8.7% | 29.0% | 34.1% | 29.0% | 17.0% | 33.8% | 11.3% |
| Mean commute (min) | 22.2 | 26.6 | 28.2 | 27.4 | 27.5 | 30.4 | 33.2 |
| Workers who work in their city of residence (B08008, derived) | 78.7% | 46.3% | 56.5% | 44.6% | 39.9% | 43.5% | 28.3% |
| PEP change, 2020 base → July 2025 | +0.1% | -2.9% | +1.7% | -1.4% | +4.1% | -2.5% | +7.1% |
| Land area, sq mi (2023 Gazetteer) | 249.383 | 37.663 | 26.9 | 40.714 | 23.507 | 30.813 | 13.795 |

## 5. Working hypotheses (to test with client data — not conclusions)
1. **Highest uninsured share in the batch** (18.1% ±2.3) and lower private coverage (63.9%). Hypothesis: self-pay pricing transparency, membership plans and financing explanations will affect conversion more here than in north Fulton. Test: tag payment questions.
2. **Spanish-language need is measurable.** Spanish at home 17.7% (±1.8); Spanish speakers with limited English 10.1% (±1.6) — the highest limited-English Spanish share among the seven cities. Hispanic 19.8%. Hypothesis to test, not a conclusion.
3. **Renter-majority, younger city** (renters 52.8%; median age 35.2; 25–34 16.2%). Turnover-driven new-patient demand.
4. **Out-commuting:** 39.9% work in the city (incl. 17.0% WFH) — most working residents commute out.
5. **Growing** (+4.1% 2020–2025; Cobb +3.6%).
6. **City vs "Marietta" market:** a practice's real catchment probably spans East Cobb, Kennesaw and Smyrna (observed in agency announcements and practice sites). City-level Census data describe only one part of it; use county or ZIP data for East Cobb if the client is there.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
