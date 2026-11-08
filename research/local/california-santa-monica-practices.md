# Santa Monica — practice website observations

Batch: markets-ca2 · Observed 2026-11-08 · Source id: `obs-ca2-practices-santa-monica`

## Method

- Found via WebSearch tool (US results, unordered — not a Google ranking): "dentist Santa Monica CA family dentistry"; "Santa Monica dental office website new patients book online Wilshire Montana". Result pages were mostly directories (MapQuest, NewPatientsInc, Lantern, santamonica.gov business listings); practice domains were taken from those listings.
- Home pages fetched with curl on 2026-11-08 and converted to text; observations are from home-page HTML only (no interior pages, no forms submitted, no calls). Mobile tap counts are estimates from page structure.
- Sample: 4 general/family practices with Santa Monica addresses. Not representative. **Never name these practices on public pages.**

## Observations

| # | Site (internal record only) | Address shown | Booking path | Hours shown | Language content | Insurance / payment | Reviews / other |
|---|---|---|---|---|---|---|---|
| SM1 | santamonicabaydental.com | 2730 Wilshire Blvd, Ste 410 | "Schedule Appointment" links to a third-party online scheduler (NexHealth URL); 5 tap-to-call links | Mon 8–5, Tue–Thu 7–5, Fri 7–4, Sat/Sun closed | None seen | "Insurance" page in nav; PPO mentioned | Reviews page; broad service menu (general, pediatric, cosmetic, implants, sedation, sleep apnea, Botox) |
| SM2 | sbhaledds.com | 2901 Wilshire Blvd, Ste 301 | "Book Online" links to a third-party scheduler; "Request an appointment" form also present | Mon–Tue 7–5, Wed 7–7, Thu–Fri 7–2, weekend closed | None seen | "Payment & Insurance Options"; CareCredit | Testimonials page; patient-forms and pay-online links |
| SM3 | santamonicadental.com | 2730 Wilshire Blvd, Ste 100 (same building as SM1) | "Schedule Now"/"Book an Appointment" on-site form; phone shown as text, **no tap-to-call link detected** | Mon 10–7, Tue 9–6, Wed 10–7, Thu 8–5, Fri and Sat by appointment, Sun closed | English/Spanish selector in menu | "Accepts a variety of insurance plans" plus cash/credit; no plan list on home page | Parking instructions (Princeton St, Harvard St, Wilshire lot, street, valet); Yelp reference |
| SM4 | my.officite.com/0078558 (American Family Dental) | 1044 Pico Blvd | Email appointment request form; tel links | Not on home page | None seen | Insurance policies referenced; PPO | Template site; little location content beyond address |

## Aggregates used on the page (n = 4)

- 2 of 4 linked to a third-party online scheduler; 2 used request forms/email.
- 2 of 4 shared one building address (2730 Wilshire Blvd).
- 0 of 4 showed regular Saturday hours; 1 offered Saturday by appointment; 2 showed at least one weekday open until 7 pm.
- 1 of 4 gave parking instructions; 1 of 4 offered a Spanish option.
- 1 of 4 displayed the phone number without a tap-to-call link.
- None showed a list of in-network plans on the home page.

## Strategy table — observed fact → cautious interpretation → proposed action → how to test

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Two sampled offices share one building on Wilshire | In a dense city, proximity alone will rarely separate competitors | Differentiate on relevance (categories, services, treatment pages) and prominence (reviews, links) | GBP impressions/actions vs. nearby offices over 90 days; geo-grid checks at 5–9 points |
| Only 1 of 4 explained parking | Getting to the office is a known friction point in dense areas, but we have not measured it | Parking/transit block on contact page and GBP; "where to park" in confirmation messages | Track contact-page exits, calls asking for directions (call notes), no-show rate |
| 2 of 4 offered online scheduling | Online scheduling is present but not universal in the sample | Offer real-time booking only if the schedule can support it; otherwise a short request form with a callback promise the front desk can meet | Booking-start vs. booking-complete rate; time-to-callback |
| No Saturday standard hours; evening on 2 of 4 | Extended hours are a differentiator only if staffed | Publish exact hours consistently (site, GBP, ads schedule) | Calls/booking attempts outside hours (missed-call log) |
| Phone shown as text, not a link (1 of 4) | Mobile users may need extra steps to call | Tap-to-call in header and sticky mobile bar | Click-to-call events vs. call-tracking volume |
| Plan lists absent from home pages | Insurance questions may be pushed to the phone | Insurance page linked from treatment pages and GBP | Share of calls that are insurance-only questions |
