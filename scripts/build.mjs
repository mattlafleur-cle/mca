// Builds the static site.
//   node scripts/build.mjs                  -> dist/ with clean URLs (/services/) for hosting
//   node scripts/build.mjs --mode=artifact  -> dist-artifact/ with flat files (services.html) for a private preview
import { mkdir, rm, writeFile, readdir, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import site from '../site.config.mjs';
import makeContent from '../src/content.mjs';
import { routes, createLinker, pageShell } from '../src/layout.mjs';
import * as pages from '../src/pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv.includes('--mode=artifact') ? 'artifact' : 'site';
const outDir = path.join(root, mode === 'artifact' ? 'dist-artifact' : 'dist');

function validateConfig() {
  const problems = [];
  if (site.allowIndexing && !site.canonicalDomain) problems.push('allowIndexing is true but canonicalDomain is not set.');
  if (site.canonicalDomain && !/^https:\/\/[^/]+$/.test(site.canonicalDomain))
    problems.push('canonicalDomain must look like https://www.example.com with no trailing slash.');
  if (!site.contact.recipients.length) problems.push('contact.recipients is empty; the site would have no working contact path.');
  if (site.analytics) problems.push('analytics is set, but no analytics integration exists yet. See README before enabling.');
  if (problems.length) {
    console.error('Configuration problems:\n- ' + problems.join('\n- '));
    process.exit(1);
  }
}

async function copyDir(from, to) {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) await copyDir(src, dest);
    else if (!entry.name.endsWith('.md')) await copyFile(src, dest);
  }
}

async function main() {
  validateConfig();
  await rm(outDir, { recursive: true, force: true });
  const link = createLinker(site, mode);
  const copy = makeContent(site);
  const written = [];

  for (const route of routes(site)) {
    const render = pages[route.key];
    if (!render) throw new Error(`No renderer for page ${route.key}`);
    // The private preview is listed by its page title, so the entry page carries a plain name there.
    const meta = mode === 'artifact' && route.key === 'home' ? { ...copy.home, title: `${site.siteName} Preview` } : copy[route.key];
    const html = pageShell({ site, link, mode, route, meta, body: render({ site, link, copy }) });
    const rel = mode === 'artifact' ? route.file : route.out;
    const file = path.join(outDir, rel);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
    written.push(rel);
  }

  await copyDir(path.join(root, 'src/assets'), path.join(outDir, 'assets'));

  // robots.txt and sitemap.xml: crawling stays blocked until the approved production settings are in place.
  if (mode === 'site') {
    const indexing = site.allowIndexing && site.canonicalDomain;
    const robots = indexing
      ? `User-agent: *\nAllow: /\n\nSitemap: ${site.canonicalDomain}/sitemap.xml\n`
      : 'User-agent: *\nDisallow: /\n';
    await writeFile(path.join(outDir, 'robots.txt'), robots);
    written.push('robots.txt');
    if (indexing) {
      const urls = routes(site)
        .filter((r) => !r.hidden)
        .map((r) => `  <url><loc>${site.canonicalDomain}${r.path}</loc></url>`)
        .join('\n');
      await writeFile(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      written.push('sitemap.xml');
    }
  }

  let bytes = 0;
  for (const rel of written) bytes += (await stat(path.join(outDir, rel))).size;
  console.log(`Built ${written.length} files (${(bytes / 1024).toFixed(1)} KB of HTML/text) into ${path.relative(root, outDir)}/ [${mode} mode]`);
  if (!site.allowIndexing) console.log('Indexing is OFF: every page carries noindex and robots.txt blocks crawling.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
