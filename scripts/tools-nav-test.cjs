// Browser checks for the Tools menu, the home Tools section, and the phone results bar on both calculators.
// Run `npm run preview` in another terminal first, then: node scripts/tools-nav-test.cjs  (needs Playwright)
const pw = require('playwright');
const BASE = 'http://localhost:4173';
let fails = 0;
const ok = (name, cond, extra = '') => { console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' :: ' + extra : '')); if (!cond) fails++; };
(async () => {
  const b = await pw.chromium.launch();
  const errs = [];
  const page = async (w, h = 844) => { const p = await b.newPage({ viewport: { width: w, height: h } }); p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text())); return p; };
  const dockShown = p => p.locator('.tool-dock').isVisible();
  const dockText = async p => (await p.locator('.tool-dock-text').textContent()).trim();

  // Desktop Tools menu
  const d = await page(1280, 800);
  await d.goto(BASE + '/');
  await d.click('.nav-group:nth-of-type(2) summary').catch(() => {});
  const toolsGroup = d.locator('.nav-group', { hasText: 'Tools' });
  await toolsGroup.locator('summary').click();
  ok('desktop: Tools menu opens with both calculators', await toolsGroup.locator('a[href="/owner-freedom-calculator/"]').isVisible() && await toolsGroup.locator('a[href="/profit-levers-calculator/"]').isVisible());
  await d.keyboard.press('Escape');
  ok('desktop: Escape closes Tools', !(await toolsGroup.locator('details').evaluate(e => e.open)));
  ok('home: Tools section has both cards', (await d.locator('.tool-card').count()) === 2 && (await d.locator('.tool-card[href="/profit-levers-calculator/"]').count()) === 1);
  await d.goto(BASE + '/profit-levers-calculator/');
  ok('desktop: Tools shows current page state', (await d.locator('.nav-group details.is-current summary').textContent()).trim() === 'Tools');
  await d.click('#pl-example'); await d.click('.pl-preset[data-lever=price]');
  ok('desktop: results bar never shows', !(await dockShown(d)));

  // Phone menu
  const m = await page(390);
  await m.goto(BASE + '/');
  await m.click('.menu-toggle');
  await m.locator('.nav-group', { hasText: 'Tools' }).locator('summary').click();
  ok('phone: Tools expands inside the menu', await m.locator('.nav-group', { hasText: 'Tools' }).locator('a[href="/owner-freedom-calculator/"]').isVisible());

  // Phone results bar: Owner Freedom
  await m.goto(BASE + '/owner-freedom-calculator/');
  ok('OF: bar hidden before any result', !(await dockShown(m)));
  await m.fill('#tb-current', '50'); await m.fill('#tb-preferred', '35'); await m.fill('#tb-weeks', '48');
  await m.waitForTimeout(150);
  ok('OF: bar shows result while results are below', (await dockShown(m)) && (await dockText(m)) === '15 hrs a week over · 720 hrs a year', await dockText(m));
  ok('OF: bar numbers hidden from screen readers', (await m.getAttribute('.tool-dock-text', 'aria-hidden')) === 'true');
  await m.click('.tool-dock-link'); await m.waitForTimeout(300);
  ok('OF: See results jumps to results, bar hides', !(await dockShown(m)) && await m.locator('#tb-head').isVisible());
  const top = await m.locator('#tb-results-h').evaluate(e => e.getBoundingClientRect().top);
  ok('OF: results heading not hidden under the header', top >= 70, 'top=' + Math.round(top));
  await m.locator('#tb-current').scrollIntoViewIfNeeded(); await m.waitForTimeout(200);
  ok('OF: bar returns when scrolled back to inputs', await dockShown(m));
  await m.fill('#tb-preferred', '50'); await m.waitForTimeout(100);
  ok('OF: equal hours text', (await dockText(m)) === 'Your hours match your preferred schedule');
  await m.fill('#tb-preferred', '60'); await m.waitForTimeout(100);
  ok('OF: under preferred text', (await dockText(m)) === 'Under your preferred hours');
  await m.fill('#tb-weeks', ''); await m.waitForTimeout(100);
  ok('OF: bar hides when result is cleared', !(await dockShown(m)));
  await m.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await m.fill('#tb-weeks', '48').catch(() => {});
  await m.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await m.waitForTimeout(200);
  ok('OF: bar stays hidden once scrolled past the results', !(await dockShown(m)));

  // Phone results bar: Profit Levers
  await m.goto(BASE + '/profit-levers-calculator/');
  await m.click('#pl-example'); await m.waitForTimeout(150);
  ok('PL: neutral text', (await dockText(m)) === 'Starting profit $100,000');
  await m.locator('#pl-lever-price').scrollIntoViewIfNeeded();
  await m.locator('#pl-lever-price').evaluate(e => { e.value = 2; e.dispatchEvent(new Event('input', { bubbles: true })); }); await m.waitForTimeout(150);
  ok('PL: bar visible beside the slider with the change', (await dockShown(m)) && (await dockText(m)) === '+$20,000 a year · scenario $120,000', await dockText(m));
  const slider = await m.locator('#pl-lever-price').boundingBox(); const bar = await m.locator('.tool-dock').boundingBox();
  ok('PL: bar does not cover the slider being used', slider.y + slider.height <= bar.y, `slider bottom ${Math.round(slider.y + slider.height)} bar top ${Math.round(bar.y)}`);
  await m.locator('#pl-lever-price').evaluate(e => { e.value = -2; e.dispatchEvent(new Event('input', { bubbles: true })); }); await m.waitForTimeout(100);
  ok('PL: negative change text', (await dockText(m)) === '−$20,000 a year · scenario $80,000', await dockText(m));
  await m.fill('#pl-revenue', '500000'); await m.fill('#pl-direct', '350000'); await m.fill('#pl-overhead', '200000');
  await m.click('#pl-reset'); await m.waitForTimeout(100);
  ok('PL: loss text', (await dockText(m)) === 'Starting loss $50,000', await dockText(m));
  ok('no page errors', errs.length === 0, errs.join(' | '));
  await b.close();
  console.log(fails ? `\n${fails} FAILED` : '\nALL PASSED');
})();
