# San Antonio practice-website observations — 2026-11-08

**Method.** WebSearch tool (US, unordered list — not a ranking) for "dentist San Antonio TX family dental office" and "San Antonio TX dentist new patients schedule appointment se habla español" (directories excluded). Homepages fetched with plain curl; features scripted and confirmed against text snippets. No contact, forms or bookings. Note: the second query contained "se habla español", which biases the sample toward Spanish-speaking practices; all five also sit on the north side (ZIPs 78230, 78232, 78248, 78250).

## Sample

| # | Site | Mix | ZIP |
|---|---|---|---|
| S1 | advancedsmilecare.com | General, implants, Invisalign, sedation | 78230 |
| S2 | colonydentalcaresa.com | Family, implants, emergency | 78230 |
| S3 | spotlightdentistry.com | General, implants, crowns | 78248 |
| S4 | yoursanantoniodentists.com (Thousand Oaks Dental) | General, pediatric, implants | 78232 |
| S5 | abdentalandoralsurgery.com | General, oral surgery, implants | 78250 |

## Observed features

| Feature | S1 | S2 | S3 | S4 | S5 |
|---|---|---|---|---|---|
| Booking path | Request form + online scheduler link | Online booking (NexHealth) | "Book online" | Online booking (Yapi) | "Schedule an appointment" — no scheduler detected |
| Hours | Weekdays, latest 6 PM Wed | Not on homepage | Mon–Fri 8–5, **Sat 10–2** | Not on homepage | To 7 PM Mon/Wed/Thu, **Sat 9–1** |
| Spanish | "We Speak Spanish", "Hablamos Español", Spanish service pages | Spanish-speaking team | Bilingual team | Spanish-speaking team | English, Spanish, Japanese |
| Medicaid | **States it does not accept Medicaid** | Not stated | Not stated | Not stated | Not stated |
| Financing / membership | CareCredit, Cherry, membership | CareCredit, Cherry, Sunbit, membership | Membership | In-network | Cherry, membership, payment plans |
| Benefit timing message | — | — | "Year is almost over… make the most of your coverage" | — | — |
| Reviews | Testimonials | Reviews | — | "Over 800 five-star reviews" | Testimonials |

## Aggregates used on the page

- 5 of 5 stated Spanish-speaking staff (sample biased by query); 1 of 5 had Spanish-language service pages.
- 5 of 5 presented financing and/or membership options; 0 of 5 published specific fees.
- 2 of 5 advertised Saturday hours; 1 of 5 advertised weekday hours to 7 PM.
- 4 of 5 offered an online booking path.
- 1 of 5 ran a year-end insurance-benefits message; 1 of 5 stated it does not accept Medicaid.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Spanish-speaking staff claimed by all, Spanish pages by one | Bilingual service is common; Spanish *content* is a gap | Spanish treatment/insurance pages where staff can follow through | Spanish-page entrances → calls/bookings |
| Financing/membership universal, prices absent | Payment framing (monthly, membership) rather than price lists | Clear membership/financing explainer; if prices are published, apply §108.53 | Membership enrolment; financing applications |
| Year-end benefits messaging (1 of 5) | Insurance-cycle timing is used for recall | Q4 recall/reactivation to existing patients before new-patient ads | Q4 recall booking rate |
| North-side concentration of sample | Our sample under-represents south and west San Antonio | Market reviews for a client must sample their actual catchment | — |
| Long weekday hours on 1 of 5 | Extended hours exist but are not the norm | Promote hours only if staffed consistently | Bookings by slot |

Limitations: five homepages; one date; north-side and Spanish-query bias.
