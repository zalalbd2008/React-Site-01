# Content editing guide (for the practice team)

You do not need to touch any code to edit the site. Each page is one text file in `content/`. The full rules are in `docs/authoring-guide.md`; this is the short version.

## Change wording on an existing page

1. Find the file. The route tells you where it lives:
   - `/services/…` → `content/services/<name>.mdx`
   - `/who-we-help/…` → `content/audiences/<name>.mdx`
   - `/markets/<state>/<city>/` → `content/markets/<state>/<city>.mdx` (state hubs are `index.mdx`)
   - `/blog/…` → `content/blog/<name>.mdx`
   - `/resources/…` → `content/resources/<name>.mdx`
   - everything else → `content/pages/<name>.mdx`
2. Edit the text below the second `---` line. Headings start with `##`. Keep links in the form `[words](/route/)`.
3. If the change is substantive (not a typo), set `updated: "YYYY-MM-DD"` in the frontmatter at the top.
4. Run `npm run content:check -- --filter /the/route/` and `node scripts/check-mdx.mjs content/path/file.mdx`. Both must be clean.
5. Commit to the `staging` branch; check the preview; merge to `main` to publish.

## Add a fact or statistic

Every number or platform rule needs a source. Add the source to a file in `content/sources/` (copy an existing entry's format), then put `<SourceNote ids={["your-id"]} />` after the paragraph. Invented or example numbers must be inside `<Illustrative title="…">…</Illustrative>`.

## Take a page offline

Set `status: "Drafted"` and redeploy. The page, its menu and footer links, sitemap entry and `llms.txt` line all disappear and the URL returns 404.

## Publish a page

A page goes live only when `status` is `Ready` (after review) or `Published`. At launch set `published: "YYYY-MM-DD"` to the real date and `status: "Published"`.

## Things the site must never say

Invented clients, results, reviews, team members, offices, phone numbers, prices, guarantees, turnaround times, awards or "best/#1" claims. Anything about the business must be in `docs/business-facts.md` first.

## Add a team member or author

When a leader's biography is approved, add them to `src/lib/authors.ts` (`kind: "Person"`, `verified: true`, `profileRoute: "/authors/<slug>/"`), then change `content/pages/leadership.mdx` from `Blocked` to `Drafted`. Author pages and Person structured data appear automatically.
