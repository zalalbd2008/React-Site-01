# Glendale, California — market definition and public data

Batch: markets-ca1 · Recorded 2026-11-08 · Route: `/markets/california/glendale/`

## Market definition
- **Glendale, California** is an incorporated city (GEOID 160XX00US0630000; 30.5 sq mi land) in **Los Angeles County** within the **Los Angeles–Long Beach–Anaheim, CA Metro Area**. Not **Glendale, Arizona** (Phoenix metro) — search results for Glendale mixed the two (see agency file).
- Neighbours: Burbank (separate city), City of Los Angeles neighbourhoods (Atwater Village, Eagle Rock, Sunland-Tujunga), La Cañada Flintridge, La Crescenta-Montrose (unincorporated). A practice site in the sample had separate area pages for Montrose, Atwater Village and La Cañada Flintridge.

## ACS 2019–2023 5-year — `node scripts/census.mjs "Glendale" CA`
| Measure | Estimate | MOE |
|---|---|---|
| Population | 192,270 | ±67 |
| Households | 73,179 | ±1,453 |
| Median age | 41.4 | ±0.8 |
| Under 18 % | 18.3 | ±0.7 |
| 65+ % | 18.9 | ±0.8 |
| Language other than English % | 66.0 | ±1.6 |
| English less than "very well" % | 31.0 | ±1.1 |
| Spanish at home % | 13.6 | ±1.1 |
| Bachelor's or higher % | 45.5 | ±1.2 |
| Median household income | $84,262 | ±$2,755 |
| Mean travel time to work | 27.3 min | ±0.6 |
| No health insurance % | 6.7 | ±0.7 |
| SNAP households % | 18.7 | ±1.0 |
| Owner-occupied % | 35.3 | ±1.3 |

Extra (ACSDP5Y2023): foreign-born 51.0% (highest of the four); private coverage 57.9%; public coverage 42.3%; Other Indo-European languages (DP02_0118PE) 41.0%.
C16001 (pop. 5+ = 182,699): Other Indo-European languages 38.0% (±2,926 persons); Spanish 13.6%; Tagalog 4.4%; Korean 2.9%; Russian/Polish/other Slavic 2.5%; Arabic 1.5%. "Only English" 33.8%.
- C16001 does not break out Armenian; the detailed table (B16001) did not load on 2026-11-08. **Do not state an ACS Armenian percentage.** Armenian appears in: DHCS Medi-Cal Dental FFS provider-language field (most frequent non-English language for Glendale billing city) and multiple sampled practice websites.
Population: 200,372 → 192,270 (−4.0%, the largest decline of the four). Density ≈6,310 per sq mi.

## DHCS Medi-Cal Dental FFS listing (edited 2025-09-18)
- Billing city "GLENDALE": 457 rows, 239 distinct NPIs; non-English (distinct NPIs): Armenian 58, Spanish 39, Russian 29, Farsi 29, Tagalog 11, Arabic 7.

## Interpretation (hypotheses)
- Two-thirds speak a language other than English at home and 31% speak English less than "very well" (highest of the four) → language is a core conversion and trust variable; but which language a given patient prefers is a hypothesis to test with call/form data.
- Oldest median age and highest 65+ share → recall, restorative and accessibility considerations; test with PMS.
- SNAP share 18.7% (highest of four) alongside $84k median income → mixed payment paths; payment-option clarity.
