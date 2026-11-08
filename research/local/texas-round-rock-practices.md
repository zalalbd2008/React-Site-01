# Round Rock, Texas — practice website observations

Batch: markets-tx2b · Observed 2026-11-08 · Route: `/markets/texas/round-rock/`

## Method
- Discovery: WebSearch tool (US results, unordered list — not a Google ranking), 2026-11-08: "dentist Round Rock TX"; "dental SEO Round Rock" and "dental marketing agency Round Rock" also returned practice profiles; directory page promptloop.com/directory/round-rock-dental used only to find practice domains.
- Homepages fetched with curl on 2026-11-08; one domain (lafronteradental.com) returned almost no text and was skipped. No forms submitted, no contact made. Names for traceability only — **never on public pages**.

## Sample (5 general/family/cosmetic practices with a Round Rock address)
| # | Site | Service mix | Booking path | Hours advertised | Languages | Insurance/payment | Location content | Reviews |
|---|---|---|---|---|---|---|---|---|
| 1 | oldsettlersdental.com (78664) | Family, cosmetic, wisdom teeth, smile design | "Book Online" to third-party scheduler + "Schedule an Appointment" page | Mon–Thu 8:30–5; **Fri–Sun closed** | English only observed | Insurance & financing page; membership plan | "Round Rock, Austin, Cedar Park, Pflugerville and the surrounding areas" | Reviews page, testimonials |
| 2 | forestcreekfamilydental.com (78664) | Family, implants, sedation | "Book Appointment" to a booking page on the site (mechanism not determined) + phone | Mon–Thu 8–5, Fri 7–3 | English only observed | Insurance mentioned | Hutto, Georgetown, Pflugerville named | Some reviews |
| 3 | smilewelldentaltx.com (78665) | General, cosmetic, restorative, emergency | "Book Online" (third-party scheduler) | Mon–Fri 9–5, **Sat 9–1** | **"Se Habla Español"** in header; Spanish phrases on page | Insurances & financing; membership; new-patient special | None | Reviews section |
| 4 | adcroundrock.com (78681) | General, dentures, extractions | "Book Online" to third-party scheduler; "accepting new patients" | Not shown in homepage text | Site translation selector incl. Spanish; dentist described as fluent in English and Spanish | No-insurance new-patient offer; payment plans | "Easy to find & local" | Few |
| 5 | serenitydentalstudiotx.com (78664) | General, family, cosmetic, Invisalign | "Schedule Online" (third-party scheduler) + phone | Mon–Wed 8–4, **Thu closed**, Fri 10–6, **Sat 8–2** | English only observed | Payment options; published Invisalign price special | Mentions Austin area | Many testimonials |

## Aggregate observations (public page, unnamed)
- **Online self-scheduling:** 4 of 5 linked to a third-party online scheduler; 1 had an on-site booking page of undetermined type.
- **Weekend hours:** 2 of 5 advertised Saturday hours; 1 closed Friday through Sunday.
- **Spanish:** 2 of 5 signposted Spanish (header tagline; translation selector plus bilingual dentist).
- **Neighbouring places:** 2 of 5 named neighbouring cities (one listed Austin, Cedar Park and Pflugerville — south/west; one listed Hutto, Georgetown and Pflugerville — north/east).
- **Prices:** 1 of 5 published a treatment price special; 2 of 5 featured new-patient or no-insurance offers. (Texas fee-advertising rules apply — 22 TAC §108.53.)

## Strategy table
| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 4 of 5 self-scheduling | Baseline expectation in the sample | Optimise the scheduler for first visits and midday slots (WFH 24.8% hypothesis) | Slot-time distribution of online bookings |
| Neighbour mentions split south/west vs north/east | Practices differ in which direction they claim | Decide catchment from patient ZIPs and drive-time, not from the metro name | ZIP report; ads user-location report |
| 2 of 5 Spanish signposts; ACS 10.0% limited English | A real but partial pattern | If bilingual staff exist, build Spanish versions of a few high-intent pages with hreflang and a Spanish-capable phone path | Spanish query impressions; intake language |
| 2 of 5 Saturdays; 1 closed Fri–Sun | Mixed availability | Align GBP, site and ad schedules with staffed hours | Day-of-week bookings vs ad spend |
| Price specials/new-patient offers on 2–3 of 5 | Offers are common | Any price shown must meet Texas disclosure rules; prefer clear payment information over discounts | Legal review; offer-specific booking codes |

## Limitations
Five homepages on one date; convenience sample. Websites only.
