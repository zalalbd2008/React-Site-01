# Research brief — /resources/dental-marketing-metrics/

- **Canonical route:** /resources/dental-marketing-metrics/
- **Page type:** resource
- **Primary query / intent:** dental marketing metrics definitions (glossary; owns metric definitions site-wide)
- **Audience and the decision being answered:** Owners/managers/groups reading marketing reports; decision: which numbers to trust and how to define them in a measurement plan.
- **Secondary questions:** Inquiry vs qualified vs booking; Ads conversion vs new patient; ROAS vs ROI; cost per attended visit; clicks vs sessions.
- **Overlapping topics owned by other pages (link, don't duplicate):** /blog/dental-marketing-roi/ (leads→profit reasoning), /blog/dental-call-tracking/ (call counting), /services/dental-conversion-tracking/ (S9), /blog/dental-group-marketing-dashboard/.
- **Geographic scope:** national (US)
- **Researched outline:** Key answer; funnel; platform vs practice DataTable; visibility (impressions, clicks, CTR); engagement (sessions, GBP interactions); inquiries (calls/forms/booking attempts, qualified, bookings); outcomes (attended, new patients, treatment acceptance, collected revenue); cost (CPC, cost per inquiry, per qualified, per attended); return (ROAS, contribution margin, profit-based ROI); illustrative month; measurement plan.
- **Intended internal links:** see `related` in the page frontmatter; audit CTA /dental-marketing-audit/ where cta is not none.
- **Three original contributions:**
1. Platform-vs-practice comparison table (what each metric cannot tell you). 2. Definition/data source/misuse triad for 19 metrics. 3. Illustrative month reported two ways ($75 per conversion vs $643 per attended visit).
- **Factual claims and evidence:**

| Claim | Source id | What the source actually measures | Geography / period | Limitation |
|---|---|---|---|---|
| Impression counted each time ad shown; Maps may show partial ad | google-ads-impressions | Glossary definition | Global, current at 2026-11-08 | May change |
| Click counted even if visitor does not reach site; invalid clicks filtered | google-ads-clicks | Glossary | same | — |
| CTR = clicks ÷ impressions; good CTR relative | google-ads-ctr | Glossary | same | No benchmarks |
| Avg CPC = total click cost ÷ clicks; $0.20+$0.40 example | google-ads-avg-cpc | Glossary | same | — |
| Conversion = action used to measure/optimise; can exceed 100% rate | google-ads-key-event-conversion; google-ads-conversion-rate | Glossary | same | Terminology changed 2024 |
| GA4 session; 30-min timeout; estimated; attribution on session_start | ga4-sessions | Help article | same | GA4 only |
| Engaged session definition | ga4-dimensions-metrics | Reference list | same | — |
| Key event marking not retroactive | ga4-key-events | Help article | same | — |
| GBP calls = call-button clicks; views unique once/day; includes organic+Ads; verified only | gbp-performance | Help article | same | Metrics vary by business |
| ROAS = conversion value per cost; 500% example | google-ads-target-roas | Bidding article | same | Value is advertiser-reported |

- **Keyword research:** research candidates only (no tool data available).
- **Author / reviewer:** editorial-team / none (no review claimed)
- **Evidence status:** see page frontmatter `evidence`. All cited pages retrieved 2026-11-08 via curl (WebFetch could not resolve Google/web.dev hosts in this session).
- **Proposed visual and its purpose / data:** Funnel (impression→collected revenue) and DataTable (platform vs practice metrics).
- **CTA and next-step deliverables:** Dental Growth Audit where applicable.
- **Gaps / what needs client data:** No official definitions exist for qualified inquiry, booking, attended visit, treatment acceptance, collected revenue, contribution margin or profit-based ROI — labelled as working definitions. No benchmarks used (none sourced). Word count by script is ~3,080 (includes table props and FAQs), above the 1,800–2,500 guide because 19 metrics each need definition/source/misuse; editor may trim.
