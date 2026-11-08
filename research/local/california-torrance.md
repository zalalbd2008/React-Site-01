# Torrance, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/torrance/`

## 1. Market definition

- **Torrance is an incorporated city** ("Torrance city", GEOID 160XX00US0680000) in **Los Angeles County**, part of the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`. Commonly grouped with the "South Bay" (informal regional name, not a Census geography).
- Land area 20.516 sq mi (Gazetteer); ≈6,990 persons per sq mi (our arithmetic).
- Neighbours include Redondo Beach, Lomita, Gardena, Carson and the Palos Verdes Peninsula cities (all separate cities), plus unincorporated areas such as West Carson CDP and Alondra Park CDP (Gazetteer lists both as CDPs, LSAD 57).
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2019–2023 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Torrance" CA`; data.census.gov API). Source ids `acs-2023-dp02-torrance-city` … `dp05`, `acs-2023-c16001-torrance-city`; county `acs-2023-dp0X-la-county`.

| Measure (ACS variable) | Torrance city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 143499 ± 65 | 9848406 |
| Median age (years) (DP05_0018E) | 43.1 ± 0.9 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 20.7 ± 0.9 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 18.3 ± 0.7 | 14.7 |
| Households (DP02_0001E) | 55317 ± 895 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 31.0 ± 1.4 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 41.2 ± 1.9 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 17.4 ± 1.6 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 10.2 ± 1.2 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 2.7 ± 0.5 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 5.7 ± 0.9 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 23.6 ± 1.6 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 12.6 ± 1.4 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 53.0 ± 1.4 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 113105 ± 5640 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 27.4 ± 0.7 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 71.1 ± 1.5 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 1.1 ± 0.4 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 18.5 ± 1.3 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 75.7 ± 1.7 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 29.8 ± 1.5 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 4.4 ± 0.6 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 54.6 ± 1.4 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 136,637** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 80,282 ± 2619 | 58.8% |
| Spanish (C16001_003E) | 13,924 ± 1617 | 10.2% |
| Other Asian and Pacific Island languages (C16001_030E) | 12,536 ± 1721 | 9.2% |
| Korean (C16001_018E) | 8,840 ± 1342 | 6.5% |
| Other Indo-European languages (C16001_015E) | 6,106 ± 1099 | 4.5% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 4,754 ± 639 | 3.5% |
| Tagalog (incl. Filipino) (C16001_027E) | 3,561 ± 672 | 2.6% |
| Vietnamese (C16001_024E) | 2,610 ± 891 | 1.9% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 146,940; July 2020–2025: 146,426, 143,265, 141,271, 140,129, 139,489, 138,391. Change base→2025: -5.8% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Asian and Pacific Island languages 23.6% ± 1.6 of pop. 5+ (DP02); Korean 6.5% and "Other Asian and Pacific Island languages" 9.2% (C16001); API speakers with English less than "very well" 12.6% ± 1.4 | A meaningful share of residents may prefer Korean or another Asian language for health conversations. C16001 does not name the languages inside "Other Asian and Pacific Island"; **do not name Japanese or any other specific language as a Census figure**. Test: front-desk language log; staff language capacity. |
| Spanish at home 10.2% ± 1.2 (vs county 37.7%) | Spanish is a smaller share than in most of LA County; one of five sampled sites nonetheless had Spanish pages. |
| PEP Vintage 2025: 146,940 (2020 base) → 138,391 (2025), **−5.8%**, steeper than the county's −3.2% | The resident pool is shrinking; growth plans must rely on share, retention and reactivation rather than new households. |
| Median age 43.1 ± 0.9; 65+ 18.3% (DP05) | An older resident base may shift case mix toward restorative/prosthetic and periodontal maintenance — **hypothesis only**; check PMS procedure mix. |
| Drove alone 71.1% ± 1.5; public transit 1.1% ± 0.4; mean commute 27.4 min (DP03) | A car-oriented city: parking, arterial location and "near" searches along major streets matter. |
| Owner-occupied 54.6% ± 1.4 (DP04) | Longer tenure may favour recall/reactivation programmes. |
| Private insurance 75.7% ± 1.7; uninsured 4.4% ± 0.6 | Medical coverage only — not dental benefits. |

## 4. Gaps

- No source on which specific Asian languages make up "Other Asian and Pacific Island languages" at place level.
- No DSO/practice counts used.
- DHCS FFS provider dataset page 403 — not used.
