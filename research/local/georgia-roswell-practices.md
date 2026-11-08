# Local dental-practice website observations — Roswell, Georgia

- **Batch:** markets-ga2 · **Observed:** 2026-11-08 · **Route:** /markets/georgia/roswell/
- **How sites were found:** WebSearch tool (US results; unordered list — not a Google ranking): "dentist Roswell GA family dentistry", "dental marketing agency Roswell GA dental SEO". Practice domains were taken from result listings and directory entries, then opened directly.
- **Method:** each homepage fetched with curl (no forms submitted, no contact made, no logins); text and links inspected for booking paths, hours, address/phone, language options, insurance/payment wording and service focus. Mobile tap counts are **estimates from page structure** (sticky header buttons, link targets), not device tests. Translation widgets (Google-Translate-style language pickers) are recorded separately from genuine translated content. Observations describe the homepage on the date only; inner pages were checked only where noted.
- **Public-page rule:** practices are named here for traceability only. Public pages describe results in aggregate and never name or criticise a practice.

## Sites sampled
| # | Site | Service mix (as presented) | Address / phone visible | Booking path | Advertised hours | Languages | Insurance / payment info | Reviews | Location content |
|---|---|---|---|---|---|---|---|---|---|
| 1 | sunshinesmilesdentistry.com | Family, cosmetic, emergency, aligners | Yes — Market Pl, 30075; phone; tel link | "Schedule Online" → **Modento** online booking (est. 2–3 taps) + call | Hours page linked; not captured on homepage | **Dentist "fluent in Spanish, Brazilian Portuguese and English"; welcomes Spanish-speaking patients** (English page text) | In-house membership plan; "several new patient specials" | Some | Roswell plus Sandy Springs, Dunwoody, Alpharetta, Milton, Johns Creek, Marietta, Cumming |
| 2 | roswellfamilydentistry.com | — | Page returned almost no server-rendered content (JavaScript-only) — **not analysed** | — | — | — | — | — | — |
| 3 | bigcreekfamilydentistry.com | Family, implants, sedation, aligners | Yes — Old Alabama Rd, 30076; phone; tel link | "Request Appointment" (form) + phone | Mon 8:30–5, Tue–Wed 7:30–5, Thu 7:30–4:30, Fri 8:30–1, Sat/Sun closed | English only | Financial options page | Reviews page | Roswell (+1 Alpharetta mention) |
| 4 | roswellcompletedentistry.com | General, emergency/same-day, implants, aligners | Yes — 30076; phone; 4 tel links; "call or text" | "Book Now" → **Modento** online booking; "book anytime — even after hours" | Mon–Thu 8–5, Fri 8–2 | English only | Insurance accepted page, membership plan, payment plans, patient offers | Shows "4.9 · 767 reviews" widget | Roswell |

## Aggregate summary (what may be said publicly)
- Of **three** analysable practice websites reviewed on 8 November 2026 (a fourth rendered no readable content), **two** linked to a third-party real-time online booking tool and one used a request form.
- **One** named a Spanish-speaking dentist; none had a translated Spanish section.
- **Two** offered membership plans and new-patient offers; one emphasised same-day emergency care.
- **None** advertised Saturday hours; Friday hours ended at 1–2 pm where shown.
- One wrote location copy for a ring of seven nearby communities; two focused on Roswell only.

## Strategy table: observed fact → cautious interpretation → proposed action → how to test
| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 1 of 3 named a Spanish-speaking dentist, in English copy only | Spanish speakers may not find that fact; ACS shows 13.6% speak Spanish at home | If the client has bilingual staff, add a Spanish-language page that explains the visit, payment and booking — written in Spanish, not machine translation | Calls/forms in Spanish; Spanish page sessions → contacts |
| 2 of 3 used real-time online booking | Expectation of self-service booking is being set locally | Offer online booking only if schedule data stay current; otherwise a short request form with a callback promise the practice can keep | Booking completion rate; no-show rate by channel |
| Review-count widget on homepage of 1 site | Review volume is a visible comparison point | Steady, policy-compliant review requests (no incentives, no gating) | Review velocity per month |
| No Saturday hours; short Fridays | Older and family patients may be fine; commuters (44.6% work in city incl. WFH) may not | Test early-morning slots before promising weekends | Fill rate of test slots |

## Limits
- Small convenience sample (4 sites); not representative of all practices in Roswell.
- Homepage-level observation; a feature missing from the homepage may exist elsewhere on the site.
- Booking widgets that load only with JavaScript may not have been detected; where a button label existed but no destination was visible, it is recorded as "button, destination not confirmed".
