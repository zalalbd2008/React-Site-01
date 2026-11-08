# Columbus, Georgia practice-website observations — 2026-11-08 (markets-ga1)

**Method.** WebSearch tool (US results, unordered list — not a Google ranking) for "dentist Columbus GA" and "family dentist Columbus GA Fort Benning TRICARE dental". The second query returned mainly directory pages for on-post Army dental clinics, which are not private practices and were not sampled. Homepages fetched with plain curl; features extracted by script and confirmed by reading snippets. No forms submitted or practices contacted.

**Skipped:** columbusmidtowndental.com (HTTP 403 bot challenge — not worked around).

Source id: `obs-ga1-columbus-practices`.

## Sample (three sites)

| # | Site | Service mix as presented | Location |
|---|---|---|---|
| C1 | my.officite.com/0085210 (Tully & Sharp practice) | Family, TMJ, same-visit crowns, root canals | 31909 |
| C2 | gentledentistryofcolumbus.com | Family, implants, pediatric, cosmetic | 31904 |
| C3 | chattahoocheevalleydental.com | General; two offices | Columbus (31909) and West Point, GA (31833) |

## Observed features

| Feature | C1 | C2 | C3 |
|---|---|---|---|
| Tap-to-call link | Yes | Yes | Yes, per office |
| Booking path | "Request an appointment" page | Book/request appointment; email shown | Third-party online scheduler per office |
| Est. taps to booking action (mobile) | 2+ | 1–2 | 1–2 (choose office) |
| Hours on homepage | Not found | Mon–Thu 8–5; **Fri–Sun closed** | Mon–Thu 8–5 |
| Military mention | "We also proudly serve military families" | None | None |
| TRICARE / TDP network stated | No | No | No |
| Insurance / payment | Not on homepage | Financing options named | Not on homepage |
| Reviews | Testimonials link | Not on homepage | Patient quote |
| Languages | English only | English only | English only |
| Hosted on a template platform URL | Yes (officite subdomain path) | No | No |

## Aggregates used on the page
- 3 of 3 used tap-to-call links.
- 1 of 3 linked to direct online scheduling.
- 2 of 2 that showed hours ran Monday–Thursday only.
- 1 of 3 mentioned military families; 0 of 3 stated TRICARE Dental Program network participation on the homepage.
- 1 of 3 homepages sat on a platform subdomain path rather than the practice's own domain.

## Agency-search observation relevant to practices
- Both agency queries for Columbus, **Georgia** returned mostly Columbus, **Ohio** agency pages (see `research/competitors/georgia-columbus-agencies.md`). Practices face the same ambiguity: unqualified "Columbus" content and listings can be mis-associated.

## Strategy table

| Observed fact | Cautious interpretation | Proposed action | How to test |
|---|---|---|---|
| No TDP network statement on any homepage; veterans 14.3% of city adults; Fort Benning just outside Columbus | The network question is likely decisive for military families but unanswered online | State plan participation precisely (TDP, FEDVIP carriers, or "out of network — here is how claims work") on the insurance page and GBP description | Calls tagged "insurance/network"; booking rate before/after |
| Mon–Thu schedules | Friday availability is scarce in sample | If Friday or early-morning capacity exists, make it visible; align ads schedule to staffed hours | Call-answer rate by weekday; ads by day |
| Columbus GA/OH ambiguity | Entity signals need state qualifiers | Use "Columbus, GA" consistently in titles, GBP, schema address, citations | Search Console queries containing "ohio"/"oh"; misdirected calls |
| Template-platform URL on one site | Domain authority and branding may not accrue to the practice (hypothesis) | Check domain ownership; plan a migration only with redirects | Search Console coverage after migration |
| Shrinking city population (−2.3%) | Market growth will not carry new-patient numbers | Emphasise retention, recall, reviews and referral tracking alongside acquisition | Active-patient count trend; recall completion |

Limitations: three homepages; not representative.
