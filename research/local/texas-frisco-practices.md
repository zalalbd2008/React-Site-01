# Frisco practice-website observations — 2026-11-08

**Internal research. Never name, link or criticise these practices on public pages; aggregates only.**

**Method.** WebSearch tool (US, unordered list — not a ranking): "dentist Frisco TX", "pediatric dentist orthodontist Frisco TX", "Frisco TX family dentist Saturday appointments website", "Frisco TX dentist Eldorado Parkway Main Street dental office" (directories excluded). Five homepages fetched with plain curl and scanned; one other returned a 403 challenge and was skipped. No contact or forms.

## Sample (5 sites)

| # | Site | Type | ZIP |
|---|---|---|---|
| F1 | eldoradosmiles.com | Office using a national support network's site template ("Language spoken" / insurance-list blocks) | 75034 |
| F2 | friscosmilesdentistry.com | Independent general/cosmetic | 75033 |
| F3 | todaydental.com/locations/frisco-office/ | Location of a multi-office DFW group (15+ offices listed) | 75033 |
| F4 | custerstardentalgroup.com | Office using the same template as F1 | 75035 |
| F5 | yourheritagefamilydentistry.com/eldorado-pkwy/ | Location of a three-office brand (two Frisco, one North Dallas) | 75033 |

## Observed features

| Feature | F1 | F2 | F3 | F4 | F5 |
|---|---|---|---|---|---|
| Booking | "Book an appointment"/"Schedule now" | Request-appointment form; separate new-patient phone line | "Book now" | "Book an appointment"/"Schedule now" | "Book now" + request form |
| Weekday hours | Mon–Thu **7 am–7 pm**, Fri 7–4 | Mon–Fri 8–5 | Mon–Thu 8:30–5:30, Fri to 3 | Mon–Fri 7 am start; Tue/Thu to 6 pm | Not on page |
| Saturday | **9–2** | Closed | **8–2** | Select Saturdays by appointment | Not shown |
| Language | "English" | Not stated | Not stated | "English" | Not stated |
| Coverage / payment | Insurance list; financing; dental plan | PPO; membership program | PPO | Insurance list; financing | PPO/insurance |
| Location content | Shopping-centre landmark at Eldorado & Dallas North Tollway | "Prosper TX Dentist" in page title | Address + list of the group's other offices | Shopping-centre landmark at Custer & Eldorado | Location pages per office |
| Services named | Implants, ortho, emergency, sedation | Implants, Invisalign, pediatric | Implants, Invisalign, ortho, sedation | Implants, ortho, sedation | Implants, All-on-4, pediatric, sedation |

## Aggregates used on the page

- 4 of 5 were offices of multi-office brands or used a shared network template; 1 was a stand-alone independent.
- 3 of 5 offered some Saturday access (two regular half-days, one "select Saturdays").
- 2 of 5 started at 7 am; 1 of 5 stayed open to 7 pm four days a week.
- 0 of 5 advertised a language other than English; 2 explicitly said "English" (the city's Asian/PI-language share is 15.1% — ACS).
- 1 of 5 targeted a neighbouring town (Prosper) in its page title.
- 4 of 5 used landmark or office-list location content rather than neighbourhood narratives.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| Most offices are part of multi-office brands | Branded groups with shared templates are common in this sample | Independents compete on specifics (doctor, access, family scheduling, plan participation); groups need location pages that genuinely differ | GBP profile interactions per location; branded vs unbranded queries |
| Early starts, one 7 pm office, Saturdays | Access hours are a visible competitive claim | Publish the exact hours you can staff; align GBP, site and ad schedules; consider family block bookings | Bookings by time slot; calls about hours |
| No non-English language offered | Potential gap — or no demand; unknown | Ask staff which languages they speak; test only where real capability exists | Language log |
| Neighbouring-town targeting (Prosper) | The catchment is expanding north with growth | Decide catchment from patient ZIPs; be cautious with pages for towns the practice is not near | Direction-request origins |
| Fast growth slowing | New-mover inflow may be smaller than marketing assumes | Balance acquisition with recall/retention; watch capacity | New-patient trend vs prior year |
