# Fort Lauderdale — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl1-fort-lauderdale-practices-2026-11-08`. Internal only — never name these practices publicly.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Fort Lauderdale FL`, `cosmetic dentist Fort Lauderdale Las Olas veneers implants`, then a name query. Candidate domains checked with plain curl on 2026-11-08. One practice site returned HTTP 406 to plain curl (refused automated access) and was **skipped** per the source-access note. Several other candidate domains did not resolve. Static HTML only; no forms submitted.

## Sample (3 sites with Fort Lauderdale addresses)

| # | Site | Address | Mix |
|---|---|---|---|
| F1 | lasolasfamilydental.com ("Las Olas Dentistry") | 800 E Broward Blvd, Ste 305, Fort Lauderdale 33301 | Implants (with implant FAQ), cosmetic, emergency |
| F2 | my.officite.com/0075123 (general dentist) | 1130 Bayview Dr, Fort Lauderdale 33304 | General, implants, whitening |
| F3 | my.officite.com/0042648 (cosmetic & family) | 6231 N Federal Hwy, Fort Lauderdale 33308 | Cosmetic, family |

## Observations

| Feature | F1 | F2 | F3 | Count |
|---|---|---|---|---|
| Click-to-call | Yes | Yes | No tel: link in static HTML | 2/3 |
| Booking path | "Book now" → contact request form | Appointment-request form (platform template) | Patient-communication platform marker; booking not confirmed | 0/3 confirmed real-time |
| Hours | Mon 9–4; Tue–Thu 9–5:30; Fri 9–12; Sat/Sun closed | Mon–Fri 8–5; Sat/Sun closed | Mon/Tue/Thu 8–5; Wed until 7 pm; Fri 8–2 | 1/3 any evening; 0/3 Saturday |
| Spanish or Haitian Creole pages | No | No | No | 0/3 |
| Seasonal-resident content (e.g. "seasonal", "snowbird", records transfer) | No | No | No | 0/3 |
| Hurricane / storm closure content | No | No | No | 0/3 |
| Reviews shown | Google reviews widget (★) + testimonials | Google mention | None | 2/3 |
| Home-page content depth | ~1,230 words | ~500 words | ~320 words | 2/3 thin |
| Implant/cosmetic pages | Yes (implants + FAQ, cosmetic) | Yes (implants, whitening) | No service links | 2/3 |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 0 of 3 addressed seasonal or part-year residents, where 12.5% of housing units are seasonal-use (ACS) | A content and intake opportunity may exist — demand is unproven | Add a page and intake flow for part-year residents: records transfer, scheduling around arrival/departure, insurance from other states (as accepted) | Out-of-area phone numbers; month-by-month new-patient counts; page conversions Oct–Apr vs May–Sep |
| 0 of 3 had Spanish or Creole pages; "French, Haitian, or Cajun" 6.4% in the city (ACS) | Language need is smaller than Miami's and mixed; Creole not isolated by ACS | Test Spanish and Haitian Creole intake (phone/text) before building pages | Language requested at intake |
| 2 of 3 sites were platform templates with ~300–500 words | Many sites rely on name/proximity rather than content | Build substantive implant/cosmetic and new-patient pages | Service-query impressions |
| No Saturday hours; one evening | Limited out-of-hours access in sample | Publicise real extended hours; schedule ads and call assets to staffed hours | Missed-call timing |
| No storm-closure content in hurricane season data (June–Nov) | Continuity communication is not visible on sites | Prepare GBP special-hours and site banner workflow | Time from closure decision to GBP/site update |
