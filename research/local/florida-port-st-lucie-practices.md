# Port St. Lucie — local dental-practice website sample (observed 2026-11-08)

Source id: `obs-fl2b-port-st-lucie-practices-2026-11-08`. Internal only.

## Method

WebSearch tool (US, unordered; not a Google ranking): `dentist Port St. Lucie FL dental implants family dentistry`, `pediatric dentist Port St. Lucie FL`, name queries. Domains found via directory listings (newpatientsinc practice finder). Homepages fetched with plain curl on 2026-11-08; static HTML only. No forms submitted.

Skipped: two domains did not resolve, one reset the connection, one returned proxy 502.

## Sample (4 private-practice sites with Port St. Lucie addresses)

| # | Site | Location | Mix |
|---|---|---|---|
| P1 | traditiondentalgroup.com | Port St. Lucie (Tradition named in brand) | Implants (single, All-on-4, snap-in dentures), restorative, cosmetic |
| P2 | gentlebreezedentist.com | SE Port St. Lucie Blvd | Family, general, cosmetic, dentures, implants |
| P3 | traditionparkwaydentalcare.com | SW Tradition Pkwy | General; same group template as sampled sites in Naples and Tallahassee |
| P4 | dermodydentalpsl.com | Port St. Lucie; also names Vero Beach and Palm City | Pediatric dentistry and orthodontics |

Also observed, not counted: the Florida Department of Health in St. Lucie County public pediatric dental site page (see `florida-port-st-lucie.md`).

## Observations

| Feature | P1 | P2 | P3 | P4 | Count |
|---|---|---|---|---|---|
| Click-to-call | Yes | Yes | Yes | Yes | 4/4 |
| Booking path | "Book now" label (destination not determined in static HTML) | Appointment-request page | "Schedule with Us" request page | Appointment-request page | 0/4 confirmed real-time; 3/4 request forms |
| Hours shown | Not in static HTML | Mon–Thu 8:30–5, Fri 8–5, **Sat by appointment** | Not in static HTML | Not in static HTML | 1/4 Saturday; 0/4 evenings |
| Spanish content | No | No (only media-player language strings) | No | No | 0/4 |
| New-resident content ("new to the area", moving) | No | No | No | No | 0/4 |
| Insurance detail | PPO mention | PPO mention; promotions page | Insurance page | PPO mention; financial info page | 0/4 named carriers |
| Implant emphasis | Strong (dedicated implant section, FAQ) | Yes | Partial | n/a | 2/4 strong |
| Multi-area reach | Brand references Tradition | — | Tradition | Names other Treasure Coast cities | 2/4 |
| Testimonials / reviews | Testimonials | Testimonials, smile gallery | Not in static HTML | Not in static HTML | 2/4 |

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 0/4 addressed newcomers, in the fastest-growing large city in Florida | Newcomer questions (insurance from a previous employer, records, first visit) go unanswered online | A "new to Port St. Lucie" first-visit page; GBP description and posts that answer it | Share of new patients who say they moved recently; page-assisted bookings |
| 0/4 had Spanish content; 17.4% of residents 5+ speak Spanish at home | Possible gap — or practices lack bilingual staff | Only with bilingual staff: Spanish call handling first, then real Spanish pages | Calls requesting Spanish; Spanish-page form completions |
| 1/4 showed Saturday access; 0/4 evenings; 36.4% of resident workers work outside the county | Access outside commute hours is scarce on the visible web | If capacity allows, publish early/late/Saturday blocks and allow requests outside office hours | Requests submitted after 6 pm and on weekends; bookings in extended slots |
| 0/4 confirmed real-time booking | Requests wait for office hours | Same-day callback standard; consider real-time booking for hygiene/new-patient slots | Request-to-booked time; abandoned requests |
| 2/4 lead with implants | Restorative competition is visible | Consult process clarity and financing information | Consult requests by source; consult show rate |
