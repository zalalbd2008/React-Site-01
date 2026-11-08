# Dallas practice-website observations — 2026-11-08

**Method.** WebSearch tool (US, unordered list — not a ranking) for "dentist Dallas TX family cosmetic dentistry", "orthodontist Dallas TX Invisalign braces" and "Dallas TX dentist new patients schedule appointment" (directories excluded). Homepages fetched with plain curl; features scripted and confirmed against text snippets. No contact, forms or bookings.

## Sample

| # | Site | Mix | ZIP / area |
|---|---|---|---|
| D1 | bleudentist.com | General, cosmetic, emergency, implants | 75219 (Oak Lawn) |
| D2 | artsfamilydentistry.com | Family, emergency, Medicaid/CHIP | 75208 (Bishop Arts / Oak Cliff) |
| D3 | mywowdental.com | General, implants, veneers | 75237 (southern Dallas) |
| D4 | delreydds.com | General, family | 75218 (Lake Highlands/East Dallas) |
| D5 | orthodontistdallastx.com (Walnut Central Orthodontics) | Orthodontics | 75231 (North Dallas) |

## Observed features

| Feature | D1 | D2 | D3 | D4 | D5 |
|---|---|---|---|---|---|
| Booking path | Online booking (third-party) | Online booking (Zocdoc link) + call | Request form / phone; no scheduler detected | "Book Online" page + request form | Request form + "Book Now" (new tab) |
| Saturday | **Sat to 8 PM**, walk-ins | **Sat 10–2** | "Saturday by appointment only" | Limited, alternating Saturdays | Hours table says closed; copy says Saturday appointments possible (inconsistent) |
| Weekday evenings | To 7 PM Mon/Wed | To 6 PM | Mon to 7 PM | No | No |
| Spanish | "Se habla español"; dentist fluent | "Se habla español, for the whole appointment"; /es/ link | "Se habla español" | "¿Hablas español?" | Not observed |
| Medicaid/CHIP | Not stated | Medicaid and CHIP accepted | Not stated | Medicaid & CHIP in insurance list | Not stated (PPO) |
| Prices/offers | $159 new-patient special | Membership from $30/month | None | $80 new-patient exam + X-rays | None |
| Reviews shown | "280+ Google Reviews" | Google review count (2,330+) | Testimonials | Reviews link | Testimonials |

## Aggregates used on the page

- 4 of 5 advertised Spanish-language service (none of the four was a full Spanish site except one with an /es/ link).
- 4 of 5 offered some Saturday availability, but in four different forms (full day, half day, by appointment, alternating).
- 3 of 5 advertised a weekday finish of 6 PM or later.
- 2 of 5 stated Medicaid and CHIP.
- 3 of 5 published a price or a membership fee.
- 1 of 5 showed inconsistent hours between the hours block and the copy.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Saturday/evening access is common but expressed inconsistently | Access is a competitive claim in this sample; precision is a differentiator | Publish one source of truth for hours (GBP, site, ads schedule) | Monitor "are you open" calls; GBP hours edits |
| Spanish service is claimed by most, full Spanish pages by few | "Se habla español" is table stakes; depth of Spanish content is not | Spanish pages only where the team can complete the appointment in Spanish | Leads from Spanish pages → bookings, by language at intake |
| Prices/memberships published by 3 of 5 | Uninsured and price-sensitive patients are a target segment | If publishing prices, apply 22 TAC §108.53 disclosures | Membership sign-ups per month |
| Inconsistent hours on one site | Data hygiene problems are visible to patients | Quarterly NAP/hours audit | Count mismatches across listings |
| Neighbourhood names in titles/copy (Oak Lawn, Bishop Arts, Southern Dallas) | Dallas patients search by neighbourhood | Neighbourhood-led location content | Search Console queries containing neighbourhoods |

Limitations: five homepages; one date; not representative.
