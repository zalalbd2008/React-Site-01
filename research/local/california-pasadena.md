# Pasadena — market definition and public data

Batch: markets-ca1 · Recorded 2026-11-08 · Route: `/markets/california/pasadena/`

## Market definition
- **Pasadena** is an incorporated city (GEOID 160XX00US0656000; 22.96 sq mi land) in **Los Angeles County** in the **Los Angeles–Long Beach–Anaheim, CA Metro Area**. Distinct from **South Pasadena** (separate city) and from **Pasadena, Texas** (search results mixed both — see agency file).
- Neighbouring cities (Altadena is unincorporated; Arcadia, San Marino, South Pasadena, La Cañada Flintridge are separate cities) may supply patients — hypothesis to test with patient ZIPs.

## ACS 2019–2023 5-year — `node scripts/census.mjs "Pasadena" CA`
| Measure | Estimate | MOE |
|---|---|---|
| Population | 136,462 | ±63 |
| Households | 57,131 | ±899 |
| Median age | 40.1 | ±0.6 |
| Under 18 % | 16.3 | ±0.7 |
| 65+ % | 17.1 | ±0.7 |
| Language other than English % | 42.6 | ±1.8 |
| English less than "very well" % | 15.5 | ±1.2 |
| Spanish at home % | 25.2 | ±1.4 |
| Bachelor's or higher % | 56.0 | ±1.4 |
| Median household income | $103,778 | ±$4,359 |
| Mean travel time to work | 27.3 min | ±0.7 |
| No health insurance % | 6.3 | ±0.8 |
| SNAP households % | 9.2 | ±0.9 |
| Owner-occupied % | 42.1 | ±1.3 |

Extra (ACSDP5Y2023): foreign-born 29.2%; worked from home 23.6% (highest of the four); private coverage 68.2%; public coverage 35.0%.
C16001 (pop. 5+ = 129,851): Spanish 25.2%; Chinese (incl. Mandarin, Cantonese) 6.0%; Other Indo-European 3.9%; Tagalog 2.2%; Other Asian/PI 1.4%; Korean 1.1%.
Population: 141,246 → 136,462 (−3.4%). Density ≈5,940 per sq mi.

## DHCS Medi-Cal Dental FFS listing (edited 2025-09-18)
- Billing city "PASADENA": 239 rows, 161 distinct NPIs; non-English (distinct NPIs): Spanish 24, Armenian 12, Arabic 7, Korean 5, Russian 5.

## Interpretation (hypotheses)
- Small city (23 sq mi) with highest income and degree attainment of the four and highest work-from-home share → do NOT infer cosmetic demand; but daytime presence/weekday-appointment patterns may differ from commuter cities. Test with appointment-time data.
- Older profile (65+ 17.1%, under-18 16.3%) → restorative/implant and recall content may matter more than pediatric; test with PMS.
- Small city means the realistic market extends into neighbouring cities; city-limits-only targeting may be too narrow (test ad location reports).
- A third-party agency page we read repeats Pasadena ACS 2020–2024 figures (e.g., $105,192 median income) and self-reported Keyword Planner CPCs — not used.
