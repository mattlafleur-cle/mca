// Renders the 1200 x 630 link preview image to src/assets/og-image.png using the site name and tagline.
// Run after changing siteName or tagline: npm run og-image. Requires Playwright (local or global).
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
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

// Use the self-hosted fonts so the image never depends on a network font service.
const fontDir = path.join(root, 'src/assets/fonts');
const fontFaces = readFileSync(path.join(fontDir, 'fonts.css'), 'utf8').replace(/url\('([^']+)'\)/g, (m, f) => `url(data:font/woff2;base64,${readFileSync(path.join(fontDir, f)).toString('base64')})`);

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>${fontFaces}</style>
<style>
  html, body { margin: 0; }
  body { width: 1200px; height: 630px; background: #1d3a2f; color: #f3eee2; position: relative; overflow: hidden; font-family: 'Libre Franklin', Arial, sans-serif; }
  .contours { position: absolute; inset: 0; width: 100%; height: 100%; }
  .contours path { fill: none; stroke: #c3cfc6; stroke-width: 1.4; opacity: 0.22; }
  .contours .contour-accent { stroke: #d39445; stroke-width: 3; opacity: 1; }
  .text { position: absolute; left: 88px; top: 96px; right: 88px; }
  .name { font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 120px; line-height: 0.95; letter-spacing: 0; margin: 0 0 28px; }
  .tag { font-size: 34px; line-height: 1.35; color: #c3cfc6; max-width: 820px; margin: 0; }
  .where { position: absolute; left: 88px; bottom: 72px; font-family: 'Libre Franklin', sans-serif; font-weight: 500; font-size: 24px; letter-spacing: 0.12em; text-transform: uppercase; color: #d39445; }
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
    document.fonts.load('800 120px "Big Shoulders Display"'),
    document.fonts.load('500 24px "Libre Franklin"'),
    document.fonts.load('400 34px "Libre Franklin"'),
  ]);
  await document.fonts.ready;
});
const loaded = await page.evaluate(() => document.fonts.check('800 120px "Big Shoulders Display"') && document.fonts.check('400 34px "Libre Franklin"'));
if (!loaded) {
  await browser.close();
  console.error('Web fonts did not load; not writing the image. Try again.');
  process.exit(1);
}
const out = path.join(root, 'src/assets', site.ogImage || 'og-image.png');
await page.screenshot({ path: out });
await browser.close();
console.log(`Wrote ${path.relative(root, out)}`);
