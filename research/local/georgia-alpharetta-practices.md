# Local dental-practice website observations — Alpharetta, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/alpharetta/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Alpharetta GA dental implants", "dental SEO Alpharetta", "dental marketing agency Alpharetta GA". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | stonewalkdentistry.com | Family, sedation | Phone + tel link; no street address in homepage text | "Book Now" buttons (destination not confirmed) + phone | Not on homepage | English only | Insurance & finance page; **$149 new-patient special for uninsured** (exam + x-rays, cleaning unless not appropriate) | Not on homepage | Alpharetta |
| 2 | oldmiltondental.com | Cosmetic, implants (heavy content), aligners | Yes — Old Milton Pkwy, 30005; phone; tel link | "Request an Appointment" + phone | Mon 8–5, Tue 7–4, Wed–Thu 8–5, Fri 8–1 | English only | Financing, dental plan; new-patient special for **uninsured** ("regular value $495") | Patient quotes | Alpharetta + Milton named repeatedly |
| 3 | northfultonsmiles.com | Family, cosmetic, implant restoration, aligners, emergency | Yes — Crabapple Rd, 30004; phone; tel link | "Request Appointment" page (request form) | Alternate Mondays 11–5, Tue–Thu 8–3, alternate Fridays 8–12 | English only | Insurance info, "Concierge Care Plan", payment options | Reviews | Alpharetta, Milton, Roswell, Johns Creek |

## Aggregate summary (what may be said publicly)
- Of **three** practice websites reviewed on 8 November 2026, **two** advertised a fixed-price new-patient offer for patients **without** insurance, and one promoted an in-house care plan.
- **Two** devoted substantial homepage content to implants and clear aligners.
- **None** offered online booking that could be confirmed as real-time; two used request forms and one had "Book Now" buttons whose destination was not confirmed.
- **None** advertised Saturday or evening hours; two had short or alternating Friday/Monday schedules.
- **None** offered content in any language other than English, in a city where 31.6% speak another language at home (ACS).

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Uninsured new-patient specials on 2 of 3 sites | In a 85%-privately-insured city, offers are aimed at a minority segment and at comparison shoppers | If the client runs an offer, state its terms plainly (what's included, who qualifies); otherwise compete on PPO clarity | Track offer-page inquiries → attended visits, not just form fills |
| Heavy implant/aligner content | Practices are competing for high-value adult treatment; content may be crowded | Differentiate with process, consult steps and real cost-range explanations rather than more of the same | Search Console impressions/clicks for implant pages; consult show rate |
| No non-English content observed | Possible gap, but language preference is unknown | Ask the client which languages callers use; if staff speak a language, say so specifically (not a translation widget) | Call-language log for 60 days |
| Irregular short schedules | Capacity constraints; marketing should not outrun available chair time | Set campaign volume from actual new-patient slots per week | New-patient lead-to-appointment lag |

## Limits
- Small convenience sample (3 sites); not representative of all practices in Alpharetta.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
