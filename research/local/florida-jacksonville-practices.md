# Jacksonville — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl1-jacksonville-practices-2026-11-08`. Internal only — never name these practices publicly.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Jacksonville FL family dentistry`, `orthodontist OR pediatric dentist Jacksonville FL`, then a name query. Candidate domains checked with plain curl on 2026-11-08; static HTML only; no forms submitted.

**Exclusion:** the domain matching one directory-listed Jacksonville practice name resolved to a practice in **Jacksonville, Texas** (TX 75766 address, 903 area code). Excluded from the sample — but recorded as an observation: the city name is shared with other U.S. places, so "Jacksonville" alone is ambiguous in titles, schema and citations. One further candidate returned a Cloudflare challenge (403) and was skipped.

## Sample (4 sites with Jacksonville, FL addresses)

| # | Site | Address | Mix |
|---|---|---|---|
| J1 | ortegafamilydental.com | 2324 Post St, Jacksonville 32204 | Family, cosmetic, emergency |
| J2 | bartramfamilydental.com | 13720 Old St Augustine Rd, Jacksonville 32258 | Family/general |
| J3 | jaxdentalstudio.com | 3647 Hendricks Ave, Jacksonville 32207 | General, cosmetic, emergency |
| J4 | baymeadowsfamilydentistry.com | 9471 Baymeadows Rd, Jacksonville 32256 | Family, implants, dentures, emergency |

## Observations

| Feature | J1 | J2 | J3 | J4 | Count |
|---|---|---|---|---|---|
| Click-to-call | Yes | Yes | Yes | Yes | 4/4 |
| Booking path | Third-party appointment-request link; new-patient forms | "Schedule with Us" request page (shared template) | **Real-time scheduler** (NexHealth; "book online" ×7) | "Book online" → /appointment/ page (mechanism not confirmed) | 1/4 confirmed real-time |
| Hours | Fri 8–5 shown | Not in static HTML | Mon–Thu 8–4:30 | Mon–Thu 9–6; Fri–Sun closed | 0/4 Saturday shown; 1/4 open past 5 pm |
| Spanish | No | No | No | No (only a patient review mentions Spanish-speaking staff) | 0/4 |
| Insurers named | No | No | **Yes** (several carriers named) | **Yes** (several carriers, "in-network") | 2/4 |
| Financing / membership | Financing | — | CareCredit, Cherry, membership | CareCredit, Cherry, savings plan | 3/4 |
| Area/neighbourhood pages | Office tour only | No | **Yes** ("areas we serve": Arlington, Avondale, Lakewood…) | No | 1/4 |
| Emergency content | Emergency page | No | Yes (12 mentions; same-day) | Yes | 3/4 |
| Shared group template | — | Same template/GTM as Orlando and Tampa sample sites | — | — | 1/4 |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Search returned a Jacksonville, Texas practice for a Jacksonville name | City-name ambiguity is real at the data level | Always use "Jacksonville, FL" and the neighbourhood in titles, GBP description, schema address and citations | Search Console queries/countries; GBP search terms |
| 1 of 4 had area pages, written for nearby neighbourhoods | Some practices try to reach beyond their immediate area in a 747 sq mi city | Concentrate on the office's real drive-time area; one page per real office; area pages only with genuinely local information | Impressions by query location; calls by caller ZIP (if tracked) |
| 2 of 4 named insurers | Insurance-network clarity is uneven | Publish the networks the practice is in-network with and update them | Clicks on insurance page; calls asking "do you take…" |
| No Saturday hours in the sample; family-heavy city (22.6% under 18) | After-school and weekend access may be under-served — untested | Publicise any early/late slots; consider pediatric/family visit types online | Booking time-of-day distribution |
