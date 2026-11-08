# Arlington, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2019–2023 5-year Data Profiles DP02–DP05 via `node scripts/census.mjs "Arlington" TX`. Citable table: `https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US4804000` (companions DP02, DP03, DP04). Extra variables from the same API responses; labels checked against the ACS 2023 profile variables list.
- **Metro comparison:** ACS 2019–2023 for Dallas-Fort Worth-Arlington, TX Metro Area (`g=310XX00US19100`), retrieved 2026-11-08 (values match the tx1 research file). Dallas and Fort Worth city values from the census script.
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

## ACS 2019–2023 profile

| Measure | Arlington city | Fort Worth city | Dallas city | DFW MSA |
|---|---|---|---|---|
| Total population | 394,769 (±103) | 941,311 | 1,299,553 | 7,807,555 |
| Under 18 | 25.0% (±0.6) | 26.7% | 24.2% | 25.3% |
| Under 5 | 6.4% (±0.4) | 7.3% | 7.0% | — |
| 65 and over | 11.5% (±0.3) | 10.5% | 11.4% | 11.9% |
| Median age | 33.6 (±0.4) | 33.4 | 33.4 | 35.5 |
| Households | 140,408 (±1,859) | 334,230 | 528,038 | — |
| Language other than English (5+) | 35.5% (±1.1) | 32.5% | 41.1% | 31.7% |
| Spanish at home (5+) | 22.9% (±1.0) | 24.9% | 35.1% | 21.9% |
| Other Indo-European languages | 3.3% (±0.4) | 3.0% | 2.2% | — |
| Asian and Pacific Islander languages | 5.1% (±0.5) | 2.9% | 2.1% | — |
| "Other languages" (ACS category) | 4.2% (±0.9) | — | — | — |
| Speak English less than "very well" | 13.7% (±0.7) | 12.2% | 18.2% | 11.9% |
| Foreign-born | 21.3% (±0.8) | 17.0% | 23.4% | — |
| Bachelor's or higher (25+) | 33.1% (±0.8) | 31.7% | 37.4% | 38.5% |
| Median household income | $73,519 (±1,463) | $76,602 | $67,760 | $87,155 |
| Mean travel time to work | 26.7 min (±0.5) | 26.9 | 26.0 | 28.0 |
| Worked from home | 11.8% (±0.7) | 12.9% | 14.0% | — |
| Private health insurance | 61.4% (±1.1) | 61.7% | 54.1% | — |
| Public coverage | 27.4% (±0.8) | 26.4% | 29.3% | — |
| No health insurance | 18.7% (±0.8) | 18.6% | 23.0% | 16.3% |
| Under 19, no health insurance | 12.4% (±1.3) | 12.7% | 15.7% | — |
| Households on SNAP | 10.4% (±0.8) | 12.3% | 11.7% | — |
| Owner-occupied | 54.8% (±1.0) | 56.7% | 42.4% | 60.0% |
| Same house one year ago | 86.3% (±0.9) | — | — | — |

## Observations and hypotheses

1. **A middle-of-the-distribution city.** On income, coverage, owner-occupancy and education Arlington sits between Dallas and Fort Worth and close to Fort Worth. Hypothesis: the practice's own neighbourhood and payer mix will vary more than the city averages; city-wide messaging will be blunt.
2. **Mixed payer landscape.** 61.4% private, 27.4% public coverage, 18.7% uninsured. Hypothesis: practices need to state clearly which group they serve (PPO, Medicaid/CHIP, self-pay/membership). One sampled site led with Medicaid/CHIP; another with a membership plan.
3. **Flat growth inside a growing county.** +2.0% since 2020, −0.3% last year, while Tarrant County added 18,428 in 2024–25. Hypothesis: patient growth comes from share and from neighbouring cities' residents who cross the boundary; test with patient ZIPs.
4. **Language mix broader than Spanish.** Spanish 22.9%, Asian/PI languages 5.1%, other Indo-European 3.3%, "other languages" 4.2% (the highest of the five cities in this batch). We do not infer specific languages; test with front-desk logs before translating.
5. **Geography.** 95.8 sq mi between the two largest cities; residents can reach practices in Grand Prairie, Mansfield, Fort Worth and Dallas. Distance in local results favours nearby practices (Google GBP Help); ads "presence" targeting matters.

## Gaps

- No commuting-flow data between Arlington and Dallas/Fort Worth; no dentist counts; no keyword-tool data (a vendor guide quoting Keyword Planner volumes and naming advertisers was not used as evidence); event/stadium traffic not sourced and not used.
