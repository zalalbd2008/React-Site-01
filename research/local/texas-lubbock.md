# Lubbock, Texas — market definition and public data

Batch: markets-tx2b · Recorded 2026-11-08 · Route: `/markets/texas/lubbock/`

## Market definition
- **Lubbock** is an incorporated city (GEOID 160XX00US4845000; 141.96 sq mi land area per `scripts/census.mjs` / 2023 Gazetteer), wholly in **Lubbock County** (Vintage 2025 subcounty file shows one county row).
- Metro: **Lubbock, TX Metropolitan Statistical Area** (CBSA 31180) = Lubbock County (central) plus Cochran, Crosby, Garza, Hockley and Lynn counties (outlying) — OMB 2023 delineation (`omb-cbsa-delineation-2023`, opened 2026-11-08).
- "South Plains", "West Texas" and "Hub City" are regional/marketing names, not Census geographies. Page wording: "Lubbock is a city in Lubbock County and the central county of the six-county Lubbock metro area."
- **Regional referral hub:** not asserted. We found an economic-development/vendor description of Lubbock as a healthcare hub (ITEX guide citing the Lubbock Economic Development Alliance; a general SEO agency page) but no source establishing dental referral flows. Page treats regional draw as a hypothesis only.

## ACS 2020–2024 5-year Data Profiles — `node scripts/census.mjs "Lubbock" TX` (retrieved 2026-11-08)
Tables: https://data.census.gov/table/ACSDP5Y2024.DP05?g=160XX00US4845000 (DP02, DP03, DP04). Geography: "Lubbock city, Texas".

| Measure | Estimate | MOE |
|---|---|---|
| Total population | 264,814 | ±47 |
| Households | 107,086 | ±1,155 |
| Median age | 30.5 | ±0.2 |
| Under 18 % | 22.9 | ±0.3 |
| 65+ % | 12.8 | ±0.3 |
| Language other than English at home % (5+) | 20.0 | ±0.7 |
| Speak English less than "very well" % | 4.6 | ±0.4 |
| Spanish at home % | 16.3 | ±0.6 |
| Bachelor's or higher % (25+) | 35.1 | ±1.1 |
| Median household income | $60,895 | ±$1,870 |
| Mean travel time to work | 16.3 min | ±0.6 |
| Worked from home % | 7.1 | ±0.7 |
| No health insurance % | 13.6 | ±0.9 |
| Under 19 with no health insurance % | 10.7 | ±2.0 |
| Private coverage % | 67.9 | ±1.3 |
| Public coverage % | 28.6 | ±0.9 |
| SNAP households % | 10.7 | ±0.9 |
| Owner-occupied % | 51.2 | ±1.1 (so roughly half of occupied units are renter-occupied — our arithmetic) |

## Population change — Census Vintage 2025 (`census-sub-est2025-texas`)
| Geography | April 2020 base | July 2025 | Change (our calc.) |
|---|---|---|---|
| Lubbock city | 257,240 | 273,071 | +6.2% |
| Lubbock County | 310,646 | 328,906 | +5.9% |
| Wolfforth city (Lubbock County) | 5,541 | 8,746 | +57.8% |

## University
- Texas Tech University news release, 11 Sep 2025 (`ttu-enrollment-fall-2025`, opened 2026-11-08): 12th-class-day fall 2025 enrollment of **42,272** students (33,996 undergraduates, 8,276 graduate), up more than 1,200 from the prior year; fourth consecutive year of fall enrollment increase.
- A local TV report (not opened as a citation; seen only in search results) mentions fall 2026 above 45,000 — **not used**; we cite only the university's own fall 2025 figure.
- Students may or may not be counted in city ACS population depending on residence; we do not combine the figures.

## Interpretation (hypotheses — not findings)
1. **Young, mobile population.** Median age 30.5 and ~half of homes renter-occupied, plus a 42,000-student university. Hypothesis: a meaningful share of residents arrive and leave each year, so the pool of people without a dentist renews continuously. Test: new-patient counts by month vs academic calendar; share of new patients with out-of-area previous dentist.
2. **Compact commuting.** 16.3-minute mean commute. Hypothesis: inside the city, convenience radius around the office is tight; local map visibility near the office matters. Test: GBP direction-request origins; patient ZIP distribution.
3. **Out-of-town patients (MSA outlying counties and beyond).** Hypothesis only. Some practice sites list surrounding towns; whether patients actually travel in must come from patient ZIPs. If they do, they need fewer, longer visits and clearer "plan your visit" information.
4. **Coverage.** 13.6% uninsured, 28.6% public coverage (health, not dental). Payment clarity hypothesis as elsewhere; test with payer mix.
5. **Spanish.** 16.3% Spanish at home but 4.6% English less than "very well". Signpost bilingual staff if real; full translation case weaker than in Corpus Christi; test with intake data.

## Sources used
census-acs-2024-lubbock-city-tx; census-sub-est2025-texas; omb-cbsa-delineation-2023; ttu-enrollment-fall-2025.
