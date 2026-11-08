# Irving practice-website observations — 2026-11-08

**Internal research. Never name, link or criticise these practices on public pages; aggregates only.**

**Method.** WebSearch tool (US, unordered list — not a ranking): "dentist Irving TX Las Colinas", "dentista Irving TX", "Irving TX dentist MacArthur Blvd Belt Line Road dental office" (directories excluded). Five homepages fetched with plain curl, scanned and confirmed from text; one returned a 504 and was skipped. No contact or forms.

## Sample (5 sites)

| # | Site | Type | ZIP |
|---|---|---|---|
| I1 | smilesofirvingdental.com | Independent general/cosmetic | 75062 |
| I2 | dailysmilesmacarthur.com | Independent general + orthodontics, kids and adult sides | 75062 |
| I3 | myirvingfamilydental.com | Independent family | 75062 |
| I4 | rodeodental.com/locations/irving-tx | Location of a 50+ office group (TX, CO, AZ) focused on families/kids | 75062 |
| I5 | leafsmiles.com | Independent cosmetic/general, Las Colinas positioning | 75039 |

## Observed features

| Feature | I1 | I2 | I3 | I4 | I5 |
|---|---|---|---|---|---|
| Booking | Request-appointment form | Request-appointment form | "Schedule online" (third-party scheduler) | "Book online"/"Book now" (scheduler) | "Schedule online" |
| Weekday hours | Mon–Thu 9–5, Fri 8–3 | Not on homepage | Mon 9–5; **Tue/Thu 11–7**; Wed closed; Fri 9–5 | **Mon–Fri 10–7** | Mon–Thu 9–5, Fri 9–1 (copy also says "evening hours available") |
| Saturday | Closed | Not shown | **9–3** | **9–4** | Closed |
| Languages stated | **English, Spanish, Hindi, Telugu** | "Everyone speaks Spanish"; "¿Hablas español?" | **English, Spanish, Hindi**; Spanish paragraph on homepage | "Se habla español"; Spanish-speaking staff; Spanish-language section | Not stated |
| Medicaid/CHIP | Not stated | Not stated | Not stated | **Medicaid & CHIP** in insurance menu | "All PPO insurances accepted" |
| Self-pay | In-house membership plan; CareCredit, Sunbit | CareCredit; in-network | Membership plan; payment plans | Discount plans; financing; CareCredit, Sunbit | — |
| Location content | Address | Nearby schools, country club, grocery store | Near Irving Mall / Irving Towne Center | Nearby places with drive times (Las Colinas 5 min, Coppell 10, Grand Prairie 12, Dallas 15) | "Dentist in Las Colinas" |

## Aggregates used on the page

- 4 of 5 advertised Spanish-language service; 2 of those also named Hindi (one also Telugu). 1 of 5 had a Spanish-language section/URLs.
- 2 of 5 published Saturday hours; 2 of 5 had evening hours to 7 pm; 1 of 5 said "evening hours available" while its listed hours ended at 5 pm (inconsistent).
- 1 of 5 listed Medicaid & CHIP; 1 of 5 said "all PPO insurances accepted"; 4 of 5 named self-pay options (membership/discount plans or financing).
- 3 of 5 offered an online scheduler; 2 used request forms.
- 2 of 5 positioned on Las Colinas specifically; 3 on residential landmarks (schools, malls, neighbourhood places).

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Spanish common; Hindi/Telugu stated by two | Practices market multilingual capability; Spanish alone may not differentiate | Publish exact staff languages per location; consider reviewed language pages for the languages actually staffed, with hreflang | Call/form language tagging; sessions on language URLs |
| Las Colinas vs residential positioning | Two distinct audiences/offers within one city | Separate landing pages and ad groups for each offer; schedules matched to each | Lead quality and attended-visit rate per landing page |
| Inconsistent hours on one site | Hours data can drift between copy, GBP and ads | Single source of truth for hours; quarterly audit | Calls asking "are you open" |
| Medicaid/CHIP at one site; membership plans common | Payer segmentation varies | State payer position clearly; do not run ads that attract patients you cannot accept | Bookings by payer |
| Group site lists nearby cities with drive times | Catchment framed in minutes, not city lines | Use time-based catchments from patient data for ads radius | Patient ZIP drive-time distribution |
