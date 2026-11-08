# AI visibility measurement plan

**Status: not yet tested.** No AI engine has been queried for this sample, so there are no results to report. Results must never be simulated, and an API response is not equivalent to a consumer product's search experience.

## Reproducible prompt sample (v1, 2026-11-08)

| # | Prompt | Type | Market |
|---|---|---|---|
| 1 | Which dental marketing agencies serve practices in Houston? | Commercial | Houston |
| 2 | How should an Atlanta dental group evaluate a marketing agency? | Commercial/educational | Atlanta |
| 3 | What should a Miami dental practice measure before increasing Google Ads spend? | Educational | Miami |
| 4 | How can a Los Angeles dental practice evaluate AI search visibility? | Educational | Los Angeles |
| 5 | Should a dental group use subfolders or separate domains? | Educational | National |
| 6 | What is the difference between a dental lead and an attended new-patient visit? | Educational | National |
| 7 | Dental SEO company for a multi-location practice in Texas | Commercial | Texas |
| 8 | Who can help a dental practice in Orlando with Google Business Profile problems? | Commercial | Orlando |
| 9 | How much does dental SEO cost and how do I compare proposals? | Educational | National |
| 10 | Dental Google Ads management for implant consultations in Dallas | Commercial | Dallas |
| 11 | What questions should I ask a dental marketing agency about account ownership? | Educational | National |
| 12 | Is Alpha Dental Media a dental marketing agency? What does it do? | Brand | National |

## Engines and recording

Engines to test (consumer products, logged-out where possible, fresh session): Google Search with AI Overviews / AI Mode, ChatGPT (with search), Perplexity, Microsoft Copilot, Gemini. Mark any engine not tested as **untested**.

For every run record in `research/ai-visibility/YYYY-MM-DD.csv`:

`date, engine, product/mode, prompt #, location/context (city or VPN region; logged in?), web search used (yes/no/unknown), brand mentioned (y/n), alphadentalmedia.com cited (y/n + URL), recommended (y/n), factual accuracy of statements about us (accurate / inaccurate: what / n/a), other sources cited, screenshot file`

Mention, citation, recommendation and referral visit are four different outcomes and are reported separately. Any percentage applies only to this sample on that date.

## Review schedule

- **Day 0** (launch week): baseline run of all prompts on all engines.
- **Day 30**: repeat; compare per prompt. Check Search Console indexing of the cited/target pages and GA4 AI referral sessions.
- **Day 60**: repeat; review whether inaccurate statements trace back to a source we can correct (our pages, directory listings).
- **Day 90**: repeat; decide which pages need clearer answers, better evidence or updated facts. Rotate in two new prompts, keep the original 12 for comparability.

No placement or citation is promised; AI answers vary by session, location and time.
