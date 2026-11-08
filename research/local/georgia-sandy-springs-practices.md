# Local dental-practice website observations — Sandy Springs, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/sandy-springs/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Sandy Springs GA", "Sandy Springs GA dental office Roswell Road cosmetic dentist", "dental SEO Sandy Springs GA". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | sandyspringsdental.com | General, cosmetic, implants, Invisalign | Address shown as "6100 Lake Forrest Dr … **Atlanta**, GA 30328"; tel link; "Text Us" | Contact / text; no online booking or request link found | Not on homepage | English only | Lists PPO plans; states "We do not accept Medicaid or HMO plans" | Reviews mentioned | Sandy Springs + Atlanta |
| 2 | chastainparkdentistry.com (group-affiliated brand) | General, cosmetic, implants, aligners, emergency | Yes — Roswell Rd, Sandy Springs 30342; 2 tel links | "Book an Appointment" page + "SCHEDULE" phone; est. 2–3 taps | Mon–Thu 8–5, Fri 8–2, Sat/Sun closed | "Language spoken: English" stated | Insurance list, dental plan, financing; "$100 off dentistry" time-limited offer | Patient quotes | Sandy Springs; landmark directions (shopping center) |
| 3 | dentistryofsandysprings.com | General, cosmetic; "non-corporate" positioning | Address "5600 Roswell Rd … **Atlanta**, GA 30342"; phone; tel link | "Schedule My Appointment" button (destination not confirmed) + phone | Mon–Thu 8:30–4:30 | Footer "Español" link (appears to be translation, not a Spanish section) | In-network with traditional insurance; membership club for uninsured; financing | Some | Sandy Springs; "in the Prado next to Target" |

## Aggregate summary (what may be said publicly)
- Of **three** practice websites reviewed on 8 November 2026, **two** printed an "Atlanta, GA" mailing address while presenting as Sandy Springs practices.
- **Two** offered an in-house membership plan for uninsured patients; **one** stated it does not take Medicaid or HMO plans.
- **None** advertised Saturday or evening hours; two closed early Friday or worked Monday–Thursday.
- **None** had a genuine Spanish-language section (one footer translation link).
- All three used landmark-based directions (shopping centres, road names) rather than neighbourhood pages.

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 2 of 3 sites used an "Atlanta" postal city | City name, ZIP and Business Profile address may send mixed signals about where the practice is | Keep the Business Profile address exactly as the postal address, but describe the Sandy Springs location (and nearby neighbourhoods served) clearly in page copy; never invent a separate "Sandy Springs" address | Search Console queries containing "sandy springs" vs "atlanta"; map-pack checks from several points |
| No weekend or evening hours; Mon–Thu schedules common | Remote workers (29% WFH) may be fine with weekday slots; out-commuters may not | Publish exactly which early/late slots exist; test a Friday or early-morning block | Booking-time distribution; fill rate of test block |
| Membership plans and PPO lists prominent | Practices compete on payment clarity for a mostly privately insured base | Clear plan-participation page + membership explanation with real terms | Insurance-page to contact conversion |
| Booking destination unclear on 1 of 3 | Button labels promise booking; the step behind them may be a phone call | Make the button do what it says (real booking or "request a time") | Funnel from button click to completed request |

## Limits
- Small convenience sample (3 sites); not representative of all practices in Sandy Springs.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
