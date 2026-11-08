# Content authoring guide

Every page is one `.mdx` file under `content/`. Frontmatter holds the route, status, metadata and evidence record; the body holds the main content. Layout code never contains copy. The build fails on invalid frontmatter, unknown source ids or broken MDX.

## 1. Workflow and statuses

`Planned → Researching → Drafted → Fact-checked → Ready → Published` (plus `Blocked`, with `statusReason`).

- **Planned / Researching**: no body or incomplete. Invisible everywhere.
- **Drafted / Fact-checked**: visible only in the protected preview, with a status banner. Excluded from production routes (404), sitemap, llms.txt, footer, hub listings and related-content modules.
- **Ready**: passed page-level review. Rendered in production builds. Requires `published` date to be set at go-live.
- **Published**: live. `published` must be the real first-publication date. Change `updated` only after a substantive change.

Writers set **Drafted**. A page moves to **Fact-checked** only after every factual claim has been checked against its cited source, and to **Ready** only after page-level review (intent, depth, originality vs. siblings, links, attribution).

Before writing, add a research brief to `research/briefs/<route-slug>.md` (template in `research/briefs/_template.md`).

## 2. Frontmatter fields

Required on every entry (seeded files already contain most of them — keep `route`, `type`, `parent`, `serviceId`, `category`, `geo`, `order` unchanged):

```yaml
route: "/blog/dental-seo-cost/"      # canonical path, lowercase, trailing slash
type: "article"                       # see src/lib/schema.ts
status: "Drafted"
title: "Dental SEO Costs: …"          # the visible H1
metaTitle: "…"                        # ≤ 60 chars ideally, ≤ 70 hard limit; unique; matches intent
description: "…"                      # 50–170 chars; unique; accurate summary, not a keyword list
eyebrow: "SEO and local visibility"   # optional small label above H1
lede: "…"                             # 1–2 sentence concise opening shown under the H1 (keep above-the-fold short)
primaryIntent: "dental SEO cost"
secondaryQuestions: ["…", "…"]
audience: "Practice owners comparing SEO proposals"
author: "editorial-team"              # only verified ids from src/lib/authors.ts
reviewer: null                        # never claim a review that did not happen
sources: ["google-gbp-guidelines", "…"]   # ids from content/sources/*.json
related: ["/services/dental-seo-company/", "/blog/how-long-dental-seo-takes/"]
cta: "audit"                          # audit | call | none
published: null                       # set at go-live, never invented
updated: null
evidence: "sourced"                   # none-required | sourced | illustrative-only | needs-research | verified-client-data
verificationNotes: "Claims checked against … on 2026-11-08."
faqs:
  - q: "…?"
    a: "Direct 40–60 word answer first. Then detail if useful."
```

YAML tip: quote any string containing `:` or `#`. Use `|` block scalars for long FAQ answers if needed.

## 3. Body: Markdown + a small component set

Use `##` for main sections and `###` for subsections (the H1 comes from `title`; never write `#`). Headings must be descriptive ("How Google decides which dental practice appears in the map pack"), not clever. Headings feed the contents panel and the mobile section nav.

Standard Markdown works, including GFM tables, which render in a scrollable accessible wrapper.

Components (all server-rendered, accessible, no client JS unless noted):

```mdx
<KeyAnswer>A 40–60 word direct answer to the page's question.</KeyAnswer>

<Callout title="What this does not mean" tone="caution">Markdown **allowed** inside.</Callout>   {/* tone: note | caution | example */}

<Illustrative title="A two-office practice comparing budgets">
Worked example with invented numbers. Always use this wrapper for invented figures.
</Illustrative>

<Funnel title="From search to attended visit" steps={[
  { label: "Search visit", note: "A session that starts from search" },
  { label: "Inquiry", note: "Call, form or booking attempt" }
]} caption="What each stage means." />

<Timeline title="First 90 days" phases={[
  { when: "Weeks 1–2", title: "Diagnose", items: ["Baseline", "Access"] },
  { when: "Weeks 3–6", title: "Fix", items: ["…"] }
]} caption="Optional." />

<Matrix title="Local opportunity matrix" xLabel="Competition intensity" yLabel="Demand signal"
  cells={[
    { title: "High demand, low competition", text: "…", hot: true },
    { title: "High demand, high competition", text: "…" },
    { title: "Low demand, low competition", text: "…" },
    { title: "Low demand, high competition", text: "…" }
  ]} caption="Cells in reading order: top-left, top-right, bottom-left, bottom-right." />

<DecisionTree title="…" q="Do locations share one brand?" branches={[
  { answer: "Yes", q: "Is there one booking system?", branches: [
      { answer: "Yes", outcome: "Subfolders on one domain" },
      { answer: "No", outcome: "…" } ] },
  { answer: "No", outcome: "Separate domains may be justified" }
]} />

<Lanes title="Who owns what" lanes={[{ title: "SEO", items: ["…"] }, { title: "Ads", items: ["…"] }]} />

<Checklist title="Before you appeal" items={["…", "…"]} />

<DataTable caption="Observed fact → interpretation → action → test" columns={["Observed", "Cautious interpretation", "Proposed action", "How to test"]}
  rows={[["…", "…", "…", "…"]]} note="Observed 2026-11-08 on a sample of 4 practice websites. See methodology." />

<SourceNote ids={["census-quickfacts-houston"]}>Optional lead-in text.</SourceNote>

<ChildCards of="/services/" />            {/* cards for visible children of a hub */}
<LinkCards routes={["/blog/dental-seo-cost/"]} />   {/* cards for specific routes; drafts skipped */}
<GrowthCalculator />                       {/* client tool: resources page only */}
```

Rules for component props: plain strings only (no Markdown inside props); straight double quotes; escape `"` inside strings as `\"`; no `{` or `<` characters in body text outside components (write "less than" or use `&lt;`). Do not use `<br>`; use paragraphs.

Internal links: use relative routes with trailing slashes, e.g. `[how long SEO takes](/blog/how-long-dental-seo-takes/)`. Links to unpublished routes automatically render as plain text in public builds, so link to the correct canonical route even if it is not finished. External links open in a new tab automatically.

## 4. Sources

Add every source to a JSON array file in `content/sources/` **before** citing it. Use your own file (e.g. `content/sources/blog-ads.json`) so writers never edit the same file; ids must still be unique across all files (an identical duplicate with the same URL is tolerated). One object per source:

```json
{
  "id": "google-gbp-guidelines",
  "title": "Guidelines for representing your business on Google",
  "publisher": "Google Business Profile Help",
  "url": "https://support.google.com/business/answer/3038177",
  "published": null,
  "retrieved": "2026-11-08",
  "dataYear": null,
  "geography": null,
  "measures": "Eligibility and naming rules for Business Profiles",
  "limitations": "Policy page; Google may change it without notice.",
  "kind": "official-docs"
}
```

- `kind`: official-docs | government-data | industry-research | standard | legal | observation | other.
- ids are lowercase-hyphenated and unique. Check for an existing id before adding (another writer may have added it).
- For statistics keep the original denominator, geography, sample and period. A national or state figure never becomes a city figure.
- Only cite a page you actually retrieved, and only for what it actually says. If you cannot retrieve it, do not cite it.
- Observations of websites (competitor studies) are recorded in `research/` with date and URL; on public pages describe them in aggregate ("in a sample of four practice websites we reviewed on 8 November 2026…"), never naming or criticising a specific practice or agency.

Place a `<SourceNote>` directly after the paragraph or table containing a sourced claim. All cited ids are listed automatically at the end of the page.

## 5. Editorial standards (non-negotiable)

1. **Audience**: dental practice owners, managers, dental groups and DSOs evaluating marketing — never patients. No treatment advice. Specialty copy is about marketing those practices.
2. **No invented facts about Alpha Dental Media**: no clients, results, years in business, team members, offices, phone numbers, prices, guarantees, turnaround times, awards, partner badges or "free" offers. The only business facts allowed are in `docs/business-facts.md`: Houston-based; serves practices nationwide remotely; priority markets Texas, Florida, Georgia, Greater Los Angeles; the nine services as methodology.
3. **Methodology vs. results**: describe what we would do ("we start by…", "our audit checks…"), never imply it has been done for clients. No "we've helped hundreds of practices".
4. **No first-hand experience claims**: no "in our experience", "we've seen", "our clients typically". Use reasoning, documentation and labelled illustrative examples instead.
5. **No superlatives**: never "best", "#1", "leading", "top-rated", "guaranteed", "proven".
6. **Numbers**: every statistic needs a source; every invented number lives inside `<Illustrative>`. No search volumes, CPCs, market sizes, conversion benchmarks or traffic forecasts unless from a cited source with date and scope. Keywords are "research candidates".
7. **Local claims**: city pages describe "dental marketing for practices in {City}" delivered remotely from Houston. Never imply an office. Do not equate directory/NPI counts with active offices. Do not infer cosmetic demand from income, or language preference from demographics — present these as hypotheses to test with client data.
8. **Competitors**: never name or disparage specific competitors on public pages. Aggregate observations only.
9. **Platform guidance**: cite current official documentation (Google Ads Help, Business Profile Help, Search Central, OpenAI docs, Schema.org, web.dev, FTC). Check dates. If guidance may have changed, say what was current on the retrieval date.
10. **Legal/privacy**: no compliance guarantees ("HIPAA-compliant"). Describe obligations cautiously and cite the authority (HHS, FTC). Recommend the practice's own counsel where appropriate.
11. **Answer first**: where a heading asks a question, answer it in roughly 40–60 words, then explain. Not every paragraph is an answer block.
12. **Depth**: long-form types (home, service, audience, state, city, article) need **at least 2,000 words** of useful main content (FAQ answers count; source lists, CTAs and navigation do not). Target 2,000–2,400. No filler, no repeated introductions, no restating the heading. If evidence cannot support the length, stop, record the gap in the brief and leave status `Researching`.
13. **Original contributions**: each page needs at least three — a diagnostic framework, worked example, checklist, comparison table, decision tree or analysis — and at least one visual component that aids understanding.
14. **Distinct pages**: do not reuse paragraphs between pages. Sibling city pages must differ in analysis and recommendations, not just names. Respect query ownership (`docs/query-ownership.md`): link to the owning page instead of covering its topic in depth.
15. **FAQs**: six to eight substantive Q&As on major commercial pages (service, audience, state, city, home); fewer on articles. No FAQ repeated across pages verbatim.
16. **Tone**: a knowledgeable, plain-spoken adviser explaining a business decision: diagnosis, options, tradeoffs, implementation, dependencies, measurement. Discuss real constraints (appointment capacity, call handling, budget, competition, the practice's participation).
17. **CTA**: the audit (what it covers, what we need, what happens next) — never promise turnaround or free work.

## 6. Self-check before setting Drafted

- `npm run content:check` shows the word count and evidence status for your routes.
- Every `<SourceNote ids>` and `sources` id exists in a file under `content/sources/`.
- `node scripts/check-mdx.mjs content/path/to/file.mdx` compiles your MDX and reports syntax errors with line numbers.
- Every internal link points to a canonical route with a trailing slash.
- No banned phrases: `grep -Ein "best |#1|number one|leading|guarantee|proven|in our experience|we've helped|our clients" yourfile.mdx`.
