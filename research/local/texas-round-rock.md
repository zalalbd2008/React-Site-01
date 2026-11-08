# Round Rock, Texas — market definition and public data

Batch: markets-tx2b · Recorded 2026-11-08 · Route: `/markets/texas/round-rock/`

## Market definition
- **Round Rock** is an incorporated city (GEOID 160XX00US4863500; 37.92 sq mi land area per `scripts/census.mjs` / 2023 Gazetteer) mostly in **Williamson County**, with a small part in **Travis County** (Vintage 2025: 139,317 Williamson part, 1,965 Travis part, of 141,282).
- Metro: **Austin-Round Rock-San Marcos, TX Metropolitan Statistical Area** (CBSA 12420) = Bastrop, Caldwell, Hays, Travis, Williamson counties — OMB 2023 delineation (`omb-cbsa-delineation-2023`). Round Rock is a principal city in the metro's name; it is **not** part of the City of Austin.
- Distinct from the Austin page (`/markets/texas/austin/`, wave 1, batch tx1): that page covers the City of Austin (Travis-majority; Census shows a 72,071-resident Williamson part of Austin in Vintage 2025 per tx1's source entry). Our page must not repeat Austin analysis; it focuses on Williamson County's northern suburban corridor.
- Page wording: "Round Rock is a city mostly in Williamson County, within the Austin-Round Rock-San Marcos metro area."

## ACS 2020–2024 5-year Data Profiles — `node scripts/census.mjs "Round Rock" TX` (retrieved 2026-11-08)
Tables: https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4863500 (DP02, DP03, DP04). Geography: "Round Rock city, Texas".

| Measure | Estimate | MOE |
|---|---|---|
| Total population | 127,786 | ±621 |
| Households | 48,647 | ±1,160 |
| Median age | 36.2 | ±0.9 |
| Under 18 % | 23.5 | ±1.0 |
| 65+ % | 11.2 | ±0.7 |
| Language other than English at home % (5+) | 29.2 | ±1.9 |
| Speak English less than "very well" % | 10.0 | ±1.4 |
| Spanish at home % | 18.3 | ±1.5 |
| Bachelor's or higher % (25+) | 44.8 | ±1.8 |
| Median household income | $99,287 | ±$4,128 |
| Mean travel time to work | 24.9 min | ±0.8 |
| Worked from home % | 24.8 | ±1.7 |
| No health insurance % | 11.9 | ±1.1 |
| Under 19 with no health insurance % | 7.4 | ±1.7 |
| Private coverage % | 76.9 | ±1.8 |
| Public coverage % | 20.7 | ±1.5 |
| Foreign-born % | 17.0 | ±1.3 |
| SNAP households % | 5.6 | ±0.9 |
| Owner-occupied % | 55.5 | ±1.8 |

### ACS 2020–2024 C16001 (pop. 5+ = 120,706 ±1,021)
Table: https://data.census.gov/table/ACSDT5Y2024.C16001?g=160XX00US4863500
- Spanish 22,126 (±1,849) = 18.3%; Other Asian & Pacific Island 3,652 (±858) = 3.0%; Other Indo-European 3,043 (±629) = 2.5%; Arabic 1.0%; other/unspecified 1.1%; French/Haitian/Cajun 0.8%; Chinese 0.7%; Vietnamese 0.7%; others ≤0.4% (our percentages; Korean 0.3%, German 0.4%, Tagalog 0.2%, Slavic 0.2%).
- Reading: Spanish is the only large non-English group; the "English less than very well" share (10.0%) is the highest of the four wave-2b cities.

## Population change — Census Vintage 2025 (`census-sub-est2025-texas`)
| Geography | April 2020 base | July 2025 | Change (our calc.) |
|---|---|---|---|
| Round Rock city | 119,523 | 141,282 | +18.2% |
| Williamson County | 609,059 | 752,827 | +23.6% |
| Georgetown city (Williamson) | 67,436 | 106,907 | +58.5% |
| Hutto city (Williamson) | 27,592 | 46,048 | +66.9% |
| Leander city (Williamson part) | 50,040 | 78,611 | +57.1% |
| Cedar Park city (Williamson part) | 70,110 | 72,327 | +3.2% |
| Pflugerville city (Travis part) | 65,017 | 68,121 | +4.8% |

- Census CB26-80 (`census-v2025-cities-release`): Hutto was 13th fastest-growing US city of 20,000+ July 2024–July 2025 (+7.9%).

## Interpretation (hypotheses — not findings)
1. **Neighbour growth to the north and east.** Georgetown, Hutto and Leander grew far faster than Round Rock or Cedar Park/Pflugerville since 2020. Hypothesis: patients choosing Round Rock practices increasingly live in those cities. Test: patient ZIPs; ads location reports.
2. **Austin spillover cost.** Because "Austin" is in the metro name and many searchers think of the area as Austin, broad ad targeting can buy clicks from Austin residents unlikely to travel north. Test: ads location report (user location) and bookings by ZIP.
3. **High work-from-home share (24.8%).** Hypothesis: midday appointments may be attractive; test with online booking slot selection.
4. **Spanish + limited-English share.** 18.3% Spanish; 10.0% English less than "very well". Stronger case than McKinney for Spanish-language support where staff can deliver it; still verify with intake.
5. **Income ≠ cosmetic demand.** $99,287 median household income; no inference.

## Sources used
census-acs-2024-round-rock-city-tx; census-acs-2024-c16001-round-rock; census-sub-est2025-texas; census-v2025-cities-release; omb-cbsa-delineation-2023.
