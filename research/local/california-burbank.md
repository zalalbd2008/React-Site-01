# Burbank, California — market definition and public data

Batch: markets-ca2 · Researched and recorded 2026-11-08 · Route: `/markets/california/burbank/`

## 1. Market definition

- **Burbank is an incorporated city** ("Burbank city", GEOID 160XX00US0608954) in **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA MSA** (CBSA 31080; Los Angeles–Long Beach–Glendale Metropolitan Division) — `omb-cbsa-delineation-2023`.
- Land area 17.316 sq mi (2023 Gazetteer); ≈6,040 persons per sq mi (our arithmetic).
- Borders the City of Glendale (separate city, covered by the markets-ca1 Glendale page) and City of Los Angeles neighborhoods in the San Fernando Valley (e.g. North Hollywood, Toluca Lake, Sun Valley). Patients can cross these lines without noticing; ACS figures describe Burbank residents only.
- Delivery: remote from Houston; no California office.
- **Overlap control:** the Glendale page (markets-ca1) builds its analysis around language (see markets-ca1 Glendale research). The Burbank page must not repeat that; its centre is the **cross-boundary trade area** and the employment-centre/commuter pattern, with language as a secondary test.

## 2. Public data — ACS 2020–2024 5-year

Retrieved 2026-11-08 (`node scripts/census.mjs "Burbank" CA`; data.census.gov API). Source ids: `acs-2024-dp02-burbank-city` … `acs-2024-dp05-burbank-city`, `acs-2024-c16001-burbank-city`; county from `acs-2024-dp0X-la-county`.

| Measure (ACS variable) | Burbank city (estimate ± MOE) | Los Angeles County |
|---|---|---|
| Total population (DP05_0001E) | 104546 ± 46 | 9808667 |
| Median age (years) (DP05_0018E) | 40.1 ± 1.0 | 38.2 |
| Under 18 (%) (DP05_0019PE) | 19.1 ± 1.2 | 20.6 |
| 65 and over (%) (DP05_0024PE) | 16.3 ± 0.9 | 15.2 |
| Households (DP02_0001E) | 42995 ± 867 | 3416449 |
| Foreign-born (%) (DP02_0094PE) | 29.9 ± 1.6 | 33.4 |
| Language other than English at home, pop. 5+ (%) (DP02_0114PE) | 41.5 ± 2.1 | 55.1 |
| Speak English less than "very well", pop. 5+ (%) (DP02_0115PE) | 14.6 ± 1.1 | 23.4 |
| Spanish at home (%) (DP02_0116PE) | 14.6 ± 1.5 | 37.6 |
| Spanish speakers, English less than "very well" (% of pop. 5+) (DP02_0117PE) | 4.3 ± 0.7 | 15.7 |
| Other Indo-European languages (%) (DP02_0118PE) | 18.3 ± 1.7 | 5.6 |
| Asian and Pacific Island languages (%) (DP02_0120PE) | 7.1 ± 1.1 | 10.7 |
| API speakers, English less than "very well" (% of pop. 5+) (DP02_0121PE) | 2.5 ± 0.5 | 5.4 |
| Bachelor's degree or higher, 25+ (%) (DP02_0068PE) | 47.1 ± 1.8 | 36.0 |
| Median household income (2024 $) (DP03_0062E) | 97082 ± 4808 | 90112 |
| Mean travel time to work (min) (DP03_0025E) | 26.0 ± 0.8 | 30.4 |
| Drove alone to work (%) (DP03_0019PE) | 59.4 ± 2.0 | 64.8 |
| Public transportation to work (%) (DP03_0021PE) | 0.8 ± 0.3 | 3.9 |
| Worked from home (%) (DP03_0024PE) | 30.4 ± 2.2 | 17.1 |
| Private health insurance (%) (DP03_0097PE) | 68.4 ± 1.8 | 58.2 |
| Public health coverage (%) (DP03_0098PE) | 34.7 ± 1.9 | 41.2 |
| No health insurance (%) (DP03_0099PE) | 4.0 ± 0.6 | 8.2 |
| Owner-occupied housing units (%) (DP04_0046PE) | 43.3 ± 2.0 | 45.9 |

**C16001 (ACS 2020–2024), population 5+ = 99,186** — top groups (our percentage of the 5+ total):

| Language group (variable) | Estimate ± MOE | Share |
|---|---|---|
| Speak only English (C16001_002E) | 58,031 ± 2100 | 58.5% |
| Other Indo-European languages (C16001_015E) | 15,270 ± 1648 | 15.4% |
| Spanish (C16001_003E) | 14,493 ± 1492 | 14.6% |
| Tagalog (incl. Filipino) (C16001_027E) | 2,876 ± 611 | 2.9% |
| Russian, Polish, or other Slavic languages (C16001_012E) | 2,097 ± 569 | 2.1% |
| Other Asian and Pacific Island languages (C16001_030E) | 1,740 ± 622 | 1.8% |
| Chinese (incl. Mandarin, Cantonese) (C16001_021E) | 1,211 ± 494 | 1.2% |
| Arabic (C16001_033E) | 1,087 ± 703 | 1.1% |

**Population Estimates Program, Vintage 2025 (SUB-EST2025_6):** April 2020 base 107,333; July 2020–2025: 107,006, 104,904, 103,839, 103,464, 103,423, 102,988. Change base→2025: -4.0% (our arithmetic). Los Angeles County: 10,017,414 → 9,694,934 (−3.2%).

Source for population estimates: `census-sub-est2025-california`.

## 3. Facts and hypotheses

| Fact (source) | Hypothesis to test |
|---|---|
| Three of four sampled practice sites name places outside Burbank (Glendale, Toluca Lake, North Hollywood, Studio City, Sherman Oaks, Santa Clarita) | Practices already treat the trade area as cross-boundary. Test: new-patient home ZIP distribution from the PMS (counts only). |
| Other Indo-European languages 15.4% of pop. 5+ (C16001); Spanish 14.6%; Tagalog 2.9% | C16001 does not name individual languages; **do not state an Armenian percentage**. Log language requests at the front desk for 60 days. |
| Worked from home 30.4% ± 2.2 (DP03) vs county 17.1% | Daytime appointment acceptance may be higher than in commuter suburbs; test by slot fill rate. |
| Owner-occupied 43.3% ± 2.0 (DP04) | Mixed renter/owner base; test "new to area" share at intake. |
| Median age 40.1; under 18 19.1%; 65+ 16.3% (DP05) | Close to county profile; no age-based specialisation implied. |
| Median household income $97,082 ± 4,808 | **Do not infer cosmetic demand.** |
| PEP Vintage 2025: 107,333 (2020 base) → 102,988 (2025), −4.0% | Plan for share gains, not population growth. |

## 4. Gaps

- No employment/daytime-population data retrieved; "people who work in Burbank" demand remains a hypothesis (not stated as fact on the page).
- No detailed language table at place level (B16001 returned no data, HTTP 204).
- DHCS FFS provider dataset page 403 — not used.
