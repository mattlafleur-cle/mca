# Build decisions

Choices made in the first build, with the reason for each. Founders can reverse any of these.

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-29 | Working name "Maple Creek Advisory," set once in `site.config.mjs`. | Brief names it as the working display name. "Maple Creek Advisors" remains open. |
| 2026-09-29 | Static HTML from a dependency-free Node build. | Small brochure site; no CMS, database, or framework needed. Any static host works. |
| 2026-09-29 | Contact is an email link to both legacy addresses, not a form. | No shared inbox or tested form endpoint exists. Brief forbids a form that could silently drop messages. |
| 2026-09-29 | Standalone BUILD page kept, linking to maplecreekcoaching.com/build/. | That page was verified live on 2026-09-29. Josh still needs to approve it as the destination. |
| 2026-09-29 | No booking button, prices, phone, address, response-time promise, testimonials, or photos. | None are approved or verified for the new brand. |
| 2026-09-29 | Services includes a line that tax preparation and attest services are not on the menu. | Brief says not to imply these are offered. Flagged for approval because it is also a claim. |
| 2026-09-29 | Type-led design with generated contour lines and a two-lanes diagram instead of stock imagery. | No approved photos are available. The diagram shows the core idea: the people side and the numbers side meeting in one plan. |
| 2026-09-29 | Single light theme. | Brand site with a fixed palette; one well-tested theme is easier to keep accessible. |
| 2026-09-29 | Indexing off by default; canonical, sitemap, and absolute Open Graph URLs only after a domain is approved. | Keeps previews out of search results and avoids inventing a canonical host. |
| 2026-09-29 | Google Fonts for type. | Simple, and required by the private preview host. Self-hosting is documented as an option. |
| 2026-09-29 | Serve the review site at maplecreekadvisors.com now, deployed by GitHub Actions to GitHub Pages. | Newer direct instruction from Matt, replacing the brief's "do not deploy" so the founders can review on the fly. The domain was parked at Hostinger with no site to replace. The repository is public, so Pages is free. |
| 2026-09-29 | Keep `noindex` on every page; allow crawling in robots.txt. | Launch signoffs are still open. Crawlers must be able to read `noindex` for it to work on a live domain. |
| 2026-09-29 | Kept the displayed name "Maple Creek Advisory" even though the domain says "Advisors." | Name is a founder decision. Flagged in the launch checklist. Superseded below. |
| 2026-09-29 | Renamed the site to "Maple Creek Advisors." | Direct instruction from Matt, matching the domain. |
| 2026-09-29 | Show Matt's name as "Matt LaFleur" with no ", CPA" suffix. | Direct instruction from Matt. His bio still states the CPA license as a fact. |
| 2026-09-29 | Josh approved the site content (bios, services, BUILD, relationship wording, public review URL). | Reported by Matt. Legal-name, combination, CPA-title, contact, and booking items remain open. |
| 2026-09-29 | Footer disclosure on every page: not a registered CPA firm, no attest services. | Matt's direction, to close the CPA-title question under Ohio R.C. 4701.14. `npm run check` fails if any page is missing it. |
| 2026-09-29 | Primary action changed from email to booking: "Schedule a conversation" opens Matt's Fantastical link. | Matt's direction; lower friction than email. Email stays on the Contact page. Falls back to "Start a conversation" and the Contact page if `bookingUrl` is cleared. |
| 2026-10-02 | Drew from the BUILD plan Matt shared: four business stages on Home (Startup, Grow up, Scale up, Hand off), and on the BUILD page the full name, promise, current gathering formats and locations, and a four-step involvement path. Added strategic planning retreats to coaching. | Matt's direction. Used only what is current and true today. Left out membership tiers, sponsors, chapters, licensing, podcast, book, summit, and the planned LLC. |
| 2026-10-02 | All external BUILD links now point to https://buildowners.com/. | Matt's direction. Replaces maplecreekcoaching.com/build/. |
| 2026-10-02 | BUILD described as both a peer community and a method ("a room, a method, and a guide"), led by Josh (founder) and Matt (facilitator). BUILD page adds the Five A's, the 65-tool Toolbox, the guides, Retreat to Advance, and format descriptions. Josh's and Matt's bios and the About BUILD paragraph updated to match. | Matt's direction: BUILD is both combined. Wording follows buildowners.com as of 2026-10-02. |
| 2026-10-02 | Search indexing turned on: pages now say index, sitemap.xml and llms.txt are published, robots.txt points to the sitemap. | Matt's direction. |
| 2026-10-02 | Added dedicated pages for business coaching, fractional CFO, and business advisory, each with region-specific titles, FAQ, and structured data (ProfessionalService, Service, FAQPage, founders). Bookkeeping stays a section of Services, not its own page. | Matt's direction that Maple Creek Advisors should rank for fractional CFO and advisory work. Keeping bookkeeping off its own page avoids competing with Forest City CPA in search. |
| 2026-10-02 | Site names offices in Cuyahoga Falls and Elyria and lists areas served across Northeast Ohio. No street address or phone in structured data. | Office towns confirmed by Matt. Street addresses and phone not yet provided. `npm run check` fails if an unconfirmed address or phone appears. |
| 2026-10-02 | Broadened audience: About "Who we work with" and the industry FAQ no longer emphasize construction and trades. | Consistent with Matt's direction to apply broadly to owners and entrepreneurs. |
| 2026-10-02 | Removed the Five A's and BUILD Toolbox section from the BUILD page. | Matt's direction. Brief mentions of the method remain in the "A method" card, Retreat to Advance, and the About BUILD paragraph. |
