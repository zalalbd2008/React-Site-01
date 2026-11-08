# City of Los Angeles — practice website sample

Batch: markets-ca1 · Observed 2026-11-08 · Method: WebSearch tool (US results, unordered — not a Google ranking) for "family dentist Los Angeles CA new patients", "Koreatown Los Angeles dental office Wilshire dentist website", "Los Angeles dentist Silver Lake OR Echo Park OR Westwood dental practice" (directories blocked on the last query). Homepages fetched with curl and read as text/HTML. No forms submitted, no contact made. Observations are of public pages on this date only. Practices are named here for audit trail only — never on public pages.

Search-result observation: the first two queries returned almost entirely directories/aggregators (Zocdoc, WebMD, Vitals, MapQuest, practice-finder sites) rather than practice sites.

| # | Site (location) | Type | Booking path | Hours (as published) | Languages | Insurance/payment info | Other |
|---|---|---|---|---|---|---|---|
| LA1 | wilshiredentist.com (Wilshire Center / Koreatown) | Independent group | Phone link in header; "Book your Appointment"; CareStack scheduling script present; 2 forms | Not clearly published on homepage | "se habla español" on homepage | PPO mentioned; financing page | Emergency/same-day mentions; homepage embeds third-party review text |
| LA2 | brightnow.com office page (Midtown Crossing, Pico & San Vicente, 90019) | DSO-branded office page | "Book an Appointment" + phone; new-patient forms link | Mon 8–5, Tue 10–7, Wed 9–6, Thu 8–5, Fri closed, Sat 7–3 | Not stated on page | Long accepted-plan list incl. HMOs/DHMOs and Denti-Cal; financing | $29 new-patient exam/X-ray offer; "34 Reviews"; text names nearby neighbourhoods (Downtown, Koreatown, Westlake, MacArthur Park) |
| LA3 | silverlakedentalgroup.com (Glendale Blvd, Silver Lake 90039) | Independent | Phone link; booking/request path | Mon 8:30–4, Tue–Thu 8:30–5, Fri 8:30–1:30, Sat by appointment | Full Spanish version ("Ver en español"); dentist speaks English, Spanish, Persian | Most PPO plans; explicitly does **not** accept DHMO, Medi-Cal/Denti-Cal; in-house membership plan from $425/yr; Sunbit financing; itemized estimates | Published plan prices; same-day urgent care Mon–Fri; IV sedation |
| LA4 | silverlakefamilydental.com (Sunset Blvd, 90026) | Independent | "Book an appointment" (Modento online booking) + phone | Mon closed; Tue–Fri daytime; Sat 8–2 | Not stated | PPO | Testimonial dated 2018 on homepage |

## Aggregate observations (for public page)
- 4 of 4 had a tap-to-call phone link and a visible booking or appointment-request path; 2 of 4 used an identifiable online-scheduling tool (CareStack, Modento) — the others used request/booking pages whose mechanism could not be determined without submitting.
- 2 of 4 published Saturday hours; 1 offered "Saturday by appointment"; 1 published a weekday evening (to 7 pm).
- 2 of 4 offered Spanish: one a full Spanish-language version of the site, one a "se habla español" line.
- Payment information varied sharply: one listed HMO/DHMO plans and Denti-Cal; one stated it does not accept DHMO or Medi-Cal; two said only "PPO".
- 2 of 4 showed a new-patient price or plan price on the homepage.
- Neighbourhood naming: 2 of 4 referred to neighbourhoods (Koreatown/Westlake/Silver Lake) rather than "Los Angeles" alone.

## Strategy table (Observed → interpretation → action → test)
| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Search for "family dentist Los Angeles" returned mostly directories | City-wide head terms are crowded by aggregators; neighbourhood terms may be more winnable | Build neighbourhood-relevant service content and GBP accuracy; track neighbourhood + service queries in Search Console | Search Console query/page impressions by neighbourhood term over 3–6 months |
| Payment acceptance (HMO / Medi-Cal / PPO-only) stated very differently across sites | Patients may self-select or bounce on payment uncertainty | Put a plain "plans we accept / do not accept" block on every service page | Form/call reasons tagged "insurance question"; booking rate of visitors who view the insurance block |
| Spanish offered by half the sample, in different depth | Spanish demand varies by neighbourhood and staff capacity | Only publish Spanish pages the front desk can support; separate URLs per language | Calls/forms by language; Spanish-page conversion vs English |
| Saturday/evening hours inconsistent | Hours may be a differentiator for commuters (31-min mean commute) | Publish exact hours on GBP + site; run ads only when phones are answered | Call answer rate by hour; ad conversions by hour |
| One homepage testimonial dated 2018 | Stale proof may undercut trust | Review-request process + refresh on-site proof with permission | Review velocity; on-page engagement |
