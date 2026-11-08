# Research brief — /resources/dental-growth-calculator/

- **Canonical route:** /resources/dental-growth-calculator/
- **Page type:** resource
- **Primary query / intent:** dental funnel / cost per attended new-patient visit calculator
- **Audience and the decision being answered:** Owners planning or reviewing paid search budgets.
- **Secondary questions:** How to estimate cost per new patient; include fees?; ROAS vs ROI; are defaults benchmarks?
- **Overlapping topics owned by other pages (link, don't duplicate):** /blog/dental-google-ads-budget/ (budget from targets), /blog/dental-marketing-roi/, metrics glossary for definitions.
- **Geographic scope:** national (US)
- **Researched outline:** Key answer; <GrowthCalculator />; how to use; formulas DataTable; illustrative defaults walk-through; ad spend vs fees; ROAS vs profit ROI; assumptions; limitations; zero-denominator handling; using the result.
- **Intended internal links:** see `related` in the page frontmatter; audit CTA /dental-marketing-audit/ where cta is not none.
- **Three original contributions:**
1. Formula table with units matching src/lib/calculator.ts. 2. Worked example of defaults showing ROAS 2.8× alongside −25% profit-based ROI. 3. Zero-denominator/missing-value rules list.
- **Factual claims and evidence:**

| Claim | Source id | What the source actually measures | Geography / period | Limitation |
|---|---|---|---|---|
| Avg CPC definition | google-ads-avg-cpc | Glossary | 2026-11-08 | — |
| ROAS as conversion value per cost | google-ads-target-roas | Bidding article | 2026-11-08 | Advertiser-reported value |

- **Keyword research:** research candidates only (no tool data available).
- **Author / reviewer:** editorial-team / none (no review claimed)
- **Evidence status:** see page frontmatter `evidence`. All cited pages retrieved 2026-11-08 via curl (WebFetch could not resolve Google/web.dev hosts in this session).
- **Proposed visual and its purpose / data:** The calculator itself plus a formulas DataTable.
- **CTA and next-step deliverables:** Dental Growth Audit where applicable.
- **Gaps / what needs client data:** Defaults (CPC $6, 8%/60%/55%/80%, $1,500 fee) are code DEMO_INPUTS and explicitly not benchmarks; no sourced dental CPC or conversion benchmark was used. Revenue $800 and 40% margin in the worked example are invented, inside <Illustrative>.
