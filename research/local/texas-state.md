# Texas — state hub research (market structure and public data)

Retrieved and compiled 2026-11-08 by the Alpha Dental Media editorial team (batch markets-tx1).

## Sources and method

- **ACS:** U.S. Census Bureau, American Community Survey 2019–2023 5-year Data Profiles DP02, DP03, DP04, DP05, retrieved through the data.census.gov table API (`https://data.census.gov/api/access/data/table?id=ACSDP5Y2023.DPxx&g=<GEOID>`); citable table URLs are `https://data.census.gov/table/ACSDP5Y2023.DPxx?g=<GEOID>`. The city values match `node scripts/census.mjs "<City>" TX`. Margins of error are shown in brackets (±); metro population totals are controlled estimates with no published MOE.
- **Population estimates:** Census Vintage 2025 (SUB-EST2025_48 subcounty file; releases CB26-80 of 2026-05-14 and CB26-56 of 2026-03-26). ACS and Vintage 2025 measure different things and periods; they are never subtracted from each other.
- **Metro definitions:** OMB July 2023 delineation (Census list1_2023.xlsx).
- Census QuickFacts returned HTTP 403 to automated clients and was **not** used or worked around.


## Statewide figures

- **Population:** Vintage 2025 estimate 31,709,821 (July 1, 2025), up from 29,149,498 at the April 2020 base (+2,560,323, +8.8%); +391,243 (+1.25%) in 2024–25 (SUB-EST2025_48).
- **Four big metros (Vintage 2025):** Houston-Pasadena-The Woodlands 7,904,627; Dallas-Fort Worth-Arlington 8,477,157; Austin-Round Rock-San Marcos 2,620,945; San Antonio-New Braunfels 2,813,140. Combined 21,815,869 ≈ **68.8% of Texans**, and their combined 2024–25 gain (+342,475) ≈ **88% of the state's one-year gain** (our calculations from CB26-56 and SUB-EST2025_48; metro and state estimates are from the same vintage).
- Houston and DFW were the 1st and 2nd U.S. metros by numeric growth in 2024–25; Austin 6th; San Antonio 9th (CB26-56). Five Texas counties are in the national top 10 for numeric growth (Harris, Collin, Montgomery, Fort Bend, Williamson). The Census Bureau notes that among the largest metros the fastest-growing counties tended to be on the outer edges, "a pattern especially pronounced in Texas".
- The top five fastest-growing U.S. cities of 20,000+ in 2024–25 were all in Texas (four DFW suburbs and Fulshear outside Houston) (CB26-80).

## ACS 2019–2023: the five cities vs Texas

| Measure (ACS 2019–2023 5-year, DP tables) | Houston | Dallas | Fort Worth | Austin | San Antonio | Texas |
|---|---|---|---|---|---|---|
| Total population | 2,300,419 (±172) | 1,299,553 (±141) | 941,311 (±527) | 967,862 (±373) | 1,458,954 (±118) | 29,640,343 |
| Under 5 years | 6.7% (±0.2) | 7.0% (±0.2) | 7.3% (±0.2) | 5.4% (±0.2) | 6.3% (±0.1) | 6.5% (±0.1) |
| Under 18 years | 23.6% (±0.2) | 24.2% (±0.3) | 26.7% (±0.4) | 18.3% (±0.3) | 23.9% (±0.2) | 25.2% (±0.1) |
| 65 years and over | 12.0% (±0.1) | 11.4% (±0.2) | 10.5% (±0.2) | 10.1% (±0.2) | 13.1% (±0.1) | 13.2% (±0.1) |
| Median age (years) | 34.3 (±0.2) | 33.4 (±0.2) | 33.4 (±0.3) | 34.5 (±0.2) | 34.6 (±0.2) | 35.5 (±0.1) |
| Households | 916,536 (±4302) | 528,038 (±2798) | 334,230 (±2680) | 440,294 (±2309) | 547,883 (±2578) | 10,747,240 (±15647) |
| Pop. 5+ speaking a language other than English at home | 47.2% (±0.4) | 41.1% (±0.5) | 32.5% (±0.7) | 29.8% (±0.7) | 40.4% (±0.5) | 34.9% (±0.1) |
| Pop. 5+ speaking Spanish at home | 37.4% (±0.4) | 35.1% (±0.4) | 24.9% (±0.6) | 20.1% (±0.6) | 36.4% (±0.5) | 28.1% (±0.1) |
| Pop. 5+ speaking English less than "very well" | 22.0% (±0.4) | 18.2% (±0.4) | 12.2% (±0.5) | 10.3% (±0.5) | 12.6% (±0.3) | 12.8% (±0.1) |
| Foreign-born | 28.8% (±0.4) | 23.4% (±0.5) | 17.0% (±0.5) | 18.1% (±0.6) | 14.3% (±0.4) | 17.2% (±0.1) |
| Born in a different U.S. state | 18.0% (±0.3) | 21.1% (±0.4) | 25.5% (±0.7) | 31.1% (±0.5) | 19.3% (±0.4) | 22.4% (±0.1) |
| Lived in a different state one year earlier | 1.8% (±0.1) | 2.2% (±0.1) | 2.0% (±0.2) | 3.8% (±0.3) | 2.1% (±0.2) | 2.0% (±0.1) |
| Pop. 25+ with bachelor's degree or higher | 36.0% (±0.4) | 37.4% (±0.6) | 31.7% (±0.7) | 58.2% (±0.6) | 28.7% (±0.5) | 33.1% (±0.2) |
| Median household income (2023 dollars) | $62,894 (±833) | $67,760 (±887) | $76,602 (±946) | $91,461 (±1237) | $62,917 (±970) | $76,292 (±265) |
| Mean travel time to work (minutes) | 27.3 (±0.2) | 26.0 (±0.2) | 26.9 (±0.4) | 24.0 (±0.4) | 24.6 (±0.2) | 26.7 (±0.1) |
| Workers who worked from home | 11.7% (±0.3) | 14.0% (±0.4) | 12.9% (±0.6) | 27.5% (±0.6) | 11.8% (±0.4) | 12.8% (±0.1) |
| With public health coverage (civilian noninst.) | 30.3% (±0.4) | 29.3% (±0.5) | 26.4% (±0.7) | 20.6% (±0.5) | 33.8% (±0.5) | 28.9% (±0.1) |
| No health insurance (civilian noninst.) | 24.0% (±0.4) | 23.0% (±0.5) | 18.6% (±0.6) | 12.4% (±0.4) | 17.5% (±0.5) | 17.4% (±0.2) |
| Under 19 with no health insurance | 16.0% (±0.7) | 15.7% (±0.9) | 12.7% (±1.0) | 9.2% (±1.0) | 9.8% (±0.6) | 11.8% (±0.2) |
| Owner-occupied housing units | 42.0% (±0.5) | 42.4% (±0.6) | 56.7% (±0.7) | 44.4% (±0.7) | 52.4% (±0.6) | 62.6% (±0.2) |


## Medicaid/CHIP dental (official sources)

- Federal framework: states must provide dental benefits to children in Medicaid (through EPSDT) and CHIP; adult dental benefits are optional for states (medicaid.gov, existing source `medicaid-gov-dental-care`).
- Texas: Texas Health Steps covers children birth through age 20 with Medicaid, with dental checkups starting at 6 months (HHSC). THSteps dental benefits are administered as Children's Medicaid Dental Services by dental managed care organizations for most clients 20 and younger; checkups recommended every three to six months (HHSC dental providers page). HHSC comparison charts dated 10/01/26 list three plans — DentaQuest, MCNA Dental and UnitedHealthcare Dental — for both CHIP dental and Children's Medicaid dental.
- National context only: 41% of U.S. dentists participated in Medicaid/CHIP in 2024 (ADA HPI, existing source `ada-hpi-medicaid-programs-2025`). Not a Texas figure.
- Marketing implication: for pediatric and family practices, plan participation (which of the three plans, if any) is a factual, searchable attribute that should be stated accurately on location pages and Business Profiles; never imply participation that is not current.
- Gap: Texas Medicaid/CHIP enrolment counts by county were not retrieved; adult Medicaid dental scope in Texas not sourced — do not state.

## Texas advertising rules (State Board of Dental Examiners, 22 TAC ch. 108 subch. E, via LII mirror)

- §108.53 Fees: advertised prices must disclose the service, usually-required related services, that the fee is a minimum, dates the price applies, the standard fee for discounts, basis of any range; services cannot be called "free" when a third party including Medicaid pays.
- §108.55: a general dentist advertising specific services must show "General Dentist"/"General Dentistry" directly after the dentist's name, in a font no smaller than the largest service term.
- §108.59: practice websites should clearly disclose website ownership, services, office addresses and contact information, and licensure and qualifications of dentists and providers.
- Status: unofficial mirror; verify against the official TAC; recommend practice counsel. We describe these as items to check, not compliance guarantees.

## Call recording

- Texas is summarized as one-party consent for recording phone calls (RCFP guide, existing source `rcfp-recording-guide-texas`, secondary summary). Relevant to call tracking; counsel should confirm, and multi-state groups must consider other states' rules.

## Language

- Statewide 34.9% speak a language other than English at home; 28.1% Spanish; 12.8% speak English less than "very well" (ACS 2019–2023 DP02). Range across the five cities: 29.8% (Austin) to 47.2% (Houston).

## Houston as base

- Alpha Dental Media is Houston-based (business-facts register: city level only, no address). Everything outside Houston is delivered remotely; there are no other Texas offices.


## Review update, 2026-11-08: ACS 2020–2024 values (batch review-texas)

Under the data-vintage policy in docs/city-brief.md, the independent reviewer re-pulled the 2020–2024 5-year Data Profiles from the data.census.gov table API (`ACSDP5Y2024.DP02–DP05`; places also via `node scripts/census.mjs "<City>" TX`, which returned identical values). Values are estimate ±MOE. The page now cites these figures (source ids `census-acs-2024-*`); the 2019–2023 table above is kept for the record only.

| Measure (ACS 2020–2024 5-year, DP tables) | Houston city, Texas | Dallas city, Texas | Fort Worth city, Texas | Austin city, Texas | San Antonio city, Texas | Texas |
|---|---|---|---|---|---|---|
| Total population | 2328253 ±196 | 1307930 ±153 | 963194 ±475 | 979539 ±484 | 1479835 ±251 | 30188424 ±-555555555 |
| Under 5 years (%) | 6.7 ±0.1 | 7.0 ±0.2 | 7.1 ±0.2 | 5.2 ±0.2 | 6.2 ±0.1 | 6.4 ±0.1 |
| Under 18 years (%) | 23.4 ±0.2 | 23.9 ±0.3 | 26.4 ±0.3 | 18.0 ±0.3 | 23.6 ±0.2 | 25.0 ±0.1 |
| 65 years and over (%) | 12.3 ±0.1 | 11.8 ±0.2 | 10.6 ±0.2 | 10.4 ±0.2 | 13.4 ±0.1 | 13.4 ±0.1 |
| Median age | 34.4 ±0.2 | 33.4 ±0.3 | 33.6 ±0.3 | 34.7 ±0.2 | 34.9 ±0.2 | 35.6 ±0.1 |
| Hispanic or Latino, any race (%) | 44.2 ±0.4 | 42.6 ±0.5 | 34.6 ±0.5 | 31.9 ±0.4 | 64.6 ±0.4 | 39.7 ±0.1 |
| Language other than English at home, 5+ (%) | 47.1 ±0.4 | 41.2 ±0.6 | 32.6 ±0.7 | 30.3 ±0.6 | 40.4 ±0.6 | 35.1 ±0.1 |
| Spanish at home, 5+ (%) | 37.2 ±0.4 | 34.9 ±0.5 | 24.5 ±0.6 | 20.2 ±0.6 | 36.4 ±0.5 | 28.1 ±0.1 |
| Other Indo-European languages, 5+ (%) | 3.5 ±0.2 | 2.2 ±0.2 | 3.1 ±0.3 | 4.0 ±0.2 | 1.5 ±0.1 | 2.6 ±0.1 |
| Asian and Pacific Island languages, 5+ (%) | 4.4 ±0.2 | 2.2 ±0.2 | 2.9 ±0.3 | 4.7 ±0.3 | 1.8 ±0.1 | 3.2 ±0.1 |
| Speak English less than "very well", 5+ (%) | 22.1 ±0.3 | 18.2 ±0.4 | 12.5 ±0.5 | 10.5 ±0.5 | 12.9 ±0.4 | 13.0 ±0.1 |
| Born in state of residence (%) | 50.7 ±0.4 | 53.8 ±0.6 | 54.5 ±0.7 | 47.7 ±0.6 | 63.7 ±0.5 | 58.3 ±0.1 |
| Born in a different U.S. state (%) | 18.4 ±0.4 | 21.3 ±0.4 | 25.9 ±0.6 | 31.3 ±0.5 | 19.0 ±0.3 | 22.5 ±0.1 |
| Foreign-born (%) | 29.3 ±0.4 | 23.4 ±0.5 | 17.6 ±0.6 | 18.7 ±0.6 | 15.0 ±0.4 | 17.6 ±0.1 |
| Same house one year ago (%) | 82.9 ±0.4 | 84.5 ±0.4 | 85.7 ±0.6 | 78.8 ±0.6 | 82.5 ±0.5 | 86.0 ±0.1 |
| Different state one year ago (%) | 1.9 ±0.1 | 2.3 ±0.2 | 2.0 ±0.2 | 3.6 ±0.3 | 2.2 ±0.2 | 2.0 ±0.1 |
| Bachelor's degree or higher, 25+ (%) | 36.6 ±0.4 | 38.2 ±0.5 | 32.0 ±0.7 | 59.6 ±0.6 | 29.0 ±0.5 | 33.8 ±0.2 |
| Median household income (2024 $) | 64813 ±822 | 70518 ±817 | 79507 ±966 | 93658 ±1670 | 65056 ±776 | 78476 ±263 |
| Mean travel time to work (min) | 27.2 ±0.2 | 25.7 ±0.3 | 27.1 ±0.4 | 23.7 ±0.4 | 24.5 ±0.2 | 26.7 ±0.1 |
| Worked from home (%) | 13.0 ±0.3 | 15.8 ±0.5 | 14.0 ±0.6 | 30.7 ±0.7 | 13.5 ±0.5 | 14.4 ±0.1 |
| With private health insurance (%) | 52.3 ±0.5 | 54.3 ±0.6 | 62.1 ±0.8 | 74.7 ±0.7 | 58.1 ±0.6 | 62.8 ±0.2 |
| With public coverage (%) | 30.7 ±0.4 | 29.5 ±0.5 | 26.3 ±0.6 | 20.7 ±0.5 | 34.3 ±0.4 | 29.0 ±0.1 |
| No health insurance (%) | 23.7 ±0.4 | 22.8 ±0.5 | 18.6 ±0.6 | 12.4 ±0.6 | 17.6 ±0.5 | 17.1 ±0.2 |
| Under 19, no health insurance (%) | 16.3 ±0.7 | 16.3 ±1.0 | 13.5 ±0.9 | 9.6 ±1.2 | 10.4 ±0.7 | 12.0 ±0.2 |
| Owner-occupied housing units (%) | 42.1 ±0.5 | 42.4 ±0.5 | 57.0 ±0.8 | 43.4 ±0.7 | 52.2 ±0.6 | 62.6 ±0.2 |
