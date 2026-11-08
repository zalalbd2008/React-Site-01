# Market definition and public data — Sandy Springs, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/sandy-springs/
- **Method:** `node scripts/census.mjs "Sandy Springs" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Sandy Springs city · GEOID 160XX00US1368516 · County: Fulton County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Sandy Springs city (GEOID 1368516), **entirely in Fulton County** (PEP county-part rows show the whole population in Fulton, county 121). Land area 37.663 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), in the **Atlanta-Sandy Springs-Roswell, GA Metropolitan Division** (12054). The MSA name was checked on 2026-11-08 in the Vintage 2025 CBSA estimates file (`census-cbsa-est2025-ga`) and the July 2023 delineation (`omb-cbsa-delineation-2023-ga`). MSA population July 2025: 6,482,182.
- **Postal-address caveat (observed):** two of three practice sites sampled in Sandy Springs print an **"Atlanta, GA 30328/30342"** mailing address while describing themselves as Sandy Springs practices. City limits, ZIP codes and postal city names do not line up; any targeting must be built on the practice's actual catchment, not the city name.

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1368516 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1368516. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Sandy Springs city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 107198 | 40 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 37.1 | 1.0 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 18.1% | 1.1 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 14.1% | 0.8 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 20.4% | 1.4 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 13.3% | 0.8 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 7.3% | 0.6 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 52035 | 1188 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 50.7% | 1.8 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 49.3% | 1.8 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 101593 | 5239 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 80857 | 3148 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 7.4% | 1.4 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 3.6% | 0.8 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 91.8% | 1.2 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 80.6% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 21.1% | 1.4 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 8.2% | 1.2 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 19.1% | 1.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 5.2% | 0.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 7.7% | 1.0 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 2.4% | 0.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 5.2% | 0.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 4.4% | 0.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 1.8% | 0.6 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 16.8% | 1.3 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 69.9% | 1.9 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 26.6 | 1.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 60.1% | 1.9 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 3.6% | 0.9 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 29.0% | 1.9 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 94.2% | 1.4 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 11.4% | 1.4 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 63339 | 1458 | B08008 |
| B08008 › living in a place › worked in place of residence | 29339 (46.3% of workers; derived) | 1552 | B08008 |
| B08008 › living in a place › worked outside place of residence | 34000 | 1586 | B08008 |

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
1. **Younger, more mobile adult base.** 25–34-year-olds are 20.4% (±1.4) of residents — the highest share among the six suburbs — and renters occupy 49.3% (±1.8) of homes; under-18s are only 18.1%. *Hypothesis:* more patients are adults new to the area and choosing a first local dentist; search and reviews carry more weight than referrals. Test: "how did you hear about us" + new-mover flag.
2. **Population declining slightly** (−2.9% 2020 base → 2025 per PEP). Turnover, not growth, likely drives new-patient demand.
3. **Commuters and remote workers mixed.** Only 46.3% work in the city (this includes 29.0% working from home); 3.6% use public transit (highest of the suburbs, still small). *Hypothesis:* demand splits between home-anchored remote workers (midday availability) and out-commuters (early/late). Test with booking-time distribution.
4. **Insurance:** 80.6% private coverage; one sampled site states it does not accept Medicaid or HMO plans. Positioning around PPO participation and membership plans for the uninsured (8.2%) is a testable message.
5. **Language:** 19.1% speak a language other than English at home, spread across Spanish 7.7%, other Indo-European 5.2%, Asian/Pacific 4.4%. No single language dominates → hypothesis: multilingual staff notes beat full translated sections here.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
