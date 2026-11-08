# Downey, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/downey/`

## 1. Market definition

- **Downey is an incorporated city** ("Downey city", GEOID 160XX00US0619766) in southeast **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`.
- Land area 12.409 sq mi (Gazetteer); ≈8,940 persons per sq mi (our arithmetic) — second-densest of the seven after Santa Monica.
- Neighbouring cities include Norwalk, Bellflower, Paramount, South Gate, Pico Rivera, Santa Fe Springs and Lakewood (separate cities). ACS describes Downey residents only.
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Downey" CA`; data.census.gov API). Source ids `acs-2024-dp02-downey-city` … `dp05`, `acs-2024-c16001-downey-city`; county `acs-2024-dp0X-la-county`.

| Measure (ACS variable) | Downey city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 110939 ± 44 | 9808667 |
| Median age (years) (DP05_0018E) | 37.7 ± 1.2 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 21.3 ± 1.0 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 14.2 ± 0.9 | 15.2 |
| Households (DP02_0001E) | 34876 ± 694 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 32.2 ± 1.4 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 65.1 ± 2.1 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 21.5 ± 1.4 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 56.7 ± 2.2 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 17.7 ± 1.3 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 2.3 ± 0.7 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 4.9 ± 0.9 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.3 ± 0.5 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 26.1 ± 1.8 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 90699 ± 3748 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 31.0 ± 1.0 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 73.6 ± 2.0 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 2.6 ± 0.7 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 9.2 ± 1.1 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 61.4 ± 2.0 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 39.2 ± 2.0 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 7.1 ± 0.9 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 51.1 ± 2.0 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 105,505** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Spanish (C16001_003E) | 59,871 ± 2311 | 56.7% |
| Speak only English (C16001_002E) | 36,857 ± 2176 | 34.9% |
| Tagalog (incl. Filipino) (C16001_027E) | 1,973 ± 647 | 1.9% |
| Other Indo-European languages (C16001_015E) | 1,927 ± 705 | 1.8% |
| Korean (C16001_018E) | 1,569 ± 429 | 1.5% |
| Arabic (C16001_033E) | 1,024 ± 351 | 1.0% |
| Other Asian and Pacific Island languages (C16001_030E) | 880 ± 362 | 0.8% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 612 ± 305 | 0.6% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 114,354; July 2020–2025: 113,963, 111,587, 110,248, 109,573, 109,237, 108,468. Change base→2025: -5.1% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Spanish spoken at home by 56.7% ± 2.2 of residents 5+ (DP02; C16001: 59,871 ± 2,311); 17.7% ± 1.3 speak Spanish and English less than "very well" | Spanish-language content and call handling likely affect conversion for a large group. **Preference is a hypothesis.** Test: language of inbound calls/forms; Spanish page engagement. |
| Public health coverage 39.2% ± 2.0; private 61.4% ± 2.0; uninsured 7.1% ± 0.9 (DP03) | Mixed payer base; plan-type clarity (PPO, HMO/DHMO, Medi-Cal Dental) may reduce wasted calls. Medical ≠ dental coverage. |
| Worked from home 9.2% ± 1.1 vs county 17.1%; drove alone 73.6% ± 2.0; commute 31.0 min | Early, late and Saturday slots *may* be more valuable — test with booking-time data. |
| Under 18 21.3% ± 1.0 | Near county average; family scheduling plausible — test. |
| Owner-occupied 51.1% ± 2.0 | Moderate tenure. |
| Median household income $90,699 ± 3,748 (county $90,112) | No inference about procedure demand. |
| PEP Vintage 2025: 114,354 → 108,468 (−5.1%) | Growth depends on share and retention. |

## 4. Gaps

- Could not open DHCS Medi-Cal Dental program pages or the FFS provider dataset (403/bot protection) — no Medi-Cal participation or language-of-provider data used.
- Only three practice home pages retrievable (several Downey domains failed).
