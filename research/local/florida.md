# Florida — state market definition and public data (batch markets-fl1)

Retrieved / observed: 2026-11-08. Researcher: editorial-team (markets-fl1 agent).

## Market structure used on the Florida hub

| Region (as written on the page) | Census / OMB geography | Counties | Notes |
|---|---|---|---|
| South Florida | Miami-Fort Lauderdale-West Palm Beach, FL Metro Area (CBSA 33100) | Miami-Dade, Broward, Palm Beach | Three-county MSA under OMB Bulletin 23-01 (as tabulated by BEBR). Miami is a city in Miami-Dade; Fort Lauderdale a city in Broward. |
| Central Florida | Orlando-Kissimmee-Sanford, FL Metro Area (CBSA 36740) | Lake, Orange, Osceola, Seminole | Orlando is a city in Orange County. |
| Tampa Bay | Tampa-St. Petersburg-Clearwater, FL Metro Area (CBSA 45300) | Hernando, Hillsborough, Pasco, Pinellas | Tampa is a city in Hillsborough. BEBR's separate "Tampa Bay" planning region (6 counties) is NOT the MSA; not used. |
| Northeast Florida | Jacksonville, FL Metro Area (CBSA 27260) | Baker, Clay, Duval, Nassau, St. Johns | Jacksonville is consolidated with Duval County (city of Jacksonville = Census place 1235000). |

Sources: `bebr-florida-estimates-2025` (Table 4 MSA definitions footnote: "Based on the July 21, 2023 U.S. Office of Management and Budget MSA definitions (OMB Bulletin No. 23-01)"); `census-acs5-2024-dp-florida-regions`.

## Data retrieved

How: `node scripts/census.mjs "<City>" FL --vintage 2024` for the five cities (official data.census.gov table API; values identical to a cross-check against Census Reporter's ACS 2024 5-year API). State/MSA/county values from the same data.census.gov API (`/api/access/data/table?id=ACSDP5Y2024.DP02&g=...` etc.), saved in the session scratchpad. Census QuickFacts (www.census.gov) returned HTTP 403 to an automated request on 2026-11-08 and was **not** used; api.census.gov redirected to a missing-key page. Note: one early QuickFacts request in this session was sent with a browser user-agent string before the source-access note was added to the writer brief; it was refused (403) and nothing from it is used.

### ACS 2020–2024 5-year (DP02/DP03/DP05; B25004/B25001; B05002; C16001)

| Geography | Population | Under 18 | 65+ | Lang. other than English (5+) | Spanish | Eng. < "very well" | Median HH income | Uninsured | Seasonal-use vacant units / all units |
|---|---|---|---|---|---|---|---|---|---|
| Florida | 22,416,077 | 19.5% | 21.3% | 30.6% | 22.6% | 12.5% | $74,568 | 11.5% | 7.8% |
| Miami MSA | 6,249,291 | 20.0% | 19.2% | 55.2% | 43.2% | 24.4% | $76,527 | 13.1% | 6.8% |
| Orlando MSA | 2,793,746 | 21.3% | 15.7% | 34.9% | 25.5% | 13.3% | $78,533 | 11.0% | 4.0% |
| Tampa MSA | 3,304,691 | 19.4% | 20.3% | 23.1% | 15.5% | 8.9% | $74,392 | 10.7% | 5.4% |
| Jacksonville MSA | 1,683,960 | 22.2% | 17.1% | 13.8% | 7.0% | 5.1% | $79,643 | 9.4% | 2.7% |
| Miami-Dade County | 2,738,356 | 20.0% | 16.9% | 75.3% | 66.7% | 35.1% | $71,753 | 13.6% | 4.6% |
| Broward County | 1,977,129 | 20.8% | 17.9% | 43.8% | 28.5% | 16.9% | $77,633 | 12.5% | 7.2% |
| Palm Beach County | 1,533,806 | 18.8% | 24.8% | 34.2% | 20.1% | 15.0% | $83,581 | 13.2% | 9.5% |

Birthplace (B05002), Florida: 35.5% born in Florida; 15.9% Northeast; 9.9% Midwest; 2.4% Puerto Rico; 21.9% foreign-born. "French, Haitian, or Cajun" at home (C16001): Florida 2.7%; Miami MSA 5.9%; Broward 7.1%; Palm Beach 6.7%.

### BEBR April 1, 2025 estimates (state-produced)

Florida 23,379,261, +8.5% since April 2020; net migration +1,942,163, natural change −101,089 (deaths exceeded births). MSAs 2020→2025: Miami +3.7%, Orlando +10.8%, Tampa +7.2%, Jacksonville +12.2%. Fast-growing outer counties: Osceola +24.8%, St. Johns +27.4%, Pasco +15.4%; Pinellas +0.8%.

### Other state-level facts

- Atlantic hurricane season June 1–November 30; peak 10 September, most activity mid-August to mid-October (`noaa-nhc-hurricane-climatology`).
- Florida advertising law: F.S. 466.019 (laudatory statements, quality comparisons, fear appeals, fee info without minimum-fee disclaimer, telehealth disclaimer), F.S. 456.062 (free/discounted-service statement), Rule 64B5-4.002 F.A.C. (identify the responsible licensed dentist; solicitation ban; naming rules; amended effective 24 Sept 2026).
- Medicaid (ADA HPI tables, Dec 2025): Florida adult Medicaid dental benefit "Emergency-only" 2021–2025; 25.6% of Florida dentists enrolled in Medicaid/CHIP in 2024 (national 41% per existing source `ada-hpi-medicaid-programs-2025`); child Medicaid/CHIP dental utilization 40.7% (2024) vs privately insured children 63.6% (2023).
- Google Business Profile special hours: up to 6 consecutive days; 7+ days or unknown → Temporarily closed (`google-gbp-special-hours`). Location assets for closed locations do not show in Google Ads (`google-ads-location-assets`, opened 2026-11-08).

## Hypotheses (not facts — test with client data)

- Seasonal-use housing share is a proxy for winter presence; it does not prove seasonal dental demand.
- Language-at-home share does not establish preferred language for booking or care.
- Income does not establish cosmetic demand.

## Gaps

- No Florida dentist-workforce count by city used (directory/NPI counts are not active offices).
- No official seasonal-resident population count by city exists in ACS; only housing proxy used.
- Florida Medicaid managed-care dental plan details (AHCA) not retrieved: AHCA dental page returned 404 on 2026-11-08.
- www.census.gov QuickFacts and www.flsenate.gov (429) not used; Online Sunshine (leg.state.fl.us) used for statutes.
