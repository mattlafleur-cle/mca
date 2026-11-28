# CLAUDE.md

Standing instructions for any Claude session working on maplecreekadvisors.com (Maple Creek Advisors: Josh Muller and Matt LaFleur, with Greg Snyder).

## Talking to Matt

- Always respond as succinctly as possible. Lead with the answer; skip recaps and filler.
- Never use em dashes (or en dashes) anywhere: replies, copy, code comments, commit messages.
- End every reply with **Confidence: X%**.
- Bold and confident in strategy and copy; never invent facts.

## Publishing

- Nothing goes live until Matt says "publish." Drafting or approving copy is not publishing.
- Pushing `claude/maple-creek-advisory-site` deploys the site (GitHub Actions to GitHub Pages).
- Stage work on `claude/owner-freedom-assessment-draft` (does not deploy). On "publish": `git fetch`, fast-forward the site branch to the draft, run `npm run check`, push.
- Always `git fetch` first. Another session may have pushed; rebase rather than overwrite.
- After publishing, confirm the live page (from a cloud session, scrape with a fresh fetch and a `?v=N` cache-buster).
- Log every change as a dated row in `DECISIONS.md`.

## Content rules

- No prices, except the event ticket on the workshop page (`pricesAllowed` in `scripts/check.mjs`).
- No phone numbers. No analytics or tracking.
- Never use the word "testimonial." Client quotes only with permission, exactly as written, first name and last initial.
- No promised outcomes or invented statistics. Keep client information confidential.
- Offices: Cuyahoga Falls, Elyria, and Lakewood (`site.config.mjs`).
- Keep private event details off the pages: workshop capacity (about 50) and the refund policy.

## Working on the site

- `npm run build`, `npm run check` (must pass), `npm run preview` (local at http://localhost:4173/).
- Copy lives in `src/*-content.mjs`; layouts in `src/pages.mjs`; routes and structured data in `src/layout.mjs`; settings in `site.config.mjs`; styles in `src/assets/site.css`.
- Check layout changes on phone, tablet, and desktop before asking to publish.
- Open launch items: `LAUNCH_CHECKLIST.md`.
