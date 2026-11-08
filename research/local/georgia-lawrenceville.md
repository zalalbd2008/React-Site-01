# Market definition and public data — Lawrenceville, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/lawrenceville/
- **Method:** `node scripts/census.mjs "Lawrenceville" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Lawrenceville city · GEOID 160XX00US1345488 · County: Gwinnett County
- **Metro:** Atlanta-Sandy Springs-Roswell, GA Metropolitan Statistical Area (CBSA 12060) · Division: Atlanta-Sandy Springs-Roswell, GA Metropolitan Division (12054)

## 1. Market definition
- **Incorporated geography:** Lawrenceville city (GEOID 1345488), in **Gwinnett County**; Georgia House Resolution 1697 (2025–2026 session) states the city "has proudly served as the county seat for more than two centuries" (`ga-house-hr1697-lawrenceville`). Land area only **13.795 sq mi**, smallest in the batch.
- **County context:** Gwinnett County population 1,018,099 (July 2025), up 6.3% from the 2020 base; the city (32,822) is about 3% of the county (derived).
- **Metro:** Atlanta-Sandy Springs-Roswell, GA MSA (CBSA 12060), Atlanta-Sandy Springs-Roswell Metropolitan Division (12054).
- **Postal caveat:** "Lawrenceville, GA" mailing addresses (ZIPs 30043/30044/30045/30046) cover a much larger area than the 13.8 sq mi city. Several sampled "Lawrenceville" practices sit on Duluth Hwy, Cruse Rd and Club Dr — whether they are inside city limits was **not** verified. City Census figures describe ~33k residents; a Lawrenceville-addressed practice's catchment is likely several times larger.

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1345488 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1345488. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Lawrenceville city, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 30626 | 47 | DP05 |
| SEX AND AGE › Total population › Median age (years) | 32.6 | 1.3 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.8% | 2.8 | DP05 |
| SEX AND AGE › Total population › 65 years and over | 12.0% | 1.7 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 16.2% | 2.9 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.1% | 1.9 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 6.3% | 0.9 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 11051 | 526 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 49.4% | 4.3 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 50.6% | 4.3 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 58606 | 6928 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 27890 | 1748 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 17.2% | 3.8 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 13.6% | 3.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 82.3% | 2.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 55.3% | 4.2 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 33.6% | 3.5 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 17.7% | 2.7 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 40.3% | 5.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 16.4% | 2.8 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 23.3% | 4.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 9.8% | 2.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 6.9% | 2.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 5.5% | 1.9 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 4.6% | 1.9 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 28.3% | 4.3 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 26.5% | 3.1 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 33.2 | 1.7 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 66.5% | 4.4 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 1.8% | 1.1 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 11.3% | 2.4 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 90.8% | 2.4 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 26.0% | 4.8 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 14914 | 998 | B08008 |
| B08008 › living in a place › worked in place of residence | 4226 (28.3% of workers; derived) | 587 | B08008 |
| B08008 › living in a place › worked outside place of residence | 10688 | 911 | B08008 |

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
1. **Most linguistically diverse city in the batch.** Language other than English at home 40.3% (±5.8); Spanish 23.3% (±4.5); Spanish with limited English 9.8% (±2.2); Hispanic 26.0%. MOEs are wide because the city is small. Hypothesis: Spanish-language intake (phone + pages) is likely to matter; test with call-language logs. One of five sampled sites is a Spanish-first practice website.
2. **Coverage mix:** uninsured 17.7% (±2.7), public coverage 33.6%, private 55.3%. Payment clarity is a conversion issue. None of the five sampled sites mentioned Medicaid or PeachCare on the homepage (not verified on inner pages).
3. **Fastest-growing city in the batch** (+7.1% 2020 → 2025; Gwinnett +6.3%). New residents need a first dentist.
4. **Heavy out-commuting:** only 28.3% of resident workers work in the city (incl. 11.3% WFH); mean commute 33.2 min (longest). Hypothesis: early-morning, evening and Saturday availability are a differentiator; two of five sampled sites advertise hours past 5 pm (one until 7 pm on Mondays, one 10 am–6 pm on weekdays).
5. **Youngest median age** (32.6) and renter-majority (50.6%).

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
