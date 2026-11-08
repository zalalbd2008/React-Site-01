# Downey, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/downey/`

## 1. Market definition

- **Downey is an incorporated city** ("Downey city", GEOID 160XX00US0619766) in southeast **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080) — `omb-cbsa-delineation-2023`.
- Land area 12.409 sq mi (Gazetteer); ≈9,010 persons per sq mi (our arithmetic) — second-densest of the seven after Santa Monica.
- Neighbouring cities include Norwalk, Bellflower, Paramount, South Gate, Pico Rivera, Santa Fe Springs and Lakewood (separate cities). ACS describes Downey residents only.
- Delivery: remote from Houston; no California office.

## 2. Public data — ACS 2019–2023 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Downey" CA`; data.census.gov API). Source ids `acs-2023-dp02-downey-city` … `dp05`, `acs-2023-c16001-downey-city`; county `acs-2023-dp0X-la-county`.

| Measure (ACS variable) | Downey city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 111793 ± 61 | 9848406 |
| Median age (years) (DP05_0018E) | 37.0 ± 1.0 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 21.8 ± 1.0 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 14.1 ± 1.0 | 14.7 |
| Households (DP02_0001E) | 34727 ± 777 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 31.9 ± 1.5 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 65.1 ± 2.0 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 21.6 ± 1.3 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 56.6 ± 2.0 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 18.0 ± 1.3 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 2.0 ± 0.7 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 5.2 ± 0.9 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.4 ± 0.5 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 25.6 ± 1.6 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 87400 ± 3113 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 31.0 ± 0.8 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 73.5 ± 2.0 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 2.9 ± 0.7 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 8.3 ± 1.1 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 61.7 ± 1.8 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 37.9 ± 1.9 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 7.8 ± 0.9 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 50.7 ± 2.2 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 106,158** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Spanish (C16001_003E) | 60,133 ± 2179 | 56.6% |
| Speak only English (C16001_002E) | 37,102 ± 2100 | 34.9% |
| Tagalog (incl. Filipino) (C16001_027E) | 2,045 ± 596 | 1.9% |
| Korean (C16001_018E) | 1,737 ± 430 | 1.6% |
| Other Indo-European languages (C16001_015E) | 1,723 ± 693 | 1.6% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,021 ± 465 | 1.0% |
| Arabic (C16001_033E) | 1,001 ± 338 | 0.9% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 517 ± 306 | 0.5% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 114,354; July 2020–2025: 113,963, 111,587, 110,248, 109,573, 109,237, 108,468. Change base→2025: -5.1% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Spanish spoken at home by 56.6% ± 2.0 of residents 5+ (DP02/C16001: 60,133 ± 2,179); 18.0% ± 1.3 of residents 5+ speak Spanish and English less than "very well" | Spanish-language content and call handling are likely to affect conversion for a large group. **Preference is still a hypothesis** — many Spanish speakers are fully bilingual. Test: language of inbound calls/forms; Spanish page engagement. |
| Public health coverage 37.9% ± 1.9; private 61.7% ± 1.8; uninsured 7.8% ± 0.9 (DP03) | A mixed payer base; clarity about which dental plans (PPO, HMO/DHMO, Medi-Cal Dental) the office accepts may reduce wasted calls. Medical coverage ≠ dental coverage. |
| Worked from home 8.3% ± 1.1 vs county 15.2%; drove alone 73.5% ± 2.0; commute 31.0 min | Most working residents leave the city on weekdays; early, late and Saturday slots *may* be more valuable — test with booking-time data. |
| Under 18 21.8% ± 1.0 | Near county average; family scheduling (parent + child) is a plausible need — test. |
| Owner-occupied 50.7% ± 2.2 | Moderate tenure. |
| Median household income $87,400 ± 3,113 (county $87,760) | No inference about procedure demand. |
| PEP Vintage 2025: 114,354 → 108,468 (−5.1%) | Shrinking resident base; growth depends on share and retention. |

## 4. Gaps

- Could not open DHCS Medi-Cal Dental program pages or the FFS provider dataset (403/bot protection) — no Medi-Cal participation or language-of-provider data used.
- Only three practice home pages retrievable (several Downey domains failed).
