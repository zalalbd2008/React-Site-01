# Independent review — batch review-florida (2026-11-08)

Reviewer: independent editor/fact-checker (not one of the three writers: fl1 = Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, hub; fl2a = St. Petersburg, West Palm Beach, Boca Raton, Sarasota; fl2b = Naples, Tallahassee, Gainesville, Port St. Lucie).

## What was re-checked for every page

- **ACS vintage.** `node scripts/census.mjs "<City>" FL` re-run for all 13 cities (default vintage 2024). fl1 and fl2b values already matched ACS 2020–2024. **fl2a pages (St. Petersburg, West Palm Beach, Boca Raton, Sarasota) used ACS 2019–2023 throughout**; every figure was replaced with 2020–2024 values, and the seven 2019–2023 source entries in `content/sources/markets-fl2a.json` were removed and replaced by 2024 entries in `content/sources/review-florida.json`. County, metro, B25004/B25001, C16001, B05002, B08007-adjacent and DP02/DP03 values were pulled from the data.census.gov table API (`ACSDP5Y2024.*`, `ACSDT5Y2024.*`) at review.
- **City vs county vs metro.** Each figure checked for geography; comparisons such as "highest of the five Florida cities we cover" were wrong once 13 cities existed and were corrected or limited (Orlando, Tampa, Jacksonville, Fort Lauderdale, Boca Raton, Sarasota).
- **BEBR vs Census Vintage 2025.** BEBR (April 1, 2025, `estimates_2025.pdf`) and Census V2025 (July 1, 2025, `sub-est2025_12.csv`) re-opened; every growth figure re-computed; each attributed to its source in text. Orlando and the hub now show both, with a note that methods differ (e.g. Miami +8.3% BEBR vs +10.8% V2025).
- **Legal sources.** F.S. 466.019 and 456.062 re-opened on Online Sunshine (2026 Statutes) and quoted accurately (e.g. "likely to appeal primarily to a layperson's fears"; 456.062 statement in capitals "clearly distinguishable"). **Rule 64B5-4.002: FLRules returned HTTP 403 (bot challenge) on 2026-11-08 — not bypassed.** Provisions were cross-checked against the Cornell LII reproduction (history to 2-26-06; added as `lii-fl-rule-64b5-4-002`). The writer's statement that the rule was amended effective 24 September 2026 could not be verified and was removed from the hub; the source entry's limitations now say so. Pages only state provisions present in both texts and tell readers to confirm the current official version.
- **Truthful service model.** Every page: remote from Houston, no Florida office/staff/clients/results; no named practices or agencies; observation counts dated 8 November 2026 with sample sizes. "Read-only access to your Business Profile" corrected on five pages (Business Profile has no view-only role).
- **Hypotheses vs facts.** Demographic-to-preference statements reworded as hypotheses on Miami, Tampa, West Palm Beach, Sarasota, Naples, Tallahassee, Gainesville, Port St. Lucie, Jacksonville.

## Manual sibling comparison (all 14 pages read side by side; then a scripted similarity scan on paragraphs and FAQ answers with city names masked)

| City | Distinct angle (after review) | Evidence it rests on | Overlap found | Fix |
|---|---|---|---|---|
| Hub `/markets/florida/` | Nine metros; how the 13 cities relate; one-vintage 13-city table; pooled 52-site observations; state rules; storms | ACS 2020–2024 metro/city DP, B25004; BEBR metros; V2025; OMB 2023; pooled research files | Covered only 5 of 13 cities; seasonal table and matrix implied Fort Lauderdale was the most seasonal city; storm checklist also repeated on St. Petersburg page | Rebuilt: 9-metro table, relationship prose for all 13, 13-city comparison table, pooled observations, matrix regrouped for all cities; removed Timeline and illustration; St. Pete checklist removed in favour of a link here |
| Miami | Bilingual intake and booking before traffic | 77.2% LOTE, 68.8% Spanish, 39.2% LEP; 1 of 5 sites with Spanish pages | KeyAnswer opener identical across 5 fl1 pages; WPB channel #1 also "conversion + language" | Opener rewritten; WPB reordered (see below) |
| Fort Lauderdale | Calendar-based measurement, retention, consult trust | 12.5% seasonal-use; 65+ 19.6%; 0 of 3 sites addressed part-year residents | "Highest seasonal share of any city we cover" false (Naples 40.8%, Sarasota 14.5%); rules FAQ duplicated hub FAQ | Comparison corrected; FAQ replaced with year-on-year measurement FAQ |
| West Palm Beach | Measure a three-way language mix and payer questions before building | 31.3% LOTE split Spanish 19.7% / French-Haitian-Cajun 5.8%; 15.2% uninsured; 1 of 4 sites stated payer position | Channel order matched Miami's (conversion + language first) | Measurement by language and call reason now first, plans page second; contrast with Miami stated in text |
| Boca Raton | Consultation-level measurement and evidence-led positioning; agency-choice checklist | Income $106,273 (hypothesis only); credentials on 2 of 4 sites; several specialist agencies in search | "Only multilingual site across our four city samples" false once Miami counted | Removed; next step rewritten |
| Port St. Lucie | Capacity gate and out-of-hours access for commuters | +30.9% V2025 growth; 36.4% work outside county; 0 of 4 sites addressed newcomers | Channel order matched Orlando's (profile → booking → content → ads); "What do you need from us" FAQ and next-step paragraph near-identical to Naples/Tallahassee/Gainesville | Order rebuilt: capacity gate → out-of-hours booking → profile; FAQ replaced (when to cut spend); opener and next step rewritten |
| Tampa | Neighbourhood-led organic/local SEO on one side of the bay | Bay geography; 2 of 3 practices brand by neighbourhood; thin service linking | Cost FAQ near-identical to Jacksonville's; "five cities we cover" comparatives | Jacksonville FAQ replaced; comparisons limited to four largest cities; St. Pete linked |
| St. Petersburg | Reactivation and switchers in a county that has stopped growing | Pinellas −1.1% (V2025) / +0.8% (BEBR); 65+ 21.1% city, 26.4% county | Channel order matched Tallahassee's (profile/reviews first); closure checklist duplicated hub; storm FAQ duplicated hub/Sarasota | Reactivation now first; checklist replaced by hub link; FAQ replaced (beach-town pages); trimmed 3,098 → 2,887 words |
| Sarasota | Define the market by communities; phones and four-day weeks | City = 1 in 8 county residents; 2 of 4 sites four-day weeks; titles name communities | Phone emphasis inferred from age (shared with Naples); seasonal illustration mirrored FtL/Naples; storm FAQ repeated; "highest seasonal county compared" false (Collier 24.9%) | Phone case now rests on observed short weeks; illustration replaced (Friday voicemail); FAQ replaced (community naming); part-year page linked to FtL; claim corrected |
| Naples | Two calendars: plan spend around monthly capacity | 40.8% seasonal-use city, 24.9% Collier; median age 67.3 | Channel order (profile → phone) matched Sarasota; age → phone assertions; templated opener/next step/start FAQ | Monthly demand/capacity now first; age statements as hypotheses; FAQ replaced; opener/next step rewritten; trimmed |
| Orlando | Visibility near outer-county growth and access beyond a weekday-only week | BEBR Osceola +24.8%, Lake +16.1%; 2 of 4 sites closed Fridays, 0 Saturday | Capacity subsection and capacity-axis matrix overlapped Port St. Lucie; "fastest of five" claim outdated | Capacity subsection removed (PSL owns it); matrix rebuilt on access axis; growth shown from BEBR and V2025 |
| Jacksonville | Drive time in a 747 sq mi consolidated city; add-a-location decision | Land area; 0.7% seasonal; 22.6% under 18 | Remote-delivery FAQ near-identical to Orlando's; cost FAQ duplicate of Tampa | Both FAQs rewritten (ZIP-code evidence; one profile per real office) |
| Tallahassee | Insurance-network clarity for a public-sector workforce | 29.1% government workers; 1 of 4 sites named carriers | Share-taking illustration mirrored St. Pete; student FAQ near-identical to Gainesville's; ranking FAQ identical to Naples'; templated opener/start FAQ/next step | Illustration replaced (insurance-page test); FAQs rewritten (urgent-care framing; network update cadence; first-conversation inputs) |
| Gainesville | Retain permanent residents over chasing students | 35% enrolled in college; median age 26.5; 2 of 4 sites membership plans | Student FAQ vs Tallahassee; templated opener/start FAQ/next step; calendar claims stated as fact | FAQs rewritten (lifetime visits; return-rate metrics); calendar effects as hypotheses; opener/next step rewritten |

Scripted re-scan after fixes: no paragraph or FAQ answer pair above 0.5 similarity except standard table captions and the brief's suggested question wording ("Can a Houston-based agency…"), whose answers now differ per city.

## Per-page entries

### /markets/florida/ — Ready (2,929 words)
- Changed: see table; access bullet corrected; rule wording tightened and 2026-amendment claim removed; FAQ on measuring several offices removed (duplicated the groups section); seasonal FAQ now cites Naples/Gainesville.
- Risks: Rule 64B5-4.002 official text not re-verified (403); child cards depend on city pages also being Ready.

### /markets/florida/miami/ — Ready (2,749 words)
- Changed: KeyAnswer opener; "foreign-born" label; BEBR attribution in text; Spanish and payment statements as hypotheses.
- Risks: sample of five sites (one outside city limits).

### /markets/florida/orlando/ — Ready (2,567 words)
- Changed: lede/KeyAnswer/table growth claims (BEBR and V2025 separately); capacity subsection removed; matrix rebuilt; PSL linked; LII citation added.
- Risks: four-site sample.

### /markets/florida/tampa/ — Ready (2,379 words)
- Changed: comparisons limited to four largest cities; insurance statements as hypotheses; St. Pete linked; keyword caveat reworded.
- Risks: three-site sample.

### /markets/florida/jacksonville/ — Ready (2,451 words)
- Changed: comparatives corrected; two FAQs replaced; Saturday-hours statement as hypothesis; google-gbp-guidelines cited.
- Risks: none beyond sample size.

### /markets/florida/fort-lauderdale/ — Ready (2,473 words)
- Changed: seasonal comparison corrected; rules FAQ replaced; county source and rule citation added.
- Risks: three-site sample (one site refused automated access).

### /markets/florida/st-petersburg/ — Ready (2,887 words)
- Changed: all ACS values 2019–2023 → 2020–2024; channel order; checklist and storm FAQ removed; trims; next step rewritten.
- Risks: four homepages only.

### /markets/florida/west-palm-beach/ — Ready (2,865 words)
- Changed: all ACS values → 2020–2024 (LOTE 31.3%, LEP 14.4%, French/Haitian/Cajun 5.8%, uninsured 15.2%, income $73,446, seasonal 6.8%); channel order; payer statements as hypotheses.
- Risks: one sampled practice is outside the city.

### /markets/florida/boca-raton/ — Ready (2,864 words)
- Changed: all ACS values → 2020–2024 (income $106,273 ±$6,300; seasonal 9.5%); outdated cross-city comparisons removed; next step rewritten.
- Risks: city-limit status of sampled addresses not verified (stated on page).

### /markets/florida/sarasota/ — Ready (2,768 words)
- Changed: all ACS values → 2020–2024; Collier comparison corrected; phone section re-grounded; illustration and storm FAQ replaced.
- Risks: one of four sites is in Venice (stated).

### /markets/florida/naples/ — Ready (2,950 words)
- Changed: channel order; hypotheses; FAQ and boilerplate rewrites; trims (slightly above 2,800 but not far above).
- Risks: city ACS margins of error are wide (income ±$25,425; stated on page).

### /markets/florida/tallahassee/ — Ready (2,585 words)
- Changed: illustration; three FAQs; hypotheses; opener/next step.
- Risks: no list of public-employer dental plans obtained (page says so).

### /markets/florida/gainesville/ — Ready (2,432 words)
- Changed: calendar hypotheses; two FAQs; opener/next step; keyword caveat.
- Risks: UF College of Dentistry site not retrieved (writer note).

### /markets/florida/port-st-lucie/ — Ready (2,823 words)
- Changed: migration claim cited to BEBR; channel order; FAQ; hypotheses; opener/next step; lede attributed to Census estimates.
- Risks: none beyond sample size.

## Batch-wide residual risks

- Observation source URLs are inconsistent: fl1/fl2b use Google search URLs although discovery used the WebSearch tool; fl2a and the pooled entry point to `/resources/research-methodology/`. Not misleading on the page (sources list only), but worth standardising.
- Owner input #6 (confirmation that all nine services are delivered) remains open site-wide.
