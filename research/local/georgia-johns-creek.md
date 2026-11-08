# Market definition and public data — Johns Creek, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/johns-creek/
- **Method:** `node scripts/census.mjs "Johns Creek" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Johns Creek city · GEOID 160XX00US1342425 · County: Fulton County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Johns Creek city (GEOID 1342425), entirely in **Fulton County** (north-east Fulton). Land 30.813 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).
- **Neighbouring markets observed:** sampled practice and agency pages tie Johns Creek to Duluth and Suwanee (Gwinnett County) and Alpharetta. Cross-county catchments are likely; verify with patient ZIPs.

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1342425 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1342425. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Johns Creek city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 81988 | 98 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 43.3 | 0.8 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 26.0% | 1.4 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 13.7% | 1.1 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 7.9% | 1.0 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 17.6% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 8.8% | 0.8 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 28948 | 971 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 80.4% | 2.0 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 19.6% | 2.0 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 160093 | 7573 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 68479 | 2842 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 4.2% | 1.1 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 3.4% | 1.4 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 95.4% | 1.0 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 84.1% | 2.2 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 19.5% | 1.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 4.6% | 1.0 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 39.1% | 2.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 11.6% | 1.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 4.9% | 1.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 1.1% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 13.8% | 2.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 18.5% | 1.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.0% | 0.7 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 34.8% | 2.1 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 72.7% | 1.8 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 30.1 | 1.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 54.4% | 2.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 0.2% | 0.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 37.8% | 2.6 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 97.8% | 0.8 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 6.5% | 1.2 | DP05 |
| SEX AND AGE › Total population › Under 5 years | 4.9% | 0.7 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 6.9% | 1.0 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 8.5% | 0.8 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 7.9% | 0.9 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 39236 | 1118 | B08008 |
| B08008 › living in a place › worked in place of residence | 18577 (47.3% of workers; derived) | 1220 | B08008 |
| B08008 › living in a place › worked outside place of residence | 20659 | 1016 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Johns Creek city) | Value |
|---|---|
| Estimates base April 1, 2020 | 82,444 |
| July 1, 2020 | 82,579 |
| July 1, 2021 | 82,185 |
| July 1, 2022 | 82,477 |
| July 1, 2023 | 81,264 |
| July 1, 2024 | 80,956 |
| July 1, 2025 | 80,401 |
| Change, base 2020 → July 2025 (derived) | -2,043 (-2.5%) |

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
1. **Family market with school-age children.** Under-18 26.0%, the highest in the batch; ages 10–19 together ~16.4%. Owner-occupied 80.4%. Hypothesis: pediatric, orthodontic and family-scheduling content (several family members per visit) matter. Test via service-line tags.
2. **Most multilingual of the north Fulton suburbs:** 39.1% speak a language other than English; **Asian and Pacific Island languages 18.5%**, other Indo-European 13.8%, Spanish only 4.9%. Foreign-born 34.8%. 11.6% speak English less than "very well". One sampled site advertises staff fluent in Spanish and Korean. Do not infer which language a patient wants; log call languages.
3. **Highest income and lowest uninsured** ($160,093 median; 4.6% uninsured; 84.1% private coverage). Do **not** infer cosmetic demand from income.
4. **Shrinking population** (−2.5% 2020 base → 2025). Growth must come from share and from neighbouring cities.
5. **Long commutes and remote work:** mean commute 30.1 min; WFH 37.8% (highest in the batch); only 47.3% work in the city (including WFH).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
