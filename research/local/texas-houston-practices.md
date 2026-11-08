# Houston practice-website observations — 2026-11-08

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Houston TX family dentistry", "dental implants Houston TX practice", "pediatric dentist Houston TX Medicaid CHIP" and "Houston TX dentist Bellaire Chinatown Alief office hours book online" (directory domains excluded on the last query). Homepages fetched with plain curl (no user-agent changes), features extracted with a script and confirmed by reading text snippets. Homepages only; we did not contact any practice, submit forms or start bookings. Tap counts are estimates from page structure.

**Skipped:** smilesbydrsuki.com (connection reset), heights.mintdentistry.com (HTTP 403 bot challenge) — not retried or worked around.

## Sample (five sites)

| # | Site | Service mix (as presented) | ZIP |
|---|---|---|---|
| H1 | gregorypalmerdmd.com (Palmer Dental Group) | General, restorative, CEREC, implants, orthodontics | 77025 |
| H2 | wellsmilesgreenway.com | General, implants, Invisalign | 77046 |
| H3 | jamboreedentistry.com | Pediatric + orthodontics, several Houston locations (ZIPs 77022, 77070, 77073, 77074, 77087 visible) | multi |
| H4 | txdentist101.com/bellaire.html (Texas Dentist 101, Bellaire Blvd) | Family, implants | 77036 |
| H5 | texasdentalcenter.com | Family, emergency, implants, pediatric | 77036 |

## Observed features

| Feature | H1 | H2 | H3 | H4 | H5 |
|---|---|---|---|---|---|
| Phone + address on homepage | Yes | Yes | Yes (per location) | Yes | Yes |
| Online scheduling link | NexHealth | NexHealth | NexHealth per location | "Book an Appointment" button; no scheduler detected | "Book online" (third-party) + text option |
| Hours on homepage | Mon–Fri, to 5 PM at latest | Mon–Fri 8–5 | Not on homepage | Weekdays 10–6, **Sat 9–4** | Mon–Fri 8–6, **Sat 8–3**, walk-ins Mon–Sat |
| Languages | English only observed | English only observed | Spanish site (/es/, hreflang) | English/Spanish/Cantonese/Mandarin/Taiwanese; English/中文/Español toggle | Selector incl. Español, Tiếng Việt, 简体中文, Arabic, Farsi, Portuguese |
| Medicaid / CHIP stated | No | No | Medicaid, CHIP, PPO | Medicaid + PPO | Kids' Texas Medicaid and CHIP |
| Insurance/financing info | PPO/in-network | Insurance, Delta, financing, membership | Insurance, membership | PPO | PPO, in-house plan, CareCredit, Sunbit |
| Published prices/offers | None | "Free consultation" for implants | $250 off ortho with code (dated) | None | Many "from $" fees, promo dated through 2026-12-31 |
| Location content | Drive times to Meyerland, Braeswood, West U, TMC | Areas-we-serve nav | Location pages | Mentions Missouri City second office | Chinatown/Bellaire/Alief pages |

## Aggregates used on the page

- 4 of 5 offered an online scheduling link from the homepage; 1 relied on a button whose scheduler we could not detect.
- 3 of 5 presented content or a language switch in Spanish; 2 of those 3 also offered at least one Asian language (Chinese; one also Vietnamese).
- 2 of 5 advertised Saturday hours; none of the 5 advertised weekday hours past 6 PM.
- 3 of 5 stated Medicaid participation (2 named CHIP).
- 2 of 5 published specific prices or discounts.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Multilingual sites cluster in the Bellaire/Chinatown (77036) sample | Language is a competitive attribute in parts of Houston, not citywide | Decide language pages per location from front-desk capability, not demographics | Track calls/forms by page language; ask "preferred language" at intake |
| Weekday hours end by 6 PM on all 5 | Evening availability is not common in this sample | If the practice has evening capacity, state it on GBP and location pages; don't buy ads for hours not staffed | Compare booked-time distribution before/after hours change |
| Medicaid/CHIP stated on 3 of 5 | Plan participation is a deciding fact for families | State exactly which plans (if any) per location; avoid vague "we accept most insurance" | Count calls that are disqualified by insurance |
| Drive-time copy on one site | Houston patients think in corridors and drive times | Location pages built around real access (freeways, parking, landmarks) | Search Console queries by neighbourhood terms |
| Published dated promos on 2 sites | Price-led competition exists in some segments | If pricing is published, apply 22 TAC §108.53 disclosures; check with counsel | Consult-to-start rate for promo vs non-promo leads |

Limitations: small convenience sample; homepages only; two of five in one ZIP (77036) because of the targeted query. Not representative of Houston dentistry.
