# Savannah practice-website observations — 2026-11-08 (markets-ga1)

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Savannah GA", "dental implants Savannah GA practice", "Savannah GA dentist office website "new patients" Abercorn OR Habersham dental", "pediatric dentist Savannah GA kids dentistry office" and "Savannah GA family and cosmetic dentistry Pooler Richmond Hill dental office". Results were dominated by directories, job boards and DSO location pages. Homepages fetched with plain curl and parsed with a script; snippets read to confirm. No forms submitted or practices contacted.

**Skipped:** affordabledentures.com/locations/ga/pooler (HTTP 429 / bot checkpoint — not worked around); savannahdental.com (redirect to a host that did not resolve); dentaldesignsofsavannah.com, smithdentalcare.com/savannah, savannahdentalsmiles.com (no connection); habershamdental.com (TLS certificate error); dogwoodpediatricdentistry.com (the domain served a non-Georgia practice — excluded).

Source id: `obs-ga1-savannah-practices`.

## Sample (three sites)

| # | Site | Service mix as presented | Location |
|---|---|---|---|
| S1 | abercorndental.com | Family, cosmetic, implants | 31401 (downtown Savannah) |
| S2 | howardfamilydental.com | General family group; implants, sedation | Multi-location: Midtown and Southside Savannah, Pooler (2), Richmond Hill, Rincon, Wilmington Island, Hinesville, Statesboro, Brunswick; Beaufort and Bluffton (SC) |
| S3 | pediatricdentistryofsavannah.com | Pediatric; sedation; special-needs care | 31406 |

## Observed features

| Feature | S1 | S2 | S3 |
|---|---|---|---|
| Tap-to-call phone link | Yes | Yes (13 numbers — per location) | Yes |
| Address on homepage | Yes | Per-location finder | Yes |
| Booking path | "Appointments" request page | "Schedule online" | "Request Appointment" form |
| Est. taps to booking action (mobile) | 2+ | 1–2 plus location choice | 2+ |
| Hours on homepage | Mon–Thu 8–5; Fri by appointment; Sat/Sun closed | Not on homepage | Mon–Thu 8–4:30; Fri–Sun closed |
| Evening/weekend hours | No | Not stated | No |
| Insurance / payment | "We accept most traditional insurance plans. Please contact our office to verify"; financing named | "No insurance? No problem!" dental savings club | "Financial and Insurance" page link |
| Military / TRICARE mentioned | No | No | No |
| Languages | English only | English only | English only |
| Location content | Downtown address | Location pages across the coast | Single office |

## Aggregates used on the page
- 3 of 3 had tap-to-call links.
- 1 of 3 offered online scheduling from the homepage; 2 of 3 used request forms.
- 0 of 3 advertised evening or weekend hours; 2 of 2 that showed hours were closed or by-appointment on Fridays.
- 1 of 3 (a multi-location group) presented offices in the growth areas outside the city (Pooler, Richmond Hill, Rincon).
- 0 of 3 mentioned military families, TRICARE or the TRICARE Dental Program on the homepage.
- 0 of 3 offered non-English content.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Growth is in Bryan (+16.4%) and Effingham (+14.8%) counties; only the group site has pages there | Independent city practices may under-represent the suburbs they actually draw from | Build service-area and directions content around real drive routes from the growth corridors (only where the practice truly serves them) | Patient ZIP mix before/after; Search Console impressions for suburb terms |
| No TRICARE/TDP statement on any homepage | Military families (Hunter AAF in Savannah) may not learn network status without calling | State actual network participation (or non-participation) clearly on insurance page | Calls with "insurance question" disposition; booked rate for those calls |
| Request forms on 2 of 3 | Extra step and a callback delay | If capacity allows, test real-time scheduling or same-day form callbacks | Form → booked time; abandonment |
| Friday closures on both sites showing hours | Four-day weeks are common in the sample | Make Friday availability (or its absence) explicit in GBP hours and ads schedules | Ads search-term/time reports vs office hours |

Limitations: three homepages; search results dominated by directories; not representative.
