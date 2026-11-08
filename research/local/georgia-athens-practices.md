# Athens practice-website observations — 2026-11-08 (markets-ga1)

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Athens GA", "family dentistry Athens GA accepting new patients" and "Athens GA dentist Prince Avenue OR Milledge dental office website". Homepages fetched with plain curl; features extracted by script and confirmed by reading snippets. No forms submitted or practices contacted.

**Skipped:** lifepointdentalathens.com and athensdentistryforchildren.com (guessed domains did not connect); aspendental.com Athens URL (404); halldental.com fetched but excluded (Watkinsville general practice with thin homepage; kept the sample to four).

Source id: `obs-ga1-athens-practices`.

## Sample (four sites)

| # | Site | Service mix as presented | Location |
|---|---|---|---|
| T1 | athensfamilydental.com | Family, cosmetic, implants, sedation | 30607 |
| T2 | elderdentalgroup.com | General, implants, cosmetic | 30606 (Prince Ave) |
| T3 | lifepointga.com | Family, implants, Invisalign, emergency | Prince Ave, Athens |
| T4 | healthysmilesforkidz.com | Pediatric; sedation | Watkinsville, Oconee County (30677) |

## Observed features

| Feature | T1 | T2 | T3 | T4 |
|---|---|---|---|---|
| Tap-to-call link | Yes | Yes | Yes | Yes |
| Booking path | Appointment-request form | Phone only (no booking link detected) | "Book online" scheduler | Appointment-request form |
| Est. taps to booking action (mobile) | 2+ | 1 (call) | 1 | 2+ |
| Hours on homepage | Not found | Mon–Thu 8–5; Fri closed | Mon–Thu 8–5; Fri–Sun closed | Mon–Wed 8–5; Thu 7:30–2; no Friday hours listed |
| Evening/weekend | No | No | No | No |
| Insurance / payment | In-office plan: $75 per year for 15% off | "NOT in-network with any insurance company"; files most policies | "Accepts a variety of insurance plans and payment options" | Not on homepage |
| Languages | English only | English only | English only | English only |
| Students / UGA mentioned | No | No (only dentist biography) | No | No |

## Aggregates used on the page
- 4 of 4 had tap-to-call links.
- 1 of 4 offered direct online booking; 2 used request forms; 1 was phone-only.
- 0 of 4 advertised evening or weekend hours; none of the three showing hours listed Friday opening hours.
- 0 of 4 offered Spanish content, although 9.0% of Athens-Clarke residents 5+ speak Spanish at home (ACS 2019–2023).
- 0 of 4 addressed students, academic-calendar scheduling or out-of-town insurance.
- Insurance positions varied widely: an in-office plan with a published price, out-of-network-only, "variety of plans", and none stated.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| No student-specific content; UGA enrollment 43,888 (fall 2025) | Students and new graduate-student/faculty households may not find answers about out-of-area insurance, break-period scheduling or emergency visits | If the practice wants this segment, publish a factual page on insurance from home states, emergency access and scheduling around the semester | New-patient counts by month vs academic calendar; intake "how did you hear" |
| No Spanish content; 9.0% Spanish at home; 5.2% speak English less than "very well" | Possible unmet language need — not proven | Only if staff can serve Spanish speakers: a Spanish landing page and GBP attributes | Intake preferred-language field; calls needing interpretation |
| Out-of-network-only and in-office plan positions | Price/coverage clarity is a competitive variable | State the practice's position plainly; avoid "we take all insurance" | Insurance-related call share; booking rate |
| Pediatric practice located in Oconee County serving Athens | Families move to surrounding counties (Oconee +7.4%) | Location content for the communities patients actually drive from | Patient ZIP mix |
| Thursday/Friday closures | Four-day weeks common | Make hours exact in GBP and ads schedules | Calls missed by weekday |

Limitations: four homepages; not representative.
