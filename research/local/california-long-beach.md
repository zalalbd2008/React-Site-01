# Long Beach — market definition and public data

Batch: markets-ca1 · Recorded 2026-11-08 · Route: `/markets/california/long-beach/`

## Market definition
- **Long Beach** is an incorporated city (GEOID 160XX00US0643000; 50.7 sq mi land) in **Los Angeles County**, and is one of the principal cities named in the **Los Angeles–Long Beach–Anaheim, CA Metro Area** title (MSA 31080, which also includes Orange County).
- It is a separate city from Los Angeles. Its southeastern edge meets Orange County, so a Long Beach practice's catchment may cross a county line (geographic observation; treat as hypothesis for catchment analysis).

## ACS 2019–2023 5-year — `node scripts/census.mjs "Long Beach" CA`
| Measure | Estimate | MOE |
|---|---|---|
| Population | 458,491 | ±71 |
| Households | 171,309 | ±1,877 |
| Median age | 36.8 | ±0.4 |
| Under 18 % | 20.3 | ±0.5 |
| 65+ % | 13.2 | ±0.3 |
| Language other than English % | 44.7 | ±0.9 |
| English less than "very well" % | 16.3 | ±0.6 |
| Spanish at home % | 33.2 | ±0.8 |
| Bachelor's or higher % | 34.8 | ±0.7 |
| Median household income | $83,969 | ±$1,629 |
| Mean travel time to work | 30.0 min | ±0.5 |
| No health insurance % | 9.0 | ±0.5 |
| SNAP households % | 13.8 | ±0.7 |
| Owner-occupied % | 40.9 | ±0.8 |

Extra (ACSDP5Y2023): foreign-born 24.7%; worked from home 14.4%; private coverage 58.9%; public coverage 39.4%.
C16001 (pop. 5+ = 434,652): Spanish 33.2%; Other Asian and Pacific Island languages 4.0%; Tagalog (incl. Filipino) 3.2%; Other Indo-European 1.3%; Chinese 0.6%; Vietnamese 0.5%. Note: Khmer is not broken out in C16001; it falls in "Other Asian and Pacific Island languages" — do not name Khmer as an ACS figure.
Population: 468,883 (2014–2018) → 458,491 (−2.2%). Density ≈9,050 per sq mi (highest of the four cities).

## DHCS Medi-Cal Dental FFS provider listing (edited 2025-09-18)
- Billing city "LONG BEACH": 737 rows, 480 distinct NPIs; non-English languages (distinct NPIs): Spanish 76, Vietnamese 17, Tagalog 16, Farsi 10, Cambodian 7, Arabic 5, Korean 4. Includes Safety Net Clinic rows.
- Same limitations as other cities.

## Interpretation (hypotheses)
- Highest density + smallest-of-the-large land area → map-pack distance effects within a dense grid; neighbourhood-level relevance (Downtown, Belmont Shore, Bixby Knolls, North Long Beach etc.) likely matters. Test via GBP "directions" requests by area and patient ZIPs.
- Younger age profile (under-18 20.3%, highest of four) → family/pediatric scheduling content may be relevant; test with PMS age mix.
- Spanish (33.2%) is the dominant non-English language; Asian/Pacific Island languages appear in both ACS and provider-language data → language support should be confirmed with practice staff capacity before advertising it.
