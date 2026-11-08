# Fort Worth, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Market definition

- **Incorporated city:** Fort Worth city, Texas (GEOID 160XX00US4827000). Vintage 2025 estimate **1,028,117**, up from 918,892 at the April 2020 base (+109,225, **+11.9%** — the fastest of the five cities in this batch). 2024→2025: **+19,512 (+1.93%)**, the second-largest numeric gain of any U.S. city (after Charlotte). Fort Worth ranked 10th among U.S. cities in 2025, ahead of Jacksonville (CB26-80 Table 5).
- **Counties:** Tarrant County part 1,006,863 (97.9%), Denton County part 19,577, Parker County part 1,677; Johnson and Wise parts show zero residents (SUB-EST2025_48).
- **Metro:** Fort Worth sits in the **Fort Worth-Arlington-Grapevine metropolitan division** (Johnson, Parker, Tarrant, Wise counties) of the Dallas-Fort Worth-Arlington MSA (CBSA 19100) (OMB 2023). It is not part of the Dallas-Plano-Irving division. Fort Worth city ≈ 12.1% of the MSA population (our calculation). Tarrant County added about 18,000 housing units in 2024–25, fifth-largest county gain nationally (CB26-80).
- **Labels:** "Fort Worth" here means the incorporated city. Arlington, Haltom City, North Richland Hills, Keller and Benbrook are separate cities. Some north Fort Worth ZIPs (e.g. 76244) sit near Keller; some practices in our sample reference Keller in their content.

## ACS 2019–2023 profile (with Dallas for contrast)

| Measure (ACS 2019–2023 5-year, DP tables) | Fort Worth city | Dallas city | Dallas-Fort Worth-Arlington MSA | Texas |
|---|---|---|---|---|
| Total population | 941,311 (±527) | 1,299,553 (±141) | 7,807,555 | 29,640,343 |
| Under 5 years | 7.3% (±0.2) | 7.0% (±0.2) | 6.4% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 26.7% (±0.4) | 24.2% (±0.3) | 25.3% (±0.1) | 25.2% (±0.1) |
| 65 years and over | 10.5% (±0.2) | 11.4% (±0.2) | 11.9% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 33.4 (±0.3) | 33.4 (±0.2) | 35.5 (±0.1) | 35.5 (±0.1) |
| Households | 334,230 (±2680) | 528,038 (±2798) | 2,825,878 (±4240) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 32.5% (±0.7) | 41.1% (±0.5) | 31.7% (±0.2) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 24.9% (±0.6) | 35.1% (±0.4) | 21.9% (±0.2) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 12.2% (±0.5) | 18.2% (±0.4) | 11.9% (±0.1) | 12.8% (±0.1) |
| Foreign-born | 17.0% (±0.5) | 23.4% (±0.5) | 19.0% (±0.2) | 17.2% (±0.1) |
| Born in a different U.S. state | 25.5% (±0.7) | 21.1% (±0.4) | 26.4% (±0.2) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 2.0% (±0.2) | 2.2% (±0.1) | 2.1% (±0.1) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 31.7% (±0.7) | 37.4% (±0.6) | 38.5% (±0.3) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $76,602 (±946) | $67,760 (±887) | $87,155 (±524) | $76,292 (±265) |
| Mean travel time to work (minutes) | 26.9 (±0.4) | 26.0 (±0.2) | 28.0 (±0.1) | 26.7 (±0.1) |
| Workers who worked from home | 12.9% (±0.6) | 14.0% (±0.4) | 15.9% (±0.2) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 26.4% (±0.7) | 29.3% (±0.5) | 24.5% (±0.2) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 18.6% (±0.6) | 23.0% (±0.5) | 16.3% (±0.2) | 17.4% (±0.2) |
| Under 19 with no health insurance | 12.7% (±1.0) | 15.7% (±0.9) | 11.8% (±0.4) | 11.8% (±0.2) |
| Owner-occupied housing units | 56.7% (±0.7) | 42.4% (±0.6) | 60.0% (±0.3) | 62.6% (±0.2) |


## Observations and hypotheses

1. **Family-heavy, owner-occupied growth market:** 26.7% under 18 (highest of the five cities; Dallas 24.2%), 7.3% under 5, 56.7% owner-occupied (Dallas 42.4%). Hypothesis: family/pediatric and "new resident" acquisition matter more here than in Dallas; test with the practice's own new-patient age mix.
2. **Lower language need than Dallas:** 32.5% speak a language other than English at home (Dallas 41.1%); 24.9% Spanish; 12.2% speak English less than "very well". Spanish matters but is not the dominant variable it is in Houston or Dallas.
3. **Coverage:** 18.6% uninsured; 12.7% of under-19s uninsured — lower than Dallas (23.0% / 15.7%).
4. **Income:** $76,602 median household income, above Dallas ($67,760) — a reversal of the usual assumption that Dallas is the "richer" city; we do not infer cosmetic demand from it.
5. **Growth pace:** the city itself grew 11.9% in five years (Dallas 1.9%). Note: the one-year in-migration share from another state is similar (Fort Worth 2.0%, Dallas 2.2%), so growth does not show up as a distinctive out-of-state-mover share. Hypothesis (where in the city growth occurred is not sourced): newly built areas attract newly opened practices with few reviews, and new residents who search without an existing dentist.

## Gaps

- No sourced data on where within the city growth occurred (block/ZIP-level estimates not retrieved).
- No dentist-density data; no keyword tool data.
