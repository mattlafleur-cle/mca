// Browser checks for the Owner Freedom Assessment. Run `npm run preview` in another terminal first, then:
//   node scripts/owner-assessment-test.cjs
// Needs Playwright. Screenshots go to the system temp folder.
const pw = require('playwright');
const D = require('os').tmpdir() + '/';
const URL = 'http://localhost:4173/owner-freedom-assessment/';
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
  const t = async id => (await p.locator('#' + id).textContent()).trim();
  const vis = id => p.locator('#' + id).isVisible();
  const area = async id => (await p.locator(`.oa-bar-row[data-area="${id}"] .oa-score-num`).textContent()).trim();
  const shown = () => p.$$eval('.oa-priority:not([hidden])', els => els.map(e => e.dataset.area));

  ok('25 statements', (await p.locator('.oa-q').count()) === 25);
  ok('100 options', (await p.locator('.oa-opt input').count()) === 100);
  ok('six areas', (await p.locator('.oa-area').count()) === 6);
  ok('noindex on draft page', (await p.getAttribute('meta[name="robots"]', 'content')).includes('noindex'));
  ok('empty state on load', await vis('oa-empty') && !(await vis('oa-out')));
  ok('email disabled when incomplete', await p.locator('#oa-email').isDisabled());
  ok('progress 0', (await t('oa-count')) === '0');

  // Answer one statement by keyboard-free click on its label.
  await p.locator('.oa-q[data-q="1"] .oa-opt').nth(2).click();
  ok('progress 1 after one answer', (await t('oa-count')) === '1');
  ok('answered marker', await p.locator('.oa-q[data-q="1"]').evaluate(e => e.classList.contains('is-answered')));
  ok('still no results at 1 of 25', !(await vis('oa-out')));

  // Example answers: owner 33, team 50, rhythm 33, numbers 42, value 25, life 40; overall 37.
  await p.click('#oa-example');
  ok('progress 25', (await t('oa-count')) === '25');
  ok('results shown', await vis('oa-out') && !(await vis('oa-empty')));
  ok('example note shown', (await t('oa-example-note')).length > 10);
  ok('owner 33', (await area('owner')) === '33', await area('owner'));
  ok('team 50', (await area('team')) === '50');
  ok('rhythm 33', (await area('rhythm')) === '33');
  ok('numbers 42', (await area('numbers')) === '42');
  ok('value 25', (await area('value')) === '25');
  ok('life 40 (five statements)', (await area('life')) === '40');
  ok('overall 37', (await t('oa-overall')) === '37', await t('oa-overall'));
  ok('overall band low', (await t('oa-overall-band')) === 'Needs attention');
  ok('strongest = team', (await t('oa-strength')) === 'Team fit and energy (50)', await t('oa-strength'));
  ok('priorities: value then owner (tie broken by page order)', JSON.stringify(await shown()) === '["value","owner"]', JSON.stringify(await shown()));
  ok('priority message matches band', await p.locator('.oa-priority[data-area="value"] .oa-msg[data-band="low"]').isVisible() && !(await p.locator('.oa-priority[data-area="value"] .oa-msg[data-band="mid"]').isVisible()));
  ok('lead names shown', (await p.locator('.oa-priority[data-area="value"] .oa-lead').textContent()).includes('Matt LaFleur and Josh Muller'));
  ok('jump link visible', await vis('oa-jump'));
  ok('email enabled', !(await p.locator('#oa-email').isDisabled()));
  await p.screenshot({ path: D + 'oa-desktop-example.png', fullPage: true });

  // All top answers: every area 100, overall 100, band high.
  for (let i = 1; i <= 25; i++) await p.check(`input[name="q${i}"][value="3"]`);
  ok('all top: overall 100', (await t('oa-overall')) === '100');
  ok('all top: band Strong', (await t('oa-overall-band')) === 'Strong');
  ok('all top: priority message is high band', await p.locator('.oa-priority:not([hidden]) .oa-msg[data-band="high"]').first().isVisible());
  // Middle: all "Mostly true" (2) gives 67, band Building.
  for (let i = 1; i <= 25; i++) await p.check(`input[name="q${i}"][value="2"]`);
  ok('all mostly: 67 Building', (await t('oa-overall')) === '67' && (await t('oa-overall-band')) === 'Building');
  // All lowest: 0, priorities owner then team (page order).
  for (let i = 1; i <= 25; i++) await p.check(`input[name="q${i}"][value="0"]`);
  ok('all low: overall 0', (await t('oa-overall')) === '0');
  ok('all low: owner, team first', JSON.stringify(await shown()) === '["owner","team"]');

  // Email draft content (capture the strings passed to encodeURIComponent; nothing is sent).
  await p.evaluate(() => { window.__enc = []; const o = window.encodeURIComponent; window.encodeURIComponent = (x) => { window.__enc.push(String(x)); return o(x); }; });
  await p.click('#oa-email').catch(() => {});
  const enc = await p.evaluate(() => window.__enc);
  const body = enc[1] || '';
  ok('email subject', enc[0] === 'My Owner Freedom Assessment results', enc[0]);
  ok('email body has scores and priorities', body.includes('Owner Freedom score: 0 of 100') && body.includes('Owner dependence: 0') && body.includes('Where I would start: Owner dependence and Team fit and energy'), body.slice(0, 160));

  // Clear.
  await p.click('#oa-reset');
  ok('clear: progress 0 and results hidden', (await t('oa-count')) === '0' && !(await vis('oa-out')));
  ok('clear: email disabled', await p.locator('#oa-email').isDisabled());

  // Phone layout.
  const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  m.on('pageerror', e => errs.push(e.message));
  await m.goto(URL);
  ok('phone: no horizontal scroll', await m.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
  await m.click('#oa-example');
  await m.waitForTimeout(300);
  ok('phone: dock shows score', (await m.locator('.tool-dock').isVisible()) && (await m.locator('.tool-dock-text').textContent()).includes('37'));
  await m.screenshot({ path: D + 'oa-phone-top.png' });
  await m.locator('#oa-results').scrollIntoViewIfNeeded();
  await m.waitForTimeout(300);
  ok('phone: dock hides at results', !(await m.locator('.tool-dock').isVisible()));
  await m.screenshot({ path: D + 'oa-phone-results.png', fullPage: false });

  ok('no console errors', errs.length === 0, errs.join(' | '));
  ok('no off-site requests', offsite.length === 0, offsite.join(' | '));
  await b.close();
  console.log(fails ? `${fails} FAILED` : 'ALL PASSED');
  process.exit(fails ? 1 : 0);
})();
