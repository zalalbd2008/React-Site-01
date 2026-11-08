# Houston, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Market definition

- **Incorporated city:** Houston city, Texas (GEOID 160XX00US4835000; land area 640.6 sq mi per the 2023 Gazetteer). Vintage 2025 estimate 2,397,315 (July 1, 2025), up from an estimates base of 2,299,649 (April 1, 2020): +97,666 (+4.2%). 2024→2025: +11,515 (+0.48%), sixth-largest numeric gain of any U.S. city.
- **Counties:** the city spans three counties with population — Harris (2,347,346 in the city part, 97.9% of residents), Fort Bend (43,668) and Montgomery (6,301); the file also lists a Waller County part with zero estimated residents. (SUB-EST2025_48.)
- **Metro:** Houston-Pasadena-The Woodlands, TX Metropolitan Statistical Area (CBSA 26420) — ten counties: Austin, Brazoria, Chambers, Fort Bend, Galveston, Harris, Liberty, Montgomery, San Jacinto, Waller (OMB 2023). The current name is confirmed in the March 2026 Census release. Vintage 2025: 7,904,627; +126,720 in 2024–25, the largest numeric gain of any U.S. metro; +754,400 (+10.6%) since the April 2020 base. The city is about 30.3% of the metro population (our calculation from Vintage 2025).
- **County growth context (Vintage 2025, 2024–25):** Harris County +48,695 (largest numeric gain of any U.S. county; 5,045,026 total); Montgomery +30,011 (4th); Fort Bend +24,163 (8th); Waller +5.7% (2nd-fastest by percent among counties of 20,000+); Liberty County 8th by percent growth. Fulshear (Fort Bend County) was the second-fastest-growing U.S. city of 20,000+ (+21.0%). Harris County added about 28,000 housing units in 2024–25, second only to Maricopa County, Ariz. (CB26-80).
- **Labels for writing:** "Houston" on the page means the incorporated city unless we say "Greater Houston" or "the Houston-Pasadena-The Woodlands metro". Katy, Sugar Land, Pearland, The Woodlands and Cypress are separate cities or unincorporated areas in the metro — not part of the city (Cypress is unincorporated Harris County). Pages for them are candidates only after separate research (query-ownership rules).

## ACS 2019–2023 profile

| Measure (ACS 2019–2023 5-year, DP tables) | Houston city | Houston-Pasadena-The Woodlands MSA | Texas |
|---|---|---|---|
| Total population | 2,300,419 (±172) | 7,274,714 | 29,640,343 |
| Under 5 years | 6.7% (±0.2) | 6.7% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 23.6% (±0.2) | 26.1% (±0.1) | 25.2% (±0.1) |
| 65 years and over | 12.0% (±0.1) | 12.0% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 34.3 (±0.2) | 35.3 (±0.1) | 35.5 (±0.1) |
| Households | 916,536 (±4302) | 2,601,888 (±5356) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 47.2% (±0.4) | 39.5% (±0.2) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 37.4% (±0.4) | 29.3% (±0.2) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 22.0% (±0.4) | 16.2% (±0.2) | 12.8% (±0.1) |
| Foreign-born | 28.8% (±0.4) | 23.8% (±0.2) | 17.2% (±0.1) |
| Born in a different U.S. state | 18.0% (±0.3) | 20.6% (±0.2) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 1.8% (±0.1) | 1.7% (±0.1) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 36.0% (±0.4) | 35.4% (±0.3) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $62,894 (±833) | $80,458 (±526) | $76,292 (±265) |
| Mean travel time to work (minutes) | 27.3 (±0.2) | 29.9 (±0.2) | 26.7 (±0.1) |
| Workers who worked from home | 11.7% (±0.3) | 11.9% (±0.2) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 30.3% (±0.4) | 27.1% (±0.2) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 24.0% (±0.4) | 18.7% (±0.2) | 17.4% (±0.2) |
| Under 19 with no health insurance | 16.0% (±0.7) | 12.6% (±0.3) | 11.8% (±0.2) |
| Owner-occupied housing units | 42.0% (±0.5) | 61.2% (±0.3) | 62.6% (±0.2) |


## Observations and hypotheses (not conclusions)

1. **Language:** 47.2% of Houston city residents aged 5+ speak a language other than English at home and 22.0% speak English less than "very well" — the highest of the five Texas cities in this batch and well above the metro (39.5% / 16.2%). Spanish 37.4%. Hypothesis to test with client data: Spanish (and for some locations Vietnamese or Chinese) intake capacity affects conversion; do **not** assume any individual patient's preference.
2. **Coverage:** 24.0% uninsured (civilian noninstitutionalized) and 16.0% of under-19s uninsured; 30.3% with public coverage. Implication to test: payment clarity (fees, membership plans, Medicaid/CHIP participation if any) is a material conversion question. Not a measure of demand.
3. **Commuting:** mean travel time 27.3 minutes in the city vs 29.9 in the metro — the metro is the longest-commute of the four Texas metros. Hypothesis: catchments are shaped by drive-time corridors, so ZIP-level ad targeting and location pages should follow real drive patterns, not city limits.
4. **Growth is suburban:** the city grew 4.2% since 2020 while the metro grew 10.6%; the fastest county growth is in Montgomery, Fort Bend, Waller and Liberty. Hypothesis: city-centre practices compete for a slower-growing base; suburban practices face new entrants following rooftops.
5. **Income:** median household income $62,894 (city) vs $80,458 (metro). We do not infer cosmetic demand from income.

## Gaps

- No dentist-count or office-count data used (NPI/directory counts are not offices).
- No search-volume or CPC data from a tool we control; any keyword lists are research candidates.
- ACS 2020–2024 5-year city values were not available through the project script at retrieval time; 2019–2023 used for consistency across pages.
