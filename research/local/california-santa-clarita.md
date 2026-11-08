# Santa Clarita, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/santa-clarita/`

## 1. Market definition

- **Santa Clarita is an incorporated city** ("Santa Clarita city", GEOID 160XX00US0669088) in northern **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`.
- The City of Santa Clarita's profile (`santa-clarita-city-profile`, retrieved 2026-11-08): incorporated in 1987 at 39 sq mi including **Saugus, Newhall, Valencia and Canyon Country**; neighbourhoods annexed since; "third largest City in Los Angeles County"; about 30 miles north of Downtown LA.
- Land area now 73.614 sq mi (2023 Gazetteer) — the largest of the seven; ≈3,130 persons per sq mi (our arithmetic), the least dense.
- **Outside the city limits:** Stevenson Ranch CDP (6.384 sq mi) and Castaic CDP (7.262 sq mi) are separate census designated places (Gazetteer LSAD 57) — part of the wider Santa Clarita Valley in everyday use but **not** Santa Clarita city. Practice sites in the sample list Stevenson Ranch as a served area.
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Santa Clarita" CA`; data.census.gov API). Source ids `acs-2024-dp02-santa-clarita-city` … `dp05`, `acs-2024-c16001-santa-clarita-city`; county `acs-2024-dp0X-la-county`.

| Measure (ACS variable) | Santa Clarita city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 230221 ± 96 | 9808667 |
| Median age (years) (DP05_0018E) | 38.4 ± 0.7 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 24.6 ± 1.0 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 13.5 ± 0.5 | 15.2 |
| Households (DP02_0001E) | 75808 ± 1300 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 22.2 ± 1.1 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 36.2 ± 1.3 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 10.4 ± 0.8 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 22.9 ± 1.1 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 6.7 ± 0.7 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 4.9 ± 0.6 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 6.9 ± 0.6 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.3 ± 0.3 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 39.8 ± 1.3 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 123062 ± 3271 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 34.1 ± 0.8 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 68.1 ± 1.2 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 1.6 ± 0.5 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 18.5 ± 1.0 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 77.4 ± 1.4 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 28.0 ± 1.4 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 4.6 ± 0.6 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 71.8 ± 1.4 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 215,930** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 137,753 ± 2944 | 63.8% |
| Spanish (C16001_003E) | 49,386 ± 2375 | 22.9% |
| Other Indo-European languages (C16001_015E) | 7,692 ± 1198 | 3.6% |
| Tagalog (incl. Filipino) (C16001_027E) | 7,162 ± 889 | 3.3% |
| Other Asian and Pacific Island languages (C16001_030E) | 2,804 ± 660 | 1.3% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 2,194 ± 651 | 1.0% |
| Arabic (C16001_033E) | 2,154 ± 540 | 1.0% |
| Korean (C16001_018E) | 2,064 ± 550 | 1.0% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 232,809; July 2020–2025: 232,406, 229,818, 229,852, 229,837, 229,361, 228,430. Change base→2025: -1.9% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| 73.6 sq mi, ~3,130 per sq mi; four founding communities plus annexations; adjacent CDPs outside the city | Distance (google-gbp-local-ranking) means a Canyon Country office and a Valencia office may compete in different local results. Test: geo-grid visibility; new-patient ZIPs. |
| Mean travel time to work 34.1 ± 0.8 min — longest of the seven; county 30.4 | Evening and Saturday slots may matter more to working parents — test with booking-time and no-show data. |
| Owner-occupied 71.8% ± 1.4 (county 45.9%) | Stable households; family recall plausible — test with household-linked accounts. |
| Under 18 24.6% ± 1.0 (county 20.6%) | Pediatric and orthodontic demand *may* be larger — hypothesis. |
| Spanish at home 22.9% (C16001: 49,386 ± 2,375); Spanish speakers with limited English 6.7% ± 0.7 of 5+ | Spanish content is a secondary test. |
| Tagalog 3.3% (C16001) | Small; note only. |
| PEP Vintage 2025: 232,809 → 228,430 (−1.9%), smallest decline of the seven | Relatively stable resident base. |
| Private insurance 77.4% ± 1.4; uninsured 4.6% | Medical coverage, not dental. |

## 4. Gaps

- No commuting destination data (where residents work) retrieved.
- No data on Stevenson Ranch/Castaic residents used on the page (separate places; not pulled).
- DHCS FFS provider dataset 403 — not used.
