# San Antonio, Texas — market definition and public data

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Market definition

- **Incorporated city:** San Antonio city, Texas (GEOID 160XX00US4865000). Vintage 2025 estimate **1,548,422**, up from 1,433,348 at the April 2020 base (+115,074, +8.0%). 2024→2025: **+14,359 (+0.94%)**, the third-largest numeric gain of any U.S. city. 7th-most-populous U.S. city.
- **Counties:** essentially all in Bexar County (1,548,411); Medina County part 11; Comal part 0 (SUB-EST2025_48).
- **Metro:** San Antonio-New Braunfels, TX MSA (CBSA 41700): Atascosa, Bandera, Bexar, Comal, Guadalupe, Kendall, Medina, Wilson (OMB 2023). Vintage 2025: 2,813,140; +38,402 in 2024–25 (9th nationally); +254,751 (+10.0%) since April 2020. **The city is about 55.0% of its metro** — by far the most dominant central city of the four big Texas metros (Houston 30.3%, Austin 38.3%, Dallas 15.7% / Fort Worth 12.1% of DFW; our calculations).
- **Labels:** New Braunfels, Schertz, Converse, Leon Valley, Alamo Heights and Helotes are separate cities, some enclaved by San Antonio. Unincorporated Bexar County areas also exist. Many neighbourhood names patients use (Stone Oak, Alamo Ranch, Medical Center) are inside or partly inside city limits — verify per address.

## ACS 2019–2023 profile

| Measure (ACS 2019–2023 5-year, DP tables) | San Antonio city | San Antonio-New Braunfels MSA | Texas |
|---|---|---|---|
| Total population | 1,458,954 (±118) | 2,612,802 | 29,640,343 |
| Under 5 years | 6.3% (±0.1) | 6.3% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 23.9% (±0.2) | 24.6% (±0.1) | 25.2% (±0.1) |
| 65 years and over | 13.1% (±0.1) | 13.7% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 34.6 (±0.2) | 35.7 (±0.2) | 35.5 (±0.1) |
| Households | 547,883 (±2578) | 949,097 (±2871) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 40.4% (±0.5) | 33.4% (±0.3) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 36.4% (±0.5) | 29.8% (±0.3) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 12.6% (±0.3) | 10.0% (±0.2) | 12.8% (±0.1) |
| Foreign-born | 14.3% (±0.4) | 11.8% (±0.3) | 17.2% (±0.1) |
| Born in a different U.S. state | 19.3% (±0.4) | 23.5% (±0.3) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 2.1% (±0.2) | 2.5% (±0.2) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 28.7% (±0.5) | 31.9% (±0.4) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $62,917 (±970) | $74,297 (±707) | $76,292 (±265) |
| Mean travel time to work (minutes) | 24.6 (±0.2) | 26.8 (±0.2) | 26.7 (±0.1) |
| Workers who worked from home | 11.8% (±0.4) | 13.0% (±0.3) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 33.8% (±0.5) | 31.8% (±0.3) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 17.5% (±0.5) | 15.0% (±0.3) | 17.4% (±0.2) |
| Under 19 with no health insurance | 9.8% (±0.6) | 9.1% (±0.4) | 11.8% (±0.2) |
| Owner-occupied housing units | 52.4% (±0.6) | 63.5% (±0.5) | 62.6% (±0.2) |


## Observations and hypotheses

1. **Hispanic-majority, bilingual-but-not-necessarily-Spanish-dominant city:** 64.4% Hispanic or Latino (Houston 44.1%); 36.4% speak Spanish at home, yet only 12.6% speak English less than "very well" (Houston 22.0%, Dallas 18.2%). Interpretation to test: Spanish-language content is a trust and family-communication signal more than a strict comprehension requirement for many households; do not assume either way without the practice's own intake data.
2. **Rooted population:** 19.3% born in another U.S. state and 14.3% foreign-born — the lowest foreign-born share of the five cities. Hypothesis: referral and reputation networks (family, church, employer) carry weight; reviews and community presence may matter more than "new to town" messaging.
3. **Public coverage:** 33.8% have public health coverage (highest of the five), 17.5% uninsured, 9.8% of under-19s uninsured. Note: public coverage in ACS includes Medicare, Medicaid/CHIP and VA; it is not a Medicaid count. 13.1% are 65+.
4. **Income and ownership:** median household income $62,917; 52.4% owner-occupied.
5. **Commute:** 24.6 minutes mean; 11.8% work from home.

## Gaps

- Military/VA population not sourced (do not mention specifics on page); no dentist-density or keyword data.
