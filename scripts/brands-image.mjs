// Renders the family of brands board to src/assets/brands/brand-family.png, linked from /brands/ as a download.
// Run after changing src/brands-content.mjs: npm run brands-image. Requires Playwright (local or global).
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import site from '../site.config.mjs';
import makeContent from '../src/content.mjs';
import { brandBoard } from '../src/pages.mjs';
import { esc } from '../src/layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require('playwright');
} catch {
  playwright = require(path.join(process.env.NODE_PATH || '/opt/node22/lib/node_modules', 'playwright'));
}

const assets = path.join(root, 'src/assets');
const dataUri = (file) => `data:image/svg+xml;base64,${readFileSync(path.join(assets, file)).toString('base64')}`;
// Inline the self-hosted fonts and the SVG logos so the image never depends on the network.
const fontDir = path.join(assets, 'fonts');
const fontFaces = readFileSync(path.join(fontDir, 'fonts.css'), 'utf8').replace(/url\('([^']+)'\)/g, (m, f) => `url(data:font/woff2;base64,${readFileSync(path.join(fontDir, f)).toString('base64')})`);
const css = readFileSync(path.join(assets, 'site.css'), 'utf8').replace(/@import[^;]+;/g, '');
const copy = makeContent(site);
const c = copy.brands;
const link = { asset: dataUri };

const width = 1600;
const html = `<!doctype html><html><head><meta charset="utf-8">
<style>${fontFaces}</style><style>${css}</style>
<style>
  body { width: ${width}px; margin: 0; background: var(--paper-deep); }
  .sheet { padding: 64px 72px 56px; display: grid; gap: 36px; }
  .sheet-head { display: grid; gap: 10px; }
  .sheet-head h1 { font-size: 52px; line-height: 1.05; letter-spacing: -0.02em; }
  .sheet-head p { color: var(--ink-muted); font-size: 22px; }
  .sheet-foot { display: flex; justify-content: space-between; color: var(--ink-muted); font-size: 16px; border-top: 1px solid var(--rule); padding-top: 18px; }
</style></head><body>
<div class="sheet">
  <div class="sheet-head"><p class="eyebrow">${esc(c.eyebrow)}</p><h1>${esc(c.headline)}</h1><p>${esc(c.lead)}</p></div>
  ${brandBoard({ site, link, copy })}
  <div class="sheet-foot"><span>${esc(site.location.region)}</span><span>${esc(c.updated)}</span></div>
</div>
</body></html>`;

const browser = await playwright.chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await Promise.all([document.fonts.load('800 24px "Libre Franklin"'), document.fonts.load('400 18px "Libre Franklin"')]);
  await document.fonts.ready;
});
if (!(await page.evaluate(() => document.fonts.check('400 18px "Libre Franklin"')))) {
  await browser.close();
  console.error('Web fonts did not load; not writing the image. Try again.');
  process.exit(1);
}
const out = path.join(assets, c.imageFile);
await page.locator('.sheet').screenshot({ path: out });
await browser.close();
console.log(`Wrote ${path.relative(root, out)}`);
