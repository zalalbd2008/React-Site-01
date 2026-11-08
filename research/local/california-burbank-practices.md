# Burbank — practice website observations

Batch: markets-ca2 · Observed 2026-11-08 · Source id: `obs-ca2-practices-burbank`

## Method

- WebSearch tool (US, unordered): "dentist Burbank CA"; "Burbank dental office new patients Olive Ave Magnolia Blvd dentist website". Results were directories (Zocdoc, NewPatientsInc, Healthline, Vitals, MapQuest); domains taken from listings.
- Home pages fetched with curl 2026-11-08. One candidate (smilesonolive.com) reset the connection — excluded. No forms submitted, no calls. Not representative. Never name practices publicly.

## Observations (n = 4)

| # | Site (internal) | Address | Booking path | Hours shown | Language | Insurance / payment | Location content / other |
|---|---|---|---|---|---|---|---|
| BU1 | magnoliadentistry.com | 2800 W Magnolia Blvd | "Book online" → third-party scheduler (Modento consult link); 18 tap-to-call links | "Monday–Sunday 6:00 AM–12:00 AM (midnight), by appointment only, including emergencies" | None seen | FAQ: PPO plans incl. Delta Dental, Aetna, Cigna, MetLife; insurer-specific guide pages explaining out-of-network payments; CareCredit, Cherry | "Welcoming patients from across Burbank and nearby Glendale"; footer adds Santa Clarita; Google review quotes |
| BU2 | theburbankdentist.com | 500 E Olive Ave #730 | "Request Appointment" page; tel links | Mon–Thu 8–6, Fri 8–4 | None seen | Insurance mentioned in testimonials only on home page | Testimonials; perio laser and implant services |
| BU3 | drruiz.com | 1226 W Olive Ave | "Request an Appointment" page | Mon–Thu 8:30–5:15, Fri 8:30–4:30 | None seen | "Insurance & Financing" page; "Special Offers" | "Areas We Serve": Studio City, Sherman Oaks, Toluca Lake; freeway reference (Golden State Fwy) |
| BU4 | olivefamilydentist.com | 2200 W Olive Ave | 4 on-page request forms; 10 tel links | Mon–Thu 8–5, Fri 8–2, Sat–Sun closed | Google Translate widget offering Armenian, Chinese (Simplified), Japanese, Korean, Russian, Spanish | "Accepts a variety of insurance plans", cash and credit | Nav pages for La Cañada Flintridge, San Fernando, Studio City, Sun Valley, Toluca Lake, North Hollywood, Glendale; dated review excerpts mention free garage parking |

## Aggregates (n = 4)

- 3 of 4 named areas outside Burbank city limits; 2 of 4 had separate area pages or an "Areas we serve" section.
- 1 of 4 linked to a third-party online scheduler; 3 of 4 used request pages/forms.
- 0 of 4 showed regular Saturday clinic hours (one showed seven-day by-appointment availability).
- 1 of 4 offered other languages, via an automatic translation widget rather than written pages.
- 1 of 4 explained PPO/out-of-network handling by insurer.

## Strategy table

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 3 of 4 target neighbouring places | Competition for "dentist near me" spills across Burbank/Glendale/North Hollywood lines | Define the trade area from patient ZIPs, not city limits; create area content only where real patients come from | New-patient ZIP share before/after; GSC queries containing neighbourhood names |
| Area pages risk thin duplication | Near-identical pages can be treated as low value (google-helpful-content principle, owned by S3/S5 pages) | One strong Burbank page + genuinely different content per area (directions, parking, which freeway exit) | Indexed area pages with impressions vs. those with none |
| Machine translation widget (1 of 4) | Signals a language need but may not produce indexable or reliable pages | If language demand is confirmed, write reviewed pages on language-specific URLs | Front-desk language log; form submissions on language pages |
| Insurer-specific explanations (1 of 4) | Some offices answer the PPO/out-of-network question before the call | Plan-participation page with clear "in-network / we file / out-of-network" categories | Share of calls that are insurance-only questions |
| Few online schedulers | Request forms dominate the sample | Decide by capacity; measure form-to-booking time | Time-to-first-response; booked rate of form leads |
