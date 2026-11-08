# Torrance — practice website observations

Batch: markets-ca2 · Observed 2026-11-08 · Source id: `obs-ca2-practices-torrance`

## Method

- WebSearch tool (US, unordered): "dentist Torrance CA"; "Torrance family dentist Hawthorne Blvd new patients website". Directory-heavy results (Zocdoc, Smile Generation, NewPatientsInc, WebMD, promptloop). One candidate (glennsmithdds.com) failed (proxy 502) — excluded.
- Home pages fetched with curl 2026-11-08; text searched for language, hours, booking, payment terms. No forms submitted, no calls. n = 4, not representative.

## Observations (n = 4)

| # | Site (internal) | Address | Booking path | Hours shown | Language content | Insurance / payment | Reviews / other |
|---|---|---|---|---|---|---|---|
| TO1 | torrancedentalspa.com | 3878 W Carson St Ste 200 | "Request an Appointment" page; 9 tel links | Mon 10–7; Tue–Fri 8–5; weekend closed | "Se Habla Español"; Spanish version (hreflang es) | PPO/Delta; in-house membership plan (two exams, two cleanings, 20% off); Cherry, CareCredit | "5.0 rating (131 Google reviews)" badge; FAQ block |
| TO2 | jadesdentistry.com | 23440 Hawthorne Blvd Ste 110 | "Request an Appointment" page | Mon 7:30–6; Tue–Wed 9–6; Thu 7:30–6; Fri 9–7; **Sat 8–2** | None seen | Financing page; PPO in nav | Testimonials; children and orthodontic services listed |
| TO3 | totalfamilydentalgroup.com | 3660 Lomita Blvd | "Request an Appointment" page/form | Mon–Thu 8–5; Fri 8–3 | None seen | "Financial Information" page | Testimonials; Lomita Blvd location |
| TO4 | smilegeneration.com office page (group-supported office, 1790 W Carson St Ste A, inside a shopping centre) | as left | "Book appointment" button | Mon–Thu 8–6; Fri 8–4; "open Saturdays by appointment only" | "Language spoken: English" | "Most dental insurance plans (PPO & HMO)" with carrier list | "395 Google Reviews, 4.9 overall" widget with dated review excerpts |

Sample = 4 distinct office pages (a fifth candidate could not be retrieved).

## Aggregates (n = 4)

- 0 of 4 showed Korean or any other Asian-language content in home-page text; 1 of 4 had Spanish pages.
- 1 of 4 showed regular Saturday hours; 1 more offered Saturdays by appointment; 2 of 4 had at least one weekday until 7 pm.
- 2 of 4 displayed a Google review count and rating on the page.
- 1 of 4 published an in-house membership plan; 2 of 4 named financing providers.
- 1 of 4 was a group-supported (DSO-network) office page.

## Strategy table

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| No Asian-language content in 4 of 4, despite 23.0% API-language speakers in ACS | Possible unmet need **or** patients comfortable in English — unknown | If staff speak Korean (or another language) fluently, publish a reviewed page and GBP description note; do not machine-translate | 60-day language log; calls/forms on language page; staff capacity check |
| Review counts shown by 2 of 4 | Prominence is visible competition | Steady, policy-compliant review requests (S7 owns method) | Monthly new-review count and rating trend |
| Membership plan on 1 of 4 | Some offices compete for uninsured/underinsured patients with in-house plans | If the practice offers one, give it a dedicated page and track sign-ups | Plan enrolments; plan-member attended visits |
| Saturday/evening on 2 of 4 | Extended hours exist in the market | Publish exact hours everywhere; align ad schedule | Out-of-hours call attempts |
| Shopping-centre location described (1 of 4) | Car-oriented visits; landmarks help | Directions, parking and landmark text on contact page | Direction requests in GBP performance |
