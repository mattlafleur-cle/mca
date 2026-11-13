// Browser checks for the Profit Levers Calculator. Run `npm run preview` in another terminal first, then:
//   node scripts/profit-levers-test.cjs
// Needs Playwright. Screenshots go to the system temp folder.
const pw = require('playwright');
const D = require('os').tmpdir() + '/';
const URL = 'http://localhost:4173/profit-levers-calculator/';
let fails = 0;
const ok = (name, cond, extra = '') => { console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' :: ' + extra : '')); if (!cond) fails++; };
const M = '−';
(async () => {
  const b = await pw.chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; const offsite = [];
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  p.on('pageerror', e => errs.push(e.message));
  p.on('request', r => { const u = r.url(); if (!u.startsWith('http://localhost:4173') && !u.startsWith('mailto:')) offsite.push(u); });
  await p.goto(URL);
  const t = async id => (await p.locator('#' + id).textContent()).trim();
  const vis = id => p.locator('#' + id).isVisible();
  const fill = async (r, d, o) => { await p.fill('#pl-revenue', r); await p.fill('#pl-direct', d); await p.fill('#pl-overhead', o); };
  const lev = async (k, v) => { await p.locator('#pl-lever-' + k).evaluate((el, v) => { el.value = String(v); el.dispatchEvent(new Event('input', { bubbles: true })); }, v); };
  const levers = async (pr, di, ov) => { await lev('price', pr); await lev('direct', di); await lev('overhead', ov); };

  ok('empty state on load', (await vis('pl-empty')) && !(await vis('pl-out')));
  ok('email disabled when empty', await p.locator('#pl-email').isDisabled());

  // Case 1: combined
  await fill('1000000', '600000', '300000'); await levers(2, 3, 2);
  ok('C1 start profit $100,000', (await t('pl-s-profit')) === '$100,000');
  ok('C1 start margin 10%', (await t('pl-s-margin')) === '10%');
  ok('C1 scenario revenue $1,020,000', (await t('pl-n-revenue')) === '$1,020,000');
  ok('C1 scenario direct $582,000', (await t('pl-n-direct')) === '$582,000');
  ok('C1 scenario overhead $294,000', (await t('pl-n-overhead')) === '$294,000');
  ok('C1 scenario profit $144,000', (await t('pl-n-profit')) === '$144,000');
  ok('C1 scenario margin 14.1%', (await t('pl-n-margin')) === '14.1%');
  ok('C1 headline +$44,000', (await t('pl-head')) === 'Under these assumptions, your estimated annual operating profit would rise by approximately $44,000.', await t('pl-head'));
  ok('C1 bridge contributions 20,000 / 18,000 / 6,000', (await t('pl-bv-price')) === '+$20,000' && (await t('pl-bv-direct')) === '+$18,000' && (await t('pl-bv-overhead')) === '+$6,000');
  ok('C1 bridge start/end', (await t('pl-bv-start')) === '$100,000' && (await t('pl-bv-end')) === '$144,000');
  ok('C1 lever labels', (await t('pl-lever-price-out')) === 'Raise prices by 2%' && (await t('pl-lever-direct-out')) === 'Reduce direct costs by 3%' && (await t('pl-lever-overhead-out')) === 'Reduce overhead by 2%');
  ok('C1 all three tailored step groups shown', await p.locator('.pl-steps[data-lever=price]').isVisible() && await p.locator('.pl-steps[data-lever=direct]').isVisible() && await p.locator('.pl-steps[data-lever=overhead]').isVisible() && !(await p.locator('.pl-steps[data-lever=default]').isVisible()));
  await p.waitForTimeout(1000);
  ok('C1 live region announces result', (await t('pl-live')).includes('$44,000'));
  await p.screenshot({ path: D + 'pl-desktop-c1.png', fullPage: true });

  // Case 2: price only
  await levers(2, 0, 0);
  ok('C2 scenario profit $120,000', (await t('pl-n-profit')) === '$120,000');
  ok('C2 change +$20,000', (await t('pl-head')).includes('rise by approximately $20,000'));
  ok('C2 only pricing steps shown', await p.locator('.pl-steps[data-lever=price]').isVisible() && !(await p.locator('.pl-steps[data-lever=direct]').isVisible()));

  // Case 3: starting loss
  await fill('500000', '350000', '200000'); await levers(0, 0, 0);
  ok('C3 start profit shows -$50,000', (await t('pl-s-profit')) === M + '$50,000');
  ok('C3 profit row relabeled (loss)', (await t('pl-profit-label')) === 'Estimated operating profit (loss)');
  ok('C3 headline names a loss respectfully', (await t('pl-head')) === 'You are starting with an estimated operating loss of $50,000, or 10% of revenue.', await t('pl-head'));
  ok('C3 margin -10%', (await t('pl-s-margin')) === M + '10%');
  ok('C3 loss legend and segment shown', (await vis('pl-legend-loss')) && await p.locator('#pl-split-start .pl-seg-loss').isVisible());
  ok('C3 bridge start bar marked negative', (await p.getAttribute('#pl-b-start', 'class')).includes('pl-negative'));
  await p.screenshot({ path: D + 'pl-desktop-loss.png', fullPage: true });
  // Loss turning into profit
  await levers(5, 5, 5);
  ok('C3b loss to profit: -50,000 + 25,000 + 17,500 + 10,000 = $2,500', (await t('pl-n-profit')) === '$2,500' && (await t('pl-sub')).includes('from an estimated operating loss of $50,000 to an estimated operating profit of $2,500'), await t('pl-sub'));

  // Case 4: no changes
  await fill('1000000', '600000', '300000'); await levers(0, 0, 0);
  ok('C4 scenario equals start', (await t('pl-n-profit')) === (await t('pl-s-profit')));
  ok('C4 neutral headline, no opportunity claimed', (await t('pl-head')).startsWith('You are starting with an estimated operating profit of $100,000, or 10% of revenue') && (await t('pl-sub')).startsWith('Move a slider'));
  ok('C4 bridge shows No change', (await t('pl-bv-price')) === 'No change' && (await t('pl-bv-overhead')) === 'No change');
  ok('C4 default steps shown', await p.locator('.pl-steps[data-lever=default]').isVisible());

  // Negative directions
  await levers(-2, -3, -2);
  ok('NEG labels', (await t('pl-lever-price-out')) === 'Lower prices by 2%' && (await t('pl-lever-direct-out')) === 'Direct costs rise by 3%' && (await t('pl-lever-overhead-out')) === 'Overhead rises by 2%');
  ok('NEG scenario profit $56,000, fall $44,000', (await t('pl-n-profit')) === '$56,000' && (await t('pl-head')).includes('fall by approximately $44,000'));
  ok('NEG contributions shown with minus', (await t('pl-bv-price')) === M + '$20,000' && (await t('pl-bv-direct')) === M + '$18,000');
  ok('NEG bars marked as decreases', (await p.getAttribute('#pl-b-price', 'class')).includes('pl-down'));
  await levers(2, 0, -2);
  ok('offsetting: +20,000 - 6,000 = +14,000', (await t('pl-head')).includes('rise by approximately $14,000'));

  // Rounding consistency with uneven numbers
  await fill('333,333', '111,111', '77,777'); await levers(0.5, 1.5, 2.5);
  const num = s => Number(s.replace(/[^0-9]/g, '')) * (s.includes(M) ? -1 : 1);
  const vals = {}; for (const id of ['n-revenue', 'n-direct', 'n-overhead', 'n-profit', 's-profit']) vals[id] = num(await t('pl-' + id));
  ok('ROUND table adds up', vals['n-revenue'] - vals['n-direct'] - vals['n-overhead'] === vals['n-profit'], JSON.stringify(vals));
  const contrib = (await Promise.all(['price', 'direct', 'overhead'].map(k => t('pl-bv-' + k)))).map(num);
  ok('ROUND contributions sum to total change', contrib.reduce((a, c) => a + c, 0) === vals['n-profit'] - vals['s-profit'], contrib.join(',') + ' vs ' + (vals['n-profit'] - vals['s-profit']));
  const headN = num((await t('pl-head')).match(/\$[\d,]+/)[0]);
  ok('ROUND headline matches table', headN === vals['n-profit'] - vals['s-profit']);

  // Zero revenue
  await fill('0', '50000', '20000');
  ok('ZERO revenue message, no results, no error', (await vis('pl-zero')) && !(await vis('pl-out')) && (await p.locator('#pl-revenue-err').isHidden()));
  ok('ZERO email disabled', await p.locator('#pl-email').isDisabled());
  // Empty and invalid
  await fill('1000000', '', '300000');
  ok('EMPTY one field: empty state, no error', (await vis('pl-empty')) && (await p.locator('#pl-direct-err').isHidden()));
  await fill('abc', '600000', '300000');
  ok('INVALID text error', (await t('pl-revenue-err')).startsWith('Please enter a dollar amount') && (await p.getAttribute('#pl-revenue', 'aria-invalid')) === 'true');
  await fill('-500', '600000', '300000');
  ok('INVALID negative error', (await t('pl-revenue-err')).startsWith('Please enter a dollar amount'));
  await fill('2000000000', '600000', '300000');
  ok('INVALID over $1B error', (await t('pl-revenue-err')) === 'Please enter $1 billion or less.');
  await fill('$1.2m', '600k', '300,000');
  ok('FORMATS $1.2m / 600k accepted', (await t('pl-s-revenue')) === '$1,200,000' && (await t('pl-s-direct')) === '$600,000');
  await p.locator('#pl-revenue').blur();
  ok('FORMAT tidies on blur', (await p.inputValue('#pl-revenue')) === '1,200,000');
  await fill('1000000', '0', '0');
  ok('ZERO costs allowed: profit = revenue', (await t('pl-s-profit')) === '$1,000,000');
  await fill('1000000', '1200000', '300000');
  ok('LOSS beyond revenue handled', (await t('pl-s-profit')) === M + '$500,000' && (await t('pl-s-margin')) === M + '50%');

  // Keyboard, presets, reset
  await fill('1000000', '600000', '300000');
  await p.click('#pl-reset');
  await p.focus('#pl-lever-price'); await p.keyboard.press('ArrowRight');
  ok('KEYBOARD slider step 0.5 with valuetext', (await p.getAttribute('#pl-lever-price', 'aria-valuetext')) === 'Raise prices by 0.5%');
  await p.keyboard.press('End');
  ok('KEYBOARD End = +10% (range cap)', (await t('pl-lever-price-out')) === 'Raise prices by 10%');
  await p.click('#pl-reset');
  ok('RESET returns levers to zero', (await t('pl-lever-price-out')) === 'No change' && (await t('pl-head')).startsWith('You are starting'));
  await p.click('.pl-preset[data-lever=direct]');
  ok('PRESET 2% direct cost reduction', (await t('pl-lever-direct-out')) === 'Reduce direct costs by 2%' && (await t('pl-head')).includes('$12,000'));
  const order = []; await p.click('h1');
  for (let i = 0; i < 25; i++) { await p.keyboard.press('Tab'); order.push(await p.evaluate(() => document.activeElement.id || document.activeElement.className || document.activeElement.tagName)); }
  ok('TAB reaches inputs, sliders, presets', ['pl-revenue', 'pl-direct', 'pl-overhead', 'pl-lever-price', 'pl-lever-direct', 'pl-lever-overhead', 'pl-preset'].every(x => order.includes(x)), order.join(' > '));

  // Email draft and CTA
  await levers(2, 3, 2);
  await p.evaluate(() => { const o = window.encodeURIComponent; window.__enc = []; window.encodeURIComponent = s => (window.__enc.push(s), o(s)); });
  await p.click('#pl-email').catch(() => {}); await p.waitForTimeout(300);
  const enc = await p.evaluate(() => window.__enc);
  ok('EMAIL subject', enc[0] === 'My Profit Levers Calculator scenario');
  ok('EMAIL body has inputs and scenario', enc[1].includes('Annual revenue: $1,000,000') && enc[1].includes('Raise prices by 2%; Reduce direct costs by 3%; Reduce overhead by 2%') && enc[1].includes('$144,000 (change of +$44,000)'), enc[1]);
  const cta = await p.locator('.tb-cta a.button').getAttribute('href');
  ok('CTA goes to booking link', cta === 'https://fantastical.app/mattlafleur/maple-creek-advisors', cta);
  ok('CTA text', (await p.locator('.tb-cta a.button').textContent()).trim() === 'Talk about your numbers');
  ok('links to Owner Freedom Calculator', (await p.locator('a[href="/owner-freedom-calculator/"]').count()) === 1);

  // Privacy
  ok('no off-site requests', offsite.length === 0, offsite.join(', '));
  ok('no storage used', await p.evaluate(() => localStorage.length === 0 && sessionStorage.length === 0));
  ok('inputs not in URL', p.url() === URL);
  ok('no console errors', errs.length === 0, errs.join(' | '));

  // Reduced motion, phones, no JS
  const rm = await b.newPage({ reducedMotion: 'reduce' }); await rm.goto(URL);
  ok('reduced motion: no bar transitions', (await rm.locator('#pl-b-start').evaluate(e => getComputedStyle(e).transitionDuration)) === '0s');
  for (const w of [390, 320]) {
    const m = await b.newPage({ viewport: { width: w, height: 800 } });
    await m.goto(URL); await m.click('#pl-example'); await m.click('.pl-preset[data-lever=price]');
    ok(`mobile ${w}: no horizontal scroll`, (await m.evaluate(() => document.documentElement.scrollWidth)) === w);
    if (w === 390) await m.screenshot({ path: D + 'pl-mobile.png', fullPage: true });
  }
  const nj = await b.newContext({ javaScriptEnabled: false }); const np = await nj.newPage(); await np.goto(URL);
  ok('no-JS formula fallback visible', await np.locator('.tb-noscript').isVisible());
  // Owner Freedom page links back
  await p.goto('http://localhost:4173/owner-freedom-calculator/');
  ok('Owner Freedom page links to this tool', (await p.locator('a[href="/profit-levers-calculator/"]').count()) === 1);
  await p.goto('http://localhost:4173/grow-financial-ops/');
  ok('Grow your financial ops links to this tool', (await p.locator('a[href="/profit-levers-calculator/"]').count()) === 1);
  await b.close();
  console.log(fails ? `\n${fails} FAILED` : '\nALL PASSED');
})();
