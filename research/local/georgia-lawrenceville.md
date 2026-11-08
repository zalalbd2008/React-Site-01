# Market definition and public data — Lawrenceville, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/lawrenceville/
- **Method:** `node scripts/census.mjs "Lawrenceville" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Lawrenceville city · GEOID 160XX00US1345488 · County: Gwinnett County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Lawrenceville city (GEOID 1345488), in **Gwinnett County**; Georgia House Resolution 1697 (2025–2026 session) states the city "has proudly served as the county seat for more than two centuries" (`ga-house-hr1697-lawrenceville`). Land area only **13.795 sq mi**, smallest in the batch.
- **County context:** Gwinnett County population 1,018,099 (July 2025), up 6.3% from the 2020 base; the city (32,822) is about 3% of the county (derived).
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).
- **Postal caveat:** "Lawrenceville, GA" mailing addresses (ZIPs 30043/30044/30045/30046) cover a much larger area than the 13.8 sq mi city. Several sampled "Lawrenceville" practices sit on Duluth Hwy, Cruse Rd and Club Dr — whether they are inside city limits was **not** verified. City Census figures describe ~33k residents; a Lawrenceville-addressed practice's catchment is likely several times larger.

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1345488 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1345488. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Lawrenceville city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 30954 | 84 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 32.9 | 1.3 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.8% | 2.5 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 12.0% | 1.5 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 14.9% | 2.7 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.0% | 1.5 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 6.2% | 0.9 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 10719 | 568 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 47.0% | 3.7 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 53.0% | 3.7 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 61561 | 6072 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 29195 | 1672 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 15.4% | 3.5 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 13.6% | 3.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 82.0% | 2.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 56.2% | 4.3 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 32.6% | 3.6 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 18.0% | 2.7 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 41.4% | 4.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 15.6% | 2.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 26.1% | 3.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 10.0% | 2.0 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 7.4% | 2.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 4.5% | 1.7 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 3.5% | 1.6 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 29.5% | 3.2 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 26.0% | 3.1 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 32.1 | 2.2 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 66.1% | 3.8 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 0.7% | 0.5 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 11.2% | 2.4 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 91.9% | 2.1 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 31.3% | 4.0 | DP05 |
| SEX AND AGE › Total population › Under 5 years | 7.3% | 1.5 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 6.6% | 2.2 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 6.8% | 1.3 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 7.9% | 1.4 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 14957 | 930 | B08008 |
| B08008 › living in a place › worked in place of residence | 4397 (29.4% of workers; derived) | 626 | B08008 |
| B08008 › living in a place › worked outside place of residence | 10560 | 738 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Lawrenceville city) | Value |
|---|---|
| Estimates base April 1, 2020 | 30,638 |
| July 1, 2020 | 30,542 |
| July 1, 2021 | 30,273 |
| July 1, 2022 | 30,705 |
| July 1, 2023 | 31,242 |
| July 1, 2024 | 32,085 |
| July 1, 2025 | 32,822 |
| Change, base 2020 → July 2025 (derived) | +2,184 (+7.1%) |

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
1. **Most linguistically diverse city in the batch.** Language other than English at home 41.4%; Spanish 26.1%; Spanish with limited English 10.0% (highest in the batch); Hispanic 31.3% (DP05_0090PE). MOEs are wide because the city is small. Hypothesis: Spanish-language intake (phone + pages) is likely to matter; test with call-language logs. One of four analysed sites is a Spanish-first practice website.
2. **Coverage mix:** uninsured 18.0% (highest in the batch), public coverage 32.6%, private 56.2%. Payment clarity is a conversion issue. None of the four analysed sites mentioned Medicaid or PeachCare on the homepage (not verified on inner pages).
3. **Fastest-growing city in the batch** (+7.1% 2020 → 2025; Gwinnett +6.3%). New residents need a first dentist.
4. **Heavy out-commuting:** only 29.4% of resident workers work in the city (incl. 11.2% WFH); mean commute 32.1 min (longest). Hypothesis: early-morning, evening and Saturday availability are a differentiator; two of four analysed sites advertise hours past 5 pm (one until 7 pm on Mondays, one 10 am–6 pm on weekdays).
5. **Youngest median age** (32.9) and renter-majority (53.0%).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
