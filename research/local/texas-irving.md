# Irving, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2019–2023 5-year DP02–DP05 via `node scripts/census.mjs "Irving" TX`. Citable table `https://data.census.gov/table/ACSDP5Y2023.DP05?g=160XX00US4837000`. Extra variables from the same responses. (Empty cached DP02 removed and re-run.)
- **Comparators:** Dallas and Fort Worth city values from the census script; DFW MSA ACS retrieved 2026-11-08.
- **Population estimates:** Vintage 2025 SUB-EST2025_48.
- **Metro definition:** OMB July 2023.

## Market definition

- **Incorporated city:** Irving city, Texas (GEOID 160XX00US4837000; land 67.0 sq mi).
- **County:** entirely within **Dallas County** (row 157/113 equals city total); ≈ 9.7% of the county's Vintage 2025 population (257,076 of 2,661,397).
- **Metro:** Dallas-Fort Worth-Arlington MSA, **Dallas-Plano-Irving metropolitan division** (Irving is in the division's title) (OMB 2023).
- **Las Colinas:** a district inside Irving (not a separate city). Sampled practice sites describe it as a master-planned community and business district; we use it only as a place name that practices themselves use.
- **Relationship to sibling pages:** separate city west of Dallas; not covered by the Dallas page. Neighbouring places named on a sampled site: Grand Prairie, Coppell, Farmers Branch, Dallas.

## Population (Vintage 2025)

| | Base Apr 2020 | July 2024 | July 2025 | Base→2025 | 2024→2025 |
|---|---|---|---|---|---|
| Irving city | 256,781 | 258,637 | 257,076 | +295 (+0.1%) | −1,561 (−0.6%) |
| Dallas County | — | 2,664,013 | 2,661,397 | — | −2,616 |

## ACS 2019–2023 profile

| Measure | Irving city | Dallas city | Fort Worth city | DFW MSA |
|---|---|---|---|---|
| Total population | 255,036 (±57) | 1,299,553 | 941,311 | 7,807,555 |
| Under 18 | 26.2% (±0.7) | 24.2% | 26.7% | 25.3% |
| **Under 5** | **8.2% (±0.5)** | 7.0% | 7.3% | — |
| 65 and over | 8.8% (±0.4) (lowest of five) | 11.4% | 10.5% | 11.9% |
| Median age | 32.8 (±0.5) | 33.4 | 33.4 | 35.5 |
| Households | 94,252 (±1,401) | 528,038 | 334,230 | — |
| **Foreign-born** | **41.9% (±1.1)** | 23.4% | 17.0% | — |
| Language other than English (5+) | 60.5% (±1.2) | 41.1% | 32.5% | 31.7% |
| Spanish | 36.6% (±1.2) | 35.1% | 24.9% | 21.9% |
| Other Indo-European | 10.9% (±0.7) | 2.2% | 3.0% | — |
| Asian/PI languages | 10.0% (±0.7) | 2.1% | 2.9% | — |
| Speak English less than "very well" | 23.3% (±1.1) | 18.2% | 12.2% | 11.9% |
| — Spanish speakers | 17.5% (±1.0) | — | — | — |
| Bachelor's or higher | 41.6% (±1.2) | 37.4% | 31.7% | 38.5% |
| Median household income | $79,641 (±2,584) | $67,760 | $76,602 | $87,155 |
| Mean travel time | 24.1 min (±0.5) | 26.0 | 26.9 | 28.0 |
| Worked from home | 17.3% (±1.0) | 14.0% | 12.9% | — |
| Private health insurance | 61.0% (±1.4) | 54.1% | 61.7% | — |
| Public coverage | 22.6% (±1.1) | 29.3% | 26.4% | — |
| No health insurance | 21.6% (±1.0) | 23.0% | 18.6% | 16.3% |
| Under 19 uninsured | 15.6% (±1.7) | 15.7% | 12.7% | — |
| **Owner-occupied** | **38.3% (±1.2)** (renters 61.7%) | 42.4% | 56.7% | 60.0% |
| Same house one year ago | 83.7% (±1.0) (lowest of five) | — | — | — |

## Observations and hypotheses

1. **Renter-majority, higher turnover.** Only 38.3% owner-occupied (lower than Dallas, 42.4%); 83.7% in the same house a year earlier. Hypothesis: patients move more often, so recall, reactivation and "found us again" discovery matter; test with lapsed-patient and address-change data.
2. **Multilingual on three fronts.** Spanish 36.6%, other Indo-European 10.9%, Asian/PI 10.0%; foreign-born 41.9%. Specific languages are not in DP tables. Observed practice sites advertise Spanish, Hindi and Telugu capability (see practices file) — that is what practices claim, not a demographic finding.
3. **Young families and coverage gaps.** Under 5 = 8.2% (highest of five); under-19 uninsured 15.6%; 22.6% public coverage. Hypothesis: pediatric, Medicaid/CHIP (Texas Health Steps covers dental checkups from 6 months for children with Medicaid) and self-pay options are relevant for some practices; test with the practice's own payer mix.
4. **Two settings in one city.** Practices position either on Las Colinas (business district, corporate-sounding copy) or on residential family/affordable dentistry. Hypothesis: two different offers, schedules and landing pages; one campaign for both will be blunt.
5. **Flat population.** +0.1% since 2020; −0.6% last year. Growth comes from share and retention.
6. **Short commutes** (24.1 min). Hypothesis: proximity to home or workplace drives choice; test with ZIP data.

## Gaps

- Specific languages (needs ACS B16001/C16001); daytime worker population for Las Colinas not sourced (do not claim commuter inflows); no dentist counts; no keyword data.
