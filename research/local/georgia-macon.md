# Market definition and public data — Macon, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/macon/
- **Method:** `node scripts/census.mjs "Macon" GA` (ACS 2020–2024 5-year Data Profiles (vintage 2024, per the data vintage policy in docs/city-brief.md) via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (Hispanic or Latino is DP05_0090PE in 2024). An earlier draft used ACS 2019–2023; all figures below were replaced with 2020–2024 values on 2026-11-08.
- **Census geography name:** Macon-Bibb County · GEOID 160XX00US1349008 · County: Bibb County
- **Metro:** Macon-Bibb County, GA Metropolitan Statistical Area (CBSA 31420) · Division: —

## 1. Market definition
- **Incorporated geography:** Census files list **"Macon-Bibb County"** as a single place (GEOID 1349008; Gazetteer LSAD 00, land area 249.383 sq mi). Its Vintage 2025 population (157,556) is identical to Bibb County's, because the city and county governments consolidated. UGA Today (17 Jan 2017) records that the consolidated government launched on **1 January 2014** (source `uga-today-macon-bibb-consolidation`).
- **Correct label:** "Macon-Bibb County, a consolidated city-county government in Middle Georgia." Do not call it "the city of Macon in Bibb County" as if two governments existed, and do not describe it as part of metro Atlanta.
- **Metro:** **Macon-Bibb County, GA Metropolitan Statistical Area** (CBSA 31420), five counties: Bibb, Crawford, Jones, Monroe, Twiggs. Vintage 2025 MSA population 238,553 (2020 base 233,807). Source: `census-cbsa-est2025-ga`, `omb-cbsa-delineation-2023-ga`. Bibb therefore holds about 66% of the MSA's residents (157,556 / 238,553, derived).
- Macon-Bibb is **not** in the Atlanta–Sandy Springs–Roswell MSA. Its own metro is the relevant market frame.

## 2. ACS 2020–2024 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US1349008 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2024.B08008?g=160XX00US1349008. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2020–2024 5-year, Macon-Bibb County, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 156578 | controlled (no MOE) | DP05 |
| SEX AND AGE › Total population › Median age (years) | 36.8 | 0.3 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.4% | controlled (no MOE) | DP05 |
| SEX AND AGE › Total population › 65 years and over | 16.4% | 0.1 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 14.1% | 0.1 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.3% | 0.1 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 9.9% | 0.1 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 59921 | 748 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 51.4% | 1.6 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 48.6% | 1.6 | DP04 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 51234 | 2220 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 31699 | 1140 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 24.7% | 2.0 | DP03 |
| INCOME AND BENEFITS (IN 2024 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 22.3% | 1.7 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 86.4% | 0.9 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 55.0% | 1.4 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 43.1% | 1.4 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 13.6% | 0.9 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 5.9% | 0.6 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 2.2% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 3.1% | 0.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 1.1% | 0.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 1.1% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 1.3% | 0.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 0.4% | 0.2 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 3.8% | 0.5 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 26.3% | 1.2 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 22.2 | 0.8 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 76.2% | 1.7 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation | 0.8% | 0.3 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 9.5% | 0.9 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 85.8% | 1.2 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 4.7% | controlled (no MOE) | DP05 |
| SEX AND AGE › Total population › Under 5 years | 6.4% | 0.1 | DP05 |
| SEX AND AGE › Total population › 5 to 9 years | 6.1% | 0.5 | DP05 |
| SEX AND AGE › Total population › 10 to 14 years | 7.7% | 0.5 | DP05 |
| SEX AND AGE › Total population › 15 to 19 years | 6.9% | 0.1 | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 62314 | 1470 | B08008 |
| B08008 › living in a place › worked in place of residence | 48887 (78.5% of workers; derived) | 1581 | B08008 |
| B08008 › living in a place › worked outside place of residence | 13427 | 1104 | B08008 |

Note: "worked in place of residence" (B08008) **includes people who work from home**, so it overstates on-site local employment where remote work is common.

## 3. Population change (Census PEP Vintage 2025, released May 2026)
Source: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_13.csv

| Population Estimates Program, Vintage 2025 (Macon-Bibb County) | Value |
|---|---|
| Estimates base April 1, 2020 | 157,358 |
| July 1, 2020 | 157,054 |
| July 1, 2021 | 156,161 |
| July 1, 2022 | 156,302 |
| July 1, 2023 | 156,869 |
| July 1, 2024 | 157,360 |
| July 1, 2025 | 157,556 |
| Change, base 2020 → July 2025 (derived) | +198 (+0.1%) |

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
1. **Insurance and payment clarity is a primary conversion lever.** Public coverage 43.1% and no coverage 13.6% are both higher than any of the six Atlanta-area suburbs in this batch. *Hypothesis:* a larger share of inquiries arrive with a payment or coverage question first. Test: tag the first question asked on calls and forms for 60 days.
2. **Catchment extends beyond Bibb.** Bibb is ~66% of a five-county MSA. *Hypothesis:* a meaningful share of patients drive in from Jones, Monroe, Crawford, Twiggs or Houston County (Houston County is outside the MSA — check). Test: map patient ZIPs from the practice management system (totals only).
3. **Phone-first behaviour may be stronger, but must be measured.** Broadband subscription 85.8% is the lowest in the batch. This does **not** prove patients prefer phones; test call vs form vs online-booking share.
4. **Local workforce, short commutes.** 78.5% of workers work inside Macon-Bibb (B08008; this includes 9.5% who work from home) and mean commute is 22.2 min. *Hypothesis:* scheduling demand is less tied to a distant workplace than in the Atlanta suburbs; early-morning and late-afternoon slot demand still needs testing.
5. **Flat population** (+0.1% 2020–2025) → growth comes from share and retention, not market expansion.
6. **Low language need relative to Atlanta suburbs:** 5.9% speak a language other than English at home. Do not build Spanish pages by default here; decide from front-desk data.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
