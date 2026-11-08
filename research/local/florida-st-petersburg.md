# St. Petersburg, Florida — market definition and public data

Retrieved and compiled 2026-11-08 (batch markets-fl2a). Sources: `census-acs5-2023-dp-st-petersburg`, `census-acs5-2023-dp-fl2a-counties`, `census-acs5-2023-b25004-fl2a`, `census-acs5-2023-c16001-fl2a`, `census-popest-v2025-fl-places`, `omb-cbsa-delineation-2023`, `nhc-tcr-helene-2024`, `nhc-tcr-milton-2024`.

## Market definition

- **St. Petersburg city** (Census place GEOID 1263000, LSAD 25 = city; land area 61.8 sq mi per 2023 Gazetteer) is in **Pinellas County**.
- Pinellas County is a central county of the **Tampa-St. Petersburg-Clearwater, FL Metropolitan Statistical Area** (CBSA 45300) and forms its own metropolitan division, **St. Petersburg-Clearwater-Largo, FL Metropolitan Division** (code 41304). Hillsborough County is the separate "Tampa, FL" division (45294). Source: OMB/Census delineation List 1, July 2023 (latest list on www2.census.gov as of 2026-11-08; directory shows no later vintage).
- No CSA is listed for CBSA 45300 in List 1 (2023).
- Distinct from the Tampa page: Tampa is in Hillsborough County across Old Tampa Bay. Do not reuse its analysis (its research file `research/local/florida-tampa.md` focuses on Hillsborough/Pasco growth and a younger city profile).

## ACS 2019–2023 5-year Data Profile, St. Petersburg city (scripts/census.mjs)

| Measure | Estimate | MOE |
|---|---|---|
| Total population | 260,646 | ±54 |
| Households | 116,772 | ±1,382 |
| Under 18 | 16.2% | ±0.6 |
| 65 and over | 20.5% | ±0.6 |
| Median age | 43.1 | ±0.6 |
| Language other than English at home (5+) | 12.9% | ±0.7 |
| Spanish at home | 6.1% | ±0.5 |
| English less than "very well" | 3.8% | ±0.4 |
| Bachelor's or higher (25+) | 41.3% | ±1.0 |
| Median household income | $73,118 | ±$1,734 |
| Mean travel time to work | 25.4 min | ±0.7 |
| No health insurance coverage | 10.5% | ±0.6 |
| Households receiving SNAP | 9.1% | ±0.7 |
| Owner-occupied housing | 63.0% | ±1.0 |

## Pinellas County comparison (ACS 2019–2023 DP)

65+ 25.9%; median age 48.9; language other than English 15.4%; Spanish 7.2%; median household income $70,293 (±$911); uninsured 10.7%; mean commute 25.3 min; households 423,242.

## Seasonal housing (B25004_006 / B25001)

- St. Petersburg city: 7,273 (±649) seasonal/recreational/occasional-use vacant units of 141,039 housing units = **5.2%**.
- Pinellas County: 49,440 (±1,658) of 518,180 = **9.5%**.
- Interpretation: seasonal units are proportionally lower in the city than in the county (beach towns are separate municipalities). Units ≠ people.

## Language detail (C16001, 5+; 249,042)

Spanish 6.1%; Russian/Polish/other Slavic 1.3%; other Indo-European 1.3%; French/Haitian/Cajun 1.1%; Vietnamese 0.7%; other Asian/PI 0.8%. No single non-English language group is large; MOEs relatively wide for small groups.

## Population estimates (Census Vintage 2025, SUB-EST2025)

| Geography | Base Apr 2020 | Jul 2024 | Jul 2025 | Base→2025 | 2024→2025 |
|---|---|---|---|---|---|
| St. Petersburg city | 258,358 | 265,855 | 264,033 | +2.2% | −0.7% |
| Pinellas County | 959,090 | 960,397 | 948,563 | −1.1% | −1.2% |
| Balance of Pinellas (unincorporated) | 275,049 | 271,486 | 267,706 | −2.7% | — |
| Tampa city (context) | 385,336 | 412,981 | 413,554 | +7.3% | +0.1% |

St. Petersburg is about 28% of Pinellas County's 2025 estimated population.

## Storm context (NHC Tropical Cyclone Reports)

- Helene (Sept 2024): St. Petersburg tide station water level 6.31 ft above MHHW; in Pinellas County 12 people drowned in the surge (2 in St. Petersburg, 9 on barrier islands St. Pete Beach–Indian Rocks Beach); at least 419 homes destroyed in Pinellas and Hillsborough combined, at least 18,512 structures with major damage (report dated 17 Feb 2026).
- Milton (Oct 2024): landfall Siesta Key; "major damage in the Sarasota and Tampa Bay areas"; Tropicana Field roof damaged in St. Petersburg; same area affected by Helene two weeks before.
- **Do not** attribute the 2024→2025 population decline to the storms: the estimates do not give causes. Page may note the two facts side by side with that caveat, or not at all.

## Cross-check: BEBR Florida Estimates of Population, April 1, 2025 (`bebr-florida-estimates-2025`, PDF retrieved 2026-11-08)

St. Petersburg city 266,153 (+3.0% vs 258,308 in 2020); Pinellas County 966,933 (+0.8% vs 959,107). BEBR (state) and Census Vintage 2025 (federal) use different methods and reference dates (April vs. July); sibling Florida pages cite BEBR, so pages in this batch cite both where growth is discussed and do not mix either with ACS period estimates.

## Hypotheses to test with client data (not claims)

1. A flat-to-declining resident base (county) means new-patient growth is more likely to come from share shift (switchers, people moving within the county, lapsed patients) than from population inflow. Test: new-patient source and address-change data in the PMS.
2. Low non-English share (12.9%) means bilingual pages are a lower first priority here than in Palm Beach County; still test call-language logs.
3. Older age profile than Tampa (20.5% 65+ city, 25.9% county): restorative/denture/implant and recall demand may be material — hypothesis only; test against procedure mix.
4. Storm disruption makes Business Profile hours accuracy and continuity messaging operationally important; test via GBP "special hours" history and call logs during closures.

## Gaps

- No neighbourhood (ZIP/tract) data pulled; no bridge-traffic data; no dentist supply data (NPI not used, per brief).
- ACS 2020–2024 5-year is now published; this batch used the project script default (2019–2023) as the brief instructs. Sibling Florida files (fl1 batch) used 2020–2024 — an editor may want to harmonise vintages across Florida pages.
