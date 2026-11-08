# El Paso, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2020–2024 5-year Data Profiles DP02, DP03, DP04, DP05 via `node scripts/census.mjs "El Paso" TX` (data.census.gov table API). Citable table: `https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4824000` (companions DP02, DP03, DP04 with the same `g=`). Extra DP02/DP03 variables (language detail, public/private coverage, under-19 uninsured, worked from home, foreign-born) read from the same cached API responses. Variable labels checked against `https://api.census.gov/data/2024/acs/acs5/profile/variables.json` (2023 and 2024).
- **Metro comparison:** ACS 2020–2024 DP02–DP05 for El Paso, TX Metro Area (`g=310XX00US21340`) and Texas (`g=0400000US48`), retrieved 2026-11-08 via the same table API.
- **Population estimates:** Census Vintage 2025 subcounty file SUB-EST2025_48 (`https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_48.csv`), retrieved 2026-11-08. ACS and Vintage estimates measure different things and periods and are never subtracted from each other.
- **Metro definition:** OMB July 2023 delineation, Census `list1_2023.xlsx`, retrieved 2026-11-08.
- Census QuickFacts was not used (returns 403 to automated clients; not worked around).

## Market definition

- **Incorporated city:** El Paso city, Texas (GEOID 160XX00US4824000; LSAD 25; land area 258.8 sq mi).
- **County:** entirely within El Paso County (SUB-EST2025_48 county-part row 157/141 equals the city total). City ≈ 77.8% of the county's Vintage 2025 population (683,012 of 877,858; our calculation).
- **Metro:** El Paso, TX Metropolitan Statistical Area (CBSA 21340) = El Paso County (central) + Hudspeth County (outlying). Combined Statistical Area: **El Paso-Las Cruces, TX-NM** (CSA 238), which also contains the Las Cruces, NM MSA (Doña Ana County) (OMB 2023).
- **Not part of any DFW geography.** El Paso is a separate metro roughly at the opposite end of the state from Dallas–Fort Worth and Houston; nothing in the DFW analysis applies by default.
- **Cross-border dynamics:** no official source on cross-border dental patient flows was retrieved. The page does not make claims about patients from Mexico. Recorded as a gap.

## Population (Vintage 2025, SUB-EST2025_48)

| | Estimates base Apr 2020 | July 2024 | July 2025 | Change base→2025 | Change 2024→2025 |
|---|---|---|---|---|---|
| El Paso city | 678,932 | 685,231 | 683,012 | +4,080 (+0.6%) | −2,219 (−0.3%) |
| El Paso County | — | 879,894 | 877,858 | — | −2,036 |

## ACS 2020–2024 profile

| Measure (ACS 2020–2024 5-year) | El Paso city | El Paso, TX Metro | Texas |
|---|---|---|---|
| Total population | 680,130 (±130) | 874,182 | 30,188,424 |
| Under 18 | 24.9% (±0.3) | 26.0% (±0.1) | 25.0% (±0.1) |
| Under 5 | 6.2% (±0.2) | 6.6% (±0.1) | 6.4% (±0.1) |
| 65 and over | 14.3% (±0.2) | 13.1% (±0.1) | 13.4% (±0.1) |
| Median age | 34.5 (±0.2) | 33.6 (±0.1) | 35.6 (±0.1) |
| Households | 245,346 (±1,368) | 300,479 (±1,061) | 10,992,816 |
| Pop. 5+ language other than English at home | 65.9% (±0.7) | 68.0% (±0.6) | 35.1% (±0.1) |
| Pop. 5+ Spanish at home | 63.7% (±0.7) | 66.1% (±0.6) | 28.1% (±0.1) |
| Pop. 5+ speak English less than "very well" | 25.1% (±0.6) | 26.5% (±0.6) | 13.0% (±0.1) |
| Spanish speakers who speak English less than "very well" (share of pop. 5+) | 24.4% (±0.6) | 25.9% (±0.6) | 10.7% (±0.1) |
| Foreign-born | 22.4% (±0.6) | 23.1% (±0.5) | 17.6% (±0.1) |
| Bachelor's or higher (25+) | 28.1% (±0.7) | 25.9% (±0.6) | 33.8% (±0.2) |
| Median household income | $59,745 (±1,347) | $59,751 (±1,132) | $78,476 (±263) |
| Mean travel time to work | 23.4 min (±0.4) | 24.1 min (±0.4) | 26.7 min (±0.1) |
| Worked from home | 8.9% (±0.6) | 8.8% (±0.6) | 14.4% (±0.1) |
| With private health insurance | 53.3% (±1.0) | 52.3% (±0.8) | 62.8% (±0.2) |
| With public coverage | 35.0% (±0.7) | 34.4% (±0.6) | 29.0% (±0.1) |
| No health insurance | 20.6% (±0.7) | 21.7% (±0.6) | 17.1% (±0.2) |
| Under 19, no health insurance | 11.2% (±1.2) | 12.5% (±1.0) | 12.0% (±0.2) |
| Households receiving SNAP | 18.6% (±0.7) | 19.3% (±0.6) | 11.4% (±0.1) |
| Owner-occupied housing units | 60.8% (±0.8) | 64.3% (±0.7) | 62.6% (±0.2) |
| Same house one year ago | 87.7% (±0.6) | 88.1% (±0.5) | 86.0% (±0.1) |

Comparators (ACS 2020–2024, census script): Dallas city Spanish at home 34.9%, uninsured 22.8%, median household income $70,518; Fort Worth city Spanish 24.5%, uninsured 18.6%, income $79,507.

*Vintage note:* this file was first drafted with ACS 2019–2023 values and updated to ACS 2020–2024 on 2026-11-08 under the coordinator's data-vintage policy (docs/city-brief.md). All ACS figures above and below are 2020–2024.

## Observations and hypotheses (not conclusions)

1. **Spanish is the majority home language, not a segment.** 63.7% of residents 5+ speak Spanish at home, and 24.4% of the population 5+ are Spanish speakers who report speaking English less than "very well". Hypothesis: Spanish-language search, calls and forms are core demand paths. We do not infer any individual's language preference; test with call/form language tagging.
2. **Flat population.** +0.6% since April 2020 and −0.3% in 2024–25 (Vintage 2025). Hypothesis: practices grow by winning share, retention and reactivation, not by catching new arrivals. Contrast: Frisco +18.2%, Fort Worth +11.9%.
3. **Coverage mix.** 35.0% have public coverage, 20.6% are uninsured; 53.3% private. Hypothesis: payment clarity (accepted plans, Medicaid/CHIP status, membership plans, financing) is a first-screen question. Do not infer cosmetic demand from income ($59,745).
4. **Short commutes, little remote work.** Mean 23.4 minutes; 8.9% work from home (Frisco 37.8%). Hypothesis: patients choose near home or along daily routes; test with patient ZIP distribution.
5. **Self-contained metro.** City is 77.8% of its county; MSA is two counties. Hypothesis: statewide campaigns may not tailor to El Paso; local relevance is attainable. Not a claim about competition intensity.

## Gaps

- No cross-border patient-flow data; no dentist density or office counts; no keyword-tool data (vendor pages quoting Keyword Planner figures were not used as evidence); no seasonality data.
