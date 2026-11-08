# Local dental-practice website observations — Marietta, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/marietta/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Marietta GA", "Marietta GA family dentist Square Cobb Parkway pediatric dentistry", "dental SEO Marietta GA". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | mariettadentalassociates.com | Multi-dentist group: restorative, cosmetic, ortho, perio, oral surgery, implants | **No phone number or tel link in homepage text** | "Schedule an Appointment" label (destination not confirmed) | Not on homepage | English only | "Insurance" page in nav | "Read our reviews" link | "Marietta-Kennestone Hospital area"; long dentist bios |
| 2 | mariettadentalsmiles.com | General, emergency, dentures, kid-friendly, aligners | Yes — Dallas Hwy, 30064; phone + text number | "Request An Appointment" form (est. 2 taps + form) | Lists 8:00 am–3:00 pm against **every day Monday–Sunday** (as displayed) | Translation widget only (English, Hindi, Japanese, Kannada, Korean, Spanish, Telugu) | Membership plan, financing, special offers ($100 off cleaning special) | Not on homepage | Marietta (25 mentions) |
| 3 | eastmariettafamilydentistry.com | Family, implants (heavy), cosmetic | Yes — Roswell Rd, 30062; phone; tel link | "request a visit" + phone; no online booking | Mon 7–4, Tue 7–3, Wed 7–4, Thu 7–3 | English only | "Accepts all traditional insurance… PPO in-network for most plans"; financing | Some | East Cobb, Marietta, Roswell Rd |

## Aggregate summary (what may be said publicly)
- Of **three** practice websites reviewed on 8 November 2026, **none** offered confirmed real-time online booking; two used request forms and one had a scheduling label with no visible destination.
- **One** of three showed no phone number in its homepage text.
- **One** listed seven-day hours; the other two that showed hours ran Monday–Thursday with early finishes.
- **One** used an automatic translation widget; **none** had written Spanish content, although 17.7% of Marietta residents speak Spanish at home (ACS).
- Location wording mixed "Marietta" and "East Cobb" — the sites write for postal areas, not city limits.

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| No confirmed online booking on 3 of 3 | Local patients may be used to calling; or this is a usability gap | Add a short request form with clear response times the practice can meet; test online booking on one appointment type | Form/booking share vs calls; time to first response |
| Translation widget but no written Spanish content | Machine translation of the template is not a Spanish-language service | If staff speak Spanish, write a real Spanish page and say when Spanish-speaking staff answer the phone | Spanish-language calls and page sessions |
| Uninsured share 18.1% (ACS); membership/financing on 2 of 3 sites | Payment clarity likely matters | Plain-language self-pay and membership explanation; no unverified price claims | Payment-question tags on calls; membership sign-ups |
| "East Cobb" vs "Marietta" naming | Patients search by area names that are not city limits | Location content for the areas the practice really serves; Business Profile stays at the real address | Search Console query terms by area name |
| 1 of 3 homepages showed no phone | Mobile visitors may struggle to call | Sticky tap-to-call; NAP in header/footer | tel-link click events |

## Limits
- Small convenience sample (3 sites); not representative of all practices in Marietta.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
