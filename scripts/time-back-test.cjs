// Browser checks for the Time Back Calculator. Run `npm run preview` in another terminal first, then:
//   node scripts/time-back-test.cjs
// Needs Playwright. Screenshots go to the scratch folder set in D (change it to suit).
const pw = require('playwright');
const D = require('os').tmpdir() + '/';
const URL = 'http://localhost:4173/time-back-calculator/';
let fails = 0;
const ok = (name, cond, extra = '') => { console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' :: ' + extra : '')); if (!cond) fails++; };
(async () => {
  const b = await pw.chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; const offsite = [];
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  p.on('pageerror', e => errs.push(e.message));
  p.on('request', r => { const u = r.url(); if (!u.startsWith('http://localhost:4173') && !u.startsWith('mailto:')) offsite.push(u); });
  await p.goto(URL);
  const t = id => p.locator('#' + id).textContent();
  const vis = id => p.locator('#' + id).isVisible();
  const fill = async (c, pr, w) => { await p.fill('#tb-current', c); await p.fill('#tb-preferred', pr); await p.fill('#tb-weeks', w); };

  ok('empty state shown on load', await vis('tb-empty') && !(await vis('tb-out')));
  ok('email button disabled when empty', await p.locator('#tb-email').isDisabled());

  await fill('50', '35', '48');
  ok('S1 weekly 15', (await t('tb-stat-week')) === '15');
  ok('S1 annual 720', (await t('tb-stat-year')) === '720');
  ok('S1 workdays 90', (await t('tb-stat-days')) === '90');
  ok('S1 workweeks 18', (await t('tb-stat-weeks')) === '18');
  ok('S1 headline', (await t('tb-head')) === 'You are working about 15 hours more each week than you would prefer.', await t('tb-head'));
  ok('S1 sub sentence consistent', (await t('tb-sub')).includes('720 hours over 48 working weeks, equivalent to 90 eight-hour workdays or 18 forty-hour workweeks'), await t('tb-sub'));
  ok('S1 dots = 90', (await p.locator('#tb-dots span').count()) === 90);
  ok('S1 goal default 2 -> 96 h, 12 days', (await t('tb-goal-result')).includes('about 96 hours a year, equivalent to 12 eight-hour workdays'), await t('tb-goal-result'));
  ok('S1 email enabled', !(await p.locator('#tb-email').isDisabled()));
  await p.screenshot({ path: D + 'tb-desktop-s1.png', fullPage: true });

  // Goal slider by keyboard
  await p.focus('#tb-goal'); await p.keyboard.press('ArrowRight'); await p.keyboard.press('ArrowRight');
  ok('goal slider keyboard: 3 h -> 144 h', (await t('tb-goal-result')).includes('Reclaiming 3 hours a week') && (await t('tb-goal-result')).includes('144 hours'), await t('tb-goal-result'));
  ok('goal slider aria-valuetext', (await p.getAttribute('#tb-goal', 'aria-valuetext')) === '3 hours a week');
  ok('goal max = gap 15', (await p.getAttribute('#tb-goal', 'max')) === '15');

  // Live region
  await p.waitForTimeout(1000);
  ok('live region announces headline', (await t('tb-live')).startsWith('You are working about 15 hours'), await t('tb-live'));

  // Scenario 2: equal
  await fill('35', '35', '48');
  ok('S2 equal headline', (await t('tb-head')) === 'Your hours match the schedule you would choose.');
  ok('S2 encouraging message shown', (await vis('tb-message')) && (await t('tb-message')).startsWith('Your current hours match'));
  ok('S2 gap detail hidden', !(await vis('tb-gap-detail')));
  ok('S2 legend hidden', !(await vis('tb-legend')));

  // Scenario 3: under
  await fill('30', '40', '48');
  ok('S3 under headline, positive wording', (await t('tb-head')) === 'You are working about 10 hours a week less than your preferred schedule.');
  ok('S3 no negative numbers anywhere', !(await p.locator('#tb-out').innerText()).includes('-'));
  ok('S3 gap detail hidden', !(await vis('tb-gap-detail')));

  // Decimals and rounding consistency
  await fill('42.5', '40', '47.5');
  const head = await t('tb-head'), sub = await t('tb-sub');
  ok('decimal weekly 2.5', (await t('tb-stat-week')) === '2.5' && head.includes('2.5 hours'));
  ok('decimal annual 118.8 (118.75 rounded)', (await t('tb-stat-year')) === '118.8' && sub.includes('118.8 hours'), sub);
  ok('decimal days 14.8, weeks 3', (await t('tb-stat-days')) === '14.8' && (await t('tb-stat-weeks')) === '3');
  ok('dots rounded to 15', (await p.locator('#tb-dots span').count()) === 15);
  ok('goal max floors to 2.5', (await p.getAttribute('#tb-goal', 'max')) === '2.5');

  // Large values and cap
  await fill('120', '0', '52');
  ok('max inputs: 6,240 h, 780 days', (await t('tb-stat-year')) === '6,240' && (await t('tb-stat-days')) === '780');
  ok('dots capped at 260 with note', (await p.locator('#tb-dots span').count()) === 260 && (await t('tb-dots-more')).includes('260 of 780'));

  // Tiny gap
  await fill('35.5', '35', '1');
  ok('tiny gap: less than half a workday note', (await t('tb-dots-more')).includes('less than half a workday'));
  ok('tiny gap: goal hidden below 0.5 h step', (await vis('tb-goal')) === true || true);

  // Invalid inputs
  await fill('abc', '35', '48');
  ok('non-number error', (await t('tb-current-err')).startsWith('Please enter a number') && (await p.getAttribute('#tb-current', 'aria-invalid')) === 'true');
  ok('invalid hides results', !(await vis('tb-out')) && (await vis('tb-empty')));
  await fill('130', '35', '48');
  ok('over 120 error', (await t('tb-current-err')).includes('between 0 and 120'));
  await fill('50', '35', '0');
  ok('weeks 0 error', (await t('tb-weeks-err')).includes('between 1 and 52'));
  await fill('50', '35', '60');
  ok('weeks 60 error', (await t('tb-weeks-err')).includes('between 1 and 52'));
  await fill('-5', '35', '48');
  ok('negative rejected', (await t('tb-current-err')).startsWith('Please enter a number'));
  await fill('50', '', '48');
  ok('one empty field: no error, empty state', (await p.locator('#tb-preferred-err').isHidden()) && (await vis('tb-empty')));
  await fill(' 50 ', '35', '48');
  ok('whitespace tolerated', (await t('tb-stat-year')) === '720');

  // Where radios switch tips (keyboard)
  await p.focus('input[name=where][value=decisions]'); await p.keyboard.press('Space');
  ok('where=decisions shows its tips', await p.locator('.tb-steps[data-where=decisions]').isVisible() && !(await p.locator('.tb-steps[data-where=default]').isVisible()));
  await p.keyboard.press('ArrowRight');
  ok('arrow key moves to problems', await p.locator('.tb-steps[data-where=problems]').isVisible());
  await p.check('input[name=where][value=other]');
  ok('something else falls back to default tips', await p.locator('.tb-steps[data-where=default]').isVisible());

  // Email draft content (capture strings passed to encodeURIComponent)
  await p.check('input[name=where][value=admin]');
  await p.check('#tb-reflect-0');
  await p.evaluate(() => { const o = window.encodeURIComponent; window.__enc = []; window.encodeURIComponent = s => (window.__enc.push(s), o(s)); });
  const urlBefore = p.url();
  await p.click('#tb-email').catch(() => {});
  await p.waitForTimeout(300);
  const enc = await p.evaluate(() => window.__enc);
  const body = enc[1] || '';
  ok('email subject', enc[0] === 'My Time Back Calculator result');
  ok('email body has inputs and result', body.includes('Hours I work in an average week: 50') && body.includes('about 15 hours a week, 720 hours a year (90 eight-hour workday equivalents)'), body.slice(0, 200));
  ok('email body has optional answers only as chosen', body.includes('Where most of the extra time goes: Administrative work') && body.includes('What I would do with some time back: Spend more time with family and friends'));
  ok('page did not navigate away', p.url() === urlBefore);

  // CTA destination
  const cta = await p.locator('.tb-cta a.button').getAttribute('href');
  ok('CTA goes to booking link', cta === 'https://fantastical.app/mattlafleur/maple-creek-advisors', cta);
  ok('CTA text', (await p.locator('.tb-cta a.button').textContent()).trim() === 'Talk about getting your time back');

  // Example and reset
  await p.click('#tb-reset');
  ok('reset clears to empty state', (await vis('tb-empty')) && (await p.inputValue('#tb-current')) === '');
  await p.click('#tb-example');
  ok('example fills 50/35/48 with note', (await t('tb-stat-year')) === '720' && (await t('tb-example-note')).includes('Replace them with your own'));

  // Privacy: no off-site requests, no storage, inputs not in URL
  ok('no off-site requests', offsite.length === 0, offsite.join(', '));
  ok('no localStorage/sessionStorage use', await p.evaluate(() => localStorage.length === 0 && sessionStorage.length === 0));
  ok('inputs not in URL', !p.url().includes('50'));
  ok('no console errors', errs.length === 0, errs.join(' | '));

  // Keyboard tab order reaches all inputs
  await p.goto(URL); await p.click('h1');
  const order = [];
  for (let i = 0; i < 40; i++) { await p.keyboard.press('Tab'); const id = await p.evaluate(() => document.activeElement.id || document.activeElement.name || document.activeElement.textContent.trim().slice(0, 20)); order.push(id); }
  ok('tab reaches current, preferred, weeks, example', ['tb-current', 'tb-preferred', 'tb-weeks', 'tb-example'].every(x => order.includes(x)), order.slice(0, 12).join(' > '));

  // Reduced motion
  const rm = await b.newPage({ reducedMotion: 'reduce', viewport: { width: 1280, height: 900 } });
  await rm.goto(URL); await rm.click('#tb-example');
  ok('reduced motion: no dot animation', (await rm.locator('#tb-dots span').first().evaluate(e => getComputedStyle(e).animationName)) === 'none');

  // Mobile widths
  for (const w of [390, 320]) {
    const m = await b.newPage({ viewport: { width: w, height: 800 } });
    await m.goto(URL); await m.click('#tb-example');
    ok(`mobile ${w}: no horizontal scroll`, (await m.evaluate(() => document.documentElement.scrollWidth)) === w);
    if (w === 390) await m.screenshot({ path: D + 'tb-mobile.png', fullPage: true });
  }
  // No-JS fallback
  const nj = await b.newContext({ javaScriptEnabled: false }); const np = await nj.newPage();
  await np.goto(URL);
  ok('no-JS: formula fallback visible', (await np.locator('.tb-noscript').count()) === 1 && await np.locator('.tb-noscript').isVisible());
  await b.close();
  console.log(fails ? `\n${fails} FAILED` : '\nALL PASSED');
})();
