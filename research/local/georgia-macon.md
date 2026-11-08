# Market definition and public data — Macon, Georgia

- **Batch:** markets-ga2 · **Recorded:** 2026-11-08 · **Route:** /markets/georgia/macon/
- **Method:** `node scripts/census.mjs "Macon" GA` (ACS 2019–2023 5-year Data Profiles via the data.census.gov table API; full cached tables in `research/local/.cache/`), plus ACS table B08008 (place-level place of work) from the same API, Census Population Estimates Program Vintage 2025 subcounty file `sub-est2025_13.csv`, the Vintage 2025 CBSA file `cbsa-est2025-alldata.csv`, and the OMB July 2023 delineation list (`list1_2023.xlsx`). Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Census geography name:** Macon-Bibb County · GEOID 160XX00US1349008 · County: Bibb County
- **Metro:** Macon-Bibb County, GA Metropolitan Statistical Area (CBSA 31420) · Division: —

## 1. Market definition
- **Incorporated geography:** Census files list **"Macon-Bibb County"** as a single place (GEOID 1349008; Gazetteer LSAD 00, land area 249.383 sq mi). Its Vintage 2025 population (157,556) is identical to Bibb County's, because the city and county governments consolidated. UGA Today (17 Jan 2017) records that the consolidated government launched on **1 January 2014** (source `uga-today-macon-bibb-consolidation`).
- **Correct label:** "Macon-Bibb County, a consolidated city-county government in Middle Georgia." Do not call it "the city of Macon in Bibb County" as if two governments existed, and do not describe it as part of metro Atlanta.
- **Metro:** **Macon-Bibb County, GA Metropolitan Statistical Area** (CBSA 31420), five counties: Bibb, Crawford, Jones, Monroe, Twiggs. Vintage 2025 MSA population 238,553 (2020 base 233,807). Source: `census-cbsa-est2025-ga`, `omb-cbsa-delineation-2023-ga`. Bibb therefore holds about 66% of the MSA's residents (157,556 / 238,553, derived).
- Macon-Bibb is **not** in the Atlanta–Sandy Springs–Roswell MSA. Its own metro is the relevant market frame.

## 2. ACS 2019–2023 5-year estimates
Citation URLs: https://data.census.gov/table/ACSDP5Y2023.DP02?g=160XX00US1349008 (also DP03, DP04, DP05) and https://data.census.gov/table/ACSDT5Y2023.B08008?g=160XX00US1349008. "Controlled" = population controls, no sampling MOE published.

| Measure (ACS 2019–2023 5-year, Macon-Bibb County, Georgia) | Estimate | MOE (±) | Table |
|---|---|---|---|
| SEX AND AGE › Total population | 156543 | controlled (no MOE) | DP05 |
| SEX AND AGE › Total population › Median age (years) | 36.6 | 0.3 | DP05 |
| SEX AND AGE › Total population › Under 18 years | 24.5% | controlled (no MOE) | DP05 |
| SEX AND AGE › Total population › 65 years and over | 16.2% | 0.1 | DP05 |
| SEX AND AGE › Total population › 25 to 34 years | 14.1% | 0.1 | DP05 |
| SEX AND AGE › Total population › 45 to 54 years | 11.4% | 0.1 | DP05 |
| SEX AND AGE › Total population › 65 to 74 years | 9.8% | 0.1 | DP05 |
| HOUSEHOLDS BY TYPE › Total households | 59681 | 842 | DP02 |
| HOUSING TENURE › Occupied housing units › Owner-occupied | 51.5% | 1.4 | DP04 |
| HOUSING TENURE › Occupied housing units › Renter-occupied | 48.5% | 1.4 | DP04 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › Median household income (dollars) | 50747 | 2293 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Per capita income (dollars) | 31306 | 994 | DP03 |
| PERCENTAGE OF FAMILIES AND PEOPLE WHOSE INCOME IN THE PAST 12 MONTHS IS BELOW THE POVERTY LEVEL › All people | 24.8% | 1.7 | DP03 |
| INCOME AND BENEFITS (IN 2023 INFLATION-ADJUSTED DOLLARS) › Total households › With Food Stamp/SNAP benefits in the past 12 months | 22.1% | 1.4 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage | 86.4% | 1.0 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With private health insurance | 55.7% | 1.3 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › With health insurance coverage › With public coverage | 42.6% | 1.0 | DP03 |
| HEALTH INSURANCE COVERAGE › Civilian noninstitutionalized population › No health insurance coverage | 13.6% | 1.0 | DP03 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English | 5.9% | 0.5 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Language other than English › Speak English less than "very well" | 2.3% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish | 3.1% | 0.4 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Spanish › Speak English less than "very well" | 1.2% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other Indo-European languages | 1.2% | 0.3 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Asian and Pacific Islander languages | 1.2% | 0.2 | DP02 |
| LANGUAGE SPOKEN AT HOME › Population 5 years and over › Other languages | 0.4% | 0.2 | DP02 |
| PLACE OF BIRTH › Total population › Foreign-born | 3.7% | 0.3 | DP02 |
| EDUCATIONAL ATTAINMENT › Population 25 years and over › Bachelor's degree or higher | 26.0% | 1.2 | DP02 |
| COMMUTING TO WORK › Workers 16 years and over › Mean travel time to work (minutes) | 22.2 | 0.7 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Car, truck, or van -- drove alone | 77.8% | 1.6 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Public transportation (excluding taxicab) | 0.8% | 0.4 | DP03 |
| COMMUTING TO WORK › Workers 16 years and over › Worked from home | 8.7% | 1.2 | DP03 |
| COMPUTERS AND INTERNET USE › Total households › With a broadband Internet subscription | 85.3% | 1.3 | DP02 |
| HISPANIC OR LATINO AND RACE › Total population › Hispanic or Latino (of any race) | 4.5% | controlled (no MOE) | DP05 |
| B08008 Workers 16+ (place-level place of work) › total | 63336 | 1688 | B08008 |
| B08008 › living in a place › worked in place of residence | 49866 (78.7% of workers; derived) | 1673 | B08008 |
| B08008 › living in a place › worked outside place of residence | 13470 | 1022 | B08008 |

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
1. **Insurance and payment clarity is a primary conversion lever.** Public coverage 42.6% (±1.0) and no coverage 13.6% (±1.0) are both higher than any of the six Atlanta-area suburbs in this batch. *Hypothesis:* a larger share of inquiries arrive with a payment or coverage question first. Test: tag the first question asked on calls and forms for 60 days.
2. **Catchment extends beyond Bibb.** Bibb is ~66% of a five-county MSA. *Hypothesis:* a meaningful share of patients drive in from Jones, Monroe, Crawford, Twiggs or Houston County (Houston County is outside the MSA — check). Test: map patient ZIPs from the practice management system (totals only).
3. **Phone-first behaviour may be stronger, but must be measured.** Broadband subscription 85.3% (±1.3) is the lowest in the batch. This does **not** prove patients prefer phones; test call vs form vs online-booking share.
4. **Local workforce, short commutes.** 78.7% of workers work inside Macon-Bibb (B08008; this includes 8.7% who work from home) and mean commute is 22.2 min. *Hypothesis:* scheduling demand is less tied to a distant workplace than in the Atlanta suburbs; early-morning and late-afternoon slot demand still needs testing.
5. **Flat population** (+0.1% 2020–2025) → growth comes from share and retention, not market expansion.
6. **Low language need relative to Atlanta suburbs:** 5.9% (±0.5) speak a language other than English at home. Do not build Spanish pages by default here; decide from front-desk data.

## 6. What these data do NOT show
- Number of active dental offices, dentists per capita or appointment availability (NPI/directory counts are not offices and were not used).
- Cosmetic or implant demand (income is not a demand measure).
- Patients' language preference for health care (language spoken at home is a household characteristic).
- Dental insurance specifically (ACS measures health insurance; dental benefits are not measured here, and Medicare generally does not cover routine dental care).
- Search volumes, CPCs or competition levels — no keyword tool data were available on 2026-11-08; keywords are research candidates only.
