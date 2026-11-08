# Tampa — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl1-tampa-practices-2026-11-08`. Internal only — never name these practices publicly.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Tampa FL South Tampa family dentist`, `dental implants Tampa FL dentist`, then a name query. Implant results were dominated by national chains' location pages and directories; three independent-looking practice domains were checked directly with plain curl on 2026-11-08. Static HTML only; no forms submitted. A fourth candidate domain did not resolve.

## Sample (3 sites with Tampa addresses)

| # | Site | Address | Mix |
|---|---|---|---|
| T1 | southtampasmiles.com | 4315 Henderson Blvd, Tampa | Family, orthodontics, implants, same-day emergency |
| T2 | dentistryonswann.com | 3612 W Swann Ave, Tampa 33609 | General, cosmetic |
| T3 | southtampadentistry.com | 3308 S Dale Mabry Hwy, Tampa 33629 | General (crowns, cleanings, dentures) |

## Observations

| Feature | T1 | T2 | T3 | Count |
|---|---|---|---|---|
| Click-to-call | Yes | Yes | Yes | 3/3 |
| Real-time scheduler confirmed | **Yes** (third-party scheduler link + /book-an-appointment/) | No ("Schedule Appointment" → contact page) | No ("Schedule with Us" → request page) | 1/3 |
| Extended hours | **M–F 7am–7pm, "Open Saturdays!"** | Not in static HTML | Not in static HTML | 1/3 shown |
| Spanish pages | No | No | No | 0/3 |
| Shared group template | — | — | Same template/GTM as two Orlando and two Jacksonville sample sites | 1/3 |
| Payment info | Financing (Cherry), new-patient special | One insurer named, financing | Insurance mention | 3/3 |
| Emergency/same-day | Yes (6 mentions) | 1 mention | No | 2/3 |
| Neighbourhood naming | Brand name uses "South Tampa"; T3 name uses "South Tampa" | Street-name brand | — | 2/3 use a neighbourhood in the brand |
| Service links from home page | 16 | 1 | 3 | — |

Note: two of three sampled practices put the neighbourhood (South Tampa) in the practice name, which mirrors how residents describe location. Hypothesis only.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Neighbourhood names appear in practice brands | Tampa residents may search and choose by neighbourhood (South Tampa, Westshore, etc.) | Use the practice's true neighbourhood consistently on GBP, site and citations; no fake area pages | Search Console queries with neighbourhood names; GBP "search terms" |
| The one site with 7–7 and Saturday hours advertised them in the header | Extended access is used as a headline differentiator | If the practice has extended hours, make them the first thing on mobile and in ad assets | Call timing vs. ad schedule |
| 2 of 3 had thin home-page service linking (1 and 3 links) | Treatment-page depth is uneven | Build complete treatment pages with insurance/payment and next steps | Service-query impressions/clicks |
| 0 of 3 had Spanish pages; Tampa 19.9% Spanish at home | Lower-priority than Miami but testable | Spanish intake and a small set of Spanish pages, if the team can serve Spanish speakers | Spanish-language calls/forms |
