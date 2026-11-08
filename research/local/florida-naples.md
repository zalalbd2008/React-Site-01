# Naples, Florida — market definition and public data (batch markets-fl2b)

Retrieved 2026-11-08. Researcher: editorial-team (markets-fl2b agent).

## Market definition (do not inflate)

- **Naples city** is a small incorporated city (Census place 1247625; land area 12.3 sq mi, 2023 Gazetteer) in **Collier County**.
- **Naples-Marco Island, FL Metro Area** (CBSA 34940) consists of **Collier County only** (OMB July 2023 delineation, List 1). Marco Island is a separate incorporated city (Vintage 2025: 16,421). The CSA is Cape Coral-Fort Myers-Naples (Lee County is a separate MSA).
- Most of the people with a "Naples" mailing address or who say they live "in Naples" live in unincorporated Collier County (North Naples, East Naples, Golden Gate, Lely etc. are not inside city limits). City population is about 5% of the county.
- On the page: "Naples" = the incorporated city when citing data; "the Naples area / Collier County" = the metro. Never present the county figure as the city figure.

Sources: `omb-cbsa-delineation-2023-florida`, `census-sub-est2025-florida`.

## ACS 2020–2024 5-year (via `node scripts/census.mjs "Naples" FL --vintage 2024` and data.census.gov table API)

| Measure | Naples city | ± | Naples-Marco Island MSA (Collier) |
|---|---|---|---|
| Total population | 19,704 | 22 | 398,291 |
| Households | 9,836 | 378 | 165,875 |
| Under 18 | 9.0% | 2.3 | 16.3% |
| 65 and over | 55.8% | 3.1 | 33.8% |
| Median age | 67.3 | 1.4 | 53.3 |
| Language other than English at home (5+) | 9.3% | 2.1 | 32.7% |
| Spanish at home | 3.8% | 1.5 | 23.4% |
| English less than "very well" | 4.1% | 1.6 | 12.8% |
| Bachelor's or higher (25+) | 64.3% | 3.0 | n/r |
| Median household income | $153,182 | 25,425 | $90,045 |
| Mean travel time to work | 22.4 min | 8.3 (wide) | 26.1 min |
| Uninsured | 3.7% | 1.2 | 11.3% |
| Owner-occupied | 82.1% | 3.6 | n/r |
| Workers (B08007) | 6,164 total; 5,378 work in Collier | — | — |

Seasonal housing (B25004_006 / B25001_001, ACS 2020–2024):
- Naples city: **7,707 of 18,902 housing units (40.8%)** vacant "for seasonal, recreational, or occasional use" (MOE ±492 on the numerator).
- Collier County: 59,512 of 239,406 (24.9%).
- (Hub page reports Florida 7.8%.)

Sources: `census-acs5-2024-dp-naples-city`, `census-acs5-2024-dp-fl2b-metros-counties`, `census-acs5-2024-b25004-fl2b`, `census-acs5-2024-b08007-fl2b`.

## Census Vintage 2025 population estimates (SUB-EST2025, www2.census.gov CSV)

| Geography | Base Apr 2020 | Jul 2024 | Jul 2025 | Change 2020–25 |
|---|---|---|---|---|
| Naples city | 19,126 | 20,214 | 20,114 | +5.2% (−100 2024→25) |
| Marco Island city | 15,749 | 16,564 | 16,421 | +4.3% |
| Collier County (= MSA) | 375,763 | 416,722 | 417,131 | +11.0% |
| Florida | 21,538,207 | — | 23,462,518 | +8.9% |

Source: `census-sub-est2025-florida`. Note: estimates measure resident population (usual residence), not seasonal presence.

## Platform facts used

- Google Business Profile guidelines (opened 2026-11-08): "If applicable, you may use your current seasonal hours as your regular hours"; seasonal-hours guidance; "More hours" for specific services (`google-gbp-guidelines`).
- Special hours: up to 6 consecutive days (`google-gbp-special-hours`).
- Google Ads location targeting: "Presence or Interest" vs "Presence"; Google suggests Presence when you only want people in specific locations (`google-ads-target-locations`, opened 2026-11-08). The page's +5% statistic is for travel/real estate/education — not used.
- Ad scheduling (`google-ads-ad-scheduling`).
- WCAG 2.2 target size minimum 24×24 CSS px (`w3c-wcag22-target-size-minimum`, opened 2026-11-08).

## Hypotheses (not facts — test with client data)

1. The city is dominated by older, seasonal and high-income households; the county is much larger, younger and far more Spanish-speaking. A practice's patient base depends on which part of Collier it draws from — check new-patient ZIP codes.
2. Seasonal housing share suggests winter presence; it does not establish seasonal dental demand. Test: monthly new-patient calls and hygiene bookings by month for 24 months.
3. Part-year residents may research before arrival from out of state — test with Google Ads location reports ("user location" vs "location of interest") and Search Console country/region data, not assumptions.
4. Income does not establish cosmetic or implant demand.
5. An older audience raises the value of phone handling and readable, large-target mobile pages — test with call-answer rate and mobile form completion.

## Gaps

- No official count of seasonal residents (people) for the city; Collier County planning seasonal-population estimates were not retrieved. Housing proxy only.
- No Medicare/Medicare Advantage dental coverage data by county retrieved; not discussed on the page.
- www.census.gov QuickFacts not used (403 to automated clients); api.census.gov returned nothing; data.census.gov table API used.
