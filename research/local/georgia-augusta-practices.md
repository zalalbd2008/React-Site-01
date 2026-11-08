# Augusta practice-website observations — 2026-11-08 (markets-ga1)

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Augusta GA", "pediatric dentist Augusta GA" and "Augusta GA family dentistry office Washington Road OR Walton Way dentist website". Homepages fetched with plain curl; features extracted by script and confirmed by reading snippets. No forms submitted or practices contacted.

**Skipped:** drnalley.com (no connection); dromskydentistry.com (HTTP 403 — not worked around).

Source id: `obs-ga1-augusta-practices`.

## Sample (four sites)

| # | Site | Type / service mix as presented | Location |
|---|---|---|---|
| U1 | augusta.edu/dentalmedicine/patientservices/children.php | University (Dental College of Georgia) pediatric clinic | 30912 |
| U2 | augustapediatricdentistry.com | Independent pediatric practice | 30907; says it serves Augusta, Evans, Martinez and North Augusta, SC |
| U3 | aspendental.com (Augusta, Wrightsboro Road) | National dental support organization office; general, implants, dentures | 30909; page mentions Evans, Martinez, Grovetown, North Augusta |
| U4 | augustadental.net | Independent general/cosmetic practice | 30909 |

## Observed features

| Feature | U1 | U2 | U3 | U4 |
|---|---|---|---|---|
| Tap-to-call link | No (phone shown as text) | Yes | Yes (local + national number) | Yes |
| Booking path | Appointments page | "Schedule an appointment" | "Book online" scheduler | Appointment-request form |
| Est. taps to booking action (mobile) | 2+ | 1–2 | 1 | 2+ |
| Hours on homepage | Not found | Not found | Mon–Tue 8–6; Wed–Thu 8–5; Fri 7–1; **Sat 8–3** | Mon–Fri 8–5 |
| Evening/weekend | No | Not stated | Until 6 pm two days; Saturday | No |
| Insurance / payment | "Most dental insurance plans", credit cards, cash | Not on homepage | Most major plans **excluding Medicaid**; savings plan; financing | Not on homepage |
| Reviews | None | Testimonials | Review count and star ratings displayed | None |
| Cross-river (SC) mention | No | Yes | Yes | No |
| Military / TRICARE mentioned | Only in university-wide navigation | No | No | No |
| Languages | English only | English only | English only | English only |

## Aggregates used on the page
- 3 of 4 used tap-to-call links.
- 1 of 4 (the national DSO office) offered direct online booking, Saturday hours and hours past 5 pm.
- 2 of 4 named communities in Columbia County and/or North Augusta, SC.
- 1 of 4 stated its Medicaid position explicitly (exclusion); 2 of 4 had no insurance information on the homepage.
- 0 of 4 mentioned TRICARE or military families in practice content.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Only the DSO office showed Saturday/after-5 hours and one-tap booking | Convenience is a visible differentiator held by the corporate office in this sample | Independents should not copy hours they cannot staff; compete on clarity (fees, insurance, who you'll see) and booking speed | Booked-rate by inquiry type; lost-call rate at lunch and after 5 |
| Growth in Columbia County (+8.4%) and SC counties; 2 of 4 sites name those areas | Augusta practices draw across county and state lines | Location content and ads geography built from patient ZIPs, including SC where relevant | Patient ZIP share by county/state; ads location reports |
| Public coverage 43.7% in the consolidated city; insurance missing on 2 homepages | Payer questions are likely a frequent call driver (hypothesis) | Publish plain-language participation list per plan type; explain out-of-network process | Share of calls about insurance; call-to-booking rate |
| University clinic in the choice set | Some patients compare a teaching clinic with private offices | Explain the practice's own scheduling speed and continuity without disparaging alternatives | Intake question "where else did you consider?" |

Limitations: four pages; one is a university clinic page and one a DSO location page; not representative.
