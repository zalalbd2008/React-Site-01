# Plano, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2019–2023 5-year DP02–DP05 via `node scripts/census.mjs "Plano" TX`. Citable table `https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US4858016` (companions DP02–DP04). Extra variables from the same API responses. (A first run hit an empty cached DP02 file written by a concurrent process; the empty file was removed and the script re-run successfully.)
- **Comparators:** DFW MSA ACS (retrieved 2026-11-08); Dallas/Fort Worth city values from the census script; Frisco from this batch.
- **Population estimates:** Vintage 2025 SUB-EST2025_48 (city and county-part rows), retrieved 2026-11-08.
- **Metro definition:** OMB July 2023 delineation.

## Market definition

- **Incorporated city:** Plano city, Texas (GEOID 160XX00US4858016; land 71.7 sq mi).
- **Counties:** **Collin County part 287,323 (98.1%)**, **Denton County part 5,705 (1.9%)** of the 293,028 Vintage 2025 total (SUB-EST2025_48 rows 157/085 and 157/121; our percentages).
- **Metro:** Dallas-Fort Worth-Arlington MSA, **Dallas-Plano-Irving metropolitan division** (Collin, Dallas, Denton, Ellis, Hunt, Kaufman, Rockwall). Collin County is a central county of the division (OMB 2023).
- **Relationship to sibling pages:** separate city from Dallas (whose Collin County part is only 54,266 — tx1). Frisco is a separate city to the north-west and has its own page; McKinney has its own page.

## Population (Vintage 2025)

| | Base Apr 2020 | July 2024 | July 2025 | Base→2025 | 2024→2025 |
|---|---|---|---|---|---|
| Plano city | 285,465 | 293,395 | 293,028 | +7,563 (+2.6%) | −367 (−0.1%) |
| Collin County | — | 1,254,213 | 1,297,179 | — | +42,966 |

Plano is close to flat while Collin County as a whole added 42,966 people in one year — growth is happening around Plano, not in it.

## ACS 2019–2023 profile

| Measure | Plano city | Frisco city | Dallas city | DFW MSA |
|---|---|---|---|---|
| Total population | 287,339 (±74) | 210,238 | 1,299,553 | 7,807,555 |
| Under 18 | 21.3% (±0.6) | 27.7% | 24.2% | 25.3% |
| Under 5 | 5.3% (±0.4) | 5.4% | 7.0% | — |
| 65 and over | **14.1% (±0.4)** | 9.6% | 11.4% | 11.9% |
| Median age | **39.3 (±0.5)** | 38.1 | 33.4 | 35.5 |
| Households | 110,522 (±1,277) | 74,081 | 528,038 | — |
| Language other than English (5+) | 37.5% (±1.1) | 32.8% | 41.1% | 31.7% |
| Spanish (5+) | 12.0% (±0.7) | 7.5% | 35.1% | 21.9% |
| Other Indo-European languages | 10.3% (±0.8) | 8.8% | 2.2% | — |
| Asian and Pacific Islander languages | 12.4% (±0.7) | 15.1% | 2.1% | — |
| Speak English less than "very well" | 12.3% (±0.6) | 7.9% | 18.2% | 11.9% |
| — of which Asian/PI-language speakers | 4.4% (±0.4) | 3.8% | — | — |
| — of which Spanish speakers | 4.7% (±0.6) | 2.3% | — | — |
| Foreign-born | 28.7% (±0.9) | 26.5% | 23.4% | — |
| Bachelor's or higher (25+) | 59.2% (±1.1) | 66.0% | 37.4% | 38.5% |
| Median household income | $108,649 (±2,862) | $146,158 | $67,760 | $87,155 |
| Mean travel time | 25.6 min (±0.5) | 28.6 | 26.0 | 28.0 |
| Worked from home | 25.3% (±1.0) | 33.7% | 14.0% | — |
| Private health insurance | 76.5% (±1.1) | 86.8% | 54.1% | — |
| Public coverage | 20.3% (±0.8) | 13.0% | 29.3% | — |
| No health insurance | 11.4% (±0.8) | 6.6% | 23.0% | 16.3% |
| Under 19 uninsured | 9.0% (±1.4) | 4.6% | 15.7% | — |
| Owner-occupied | 56.6% (±1.1) | 66.5% | 42.4% | 60.0% |
| Same house one year ago | 85.4% (±1.0) | 84.3% | — | — |

## Observations and hypotheses

1. **Mature and older-skewing.** Highest 65+ share (14.1%) and median age (39.3) of the five cities in this batch; lowest under-18 share (21.3%). Hypothesis: retention, recall and restorative/prosthetic service lines may carry more weight than pediatric acquisition. We do not infer treatment demand from age — test with the practice's own procedure mix.
2. **Stable population.** +2.6% since 2020; −0.1% last year. Hypothesis: new-patient growth is mostly switching between practices, so differentiation (reviews, insurance clarity, access, specific expertise) matters more than "new in town" messaging.
3. **Multilingual beyond Spanish.** Asian/PI languages 12.4% and other Indo-European 10.3%, each comparable to Spanish (12.0%). Specific languages are not in the DP tables; do not guess. Test front-desk language logs before translating anything.
4. **Insured, PPO-heavy.** 76.5% private coverage; 11.4% uninsured. Hypothesis: in-network status and plan-specific information are major filters.
5. **Remote work.** 25.3% worked from home. Hypothesis: weekday daytime appointments near home may be feasible for a quarter of workers; test appointment-time demand with booking data rather than assuming evening demand.

## Gaps

- No dentist counts or density; no keyword-tool data (a vendor page asserting Plano is "one of the most competitive dental markets in DFW" was not used); specific languages spoken not available from DP tables (would need ACS table C16001/B16001).
