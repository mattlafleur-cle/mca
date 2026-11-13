// Profit Levers Calculator. Runs entirely in the browser: no storage, no network requests, no tracking.
// Copy comes from the page (rendered from src/profit-content.mjs); this file only does the math and
// shows or hides what the page already contains.
//
// Model (first version): scenario revenue = revenue x (1 + P); scenario direct costs = direct x (1 - D);
// scenario overhead = overhead x (1 - O). Each scenario amount is rounded to whole dollars once, and every
// displayed figure is derived from those amounts, so contributions always add up to the total change.
(function () {
  var form = document.getElementById('pl-form');
  if (!form) return;

  var strings = {};
  try {
    strings = JSON.parse(document.getElementById('pl-strings').textContent);
  } catch (e) {}

  var $ = function (id) { return document.getElementById(id); };
  var MAX = 1000000000;
  var fields = {
    revenue: { input: $('pl-revenue'), error: $('pl-revenue-err') },
    direct: { input: $('pl-direct'), error: $('pl-direct-err') },
    overhead: { input: $('pl-overhead'), error: $('pl-overhead-err') }
  };
  var levers = {
    price: $('pl-lever-price'),
    direct: $('pl-lever-direct'),
    overhead: $('pl-lever-overhead')
  };
  var out = $('pl-out');
  var empty = $('pl-empty');
  var zero = $('pl-zero');
  var live = $('pl-live');
  var emailButton = $('pl-email');
  var liveTimer = null;
  var last = null;

  var MINUS = '−';
  function money(n) {
    var s = '$' + Math.abs(Math.round(n)).toLocaleString('en-US');
    return n < 0 ? MINUS + s : s;
  }
  function signedMoney(n) {
    if (n === 0) return 'No change';
    return (n > 0 ? '+' : MINUS) + '$' + Math.abs(n).toLocaleString('en-US');
  }
  function pct(n) {
    var r = Math.round(n * 1000) / 10; // one decimal place
    var s = Math.abs(r).toLocaleString('en-US', { maximumFractionDigits: 1 }) + '%';
    return r < 0 ? MINUS + s : s;
  }
  function leverPct(v) {
    return Math.abs(v).toLocaleString('en-US', { maximumFractionDigits: 1 }) + '%';
  }

  // Returns { value } in whole dollars, { empty: true }, or { error: 'message' }.
  // Accepts $ signs, commas, and a k or m suffix (250k, 1.2m).
  function read(key) {
    var raw = fields[key].input.value.trim().replace(/[$,\s]/g, '');
    if (raw === '') return { empty: true };
    var m = /^(\d+\.?\d*|\.\d+)([km]?)$/i.exec(raw);
    if (!m) return { error: 'Please enter a dollar amount, like 750,000 or 750k. Use a positive number.' };
    var n = Number(m[1]) * ({ k: 1e3, m: 1e6 }[m[2].toLowerCase()] || 1);
    if (n > MAX) return { error: 'Please enter $1 billion or less.' };
    return { value: Math.round(n) };
  }

  function showError(key, message) {
    var f = fields[key];
    f.error.textContent = message || '';
    f.error.hidden = !message;
    if (message) f.input.setAttribute('aria-invalid', 'true');
    else f.input.removeAttribute('aria-invalid');
  }

  function leverText(key, v) {
    if (v === 0) return 'No change';
    var p = leverPct(v);
    if (key === 'price') return (v > 0 ? 'Raise prices by ' : 'Lower prices by ') + p;
    var noun = key === 'direct' ? 'direct costs' : 'overhead';
    return v > 0 ? 'Reduce ' + noun + ' by ' + p : (key === 'direct' ? 'Direct costs rise by ' : 'Overhead rises by ') + p;
  }

  function leverValues() {
    var v = {};
    Object.keys(levers).forEach(function (k) {
      var n = Number(levers[k].value);
      v[k] = Math.max(-10, Math.min(10, isNaN(n) ? 0 : n));
      var text = leverText(k, v[k]);
      $('pl-lever-' + k + '-out').textContent = text;
      levers[k].setAttribute('aria-valuetext', text);
    });
    return v;
  }

  function compute() {
    var lv = leverValues();
    var vals = {};
    var ok = true;
    Object.keys(fields).forEach(function (key) {
      var r = read(key);
      showError(key, r.error);
      if (r.value === undefined) ok = false;
      else vals[key] = r.value;
    });
    zero.hidden = true;
    if (ok && vals.revenue === 0) {
      ok = false;
      zero.hidden = false;
    }
    if (!ok) {
      last = null;
      out.hidden = true;
      empty.hidden = !zero.hidden;
      emailButton.disabled = true;
      showSteps(lv);
      announce(zero.hidden ? '' : strings.zeroRevenue);
      dock(null);
      return;
    }
    var P = lv.price / 100, D = lv.direct / 100, O = lv.overhead / 100;
    var start = vals.revenue - vals.direct - vals.overhead;
    var sRev = Math.round(vals.revenue * (1 + P));
    var sDir = Math.round(vals.direct * (1 - D));
    var sOh = Math.round(vals.overhead * (1 - O));
    var cP = sRev - vals.revenue;
    var cD = vals.direct - sDir;
    var cO = vals.overhead - sOh;
    var scen = sRev - sDir - sOh; // equals start + cP + cD + cO exactly
    last = {
      revenue: vals.revenue, direct: vals.direct, overhead: vals.overhead,
      levers: lv, start: start, sRev: sRev, sDir: sDir, sOh: sOh,
      cP: cP, cD: cD, cO: cO, scen: scen, change: scen - start,
      startMargin: start / vals.revenue,
      scenMargin: sRev > 0 ? scen / sRev : null
    };
    render(last);
    showSteps(lv);
    dock(last);
  }

  function describe(v) {
    return v < 0 ? 'an estimated operating loss of ' + money(-v) : 'an estimated operating profit of ' + money(v);
  }

  function render(r) {
    empty.hidden = true;
    out.hidden = false;
    emailButton.disabled = false;
    var anyLever = r.levers.price !== 0 || r.levers.direct !== 0 || r.levers.overhead !== 0;
    var head = $('pl-head');
    var sub = $('pl-sub');

    if (!anyLever) {
      head.textContent = r.start < 0
        ? 'You are starting with an estimated operating loss of ' + money(-r.start) + ', or ' + pct(-r.startMargin) + ' of revenue.'
        : 'You are starting with an estimated operating profit of ' + money(r.start) + ', or ' + pct(r.startMargin) + ' of revenue.';
      sub.textContent = strings.neutral || '';
    } else {
      head.textContent = r.change === 0
        ? 'Under these assumptions, your estimated annual operating profit would stay about the same.'
        : 'Under these assumptions, your estimated annual operating profit would ' + (r.change > 0 ? 'rise' : 'fall') + ' by approximately ' + money(Math.abs(r.change)) + '.';
      sub.textContent = 'That is a change from ' + describe(r.start) + ' to ' + describe(r.scen) + '.';
    }

    // Comparison table
    var anyLoss = r.start < 0 || r.scen < 0;
    $('pl-profit-label').textContent = anyLoss ? 'Estimated operating profit (loss)' : 'Estimated operating profit';
    $('pl-s-revenue').textContent = money(r.revenue);
    $('pl-n-revenue').textContent = money(r.sRev);
    $('pl-s-direct').textContent = money(r.direct);
    $('pl-n-direct').textContent = money(r.sDir);
    $('pl-s-overhead').textContent = money(r.overhead);
    $('pl-n-overhead').textContent = money(r.sOh);
    $('pl-s-profit').textContent = money(r.start);
    $('pl-n-profit').textContent = money(r.scen);
    $('pl-s-margin').textContent = pct(r.startMargin);
    $('pl-n-margin').textContent = r.scenMargin === null ? 'Not available' : pct(r.scenMargin);

    drawBridge(r);
    drawSplit('start', r.revenue, r.direct, r.overhead, r);
    drawSplit('end', r.sRev, r.sDir, r.sOh, r);
    $('pl-legend-loss').hidden = !anyLoss;
    announce(head.textContent + ' ' + sub.textContent);
  }

  // Waterfall on a scale that always includes zero, so a small change is shown in proportion to the whole.
  function drawBridge(r) {
    var points = [r.start, r.start + r.cP, r.start + r.cP + r.cD, r.scen];
    var lo = Math.min(0, Math.min.apply(null, points));
    var hi = Math.max(0, Math.max.apply(null, points));
    var span = hi - lo || 1;
    var pos = function (v) { return (v - lo) / span * 100; };
    var rows = [
      ['start', 0, r.start, money(r.start), 'pl-total'],
      ['price', points[0], points[1], signedMoney(r.cP)],
      ['direct', points[1], points[2], signedMoney(r.cD)],
      ['overhead', points[2], points[3], signedMoney(r.cO)],
      ['end', 0, r.scen, money(r.scen), 'pl-total']
    ];
    rows.forEach(function (row) {
      var bar = $('pl-b-' + row[0]);
      var a = row[1], b = row[2];
      bar.style.left = pos(Math.min(a, b)) + '%';
      bar.style.width = Math.abs(b - a) / span * 100 + '%';
      bar.className = 'pl-bridge-bar ' + (row[4] || (b > a ? 'pl-up' : b < a ? 'pl-down' : ''));
      if (row[4] && b < 0) bar.className += ' pl-negative';
      bar.parentElement.querySelector('.pl-bridge-zero').style.left = pos(0) + '%';
      $('pl-bv-' + row[0]).textContent = row[3];
    });
  }

  // Revenue split: direct costs, overhead, and profit; costs above revenue are marked as a loss.
  function drawSplit(id, rev, dir, oh, r) {
    var scale = Math.max(r.revenue, r.sRev, r.direct + r.overhead, r.sDir + r.sOh, 1);
    var track = $('pl-split-' + id);
    var segs = track.children;
    var profit = rev - dir - oh;
    segs[0].style.width = dir / scale * 100 + '%';
    segs[1].style.width = oh / scale * 100 + '%';
    segs[2].style.width = Math.max(0, profit) / scale * 100 + '%';
    segs[3].style.left = rev / scale * 100 + '%';
    segs[3].style.width = Math.max(0, -profit) / scale * 100 + '%';
    segs[3].hidden = profit >= 0;
  }

  // Practical next steps follow whichever levers are in use.
  function showSteps(lv) {
    var used = ['price', 'direct', 'overhead'].filter(function (k) { return lv[k] !== 0; });
    document.querySelectorAll('.pl-steps').forEach(function (g) {
      var k = g.getAttribute('data-lever');
      g.hidden = used.length ? used.indexOf(k) === -1 : k !== 'default';
    });
  }

  // One-line summary for the phone results bar (handled in site.js), or null when there is no result.
  function dock(r) {
    var text = null;
    if (r) {
      var anyLever = r.levers.price !== 0 || r.levers.direct !== 0 || r.levers.overhead !== 0;
      text = anyLever
        ? (r.change === 0 ? 'No change' : signedMoney(r.change)) + ' a year \u00b7 scenario ' + money(r.scen)
        : 'Starting ' + (r.start < 0 ? 'loss ' + money(-r.start) : 'profit ' + money(r.start));
    }
    document.dispatchEvent(new CustomEvent('tool-result', { detail: { text: text } }));
  }

  // Screen readers hear the result once changes pause, not on every keystroke or slider step.
  function announce(text) {
    clearTimeout(liveTimer);
    liveTimer = setTimeout(function () { live.textContent = text; }, 800);
  }

  Object.keys(fields).forEach(function (key) {
    var input = fields[key].input;
    input.addEventListener('input', function () {
      $('pl-example-note').textContent = '';
      compute();
    });
    // Tidy a valid entry on leaving the field: 1000000 becomes 1,000,000.
    input.addEventListener('blur', function () {
      var r = read(key);
      if (r.value !== undefined) input.value = r.value.toLocaleString('en-US');
    });
  });
  Object.keys(levers).forEach(function (k) {
    levers[k].addEventListener('input', compute);
  });

  document.querySelectorAll('.pl-preset').forEach(function (b) {
    b.addEventListener('click', function () {
      levers[b.getAttribute('data-lever')].value = b.getAttribute('data-value');
      compute();
    });
  });
  $('pl-reset').addEventListener('click', function () {
    Object.keys(levers).forEach(function (k) { levers[k].value = '0'; });
    compute();
  });
  $('pl-example').addEventListener('click', function () {
    fields.revenue.input.value = '1,000,000';
    fields.direct.input.value = '600,000';
    fields.overhead.input.value = '300,000';
    compute();
    $('pl-example-note').textContent = strings.exampleNote || '';
  });
  $('pl-clear').addEventListener('click', function () {
    Object.keys(fields).forEach(function (key) { fields[key].input.value = ''; showError(key, ''); });
    Object.keys(levers).forEach(function (k) { levers[k].value = '0'; });
    $('pl-example-note').textContent = '';
    compute();
    fields.revenue.input.focus();
  });

  // Opens a draft in the visitor's own email app. Nothing is sent unless they send it.
  emailButton.addEventListener('click', function () {
    if (!last || !strings.email) return;
    var lines = [
      'Hi Maple Creek Advisors,',
      '',
      'I used the Profit Levers Calculator on your website.',
      '',
      'Annual revenue: ' + money(last.revenue),
      'Annual direct costs: ' + money(last.direct),
      'Annual overhead: ' + money(last.overhead),
      'Starting estimated operating profit: ' + money(last.start) + ' (' + pct(last.startMargin) + ' of revenue)'
    ];
    var used = ['price', 'direct', 'overhead'].filter(function (k) { return last.levers[k] !== 0; });
    if (used.length) {
      lines.push('Scenario I explored: ' + used.map(function (k) { return leverText(k, last.levers[k]); }).join('; '));
      lines.push('Scenario estimated operating profit: ' + money(last.scen) + ' (change of ' + signedMoney(last.change).replace(MINUS, '-') + ')');
    }
    lines.push('', 'I would like to talk about what is driving profit in my business.', '');
    window.location.href = 'mailto:' + strings.email + '?subject=' + encodeURIComponent(strings.emailSubject || '') + '&body=' + encodeURIComponent(lines.join('\n').replace(/\u2212/g, '-'));
  });

  compute();
})();
