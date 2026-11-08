# Irving, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx2a).

## Sources and method

- **ACS:** ACS 2020–2024 5-year DP02–DP05 via `node scripts/census.mjs "Irving" TX`. Citable table `https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4837000`. Extra variables from the same responses. (Empty cached DP02 removed and re-run.)
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

## ACS 2020–2024 profile

| Measure | Irving city | Dallas city | Fort Worth city | DFW MSA |
|---|---|---|---|---|
| Total population | 256,492 (±91) | 1,307,930 | 963,194 | 7,985,590 |
| Under 18 | 26.2% (±0.7) | 23.9% | 26.4% | 25.0% |
| **Under 5** | **8.1% (±0.6)** | 7.0% | 7.1% | 6.4% |
| 65 and over | 8.7% (±0.4) (lowest of five) | 11.8% | 10.6% | 12.1% |
| Median age | 32.8 (±0.4) | 33.4 | 33.6 | 35.6 |
| Households | 94,845 (±1,157) | 533,915 | 342,126 | 2,891,725 |
| **Foreign-born** | **42.5% (±1.4)** | 23.4% | 17.6% | 19.4% |
| Language other than English (5+) | 61.8% (±1.4) | 41.2% | 32.6% | 32.1% |
| Spanish | 37.4% (±1.5) | 34.9% | 24.5% | 21.9% |
| Other Indo-European | 11.4% (±0.9) | 2.2% | 3.1% | 3.7% |
| Asian/PI languages | 10.2% (±0.9) | 2.2% | 2.9% | 4.7% |
| Speak English less than "very well" | 23.4% (±1.1) | 18.2% | 12.5% | 12.1% |
| — Spanish speakers | 17.9% (±1.0) | 16.2% | 9.5% | 8.9% |
| Bachelor's or higher | 42.4% (±1.1) | 38.2% | 32.0% | 39.4% |
| Median household income | $81,830 (±2,433) | $70,518 | $79,507 | $90,275 |
| Mean travel time | 24.1 min (±0.6) | 25.7 | 27.1 | 27.9 |
| Worked from home | 20.0% (±1.2) | 15.8% | 14.0% | 17.8% |
| Private health insurance | 60.8% (±1.4) | 54.3% | 62.1% | 67.0% |
| Public coverage | 21.7% (±1.0) | 29.5% | 26.3% | 24.5% |
| No health insurance | 22.3% (±1.2) | 22.8% | 18.6% | 16.2% |
| Under 19 uninsured | 15.8% (±1.6) | 16.3% | 13.5% | 12.1% |
| **Owner-occupied** | **38.1% (±1.3)** (renters 61.9%) | 42.4% | 57.0% | 60.1% |
| Same house one year ago | 84.2% (±1.0) (lowest of five) | 84.5% | 85.7% | 86.2% |

*Vintage note:* first drafted with ACS 2019–2023 values; updated to ACS 2020–2024 on 2026-11-08 under the data-vintage policy in docs/city-brief.md. All ACS figures here are 2020–2024.

## Observations and hypotheses

1. **Renter-majority, higher turnover.** Only 38.1% owner-occupied (lower than Dallas, 42.4%); 84.2% in the same house a year earlier. Hypothesis: patients move more often, so recall, reactivation and "found us again" discovery matter; test with lapsed-patient and address-change data.
2. **Multilingual on three fronts.** Spanish 37.4%, other Indo-European 11.4%, Asian/PI 10.2%; foreign-born 42.5%. Specific languages are not in DP tables. Observed practice sites advertise Spanish, Hindi and Telugu capability (see practices file) — that is what practices claim, not a demographic finding.
3. **Young families and coverage gaps.** Under 5 = 8.1% (highest of five); under-19 uninsured 15.8%; 21.7% public coverage. Hypothesis: pediatric, Medicaid/CHIP (Texas Health Steps covers dental checkups from 6 months for children with Medicaid) and self-pay options are relevant for some practices; test with the practice's own payer mix.
4. **Two settings in one city.** Practices position either on Las Colinas (business district, corporate-sounding copy) or on residential family/affordable dentistry. Hypothesis: two different offers, schedules and landing pages; one campaign for both will be blunt.
5. **Flat population.** +0.1% since 2020; −0.6% last year (Vintage 2025). Growth comes from share and retention.
6. **Short commutes** (24.1 min). Hypothesis: proximity to home or workplace drives choice; test with ZIP data.

## Gaps

- Specific languages (needs ACS B16001/C16001); daytime worker population for Las Colinas not sourced (do not claim commuter inflows); no dentist counts; no keyword data.
