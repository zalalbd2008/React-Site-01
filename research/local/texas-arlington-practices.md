# Arlington practice-website observations — 2026-11-08

**Internal research. Never name, link or criticise these practices on public pages; aggregates only.**

**Method.** WebSearch tool (US, unordered list — not a ranking) for "dentist Arlington TX family dentistry", "pediatric dentist Arlington TX", "Arlington TX dentist new patients book online Cooper Street", "Arlington Texas dentist office Matlock Road Cooper Street" and "Arlington TX pediatric dentistry official site" (directories excluded in the last two). Homepages fetched with plain curl and scanned; findings confirmed from text snippets. Four sites returned 403/Cloudflare challenges and were skipped (not worked around); two guessed domains turned out to be practices in other states and were discarded. No forms, calls or bookings.

## Sample (4 sites)

| # | Site | Type | ZIP |
|---|---|---|---|
| R1 | rangerdental.com | Independent family/pediatric; Medicaid, CHIP and PPO in page title | 76018 |
| R2 | ikidsdental.com/locations/arlington/ | Pediatric dentistry and orthodontics group (12+ DFW/East Texas locations) | Arlington location page |
| R3 | southarlingtonsmilestx.com | Independent general/cosmetic/implant | 76002 |
| R4 | arlingtontxdentists.com | Independent family dentistry | 76015 |

## Observed features

| Feature | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| Booking path | Request-appointment form + phone | "Book online" (third-party scheduler) + request form | "Book online" + phone | "Schedule an appointment" page (request) + phone |
| Hours shown | Mon 2–7 pm; Tue–Thu 11–7; Fri 11–6:30; **Sat 10–3** | Not on location page | Mon–Fri 8–5; Sat closed | Mon–Thu 7:45–5; Fri 8–12; weekends closed |
| Evening (after 6 pm) | Yes (most weekdays) | Not shown | No | No |
| Coverage | **Participating Medicaid-CHIP provider**; PPO | Insurance/PPO | PPO; in-house membership; Cherry, CareCredit, Sunbit financing | PPO/insurance |
| Languages | Not stated | Not stated | Language-assistance notice listing many languages incl. Spanish (taglines) — not a statement of staff languages | Not stated |
| Neighbouring cities named | — | Lists other locations (Fort Worth, Mansfield, etc.) | "Arlington, Mansfield, Kennedale and surrounding DFW" | "Arlington, Mansfield and/or Grand Prairie" |
| Reviews | Not observed | Reviews link | Reviews section | Reviews |
| New-patient offers | "Special offer" | "Free orthodontic consultation" | New-patient specials, emergency exam offer | New-patient info |

## Aggregates used on the page

- 3 of 4 named neighbouring cities or other locations (Mansfield in 3, Grand Prairie and Kennedale in 1 each).
- 1 of 4 positioned on Medicaid/CHIP participation; 1 of 4 on a membership plan plus three financing brands; 2 of 4 PPO/insurance only.
- 1 of 4 published evening and Saturday hours (and that was the Medicaid/CHIP practice); 2 of 4 were weekday-daytime only; 1 did not show hours on its location page.
- 2 of 4 offered an online scheduler; 2 used request forms.
- 0 of 4 published a statement of staff languages; 1 carried a multilingual language-assistance notice.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Sites name Mansfield, Grand Prairie, Kennedale | Practices believe their catchment crosses city lines; Google's distance factor limits how far a single profile reaches | Define the catchment from patient ZIPs, then decide whether neighbour-city content is warranted; never create pages for places the practice cannot realistically serve | Direction requests and calls by origin; patient ZIP share outside city |
| Payer positioning differs sharply (Medicaid/CHIP vs membership vs PPO) | In a 61% private / 27% public / 19% uninsured city, practices segment by payer | State the payer position plainly on site and GBP; build ads and landing pages per payer segment rather than one generic offer | Lead quality by payer type recorded at booking |
| Extended hours only at the Medicaid/CHIP practice | Access hours may be part of how that segment is served | If extending hours, publish them consistently across site/GBP/ads schedule | Bookings in new hours |
| Half of sample uses request forms | A request is not a booking; follow-up speed determines outcome | Measure form-to-booked time; test online scheduling where the PMS supports it | Request→booked rate; time-to-first-response |
| No staff-language statements | Language capability is not being marketed even where it may exist | Ask the practice what languages staff actually speak; publish only real capability | Call language log |
