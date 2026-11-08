# Frisco, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2020–2024 5-year DP02–DP05 via `node scripts/census.mjs "Frisco" TX`. Citable table `https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4827684`. Extra variables from the same responses. (Empty cached DP02 from a concurrent run removed and re-run.)
- **Population estimates:** Vintage 2025 SUB-EST2025_48 (city and county-part rows).
- **Metro definition:** OMB July 2023.
- **Important vintage caveat:** ACS 2020–2024 is a five-year average. In a city that grew about 18% over 2020–2025, the ACS population (219,304) is well below the Vintage 2025 estimate (236,955). They measure different things and periods; they are not subtracted, and ACS characteristics describe the 2020–2024 average population, not today's.

## Market definition

- **Incorporated city:** Frisco city, Texas (GEOID 160XX00US4827684; land 68.6 sq mi).
- **Counties:** **Collin County part 140,753 (59.4%)** and **Denton County part 96,202 (40.6%)** of 236,955 (Vintage 2025; our percentages). Frisco is genuinely split between two counties.
- **Metro:** Dallas-Fort Worth-Arlington MSA, **Dallas-Plano-Irving metropolitan division** (Collin is a central county; Denton an outlying county of the division) (OMB 2023).
- **Relationship to sibling pages:** separate city north of Plano; neither Dallas nor Plano. Neighbouring city named in one sampled practice's page title: Prosper (separate town; not analysed).

## Population (Vintage 2025)

| | Base Apr 2020 | Jul 2021 | Jul 2022 | Jul 2023 | Jul 2024 | Jul 2025 |
|---|---|---|---|---|---|---|
| Frisco city | 200,531 | 211,127 | 220,399 | 226,878 | 235,159 | 236,955 |

- Base→2025: **+36,424 (+18.2%)** — the fastest of the five cities in this batch (Fort Worth +11.9%, tx1).
- **2024→2025: +1,796 (+0.8%)** — sharply slower than earlier years (+8,281 in 2023–24; +9,272 in 2021–22). Year-on-year differences are our calculations from the same file.
- Collin County +42,966 and Denton County +23,120 in 2024–25 (county rows).

## ACS 2020–2024 profile

| Measure | Frisco city | Plano city | DFW MSA |
|---|---|---|---|
| Total population (ACS average) | 219,304 (±67) | 290,594 | 7,985,590 |
| Under 18 | **27.2% (±0.8)** | 20.9% | 25.0% |
| Under 5 | 5.0% (±0.5) | 5.2% | 6.4% |
| 65 and over | 9.6% (±0.6) | 14.7% | 12.1% |
| Median age | 38.3 (±0.6) | 39.6 | 35.6 |
| Households | 77,208 (±1,139) | 112,438 | 2,891,725 |
| Language other than English | 33.6% (±1.2) | 38.0% | 32.1% |
| Spanish | 6.9% (±0.8) | 12.0% | 21.9% |
| Asian/PI languages | **15.5% (±1.1)** | 12.8% | 4.7% |
| Other Indo-European | 9.3% (±1.0) | 10.4% | 3.7% |
| Speak English less than "very well" | 7.6% (±0.7) | 12.0% | 12.1% |
| Foreign-born | 27.3% (±1.1) | 29.3% | 19.4% |
| Bachelor's or higher | 67.5% (±1.2) | 60.5% | 39.4% |
| Median household income | $150,212 (±6,821) | $112,253 | $90,275 |
| Mean travel time | **28.6 min (±1.1)** (longest of five) | 25.4 | 27.9 |
| Worked from home | **37.8% (±1.6)** | 27.5% | 17.8% |
| Private health insurance | 86.9% (±1.0) | 76.7% | 67.0% |
| Public coverage | 12.9% (±0.8) | 21.0% | 24.5% |
| No health insurance | 6.3% (±0.8) | 10.7% | 16.2% |
| Under 19 uninsured | 4.0% (±0.9) | 9.1% | 12.1% |
| Owner-occupied | 65.9% (±1.4) | 56.9% | 60.1% |
| Same house one year ago | 84.5% (±1.0) | 85.5% | 86.2% |

*Vintage note:* first drafted with ACS 2019–2023 values; updated to ACS 2020–2024 on 2026-11-08 under the data-vintage policy in docs/city-brief.md. All ACS figures here are 2020–2024.

## Observations and hypotheses

1. **Growth decelerating.** +18.2% since 2020, but only +0.8% in the latest year (Vintage 2025). Hypothesis: "everyone is new here" plans built on 2021–2023 conditions may overstate new-mover inflow now; test with the share of new patients reporting a recent move and the new-patient trend.
2. **Family households.** 27.2% under 18 (highest of the five); 65.9% owner-occupied. Hypothesis: family scheduling (multiple patients per visit, school-hours constraints) is a conversion factor. Not a treatment-demand claim.
3. **Highly insured.** 86.9% private coverage, 6.3% uninsured. Hypothesis: in-network clarity is the first filter; self-pay messaging is secondary.
4. **Split commute pattern.** Longest mean commute (28.6 min) but 37.8% worked from home. Hypothesis: two distinct schedules — remote workers who can book weekdays, commuters who need early/late/Saturday slots. Test with booking-time distribution.
5. **Two counties.** 59/41 Collin/Denton split. Hypothesis: county-based ad targeting or "Collin County" messaging misses 41% of the city; target by radius/ZIP.
6. **Income.** $150,212 median. We do not infer cosmetic demand from income.

## Gaps

- No dentist counts; no new-mover data beyond population change; no keyword data; ACS predates much of the growth.
