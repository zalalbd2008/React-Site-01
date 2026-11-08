# Torrance, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/torrance/`

## 1. Market definition

- **Torrance is an incorporated city** ("Torrance city", GEOID 160XX00US0680000) in **Los Angeles County**, part of the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`. Commonly grouped with the "South Bay" (informal regional name, not a Census geography).
- Land area 20.516 sq mi (Gazetteer); ≈6,930 persons per sq mi (our arithmetic).
- Neighbours include Redondo Beach, Lomita, Gardena, Carson and the Palos Verdes Peninsula cities (all separate cities), plus unincorporated areas such as West Carson CDP and Alondra Park CDP (Gazetteer lists both as CDPs, LSAD 57).
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Torrance" CA`; data.census.gov API). Source ids `acs-2024-dp02-torrance-city` … `dp05`, `acs-2024-c16001-torrance-city`; county `acs-2024-dp0X-la-county`.

| Measure (ACS variable) | Torrance city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 142130 ± 39 | 9808667 |
| Median age (years) (DP05_0018E) | 43.2 ± 0.9 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 20.8 ± 0.9 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 18.8 ± 0.8 | 15.2 |
| Households (DP02_0001E) | 54869 ± 961 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 29.9 ± 1.3 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 40.1 ± 1.9 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 17.2 ± 1.4 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 9.8 ± 1.4 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 2.7 ± 0.6 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 5.7 ± 0.9 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 23.0 ± 1.6 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 12.3 ± 1.3 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 54.0 ± 1.6 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 116217 ± 5160 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 26.9 ± 0.9 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 69.7 ± 1.5 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 0.9 ± 0.4 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 20.8 ± 1.4 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 75.1 ± 1.3 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 30.6 ± 1.3 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 4.2 ± 0.8 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 55.0 ± 1.6 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 135,136** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 80,924 ± 2626 | 59.9% |
| Spanish (C16001_003E) | 13,278 ± 1874 | 9.8% |
| Other Asian and Pacific Island languages (C16001_030E) | 11,369 ± 1441 | 8.4% |
| Korean (C16001_018E) | 8,780 ± 1298 | 6.5% |
| Other Indo-European languages (C16001_015E) | 5,741 ± 951 | 4.2% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 4,716 ± 677 | 3.5% |
| Tagalog (incl. Filipino) (C16001_027E) | 3,404 ± 663 | 2.5% |
| Vietnamese (C16001_024E) | 2,790 ± 862 | 2.1% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 146,940; July 2020–2025: 146,426, 143,265, 141,271, 140,129, 139,489, 138,391. Change base→2025: -5.8% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Asian and Pacific Island languages 23.0% ± 1.6 of pop. 5+ (DP02); Korean 6.5% and "Other Asian and Pacific Island languages" 8.4% (C16001); API speakers with English less than "very well" 12.3% ± 1.3 | A meaningful share may prefer Korean or another Asian language for health conversations. C16001 does not name languages inside "Other Asian and Pacific Island"; **do not name Japanese or any other specific language as a Census figure**. Test: front-desk language log; staff capacity. |
| Spanish at home 9.8% ± 1.4 (vs county 37.6%) | Spanish is a smaller share than in most of LA County; one sampled site nonetheless had Spanish pages. |
| PEP Vintage 2025: 146,940 (2020 base) → 138,391 (2025), **−5.8%**, steeper than the county's −3.2% | Growth must rely on share, retention and reactivation. |
| Median age 43.2 ± 0.9; 65+ 18.8% (DP05) | An older base *may* shift case mix toward restorative and periodontal maintenance — hypothesis only; check PMS. |
| Drove alone 69.7% ± 1.5; public transit 0.9% ± 0.4; mean commute 26.9 min (DP03) | Car-oriented: parking, arterial location and landmarks matter. |
| Owner-occupied 55.0% ± 1.6 (DP04) | Longer tenure may favour recall/reactivation. |
| Private insurance 75.1% ± 1.3; uninsured 4.2% ± 0.8 | Medical coverage only — not dental benefits. |

## 4. Gaps

- No source on which specific Asian languages make up "Other Asian and Pacific Island languages" at place level.
- No DSO/practice counts used.
- DHCS FFS provider dataset page 403 — not used.
