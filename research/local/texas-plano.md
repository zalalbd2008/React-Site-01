# Plano, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2020–2024 5-year DP02–DP05 via `node scripts/census.mjs "Plano" TX`. Citable table `https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4858016` (companions DP02–DP04). Extra variables from the same API responses. (A first run hit an empty cached DP02 file written by a concurrent process; the empty file was removed and the script re-run successfully.)
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

## ACS 2020–2024 profile

| Measure | Plano city | Frisco city | Dallas city | DFW MSA |
|---|---|---|---|---|
| Total population | 290,594 (±98) | 219,304 | 1,307,930 | 7,985,590 |
| Under 18 | 20.9% (±0.5) | 27.2% | 23.9% | 25.0% |
| Under 5 | 5.2% (±0.3) | 5.0% | 7.0% | 6.4% |
| 65 and over | **14.7% (±0.5)** | 9.6% | 11.8% | 12.1% |
| Median age | **39.6 (±0.6)** | 38.3 | 33.4 | 35.6 |
| Households | 112,438 (±1,195) | 77,208 | 533,915 | 2,891,725 |
| Language other than English (5+) | 38.0% (±1.2) | 33.6% | 41.2% | 32.1% |
| Spanish (5+) | 12.0% (±0.8) | 6.9% | 34.9% | 21.9% |
| Other Indo-European languages | 10.4% (±0.9) | 9.3% | 2.2% | 3.7% |
| Asian and Pacific Islander languages | 12.8% (±0.7) | 15.5% | 2.2% | 4.7% |
| Speak English less than "very well" | 12.0% (±0.8) | 7.6% | 18.2% | 12.1% |
| — of which Asian/PI-language speakers | 4.3% (±0.4) | 3.7% | 0.8% | 1.8% |
| — of which Spanish speakers | 4.5% (±0.6) | 2.1% | 16.2% | 8.9% |
| Foreign-born | 29.3% (±1.0) | 27.3% | 23.4% | 19.4% |
| Bachelor's or higher (25+) | 60.5% (±1.2) | 67.5% | 38.2% | 39.4% |
| Median household income | $112,253 (±3,281) | $150,212 | $70,518 | $90,275 |
| Mean travel time | 25.4 min (±0.5) | 28.6 | 25.7 | 27.9 |
| Worked from home | 27.5% (±1.0) | 37.8% | 15.8% | 17.8% |
| Private health insurance | 76.7% (±1.1) | 86.9% | 54.3% | 67.0% |
| Public coverage | 21.0% (±0.8) | 12.9% | 29.5% | 24.5% |
| No health insurance | 10.7% (±0.8) | 6.3% | 22.8% | 16.2% |
| Under 19 uninsured | 9.1% (±1.6) | 4.0% | 16.3% | 12.1% |
| Owner-occupied | 56.9% (±1.0) | 65.9% | 42.4% | 60.1% |
| Same house one year ago | 85.5% (±1.0) | 84.5% | 84.5% | 86.2% |

*Vintage note:* first drafted with ACS 2019–2023 values; updated to ACS 2020–2024 on 2026-11-08 under the data-vintage policy in docs/city-brief.md. All ACS figures here are 2020–2024.

## Observations and hypotheses

1. **Mature and older-skewing.** Highest 65+ share (14.7%) and median age (39.6) of the five cities in this batch; lowest under-18 share (20.9%). Hypothesis: retention, recall and restorative/prosthetic service lines may carry more weight than pediatric acquisition. We do not infer treatment demand from age — test with the practice's own procedure mix.
2. **Stable population.** +2.6% since 2020; −0.1% last year (Vintage 2025). Hypothesis: new-patient growth is mostly switching between practices, so differentiation (reviews, insurance clarity, access, specific expertise) matters more than "new in town" messaging.
3. **Multilingual beyond Spanish.** Asian/PI languages 12.8% and other Indo-European 10.4%, each comparable to Spanish (12.0%). Specific languages are not in the DP tables; do not guess. Test front-desk language logs before translating anything.
4. **Insured, PPO-heavy.** 76.7% private coverage; 10.7% uninsured. Hypothesis: in-network status and plan-specific information are major filters.
5. **Remote work.** 27.5% worked from home. Hypothesis: weekday daytime appointments near home may be feasible for many workers; test appointment-time demand with booking data rather than assuming evening demand.

## Gaps

- No dentist counts or density; no keyword-tool data (a vendor page asserting Plano is "one of the most competitive dental markets in DFW" was not used); specific languages spoken not available from DP tables (would need ACS table C16001/B16001).
