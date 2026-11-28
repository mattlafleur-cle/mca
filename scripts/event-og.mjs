// Builds the link-preview images (1200 x 630) for the December 2026 event pages into src/assets/events/.
// Run once after changing event details: node scripts/event-og.mjs   (needs Playwright)
// It writes PNGs; convert them to JPG (quality about 86) to keep the files light, as the pages reference .jpg.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import { writeFileSync } from 'node:fs';
import { buildHolidayLogo } from '../src/build-holiday-logo.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pw = createRequire(import.meta.url)('playwright');
const a = (f) => `file://${root}/src/assets/${f}`;
const font = `@font-face{font-family:'Libre Franklin';src:url('${a('fonts/libre-franklin-normal-f2d133.woff2')}') format('woff2');font-weight:100 900}`;
const base = `${font}*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;font-family:'Libre Franklin',Arial,sans-serif;overflow:hidden}`;

const workshop = `<style>${base}
.bg{position:absolute;inset:0;background:url('${a('photos/events/commons-session.jpg')}') center 40%/cover}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(23,19,20,.94) 0%,rgba(23,19,20,.86) 48%,rgba(23,19,20,.25) 100%)}
.c{position:absolute;left:64px;top:58px;width:700px;color:#fff}
.eb{font-size:22px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#f0b323}
h1{font-size:62px;line-height:1.05;margin:18px 0 22px;font-weight:800}
.m{font-size:28px;line-height:1.4;color:#efe9e4}
.pill{display:inline-block;margin-top:26px;padding:10px 20px;background:#9d2235;border-radius:999px;font-size:22px;font-weight:700}
.logo{position:absolute;left:64px;bottom:44px;display:flex;align-items:center;gap:14px;color:#fff;font-size:24px;font-weight:700}
.logo img{width:46px;height:49px}
.bar{position:absolute;left:0;top:0;bottom:0;width:10px;background:#f0b323}
</style><div class="bg"></div><div class="shade"></div><div class="bar"></div>
<div class="c"><div class="eb">Working Genius Workshop</div><h1>Discover your Working Genius, and your team’s.</h1>
<div class="m">Tuesday, December 15 · 9:00 AM to noon<br>The Commons, Cuyahoga Falls</div><div class="pill">Limited seats · Register by Dec 11</div></div>
<div class="logo"><img src="${a('logo-header.png')}" alt="">Maple Creek Advisors</div>`;

const party = `<style>${base}
body{background:radial-gradient(circle at 70% 20%,#2d2526,#141011)}
.l{position:absolute;left:56px;top:50%;transform:translateY(-50%);width:640px}
.l svg{width:640px;height:auto;display:block}
.r{position:absolute;left:740px;top:96px;width:410px;color:#fff}
.eb{font-size:20px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#f0b323}
h1{font-size:50px;line-height:1.08;margin:16px 0 22px;font-weight:800}
.m{font-size:26px;line-height:1.45;color:#efe9e4}
.pill{display:inline-block;margin-top:24px;padding:10px 20px;background:#2f7d4f;border-radius:999px;font-size:21px;font-weight:700}
.co{position:absolute;left:740px;bottom:52px;color:#cfc8c1;font-size:20px}
</style><div class="l">${buildHolidayLogo({ idPrefix: 'og' })}</div>
<div class="r"><div class="eb">You are invited</div><h1>Holiday Party</h1><div class="m">Thursday, December 17<br>4:00 to 7:00 PM<br>The Commons, Cuyahoga Falls</div><div class="pill">Free · RSVP by Dec 14</div></div>
<div class="co">Hosted by Maple Creek Advisors and BUILD</div>`;

const b = await pw.chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
for (const [html, out] of [[workshop, 'og-working-genius-workshop.png'], [party, 'og-holiday-party.png']]) {
  // Load from a file so the page may use local images and fonts.
  const tmp = path.join(os.tmpdir(), `event-og-${out}.html`);
  writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"></head><body>${html}</body></html>`);
  await p.goto(`file://${tmp}`, { waitUntil: 'load' });
  await p.waitForTimeout(500);
  await p.screenshot({ path: path.join(root, 'src/assets/events', out) });
  console.log('wrote', out);
}
await b.close();
