# Maple Creek Advisory website (first build, private preview)

This is the first public-facing website for the proposed combined advisory practice of Josh Muller and Matt LaFleur. It is served at **https://maplecreekadvisors.com** for founder review, and every push to the site branch redeploys it automatically. It is not yet launched: pages carry `noindex`, and the site does not claim that the business combination is complete.

"Maple Creek Advisory" is a working name. It is set in one place (`site.config.mjs`) so it can change after the founders decide.

## Why this stack

The site is plain static HTML built by a small Node script that has **no dependencies**. A six-page brochure site does not need a CMS, database, or client-side framework, and leaving those out keeps it fast, cheap to host anywhere, and easy to maintain. Node 18 or newer is the only requirement.

## Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/` with clean URLs (`/services/`). |
| `npm run preview` | Builds, then serves `dist/` at http://localhost:4173 (local only, sends `noindex`). |
| `npm run check` | Builds, then checks links, anchors, headings, titles, descriptions, alt text, indexing safety, the contact path, banned wording, and color contrast. Fails on any problem. |
| `npm run screenshots` | Optional. Renders every page at desktop and phone widths with Playwright, tests the mobile menu and skip link with the keyboard, and fails on console errors or horizontal scrolling. Screenshots go to `screenshots/` (not committed). Needs Playwright installed locally or globally. |
| `npm run build:artifact` | Builds a flat-file copy into `dist-artifact/` for sharing as a private hosted preview (see below). |
| `npm run og-image` | Regenerates `src/assets/og-image.png`, the link preview image. Run it after changing the name or tagline. Needs Playwright. |

## Where to edit

| To change | Edit |
| --- | --- |
| Business name, contact email, booking link, domain, indexing, BUILD link, location wording | `site.config.mjs` |
| Founder bios, roles, and portraits | `founders` in `site.config.mjs` |
| Any other page wording | `src/content.mjs` |
| Page structure | `src/pages.mjs` |
| Header, footer, meta tags, route list | `src/layout.mjs` |
| Colors, type, spacing | `src/assets/site.css` (tokens at the top) |
| Mobile menu and copy button | `src/assets/site.js` |

After any edit, run `npm run check`.

House style for copy: plain English, no em dashes, no prices, no guaranteed outcomes, no testimonials or client names, and no statement that the practice has merged or combined. `npm run check` flags several of these automatically.

### Adding founder photos

See `src/assets/photos/README.md`. Portraits appear on Home and About as soon as a `photo` entry is set, with no layout changes. Only use photos the founder has approved and has the rights to publish.

### Removing the BUILD page

Set `build.showPage` to `false`. The page, its navigation item, and footer link disappear, and About keeps a short BUILD paragraph that links to `build.url`.

## Structure

```
site.config.mjs        facts and launch settings (one place to change the name)
src/content.mjs        page copy
src/pages.mjs          page layouts
src/layout.mjs         shell, header, footer, meta tags, routes, SVG motifs
src/assets/            CSS, JS, favicon, photo slots
scripts/build.mjs      static build (site or artifact mode)
scripts/check.mjs      post-build checks
scripts/serve.mjs      local preview server
scripts/screenshots.mjs optional rendered checks
LAUNCH_CHECKLIST.md    founder signoffs required before anything goes public
DECISIONS.md           choices made in this build and why
```

Pages: Home, Services, How We Work, About, BUILD, Contact, and a 404 page.

## Search, analytics, and privacy

- **Indexing is off.** While `allowIndexing` is `false` (the default), every page carries `noindex, nofollow` and no sitemap is built. `robots.txt` allows crawling on purpose: search engines have to fetch a page to see its `noindex` tag, and blocking them can leave bare URLs in results. Anyone with the link can still open the site.
- **Canonical tags and Open Graph URLs and image** use `canonicalDomain` (`https://maplecreekadvisors.com`). `sitemap.xml` is built only when `allowIndexing` is also `true`.
- **No structured data** (for example `LocalBusiness`) is emitted, because the address, phone, and legal entity are not confirmed.
- **No analytics, cookies, or trackers.** The contact path is a plain email link, so the site collects no data itself. That is why there is no privacy page yet. If analytics or a form is added later, document what it collects and add a privacy page that describes the actual data handling.
- **Web fonts** load from Google Fonts, which means visitors' browsers request font files from Google. If the founders prefer no third-party requests at all, download the two families (Bricolage Grotesque, Source Serif 4) and self-host them in `src/assets/fonts/`.
- **Link preview image:** `src/assets/og-image.png` (1200 x 630) shows the name and tagline. Regenerate it with `npm run og-image` after changing either.

## Preview and deployment

- **Local:** `npm run preview`.
- **Live review site:** GitHub Pages, deployed by `.github/workflows/deploy.yml`. Every push to `claude/maple-creek-advisory-site` (or `main`) builds the site, runs `npm run check`, and publishes `dist/` only if the checks pass. A failed check leaves the previous version live.
- **Private preview (earlier):** `npm run build:artifact` produces a flat-file copy that was shared as a private claude.ai artifact. The live domain replaces it for day-to-day review.

### One-time GitHub Pages and DNS setup

1. In GitHub, open the `mca` repository, then **Settings > Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
2. Re-run the latest **Deploy site** workflow from the **Actions** tab, or push any change.
3. In **Settings > Pages > Custom domain**, enter `maplecreekadvisors.com` and save.
4. In Hostinger, open **Domains > maplecreekadvisors.com > DNS / Nameservers**. Delete the existing parking `A` record(s) for `@` and any `CNAME` or `A` record for `www`, then add:

   | Type | Name | Points to |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | mattlafleur-cle.github.io |

   Leave any `MX` or `TXT` records alone. Those handle email.
5. Once GitHub shows the DNS check as successful (minutes to a few hours), tick **Enforce HTTPS**.
6. Recommended: verify the domain in your GitHub account (**Settings > Pages > Add a domain**) so no one else can point a GitHub Pages site at it.

The repository is public, so the source, copy, and configuration (including the contact addresses) are public too. If the founders want the review site behind a login, move hosting to Cloudflare Pages with Cloudflare Access; the build does not change.

There are no environment variables. All settings are in `site.config.mjs`.

## Remaining launch decisions

See `LAUNCH_CHECKLIST.md`. In short: the name, the relationship wording, the final services and bios, a shared contact inbox, photos, the domain, and indexing.
