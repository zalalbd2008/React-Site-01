# McKinney, Texas — market definition and public data

Batch: markets-tx2b · Recorded 2026-11-08 · Route: `/markets/texas/mckinney/`

## Market definition
- **McKinney** is an incorporated city (GEOID 160XX00US4845744; 66.96 sq mi land area per `scripts/census.mjs` / 2023 Gazetteer) and the county seat of **Collin County**. Census Vintage 2025 subcounty estimates place the whole city in Collin County (no county-part rows elsewhere).
- Collin County is a central county of the **Dallas-Plano-Irving, TX Metropolitan Division**, within the **Dallas-Fort Worth-Arlington, TX Metro Area** (CBSA 19100) — OMB 2023 delineation, Census list1_2023.xlsx (`omb-cbsa-delineation-2023`).
- Page wording: "McKinney is a city in Collin County within the Dallas-Fort Worth-Arlington metro area." Not "Dallas", not "North Dallas". Plano and Frisco are separate cities (separate wave-2 pages), also in Collin County (Frisco partly Denton).

## ACS 2020–2024 5-year Data Profiles — `node scripts/census.mjs "McKinney" TX` (retrieved 2026-11-08)
Tables: https://data.census.gov/table/ACSDP5Y2024.DP02?g=160XX00US4845744 (also DP03, DP04, DP05). Geography: "McKinney city, Texas".

| Measure | Estimate | MOE |
|---|---|---|
| Total population | 210,600 | ±70 |
| Households | 74,072 | ±1,067 |
| Median age | 36.9 | ±0.5 |
| Under 18 % | 26.2 | ±0.6 |
| 65+ % | 10.3 | ±0.5 |
| Language other than English at home % (pop. 5+) | 26.5 | ±1.3 |
| Speak English less than "very well" % | 7.1 | ±0.8 |
| Spanish at home % | 10.9 | ±1.0 |
| Bachelor's or higher % (25+) | 54.1 | ±1.5 |
| Median household income | $124,215 | ±$4,744 |
| Mean travel time to work | 27.8 min | ±0.8 |
| Worked from home % (workers 16+) | 24.5 | ±1.3 |
| No health insurance % | 8.2 | ±0.9 |
| Under 19 with no health insurance % | 6.1 | ±1.3 |
| Private coverage % | 83.1 | ±1.1 |
| Public coverage % | 16.8 | ±0.8 |
| Foreign-born % | 19.5 | ±1.0 |
| SNAP households % | 2.7 | ±0.5 |
| Owner-occupied % | 63.8 | ±1.5 |

### ACS 2020–2024 5-year C16001 (language spoken at home, pop. 5+ = 196,977 ±1,027)
Table: https://data.census.gov/table/ACSDT5Y2024.C16001?g=160XX00US4845744
- Spanish 21,525 (±2,034) = 10.9%
- Other Indo-European languages 10,773 (±1,438) = 5.5%
- Other Asian and Pacific Island languages 7,191 (±1,000) = 3.7%
- Chinese 2,327 (±529) = 1.2%; Korean 0.9%; Vietnamese 0.8%; Arabic 0.7%; Tagalog 0.5%; Russian/Polish/Slavic 0.5%; other/unspecified 1.3% (our percentages from counts).
- Reading: non-English languages are spread across many groups; only Spanish and the broad 'other Indo-European' group exceed 5%. This does not tell us which languages patients of any practice prefer.

## Population change — Census Vintage 2025 (`census-sub-est2025-texas`, sub-est2025_48.csv, retrieved 2026-11-08)
| Geography | April 2020 base | July 2025 | Change (our calc.) |
|---|---|---|---|
| McKinney city | 195,331 | 236,001 | +20.8% |
| Collin County | 1,066,201 | 1,297,179 | +21.7% |
| Allen city (Collin) | 104,655 | 113,447 | +8.4% |
| Melissa city (Collin) | 13,900 | 29,969 | +115.6% |
| Anna city (Collin) | 17,137 | 35,245 | +105.7% |
| Princeton city (Collin) | 16,996 | 43,524 | +156.1% |
| Prosper town (Collin part) | 23,966 | 36,228 | +51.2% |
| Plano city (for contrast) | 285,465 | 293,028 | +2.6% |
| Frisco city (for contrast) | 200,531 | 236,955 | +18.2% |

- Census press release CB26-80 (`census-v2025-cities-release`, 2026-05-14): McKinney had the 10th-largest numeric gain of any US city July 2024–July 2025 (+8,504 to 236,001). Princeton (3rd, +18.1%), Melissa (4th, +14.5%) and Anna (5th, +10.2%) were among the fastest-growing US cities of 20,000+ in that year.
- Note: the ACS 5-year population (210,600) is a 2020–2024 period estimate; the PEP figure (236,001) is a July 2025 point estimate. Do not mix them in one sentence as if comparable.

## Interpretation (hypotheses to test with client data — not findings)
1. **The growth is at the edge, not only inside McKinney.** Northern/eastern Collin County towns grew far faster than McKinney itself since 2020. Hypothesis: some practices' new-patient flow increasingly comes from ZIPs outside city limits. Test: new-patient ZIPs by quarter from the PMS.
2. **Family scheduling matters.** 26.2% under 18 plus 63.8% owner-occupied housing suggests household (multi-member) appointments are common. Hypothesis only; test with family-booking share in the PMS.
3. **Daytime availability.** 24.5% of workers worked from home (2020–2024). Hypothesis: midday appointment demand differs from a commuter suburb. Test: online-booking slot selection by time of day.
4. **Language.** 26.5% speak a language other than English at home but only 10.9% Spanish; the rest is fragmented. We must not infer patient language preference. Test: intake "preferred language" field.
5. **Income ≠ cosmetic demand.** $124,215 median household income does not establish cosmetic/implant demand. Test with consult requests and accepted treatment.
6. **Insurance.** 83.1% private coverage (any private plan, not dental). Dental benefit mix must come from the practice's own payer report.

## Sources used
census-acs-2024-mckinney-city-tx; census-acs-2024-c16001-mckinney; census-sub-est2025-texas; census-v2025-cities-release; omb-cbsa-delineation-2023.
