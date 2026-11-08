# Port St. Lucie, Florida — market definition and public data (batch markets-fl2b)

Retrieved 2026-11-08. Researcher: editorial-team (markets-fl2b agent).

## Market definition

- **Port St. Lucie city** (Census place 1258715; land 119.2 sq mi) is in **St. Lucie County**.
- **Port St. Lucie, FL Metro Area** (CBSA 38940) = **St. Lucie and Martin counties** (both central, OMB July 2023). It is part of the Miami-Port St. Lucie-Fort Lauderdale CSA, but it is **not** part of the Miami-Fort Lauderdale-West Palm Beach MSA. Fort Pierce (St. Lucie) and Stuart (Martin) are separate cities. The region is commonly called the Treasure Coast (not an official Census name; not used for data).
- Areas named on practice sites: Tradition, St. Lucie West, Becker Road, Gatlin Blvd corridors (city neighbourhoods/roads; not verified as Census geographies).

Source: `omb-cbsa-delineation-2023-florida`.

## Growth (sourced — Census Vintage 2025, SUB-EST2025)

| Geography | Base Apr 2020 | Jul 2024 | Jul 2025 | Change 2020–25 |
|---|---|---|---|---|
| Port St. Lucie city | 204,826 | 258,931 | 268,062 | **+30.9%** (+63,236) |
| St. Lucie County | 329,226 | 391,592 | 402,449 | +22.2% |
| Martin County | 158,432 | 165,202 | 166,272 | +4.9% |
| MSA (sum) | 487,658 | — | 568,721 | +16.6% |
| Florida | 21,538,207 | — | 23,462,518 | +8.9% |

Calculated from the same file: among the 26 Florida cities with 2025 populations of 100,000+, Port St. Lucie had the **highest percentage growth** 2020–2025 and the **second-largest numeric gain** (after Jacksonville, +68,082); it was the **fifth-most-populous** Florida city in July 2025. 2024→2025: +9,131 (+3.5%). Source: `census-sub-est2025-florida`.

## ACS 2020–2024 5-year

| Measure | Port St. Lucie city | ± | PSL MSA | St. Lucie Co. | Martin Co. |
|---|---|---|---|---|---|
| Population | 232,491 | 51 | 522,676 | 360,500 | 162,176 |
| Households | 83,952 | 1,329 | 205,254 | 137,453 | 67,801 |
| Under 18 / 65+ | 20.4% / 21.8% | 0.6 / 0.7 | 18.6% / 26.9% | 19.7% / 24.6% | 16.1% / 32.2% |
| Median age | 43.9 | 0.6 | 47.6 | 45.1 | 53.3 |
| Language other than English (5+) | 26.7% | 1.5 | 21.7% | 24.6% | 15.2% |
| Spanish | 17.4% | 1.0 | 14.4% | 15.9% | 11.2% |
| English less than "very well" | 8.6% | 0.9 | 7.7% | 8.9% | 5.2% |
| Median household income | $80,648 | 2,686 | $74,514 | $71,457 | $82,943 |
| Uninsured | 10.3% | 0.9 | 11.1% | 11.4% | 10.5% |
| Owner-occupied | 84.0% | 1.3 | — | — | — |
| Mean commute | 30.5 min | 0.8 | 29.0 | 29.3 | 28.4 |
| Bachelor's+ | 28.1% | 1.5 | — | — | — |

- Place of work (B08007): of 104,063 workers living in the city, **37,839 (36.4%) work outside St. Lucie County** (64,820 in county). Compare Tallahassee 4.3%, Gainesville 4.5%.
- Seasonal-use housing: city 4,160 of 90,911 (4.6%); St. Lucie County 15,319 of 160,146 (9.6%); Martin 10,252 of 83,121 (12.3%).
- Note: ACS 5-year population (232,491) is a 2020–2024 period average; the July 2025 PEP estimate (268,062) is a point estimate. Do not subtract.

Sources: `census-acs5-2024-dp-port-st-lucie-city`, `census-acs5-2024-dp-fl2b-metros-counties`, `census-acs5-2024-b25004-fl2b`, `census-acs5-2024-b08007-fl2b`.

## Public dental provision observed

Florida Department of Health in St. Lucie County lists "Forever Smiles South", 537 NW Lake Whitney Pl, Port St. Lucie, service "Pediatric Dental", hours Mon–Thu 8–5, Fri 8–2, closed weekends (opened 2026-11-08) — `fl-doh-st-lucie-forever-smiles-south`. Not part of the private-practice sample. Florida's adult Medicaid dental benefit is classified "Emergency-only" 2021–2025 by ADA HPI (state-level; `ada-hpi-medicaid-tables-2025`).

## Hypotheses

1. Rapid in-migration creates a steady stream of households without a local dentist; acquisition (being findable and bookable by newcomers) matters more here than in slower-growing cities — test with "how did you hear / are you new to the area" at booking.
2. One in three resident workers commutes out of the county: early, late and Saturday appointments, and booking that works outside office hours, may matter — test with booking timestamps and bookings by appointment slot.
3. Spanish at home (17.4%) does not establish preferred language; test bilingual call handling demand before building Spanish pages.
4. A mix of young families (20.4% under 18) and older adults (21.8% 65+) supports both pediatric/family and restorative/implant positioning — check own mix and capacity.
5. Growth is not proof of unmet demand: new practices and group offices also open — monitor local results and new competitors quarterly.

## Gaps

- Neighbourhood-level growth (e.g. west of I-95/Tradition) not sourced; page describes growth at city/county level only.
- No count of dental offices used (directory counts are not active offices).
- City planning/permit data not retrieved.
