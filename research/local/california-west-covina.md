# West Covina, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/west-covina/`

## 1. Market definition

- **West Covina is an incorporated city** ("West Covina city", GEOID 160XX00US0684200) in the eastern San Gabriel Valley of **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`. "San Gabriel Valley" is an informal regional name, not a Census geography.
- Land area 16.036 sq mi (Gazetteer); ≈6,680 persons per sq mi (our arithmetic).
- Neighbours include Covina (separate city, 7.035 sq mi), Baldwin Park, Walnut, La Puente and West Puente Valley, plus unincorporated CDPs such as Valinda and South San Jose Hills (Gazetteer, LSAD 57). Orange County (the "Anaheim" part of the MSA) is a drive away; one sampled practice runs offices in both West Covina and Orange County.
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "West Covina" CA` — first run failed on an empty cached file, re-run succeeded; data.census.gov API). Source ids `acs-2024-dp02-west-covina-city` … `dp05`, `acs-2024-c16001-west-covina-city`; county `acs-2024-dp0X-la-county`.

| Measure (ACS variable) | West Covina city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 107037 ± 66 | 9808667 |
| Median age (years) (DP05_0018E) | 40.5 ± 1.0 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 20.2 ± 1.0 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 17.9 ± 0.9 | 15.2 |
| Households (DP02_0001E) | 32892 ± 664 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 37.1 ± 1.6 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 59.8 ± 1.8 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 23.2 ± 1.3 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 34.6 ± 2.1 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 10.4 ± 1.1 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 1.2 ± 0.3 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 23.4 ± 1.5 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 12.2 ± 0.9 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 30.1 ± 1.6 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 101065 ± 2793 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 32.9 ± 1.0 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 71.1 ± 1.6 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 2.0 ± 0.5 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 13.2 ± 1.2 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 62.3 ± 1.9 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 40.3 ± 1.8 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 5.7 ± 0.8 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 60.3 ± 1.9 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 101,786** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 40,899 ± 1895 | 40.2% |
| Spanish (C16001_003E) | 35,218 ± 2085 | 34.6% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 12,176 ± 1096 | 12.0% |
| Tagalog (incl. Filipino) (C16001_027E) | 6,537 ± 958 | 6.4% |
| Vietnamese (C16001_024E) | 2,827 ± 581 | 2.8% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,831 ± 407 | 1.8% |
| Other Indo-European languages (C16001_015E) | 887 ± 288 | 0.9% |
| Arabic (C16001_033E) | 477 ± 239 | 0.5% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 109,504; July 2020–2025: 109,153, 106,879, 106,023, 106,287, 106,267, 105,301. Change base→2025: -3.8% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Spanish 34.6% (C16001: 35,218 ± 2,085); Chinese (incl. Mandarin, Cantonese) 12.0% (12,176 ± 1,096); Tagalog 6.4% (6,537 ± 958); Vietnamese 2.8% (2,827 ± 581) of pop. 5+ | **Several** sizeable language groups — the practice must choose which to serve well, based on staff capacity. Log call language. |
| English less than "very well" 23.2% ± 1.3; Spanish-limited-English 10.4% ± 1.1; API-limited-English 12.2% ± 0.9 | Near-equal limited-English shares — language strategy cannot default to Spanish only. |
| Public health coverage 40.3% ± 1.8; private 62.3% ± 1.9; uninsured 5.7% ± 0.8 | Mixed payer base; plan clarity matters (medical ≠ dental). |
| Mean commute 32.9 ± 1.0 min; drove alone 71.1% ± 1.6; WFH 13.2% ± 1.2 | Car-dependent, freeway-oriented; early/late slots *may* matter. |
| Owner-occupied 60.3% ± 1.9 | Settled households; recall programmes plausible. |
| PEP Vintage 2025: 109,504 → 105,301 (−3.8%) | Shrinking resident base. |
| Median household income $101,065 ± 2,793 | No inference about procedure demand. |

## 4. Gaps

- C16001 does not separate Mandarin from Cantonese, or written Chinese preference (simplified vs traditional) — must come from the practice's patients.
- Only three practice home pages retrievable; several West Covina domains failed.
- DHCS FFS provider dataset 403 — not used.
