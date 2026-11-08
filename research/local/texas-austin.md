# Austin, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Market definition

- **Incorporated city:** Austin city, Texas (GEOID 160XX00US4805000). Vintage 2025 estimate **1,002,632** — Austin crossed one million between 2024 and 2025 (CB26-80) — up from 958,151 at the April 2020 base (+44,481, +4.6%). 2024→2025: +4,025 (+0.40%), a much slower pace than its metro.
- **Counties:** Travis County part 929,657 (92.7%), **Williamson County part 72,071 (7.2%)**, Hays County part 904; Bastrop part shows zero (SUB-EST2025_48). Far-northwest Austin ZIPs such as 78717 and 78729 lie in Williamson County next to Cedar Park and Round Rock.
- **Metro:** Austin-Round Rock-San Marcos, TX MSA (CBSA 12420): Bastrop, Caldwell, Hays, Travis, Williamson counties (OMB 2023). Vintage 2025: 2,620,945; +53,796 in 2024–25 (6th nationally by numeric gain; +2.10%, the fastest percent pace of the four big Texas metros); **+337,554 (+14.8%) since April 2020**. Austin city ≈ 38.3% of the metro (our calculation). Williamson County +23,814 in 2024–25 (9th U.S. county by numeric gain); Caldwell County in the top 10 by percent; Hutto (Williamson County) +7.9%, 13th-fastest U.S. city of 20,000+.
- **Labels:** Round Rock, Cedar Park, Pflugerville, Georgetown, Hutto, San Marcos and Kyle are separate cities. Round Rock has its own seeded page (wave 2).

## ACS 2019–2023 profile

| Measure (ACS 2019–2023 5-year, DP tables) | Austin city | Austin-Round Rock-San Marcos MSA | Texas |
|---|---|---|---|
| Total population | 967,862 (±373) | 2,357,497 | 29,640,343 |
| Under 5 years | 5.4% (±0.2) | 5.8% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 18.3% (±0.3) | 22.1% (±0.1) | 25.2% (±0.1) |
| 65 years and over | 10.1% (±0.2) | 11.7% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 34.5 (±0.2) | 35.9 (±0.1) | 35.5 (±0.1) |
| Households | 440,294 (±2309) | 948,649 (±2472) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 29.8% (±0.7) | 27.8% (±0.4) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 20.1% (±0.6) | 19.6% (±0.4) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 10.3% (±0.5) | 9.1% (±0.3) | 12.8% (±0.1) |
| Foreign-born | 18.1% (±0.6) | 15.5% (±0.3) | 17.2% (±0.1) |
| Born in a different U.S. state | 31.1% (±0.5) | 30.8% (±0.3) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 3.8% (±0.3) | 3.1% (±0.2) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 58.2% (±0.6) | 49.9% (±0.4) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $91,461 (±1237) | $97,638 (±1163) | $76,292 (±265) |
| Mean travel time to work (minutes) | 24.0 (±0.4) | 27.3 (±0.2) | 26.7 (±0.1) |
| Workers who worked from home | 27.5% (±0.6) | 24.2% (±0.4) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 20.6% (±0.5) | 21.9% (±0.3) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 12.4% (±0.4) | 12.1% (±0.3) | 17.4% (±0.2) |
| Under 19 with no health insurance | 9.2% (±1.0) | 9.0% (±0.6) | 11.8% (±0.2) |
| Owner-occupied housing units | 44.4% (±0.7) | 58.9% (±0.5) | 62.6% (±0.2) |


## Observations and hypotheses

1. **Adult, mobile, remote-working city:** 18.3% under 18 (lowest of the five cities by a wide margin), 27.5% of workers worked from home (more than double Houston's 11.7%), 31.1% born in a different U.S. state, 3.8% lived in another state a year earlier (Texas 2.0%). Hypothesis: many residents choose a dentist without local word-of-mouth and are reachable around home/neighbourhood rather than commute corridors; daytime-weekday availability may matter differently when people work from home. Test against the practice's own booking-time data.
2. **Education and income:** 58.2% of adults 25+ hold a bachelor's or higher; median household income $91,461 (highest of the five). We do **not** infer cosmetic demand; we note that comparison shopping across websites is plausible and should be tested.
3. **Lower language and coverage gaps:** 29.8% speak a language other than English at home (20.1% Spanish; 10.3% speak English less than "very well"); 12.4% uninsured; 9.2% of under-19s uninsured — the lowest of the five on each.
4. **Renters:** 44.4% owner-occupied (metro 58.9%).
5. **Growth moved out:** city +4.6% since 2020 vs metro +14.8%; Williamson and Hays-side suburbs grow faster. Hypothesis: inner-city practices face slow population growth; edge practices face new competitors.

## Gaps

- No sourced data on dentist supply; no keyword-tool data; tech-sector employment changes not sourced (do not mention on page).
