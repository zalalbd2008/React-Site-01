# El Paso practice-website observations — 2026-11-08

**Internal research. Never name, link or criticise these practices on public pages; use aggregates only.**

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) on 2026-11-08 for "dentist El Paso TX family dentistry", "dental implants El Paso TX" and "dentista El Paso TX español citas". Most results were directories; practice and group-location homepages were fetched with plain curl (no user-agent changes) and scanned with a script for booking, hours, language, insurance and payment wording, then confirmed against text snippets. One site (a denture/implant group location) returned a 429 security checkpoint and was skipped. No forms, calls or bookings. Tap counts are estimates from page structure, not device tests.

## Sample (4 sites)

| # | Site | Type | Area |
|---|---|---|---|
| E1 | monarchdental.com/dental-office/el-paso-dentist/33020/ | Group location page (general, ortho) | 79912, West Side (N. Mesa) |
| E2 | aspendental.com/dentist/tx/el-paso/8889-gateway-blvd-w-ste-1100/ | Group location page (general, dentures, implants) | 79925, central/east |
| E3 | advanceddentistryeptx.gargle.com | Independent (general, family, implants, sedation) | 79928, far east (Eastlake) |
| E4 | edgemeredental.com | Independent (general, implants, emergency) | 79938, East El Paso |

## Observed features

| Feature | E1 | E2 | E3 | E4 |
|---|---|---|---|---|
| Address / phone visible on homepage | Yes / Yes (tap-to-call) | Yes / Yes | Yes / Yes | Yes / Yes ("call or text") |
| Booking path | "Book an Appointment" (group booking flow) | "Book online" scheduler + phone | Request-appointment form + phone | "Online booking" link + call/text |
| Estimated taps to start booking on mobile | 1–2 | 1 | 1–2 (form) | 1 |
| Weekday hours | Mon–Fri 8–5 | Mon–Thu 8–5:30, Fri 8–1 | Mon–Fri 8–5 | Mon–Thu 9–5, Fri closed |
| Saturday | Closed | 8:00–3:00 | By appointment only | Closed |
| Evenings (after 6 pm) | No | No | No | No |
| Spanish | Not observed | One dentist bio says fluent in English and Spanish | Not observed | Machine-translation toggle (EN/ES) in menu; no dedicated Spanish pages seen |
| Medicaid statement | Not stated (CHIP word appeared only in unrelated text) | "We don't accept Medicaid" | "We Do Not Accept Medicaid" | Not stated |
| Insurance / payment | PPO/HMO list; in-house discount plan; financing | Benefits verification; third-party financing | Insurance; in-house membership; financing | Insurance; third-party financing (Sunbit named) |
| Reviews shown | Review stars | Rating (4.6) + featured reviews | "Based on 642 reviews" widget | Not observed |
| Location content | Landmark directions (shopping centre, nearby stores) | Address block | Address; dentist raised in El Paso | "Conveniently located in East El Paso"; same-day emergency walk-ins |

## Aggregates used on the page

- 2 of 4 were location pages of multi-state dental groups; 2 were independent.
- 0 of 4 offered dedicated Spanish-language pages; 1 had an automatic translation toggle; 1 mentioned a Spanish-speaking dentist in a bio. (The city's Spanish-at-home share is 64.1% — ACS.)
- 2 of 4 stated explicitly that they do not accept Medicaid; none of the 4 stated that they do.
- 3 of 4 named an in-house membership/discount plan or third-party financing on the homepage (4 of 4 mentioned financing somewhere).
- 1 of 4 had regular Saturday hours; 1 by appointment only; 0 of 4 had evening hours.
- 3 of 4 had a one- or two-tap online booking start; 1 used a request form.

## Strategy table (observed fact → cautious interpretation → proposed action → test)

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| No dedicated Spanish pages in sample; one machine-translation toggle | Spanish-language web content may be thin relative to the population; a toggle is not the same as a maintained language version | Build reviewed Spanish versions of the pages that drive inquiries (new patient, emergency, insurance/payment, top services) with separate URLs and hreflang | Track sessions, calls and forms on Spanish URLs; tag call language at the front desk for 60 days |
| Two of four state "no Medicaid"; payment plans prominent | Coverage status is a filtering question searchers need answered early | Put accepted plans, Medicaid/CHIP status and self-pay options above the fold on new-patient and service pages, in both languages | Count "do you take…" calls before/after; form-field data on insurance type |
| No evening hours; limited Saturday | After-hours access is not a common claim in this sample | Only if capacity exists: test one late day or Saturday block and publish it consistently (site, GBP, ad schedule) | Bookings into the new slots; no-show rate |
| Booking mostly 1–2 taps | Booking friction is not the obvious gap here; language and payment clarity may matter more | Audit the Spanish booking path end to end (form labels, confirmation messages) | Completion rate by language |
| Location content is address-level (East El Paso, West Side, Eastlake) | Searchers likely think in sides of town; the city is 258.8 sq mi | Area-specific content only where the practice genuinely serves that area; no doorway pages | GBP direction-request origins; patient ZIPs |
