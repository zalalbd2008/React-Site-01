# Greater Los Angeles (California hub) — market definition and public data

Batch: markets-ca1 · Researched and recorded 2026-11-08 · Route: `/markets/california/`

## 1. Market definition used on the hub

- **Scope of the local program:** Greater Los Angeles only — cities in **Los Angeles County, California**, which sits inside the **Los Angeles–Long Beach–Anaheim, CA Metro Area** (Census MSA code 31080; the ACS geography name is "Los Angeles-Long Beach-Anaheim, CA Metro Area"). The MSA also contains Orange County (the "Anaheim" in its title). The hub must say Alpha Dental Media has no California offices and is not extending the local program to the rest of California (business-facts register: "California focus is Greater Los Angeles only").
- **City vs. county vs. metro:**
  - The **City of Los Angeles** (GEOID 160XX00US0644000) is one incorporated city.
  - **Los Angeles County** (GEOID 0500000US06037) contains 88 incorporated cities plus unincorporated areas (LA County "About" page).
  - The **MSA** (310XX00US31080) = Los Angeles County + Orange County.
- Wave-1 city pages in this batch: Los Angeles (city), Long Beach, Pasadena, Glendale — all incorporated cities in LA County. Wave-2 stubs exist (Santa Monica, Burbank, Torrance, Beverly Hills, Downey, Santa Clarita, West Covina) but are Planned; the hub should not link to them as finished pages.

## 2. Public data (ACS 2019–2023 5-year Data Profiles unless noted)

Retrieved from data.census.gov table API on 2026-11-08 (same values as `node scripts/census.mjs` for the city rows; county/MSA/state pulled from the same ACSDP5Y2023 tables).

| Measure (variable) | City of LA | Long Beach | Pasadena | Glendale | LA County | LA–LB–Anaheim MSA | California |
|---|---|---|---|---|---|---|---|
| Total population (DP05_0001E) | 3,857,897 | 458,491 | 136,462 | 192,270 | 9,848,406 | 13,012,469 | 39,242,785 |
| Median age (DP05_0018E) | 36.9 | 36.8 | 40.1 | 41.4 | 37.9 | 38.2 | 37.6 |
| Under 18 % (DP05_0019PE) | 19.5 | 20.3 | 16.3 | 18.3 | 20.9 | 21.0 | 22.2 |
| 65+ % (DP05_0024PE) | 13.8 | 13.2 | 17.1 | 18.9 | 14.7 | 15.0 | 15.3 |
| Households (DP02_0001E) | 1,419,663 | 171,309 | 57,131 | 73,179 | 3,390,254 | 4,464,908 | 13,434,847 |
| Foreign-born % (DP02_0094PE) | 35.8 | 24.7 | 29.2 | 51.0 | 33.4 | 32.5 | 26.7 |
| Language other than English at home, pop. 5+ % (DP02_0114PE) | 56.8 | 44.7 | 42.6 | 66.0 | 55.1 | 52.9 | 44.1 |
| Speak English less than "very well" % (DP02_0115PE) | 25.0 | 16.3 | 15.5 | 31.0 | 23.2 | 21.9 | 17.3 |
| Spanish at home % (DP02_0116PE) | 39.7 | 33.2 | 25.2 | 13.6 | 37.7 | 34.5 | 28.2 |
| Other Indo-European languages % (DP02_0118PE) | 7.4 | 2.3 | 5.3 | 41.0 | 5.6 | 5.4 | 4.8 |
| Asian & Pacific Island languages % (DP02_0120PE) | 8.2 | 8.7 | 10.9 | 9.8 | 10.7 | 11.9 | 10.0 |
| Bachelor's or higher, 25+ % (DP02_0068PE) | 37.8 | 34.8 | 56.0 | 45.5 | 35.5 | 37.4 | 36.5 |
| Median household income $ (DP03_0062E, 2023 $) | 80,366 | 83,969 | 103,778 | 84,262 | 87,760 | 93,525 | 96,334 |
| Mean travel time to work, min (DP03_0025E) | 31.1 | 30.0 | 27.3 | 27.3 | 30.8 | 29.9 | 29.0 |
| Worked from home % (DP03_0024PE) | 17.3 | 14.4 | 23.6 | 18.7 | 15.2 | 15.5 | 15.5 |
| Private health insurance % (DP03_0097PE) | 55.2 | 58.9 | 68.2 | 57.9 | 58.6 | 60.8 | 64.0 |
| Public health coverage % (DP03_0098PE) | 41.9 | 39.4 | 35.0 | 42.3 | 40.2 | 38.8 | 38.9 |
| No health insurance % (DP03_0099PE) | 10.0 | 9.0 | 6.3 | 6.7 | 8.7 | 8.2 | 6.9 |
| Owner-occupied % (DP04_0046PE) | 36.3 | 40.9 | 42.1 | 35.3 | 46.1 | 48.6 | 55.8 |

Notes:
- Private and public coverage percentages overlap (a person can have both) — do not add them.
- "Public coverage" is medical coverage (Medicare, Medicaid/Medi-Cal, VA etc.); it is **not** a measure of dental benefits. Use only as context.
- Margins of error are small for the City of LA and county; larger for Pasadena and Glendale (e.g., Pasadena language other than English 42.6 ± 1.8; Glendale ±1.6). Record MOEs on city pages where differences are small.

### Population change (non-overlapping ACS 5-year periods)

ACS 2014–2018 (DP05_0001E) → ACS 2019–2023:

| Geography | 2014–2018 | 2019–2023 | Change |
|---|---|---|---|
| City of Los Angeles | 3,959,657 | 3,857,897 | −2.6% |
| Long Beach | 468,883 | 458,491 | −2.2% |
| Pasadena | 141,246 | 136,462 | −3.4% |
| Glendale | 200,372 | 192,270 | −4.0% |
| Los Angeles County | 10,098,052 | 9,848,406 | −2.5% |
| LA–LB–Anaheim MSA | 13,262,234 | 13,012,469 | −1.9% |
| California | 39,148,760 | 39,242,785 | +0.2% |

Caveat: these are period estimates, not point counts; the Census Bureau's Population Estimates Program is the better source for annual change but QuickFacts/PEP pages return 403 to automated clients (not bypassed). Present as "ACS period estimates were lower in 2019–2023 than in 2014–2018".

### Derived figures (our arithmetic)
- City of LA = 39.2% of LA County population (3,857,897 / 9,848,406).
- Land area (census.mjs, from Census gazetteer): LA 470.5 sq mi; Long Beach 50.7; Pasadena 22.96; Glendale 30.5. Persons per sq mi (our calculation): LA ≈8,200; Long Beach ≈9,050; Pasadena ≈5,940; Glendale ≈6,310.

## 3. LA County structure

- LA County "About" page (retrieved 2026-11-08): established 1850; 4,084 square miles; "nearly 10 million residents who account for approximately 27 percent of California's population"; the county "has grown from 76 cities to 88 cities".

## 4. Medi-Cal Dental (DHCS)

- DHCS program pages (www.dhcs.ca.gov) returned a bot-protection interstitial (Incapsula) to curl and DNS failure to WebFetch; **not bypassed, not cited**. dental.dhcs.ca.gov failed TLS verification; smilecalifornia.org returned 403. Statements from those pages (delivery systems, LA County opt-in for dental managed care) are therefore **not** used on the page.
- Used instead: DHCS open data on the California Health and Human Services Open Data Portal (data.chhs.ca.gov), published by the Department of Health Care Services.
  - Dataset "Multi Year Medi-Cal Dental Measures Data by County and Age Calendar Year 2013 to 2024" (metadata modified 2026-07-23). Description: use of Medi-Cal dental benefits by members "continuously enrolled in either Dental Managed Care or the dental Fee-for-Service delivery system for the entire measurement period".
  - Our aggregation of the measure "Overall Utilization of Dental Services 1 year: One dental service or SNC dental encounter", Los Angeles County, CY 2024, summing the age-band rows:
    - All ages: 1,379,973 users / 3,495,987 continuously enrolled members = **39.5%**
    - Ages 0–20: 674,592 / 1,162,603 = **58.0%**
    - Ages 21+: 705,381 / 2,333,384 = **30.2%**
    - For comparison CY 2023 all ages 37.3% (1,317,721 / 3,532,811); CY 2019 40.5%.
  - Limitations: denominator is continuously enrolled members only (not all Medi-Cal members); county level only; our sums across age bands; utilization ≠ demand for a particular practice.
- Dataset "MediCal Dental FFS Provider Listing" (ArcGIS layer last edited 2025-09-18; FFS providers and Safety Net Clinics; excludes Dental Managed Care providers). Rows are provider/location/language records, not offices. LA County rows (Provider_County_Desc LIKE 'Los Angeles%'): 17,822. Used only for language-field observations per billing city (see city files).

## 5. California privacy law (CCPA/CPRA) — consideration for practice websites

- California AG CCPA page (oag.ca.gov/privacy/ccpa, "Updated on August 28, 2026"): CCPA applies to for-profit businesses that do business in California and meet any of: gross annual revenue over $25 million; buy, sell or share personal information of 100,000+ California residents or households; or derive 50%+ of annual revenue from selling California residents' personal information. It "exempts certain types of information such as certain medical information". Consumers can opt out of sale/sharing "including via a user-enabled global privacy control, like the GPC"; "Under law, it must be honored by covered businesses".
- CPPA FAQ (cppa.ca.gov/faq.html): revenue threshold "$26.625 million or more (effective January 1, 2025)"; CCPA "does not generally apply to nonprofit organizations"; imposes separate obligations on service providers and contractors.
- Page wording: whether CCPA applies to a given practice depends on thresholds and on how much of its data is exempt medical information; many single-office practices may fall below thresholds, but DSOs and groups may not, and the marketing stack (pixels, ad platforms) is where "sharing" questions arise. Recommend counsel. No compliance claims.

## 6. Call recording (Penal Code 632)

- leginfo.legislature.ca.gov, law.justia.com, california.public.law and codes.findlaw.com all returned bot challenges/403 on 2026-11-08 (not bypassed). Another batch's source id `ca-penal-code-632` points to california.public.law — **not reused** because this batch could not open it.
- Retrieved instead: Legislative Counsel's Digest, AB 925 (2015–16 session, introduced 2015-02-26) on www.leginfo.ca.gov, which summarises then-existing law: it is a crime "to intentionally and without consent of all parties to a confidential communication, by means of any electronic amplifying or recording device, eavesdrop upon or record the confidential communication… by means of a telegraph, telephone, or other device, except a radio" and evidence so obtained is inadmissible.
- Page wording must be cautious: a 2015 summary, not current statute text; tell practices to confirm consent language with counsel before enabling call recording in call-tracking tools.

## 7. Gaps
- Census PEP/QuickFacts (403), DHCS program pages (bot protection), current PC 632 text (bot challenges) — not retrieved.
- No dentist-to-population ratios used (NPI/directory counts are not offices).
