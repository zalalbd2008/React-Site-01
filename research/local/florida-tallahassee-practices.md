# Tallahassee — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl2b-tallahassee-practices-2026-11-08`. Internal only — never name these practices publicly.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Tallahassee FL accepting new patients`, then name queries. Practice domains found via directory listings. Homepages fetched with plain curl on 2026-11-08; static HTML only; no forms submitted.

## Sample (4 sites with Tallahassee addresses)

| # | Site | Location | Mix |
|---|---|---|---|
| T1 | mcquarydental.com | Capital Medical Blvd (32308) | General, cosmetic, implants incl. All-on-4, sedation |
| T2 | cwddentalgroup.com (redirect from tallyteeth.com) | Two offices: Capital Medical Blvd and Kerry Forest Pkwy | Broad: family, pediatric, endo, perio, implants, Invisalign, TMJ |
| T3 | bradfordvilledentalcare.com | Old Bradfordville Rd (northeast) | General; same group template as sampled sites in Naples and Port St. Lucie |
| T4 | coastdental.com/dentist-office/tallahassee-fl-32308 | Multi-state group office page | General, specialty, dentures |

## Observations

| Feature | T1 | T2 | T3 | T4 | Count |
|---|---|---|---|---|---|
| Click-to-call | Yes | Yes (two numbers, one per office) | Yes | Yes | 4/4 |
| Booking path | "Book Now" opens an on-page booking sheet | Schedule-a-visit / make-an-appointment pages | "Schedule with Us" request page | Real-time scheduler signals (NexHealth) plus "Book now" | 1/4 confirmed real-time |
| Hours shown | Mon–Tue 8–5, Wed 8–4, Thu 8–2, Fri–Sun closed | Not in static HTML | Not in static HTML | Mon–Fri 8–5; Sat/Sun closed | 0/4 Saturday or evening shown |
| Same-day / emergency | Emergency page | "Same Day Emergency Appointments" headline | — | Emergencies page | 3/4 |
| Insurance detail | **Names ~14 in-network carriers (incl. GEHA and Humana); states it does not accept Medicare or Medicaid; in-house membership plan** | PPO mention | Insurance page | Insurance, uninsured and Medicare Advantage pages; financing | 1/4 names carriers; 2/4 membership/discount plan |
| Spanish | Machine-translation widget only | A dentist's bio notes fluency in Spanish | No | Spanish privacy notice; a review translated from Spanish | 0/4 dedicated Spanish pages |
| Surrounding communities | Mentions Killearn/Bradfordville area | Mentions Crawfordville, Havana, Quincy, Wakulla | Bradfordville | No | 1/4 names outlying-county towns |
| Student or university content | Dentist bio mentions UF alumnus | No | No | No | 0/4 addressed students |
| State-employee / employer plan content | GEHA named in list (federal plan) | No | No | No | 0/4 addressed state employees explicitly |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 1/4 listed in-network carriers; 29.1% of city workers are government workers (ACS) | Network clarity is uneven in a market where employer plans may dominate | Publish an accurate in-network list with "last checked" date; add plan names to the insurance FAQ | Calls tagged "do you take…"; insurance page exits to booking |
| 0/4 addressed students; median age 28.2 | Practices may not market to students — perhaps rightly, if students keep home dentists | Decide deliberately: either an honest student page (parents' plan, break scheduling) or none | New patients aged 18–24 by month; no-shows around exam weeks |
| 0/4 showed Saturday or evening hours | Little visible competition on after-class/after-work access | If capacity allows, test one extended block and publish it | Bookings in that block; GBP calls by hour |
| 1/4 named outlying-county towns | Wakulla/Gadsden/Jefferson are rarely addressed | Only if patients come from there: one useful page on travel, hours, referrals | New-patient ZIPs outside Leon |
| 1/4 with real-time booking | Most booking is a request | Shorten request; respond same day | Form-to-booked time |
