# Route and query ownership

One page owns each intent. Other pages may mention the topic briefly and link to the owner; they must not compete with it.

| Intent | Owner route | Notes |
|---|---|---|
| dental marketing agency (national) | `/` | Homepage. |
| dental marketing services (overview) | `/services/` | Directory; links every genuine service. |
| dental SEO company / dental SEO services (national) | `/services/dental-seo-company/` (S1) | |
| dental Google Ads management / dental PPC | `/services/dental-google-ads-management/` (S2) | |
| multi-location dental SEO / DSO local SEO | `/services/local-seo-multi-location-clinics/` (S3) | Specific SEO service for groups. |
| dental group marketing / DSO marketing (broad) | `/who-we-help/dental-groups-dsos/` | Audience page owns the broad intent; links to S3. |
| dental website design / conversion optimization | `/services/dental-web-design-conversion/` (S4) | |
| dental local SEO / Google Business Profile optimization (single practice) | `/services/dental-local-seo-google-business-profile/` (S5) | |
| dental AI search optimization / AEO / GEO | `/services/dental-ai-search-optimization/` (S6) | |
| dental reputation management | `/services/dental-reputation-management/` (S7) | |
| dental content marketing | `/services/dental-content-marketing/` (S8) | |
| dental marketing attribution / conversion tracking | `/services/dental-conversion-tracking/` (S9) | |
| marketing for {practice type} | `/who-we-help/{type}/` | Business model and service mix; not a service page rewrite. |
| dental marketing agency {state} | `/markets/{state}/` | Regional considerations and delivery; links completed cities. California hub = Greater Los Angeles focus. |
| dental marketing agency in {city} | `/markets/{state}/{city}/` | Also covers "dental SEO {city}" in a substantial section, until a separate page is justified. |
| one specific educational question | `/blog/{slug}/` | Exactly one question per article (see table below). |
| metric definitions | `/resources/dental-marketing-metrics/` | Articles link here rather than redefining metrics at length. |
| funnel/cost estimation | `/resources/dental-growth-calculator/` | |
| website audit checklist | `/resources/dental-website-audit-checklist/` | Article 12 explains *why* visitors do not book; the checklist is the working tool. |
| agency comparison | `/resources/dental-agency-comparison-scorecard/` | Article 27 explains questions; the scorecard is the tool. |
| what the audit includes | `/dental-marketing-audit/` | |

## Article ownership and principal links

| # | Route | Owns the question | Principal service link(s) |
|---|---|---|---|
| 1 | /blog/why-dental-websites-do-not-rank/ | Why isn't my dental website ranking? (technical + local diagnosis) | S1, S4 |
| 2 | /blog/dental-seo-cost/ | What should dental SEO cost and how do I compare proposals? | S1 |
| 3 | /blog/how-long-dental-seo-takes/ | How long does dental SEO take; what to measure first? | S1 |
| 4 | /blog/google-maps-visibility-for-dentists/ | Why doesn't my practice show in Google Maps? | S5 |
| 5 | /blog/dental-google-business-profile-suspension/ | What evidence to prepare before appealing a GBP suspension? | S5 |
| 6 | /blog/dentist-practice-google-business-profiles/ | Practitioner vs practice profiles; eligibility and duplicates | S5 |
| 7 | /blog/dental-google-ads-keyword-match-types/ | Which match types for dental ads? | S2 |
| 8 | /blog/dental-google-ads-negative-keywords/ | How to build negatives without excluding good leads | S2 |
| 9 | /blog/emergency-dental-advertising/ | How to run emergency dental ads that match hours and capacity | S2 |
| 10 | /blog/dental-google-ads-budget/ | How to set an ad budget from qualified inquiries and attended visits | S2, S9 |
| 11 | /blog/dental-implant-advertising/ | How to advertise implants: intent, landing pages, consult quality | S2, cosmetic/implant audience |
| 12 | /blog/dental-website-conversion-audit/ | Why don't website visitors book? (mobile conversion audit) | S4 |
| 13 | /blog/wordpress-vs-nextjs-dental-websites/ | WordPress vs headless vs Next.js for a practice | S4 |
| 14 | /blog/dental-online-booking-vs-request-forms/ | Online booking vs request forms | S4 |
| 15 | /blog/dental-call-tracking/ | How to measure calls without counting every call as a new patient | S9 |
| 16 | /blog/multi-location-dental-website-structure/ | Subfolders, subdomains or separate domains for groups | S3 |
| 17 | /blog/dental-group-location-pages/ | How to write useful location pages without duplication | S3 |
| 18 | /blog/dental-practice-rebrand-seo-migration/ | How to keep visibility through acquisitions, rebrands, migrations | S3, S4 |
| 19 | /blog/dental-group-marketing-dashboard/ | How to compare offices fairly in a group dashboard | S3, S9 |
| 20 | /blog/ai-search-visibility-for-dentists/ | What GEO/AEO/AI search mean for a practice | S6 |
| 21 | /blog/checking-dental-practice-ai-answers/ | How to check if AI answers describe the practice accurately | S6 |
| 22 | /blog/structured-data-for-dental-websites/ | How to match client dental website schema to the real practice | S1, S6 |
| 23 | /blog/measuring-ai-referrals-and-citations/ | What AI referral and citation data can and cannot establish | S6, S9 |
| 24 | /blog/dental-review-request-process/ | How to request reviews without incentives or gating | S7 |
| 25 | /blog/responding-to-negative-dental-reviews/ | How to respond to negative reviews without disclosing patient info | S7 |
| 26 | /blog/new-dental-practice-marketing-plan/ | What to do in the first 90 days of a new practice | Startup audience page |
| 27 | /blog/choosing-a-dental-marketing-agency/ | What to ask an agency about ownership, fees, reporting, evidence | Services hub, audit |
| 28 | /blog/dental-marketing-roi/ | How to tell leads, bookings, visits, revenue and profit apart | S9 |

## Rules

- No city × service × specialty matrix pages.
- No `/locations/`, `/cities/` or `/areas-we-serve/` directories; `/markets/` only.
- Distinct city pages are never canonicalised to the state hub or homepage.
- Houston-area suburbs (Katy, Sugar Land, Pearland, The Woodlands, Cypress) are candidates only after individual research justifies a page.
