# Long Beach — practice website sample

Batch: markets-ca1 · Observed 2026-11-08 · Method: WebSearch tool (US results, unordered) for "dentist Long Beach CA family dentistry", "Belmont Shore Long Beach dentist dental office", '"Belmont Dental Care" Long Beach 4th St'. Results were dominated by directories (ADA Find-a-Dentist, WebMD, MapQuest); one independent practice's own site could not be found via search. Pages fetched with curl. No forms submitted. Names for audit trail only.

| # | Site | Type | Booking path | Hours (as published) | Languages | Insurance/payment | Other |
|---|---|---|---|---|---|---|---|
| LB1 | westerndental.com office page, 2306 E 7th St | DSO office page | Phone links (3 numbers on page) + "Make an Appointment" | Mon 9–6, Tue closed, Wed–Thu 9–6, Fri closed, Sat 8–4:30 | Spanish content present | States Medi-Cal and Medicaid accepted; financing | New-patient offer text says "valid … until 12/31/25" — still displayed 2026-11-08 |
| LB2 | dentistlongbeachca.smcnational.com (independent practice on a vendor platform) | Independent | Phone link; Flexbook online booking | Mon–Wed 8–5, Thu 7–4, Fri closed, Sat 8–2 every other Saturday | None stated | Delta Dental, PPO named | $75 new-patient cleaning/exam/X-ray and $29 emergency offers |
| LB3 | smilegeneration.com page for a Long Beach office (90808) | Network-supported office page | Phone (local + 1-800 number); schedule online | Mon 8:30–5, Tue 8–5, Wed 10–7, Thu 9–6, Fri 8–4, Sat by appointment | "Language spoken: English" | PPO & HMO | "264 Google Reviews" shown; $59 promotion mentioned in a review |

Directory-only observation (not a website): ADA Find-a-Dentist listing for a Belmont Shore–area (90814) office lists Spanish and Tagalog; third-party listings show weekday-only hours (8–5).

## Aggregate observations
- 3 of 3 had tap-to-call links; 2 of 3 showed more than one phone number (local + toll-free or several), which can split call tracking and confuse patients.
- 3 of 3 published evening (to 6–7 pm) or Saturday availability in some form.
- 2 of 3 led with a priced new-patient offer; 1 displayed an offer whose stated validity date had passed.
- Language: 1 of 3 offered Spanish; 1 stated English only; 1 silent. The Belmont Shore–area directory listing showed Tagalog.
- Medi-Cal acceptance was stated by 1 of 3.

## Strategy table
| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Multiple phone numbers per page | Calls may route to central lines; attribution and patient confidence may suffer | One primary local number per location (tracking numbers swapped consistently, GBP primary = real local line) | Call logs: share of calls reaching the office directly |
| Expired offer still visible | Offer governance is weak; risk of disputes and lost trust | Offer calendar with end dates and owner; remove expired offers | Monthly site check; complaints mentioning offers |
| Priced new-patient offers common | Price-led competition for hygiene/new-patient visits | Decide whether to compete on price or on access/language/specialty; don't copy | Booked-visit quality by offer vs non-offer source |
| Dense city, neighbourhood names in local listings | Distance and neighbourhood relevance matter within a 50 sq mi city | Neighbourhood-aware location page; GBP service areas only if eligible | GBP direction requests by area; patient ZIPs |
| Medi-Cal stated by one site only | Payment-path messaging differs | State plan participation plainly (including "we do not accept") | Insurance-question calls |
