// Post-build checks for dist/. Fails (exit 1) on any error.
// Covers: internal links and anchors, one h1 per page, heading order, unique titles and descriptions,
// alt text, indexing safety, contact path, banned words and characters, and color contrast of key pairs.
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import site from '../site.config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const errors = [];
const warnings = [];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const exists = async (p) => stat(p).then(() => true, () => false);
const textOf = (html) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');

// Words and characters that must not reach public pages.
const banned = [
  [/\u2014/, 'em dash'],
  [/\u2013/, 'en dash'],
  [/\bTODO\b|\bTBD\b|lorem ipsum|placeholder/i, 'placeholder text'],
  [/coming soon/i, '"coming soon"'],
  [/guarantee/i, 'guarantee language'],
  [/\bmerg(?:er|ed)\b|\bacquired\b|\bacquisition\b/i, 'transaction language'],
  [/\bdelve|seamless|holistic|game-changing|unlock the power|robust\b/i, 'stock phrasing'],
  [/\$\s?\d/, 'a price'],
  [/testimonial/i, 'testimonial'],
];

const files = (await walk(dist)).filter((f) => f.endsWith('.html'));
const titles = new Map();
const descriptions = new Map();
const idsByFile = new Map();
const pageFor = (href) => {
  const clean = href.split('#')[0];
  if (clean.endsWith('/')) return path.join(dist, clean, 'index.html');
  return path.join(dist, clean);
};

for (const file of files) {
  const html = await readFile(file, 'utf8');
  idsByFile.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

for (const file of files) {
  const rel = path.relative(dist, file);
  const html = await readFile(file, 'utf8');
  const text = textOf(html);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) errors.push(`${rel}: missing <title>`);
  if (!desc) errors.push(`${rel}: missing meta description`);
  if (title) titles.set(title, [...(titles.get(title) || []), rel]);
  if (desc) {
    descriptions.set(desc, [...(descriptions.get(desc) || []), rel]);
    if (desc.length > 165 || desc.length < 70) warnings.push(`${rel}: description is ${desc.length} characters`);
  }
  if (title && title.length > 80) warnings.push(`${rel}: title is ${title.length} characters`);

  if (!/<html lang="en">/.test(html)) errors.push(`${rel}: missing lang attribute`);
  if (!/class="skip-link" href="#main"/.test(html) || !/id="main"/.test(html)) errors.push(`${rel}: skip link or main target missing`);

  const indexingOn = site.allowIndexing && site.canonicalDomain;
  if (!indexingOn && !/<meta name="robots" content="noindex, nofollow">/.test(html)) errors.push(`${rel}: preview page is indexable`);
  if (!site.canonicalDomain && /rel="canonical"/.test(html)) errors.push(`${rel}: canonical emitted without an approved domain`);
  // Structured data must parse and must not publish an unconfirmed street address or phone.
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const block of ld) {
    try {
      const data = JSON.parse(block);
      const flat = JSON.stringify(data);
      if (/"streetAddress"|"telephone"/.test(flat)) errors.push(`${rel}: structured data includes a street address or phone that has not been confirmed`);
      if (!flat.includes('"ProfessionalService"')) errors.push(`${rel}: structured data is missing the business entity`);
    } catch (e) {
      errors.push(`${rel}: structured data is not valid JSON (${e.message})`);
    }
  }
  if (site.canonicalDomain && rel !== '404.html' && !ld.length) errors.push(`${rel}: structured data missing`);
  if (/googletagmanager|google-analytics|gtag\(|plausible|fbq\(|hotjar/i.test(html)) errors.push(`${rel}: tracking script found`);

  if (site.footerNote && !html.includes(site.footerNote)) errors.push(`${rel}: footer disclosure missing`);
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) errors.push(`${rel}: expected one h1, found ${h1s.length}`);
  let prev = 0;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const level = Number(m[1]);
    if (prev && level > prev + 1) errors.push(`${rel}: heading jumps from h${prev} to h${level}`);
    prev = level;
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]+"/.test(m[0])) errors.push(`${rel}: image without alt text`);
    if (!/\swidth="\d+"/.test(m[0]) || !/\sheight="\d+"/.test(m[0])) errors.push(`${rel}: image without dimensions`);
  }
  for (const m of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
    const label = m[1].replace(/<[^>]+>/g, '').trim();
    if (!label) errors.push(`${rel}: link without text`);
    if (/^(click here|here|read more|learn more)$/i.test(label)) errors.push(`${rel}: vague link text "${label}"`);
  }
  if (!site.bookingUrl && /Schedule a (time|conversation)|Book a call|Book now/i.test(text)) errors.push(`${rel}: booking action shown without an approved booking URL`);

  for (const [re, name] of banned) if (re.test(text)) errors.push(`${rel}: contains ${name}: "${text.match(re)[0]}"`);

  // Internal links and in-page anchors.
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    const [target, hash] = href.startsWith('#') ? [file, href.slice(1)] : [pageFor(href), href.split('#')[1]];
    if (!href.startsWith('/') && !href.startsWith('#')) {
      errors.push(`${rel}: relative link "${href}" in site build`);
      continue;
    }
    if (!(await exists(target))) {
      errors.push(`${rel}: broken link ${href}`);
      continue;
    }
    if (hash && !idsByFile.get(target)?.has(hash)) errors.push(`${rel}: missing anchor #${hash} in ${href}`);
  }

  const ctaHref = (site.bookingUrl || '/contact/').replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
  const ctaText = site.bookingUrl ? 'Schedule a conversation' : 'Start a conversation';
  if (rel !== '404.html' && !new RegExp(`href="${ctaHref}"[^>]*>${ctaText}<`).test(html))
    errors.push(`${rel}: primary action "${ctaText}" missing`);
}

for (const [t, where] of titles) if (where.length > 1) errors.push(`duplicate title "${t}" on ${where.join(', ')}`);
for (const [d, where] of descriptions) if (where.length > 1) errors.push(`duplicate description on ${where.join(', ')}`);

// Contact path.
const contactHtml = await readFile(path.join(dist, 'contact/index.html'), 'utf8');
for (const email of site.contact.recipients) if (!contactHtml.includes(email)) errors.push(`contact page does not show ${email}`);
if (!/href="mailto:[^"]+\?subject=/.test(contactHtml)) errors.push('contact page has no working email action');
if (/<form\b/.test(contactHtml)) errors.push('contact form present; only ship a form whose delivery has been tested');

// Robots and sitemap.
const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
if (site.allowIndexing && site.canonicalDomain) {
  if (/Disallow: \/\s/.test(robots)) errors.push('indexing is on but robots.txt blocks crawling');
  if (!robots.includes(`Sitemap: ${site.canonicalDomain}/sitemap.xml`)) errors.push('robots.txt does not point to the sitemap');
  const sitemap = (await exists(path.join(dist, 'sitemap.xml'))) ? await readFile(path.join(dist, 'sitemap.xml'), 'utf8') : '';
  for (const f of files) {
    const rel = path.relative(dist, f);
    if (rel === '404.html') continue;
    const url = `${site.canonicalDomain}/${rel.replace(/index\.html$/, '')}`;
    if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap.xml is missing ${url}`);
  }
  if (!(await exists(path.join(dist, 'llms.txt')))) errors.push('llms.txt missing');
}
if (!(site.allowIndexing && site.canonicalDomain) && /Disallow: \/\s/.test(robots)) errors.push('robots.txt blocks crawling, which hides the noindex tags from search engines');
if (!(site.allowIndexing && site.canonicalDomain) && (await exists(path.join(dist, 'sitemap.xml')))) errors.push('sitemap.xml built before indexing is approved');
if (!site.canonicalDomain && (await exists(path.join(dist, 'sitemap.xml')))) errors.push('sitemap.xml built without an approved domain');

// Contrast for the color pairs the design relies on (WCAG 2.2 AA: 4.5 for text, 3 for large text and UI).
const css = await readFile(path.join(root, 'src/assets/site.css'), 'utf8');
const token = (name) => css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const pairs = [
  ['ink', 'paper', 4.5], ['ink-muted', 'paper', 4.5], ['ink-muted', 'paper-deep', 4.5], ['ink-muted', 'paper-card', 4.5],
  ['maple-ink', 'paper', 4.5], ['maple-ink', 'paper-deep', 4.5], ['evergreen', 'paper', 4.5], ['evergreen', 'paper-deep', 4.5],
  ['on-dark', 'evergreen', 4.5], ['on-dark-muted', 'evergreen', 4.5], ['on-dark-muted', 'evergreen-deep', 4.5],
  ['maple', 'evergreen', 4.5], ['maple', 'evergreen-deep', 3], ['maple-ink', 'paper', 3],
];
const contrastReport = [];
for (const [fg, bg, min] of pairs) {
  const a = token(fg);
  const b = token(bg);
  if (!a || !b) {
    errors.push(`contrast: token ${!a ? fg : bg} not found`);
    continue;
  }
  const r = ratio(a, b);
  contrastReport.push(`${fg} on ${bg}: ${r.toFixed(2)}`);
  if (r < min) errors.push(`contrast: ${fg} on ${bg} is ${r.toFixed(2)}, needs ${min}`);
}

console.log(`Checked ${files.length} pages.`);
console.log('Contrast: ' + contrastReport.join(' | '));
for (const w of warnings) console.log(`warning: ${w}`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('All checks passed.');
