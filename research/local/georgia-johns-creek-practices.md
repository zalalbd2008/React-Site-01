# Local dental-practice website observations — Johns Creek, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/johns-creek/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Johns Creek GA", "Johns Creek GA dental office Medlock Bridge Road family dentistry website", "dental SEO Johns Creek GA". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | towndentistry.com (3 offices: Brookhaven, Johns Creek, Duluth) | Family, cosmetic, sedation | Each office's address and phone; 4 tel links | "Schedule Online" per office → **NexHealth** booking (est. 2–3 taps) | Not on homepage | Translation widget (English, Deutsch, Español, Français…) | "No insurance? New patient specials" | Reviews | Separate location blocks; Johns Creek, Duluth, Brookhaven |
| 2 | johnscreekteeth.com | General, family, cosmetic, implants, ortho | Yes — Medlock Bridge Rd, 30097; phone (no tel link detected) | "Request An Appointment" form | Not on homepage | **"We Are Fluent In Spanish and Korean!"** banner; plus translation widget | Insurance mentioned | Reviews page | Johns Creek only |
| 3 | pdjohnscreek.com (pediatric + orthodontics) | Pediatric dentistry, orthodontics, special needs | Yes — Medlock Bridge Rd, 30097; phone; tel link | "Book Now" / "Request Appointment" (form) | Mon–Thu 8–4, **Friday by appointment only**, Sat/Sun closed | English only | "In-network with most traditional insurances" | Reviews | Johns Creek; mentions Alpharetta, Duluth, Suwanee |

## Aggregate summary (what may be said publicly)
- Of **three** practice websites reviewed on 8 November 2026, **one** (a multi-office brand) linked each office to a real-time scheduler; **two** used request forms.
- **One** stated staff fluency in Spanish **and Korean** in a homepage banner; one other relied on a translation widget.
- **One** was a combined pediatric/orthodontic practice — consistent with the city's high under-18 share, though one site proves nothing about demand.
- **None** advertised weekend hours.
- Two of three referenced neighbouring Duluth, Suwanee or Alpharetta, showing catchments that cross the Fulton–Gwinnett line.

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Language fluency stated as a banner on 1 of 3 sites | Language capability is being used as a differentiator; Asian/Pacific languages are 18.5% at home (ACS 2020–2024) | If the client's team speaks a language, state which language, who speaks it and when — then build one real page in that language if call data justify it | Call-language log; page sessions by language |
| Multi-office brand with per-office booking | Patients compare offices across city and county lines | For a single-office client, explain travel time from Duluth/Suwanee/Alpharetta honestly rather than claiming those cities | Patient ZIPs; direction requests in Business Profile |
| Pediatric/ortho site with Friday-by-appointment | Family scheduling (several children, after-school slots) is a constraint | Publish after-school availability where it exists; family-block booking request option | Requests for multiple patients per inquiry |
| Request forms on 2 of 3 | Callback step may slow conversion for busy two-commuter households | Short form + guaranteed callback window the office can meet | Time-to-callback vs booked rate |

## Limits
- Small convenience sample (3 sites); not representative of all practices in Johns Creek.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
