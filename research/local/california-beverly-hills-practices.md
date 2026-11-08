# Beverly Hills — practice website observations

Batch: markets-ca2 · Observed 2026-11-08 · Source id: `obs-ca2-practices-beverly-hills`

## Method

- WebSearch tool (US, unordered): "dentist Beverly Hills CA 90210 90211 90212"; "Beverly Hills dentist Wilshire Blvd general dentistry new patients"; "\"Beverly Hills, CA 90210\" dentist family general dentistry official site"; "Beverly Hills general dentist Bedford Drive Camden Drive practice website"; "Beverly Hills dental implants periodontist office". Results were dominated by directories (Zocdoc, WebMD, ADA Find-a-Dentist, NewPatientsInc, Lantern, chamber listing) and pages.dev-hosted sites of uncertain ownership.
- Candidate general-practice domains that **failed** (proxy 502 / no connection) on 2026-11-08: drkevinsands.com, bedforddentalgroup.com, beverlyhillsdentalcare.com, drtzurgabi.com, glosmandds.com, drbercovitch.com. drdianolah.com returned an unrelated placeholder site — excluded.
- Retrieved and used: 3 home pages. No forms, no calls. Sample is cosmetic/specialist-weighted. Never name practices publicly.

## Observations (n = 3)

| # | Site (internal) | Address | Type | Booking path | Hours | Language | Insurance / payment | Location content / other |
|---|---|---|---|---|---|---|---|---|
| BH1 | beverlyhillsdentistry.com | 8920 Wilshire Blvd Ste 701, Beverly Hills 90211 | Cosmetic/general | "Want to book an appointment? Contact us" (contact page); tel links | Not on home page | Claims "8 languages spoken" (languages not listed on home page) | Billing specialist for insurance coordination and financing | Nav: "Out-of-town patients", "Locations we serve"; FAQ says same-day availability limited |
| BH2 | bhperiodontist.com | 416 N Bedford Dr Ste 209, Beverly Hills 90210 | Periodontics/implants | "Make an appointment" page | Mon–Fri 9–5; Sat–Sun closed | None seen | Testimonials mention insurance help | Lists ~20 LA-area places served, from Sherman Oaks and Encino to Torrance, Downey and Norwalk; testimonials mention referral from a general dentist |
| BH3 | implantperiocenter.com | **11620 Wilshire Blvd #718, Los Angeles 90025** (outside Beverly Hills city) | Periodontics/implants | "Book Appointment" → appointment form; separate **referral form** for dentists | Mon–Fri 8–5; weekend closed | None seen | FAQ: insurance "may cover some" periodontal surgery costs | Search results show pages titled "Beverly Hills Periodontists…"; home lists Beverly Hills among Westside areas served; "Rated 5 out of 5 stars based on customer reviews on Google and Yelp" |

## Aggregates (n = 3)

- 3 of 3 described serving patients from beyond Beverly Hills (out-of-town page; lists of LA-area places; Westside area list).
- 1 of 3 used the Beverly Hills name for pages while located outside the city.
- 2 of 3 were specialist (periodontal/implant) offices; 1 of 3 offered a dentist-referral form.
- 0 of 3 showed weekend hours; 1 of 3 showed no hours on the home page.
- 0 of 3 published a plan list on the home page.

## Strategy table

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| All three describe out-of-area patients | Trade area is probably wider than the 5.7 sq mi city | Measure patient origin; build content and ads around the real trade area, not the city boundary | New-patient ZIP share; GBP direction-request origins (where shown) |
| A Los Angeles-address office uses "Beverly Hills" page titles | The place name itself is contested in search | Use the real address and real business name in GBP (google-gbp-guidelines); win on relevance and proof, not keyword names | Brand vs. non-brand query share in Search Console |
| Specialist offices with referral forms | Referral relationships drive part of the demand | Track referral source separately from search; give referring dentists an easy path | Referral-form submissions; referrals by source office |
| No hours on one home page | Small friction for first-time visitors | Hours on every page footer and GBP | Contact-page visits that end without action |
| Language claim without detail | Language capacity is marketed but vague | List actual languages spoken by named staff roles (if true) | Calls requesting each language |
