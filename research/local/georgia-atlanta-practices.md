# Atlanta practice-website observations — 2026-11-08 (markets-ga1)

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Atlanta GA new patients family dentistry", "cosmetic dentist Midtown Atlanta dental implants" and "Atlanta GA dentist Buckhead OR Midtown OR "East Atlanta" dental office book online". Results were mostly directories (Zocdoc, Lantern, dentalplans.com, NewPatientsInc); practice homepages were then fetched with plain curl (no user-agent changes) and features extracted with a script, then confirmed by reading text snippets. Homepages only; no forms submitted, no bookings started, no practice contacted. Tap counts are estimates from page structure.

**Skipped (not retried or worked around):** midtownatl.mintdentistry.com (HTTP 403 bot challenge); midtowndentalcenter.com (TLS error); feathertouchdentalcare.com and dreschercohen.com (domains guessed from directory names did not connect); tend.com (wrong business).

Source id: `obs-ga1-atlanta-practices`.

## Sample (four sites)

| # | Site | Service mix as presented | ZIP(s) shown |
|---|---|---|---|
| A1 | dentiqueatl.com | Family, cosmetic, implants, Invisalign; children from age 2.5 (per directory) | 30309 (Midtown) |
| A2 | atlantadentalspa.com | Cosmetic, implants, veneers, sedation; four offices | 30305 (Atlanta), plus Brookhaven, Marietta, Johns Creek |
| A3 | smileatl.com | General, implants, cosmetic, sedation | 30327 (Howell Mill Rd) |
| A4 | dentistryformidtown.com | General, implants, aligners, cosmetic | 30309 (Midtown) |

## Observed features

| Feature | A1 | A2 | A3 | A4 |
|---|---|---|---|---|
| Phone as tap-to-call link | Yes | Yes, per office; "TEXT (PREFERRED)" number shown first | Yes | Yes |
| Address visible on homepage | Yes | Yes, per office | Yes | Yes |
| Booking path | Link to a third-party online scheduler (two links) | Text or call per office; "Request a Free Video Consult" | "Request an Appointment" form with preferred time (morning/afternoon/evening) | "Book an Appointment" page (scheduler type not detected) |
| Est. taps from homepage to a booking action (mobile) | 1–2 | 1 (text/call) | 2+ (form) | 1–2 |
| Hours on homepage | Not found | Mon closed; Tue–Fri 7:30 am–4 pm | Mon–Thu 8–5; Fri 8–4 "once per month"; weekends closed | Mon–Thu 7 am–3 pm; Fri 7 am–1 pm; Sat/Sun closed |
| Evening or weekend hours | Not stated | No | No | No |
| Languages | English only observed | English only observed | English only observed | English only observed |
| Insurance / payment | "No insurance? No problem!" membership plan | Savings plan, financing, insurance questions page | Insurance discussed in testimonials | "We accept major insurance! Call the office for details"; insurance & finance page |
| Published prices / offers | None | "Free" video consult | None | "$500 OFF" single implant; "$1,900 OFF" aligners |
| Reviews / proof | Not on homepage | Testimonials, "5-star" language | Testimonials | Not on homepage |
| Location content | Mentions Buckhead and Midtown | Office per neighborhood/suburb | Buckhead-focused copy | Heavy Midtown copy |

## Aggregates used on the page
- 4 of 4 had tap-to-call phone links and a visible address.
- 2 of 4 linked to an online booking page from the homepage; 1 relied on a request form; 1 led with text messaging.
- 0 of 4 advertised evening or weekend hours; 2 of the 3 that showed hours opened at 7–7:30 am, and 2 of 3 closed by 4 pm or earlier on most days.
- 2 of 4 promoted a membership/savings plan for uninsured patients.
- 1 of 4 published dollar-off offers.
- 0 of 4 presented content in a language other than English.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Early-start, early-finish hours on 2 of 3 sites; none open evenings/weekends | Atlanta practices in this sample compete on early-morning slots, not evenings. With 26.6% of city workers working from home (ACS), daytime availability may matter differently by neighborhood. | Put real hours (including early starts) in GBP, schema and above the fold; do not advertise availability that is not staffed | Booked-time distribution by hour; share of web bookings into early slots |
| One site led with text messaging | Some practices treat SMS as the primary inquiry channel | If the practice can staff texting, offer it — and track it as a conversion like calls and forms | Count text inquiries → booked → attended separately |
| Dollar-off implant and aligner offers on 1 site | Price-led promotion exists in Midtown | If fees are advertised, follow Georgia Board of Dentistry Rule 150-10-.01 fee-advertising conditions; check with counsel | Consult-to-start rate for promo vs non-promo leads |
| Multi-office group with suburb pages (A2) | Metro-wide competitors build one page per office | Single-office practices should define a realistic radius rather than chase "Atlanta" | Search Console queries by neighborhood; GBP direction-request origins |
| No non-English content in the city sample | City language mix (11.7% non-English at home) is lower than Gwinnett (37.4%) — language strategy is a county/location decision | Decide by office location and staff capability, not metro averages | Ask "preferred language" at intake for 90 days |

Limitations: four homepages, two in one ZIP; directory-heavy search results; not representative of Atlanta dentistry.
