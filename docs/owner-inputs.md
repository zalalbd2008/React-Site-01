# Owner inputs register

Items only the business owner can supply or decide. Independent work continues without them; the **Blocks** column says what each one holds back.

| # | Input needed | Blocks | Current safe default |
|---|---|---|---|
| 1 | Legal business name and any DBA; documented relationship (if any) with WevTEC / Fix Website Issues / Bizzsol LLC | Legal pages' "who we are" line; About page relationship statement | Brand name only; no relationship stated |
| 2 | **Verified inquiry destination** (CRM webhook URL, or Resend API key + to/from addresses on a verified domain) | Live audit and consultation requests | Form returns an honest "not being accepted yet" error; nothing is stored |
| 3 | Booking provider (Calendly, HubSpot Meetings, etc.) and whether it posts a confirmation event | `consultation_booked` event; a real "Book a Strategy Call" calendar | Button opens the consultation request form |
| 4 | Public contact details to display (phone, email, hours) | Contact page details; `phone_link_clicked` | None displayed |
| 5 | Named leadership with approved bios, credentials and photos (licensed) | `/leadership/`, `/authors/{name}/`, Person schema, reviewer attribution | Organisation byline; leadership page Blocked |
| 6 | Confirmation that each service S1–S9 is currently delivered, and any limits (e.g. minimum budgets, market exclusivity) | Final sign-off of service pages | Pages describe methodology only, no commitments |
| 7 | Approved prices or ranges, if any are to be published | Pricing statements | Budget drivers explained; no prices |
| 8 | Client case studies with written permission, baselines and data access | Published case studies, proof sections | Case-study system built privately; worked examples labelled illustrative |
| 9 | Analytics account (GA4 measurement ID or tag manager container) and consent requirements | Measurement events | No analytics loaded |
| 10 | Search Console and Bing Webmaster Tools access for the production domain | Sitemap submission, URL inspection, AI-feature reporting | Steps documented in launch checklist |
| 11 | Existing live site URL inventory (or confirmation none exists) | Redirect map | None applied |
| 12 | AI training crawler preference (GPTBot, Google-Extended etc.) | robots.txt training rules | No training-specific rule; OAI-SearchBot explicitly allowed for search |
| 13 | Hosting choice and a git repository to push this project to | Durable storage, protected preview URL, production deploy | Project exists only in the ephemeral cloud session until pushed |
| 14 | Privacy-policy legal review (state privacy laws, any CRM/email processors used) | Publishing the privacy policy as final | Plain-language draft describing only what the site actually does |
| 15 | Clinical reviewer, if any article must give clinical guidance | Clinical content | Articles stay on marketing operations |
| 16 | Final logo (vector) and licensed brand imagery | Logo replacement; Open Graph image | Typographic wordmark; generated typographic OG image |
| 17 | Spanish-language plans and a reviewer for translations | EN/ES switch | No language switch shown |
