# Market definition and public data — Alpharetta, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/alpharetta/
- **Method:** `node scripts/census.mjs "Alpharetta" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Alpharetta city · GEOID 160XX00US1301696 · County: Fulton County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Alpharetta city (GEOID 1301696), entirely in **Fulton County** (north Fulton). Land 26.9 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).
- **Postal caveat:** Alpharetta ZIP codes and mailing addresses extend beyond city limits (to be verified per client with ZIP/boundary maps; sampled sites mention Milton, Roswell and Johns Creek alongside Alpharetta).

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1301696 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1301696. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Alpharetta city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 66355 | 59 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 41.7 | 1.6 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.0% | 1.8 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 12.1% | 1.1 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 9.6% | 1.2 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 17.5% | 1.5 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 6.7% | 0.7 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 24810 | 717 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 68.0% | 2.4 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 32.0% | 2.4 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 146581 | 8555 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 72996 | 4128 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 5.3% | 1.6 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 4.1% | 1.2 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 94.7% | 1.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 85.1% | 1.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 16.9% | 1.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 5.3% | 1.1 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 31.6% | 2.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 8.5% | 1.4 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 7.2% | 1.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 2.5% | 0.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 9.8% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 11.8% | 1.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.7% | 1.1 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 27.5% | 2.3 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 71.7% | 2.2 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 28.2 | 1.4 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 56.8% | 2.9 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 0.7% | 0.4 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 34.1% | 2.8 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 97.0% | 0.9 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 9.1% | 1.4 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 34982 | 1107 | B08008 |
| B08008 › living in a place › worked in place of residence | 19763 (56.5% of workers; derived) | 1017 | B08008 |
| B08008 › living in a place › worked outside place of residence | 15219 | 1139 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Alpharetta city) | Value |
|---|---|
| Estimates base April 1, 2020 | 65,810 |
| July 1, 2020 | 65,962 |
| July 1, 2021 | 66,225 |
| July 1, 2022 | 67,282 |
| July 1, 2023 | 67,183 |
| July 1, 2024 | 67,123 |
| July 1, 2025 | 66,921 |
| Change, base 2020 → July 2025 (derived) | +1,111 (+1.7%) |

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
1. **Job-centre suburb with heavy remote work.** 56.5% of resident workers work inside Alpharetta — high for a suburb — but that figure includes the **34.1% (±2.8) who work from home**, the highest share in the batch. *Hypothesis:* more residents can take midday appointments; daytime population from in-commuters is a separate audience not measured by these tables. Test: appointment-time demand and "work nearby" intake question.
2. **Multilingual, not mainly Spanish.** 31.6% speak a language other than English; Asian/Pacific Island languages 11.8% and other Indo-European 9.8% exceed Spanish 7.2%. Foreign-born 27.5%. Do **not** infer which languages patients prefer for dental care; ask the front desk which languages callers use.
3. **Private insurance dominant** (85.1%); uninsured 5.3%. Two of three sampled sites advertise uninsured new-patient specials or in-house plans. Hypothesis: PPO network clarity and transparent self-pay options are the comparison points, not Medicaid.
4. **Middle-aged households:** 45–54 is 17.5% (±1.5); median age 41.7. Hypothesis: restorative/implant and adult ortho interest — **do not infer cosmetic demand from income**; test with service-line inquiry tags.
5. **Modest growth** (+1.7%).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
