# Page-level review brief (independent reviewer)

You did not write these pages. Your job is to make each one publishable or to say exactly why it is not. Read first: `docs/writer-brief.md` (incl. Source access notes), `docs/authoring-guide.md`, `docs/business-facts.md`, `docs/query-ownership.md`, `research/competitors/national-agency-matrix.md`.

For each assigned page:

1. **Read the whole page and its brief** (`research/briefs/…`).
2. **Fact-check.** For every sourced or factual claim (platform rules, legal statements, dates, statistics), open the cited source (curl via Bash as described in the writer brief; do not bypass 403s) and confirm the page says no more than the source does. Correct or remove anything unsupported. Claims resting on secondary sources (law-firm or trade-press summaries) must be worded as "reported by…" and must not be stated as official findings. Remove any claim about `utm_source=chatgpt.com` unless an official OpenAI page you opened supports it.
3. **Standards check.** No invented Alpha Dental Media facts (clients, results, years, team, offices, phone, prices, guarantees, turnaround, free offers). No first-hand experience claims ("we usually", "we often see", "in our experience", "our clients"); rephrase as method or reasoning. No superlatives. Numbers outside `<Illustrative>` must be sourced. Marketing scope only — no clinical advice. No named competitors. Methodology vs results clearly distinguished.
4. **Intent and overlap.** The page answers its owned question (`docs/query-ownership.md`) and links to owners for adjacent topics rather than duplicating them. Compare with sibling pages for repeated paragraphs or near-identical sections; rewrite duplicates.
5. **Usefulness.** Cut filler, repeated introductions and restated headings. If the page is far above ~2,800 words, trim the weakest sections while staying ≥2,000 for long-form types. Ensure a concise opening, answer-first where a heading asks a question, at least one useful visual, varied descriptive anchor text, and a specific next step.
6. **Apply relevant opportunities** from `research/competitors/national-agency-matrix.md` where they fit the page naturally (clear definitions of a lead vs qualified vs attended, ad spend vs fees, ownership, honest measurement limits) — without adding prices, results or promises.
7. **Metadata.** `metaTitle` unique and ≤ 60 chars where possible; `description` 120–160 chars, accurate; `title` (H1) clear; `lede` one or two sentences.
8. **Validate**: `node scripts/check-mdx.mjs <file>` OK and `npm run content:check -- --filter <route>` with no Problems.
9. **Set status**:
   - `Ready` — passes everything above. Update `verificationNotes` with "Independent review 2026-11-08: …" summarising what was checked and changed. Leave `published: null` (set at launch), `reviewer: null` (no named expert review is claimed).
   - Keep `Drafted` with a `statusReason` if something can only be fixed with owner input or unavailable evidence.
10. Append a short entry per page to `research/reviews/<your-batch>.md`: route, decision, what you changed, remaining risks.

Do not run `next build` or start servers. Report a table: route, decision, words, key changes, remaining risks.
