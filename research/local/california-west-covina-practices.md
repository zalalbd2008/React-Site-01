# West Covina — practice website observations

Batch: markets-ca2 · Observed 2026-11-08 · Source id: `obs-ca2-practices-west-covina`

## Method

- WebSearch tool (US, unordered): "dentist West Covina CA"; "West Covina dental office Azusa Ave family dentistry new patient"; "\"West Covina, CA 91790\" OR \"West Covina, CA 91791\" dentist family dental"; "West Covina dentist Glendora Ave Sunset Ave dental group website"; "dental implants West Covina". Directory-heavy results (Zocdoc, NewPatientsInc, ADA Find-a-Dentist, Yobi, MapQuest); several Azusa Ave results were actually in Covina (separate city) — excluded.
- Failed candidates: healthysmilesfamilydental.com, duncanhowarddds.com, westcovinafamilydentistry.com, americandentalgroupwc.com, dentistofwestcovina.com, dentalspawestcovina.com (no connection); westerndental.com West Covina URL (404); cwfamilydentistry.com (redirect to http, not followed).
- Retrieved and used: 3 pages, 2026-11-08. No forms, no calls. Not representative.

## Observations (n = 3)

| # | Site (internal) | Address | Booking path | Hours | Language content | Insurance / payment | Location content / other |
|---|---|---|---|---|---|---|---|
| WC1 | wcovinadental.com | 100 S Vincent Ave Ste 404 (building "across from the mall") | "Book Now" + request form (new/current patient, contact preference); 11 tap-to-call links | Mon 7–6, Tue 7–5, Wed 7–6, Thu 7–5, Fri 9–1; weekend closed | "Spanish-speaking team members. Se habla español." (English page text) | Participates in Delta Dental Premier and Cigna; helps submit other PPO claims; CareCredit | Free parking; "patients from West Covina, Covina, Baldwin Park, La Puente, Walnut"; Google review link |
| WC2 | eddiekaodds.com | 933 S Sunset Ave Ste 203, West Covina **and** an Orange County (Tustin) office | Separate "Book an appointment" pages per office | Differ by office; West Covina Tue–Fri 10–6, Saturday by appointment | "Proudly serving Chinese-speaking and Taiwanese-speaking patients" (English text; no Chinese pages seen) | "All PPO plans"; Sunbit, Cherry payment plans | Two phone numbers in header; cosmetic/implant positioning |
| WC3 | clearchoice.com West Covina centre (national implant-centre brand) | 1050 Lakes Dr | "Schedule now" → consultation scheduler; "free consultation" | Mon–Thu 7:30–5, Fri 9–2; weekend closed | "English, Spanish" listed | Financing / payment plans | Turn-by-turn directions from I-10 east and west; implant-only service set |

## Aggregates (n = 3)

- 2 of 3 stated a non-English language capability (Spanish; Chinese/Taiwanese), and 1 more listed Spanish in a languages field — **all in English text; 0 of 3 had pages written in another language**.
- 1 of 3 was part of a national implant-centre brand; 1 of 3 ran offices in two counties.
- 0 of 3 showed regular Saturday hours (1 by appointment); 2 of 3 opened at 7–7:30 am on weekdays.
- 2 of 3 named neighbouring cities or freeway access.

## Strategy table

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Language capability stated only in English text | Patients searching in Spanish or Chinese may not find these signals | For each language the team genuinely serves, write a reviewed page on its own URL with hreflang, and add language to GBP description where accurate | Sessions/calls from language pages; call-language log |
| Two different non-English groups served by different offices | No single "right" second language | Choose by staff capacity and patient data (decision tree on page) | Booked-visit rate by language |
| National implant-centre brand nearby | Paid search for implant terms faces well-funded competition | Compete on consult quality and local proof; measure consult show and acceptance, not clicks | Cost per attended implant consult |
| Multi-county practice | Separate GBP, pages and tracking per office are needed | One location page and call number per office | Calls by office |
| Early-morning opening (2 of 3) | Commuter-friendly slots are offered | Publish and promote them | Fill rate of early slots |
