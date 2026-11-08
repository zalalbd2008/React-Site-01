# Dallas, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Market definition

- **Incorporated city:** Dallas city, Texas (GEOID 160XX00US4819000). Vintage 2025 estimate 1,329,491, up from 1,304,341 at the April 2020 base (+25,150, +1.9%). **2024→2025: −1,808 (−0.14%)** — the only one of the five Texas cities in this batch with an estimated one-year decline. Dallas County also fell slightly (2,664,013 → 2,661,397).
- **Counties:** Dallas County part 1,245,355 (93.7%), Collin County part 54,266, Denton County part 29,865, Rockwall County part 5; a Kaufman County part shows zero residents (SUB-EST2025_48).
- **Metro:** Dallas-Fort Worth-Arlington, TX MSA (CBSA 19100), split into two metropolitan divisions: **Dallas-Plano-Irving** (Collin, Dallas, Denton, Ellis, Hunt, Kaufman, Rockwall) and **Fort Worth-Arlington-Grapevine** (Johnson, Parker, Tarrant, Wise) (OMB 2023). Vintage 2025 metro: 8,477,157; +123,557 in 2024–25 (2nd nationally); +838,863 (+11.0%) since April 2020. Dallas city ≈ 15.7% of the metro population (our calculation).
- **Where the growth is:** Collin County +42,966 in 2024–25 (2nd-largest numeric gain of any U.S. county); Kaufman County +5.7% (3rd by percent). Four of the five fastest-growing U.S. cities of 20,000+ are DFW suburbs (Celina 24.6%, Princeton 18.1%, Melissa 14.5%, Anna 10.2%); McKinney +8,504 (10th by numeric gain).
- **Labels:** Plano, Frisco, McKinney, Irving and Arlington are separate cities with their own seeded pages; Fort Worth is a separate city and page. This page is about practices inside Dallas city limits and those whose patients come from Dallas neighbourhoods.

## ACS 2019–2023 profile (with Fort Worth for contrast)

| Measure (ACS 2019–2023 5-year, DP tables) | Dallas city | Fort Worth city | Dallas-Fort Worth-Arlington MSA | Texas |
|---|---|---|---|---|
| Total population | 1,299,553 (±141) | 941,311 (±527) | 7,807,555 | 29,640,343 |
| Under 5 years | 7.0% (±0.2) | 7.3% (±0.2) | 6.4% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 24.2% (±0.3) | 26.7% (±0.4) | 25.3% (±0.1) | 25.2% (±0.1) |
| 65 years and over | 11.4% (±0.2) | 10.5% (±0.2) | 11.9% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 33.4 (±0.2) | 33.4 (±0.3) | 35.5 (±0.1) | 35.5 (±0.1) |
| Households | 528,038 (±2798) | 334,230 (±2680) | 2,825,878 (±4240) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 41.1% (±0.5) | 32.5% (±0.7) | 31.7% (±0.2) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 35.1% (±0.4) | 24.9% (±0.6) | 21.9% (±0.2) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 18.2% (±0.4) | 12.2% (±0.5) | 11.9% (±0.1) | 12.8% (±0.1) |
| Foreign-born | 23.4% (±0.5) | 17.0% (±0.5) | 19.0% (±0.2) | 17.2% (±0.1) |
| Born in a different U.S. state | 21.1% (±0.4) | 25.5% (±0.7) | 26.4% (±0.2) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 2.2% (±0.1) | 2.0% (±0.2) | 2.1% (±0.1) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 37.4% (±0.6) | 31.7% (±0.7) | 38.5% (±0.3) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $67,760 (±887) | $76,602 (±946) | $87,155 (±524) | $76,292 (±265) |
| Mean travel time to work (minutes) | 26.0 (±0.2) | 26.9 (±0.4) | 28.0 (±0.1) | 26.7 (±0.1) |
| Workers who worked from home | 14.0% (±0.4) | 12.9% (±0.6) | 15.9% (±0.2) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 29.3% (±0.5) | 26.4% (±0.7) | 24.5% (±0.2) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 23.0% (±0.5) | 18.6% (±0.6) | 16.3% (±0.2) | 17.4% (±0.2) |
| Under 19 with no health insurance | 15.7% (±0.9) | 12.7% (±1.0) | 11.8% (±0.4) | 11.8% (±0.2) |
| Owner-occupied housing units | 42.4% (±0.6) | 56.7% (±0.7) | 60.0% (±0.3) | 62.6% (±0.2) |


## Observations and hypotheses

1. **Flat core, booming edge:** the city added 1.9% since 2020 and slipped in the latest year while the northern suburbs grew fastest in the nation. Hypothesis: Dallas-city practices compete for patient share rather than new arrivals; growth campaigns elsewhere in DFW will not transfer.
2. **Renters:** only 42.4% of occupied units are owner-occupied (Fort Worth 56.7%; metro 60.0%). Hypothesis: higher residential churn makes patient retention, recall and address-independent discovery (search by neighbourhood/landmark) more important. Test with the practice's own new-vs-returning mix.
3. **Language and coverage:** 41.1% speak a language other than English at home; 35.1% Spanish; 18.2% speak English less than "very well"; 23.0% uninsured; 15.7% of under-19s uninsured — closer to Houston than to Fort Worth.
4. **Divergent neighbourhoods:** bachelor's-or-higher 37.4% citywide but median household income $67,760, below the metro's $87,155. We do not infer cosmetic demand; the spread argues for neighbourhood-level, not city-level, offers.
5. **Commute:** mean 26.0 minutes; 14.0% work from home.

## Gaps

- No dentist-density data; no keyword tool data; Dallas-vs-suburb commuter flows not sourced (LEHD/ACS flows not retrieved).
