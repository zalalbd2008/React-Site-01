# Independent review: batch review-georgia (2026-11-08)

The reviewer is an independent editor and fact-checker, not one of the writers. Scope: `/markets/georgia/` and its 12 city pages. The pages came from two writers: ga1 wrote the hub, Atlanta, Savannah, Augusta, Columbus and Athens; ga2 wrote Macon, Sandy Springs, Alpharetta, Roswell, Marietta, Johns Creek and Lawrenceville. No 403 was bypassed.

## What was re-checked for every page

- **ACS 2020–2024.** `node scripts/census.mjs "<City>" GA` was re-run for all 12 cities. Every DP02–DP05 value quoted on the pages was compared with the cached data.census.gov table JSON, together with its margin of error. The state, five-metro and four-county DP tables (Georgia; the Atlanta, Savannah, Augusta, Columbus and Athens MSAs; Fulton, DeKalb, Cobb and Gwinnett) were re-fetched. B08008 was re-fetched for the seven ga2 cities. **All quoted values matched.**
- **Geography labels.** Augusta is "Augusta-Richmond County consolidated government (balance)" (GEOID 1304204). Athens is "Athens-Clarke County unified government (balance)" (1303440). Columbus is "Columbus city" (1319000), and its PEP figure equals Muscogee County's. Macon is "Macon-Bibb County" (1349008), and its PEP figure equals Bibb County's. The pages label each correctly and keep the balance, county and metro figures apart.
- **Population change, PEP Vintage 2025.** `sub-est2025_13.csv` and `cbsa-est2025-alldata.csv` were re-downloaded. Every base, July 2025 value and derived percentage matched. Atlanta MSA: 29 counties, 6,482,182. Marietta Metropolitan Division: Bartow, Cherokee, Cobb, Haralson and Paulding, 1,437,480. Macon-Bibb MSA: 5 counties, 238,553.
- **Georgia Board of Dentistry Rule 150-10-.01.** Re-read at rules.sos.ga.gov/gac/150-10, which shows no effective date.
  - *Correction:* the fee conditions apply to "routine dental services" advertised at a specific fee or as free. These conditions are: minimum and maximum shown for ranges; 60 days' availability; the related-charges statement. Pages had stated them as conditions on all advertised fees.
  - The hub, Atlanta (FAQ and body), Augusta and Athens are now scoped to routine services, and whether elective offers count is referred to counsel.
  - The 10-day Board copy request was added to the hub checklist.
  - The other items were quoted accurately: dentist responsibility, one-year retention, patient consent, and the list of misleading statements, including location.
- **Army installations.**
  - home.army.mil/benning and home.army.mil/gordon both use the restored names.
  - AP via WRDW (16 Apr 2025): Fort Moore in 2023, Fort Benning restored, roughly 70,000 stationed.
  - WRDW (16 Jun 2025): Fort Eisenhower for about a year and a half, then Fort Gordon again.
  - Stewart-Hunter about page: 21,200 soldiers, 4,350 civilians and contractors, more than 19,000 retirees; Hunter is in Savannah.
- **TRICARE.**
  - Dental overview (last updated 3/30/2020): active duty dental benefits for service members; TDP for family members to purchase; retirees and families "may be eligible" for FEDVIP. The hub and Augusta said "many retirees", which was corrected.
  - TDP page: United Concordia administers TDP. Military claims stay hypotheses about network questions and do not generalise about military households.
- **Other sources re-opened:** UGA Today (43,888, 20 Oct 2025), Augusta University DCG heritage and Savannah campus (May 2026; 46th per capita; 18 counties), columbusga.gov, accgov.com, mariettaga.gov, GA HR 1697 (PDF), UGA Today on Macon-Bibb (2014 consolidation), WTOC on the Metaplant, and Google's local-ranking, Ads location and localized-versions pages.
  - Google's local-ranking page now says "relevance, distance, and popularity" and defines prominence. All pages were updated to that wording.
  - The localized-versions page says Google does not use hreflang or the lang attribute to detect language. The pages had said "from content", which was corrected.
- **No local office, staff, clients or results; nothing named.** The ga2 observation sources had public URLs pointing to a specific practice homepage, or to an agency's "adds another client" post (for Marietta and Lawrenceville). These links are rendered in the page source list, so they effectively named practices and agencies. They were replaced with the equivalent public search URL, as the ga1 sources already do, and the research files keep the detail. Marietta's body no longer describes a single dated agency announcement. Macon's "because there are none to describe", a claim about clients, was removed.
- **Comparative claims.** The ga2 writer ranked cities "among the seven Georgia cities we studied", but the site now has 12 Georgia city pages, and several rankings were wrong against all 12 or not separable within the margins of error. Every ranking was rechecked against all 12 and the MOEs (details per page below).
- **Metadata.** metaTitles were standardised to "Dental Marketing in <City>, GA | Alpha Dental Media" (48–58 chars). Before, the ga2 titles were 70–78 chars once the template added the brand, and the ga1 titles were 63–66. All descriptions are now 146–160 chars.

## Manual sibling comparison

All 13 pages were read side by side, and a 6-word shingle overlap script (city names normalised) was run. Before edits, the maximum overlap between any pair was 6.9% (Columbus/Savannah). The suburbs' largest was 5.5% (Lawrenceville/Marietta). Overlap was therefore structural (the same FAQ themes, hreflang passages, timeline scaffolding and keyword disclaimers) rather than copied text.

| City | Distinct angle | Evidence | Overlap found | Fix |
|---|---|---|---|---|
| Atlanta | Defining a catchment inside a 29-county metro; early-morning hours norm; language varies by county | City is 8.2% of MSA; WFH 29.7%; LOTE 12.2% vs Gwinnett 38.1%; 4-site sample | "Whole metro or nearby?" FAQ repeated on Sandy Springs; county-growth claim imprecise | SS FAQ replaced; growth sentence limited to counties over 250k (Paulding and Walton grew faster but are smaller); fee FAQ rewritten |
| Sandy Springs | Turnover: young, half-renting, shrinking; Atlanta mailing addresses | 25–34 21.1%; renters 49.8%; PEP −2.9%; 2 of 3 sites printed Atlanta | Metro-targeting FAQ (Atlanta); remote-delivery FAQ near-identical to Johns Creek and Marietta; "largest 25–34 among six metro cities" false if Atlanta counted | Two FAQs rewritten (patients moving away; turnover intake log); claim limited to the six suburbs |
| Alpharetta | Contested implant and aligner search plus capacity limits; Asian and Indo-European-led language mix | Asian 12.5%, IE 10.0%, Spanish 7.5%; 2 of 3 homepages implant/aligner-led; alternating schedules | Income ≠ cosmetic FAQ duplicated on Johns Creek; hreflang paragraph repeated on 4 pages; WFH "exceeded only by JC" not separable | Alpharetta keeps the income FAQ and decision tree (JC links to it); hreflang corrected and kept here; WFH says "level with JC"; monthly-reporting promise removed |
| Roswell | Retention-first for settled homeowners and an older population; Spanish as a tested second lane | Owner-occupied 71.9%; 65+ 15.6%; PEP −1.4%; Spanish 13.4% (well above Alpharetta and JC) | Lede led on Spanish, which Marietta (15.8%) and Lawrenceville (26.1%) do more strongly; hreflang passage duplicated; "65–74 second only to Macon" not separable; nearby-cities FAQ repeated JC and Alpharetta | Lede, description and timeline re-ordered recall-first; hreflang replaced by a link to the Lawrenceville checklist; 65+ comparison limited to significant differences; FAQ replaced (reviews from long-standing patients) |
| Johns Creek | Household market: highest home ownership, many children, measured in patients per household | Owner-occupied 80.4% (highest of 12); under-18 26.0%; LOTE 39.1%; commute 30.1 min | Income/cosmetic FAQ (Alpharetta); language FAQ near-identical to Alpharetta's; hreflang; "highest children" and "highest WFH" not separable | Both FAQs replaced (family-channel measurement; ACS cannot name specific languages); hreflang section replaced with a named-language/person/time statement that links to Alpharetta's tree; rankings corrected; timeline rewritten around households |
| Marietta | Payment clarity first; three Mariettas (city, postal area, Cobb); own metro division | Uninsured 17.9%, public 25.8%; Marietta Metro Division 1.44M; 1 of 3 homepages with no phone shown | Gwinnett and Cobb "ads cover the whole county" FAQs near-identical (Lawrenceville); Spanish path repeated Lawrenceville; one agency announcement described | Kept Cobb FAQ (Lawrenceville's replaced); Spanish path now links to the Lawrenceville checklist, with a payment-first angle; agency description aggregated; timeline rewritten (call tagging, then ads last) |
| Lawrenceville | Bilingual (Spanish) county seat with long out-commutes and fast growth: hours and language as marketing | Spanish 26.1% (clearly highest of 12); 29.4% work in city; PEP +7.1% (highest of 12); 13.8 sq mi | Several "highest" claims false or not separable against 12 pages (Athens younger; JC level on language and commute; Marietta level on uninsured); Gwinnett ads FAQ | Rankings corrected with MOEs; FAQ replaced (Spanish phone path before pages); hosts the shared Spanish readiness checklist and hreflang note; timeline rewritten (hours, language, reach) |
| Macon | Own metro, flat population, public coverage and wide catchment; phones before forms | PEP +0.1%; public 43.1%; broadband 85.8% (lowest of the metro Atlanta comparisons); 249 sq mi | Little; over the word guide | Website bullets condensed (2,864 → 2,806 words); Medicare claim, "no clients" claim and monthly promise removed |
| Savannah | Growth beyond city limits; military network answers | City +1.1% vs Bryan +16.4%, Effingham +14.8%; 1.6% Armed Forces | Military passages similar in theme to Augusta and Columbus, but each uses its own installation and data | KeyAnswer's "meaningful share of households have military ties" and "most websites" replaced with sourced specifics |
| Augusta | Flat consolidated core inside a two-state metro; payer clarity | Balance 0.0%; Aiken 2nd-largest county; public 43.7% | None material | Fort Gordon and FEDVIP wording; rule scope |
| Columbus | Shrinking market, Fort Benning, Ohio disambiguation | City −2.3%, metro −1.2%; veterans 14.0% | None material | Lede's unsourced "one of the Army's largest training posts" replaced with the AP figure; "military and veteran households" corrected to persons |
| Athens | University-town segments, renter turnover, growing neighbour counties | Median age 29.4; renters 59.3%; Oconee/Madison/Oglethorpe growth | "Highest Spanish of five cities" outdated with 12 pages | Comparison restricted to outside metro Atlanta; rule scope; minor wording |

Each page keeps its own data-grounded channel order:

- **Atlanta:** profile → conversion → tight ads.
- **Sandy Springs:** profile and reviews → first-visit and plan pages → service ads → active-patient measurement.
- **Alpharetta:** service-line SEO → consult ads → profile → language statements.
- **Roswell:** profile → recall, reactivation and reviews → Spanish lane → supporting ads.
- **Johns Creek:** catchment-wide profile → parent content → named languages → retention → ads.
- **Marietta:** conversion and payment → local SEO → Spanish path → ads last.
- **Lawrenceville:** profile with hours → Spanish path → conversion → hour-scheduled ads → call measurement.
- **Macon:** profile → payment clarity → calls → narrow ads.

No suburb pair was judged too similar to publish once these edits were made, so no page was held back as a near-duplicate.

## Per-page decisions

### /markets/georgia/ — Ready (2,729 words)
- Changes:
  - Added a metro Atlanta suburbs comparison table (ACS and PEP, with an MOE note) and a one-line angle per suburb, so every city page is now linked in prose with a reason, along with a Macon paragraph.
  - Rule checklist scoped to routine services, with the 10-day Board request added and the routine-service definition explained.
  - Fort Gordon is now described as an Augusta-area post; FEDVIP narrowed to "may be eligible".
  - The TRICARE observation now states its sample (10 sites across 3 cities).
  - metaTitle and description shortened.
- Risks: the TRICARE overview page was last updated in 2020; the Rule page shows no effective date.

### /markets/georgia/atlanta/ — Ready (2,729 words)
- Changes:
  - County-growth sentence corrected (limited to counties over 250,000).
  - Fee FAQ and rule section rescoped.
  - Google ranking wording updated.
  - metaTitle shortened.
- Risks: practice sample of 4 sites; several other sites blocked automated access.

### /markets/georgia/savannah/ — Ready (2,428 words)
- Changes:
  - KeyAnswer's military and "most websites" generalisations replaced with sourced specifics.
  - metaTitle and description updated.
- Risks: 3-site sample.

### /markets/georgia/augusta/ — Ready (2,448 words)
- Changes:
  - Fort Gordon is now described as "the Army post in the Augusta area", with about a year and a half as Fort Eisenhower.
  - FEDVIP wording narrowed.
  - Fee rule scoped to routine services.
  - metaTitle shortened.
- Risks: the sample included a DSO office page and a university clinic page (disclosed in the table note).

### /markets/georgia/columbus/ — Ready (2,352 words)
- Changes:
  - Unsourced "one of the Army's largest training posts" replaced with the AP figure.
  - "Military and veteran households" corrected to state ratios (veterans about 2×, Armed Forces about 6× Georgia's share).
  - metaTitle and description updated.
- Risks: military move rates are unsourced and kept as a hypothesis.

### /markets/georgia/athens/ — Ready (2,339 words)
- Changes:
  - Spanish comparison corrected for 12 pages.
  - Rule wording on in-house plan prices referred to counsel.
  - Minor de-duplication.
  - metaTitle and description updated.
- Risks: 4-site sample, including one Oconee County practice.

### /markets/georgia/macon/ — Ready (2,806 words)
- Changes:
  - Removed the "none to describe" client claim, the unsourced Medicare sentence and the monthly-reporting promise.
  - Condensed the website section.
  - Broadband comparison reworded against the pages.
  - metaTitle updated.
- Risks: still just over 2,800 words; the Macon-Bibb consolidation date rests on a 2017 UGA news item, because maconbibb.us pages were not located.

### /markets/georgia/sandy-springs/ — Ready (2,402 words)
- Changes:
  - Two FAQs rewritten.
  - Claim limited to the six suburbs.
  - Observation link de-named.
  - metaTitle updated.
- Risks: 3-site sample; mailing-address findings are homepage-level.

### /markets/georgia/alpharetta/ — Ready (2,207 words)
- Changes:
  - WFH ranking corrected.
  - hreflang text corrected.
  - Remote-delivery FAQ tied to consult data.
  - Reporting promise removed.
  - Observation links de-named.
  - Description and metaTitle updated.
- Risks: 3-site sample; booking destinations sometimes unconfirmed (JavaScript).

### /markets/georgia/roswell/ — Ready (2,247 words)
- Changes:
  - Re-angled to put retention first (lede, description, timeline).
  - 65+ comparison corrected.
  - hreflang passage replaced by a sibling link.
  - FAQ replaced.
  - Observation links de-named.
- Risks: 3 readable sites (a fourth was unreadable); Roswell's Spanish estimate carries an MOE of ±2.8 points.

### /markets/georgia/johns-creek/ — Ready (2,293 words)
- Changes:
  - Rankings corrected.
  - Three FAQs rewritten or replaced.
  - Language section rewritten.
  - Household timeline added.
  - Observation links de-named.
  - Description and metaTitle updated.
- Risks: 3-site sample; ACS language families cannot identify specific languages (now said explicitly).

### /markets/georgia/marietta/ — Ready (2,372 words)
- Changes:
  - Uninsured and Spanish rankings corrected for MOE.
  - Agency announcement aggregated.
  - Spanish path links to the Lawrenceville checklist.
  - Payment hypothesis worded as a hypothesis.
  - Timeline rewritten.
  - Remote-delivery FAQ rewritten.
  - Observation links de-named.
- Risks: city data do not describe East Cobb (stated on the page); 3-site sample.

### /markets/georgia/lawrenceville/ — Ready (2,516 words)
- Changes:
  - Rankings corrected against all 12 pages and MOEs.
  - hreflang wording corrected.
  - Gwinnett-ads FAQ replaced.
  - Timeline rewritten.
  - Promise wording removed.
  - Observation links de-named.
  - Description and metaTitle updated.
- Risks: small-city MOEs are wide (for example, LOTE ±4.3); it was not verified whether the sampled "Lawrenceville" addresses lie inside city limits (stated on the page).

## Source-file changes
- `content/sources/markets-ga2.json`: the 14 `obs-ga2-*` URLs were changed to equivalent public search URLs, and a note was added to their limitations. Practice and agency domains stay in `measures` and the research files only.
- `content/sources/markets-ga1.json`: the `ga-board-dentistry-rule-150-10-01` measures field is now scoped to routine dental services.
