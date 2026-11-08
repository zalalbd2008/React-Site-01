# Corpus Christi, Texas — practice website observations

Batch: markets-tx2b · Observed 2026-11-08 · Route: `/markets/texas/corpus-christi/`

## Method
- Discovery: WebSearch tool (US results, unordered list — not a Google ranking), 2026-11-08: "dentist Corpus Christi TX" (mostly job postings); "dental implants Corpus Christi family dentistry Saratoga Blvd"; "Corpus Christi dentist Spanish \"se habla español\" dental"; directory page promptloop.com/directory/corpus-christi-dental used only to find practice domains.
- Homepages fetched with curl on 2026-11-08 and text extracted. One multi-state chain homepage (oceandental.net) was opened but excluded because it is not Corpus Christi-specific; one large group location page was opened (lovettdentistrycorpuschristi.com — "Open Early, Late & Saturdays") but not included in the five-site sample, to keep the sample to independent/local sites plus one implant-focused site. A further domain failed (redirect loop) and was skipped.
- No forms submitted, no contact made. Names for traceability only — **never on public pages**.

## Sample (5)
| # | Site | Service mix | Booking path | Hours advertised | Languages | Insurance/payment | Location content | Reviews |
|---|---|---|---|---|---|---|---|---|
| 1 | gonzalezfamilydentistry.com (78411) | Family, cosmetic, extractions, emergency | Phone and contact page; no online-scheduling link observed on homepage | Not shown on homepage text | **"Hablamos Español"** in header; dentist described as fluent in English and Spanish | Insurance acceptance page; membership plans | Dentist bio mentions South Texas roots; no service-area content | None on homepage |
| 2 | mytidedental.com (78412) | Family, implants, orthodontics, cosmetic | "Book Online" to third-party scheduler (truelark) | Mon–Fri 8:30–12:30 & 1:30–4:30 (lunch closure) | English only observed | Insurance mentioned; in-house plan ("Thrive Dental Plan"); specials | Little | Text testimonials |
| 3 | calallendental.com (78410) | Family, pediatric, implants, orthodontics | "Book Appointment" (mechanism not determined) + phone; **walk-ins welcome** | Mon–Fri 9:00–5:30 | **"Se Habla Espanol"** | Insurance; flexible financing | Calallen (north side) in name | Review widget showing rating and count |
| 4 | padreislanddentistry.com (78418) | General/family, emergency | "Request an Appointment" and separate "Request Emergency appointment" forms | Mon–Fri 8–5; Sat/Sun closed | English only observed | Insurance, financial options, membership | Padre Island (in name/address) | Reviews on homepage |
| 5 | veladental.com (78411) | Implant-focused (full-arch, snap-on dentures) + general | Consultation request form + phone | Mon–Thu 9–5; Fri–Sun closed | English only observed | No insurance/payment detail on homepage | Little | Google reviews and patient story videos |

## Aggregate observations (public page, unnamed)
- **Online self-scheduling:** 1 of 5 linked to an online scheduler; 2 used request forms (one with a separate emergency request); 1 had a "Book Appointment" page of undetermined type; 1 relied on phone/contact.
- **Hours:** 0 of 5 advertised Saturday or evening hours on the homepage; 1 showed a midday closure; 1 closed Fridays.
- **Spanish:** 2 of 5 signposted Spanish on the homepage ("Hablamos Español" / "Se Habla Espanol"); 0 of 5 had a Spanish-language version of the homepage observed.
- **Payment:** 3 of 5 mentioned an in-house membership plan; 2 mentioned financing; 1 implant-focused site gave no payment information on the homepage.
- **Walk-ins:** 1 of 5.
- **Storm/closure messaging:** none observed on homepages on 8 Nov 2026 (expected outside an event; not a finding).

## Strategy table
| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Only 1 of 5 offered self-scheduling | Phone and forms dominate the sampled booking paths | If the practice can support it, add online booking for routine visits; keep phone prominent | Booking completions vs calls; after-hours bookings |
| 2 of 5 signpost Spanish; none has Spanish pages | Bilingual reassurance is used; full Spanish content is uncommon in sample | Signpost Spanish only where staff can serve it; consider Spanish versions of the highest-intent pages (new patients, payment, emergency) with hreflang | Spanish query impressions in Search Console; intake language |
| 3 of 5 promote membership plans; 1 implant site shows no payment info | Payment clarity is a visible theme | Clear payment page: insurance participation (truthful list), membership terms, financing; avoid "free" where a third-party payer pays (22 TAC §108.53 per tx1 source) | Call reasons; form drop-off on payment page |
| 0 of 5 show Saturday/evening hours | Weekday-only is the norm in sample | Only advertise extended hours if real; if the practice has them, make them consistent across GBP, site, ads | Day-of-week booking report |
| No closure-messaging pattern visible | Normal outside an event | Pre-write a storm-closure procedure: GBP special hours, site banner, ads pause | Time-to-update during next event |

## Limitations
Five homepages on one date; non-random. Describes websites only.
