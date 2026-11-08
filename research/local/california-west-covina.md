# West Covina, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/west-covina/`

## 1. Market definition

- **West Covina is an incorporated city** ("West Covina city", GEOID 160XX00US0684200) in the eastern San Gabriel Valley of **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`. "San Gabriel Valley" is an informal regional name, not a Census geography.
- Land area 16.036 sq mi (Gazetteer); ≈6,700 persons per sq mi (our arithmetic).
- Neighbours include Covina (separate city, 7.035 sq mi), Baldwin Park, Walnut, La Puente and West Puente Valley, plus unincorporated CDPs such as Valinda and South San Jose Hills (Gazetteer, LSAD 57). Orange County (the "Anaheim" part of the MSA) is a drive away; one sampled practice runs offices in both West Covina and Orange County.
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2019–2023 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "West Covina" CA` — first run failed on an empty cached file, re-run succeeded; data.census.gov API). Source ids `acs-2023-dp02-west-covina-city` … `dp05`, `acs-2023-c16001-west-covina-city`; county `acs-2023-dp0X-la-county`.

| Measure (ACS variable) | West Covina city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 107436 ± 76 | 9848406 |
| Median age (years) (DP05_0018E) | 40.1 ± 0.9 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 20.1 ± 0.9 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 17.0 ± 0.8 | 14.7 |
| Households (DP02_0001E) | 32586 ± 604 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 36.7 ± 1.5 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 59.2 ± 1.8 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 23.1 ± 1.2 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 34.1 ± 1.9 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 10.2 ± 1.0 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 1.1 ± 0.4 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 23.1 ± 1.6 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 12.3 ± 1.1 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 29.8 ± 1.5 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 98570 ± 3045 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 33.2 ± 1.0 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 73.0 ± 2.1 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 2.0 ± 0.4 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 11.3 ± 1.3 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 63.1 ± 1.7 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 38.5 ± 1.5 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 5.8 ± 0.8 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 60.8 ± 1.9 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 101,990** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 41,562 ± 1825 | 40.8% |
| Spanish (C16001_003E) | 34,794 ± 1960 | 34.1% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 12,338 ± 1264 | 12.1% |
| Tagalog (incl. Filipino) (C16001_027E) | 6,161 ± 816 | 6.0% |
| Vietnamese (C16001_024E) | 2,736 ± 607 | 2.7% |
| Other Asian and Pacific Island languages (C16001_030E) | 2,105 ± 507 | 2.1% |
| Other Indo-European languages (C16001_015E) | 910 ± 418 | 0.9% |
| Arabic (C16001_033E) | 725 ± 359 | 0.7% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 109,504; July 2020–2025: 109,153, 106,879, 106,023, 106,287, 106,267, 105,301. Change base→2025: -3.8% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Spanish 34.1% (C16001: 34,794 ± 1,960); Chinese (incl. Mandarin, Cantonese) 12.1% (12,338 ± 1,264); Tagalog 6.0% (6,161 ± 816); Vietnamese 2.7% (2,736 ± 607) of pop. 5+ | **Several** sizeable language groups at once — the practice must choose which to serve well, based on staff capacity. Preference is a hypothesis; log call language. |
| English less than "very well" 23.1% ± 1.2 of pop. 5+; Spanish-limited-English 10.2% ± 1.0; API-limited-English 12.3% ± 1.1 | Roughly equal limited-English shares across Spanish and Asian-language speakers — language strategy cannot default to Spanish only. |
| Public health coverage 38.5% ± 1.5; private 63.1% ± 1.7; uninsured 5.8% ± 0.8 | Mixed payer base; plan clarity matters (medical ≠ dental coverage). |
| Mean commute 33.2 ± 1.0 min; drove alone 73.0% ± 2.1; WFH 11.3% ± 1.3 | Car-dependent, freeway-oriented (I-10 runs through the city — observed in a practice's directions); early/late slots *may* matter. |
| Owner-occupied 60.8% ± 1.9 | Settled households; recall programmes plausible. |
| PEP Vintage 2025: 109,504 → 105,301 (−3.8%) | Shrinking resident base. |
| Median household income $98,570 ± 3,045 | No inference about procedure demand. |

## 4. Gaps

- C16001 does not separate Mandarin from Cantonese, or written Chinese preference (simplified vs traditional) — must come from the practice's patients.
- Only three practice home pages retrievable; several West Covina domains failed.
- DHCS FFS provider dataset 403 — not used.
