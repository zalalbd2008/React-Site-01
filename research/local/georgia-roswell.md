# Market definition and public data — Roswell, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/roswell/
- **Method:** `node scripts/census.mjs "Roswell" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Roswell city · GEOID 160XX00US1367284 · County: Fulton County (a Cobb County part with an estimated population of 0)
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Roswell city (GEOID 1367284), in **Fulton County**; PEP lists a Cobb County part of Roswell with an estimated population of 0 (land only). Land 40.714 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060) — Roswell is one of the three principal cities in the MSA name — Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1367284 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1367284. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Roswell city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 92577 | 63 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 40.0 | 1.4 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.4% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 15.1% | 1.2 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 11.0% | 1.1 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 15.3% | 1.4 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 9.8% | 1.0 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 35436 | 1223 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 71.2% | 2.1 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 28.8% | 2.1 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 124422 | 7958 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 65454 | 3267 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 7.4% | 1.0 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 3.2% | 1.0 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 91.1% | 1.5 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 76.7% | 2.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 24.2% | 1.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 8.9% | 1.5 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 22.6% | 2.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 8.8% | 1.4 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 13.6% | 2.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 5.8% | 1.0 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 5.1% | 1.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 2.6% | 0.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 1.3% | 0.5 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 18.7% | 1.9 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 64.8% | 2.1 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 27.4 | 0.9 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 58.3% | 2.1 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 1.0% | 0.5 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 29.0% | 2.2 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 96.4% | 1.0 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 16.8% | 2.5 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 48799 | 1496 | B08008 |
| B08008 › living in a place › worked in place of residence | 21746 (44.6% of workers; derived) | 1247 | B08008 |
| B08008 › living in a place › worked outside place of residence | 27053 | 1595 | B08008 |

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
1. **Two-language suburb.** Spanish is spoken at home by 13.6% (±2.6), and 5.8% (±1.0) speak Spanish and English less than "very well" — far more than Alpharetta (2.5%) or Johns Creek (0.8%) next door. Hispanic or Latino residents 16.8%. *Hypothesis:* a genuine Spanish-language patient path (bilingual phone answering + real Spanish service pages) could reach an under-served segment. Do not assume preference from demographics; verify with call-language logs. One of three sampled sites names a Spanish-speaking dentist.
2. **Settled homeowners and older adults.** Owner-occupied 71.2%; 65–74 is 9.8% (±1.0), tied with Macon for the highest share in the batch; 65+ 15.1%. Hypothesis: retention, recall and restorative (dentures/implants) communication matter alongside family care.
3. **Out-commuting:** only 44.6% work in the city, including 29.0% who work from home.
4. **Slight decline** (−1.4%). Growth is from share, not population.
5. **Insurance:** 76.7% private, 24.2% public (65+ Medicare-driven at least partly — public coverage includes Medicare, which generally does not cover routine dental; do not overstate).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
