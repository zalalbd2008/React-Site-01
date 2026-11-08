# Corpus Christi, Texas — market definition and public data

Batch: markets-tx2b · Recorded 2026-11-08 · Route: `/markets/texas/corpus-christi/`

## Market definition
- **Corpus Christi** is an incorporated city (GEOID 160XX00US4817000; 162.28 sq mi land area per `scripts/census.mjs` / 2023 Gazetteer). Census Vintage 2025 subcounty estimates put essentially all residents in **Nueces County** (317,241 of 317,247; the city also has county-part rows in Aransas, Kleberg and San Patricio with 0–5 residents).
- Metro: **Corpus Christi, TX Metropolitan Statistical Area** (CBSA 18580) = Nueces County (central), San Patricio County (central), Aransas County (outlying) — OMB 2023 delineation (`omb-cbsa-delineation-2023`, list1_2023.xlsx opened 2026-11-08). It is its own MSA, not part of San Antonio or Houston.
- "Coastal Bend" is a common regional name; it is **not** a Census geography. Page wording: "Corpus Christi is a city in Nueces County and the core of the Corpus Christi metro area (Nueces, San Patricio and Aransas counties)."

## ACS 2020–2024 5-year Data Profiles — `node scripts/census.mjs "Corpus Christi" TX` (retrieved 2026-11-08)
Tables: https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4817000 (and DP02, DP03, DP04). Geography: "Corpus Christi city, Texas".

| Measure | Estimate | MOE |
|---|---|---|
| Total population | 317,419 | ±50 |
| Households | 118,741 | ±1,175 |
| Median age | 36.9 | ±0.3 |
| Under 18 % | 23.4 | ±0.2 |
| 65+ % | 15.6 | ±0.2 |
| Language other than English at home % (5+) | 32.1 | ±0.8 |
| Speak English less than "very well" % | 6.8 | ±0.5 |
| Spanish at home % | 29.3 | ±0.8 |
| Bachelor's or higher % (25+) | 24.4 | ±0.9 |
| Median household income | $67,394 | ±$1,835 |
| Mean travel time to work | 21.3 min | ±0.7 |
| Worked from home % | 5.3 | ±0.7 |
| No health insurance % | 17.8 | ±0.9 |
| Under 19 with no health insurance % | 8.1 | ±1.3 |
| Private coverage % | 56.3 | ±1.4 |
| Public coverage % | 35.3 | ±0.9 |
| Foreign-born % | 8.8 | ±0.6 |
| SNAP households % | 17.3 | ±1.1 |
| Owner-occupied % | 57.9 | ±1.0 |

## Population change — Census Vintage 2025 (`census-sub-est2025-texas`)
| Geography | April 2020 base | July 2025 | Change (our calc.) |
|---|---|---|---|
| Corpus Christi city | 318,090 | 317,247 | −0.3% |
| Nueces County | 353,346 | 352,992 | −0.1% |
| San Patricio County | 68,757 | 72,053 | +4.8% |
| Aransas County | 23,828 | 26,146 | +9.7% |
| Portland city (San Patricio part) | 20,441 | 20,833 | +1.9% |
| Robstown city (Nueces) | 10,128 | 10,324 | +1.9% |

## Climate / operations context
- NOAA National Hurricane Center Tropical Cyclone Climatology (`noaa-nhc-hurricane-climatology`, opened 2026-11-08): the Atlantic hurricane season runs June 1 to November 30; the Atlantic basin includes the Gulf (named "Gulf of America" on the page); peak September 10, most activity mid-August to mid-October. Basin-wide; says nothing about a specific city's risk in a given year.
- Google Business Profile Help, special hours (`google-gbp-special-hours`, opened): special hours for temporary changes or closures of up to 6 days in a row; profile must be "Open with main hours" for special hours to show.

## Texas program context (state-level, not city figures)
- Texas HHSC "Texas Health Steps" (`tx-hhsc-texas-health-steps`, opened 2026-11-08): free checkups for children birth through 20 who have Medicaid, including dental checkups from 6 months of age. State program page; no city enrolment.

## Interpretation (hypotheses — not findings)
1. **Flat population.** The city and Nueces County are essentially unchanged since 2020. Hypothesis: growth for an established practice comes mostly from share (winning patients choosing between practices) and retention, not from new residents. Test: new vs returning patient mix; reasons for choosing the practice at intake.
2. **Coverage mix.** 17.8% uninsured and 35.3% with public coverage (any health coverage, not dental). Hypothesis: clear payment information (membership plans, financing, accepted programs) affects inquiry quality. Test: payer mix of new patients from the PMS; call reasons.
3. **Spanish.** 29.3% speak Spanish at home; only 6.8% speak English less than "very well". Hypothesis: bilingual reassurance may matter more than full translation for many households; not a basis to assume preference. Test: intake preferred-language field; Spanish-language query impressions in Search Console.
4. **Storm season operations.** Closures or changed hours during June–November events need fast, consistent updates across website, GBP and ads. Operational, not a demand claim.
5. **Metro edges.** San Patricio and Aransas counties grew while Nueces was flat. Hypothesis: practices on the north side (e.g., near the bridges/Calallen) may draw from San Patricio County. Test with patient ZIPs; do not assume.
6. **Short commutes, low WFH (21.3 min; 5.3%).** Hypothesis: appointment-time demand may cluster before/after shifts. Test with booking-time data.

## Sources used
census-acs-2024-corpus-christi-city-tx; census-sub-est2025-texas; omb-cbsa-delineation-2023; noaa-nhc-hurricane-climatology; google-gbp-special-hours; tx-hhsc-texas-health-steps.
