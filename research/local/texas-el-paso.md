# El Paso, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05 via `node scripts/census.mjs "El Paso" TX` (data.census.gov table API). Citable table: `https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US4824000` (companions DP02, DP03, DP04 with the same `g=`). Extra DP02/DP03 variables (language detail, public/private coverage, under-19 uninsured, worked from home, foreign-born) read from the same cached API responses. Variable labels checked against `https://api.census.gov/data/2023/acs/acs5/profile/variables.json`.
- **Metro comparison:** ACS 2019–2023 DP02/DP03/DP05 for El Paso, TX Metro Area (`g=310XX00US21340`) and Texas (`g=0400000US48`), retrieved 2026-11-08 via the same table API.
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

## ACS 2019–2023 profile

| Measure (ACS 2019–2023 5-year) | El Paso city | El Paso, TX Metro | Texas |
|---|---|---|---|
| Total population | 678,147 (±153) | 869,606 | 29,640,343 |
| Under 18 | 25.3% (±0.3) | 26.4% (±0.1) | 25.2% (±0.1) |
| Under 5 | 6.5% (±0.2) | — | — |
| 65 and over | 13.9% (±0.2) | 12.8% (±0.1) | 13.2% (±0.1) |
| Median age | 34.1 (±0.2) | — | — |
| Households | 242,482 (±1,373) | — | — |
| Pop. 5+ language other than English at home | 66.4% (±0.6) | 68.3% (±0.6) | 34.9% (±0.1) |
| Pop. 5+ Spanish at home | 64.1% (±0.6) | 66.3% (±0.5) | 28.1% (±0.1) |
| Pop. 5+ speak English less than "very well" | 25.8% (±0.7) | 27.3% (±0.7) | 12.8% (±0.1) |
| Spanish speakers who speak English less than "very well" (share of pop. 5+) | 25.1% (±0.7) | — | — |
| Foreign-born | 22.3% (±0.6) | — | — |
| Bachelor's or higher (25+) | 27.5% (±0.8) | 25.3% (±0.7) | 33.1% (±0.2) |
| Median household income | $58,734 (±1,384) | $58,800 (±1,202) | $76,292 (±265) |
| Mean travel time to work | 23.7 min (±0.4) | — | — |
| Worked from home | 7.8% (±0.5) | — | — |
| With private health insurance | 53.1% (±0.8) | — | — |
| With public coverage | 34.9% (±0.6) | — | — |
| No health insurance | 21.0% (±0.7) | 21.9% (±0.6) | 17.4% (±0.2) |
| Under 19, no health insurance | 11.9% (±1.1) | — | — |
| Households receiving SNAP | 19.1% (±0.7) | — | — |
| Owner-occupied housing units | 60.2% (±0.8) | — | — |
| Same house one year ago | 86.8% (±0.6) | — | — |

Comparators (same ACS vintage, from census script): Dallas city Spanish at home 35.1%, uninsured 23.0%, median household income $67,760; Fort Worth city Spanish 24.9%, uninsured 18.6%, income $76,602.

## Observations and hypotheses (not conclusions)

1. **Spanish is the majority home language, not a segment.** 64.1% of residents 5+ speak Spanish at home, and about a quarter of the population 5+ (25.1%) are Spanish speakers who report speaking English less than "very well". Hypothesis: Spanish-language search, calls and forms are core demand paths. We do not infer any individual's language preference; test with call/form language tagging.
2. **Flat population.** +0.6% since April 2020 and −0.3% in 2024–25. Hypothesis: practices grow by winning share, retention and reactivation, not by catching new arrivals. Contrast: Frisco +18.2%, Fort Worth +11.9% (tx1).
3. **Coverage mix.** 34.9% have public coverage, 21.0% are uninsured; 53.1% private. Hypothesis: payment clarity (accepted plans, Medicaid/CHIP status, membership plans, financing) is a first-screen question for many searchers. Do not infer cosmetic demand from income ($58,734).
4. **Short commutes, little remote work.** Mean 23.7 minutes; 7.8% work from home (Frisco 33.7%). Hypothesis: patients choose near home or work along daily routes; test with patient ZIP distribution.
5. **Self-contained metro.** City is 77.8% of its county; MSA is two counties. Hypothesis: agencies and DSOs that run statewide "Texas" campaigns may not tailor to El Paso; local relevance is attainable. Not a claim about competition intensity.

## Gaps

- No cross-border patient-flow data; no dentist density or office counts; no keyword-tool data (vendor pages quoting Keyword Planner figures were not used as evidence); no seasonality data.
