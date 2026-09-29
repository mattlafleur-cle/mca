// Renders every page at desktop and phone widths with Playwright, saves screenshots to screenshots/,
// and fails on console errors, failed local requests, horizontal overflow, or a broken mobile menu.
// Playwright is optional and not a project dependency. Uses a local install, or a global one via NODE_PATH.
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require('playwright');
} catch {
  try {
    playwright = require(path.join(process.env.NODE_PATH || '/opt/node22/lib/node_modules', 'playwright'));
  } catch {
    console.error('Playwright is not installed. Skipping rendered checks.');
    process.exit(0);
  }
}

const port = 4179;
const server = spawn(process.execPath, [path.join(root, 'scripts/serve.mjs'), String(port)], { stdio: 'pipe' });
await new Promise((r) => server.stdout.once('data', r));

const pages = ['/', '/services/', '/how-we-work/', '/about/', '/build/', '/contact/', '/does-not-exist/'];
const viewports = [
  { name: 'desktop', width: 1366, height: 900 },
  { name: 'phone', width: 390, height: 844 },
];
const problems = [];
await mkdir(path.join(root, 'screenshots'), { recursive: true });

const launchOptions = {};
if (process.env.PLAYWRIGHT_BROWSERS_PATH === '/opt/pw-browsers') launchOptions.executablePath = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const browser = await playwright.chromium.launch(launchOptions).catch(() => playwright.chromium.launch());

try {
  for (const vp of viewports) {
    // ignoreHTTPSErrors lets web fonts load behind TLS-inspecting proxies in sandboxed environments.
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, ignoreHTTPSErrors: true });
    const page = await context.newPage();
    page.on('console', (m) => m.type() === 'error' && !(page.url().includes('does-not-exist') && m.text().includes('404')) && !/ERR_TOO_MANY_RETRIES/.test(m.text()) && problems.push(`${vp.name} ${page.url()}: console error ${m.text()}`));
    page.on('pageerror', (e) => problems.push(`${vp.name} ${page.url()}: ${e.message}`));
    page.on('requestfailed', (r) => r.url().includes('localhost') && problems.push(`${vp.name}: failed request ${r.url()}`));

    for (const p of pages) {
      await page.goto(`http://localhost:${port}${p}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts && document.fonts.ready);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) problems.push(`${vp.name} ${p}: horizontal overflow of ${overflow}px`);
      const slug = p === '/' ? 'home' : p.replace(/\//g, '') || 'home';
      await page.screenshot({ path: path.join(root, 'screenshots', `${slug}-${vp.name}.png`), fullPage: true });
    }

    if (vp.name === 'phone') {
      // Keyboard test of the mobile menu.
      await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' });
      const navHidden = await page.locator('#site-nav').isHidden();
      if (!navHidden) problems.push('phone: nav is visible before the menu is opened');
      await page.keyboard.press('Tab'); // skip link
      await page.keyboard.press('Tab'); // wordmark
      await page.keyboard.press('Tab'); // menu button
      const focused = await page.evaluate(() => document.activeElement?.className);
      if (!String(focused).includes('menu-toggle')) problems.push(`phone: third Tab landed on "${focused}", expected the menu button`);
      await page.keyboard.press('Enter');
      const expanded = await page.getAttribute('.menu-toggle', 'aria-expanded');
      if (expanded !== 'true') problems.push('phone: menu did not open with Enter');
      const firstFocused = await page.evaluate(() => document.activeElement?.textContent?.trim());
      if (firstFocused !== 'Services') problems.push(`phone: focus after opening is "${firstFocused}", expected Services`);
      await page.screenshot({ path: path.join(root, 'screenshots', 'menu-open-phone.png') });
      await page.keyboard.press('Escape');
      const closed = await page.getAttribute('.menu-toggle', 'aria-expanded');
      const back = await page.evaluate(() => document.activeElement?.className);
      if (closed !== 'false' || !String(back).includes('menu-toggle')) problems.push('phone: Escape did not close the menu and return focus');

      // Contact path: the email action goes to every configured recipient.
      await page.goto(`http://localhost:${port}/contact/`, { waitUntil: 'networkidle' });
      const href = await page.getAttribute('.contact-card a[href^="mailto:"].button', 'href');
      if (!href?.startsWith('mailto:') || !href.includes('josh@') || !href.includes('matt@')) problems.push(`contact: unexpected email action ${href}`);
      // Skip link moves focus to main content.
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const mainFocused = await page.evaluate(() => document.activeElement?.id);
      if (mainFocused !== 'main') problems.push(`skip link: focus is on "${mainFocused}", expected main`);
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.kill();
}

if (problems.length) {
  console.error('Rendered check problems:\n- ' + problems.join('\n- '));
  process.exit(1);
}
console.log(`Rendered ${pages.length} pages at ${viewports.length} widths. Screenshots are in screenshots/. No problems found.`);
