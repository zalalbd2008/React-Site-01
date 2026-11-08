# Market definition and public data — Sandy Springs, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/sandy-springs/
- **Method:** `node scripts/census.mjs "Sandy Springs" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Sandy Springs city · GEOID 160XX00US1368516 · County: Fulton County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Sandy Springs city (GEOID 1368516), **entirely in Fulton County** (PEP county-part rows show the whole population in Fulton, county 121). Land area 37.663 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), in the **Atlanta-Sandy Springs-Roswell, GA Metropolitan Division** (12054). The MSA name was checked on 2026-11-08 in the Vintage 2025 CBSA estimates file (`census-cbsa-est2025-ga`) and the July 2023 delineation (`omb-cbsa-delineation-2023-ga`). MSA population July 2025: 6,482,182.
- **Postal-address caveat (observed):** two of three practice sites sampled in Sandy Springs print an **"Atlanta, GA 30328/30342"** mailing address while describing themselves as Sandy Springs practices. City limits, ZIP codes and postal city names do not line up; any targeting must be built on the practice's actual catchment, not the city name.

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1368516 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1368516. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Sandy Springs city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 107087 | 50 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 36.8 | 0.8 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 18.4% | 1.1 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 14.3% | 0.8 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 21.1% | 1.5 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 12.9% | 0.9 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 7.8% | 0.6 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 51647 | 1226 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 50.2% | 2.1 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 49.8% | 2.1 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 104340 | 4421 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 83136 | 3310 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 8.5% | 1.2 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 4.1% | 0.9 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 91.4% | 1.1 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 79.9% | 1.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 21.4% | 1.3 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 8.6% | 1.1 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 20.1% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 5.3% | 0.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 8.3% | 1.1 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 2.8% | 0.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 4.9% | 0.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 4.8% | 0.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.2% | 0.6 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 17.2% | 1.6 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 69.2% | 1.9 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 25.8 | 1.4 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 58.7% | 2.1 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 2.9% | 0.9 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 31.9% | 2.0 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 94.8% | 1.4 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 11.8% | 1.2 | DP05 |
| SEX AND AGE › Total population › Under 5 years | 6.1% | 0.7 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 5.1% | 0.7 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 4.1% | 0.6 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 4.6% | 0.7 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 62833 | 1311 | B08008 |
| B08008 › living in a place › worked in place of residence | 29774 (47.4% of workers; derived) | 1371 | B08008 |
| B08008 › living in a place › worked outside place of residence | 33059 | 1614 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Sandy Springs city) | Value |
|---|---|
| Estimates base April 1, 2020 | 108,110 |
| July 1, 2020 | 108,225 |
| July 1, 2021 | 107,418 |
| July 1, 2022 | 107,920 |
| July 1, 2023 | 106,211 |
| July 1, 2024 | 105,487 |
| July 1, 2025 | 105,013 |
| Change, base 2020 → July 2025 (derived) | -3,097 (-2.9%) |

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
1. **Younger, more mobile adult base.** 25–34-year-olds are 21.1% of residents — the highest share among the six suburbs — and renters occupy 49.8% of homes; under-18s are only 18.4%. *Hypothesis:* more patients are adults new to the area and choosing a first local dentist; search and reviews carry more weight than referrals. Test: "how did you hear about us" + new-mover flag.
2. **Population declining slightly** (−2.9% 2020 base → 2025 per PEP). Turnover, not growth, likely drives new-patient demand.
3. **Commuters and remote workers mixed.** Only 47.4% work in the city (this includes 31.9% working from home); 2.9% use public transit (highest of the suburbs, still small). *Hypothesis:* demand splits between home-anchored remote workers (midday availability) and out-commuters (early/late). Test with booking-time distribution.
4. **Insurance:** 79.9% private coverage; one sampled site states it does not accept Medicaid or HMO plans. Positioning around PPO participation and membership plans for the uninsured (8.6%) is a testable message.
5. **Language:** 20.1% speak a language other than English at home, spread across Spanish 8.3%, other Indo-European 4.9%, Asian/Pacific 4.8%. No single language dominates → hypothesis: multilingual staff notes beat full translated sections here.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
