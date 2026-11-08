# Arlington, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2020–2024 5-year Data Profiles DP02–DP05 via `node scripts/census.mjs "Arlington" TX`. Citable table: `https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4804000` (companions DP02, DP03, DP04). Extra variables from the same API responses; labels checked against the ACS 2023 and 2024 profile variables lists.
- **Metro comparison:** ACS 2020–2024 for Dallas-Fort Worth-Arlington, TX Metro Area (`g=310XX00US19100`), retrieved 2026-11-08 via the data.census.gov table API. Dallas and Fort Worth city values from the census script.
- **Population estimates:** Census Vintage 2025 SUB-EST2025_48, retrieved 2026-11-08.
- **Metro definition:** OMB July 2023 delineation (list1_2023.xlsx).
- QuickFacts not used (403; not worked around).

## Market definition

- **Incorporated city:** Arlington city, Texas (GEOID 160XX00US4804000; land area 95.8 sq mi).
- **County:** entirely within **Tarrant County** (SUB-EST2025_48 row 157/439 equals the city total). Arlington ≈ 17.9% of Tarrant County's Vintage 2025 population (402,134 of 2,248,466).
- **Metro:** Dallas-Fort Worth-Arlington, TX MSA (CBSA 19100), **Fort Worth-Arlington-Grapevine metropolitan division** (Johnson, Parker, Tarrant, Wise counties) — the same division as Fort Worth, not the Dallas-Plano-Irving division. Arlington is named in both the MSA title and its division title (OMB 2023).
- **Relationship to sibling pages:** Arlington is a separate city between Dallas and Fort Worth. It is not covered by the Fort Worth page (incorporated Fort Worth only) or the Dallas page. Neighbouring cities named on sampled practice sites: Mansfield, Grand Prairie, Kennedale (see practices file) — these are separate cities.

## Population (Vintage 2025)

| | Base Apr 2020 | July 2024 | July 2025 | Base→2025 | 2024→2025 |
|---|---|---|---|---|---|
| Arlington city | 394,387 | 403,348 | 402,134 | +7,747 (+2.0%) | −1,214 (−0.3%) |
| Tarrant County | — | 2,230,038 | 2,248,466 | — | +18,428 |

Contrast: Fort Worth city +11.9% since 2020 (tx1 research, same file). Arlington is the slow-growing part of a fast-growing county.

## ACS 2020–2024 profile

| Measure | Arlington city | Fort Worth city | Dallas city | DFW MSA |
|---|---|---|---|---|
| Total population | 397,742 (±93) | 963,194 | 1,307,930 | 7,985,590 |
| Under 18 | 24.8% (±0.7) | 26.4% | 23.9% | 25.0% |
| Under 5 | 6.1% (±0.4) | 7.1% | 7.0% | 6.4% |
| 65 and over | 12.0% (±0.4) | 10.6% | 11.8% | 12.1% |
| Median age | 33.7 (±0.4) | 33.6 | 33.4 | 35.6 |
| Households | 142,455 (±1,783) | 342,126 | 533,915 | 2,891,725 |
| Language other than English (5+) | 36.3% (±1.0) | 32.6% | 41.2% | 32.1% |
| Spanish at home (5+) | 24.0% (±1.0) | 24.5% | 34.9% | 21.9% |
| Other Indo-European languages | 3.2% (±0.5) | 3.1% | 2.2% | 3.7% |
| Asian and Pacific Islander languages | 5.1% (±0.4) | 2.9% | 2.2% | 4.7% |
| "Other languages" (ACS category) | 4.0% (±0.8) | 2.1% | 1.8% | 1.9% |
| Speak English less than "very well" | 14.6% (±0.7) | 12.5% | 18.2% | 12.1% |
| Foreign-born | 22.2% (±0.9) | 17.6% | 23.4% | 19.4% |
| Bachelor's or higher (25+) | 32.6% (±0.9) | 32.0% | 38.2% | 39.4% |
| Median household income | $75,171 (±1,543) | $79,507 | $70,518 | $90,275 |
| Mean travel time to work | 26.6 min (±0.5) | 27.1 | 25.7 | 27.9 |
| Worked from home | 13.1% (±0.8) | 14.0% | 15.8% | 17.8% |
| Private health insurance | 62.0% (±1.1) | 62.1% | 54.3% | 67.0% |
| Public coverage | 26.8% (±0.9) | 26.3% | 29.5% | 24.5% |
| No health insurance | 19.0% (±0.9) | 18.6% | 22.8% | 16.2% |
| Under 19, no health insurance | 13.1% (±1.4) | 13.5% | 16.3% | 12.1% |
| Households on SNAP | 10.4% (±0.7) | 11.8% | 11.9% | 8.0% |
| Owner-occupied | 54.3% (±1.0) | 57.0% | 42.4% | 60.1% |
| Same house one year ago | 86.7% (±1.0) | 85.7% | 84.5% | 86.2% |

*Vintage note:* first drafted with ACS 2019–2023 values; updated to ACS 2020–2024 on 2026-11-08 under the data-vintage policy in docs/city-brief.md. All ACS figures here are 2020–2024.

## Observations and hypotheses

1. **A middle-of-the-distribution city.** On income, coverage, owner-occupancy and education Arlington sits between Dallas and Fort Worth and close to Fort Worth. Hypothesis: the practice's own neighbourhood and payer mix will vary more than city averages; city-wide messaging will be blunt.
2. **Mixed payer landscape.** 62.0% private, 26.8% public coverage, 19.0% uninsured. Hypothesis: practices need to state clearly which group they serve (PPO, Medicaid/CHIP, self-pay/membership). One sampled site led with Medicaid/CHIP; another with a membership plan.
3. **Flat growth inside a growing county.** +2.0% since 2020, −0.3% last year (Vintage 2025), while Tarrant County added 18,428 in 2024–25. Hypothesis: patient growth comes from share and from neighbouring cities' residents who cross the boundary; test with patient ZIPs.
4. **Language mix broader than Spanish.** Spanish 24.0%, Asian/PI languages 5.1%, other Indo-European 3.2%, "other languages" 4.0% (the highest of the five cities in this batch). We do not infer specific languages; test with front-desk logs before translating.
5. **Geography.** 95.8 sq mi between the two largest cities; residents can reach practices in Grand Prairie, Mansfield, Fort Worth and Dallas. Distance in local results favours nearby practices (Google GBP Help); ads presence targeting matters.

## Gaps

- No commuting-flow data between Arlington and Dallas/Fort Worth; no dentist counts; no keyword-tool data (a vendor guide quoting Keyword Planner volumes and naming advertisers was not used as evidence); event/stadium traffic not sourced and not used.
