# Local dental-practice website observations — Macon-Bibb County, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/macon/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Macon GA family dentistry", "dental SEO Macon Georgia", "dental marketing agency Macon GA". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | maconsmiles.com | Family, cosmetic, TMJ | Yes — Forsyth Rd, 31210; separate new- and existing-patient numbers; 2 tel links | "Appointment Request" page + scheduling email address; no real-time booking found | Not on homepage | English only | "Financial & Insurance" page in nav | Reviews section in nav | Macon only |
| 2 | hartleybridgefamilydentistry.com | Family, pediatric, emergency, mild sedation | Phone + tel link; street address on location page | "Book Now" header button → appointment-request form ("scheduling coordinator will contact you") — request, not instant booking; est. 3 taps + form | Not on homepage | English only | "Financial Information" page | None on homepage | Names Macon, Fort Valley and Byron |
| 3 | signaturedentistryofmacon.com | General, family; downtown (Forsyth St) | **No phone number or tel link found in homepage text** | No booking or request link found on homepage | "Monday–Thursday 8:00 am to 5:00 pm" | English only | Not on homepage | Reviews mentioned | Downtown Macon |
| 4 | familydentalcenterofmacon.com | Family, cosmetic, implants, ortho, sedation | Yes — College St, 31201; phone; 2 tel links | "Book Now" → NexHealth real-time scheduler (est. 2–4 taps to slot list) | Mon–Thu 8:30–5:30 shown (Fri not captured) | English only | Insurance mentioned | Not on homepage | Macon; also mentions Atlanta/Marietta in text |

## Aggregate summary (what may be said publicly)
- Of **four** practice websites reviewed on 8 November 2026, **one** linked to a real-time online scheduler; **two** used appointment-request forms or email; **one** showed no phone link or booking route on its homepage.
- **None** advertised weekend or evening hours on the homepage; one listed Monday–Thursday only.
- **None** offered Spanish or other-language content.
- **None** mentioned Medicaid or PeachCare on the homepage; two linked to a financial/insurance page.
- Only one named surrounding communities (Fort Valley, Byron) — the others wrote for "Macon" only.

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 1 of 4 sites offered real-time booking; 2 used request forms | Request forms add a callback step; that may suit patients who want to ask about coverage first | Offer both: a visible call button and a short request form that asks the coverage question up front; add real-time booking only if the front desk can keep slots current | Compare call, form and booking volume and booked rate for 90 days |
| No site had Saturday or evening hours | Possibly a gap — or simply low demand for those slots in a short-commute market (78.7% work locally) | Test one late-afternoon block before advertising extended hours | Track fill rate of the test block |
| 1 of 4 homepages showed no phone link | Mobile visitors may not find a way to call | On a client site: tap-to-call in a sticky header; NAP in footer | Count tel-link clicks before/after |
| Insurance details sat on inner pages; no homepage mention of Medicaid/PeachCare | Payment questions may surface late in the visit, or by phone | State accepted plan types and self-pay options plainly on homepage and service pages (only what the client actually accepts) | Tag first question on calls; watch insurance-page exits |
| Only 1 of 4 named nearby towns | Pages may under-serve patients from Jones, Monroe, Houston and other counties who drive in | Location content describing real driving routes and parking — only for areas the practice actually serves | Patient ZIP distribution vs. Search Console query locations |

## Limits
- Small convenience sample (4 sites); not representative of all practices in Macon-Bibb County.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
