# Gainesville — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl2b-gainesville-practices-2026-11-08`. Internal only.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Gainesville FL family dentistry`, `pediatric dentist Gainesville FL kids dentistry`, name queries. Domains found via directory listings. Homepages fetched with plain curl, static HTML only, 2026-11-08. No forms submitted.

Skipped: one orthodontic and one family site returned Cloudflare 403; one listed domain was parked (redirect to a lander); one listed domain did not resolve.

## Sample (4 sites with Gainesville addresses)

| # | Site | Location | Mix |
|---|---|---|---|
| G1 | millhopperfamilydentistry.com | NW 43rd St (northwest) | Family; four dentists |
| G2 | tiogadental.com | Two offices (Tioga Town Center, Celebration Pointe — west/southwest) | General, cosmetic, orthodontics, implants incl. All-on-4, perio, sleep apnea |
| G3 | magnoliafamilydental.com | NW 37th Pl | Family, cosmetic, Invisalign, implants |
| G4 | cruzdavisdental.com | Gainesville and Newberry | Family, cosmetic, oral surgery, ortho, pediatric, emergency |

## Observations

| Feature | G1 | G2 | G3 | G4 | Count |
|---|---|---|---|---|---|
| Click-to-call | Yes | Yes (number per office) | Yes ("Call or Text") | Yes | 4/4 |
| Booking path | Phone only; no booking link in static HTML | "Book an appointment online" | Request-an-appointment page | Third-party online scheduling links | 2/4 online scheduling; 1/4 request; 1/4 phone only |
| Hours shown | **Mon–Thu 8 am–8 pm; Fri–Sat 8–4** | Not in static HTML | Mon 8–4, Tue–Thu 8–5, Fri 8–4, Sat/Sun closed | Mon–Thu 8–5; hygiene from 7 am; "off-hours emergency visits" | 2/4 visible extended access |
| Text messaging offered | No | No | Yes | No | 1/4 |
| Membership / employer plan | No | In-house club; CareCredit; financing | No | In-house club including tiers for "small businesses" and "employees" | 2/4 |
| Insurance | Not in static HTML | "We accept most insurance plans"; good-faith estimate page | PPO mention | Dental plan; "no insurance" content | 0/4 named carriers |
| Student / UF content | No | No | No | No | 0/4 |
| Spanish | No | No | No | No | 0/4 |
| Location content beyond one office | — | Separate office pages | — | Gainesville and Newberry named | 2/4 |
| Reviews on site | Google review excerpts | Reviews | Testimonials | Reviews | 4/4 |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 2/4 showed early, evening or Saturday access | Extended access is already a local selling point for some | If offering it, say it everywhere (GBP hours, site header, ads schedule) | Bookings in extended blocks; calls by hour |
| 0/4 addressed students or the academic calendar | A deliberate choice or a gap | Decide per practice: student page (break scheduling, insurance through parents) or focus on permanent residents | New patients 18–24 by month; cancellations in exam weeks |
| 2/4 offered in-house plans, one aimed at small employers | Uninsured and small-employer households are being courted | If a plan exists, explain it plainly with what it includes | Plan sign-ups by source |
| 2/4 presented more than one location (west side, Newberry) | Growth and patients are moving west | Location content only for real offices; ad geography by patient ZIPs | New-patient ZIP map vs office |
| 0/4 named insurance carriers | Network questions go to the phone | List networks with a check date | Insurance-question calls |
