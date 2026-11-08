# Naples — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl2b-naples-practices-2026-11-08`. Internal only — never name these practices on public pages.

## Method

WebSearch tool (US results, unordered list — not a Google ranking): `dentist Naples FL family cosmetic dentistry`, then name queries. Directory listings (newpatientsinc practice finder) used only to find the practices' own domains. Homepages (and one appointment page) fetched with plain curl on 2026-11-08; **static server HTML only** — content injected by JavaScript (hours widgets, chat, schedulers) may be missed. No forms submitted, no contact made. Mobile tap counts estimated from page structure, not measured on a device.

Skipped: one candidate returned HTTP 403; one returned a proxy 502.

## Sample (5 sites with Naples, FL addresses)

| # | Site | Location note | Mix |
|---|---|---|---|
| N1 | dentistryofnaples.com | Naples | General, cosmetic, implants, Invisalign, dentures, TMJ |
| N2 | dentistsofsouthnaples.com | South Naples shopping plaza | Family/general, oral surgery, emergency, sedation |
| N3 | pediatricdentistryofnaples.com | 1879 Veterans Park Dr (North Naples, 34109) | Pediatric |
| N4 | elysiumnaples.com | 6750 Immokalee Rd (North Naples, 34119) | General, cosmetic, implants, same-day crowns |
| N5 | gatewayofnaplesdental.com (via fairwaydentalcarefl.com redirect) | 2176 Tamiami Trl N, 34102 | General; footer names a multi-office group entity; identical template to sampled sites in Tallahassee and Port St. Lucie |

## Observations

| Feature | N1 | N2 | N3 | N4 | N5 | Count |
|---|---|---|---|---|---|---|
| Click-to-call link | Yes | Yes | Yes | Yes | Yes | 5/5 |
| Booking path | Phone/contact only; no booking link found | "Book an appointment" | "Request an appointment" form (preferred date, morning/afternoon/evening) | "Schedule an appointment" request | "Schedule with Us" → make-appointment page | 0/5 confirmed real-time scheduler; 4/5 request or booking link |
| Hours in static HTML | No | Mon–Thu 7:00–6:00; "Open selected Saturdays" | No | Mon–Fri 8–4; Sat/Sun closed | Not rendered in static HTML | 1/5 any Saturday; 1/5 past 5 pm |
| Stale notice | — | Homepage still shows a closure notice for Hurricane Milton (October 2024 dates) | — | — | — | 1/5 |
| Languages | No | Office listing shows "English, Spanish" | No | No | No | 1/5 |
| Insurance/payment detail | "PPO" mention; Payments & Specials pages | Insurance-accepted page, Delta Dental named, in-house dental plan, financing | Financial info, payment plans | PPO mention | Insurance and payment options pages | 1/5 names a carrier |
| Seasonal / part-year resident content | No | No | No | No | No | 0/5 |
| Area pages beyond the office | No | No | No | Mentions "North Naples" practice | No | 0/5 dedicated area pages |
| Reviews on site | Testimonials page | Not in static HTML | Reviews page | Reviews section | Not in static HTML | 3/5 |
| Implant/cosmetic emphasis | Yes | Partial | n/a | Yes | Partial | 3/5 strong |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 0/5 sites had any content for part-year residents, despite 40.8% seasonal-use housing in the city | Practices may be leaving the arrival/departure question unanswered — or handle it by phone | One plain page: booking before arrival, records from a home dentist (patient-initiated), what happens to recall when away | Page views and calls in Oct–Dec; ask "first visit this season?" at booking |
| Only 1/5 showed hours past 5 pm or any Saturday in static HTML | Limited visible extended hours; hours may be in widgets | Publish hours as text; use GBP seasonal/special hours accurately | GBP "calls" and direction requests by day-of-week |
| 1/5 still displayed a 2024 hurricane closure notice | Temporary notices are not always removed | Calendar a post-event check for notices on site, GBP and ads | Monthly content check; GBP edit log |
| 4/5 used request forms or booking links; none confirmed real-time | Booking is a request, not a confirmed slot | Make the request path short; confirm by phone within business hours; measure response time | Form-to-booked rate; time to first callback |
| 1/5 named a carrier | Insurance questions push patients to the phone | List networks honestly, including "not in network" plans | Calls tagged "insurance question" |
| 3/5 lead with implants/cosmetic | Higher-value services are contested on the page itself | Differentiate with process clarity (consult steps, financing, what is included), not superlatives | Consult requests by source; consult show rate |
