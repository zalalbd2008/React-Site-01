# Burbank, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/burbank/`

## 1. Market definition

- **Burbank is an incorporated city** ("Burbank city", GEOID 160XX00US0608954) in **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080; Los Angeles–Long Beach–Glendale Metropolitan Division) — `omb-cbsa-delineation-2023`.
- Land area 17.316 sq mi (2023 Gazetteer); ≈6,070 persons per sq mi (our arithmetic).
- Borders the City of Glendale (separate city, covered by the markets-ca1 Glendale page) and City of Los Angeles neighborhoods in the San Fernando Valley (e.g. North Hollywood, Toluca Lake, Sun Valley). Patients can cross these lines without noticing; ACS figures describe Burbank residents only.
- Delivery: remote from Houston; no California office.
- **Overlap control:** the Glendale page (markets-ca1) builds its analysis around language (Glendale: 66.0% language other than English; Other Indo-European 41.0%). The Burbank page must not repeat that; its centre is the **cross-boundary trade area** and the employment-centre/commuter pattern, with language as a secondary test.

## 2. Public data — ACS 2019–2023 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Burbank" CA`; data.census.gov API). Source ids: `acs-2023-dp02-burbank-city` … `acs-2023-dp05-burbank-city`, `acs-2023-c16001-burbank-city`; county from `acs-2023-dp0X-la-county`.

| Measure (ACS variable) | Burbank city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 105165 ± 81 | 9848406 |
| Median age (years) (DP05_0018E) | 39.8 ± 0.8 | 37.9 |
| Under 18 (%) (DP05_0019PE) | 19.2 ± 1.2 | 20.9 |
| 65 and over (%) (DP05_0024PE) | 16.3 ± 0.9 | 14.7 |
| Households (DP02_0001E) | 43066 ± 997 | 3390254 |
| Foreign-born (%) (DP02_0094PE) | 29.3 ± 1.4 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 41.3 ± 2.1 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 13.9 ± 0.9 | 23.2 |
| Spanish at home (%) (DP02_0116PE) | 14.5 ± 1.4 | 37.7 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 3.8 ± 0.6 | 15.5 |
| Other Indo-European languages (%) (DP02_0118PE) | 17.6 ± 1.8 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 7.8 ± 1.1 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.8 ± 0.5 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 46.0 ± 1.8 | 35.5 |
| Median household income (2023 $) (DP03_0062E) | 95816 ± 4357 | 87760 |
| Mean travel time to work (min) (DP03_0025E) | 26.4 ± 0.9 | 30.8 |
| Drove alone to work (%) (DP03_0019PE) | 61.8 ± 2.4 | 66.4 |
| Public transportation to work (%) (DP03_0021PE) | 1.6 ± 0.5 | 4.2 |
| Worked from home (%) (DP03_0024PE) | 27.4 ± 2.2 | 15.2 |
| Private health insurance (%) (DP03_0097PE) | 70.1 ± 1.9 | 58.6 |
| Public health coverage (%) (DP03_0098PE) | 32.8 ± 1.7 | 40.2 |
| No health insurance (%) (DP03_0099PE) | 4.4 ± 0.7 | 8.7 |
| Owner-occupied housing units (%) (DP04_0046PE) | 42.8 ± 1.9 | 46.1 |

**C16001 (ACS 2019–2023), population 5+ = 99,776** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 58,520 ± 2159 | 58.7% |
| Other Indo-European languages (C16001_015E) | 14,925 ± 1632 | 15.0% |
| Spanish (C16001_003E) | 14,436 ± 1379 | 14.5% |
| Tagalog (incl. Filipino) (C16001_027E) | 2,732 ± 655 | 2.7% |
| Russian, Polish, or other Slavic languages (C16001_012E) | 1,908 ± 654 | 1.9% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 1,906 ± 563 | 1.9% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,768 ± 622 | 1.8% |
| Arabic (C16001_033E) | 984 ± 451 | 1.0% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 107,333; July 2020–2025: 107,006, 104,904, 103,839, 103,464, 103,423, 102,988. Change base→2025: -4.0% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Three of four sampled practice sites name places outside Burbank (Glendale, Toluca Lake, North Hollywood, Studio City, Sherman Oaks, Santa Clarita) | Practices already treat the trade area as cross-boundary. Test: new-patient home ZIP distribution from the PMS (counts only, no patient data shared). |
| Other Indo-European languages 15.0% of pop. 5+ (C16001); Spanish 14.5%; Tagalog 2.7% | C16001 does not name individual languages; **do not state an Armenian percentage**. Which language callers prefer is a hypothesis — log language requests at the front desk for 60 days. |
| Worked from home 27.4% ± 2.2 (DP03) vs county 15.2% | Daytime appointment acceptance may be higher than in commuter suburbs; test by slot fill rate. |
| Owner-occupied 42.8% ± 1.9 (DP04) | Mixed renter/owner base; moderate turnover — test "new to area" share at intake. |
| Median age 39.8; under 18 19.2%; 65+ 16.3% (DP05) | Close to county profile; no age-based specialisation implied. |
| Median household income $95,816 ± 4,357 | **Do not infer cosmetic demand.** |
| PEP Vintage 2025: 107,333 (2020 base) → 102,988 (2025), −4.0% | Resident base shrinking modestly; plan for share gains, not population growth. |

## 4. Gaps

- No employment/daytime-population data retrieved; "people who work in Burbank" demand remains a hypothesis (not stated as fact on the page).
- No detailed language table at place level (B16001 returned no data, HTTP 204).
- DHCS FFS provider dataset page 403 — not used.
