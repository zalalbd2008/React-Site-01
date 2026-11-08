# Orlando — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl1-orlando-practices-2026-11-08`. Internal only — never name these practices publicly.

## Method

WebSearch tool (US results, unordered; not a Google ranking): `dentist Orlando FL family dentistry`, `pediatric dentist Orlando FL`, then name queries. Results were mostly directories (Lantern, WebMD, MapQuest) — the directory booking pages refused automated access, so practice domains were checked directly. Home pages fetched with plain curl on 2026-11-08; static HTML only; no forms submitted.

## Sample (4 sites with Orlando addresses inside city limits)

| # | Site | Address | Mix |
|---|---|---|---|
| O1 | mcgeefamilydentistry.com | 2880 Delaney Ave, Orlando 32806 | Family, cosmetic (Invisalign, veneers, whitening) |
| O2 | baldwinparkfamilydental.com | 4808 New Broad St, Orlando 32814 | Family/general |
| O3 | lakenonafamilydentistry.com | 9625 Lake Nona Village Pl, Orlando 32827 | Family/general |
| O4 | orlandopediatricdentistry.com | 32814 (address not in static HTML; map embed) | Pediatric |

## Observations

| Feature | O1 | O2 | O3 | O4 | Count |
|---|---|---|---|---|---|
| Click-to-call | Yes | Yes | Yes | Yes | 4/4 |
| Real-time scheduler confirmed | No (/appointments/ page) | No ("Schedule with Us" → request page) | No (same) | No (/appointment request) | 0/4 |
| Friday hours | Closed Fri–Sun; Mon–Thu 8–5 with 1–2 pm lunch closure | Not in static HTML | Not in static HTML | Closed Fri–Sun; Mon–Thu 8–5 | 2/4 closed Fridays; 0/4 Saturday shown |
| Spanish-language pages | No | No | No | No | 0/4 |
| Shared site template / tag container | — | **Same template and Google Tag Manager container as O3** (also seen on one Tampa and two Jacksonville sites) | Same as O2 | — | 2/4 |
| Payment info | Membership plan | Insurance mention | Insurance mention | Savings/membership plan, CareCredit, "no insurance" content | 4/4 mention |
| Location/neighbourhood pages | No | No | No | No | 0/4 |
| Service pages linked from home | 8 | 4 | 4 | ~30 links incl. blog | — |
| Emergency mention | No | No | No | Yes | 1/4 |

Interpretation of shared template: identical template + identical GTM ID across practices with different names suggests common ownership or a shared group/DSO platform. This is inference, not established; do not assert group ownership publicly.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 0 of 4 offered confirmed real-time online booking | New residents comparing practices may meet a call-or-request step everywhere in this sample | Offer self-scheduling for new-patient cleanings/exams where rules allow; otherwise promise and meet a callback window | Request-to-contact time; booked rate of web requests |
| 2 of 4 closed Fridays, none showed Saturday | Weekday-only access is common in the sample | If capacity allows, publicise any early/late/weekend slots and schedule ads to them | Share of calls arriving when closed |
| 0 of 4 had Spanish pages; Orlando 28.0% Spanish at home | Possible gap — sample is small | Test Spanish landing pages for family/pediatric services before a full build | Spanish-page conversion vs English |
| 0 of 4 had location pages for growth areas | Sites rely on GBP proximity alone | One genuine page per office with local access info (not doorway pages for areas without an office) | GBP + Search Console queries containing area names |
| Group-template sites have thin service pages (4 linked) | Content depth may be limited by platform | Independent practices can compete on treatment-page depth and new-patient FAQs | Search Console impressions for service queries |
