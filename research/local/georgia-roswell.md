# Market definition and public data — Roswell, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/roswell/
- **Method:** `node scripts/census.mjs "Roswell" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Roswell city · GEOID 160XX00US1367284 · County: Fulton County (a Cobb County part with an estimated population of 0)
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Roswell city (GEOID 1367284), in **Fulton County**; PEP lists a Cobb County part of Roswell with an estimated population of 0 (land only). Land 40.714 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060) — Roswell is one of the three principal cities in the MSA name — Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1367284 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1367284. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Roswell city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 92621 | 54 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 40.5 | 1.3 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.5% | 1.6 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 15.6% | 1.1 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 10.9% | 1.2 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 15.5% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 9.7% | 0.9 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 35540 | 1424 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 71.9% | 2.1 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 28.1% | 2.1 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 128654 | 9864 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 67386 | 3576 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 7.5% | 1.3 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 3.5% | 1.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 91.5% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 76.7% | 3.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 24.4% | 1.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 8.5% | 1.7 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 23.0% | 3.1 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 8.6% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 13.4% | 2.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 5.4% | 1.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 5.7% | 1.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 2.7% | 0.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 1.2% | 0.3 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 18.2% | 2.1 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 66.0% | 2.1 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 26.9 | 1.0 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 55.7% | 2.3 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 0.6% | 0.3 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 32.2% | 2.4 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 96.6% | 1.0 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 16.3% | 2.6 | DP05 |
| SEX AND AGE › Total population › Under 5 years | 5.2% | 0.6 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 6.4% | 0.8 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 7.7% | 0.8 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 7.2% | 0.9 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 48918 | 1417 | B08008 |
| B08008 › living in a place › worked in place of residence | 23220 (47.5% of workers; derived) | 1155 | B08008 |
| B08008 › living in a place › worked outside place of residence | 25698 | 1578 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Roswell city) | Value |
|---|---|
| Estimates base April 1, 2020 | 92,834 |
| July 1, 2020 | 92,949 |
| July 1, 2021 | 92,672 |
| July 1, 2022 | 93,052 |
| July 1, 2023 | 91,986 |
| July 1, 2024 | 92,164 |
| July 1, 2025 | 91,505 |
| Change, base 2020 → July 2025 (derived) | -1,329 (-1.4%) |

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
1. **Two-language suburb.** Spanish is spoken at home by 13.4%, and 5.4% speak Spanish and English less than "very well" — more than twice the limited-English Spanish share in Alpharetta (2.3%) and far above Johns Creek (1.1%). Hispanic or Latino residents 16.3% (DP05_0090PE). *Hypothesis:* a genuine Spanish-language patient path (bilingual phone answering + real Spanish service pages) could reach an under-served segment. Do not assume preference from demographics; verify with call-language logs. One of three sampled sites names a Spanish-speaking dentist.
2. **Settled homeowners and older adults.** Owner-occupied 71.9%; 65–74 is 9.7%, second only to Macon-Bibb (9.9%) in the batch; 65+ 15.6%. Hypothesis: retention, recall and restorative (dentures/implants) communication matter alongside family care.
3. **Out-commuting:** only 47.5% work in the city, including 32.2% who work from home.
4. **Slight decline** (−1.4%). Growth is from share, not population.
5. **Insurance:** 76.7% private, 24.4% public (65+ Medicare-driven at least partly — public coverage includes Medicare, which generally does not cover routine dental; do not overstate).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
