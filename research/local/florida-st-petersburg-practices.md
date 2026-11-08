# St. Petersburg practice website sample — observations 2026-11-08

**Internal research. Never name or criticise these practices on public pages.** Source id: `obs-fl2a-practices-st-petersburg`.

Method: WebSearch ("dentist St. Petersburg FL family dentistry", "dental implants St. Petersburg FL"), then homepages fetched with curl on 2026-11-08 and parsed for visible text, links, tel: links, forms and booking-tool markers. Homepage only unless noted; no forms submitted; mobile tap counts estimated from page structure (header CTA → page → form/booking step). One candidate (scottdentistry.com) turned out to be a Lubbock, TX practice and was discarded; one chain location page (affordabledentures.com) returned a bot checkpoint (HTTP 429) and was not used.

| # | Site (internal) | Mix | Business info on homepage | Booking path | Hours shown | Languages | Reviews | Insurance / payment | Location content |
|---|---|---|---|---|---|---|---|---|---|
| S1 | 4thstreetfamilydentistry.com | General/family | Address (4th St N, 33704), tel link | Phone; one form on page; no third-party online booking marker found | Not on homepage | English only observed | Review widget markers (Swell), Google mentions | Lists in-network PPO carriers; in-house savings plan for uninsured | Many recent posts (Sept–Oct 2026) framed "in St. Pete" (emergency after hours, savings plan, Invisalign, whitening) |
| S2 | pinellasoralsurgery.com | Oral surgery/implants | City + ZIP 33710, map embed; no tel: link on homepage | "Book Now" → contact page (≈2–3 taps) | Not on homepage | English (hreflang en-US) | Testimonials link | None on homepage | Thin homepage (~250 words) |
| S3 | crescentlakefamilydentistry.com | General/family | Phone, Mon–Fri 7:30–5:30, address (MLK Jr St N, 33704) in header | "Request an Appointment" page (form) | Mon–Fri 7:30 AM–5:30 PM; no Saturday | English | Testimonials | "Insurance we file" section; CareCredit link | Short homepage (~520 words) |
| S4 | stpetecosmeticdentist.com | Family + cosmetic | Address (16th St N, 33704), tel link, text-message consent | Request form ("team reviews each request and confirms"); text option | Mon–Thu 8–5, Fri 8–1, weekend closed | **English and Spanish** stated (a dentist fluent in Spanish); no Spanish pages/hreflang | "Hundreds of Google 5-star reviews" claim | Insurance (PPO/HMO named), CareCredit, savings plan, disclaimer that financing is subject to credit approval | "St. Pete native" doctor bios; FAQ block |

## Aggregate statements usable on the page

- Of four St. Petersburg practice websites reviewed on 8 November 2026, **none showed a third-party online scheduling tool on the homepage**; all four routed new patients to a phone call or a request form.
- **None advertised Saturday hours** on the homepage; two showed weekday hours (one Mon–Fri, one Mon–Thu plus a Friday half day); two did not show hours on the homepage at all.
- **One** stated Spanish-language capability; none had Spanish-language pages.
- **Three of four** gave some insurance or payment information on the homepage (carrier lists, in-house savings plans, third-party financing); the surgical site gave none.
- One site was publishing frequent local-framed articles; the other three had short or brochure-style homepages.
- No site mentioned storms, closures or seasonal residents on the homepage.

## Strategy table — observed fact → cautious interpretation → proposed action → how to test

| Observed | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| 0/4 had online self-scheduling on the homepage | New patients who prefer to book outside office hours may face a delay; it is also possible practices deliberately triage by phone | Offer a short request form with stated response time, or online booking for defined appointment types if the schedule allows | Compare after-hours form submissions and their booked rate before/after |
| Hours missing on 2/4 homepages; no Saturday | Patients deciding between offices on a phone may not find hours quickly | Put hours, and Business Profile special hours during closures, in the header/footer | Track calls during closed hours (call tracking), GBP "calls" vs. answered |
| Payment info on 3/4 | Cost questions are being addressed somewhat; quality varies | Treatment pages that state what affects cost, insurance filed, plans available | Monitor share of calls asking "do you take my insurance" (tagged) |
| 1/4 local-content publisher | Locally framed content is a differentiator few are using | Neighbourhood-relevant FAQs (not doorway pages) tied to real services | Search Console impressions for service + "St Pete/St. Petersburg" queries |
| Surgical site thin, no tel link | Referral-dependent specialty sites may under-serve direct searchers | For specialists: direct-search landing content plus referral-dentist pages | Ratio of self-referred to dentist-referred new patients |
| Practice group sites in sample span Tampa Bay + Sarasota (see Sarasota sample, Bayview Dental lists St Pete offices) | Multi-location groups compete across the bay | Independent practices emphasise proximity, continuity and named clinicians | GBP discovery queries by area; review mentions |

## Gaps

Homepage-only snapshot. No measurement of page speed, no mobile rendering in a real device, no review-count verification (third-party ratings in search snippets were not verified and are not used).
