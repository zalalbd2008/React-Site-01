# Plano practice-website observations — 2026-11-08

**Internal research. Never name, link or criticise these practices on public pages; aggregates only.**

**Method.** WebSearch tool (US, unordered list — not a ranking): "dentist Plano TX", "cosmetic dentist dental implants Plano TX", "Plano TX family dentist accepting new patients insurance", and "Plano TX dentist Legacy Drive Preston Road dental office" (directories excluded). Results were mostly directories; five practice homepages fetched with plain curl, scanned and confirmed from text. No contact or forms.

## Sample (5 sites)

| # | Site | Type | ZIP |
|---|---|---|---|
| P1 | dentalcareatprestonlegacy.com | Office in a multi-office dental "community" (shared website template) | 75024 |
| P2 | mydentistinplano.com | Independent general/cosmetic/implant | 75024 (Preston Rd) |
| P3 | antoonfamilydental.com | Independent family/emergency | 75024 |
| P4 | legacydrivedental.com → **redirects to willowbenddental.com** | Office in the same multi-office community as P1 (same template) | 75093 |
| P5 | smilegeneration.com/dentist/tx/plano/1172-dentists-of-plano/ | Office supported by a national dental support network (location page) | 75024 |

## Observed features

| Feature | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| Booking | "Schedule with us" (online scheduler) | Online booking + contact form | "Book an appointment" | "Schedule with us" (online scheduler) | "Book an appointment" |
| Saturday | Not shown | Not shown | **Saturday appointments** (also "by appointment" Fri/Sat) | Not shown | **Sat 9–3, by appointment** |
| Evening | Not shown | Some days to 6 pm | No | Not shown | To 6 pm Mon–Thu |
| Language | Not stated | Not stated | **"Bilingual front desk staff"** (language not named) | Not stated | "Language spoken: English" |
| Coverage / payment | PPO/insurance | Insurance; in-office VIP membership; Cherry | Insurance; in-house dental plan; Cherry | PPO/insurance | PPO & HMO list; financing |
| Neighbouring cities | — | "Plano, Frisco, Wylie, Richardson" | "Plano, Frisco & Carrollton"; neighbourhood names (e.g. Deerfield) | — | — |
| Proof | — | Ratings badge; magazine "Super Dentist" mention; testimonials | Reviews, video testimonials | — | Reviews/stars |
| Content depth (approx. words on homepage) | ~550 | ~1,000 | ~2,200 | ~600 | ~5,300 |

## Aggregates used on the page

- 3 of 5 were offices within multi-office brands or support networks; 2 of those used an identical website template, and one practice-named domain redirected to a differently named office site.
- 2 of 5 published Saturday availability (both "by appointment" in some form); 2 of 5 had any weekday hours to 6 pm.
- 2 of 5 offered an in-house membership plan; 2 of 5 named a financing brand.
- 1 of 5 stated bilingual front-desk staff; 1 stated English only; 3 said nothing about language.
- 2 of 5 named neighbouring cities (Frisco in both; Richardson, Wylie, Carrollton once each).
- Homepage depth ranged from roughly 550 to 5,300 words.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Template sites shared across offices; a domain redirect to another office name | Many listings look alike; branded groups compete with independents on near-identical pages | Differentiate on verifiable specifics: doctors, services actually offered, access, plans accepted, real photos; keep NAP consistent if names change | Branded vs non-branded search impressions in Search Console; GBP profile views |
| Language rarely stated; one "bilingual" without naming language | Language capability is under-communicated in a city where 37.5% speak a non-English language at home | Publish exact staff languages; add language-specific pages only where demand is shown | Front-desk language log for 60 days |
| Membership plans and financing appear in 2 of 5 | Self-pay options exist even in an insured city | Keep insurance (in-network list) primary; self-pay secondary | Payer mix of new bookings |
| Two sites name Frisco | Practices near the north edge expect cross-boundary patients | Use patient ZIPs to decide; do not create "Frisco" pages for a Plano office unless patients genuinely come from there | Direction-request origins |
| Saturday "by appointment" | Weekend access is limited and conditional | Publish exact access rules; mirror in GBP special hours | Calls asking about weekend availability |
