# Writer brief (for every content agent)

Project: `/home/user/alphadentalmedia` — a Next.js site for **Alpha Dental Media**, a Houston-based dental marketing agency that serves dental practices, dental groups and DSOs nationwide (remote delivery), with priority markets in Texas, Florida, Georgia and Greater Los Angeles, California. Audience: practice owners, dentists evaluating marketing, practice managers, dental groups, DSOs. **Never patients.** Business goal: qualified agency inquiries and the Dental Growth Audit.

Today is 2026-11-08. Use that as the retrieval/observation date.

## Read first (required)

1. `docs/authoring-guide.md` — file format, components, sources, editorial rules. Follow it exactly.
2. `docs/business-facts.md` — the ONLY facts about Alpha Dental Media you may state.
3. `docs/query-ownership.md` — which page owns which question. Link to owners; don't duplicate them.
4. One finished example: `content/pages/dental-marketing-audit.mdx`.

## Your job for each assigned file

1. Research with WebSearch and WebFetch (network is open). Prefer official docs (Google Ads Help, Google Business Profile Help, Google Search Central, OpenAI docs, Schema.org, web.dev, FTC, HHS), government data (Census QuickFacts / ACS, BLS), ADA Health Policy Institute. Actually open each page you cite and check what it says and its date. Never cite from memory.
2. Write a research brief at `research/briefs/<route-with-dashes>.md` using `research/briefs/_template.md` (e.g. `research/briefs/blog-dental-seo-cost.md`).
3. Add your sources to your own file `content/sources/<your-batch-name>.json` (JSON array). Before adding an id, `grep -r '"id": "<id>"' content/sources/` — reuse an existing id if it is the same URL; otherwise choose a unique id.
4. Write the page body into the existing `.mdx` file (keep its frontmatter `route`, `type`, `parent`, `serviceId`, `category`, `geo`, `order`; improve `title`, `metaTitle`, `description`, `lede`, `eyebrow` if useful; fill `secondaryQuestions`, `audience`, `sources`, `related`, `faqs`, `evidence`, `verificationNotes`). Set `status: "Drafted"`. Leave `published: null`, `reviewer: null`, `author: "editorial-team"`.
5. Validate: `node scripts/check-mdx.mjs <file>` must print OK, and `npm run content:check -- --filter <route>` must show ≥ 2,000 words for long-form types and no Problems for your routes. Fix until clean. Do NOT run `next build` or start servers (other agents are working concurrently).
6. Do not edit files outside your assignment except: your own sources JSON, your own briefs, and (if necessary) appending to `research/` files named for your batch.

## Quality bar (what reviewers will reject)

- Generic filler, repeated intros, restating headings, keyword stuffing, "near me" repetition.
- Any invented fact about Alpha Dental Media (clients, results, years, team, offices, phone, prices, guarantees, turnaround, badges, free offers). Methodology only: "we start by…", "the audit checks…".
- "In our experience", "we've seen", "our clients", "best", "leading", "#1", "guaranteed", "proven".
- Unsourced statistics; invented numbers outside `<Illustrative>`; CPCs, search volumes, market sizes, conversion benchmarks without a cited dated source.
- Clinical/treatment advice. Keep to marketing operations.
- Naming or criticising specific competitors or practices on the page.
- Copying wording, structure or diagrams from other agencies.
- Fewer than 2,000 words of useful main content on long-form types (home, service, audience, state, city, article). Target 2,000–2,600. Count via the script.
- No visual component. Every substantial page needs at least one of `<Funnel>`, `<Timeline>`, `<Matrix>`, `<DecisionTree>`, `<Lanes>`, `<DataTable>`, `<Checklist>` or a GFM table that genuinely aids understanding.

## What good looks like

A knowledgeable dental growth adviser explaining a real business decision: the diagnosis, choices, tradeoffs, implementation steps, dependencies (what the practice must do: answer phones, provide access, approve content, capacity), budget drivers, and how success is measured (separating inquiries, qualified inquiries, bookings, attended visits, collected revenue). Use descriptive H2/H3 headings; answer a question heading directly in ~40–60 words before detail. Include at least three original contributions (framework, worked example in `<Illustrative>`, checklist, comparison table, decision tree). Link naturally to the owning service page, related articles, tools (`/resources/dental-growth-calculator/`, `/resources/dental-marketing-metrics/`, `/resources/dental-website-audit-checklist/`, `/resources/dental-agency-comparison-scorecard/`) and `/dental-marketing-audit/`, with varied descriptive anchor text.

When done, reply with: files written, word counts, sources added, and any gaps you could not evidence (left as notes in the brief).

## Source access notes (added 2026-11-08, read this)

- If WebFetch fails (DNS "ENOTFOUND" or similar), fetch with Bash instead: `curl -sSL --max-time 30 "<url>" | python3 -c "import sys,re,html;t=sys.stdin.read();t=re.sub(r'(?s)<(script|style).*?</\1>','',t);print(html.unescape(re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',t)))[:20000])"`. Google Help/Search Central/OpenAI/Schema.org/web.dev/W3C pages load this way.
- Some government sites (www.census.gov QuickFacts, www.hhs.gov, www.ftc.gov) return 403 to automated clients. **Do not try to get around that** (no browser user-agent spoofing or other workarounds). Use official alternatives:
  - Census ACS for a city: `node scripts/census.mjs "<City>" <TX|FL|GA|CA>` — returns the official geography name, GEOID, ACS 2019–2023 5-year Data Profile values with margins of error and the data.census.gov table URLs to cite (cite those URLs; publisher "U.S. Census Bureau", dataYear "2019–2023", geography = the exact geography name returned).
  - FTC rules: Federal Register API (e.g. `https://www.federalregister.gov/api/v1/documents/2024-18519.json`) or eCFR (`curl -sS --compressed "https://www.ecfr.gov/api/versioner/v1/full/2024-10-21/title-16.xml?part=465"`).
  - HHS guidance: if unreachable, cite the Federal Register, eCFR (45 CFR Parts 160/164) or court records that are reachable, and say in the brief which page could not be retrieved. Never cite a page you did not open.
