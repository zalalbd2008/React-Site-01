# City and state page brief (read after docs/writer-brief.md)

City pages describe **markets Alpha Dental Media serves remotely from Houston** — never branches. Truthful phrasing: "Dental marketing for practices in Atlanta", "we work with Atlanta practices remotely from Houston". Never imply a local office, local staff, local clients or local results.

## Research for each city (record everything in files, dated 2026-11-08)

### 1. Market definition and public data — `research/local/<state>-<city>.md`
- Define the market precisely: the incorporated city vs. county vs. metro area (name the Census MSA). Label each correctly (e.g. "Sandy Springs is a city in Fulton County within the Atlanta–Sandy Springs–Roswell metro area").
- Census QuickFacts / ACS (use https://www.census.gov/quickfacts/ or api.census.gov). Record the exact table/vintage (e.g. "ACS 2019–2023 5-year"), geography and what is measured. Useful: population, population change, median household income, % language other than English spoken at home, % under 18 / 65+, health insurance coverage, households, commuting time.
- Never turn a state or national figure into a city figure. Do not equate NPI/directory counts with active offices. Do not infer cosmetic demand from income or language preference from demographics — state them as hypotheses to test with client data.

### 2. Agency competition — `research/competitors/<state>-<city>-agencies.md`
- Run WebSearch for "dental marketing agency <city>" and "dental SEO <city>". Record: query, date, tool ("WebSearch tool, US results, unordered list — not a Google ranking"), result URLs/types.
- Open 3–5 relevant agency pages. Record: URL, positioning, services, proof shown, authorship, offer, CTA, content strengths, unanswered questions a practice owner would have.
- Do not claim ranks; do not infer traffic, spend or results; never copy wording. Summarise as a matrix: what Alpha Dental Media can make more useful, clearer or better evidenced.

### 3. Local dental-practice websites — `research/local/<state>-<city>-practices.md`
- Sample 3–5 practice websites in the city relevant to general/family, cosmetic/implant, pediatric or orthodontic service mix (via WebSearch "dentist <city>", "dental implants <city>", etc.). Do not contact them or submit forms.
- Record observable features only: treatment-page clarity, business info (address/hours/phone visible), booking steps (online booking? request form? phone only? how many taps on mobile — estimate from page structure), advertised hours (evenings/weekends?), location content, available languages (Spanish pages?), review presentation, insurance/payment info.
- Turn into a strategy table: **Observed fact → cautious interpretation → proposed action → how to test it**. A difficult booking flow suggests a usability opportunity; it does not prove anything about revenue.

## Writing the city page (≥2,000 words, 6–8 city-specific FAQs)

Required sections (adapt headings to the city — siblings must not read alike):
- Who we serve in this market (define the market; delivery model from Houston).
- What the local research suggests (dated observations, aggregated — never name or criticise practices or agencies; e.g. "Of five practice websites we reviewed on 8 November 2026, two offered online booking…").
- Specific business challenges for dental owners here (grounded in the data: growth, commuting/geography, language, insurance mix, seasonality, competition density as observed).
- Practical growth priorities and the recommended channel mix and WHY (SEO, local visibility, ads, website, measurement) — a reasoned choice that differs by city.
- A substantial "Dental SEO in <City>" section (this page covers that query too).
- Website and conversion implications.
- A phased action plan (<Timeline>) appropriate to the observed conditions.
- A locally relevant original visual: the observations→action <DataTable> and/or a <Matrix> local opportunity analysis. Do not reuse another city's analysis.
- An explicitly <Illustrative> example if useful (never a fake local client).
- City-specific buyer questions as FAQs (e.g. "Can a Houston-based agency handle our Dallas practice?", "Should we target the whole metro or only nearby ZIP codes?").
- Links: state hub (`/markets/<state>/`), 2–4 most relevant services, relevant articles/resources, `/dental-marketing-audit/`. Put these in `related` too.

Add `<SourceNote ids={[...]} />` next to data claims. Census and observation sources go in your sources JSON; observations use `kind: "observation"` with the research file path in `measures`, and `url` set to `https://alphadentalmedia.com/resources/research-methodology/` (site-wide decision, 2026-11-08: public source lists must never link to an individual practice or agency; the original search reference goes in `limitations`, and the sites observed are listed only in the internal research file). `npm run content:check` enforces this.

## State hub pages (≥2,000 words, 6–8 FAQs)

Regional considerations (state-level data, regulation/insurance landscape where relevant and sourced, geography and metro structure), how service is delivered remotely from Houston, how its cities relate (metros, commuter patterns), and links to city pages (child cards are appended automatically, but write the relationships in prose). California hub: explain the current focus is **Greater Los Angeles only**; no expansion into the rest of California, no offices. Texas hub: Houston is our base, but don't imply other Texas offices.

## Status

Set `status: "Drafted"` when the page meets the standard. If evidence cannot support a page, set `status: "Researching"` with a `statusReason`, record the gap in the brief and move on.

## Data vintage policy (added 2026-11-08)

All market pages use the **ACS 2020–2024 5-year Data Profiles** (released and available on data.census.gov; `node scripts/census.mjs` now defaults to 2024). Pages drafted with 2019–2023 values are updated to 2020–2024 at review, so sibling pages compare like with like. Population change over time uses the Census Vintage 2025 population estimates where cited; where a state source (e.g. Florida BEBR) is also cited, say which source each figure comes from and that methods differ.
