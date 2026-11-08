# Fort Worth practice-website observations — 2026-11-08

**Method.** WebSearch tool (US, unordered list — not a ranking) for "dentist Fort Worth TX family dental practice" and "Fort Worth TX dentist new patients schedule appointment" (directories excluded). Homepages fetched with plain curl; features scripted and confirmed against text snippets. No contact, forms or bookings.

## Sample

| # | Site | Mix | ZIP / area |
|---|---|---|---|
| F1 | care32dentalfortworth.com | General, cosmetic, implants, Invisalign | 76244 (north Fort Worth, references Keller) |
| F2 | smilefortworth.com | General, cosmetic, orthodontics | 76109 |
| F3 | ngreendental.com (Fort Worth Cosmetic & Family Dentistry) | Cosmetic, family, implants, sedation | 76107 |
| F4 | dentalloungefw.com | General, emergency, implants | 76164 (north side) |
| F5 | fortworthchildrensdentistry.com | Pediatric | 76109 |

## Observed features

| Feature | F1 | F2 | F3 | F4 | F5 |
|---|---|---|---|---|---|
| Booking path | Online booking (Zocdoc) + request form | Online scheduling (CareStack) | Online scheduling (Modento) + request | Request form only; no scheduler detected | Online booking (NexHealth) |
| Hours on homepage | Mon–Fri 9–6, Sat 9–2 by appointment | Not on homepage | Holiday closures only | Mon/Thu to 7 PM, Fri closed | Not on homepage |
| Spanish | Not observed | Not observed | Not observed | "Hablamos Español" | Not observed |
| Medicaid/CHIP | Not stated | Not stated | Not stated | Not stated | "We accept Medicaid" and most commercial plans |
| Prices/offers | $79 new-patient exam + X-ray; Invisalign from $209/mo + $500 off | In-house plan "save $200 to $500 a year" | None | Complimentary exam & X-rays ($99 value), $150 off whitening | None |
| Homepage text depth (approx. words) | ~1,200 | ~800 | ~4,200 | ~500 | ~1,000 |

## Aggregates used on the page

- 4 of 5 offered an online scheduling link; 1 a request form only.
- 1 of 5 advertised Spanish (Houston sample 3 of 5; Dallas 4 of 5).
- 2 of 5 showed full weekly hours on the homepage; 1 offered Saturday (by appointment).
- 3 of 5 led with a price, discount or savings plan.
- 1 of 5 (the pediatric practice) stated Medicaid.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Offers lead on 3 of 5 homepages | Price/offer competition is visible in general dentistry | Compete on clarity (what's included, conditions per 22 TAC §108.53) rather than matching discounts | Offer-lead booking rate vs. non-offer leads |
| Hours missing from 3 of 5 homepages | Families comparing options may not see availability | Hours and next-available guidance visible on every location page | Scroll/click data on hours section; "are you open" calls |
| Spanish rare in sample | Lower comparative language need than Dallas/Houston (ACS 24.9% Spanish at home) | Spanish only if staffed; not a default priority | Intake language field |
| Pediatric site states Medicaid | Family/pediatric segment cares about plan participation | State plan participation precisely for family/pediatric practices | Disqualified-call rate |
| Wide range of homepage depth (500–4,200 words) | No consistent content standard among the sample | Treatment pages that answer cost/insurance/next-step questions instead of long homepages | Organic entrances to treatment pages |

Limitations: five homepages, one date; not representative.
