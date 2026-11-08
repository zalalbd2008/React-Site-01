# Austin practice-website observations — 2026-11-08

**Method.** WebSearch tool (US, unordered list — not a ranking) for "dentist Austin TX family cosmetic dental office" and "Austin TX dentist new patients book online" (directories excluded). Homepages fetched with plain curl; features scripted and confirmed against text snippets. No contact, forms or bookings. Note: the second query includes "book online", which biases the sample toward practices that offer it.

## Sample

| # | Site | Mix | ZIP / area |
|---|---|---|---|
| A1 | koladentistry.com | Family, cosmetic, emergency | 78705 (near UT campus) |
| A2 | austindentalco.com | General, cosmetic, implants | 78732 (Steiner Ranch) |
| A3 | myidealdental.com/central-austin (Ideal Dental, multi-location brand) | General, ortho, implants | 78731 |
| A4 | waldendentaltx.com | General, cosmetic | 78717 (Williamson County part of Austin; references Cedar Park, Round Rock) |
| A5 | brushycreekdentistryaustin.com | Family, cosmetic, pediatric, sedation | 78717 |

## Observed features

| Feature | A1 | A2 | A3 | A4 | A5 |
|---|---|---|---|---|---|
| Booking path | Online appointment request (Weave) or call | Online scheduling (LocalMed) | In-page online booking form | Online booking (Flexbook) | Online booking; "call or text" |
| Hours | Not detailed on homepage; "same-week first visits usually available" | Mon–Thu 7:30–4:30, Fri to 2, closed weekends | Mon–Fri 8–5, **Sat 9–3** | Mon–Thu 8–5, Fri by appointment | Mon–Thu 8–5, closed Fri–Sun |
| Spanish | "Se habla español"; hreflang es | Not observed | Not observed | Not observed | Not observed |
| Medicaid/CHIP | Not stated | **States it does not accept Medicaid or CHIP** | Not stated | Not stated | Not stated |
| Insurance tools | Insurance explained, financing | Interactive "choose your coverage" selector | Membership, financing | Insurance + financing | Insurance + membership |
| Prices/offers | $99 exam & X-rays for uninsured new patients | Membership from $65/month | $39 new-guest exam + X-rays | None | None |
| Reviews | "4.9 · 400+ Google reviews" | Not on homepage | Office rating + review count | Rating | Google reviews |

## Aggregates used on the page

- 5 of 5 offered an online booking or online appointment-request path (sample biased by query).
- 1 of 5 advertised Spanish.
- 1 of 5 advertised Saturday; 0 of 5 advertised weekday hours after 5 PM; 2 of 5 closed or by-appointment on Fridays.
- 3 of 5 published self-pay pricing or a membership fee; 1 stated explicitly that it does not take Medicaid/CHIP.
- 2 of 5 were in the Williamson County part of Austin and referenced neighbouring cities.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Online booking universal in sample | Self-scheduling is expected, not a differentiator | Compete on booking *quality*: real availability, new-patient slots, confirmation clarity | Booking abandonment; time-to-appointment |
| Weekday hours end by 5 PM; Fridays thin | With 27.5% of workers at home (ACS), daytime slots may suit some patients — or evenings may be an unmet need | Test, don't assume: trial an evening block and measure | Bookings by time slot |
| Self-pay pricing published by 3 of 5 | Transparent self-pay offers are a norm for comparison shoppers | Clear self-pay/membership page compliant with §108.53 | Membership enrolment; self-pay share |
| Edge-of-city practices reference adjacent cities | Patients cross city lines in north/northwest Austin | Location content by real catchment (Austin + Cedar Park/Round Rock) without separate thin pages | Search Console queries naming adjacent cities |
| Spanish on 1 of 5 | Lower language gap than Houston/Dallas (ACS) | Spanish where staffed, usually not first priority | Intake language |

Limitations: five homepages; sample skewed toward online booking by query wording.
