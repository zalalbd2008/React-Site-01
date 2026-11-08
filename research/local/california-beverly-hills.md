# Beverly Hills, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/beverly-hills/`

## 1. Market definition

- **Beverly Hills is a small incorporated city** ("Beverly Hills city", GEOID 160XX00US0606308) in **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`.
- **Land area 5.708 sq mi** (2023 Gazetteer) — the smallest of the seven wave-2 cities; ACS population 31,955 ± 27. It is surrounded by the City of Los Angeles (e.g. Century City, Beverlywood, Westwood, Bel Air, Beverly Grove) and borders West Hollywood.
- The place name is widely used outside the city limits (e.g. by an office with a Los Angeles 90025 address in our sample that titles pages "Beverly Hills"). Our page distinguishes **Beverly Hills city** from "the Beverly Hills name".
- Delivery: remote from Houston; no California office.
- Editorial constraints from the assignment: **do not infer cosmetic demand from income** (treat as hypothesis); **no celebrity clichés**.

## 2. Public data — ACS 2019–2023 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Beverly Hills" CA`; data.census.gov API). Source ids `acs-2023-dp02-beverly-hills-city` … `dp05`, `acs-2023-c16001-beverly-hills-city`; county `acs-2023-dp0X-la-county`. **Margins of error are wide for this small population** — always show them.

| Measure (ACS variable) | Beverly Hills city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 31955 ± 27 | 9848406 |
| Median age (years) (DP05_0018E) | 47.7 ± 2.3 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 17.8 ± 2.2 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 24.9 ± 2.2 | 14.7 |
| Households (DP02_0001E) | 14263 ± 551 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 37.1 ± 2.7 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 42.6 ± 3.9 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 12.3 ± 2.5 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 6.1 ± 2.0 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 0.8 ± 0.4 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 24.9 ± 3.9 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 8.3 ± 2.4 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 3.8 ± 1.7 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 69.4 ± 2.9 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 127979 ± 15382 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 24.5 ± 1.9 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 58.8 ± 4.0 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 2.0 ± 1.0 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 26.3 ± 3.5 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 76.7 ± 3.5 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 32.6 ± 3.3 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 4.7 ± 1.6 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 42.0 ± 3.3 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 31,050** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 17,814 ± 1237 | 57.4% |
| Other Indo-European languages (C16001_015E) | 6,058 ± 1229 | 19.5% |
| Spanish (C16001_003E) | 1,909 ± 615 | 6.1% |
| Other and unspecified languages (C16001_036E) | 911 ± 516 | 2.9% |
| Other Asian and Pacific Island languages (C16001_030E) | 899 ± 495 | 2.9% |
| French, Haitian, or Cajun (C16001_006E) | 749 ± 297 | 2.4% |
| Russian, Polish, or other Slavic languages (C16001_012E) | 712 ± 295 | 2.3% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 705 ± 288 | 2.3% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 32,702; July 2020–2025: 32,581, 31,894, 31,456, 31,181, 31,021, 30,764. Change base→2025: -5.9% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| ~32,000 residents on 5.7 sq mi (ACS; Gazetteer); PEP −5.9% from 2020 base to 2025 (32,702 → 30,764) | The resident base alone is small and shrinking; offices located here likely draw many patients from outside the city. **Hypothesis** — test with new-patient home ZIPs. |
| Median household income $127,979 **± 15,382** (DP03) | Wide MOE. **Do not infer cosmetic or fee-for-service demand.** Procedure mix must come from the practice's own data. |
| 65+ 24.9% ± 2.2; median age 47.7 ± 2.3 (DP05) — oldest of the seven | Older resident base; restorative, periodontal and implant consultations *may* matter — test with PMS procedure mix and referral sources. |
| Other Indo-European languages 19.5% of pop. 5+ (C16001: 6,058 ± 1,229); foreign-born 37.1% ± 2.7 | C16001 does not name individual languages (no Persian/Farsi figure is available); **do not state one**. Language preference is a hypothesis; one sampled site claimed "8 languages spoken". |
| Owner-occupied 42.0% ± 3.3 | Mixed tenure. |
| Mean commute 24.5 ± 1.9 min; worked from home 26.3% ± 3.5 | — |
| Private insurance 76.7% ± 3.5; public 32.6% ± 3.3; uninsured 4.7% ± 1.6 | Medical coverage, not dental. |

## 4. Gaps

- Only three practice sites could be retrieved; **six general/family candidate domains failed** (proxy 502). The sample is specialist/cosmetic-weighted — say so on the page.
- No source quantifies patient inflow into Beverly Hills; the inflow idea stays a hypothesis.
- No celebrity, "luxury" or "90210" framing used.
