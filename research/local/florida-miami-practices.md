# Miami — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl1-miami-practices-2026-11-08`. **Internal research only — never name these practices on public pages.**

## Method

- Discovery: WebSearch tool (US results, unordered list — not a Google ranking), queries `dentist Miami FL family dental office`, `dental implants Miami Brickell Coral Gables dentist`, and a name query for practices surfaced in directories. Results were dominated by directories (WebMD, Lantern, Zocdoc, MapQuest); practice domains were then checked directly.
- Fetch: plain `curl` (no browser user-agent) of each home page on 2026-11-08; features extracted from static HTML with a script (headings, tel: links, booking-link targets, hours text, language markers, insurance/payment terms). Features loaded only by JavaScript may be missed. No forms submitted, no calls made.
- Mobile taps are estimated from page structure (header CTA present → 1 tap to start).

## Sample (5 sites, all with "Miami, FL" mailing addresses)

| # | Site (internal) | Address | Service mix signals |
|---|---|---|---|
| M1 | collazofamilydental.com | 285 NW 27th Ave, Miami 33125 (city of Miami) | General/family, cosmetic; orthodontic FAQ |
| M2 | miamibayoralhealth.com | 111 NW 8th St, Miami 33136 (city of Miami) | General, Invisalign |
| M3 | bayfrontdental.com | 224 SE 1st St, Miami 33131 (Downtown) | General, cosmetic (15 service links) |
| M4 | miamidentalgroup.com (Kendall office) | 7755 SW 87th Ave, Miami 33173 — **unincorporated Kendall, outside city limits** | Multi-location group; implants, dentures, veneers |
| M5 | elitesmilesdentalcenter.com | 1501 SW 37 Ave, Miami 33145 (title targets Coral Gables + Miami) | Cosmetic, implants, emergency |

## Observations

| Feature | M1 | M2 | M3 | M4 | M5 | Count |
|---|---|---|---|---|---|---|
| Click-to-call (tel:) link | No tel: link found | Yes | Yes | Yes (3 numbers) | Yes | 4/5 |
| Real-time online scheduler confirmed | Booking link on Wix site, mechanism not confirmed | No ("schedule an appointment") | **Yes** (NexHealth) | No (request-appointment forms) | No ("Book online" opens a form widget) | 1/5 confirmed |
| Saturday hours shown | Partial hours only (Thu 10–6, Fri 9–5) | **Yes** (Sat 8–4; Tue/Thu 8–1) | Not in static HTML | No (Sat/Sun closed; Fri 8:30–1) | **Yes** (Sat 9–1; M–F 9–6) | 2/5 |
| Spanish-language pages | No (only an auto-translate widget setting in code) | No | **Yes** (hreflang es, /es/) | No | No | 1/5 |
| Insurance / payment info on home page | CareCredit, membership plan | CareCredit, Sunbit, payment plans | Insurance mentioned | Insurance mentioned | Membership plan, financing | 5/5 mention; 3/5 name financing/membership |
| Neighbourhood / location pages | No | No | **Yes** (Brickell, Edgewater, Little Havana…) | Group /locations/ + /miami-fl/ service URLs | No | 2/5 |
| Reviews shown on page | No | Google mention | Google reviews widget (★) | Google mention | Testimonials | 4/5 |
| Same-day/emergency mention | Yes | Same-day | No | Yes | Yes | 4/5 |

Mobile taps to begin booking (estimate): M3 1 tap to scheduler; M2/M4/M5 1 tap to call or a form then a multi-field form; M1 unclear.

## Strategy table (observed → interpretation → action → test)

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Only 1 of 5 had Spanish-language pages, in a city where 68.8% speak Spanish at home (ACS) | A bilingual content gap may exist among practice websites — the sample is tiny | Build Spanish treatment and booking pages as true equivalents (not machine translation), with Spanish-capable intake named | Track Spanish-page sessions → calls/forms; compare booking completion by language |
| 1 of 5 confirmed real-time scheduling | Most sampled sites route new patients to a call or a request form | Offer real-time booking for routine visit types only if the schedule rules can be kept accurate | Measure request-to-booked time; abandoned scheduler sessions |
| 2 of 5 showed Saturday hours | Weekend access is a visible differentiator where offered | Put hours in the header and on GBP; schedule ads to staffed hours | Calls outside hours (missed-call logs); weekend booking share |
| Payment/financing named on 3 of 5 home pages | Price and payment clarity is a common conversion element here | Add plain payment and membership explanations; any fee advertising must follow F.S. 466.019/456.062 | Clicks on payment sections; consult-to-start rates |
| One "Miami" result was outside city limits | "Miami" is a mailing label spanning many jurisdictions | Define target areas by drive time and neighbourhood, not the city name | GBP and Search Console query/location reports |
