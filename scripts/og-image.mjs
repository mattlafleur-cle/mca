// Renders the 1200 x 630 link preview image to src/assets/og-image.png using the site name and tagline.
// Run after changing siteName or tagline: npm run og-image. Requires Playwright (local or global).
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import site from '../site.config.mjs';
import { contourSvg, esc } from '../src/layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require('playwright');
} catch {
  playwright = require(path.join(process.env.NODE_PATH || '/opt/node22/lib/node_modules', 'playwright'));
}

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,650&family=Source+Serif+4:opsz,wght@8..60,400&display=swap">
<style>
  html, body { margin: 0; }
  body { width: 1200px; height: 630px; background: #1d3a2f; color: #f3eee2; position: relative; overflow: hidden; font-family: 'Source Serif 4', Georgia, serif; }
  .contours { position: absolute; inset: 0; width: 100%; height: 100%; }
  .contours path { fill: none; stroke: #c3cfc6; stroke-width: 1.4; opacity: 0.22; }
  .contours .contour-accent { stroke: #d39445; stroke-width: 3; opacity: 1; }
  .text { position: absolute; left: 88px; top: 96px; right: 88px; }
  .name { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 650; font-size: 92px; line-height: 1; letter-spacing: -0.02em; margin: 0 0 28px; }
  .tag { font-size: 34px; line-height: 1.35; color: #c3cfc6; max-width: 820px; margin: 0; }
  .where { position: absolute; left: 88px; bottom: 72px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 24px; letter-spacing: 0.12em; text-transform: uppercase; color: #d39445; }
</style></head><body>
${contourSvg({ width: 1200, height: 630, lines: 12, seed: 7 })}
<div class="text"><p class="name">${esc(site.siteName)}</p><p class="tag">${esc(site.tagline)}</p></div>
<p class="where">${esc(site.location.region)}</p>
</body></html>`;

const browser = await playwright.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, ignoreHTTPSErrors: true });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await Promise.all([
    document.fonts.load('650 92px "Bricolage Grotesque"'),
    document.fonts.load('500 24px "Bricolage Grotesque"'),
    document.fonts.load('400 34px "Source Serif 4"'),
  ]);
  await document.fonts.ready;
});
const out = path.join(root, 'src/assets', site.ogImage || 'og-image.png');
await page.screenshot({ path: out });
await browser.close();
console.log(`Wrote ${path.relative(root, out)}`);
