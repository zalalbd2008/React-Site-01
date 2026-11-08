# City of Los Angeles — market definition and public data

Batch: markets-ca1 · Recorded 2026-11-08 · Route: `/markets/california/los-angeles/`

## Market definition
- **The City of Los Angeles** is one incorporated city (GEOID 160XX00US0644000; 470.5 sq mi land area per `scripts/census.mjs`) in **Los Angeles County**, within the **Los Angeles–Long Beach–Anaheim, CA Metro Area** (MSA 31080).
- It is not the county (88 cities) and not the metro (LA + Orange counties). Many places people call "LA" — Santa Monica, Beverly Hills, Culver City, West Hollywood, Burbank, Glendale, Pasadena — are separate incorporated cities. Neighbourhoods such as Koreatown, Silver Lake, Echo Park, Westwood, Hollywood and the San Fernando Valley communities are inside the city.
- Page rule: write "City of Los Angeles" or "Los Angeles" in headings; never "LA" in headings or entity data.

## ACS 2019–2023 5-year (city) — `node scripts/census.mjs "Los Angeles" CA`
| Measure | Estimate | MOE |
|---|---|---|
| Population | 3,857,897 | ±75 |
| Households | 1,419,663 | ±4,500 |
| Median age | 36.9 | ±0.1 |
| Under 18 % | 19.5 | ±0.1 |
| 65+ % | 13.8 | ±0.1 |
| Language other than English at home % (5+) | 56.8 | ±0.3 |
| Speak English less than "very well" % | 25.0 | ±0.2 |
| Spanish at home % | 39.7 | ±0.3 |
| Bachelor's or higher % (25+) | 37.8 | ±0.2 |
| Median household income | $80,366 | ±$630 |
| Mean travel time to work | 31.1 min | ±0.1 |
| No health insurance % | 10.0 | ±0.2 |
| SNAP households % | 14.2 | ±0.2 |
| Owner-occupied % | 36.3 | ±0.3 |

Extra (data.census.gov ACSDP5Y2023): foreign-born 35.8%; worked from home 17.3%; private coverage 55.2%; public coverage 41.9%.

ACS 2019–2023 C16001 (language groups, pop. 5+ = 3,658,530): Spanish 39.7%; Other Indo-European languages 5.2%; Tagalog (incl. Filipino) 2.3%; Korean 2.3%; Chinese (incl. Mandarin, Cantonese) 1.7%; Other Asian and Pacific Island languages 1.3%.

Population: ACS 2014–2018 3,959,657 → 2019–2023 3,857,897 (−2.6%). Density ≈8,200 per sq mi (our calculation).
Share of county population: 39.2% (our calculation).

## DHCS Medi-Cal Dental FFS provider listing (layer edited 2025-09-18)
- Billing city "LOS ANGELES": 3,465 rows, 1,868 distinct NPIs. Non-English languages listed most often (distinct NPIs): Spanish 316, Korean 67, Farsi 54, Tagalog 46, Russian 32, Armenian 31, Vietnamese 17.
- Limitations: billing city ≠ service location; FFS only (excludes Dental Managed Care); provider-reported language; not a count of offices.

## Interpretation (hypotheses, not findings)
- Size + 470 sq mi + 31-minute mean commute → a practice's realistic catchment is a few neighbourhoods, not "Los Angeles". Hypothesis to test with client patient-ZIP data.
- Spanish is spoken at home by ~4 in 10 residents 5+, and Korean/Tagalog/Farsi/Armenian appear in both ACS and the Medi-Cal provider language field → language pages and staff-language info are plausible conversion levers in specific neighbourhoods. Test with call logs/form language, not demographics.
- 10.0% uninsured (medical) and 41.9% public coverage → payment-path clarity (PPO/HMO/Medi-Cal acceptance, membership plans) is likely to matter; dental-benefit mix must come from the practice's PMS.
