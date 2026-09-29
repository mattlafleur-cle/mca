# Launch checklist

Nothing on this list has been signed off. The site stays private, unindexed, and undeployed until every item is checked by the founders. Each item notes where the setting lives.

## Name and relationship

- [ ] **Business name.** Choose "Maple Creek Advisory," "Maple Creek Advisors," or another name. Check name availability with the Ohio Secretary of State, trademark conflicts, and domain availability. Setting: `siteName` in `site.config.mjs`.
- [ ] **Combination status.** Confirm the combination is effective before the site goes public. The copy describes the practice as it would exist at launch, but it does not say a transaction has closed.
- [ ] **Relationship wording.** Approve the About page "Why the two of us" section and the Home page integrated section. Copy: `about.together` and `home.integrated*` in `src/content.mjs`.
- [ ] **Footer copyright line.** It shows the working name. Confirm it matches the legal or registered trade name.

## Services and claims

- [ ] **Service menu and scope.** Approve all four services and their "Work can include" lists. Copy: `services.sections` in `src/content.mjs`.
- [ ] **Scope exclusion line.** Services says "Tax preparation and attest services (audits, reviews, and compilations) are not part of this service menu." Confirm this is accurate for the new practice, or remove or revise it.
- [ ] **CPA title in a non-CPA firm's marketing.** Matt's individual credential appears as "Matt LaFleur, CPA." Confirm how Ohio and California accountancy rules treat the use of the CPA title in the marketing of a firm that is not registered as a CPA firm, and whether any firm registration or disclaimer is needed. The site does not describe the practice itself as a CPA firm.
- [ ] **"Fractional CFO."** Used as a service category only. Confirm the founders are comfortable with the term.
- [ ] **No prices.** None are published. Decide whether that stays the case.

## People

- [ ] **Josh's bio.** Verify titles, chronology (built and sold a construction company), current programs, and the BUILD description. Setting: `founders` in `site.config.mjs`.
- [ ] **Matt's bio.** Verify "CPA licensed in Ohio and California" and "more than 12 years of experience," and approve the wording.
- [ ] **Photos.** None are used. Josh has speaking photographs in the project archive; confirm publication rights before adding any. See `src/assets/photos/README.md`.

## BUILD

- [ ] **BUILD destination.** The BUILD page links to https://www.maplecreekcoaching.com/build/, which was live on 2026-09-29. Josh should confirm this is the right destination and that it will stay current. Setting: `build` in `site.config.mjs` (`showPage: false` removes the page).
- [ ] **BUILD description.** Approve the wording. It says BUILD is associated with Josh's work, separate from advisory engagements, and not a required step. It does not describe BUILD's legal structure, fees, or event schedule.

## Contact

- [ ] **Shared inbox.** The contact path is a temporary email link to both legacy addresses (josh@maplecreekcoaching.com and matt@forestcity.pro). Create and test a shared address for the new brand, then replace `contact.recipients` in `site.config.mjs`.
- [ ] **Test the contact path end to end.** Send a message from a phone and a desktop email client and confirm both founders receive it.
- [ ] **Response time.** None is promised. Add `contact.responseTime` only if the founders commit to one.
- [ ] **Booking link.** None is shown. Add `bookingUrl` only after a scheduling page for the new brand exists and has been tested. Do not reuse either founder's existing booking link without agreement.
- [ ] **Address and phone.** None are shown. Decide whether either should appear.

## Domain, indexing, and hosting

- [ ] **Domain.** Choose and purchase the domain, then set `canonicalDomain` in `site.config.mjs`.
- [ ] **Hosting account.** Choose who owns the hosting account and deploy only after approval. Do not replace either founder's existing live site.
- [ ] **Open Graph image.** Add `src/assets/og-image.png` (1200 x 630) or remove the `og:image` line.
- [ ] **Indexing.** Set `allowIndexing: true` only for the approved production deploy. This also builds `sitemap.xml` and opens `robots.txt`.
- [ ] **Analytics and privacy.** None are included. If added, document the data flow, consent requirements, and a privacy page that describes the actual handling.
- [ ] **Fonts.** Decide whether to keep Google Fonts or self-host (see README).

## Final review

- [ ] Review every page on a phone and a desktop.
- [ ] Click every "Start a conversation" button and every link.
- [ ] Read all copy once more against the actual launch state.
- [ ] Run `npm run check` and `npm run screenshots` on the final build.
