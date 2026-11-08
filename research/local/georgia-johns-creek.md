# Market definition and public data — Johns Creek, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/johns-creek/
- **Method:** `node scripts/census.mjs "Johns Creek" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Johns Creek city · GEOID 160XX00US1342425 · County: Fulton County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Johns Creek city (GEOID 1342425), entirely in **Fulton County** (north-east Fulton). Land 30.813 sq mi.
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).
- **Neighbouring markets observed:** sampled practice and agency pages tie Johns Creek to Duluth and Suwanee (Gwinnett County) and Alpharetta. Cross-county catchments are likely; verify with patient ZIPs.

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1342425 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1342425. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Johns Creek city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 82115 | 68 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 43.1 | 0.9 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 26.6% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 12.5% | 1.0 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 7.5% | 1.0 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 18.3% | 1.3 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 8.0% | 0.8 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 28753 | 985 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 79.7% | 2.2 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 20.3% | 2.2 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 160185 | 7861 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 65986 | 2363 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 3.9% | 1.1 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 3.9% | 1.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 96.0% | 0.9 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 85.3% | 2.0 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 18.2% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 4.0% | 0.9 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 37.6% | 2.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 10.2% | 1.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 4.7% | 1.1 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 0.8% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 13.0% | 2.0 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 17.6% | 1.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 2.3% | 0.7 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 33.2% | 2.0 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 70.7% | 2.0 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 30.4 | 1.0 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 57.4% | 2.6 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 0.5% | 0.3 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 33.8% | 2.6 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 97.8% | 0.9 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 6.3% | 1.1 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 39456 | 1246 | B08008 |
| B08008 › living in a place › worked in place of residence | 17154 (43.5% of workers; derived) | 1175 | B08008 |
| B08008 › living in a place › worked outside place of residence | 22302 | 1071 | B08008 |

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
1. **Family market with school-age children.** Under-18 26.6% (±1.3), the highest in the batch; ages 10–19 together ~17%. Owner-occupied 79.7%. Hypothesis: pediatric, orthodontic and family-scheduling content (several family members per visit) matter. Test via service-line tags.
2. **Most multilingual of the north Fulton suburbs:** 37.6% speak a language other than English; **Asian and Pacific Island languages 17.6% (±1.6)**, other Indo-European 13.0%, Spanish only 4.7%. Foreign-born 33.2%. 10.2% speak English less than "very well". One sampled site advertises staff fluent in Spanish and Korean. Do not infer which language a patient wants; log call languages.
3. **Highest income and lowest uninsured** ($160,185 median; 4.0% uninsured; 85.3% private coverage). Do **not** infer cosmetic demand from income.
4. **Shrinking population** (−2.5% 2020 base → 2025). Growth must come from share and from neighbouring cities.
5. **Long commutes and remote work:** mean commute 30.4 min; WFH 33.8%; only 43.5% work in the city (including WFH).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
