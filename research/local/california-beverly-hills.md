# Beverly Hills, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/beverly-hills/`

## 1. Market definition

- **Beverly Hills is a small incorporated city** ("Beverly Hills city", GEOID 160XX00US0606308) in **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`.
- **Land area 5.708 sq mi** (2023 Gazetteer) — the smallest of the seven wave-2 cities; ACS population 31,624 ± 30. It is surrounded by the City of Los Angeles (e.g. Century City, Beverlywood, Westwood, Bel Air, Beverly Grove) and borders West Hollywood.
- The place name is widely used outside the city limits (e.g. by an office with a Los Angeles 90025 address in our sample that titles pages "Beverly Hills"). Our page distinguishes **Beverly Hills city** from "the Beverly Hills name".
- Delivery: remote from Houston; no California office.
- Editorial constraints from the assignment: **do not infer cosmetic demand from income** (treat as hypothesis); **no celebrity clichés**.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Beverly Hills" CA`; data.census.gov API). Source ids `acs-2024-dp02-beverly-hills-city` … `dp05`, `acs-2024-c16001-beverly-hills-city`; county `acs-2024-dp0X-la-county`. **Margins of error are wide for this small population** — always show them.

| Measure (ACS variable) | Beverly Hills city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 31624 ± 30 | 9808667 |
| Median age (years) (DP05_0018E) | 47.9 ± 3.0 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 16.3 ± 2.1 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 25.4 ± 2.1 | 15.2 |
| Households (DP02_0001E) | 14449 ± 562 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 37.9 ± 2.8 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 43.6 ± 3.7 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 12.8 ± 2.1 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 6.2 ± 1.8 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 0.7 ± 0.3 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 24.7 ± 3.6 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 9.6 ± 2.6 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 4.0 ± 1.4 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 69.9 ± 2.5 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 132977 ± 14628 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 25.1 ± 2.0 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 55.5 ± 4.0 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 1.2 ± 0.8 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 30.1 ± 3.6 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 76.5 ± 3.1 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 33.5 ± 2.9 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 4.6 ± 1.3 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 41.0 ± 2.9 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 30,718** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 17,340 ± 1156 | 56.4% |
| Other Indo-European languages (C16001_015E) | 6,131 ± 1035 | 20.0% |
| Spanish (C16001_003E) | 1,918 ± 564 | 6.2% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 1,074 ± 484 | 3.5% |
| Other Asian and Pacific Island languages (C16001_030E) | 869 ± 539 | 2.8% |
| Other and unspecified languages (C16001_036E) | 855 ± 502 | 2.8% |
| French, Haitian, or Cajun (C16001_006E) | 693 ± 395 | 2.3% |
| Korean (C16001_018E) | 668 ± 267 | 2.2% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 32,702; July 2020–2025: 32,581, 31,894, 31,456, 31,181, 31,021, 30,764. Change base→2025: -5.9% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| ~31,600 residents on 5.7 sq mi (ACS; Gazetteer); PEP −5.9% from 2020 base to 2025 (32,702 → 30,764) | The resident base is small and shrinking; offices here likely draw many patients from outside the city. **Hypothesis** — test with new-patient home ZIPs. |
| Median household income $132,977 **± 14,628** (DP03) | Wide MOE. **Do not infer cosmetic or fee-for-service demand.** |
| 65+ 25.4% ± 2.1; median age 47.9 ± 3.0 (DP05) — oldest of the seven | Restorative, periodontal and implant consultations *may* matter — test with PMS procedure mix and referral sources. |
| Other Indo-European languages 20.0% of pop. 5+ (C16001: 6,131 ± 1,035); foreign-born 37.9% ± 2.8 | C16001 does not name individual languages (no Persian/Farsi figure is available); **do not state one**. One sampled site claimed "8 languages spoken". |
| Owner-occupied 41.0% ± 2.9 | Mixed tenure. |
| Mean commute 25.1 ± 2.0 min; worked from home 30.1% ± 3.6 | — |
| Private insurance 76.5% ± 3.1; public 33.5% ± 2.9; uninsured 4.6% ± 1.3 | Medical coverage, not dental. |

## 4. Gaps

- Only three practice sites could be retrieved; **six general/family candidate domains failed** (proxy 502). The sample is specialist/cosmetic-weighted — say so on the page.
- No source quantifies patient inflow into Beverly Hills; the inflow idea stays a hypothesis.
- No celebrity, "luxury" or "90210" framing used.
