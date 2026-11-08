# Tallahassee, Florida — market definition and public data (batch markets-fl2b)

Retrieved 2026-11-08. Researcher: editorial-team (markets-fl2b agent).

## Market definition

- **Tallahassee city** (Census place 1270600; land 102.4 sq mi) is the state capital and the seat of **Leon County**.
- **Tallahassee, FL Metro Area** (CBSA 45220) = Leon (central) plus Gadsden, Jefferson and Wakulla (outlying) counties (OMB July 2023). CSA: Tallahassee-Bainbridge, FL-GA (adds Decatur County, GA micropolitan area).
- Universities: Florida State University (FSU) and Florida A&M University (FAMU) are in the city. Only FSU enrollment is cited (FAMU's official current fall figure not found; FAMU fact books found ran to 2022–23).

Sources: `omb-cbsa-delineation-2023-florida`, `fsu-pocket-fact-book-2025-26`.

## ACS 2020–2024 5-year

| Measure | Tallahassee city | ± | Tallahassee MSA | Leon County |
|---|---|---|---|---|
| Population | 201,875 | 90 | 391,730 | 297,542 |
| Households | 85,311 | 1,077 | 157,965 | 122,597 |
| Under 18 / 65+ | 16.6% / 11.7% | 0.5 / 0.4 | 19.0% / 15.9% | 18.5% / 14.8% |
| Median age | 28.2 | 0.5 | 34.8 | 32.0 |
| Language other than English (5+) | 12.4% | 0.7 | 10.2% | 10.9% |
| Spanish | 5.4% | 0.4 | 5.5% | 5.1% |
| Median household income | $57,409 | 2,189 | $65,261 | $66,287 |
| Uninsured | 7.8% | 0.7 | 8.4% | 7.4% |
| Owner-occupied | 40.6% | 1.1 | — | — |
| Mean commute | 19.1 min | 0.5 | 23.2 | 21.1 |
| Government workers (class of worker) | 29.1% | 1.4 | — | — |
| Public administration (industry) | 12.9% | — | — | — |
| Educational services, health care and social assistance | 28.4% | 1.3 | — | — |
| Residents 3+ enrolled in college or graduate school | 50,690 | 1,628 | — | — |
| SNAP households | 12.8% | 1.0 | — | — |

- Workers (B08007): 104,284 total; 98,531 (94.5%) work in Leon County; 4,509 outside.
- Seasonal-use housing: 1,014 of 97,245 units (1.0%) — seasonality is not a housing-driven factor here.

Sources: `census-acs5-2024-dp-tallahassee-city`, `census-acs5-2024-dp-fl2b-metros-counties`, `census-acs5-2024-b25004-fl2b`, `census-acs5-2024-b08007-fl2b`.

## Vintage 2025 estimates

Tallahassee city 196,182 (base 2020) → 204,902 (July 2025), +4.4%; Leon County +2.3%; MSA (sum of four counties) 384,303 → 397,442, +3.4% (Florida +8.9%). Source: `census-sub-est2025-florida`.

## FSU (Pocket Fact Book 2025–26, March 2026)

Fall 2025 enrollment 46,184 (71.6% undergraduate); 80.0% Floridians; average age 22.9; Leon County is one of 18 Florida counties contributing 500+ students (the others include Miami-Dade, Broward, Hillsborough, etc.). Limitation: the headcount covers all FSU campuses and online students, not only Tallahassee residents. Source: `fsu-pocket-fact-book-2025-26`.

## Hypotheses (test with client data)

1. A large share of residents are students whose families may keep a dentist in their home county (80% of FSU students are Floridians from across the state) — test with new-patient age bands and home addresses vs local addresses.
2. Public-sector employment (29.1% government workers) suggests employer-sponsored dental plans and network questions matter — test with payer mix; we did not retrieve the State of Florida employee dental plan list (page content is script-rendered).
3. Renters (59% of occupied units) move more often; "new to Tallahassee" searches may cluster around August and January — test with Search Console query dates and new-patient month.
4. Outlying counties (Wakulla, Gadsden, Jefferson) are a drive-in catchment for services not available locally — test with patient ZIPs.

## Gaps

- FAMU and Tallahassee State College current enrollment not cited.
- State employee dental plan options not retrieved (mybenefits page content loads by script).
- BLS CES government-employment series not retrieved (API daily limit reached); ACS class-of-worker used instead.
