// Owner Freedom Calculator. Runs entirely in the browser: no storage, no network requests, no tracking.
// Copy comes from the page (rendered from src/time-back-content.mjs); this file only does the math and
// shows or hides what the page already contains.
(function () {
  var form = document.getElementById('tb-form');
  if (!form) return;

  var strings = {};
  try {
    strings = JSON.parse(document.getElementById('tb-strings').textContent);
  } catch (e) {}

  var $ = function (id) { return document.getElementById(id); };
  var fields = {
    current: { input: $('tb-current'), error: $('tb-current-err'), min: 0, max: 120, unit: 'hours',
      range: 'Please enter between 0 and 120 hours. 120 hours a week still leaves about seven hours a day for everything else.' },
    preferred: { input: $('tb-preferred'), error: $('tb-preferred-err'), min: 0, max: 120, unit: 'hours',
      range: 'Please enter between 0 and 120 hours.' },
    weeks: { input: $('tb-weeks'), error: $('tb-weeks-err'), min: 1, max: 52, unit: 'weeks',
      range: 'Please enter between 1 and 52 weeks.' }
  };
  var out = $('tb-out');
  var empty = $('tb-empty');
  var live = $('tb-live');
  var goal = $('tb-goal');
  var emailButton = $('tb-email');
  var liveTimer = null;
  var last = null; // the most recent valid result, shared by every part of the page

  // One decimal place at most, with thousands separators: 720, 1,440, 22.5.
  function fmt(n) {
    return (Math.round(n * 10) / 10).toLocaleString('en-US', { maximumFractionDigits: 1 });
  }
  function plural(n, one, many) {
    return Math.round(n * 10) / 10 === 1 ? one : many;
  }

  // Returns { value } for a valid number, { empty: true }, or { error: 'message' }.
  function read(key) {
    var f = fields[key];
    var raw = f.input.value.trim().replace(/,/g, '');
    if (raw === '') return { empty: true };
    if (!/^(\d+\.?\d*|\.\d+)$/.test(raw)) return { error: 'Please enter a number, like 45 or 42.5.' };
    var n = Number(raw);
    if (n < f.min || n > f.max) return { error: f.range };
    return { value: n };
  }

  function showError(key, message) {
    var f = fields[key];
    if (message) {
      f.error.textContent = message;
      f.error.hidden = false;
      f.input.setAttribute('aria-invalid', 'true');
    } else {
      f.error.textContent = '';
      f.error.hidden = true;
      f.input.removeAttribute('aria-invalid');
    }
  }

  function compute() {
    var values = {};
    var ok = true;
    Object.keys(fields).forEach(function (key) {
      var r = read(key);
      showError(key, r.error);
      if (r.value === undefined) ok = false;
      else values[key] = r.value;
    });
    if (!ok) {
      last = null;
      out.hidden = true;
      empty.hidden = false;
      emailButton.disabled = true;
      announce('');
      dock(null);
      return;
    }
    var difference = values.current - values.preferred;
    var weekly = Math.max(0, difference); // never shown as a negative amount
    var annual = weekly * values.weeks;
    last = {
      current: values.current,
      preferred: values.preferred,
      weeks: values.weeks,
      difference: difference,
      weekly: weekly,
      annual: annual,
      days: annual / 8,
      workweeks: annual / 40
    };
    render(last);
    dock(last);
  }

  function render(r) {
    empty.hidden = true;
    out.hidden = false;
    emailButton.disabled = false;

    var head = $('tb-head');
    var sub = $('tb-sub');
    var message = $('tb-message');
    var detail = $('tb-gap-detail');

    if (r.weekly > 0) {
      head.textContent = 'You are working about ' + fmt(r.weekly) + ' ' + plural(r.weekly, 'hour', 'hours') + ' more each week than you would prefer.';
      sub.textContent = 'At that pace, that is about ' + fmt(r.annual) + ' ' + plural(r.annual, 'hour', 'hours') + ' over ' + fmt(r.weeks) + ' working ' + plural(r.weeks, 'week', 'weeks') +
        ', equivalent to ' + fmt(r.days) + ' eight-hour ' + plural(r.days, 'workday', 'workdays') + ' or ' + fmt(r.workweeks) + ' forty-hour ' + plural(r.workweeks, 'workweek', 'workweeks') + '.';
      sub.hidden = false;
      message.hidden = true;
      detail.hidden = false;
    } else {
      head.textContent = r.difference === 0
        ? 'Your hours match the schedule you would choose.'
        : 'You are working about ' + fmt(-r.difference) + ' ' + plural(-r.difference, 'hour', 'hours') + ' a week less than your preferred schedule.';
      sub.textContent = '';
      sub.hidden = true;
      message.textContent = r.difference === 0 ? strings.equal : strings.under;
      message.hidden = false;
      detail.hidden = true;
    }

    // Bars: both measured against the larger of the two, with the gap marked on the current bar.
    var scale = Math.max(r.current, r.preferred, 1);
    $('tb-bar-current').style.width = (r.current / scale * 100) + '%';
    $('tb-bar-preferred').style.width = (r.preferred / scale * 100) + '%';
    $('tb-bar-gap').style.width = r.current > 0 ? (r.weekly / r.current * 100) + '%' : '0';
    $('tb-val-current').textContent = fmt(r.current) + ' hrs';
    $('tb-val-preferred').textContent = fmt(r.preferred) + ' hrs';
    $('tb-legend').hidden = r.weekly <= 0;

    $('tb-stat-week').textContent = fmt(r.weekly);
    $('tb-stat-year').textContent = fmt(r.annual);
    $('tb-stat-days').textContent = fmt(r.days);
    $('tb-stat-weeks').textContent = fmt(r.workweeks);

    drawDots(r.days);
    setGoal(r);
    announce(head.textContent + (sub.hidden ? '' : ' ' + sub.textContent));
  }

  // One square per eight-hour workday equivalent, rounded to the nearest whole day.
  var dotsShown = -1;
  var DOT_CAP = 260;
  function drawDots(days) {
    var count = Math.round(days);
    var more = $('tb-dots-more');
    if (count === 0 && days > 0) more.textContent = 'Your gap is less than half a workday over the year.';
    else if (count > DOT_CAP) more.textContent = 'Showing the first ' + DOT_CAP + ' of ' + fmt(count) + '.';
    else more.textContent = '';
    var shown = Math.min(count, DOT_CAP);
    if (shown === dotsShown) return;
    var box = $('tb-dots');
    var html = '';
    for (var i = 0; i < shown; i++) html += '<span style="--i:' + Math.min(i, 120) + '"></span>';
    box.innerHTML = html;
    dotsShown = shown;
  }

  // Goal slider: from zero up to the weekly gap, in half-hour steps.
  var goalTouched = false;
  function setGoal(r) {
    var max = Math.floor(r.weekly * 2) / 2;
    var wrap = goal.closest('.tb-goal');
    wrap.hidden = max < 0.5;
    if (max < 0.5) return;
    goal.max = String(max);
    var v = Number(goal.value);
    if (!goalTouched) v = Math.min(2, max);
    v = Math.min(v, max);
    goal.value = String(v);
    goalText(r);
  }
  function goalText(r) {
    var v = Number(goal.value);
    var yearly = v * r.weeks;
    $('tb-goal-value').textContent = fmt(v);
    goal.setAttribute('aria-valuetext', fmt(v) + ' ' + plural(v, 'hour', 'hours') + ' a week');
    $('tb-goal-result').textContent = v === 0
      ? 'Move the slider to set a goal.'
      : 'Reclaiming ' + fmt(v) + ' ' + plural(v, 'hour', 'hours') + ' a week across ' + fmt(r.weeks) + ' working ' + plural(r.weeks, 'week', 'weeks') +
        ' would be about ' + fmt(yearly) + ' ' + plural(yearly, 'hour', 'hours') + ' a year, equivalent to ' + fmt(yearly / 8) + ' eight-hour ' + plural(yearly / 8, 'workday', 'workdays') + '.';
  }
  goal.addEventListener('input', function () {
    goalTouched = true;
    if (last) goalText(last);
  });

  // One-line summary for the phone results bar (handled in site.js), or null when there is no result.
  function dock(r) {
    var text = null;
    if (r) {
      text = r.weekly > 0
        ? fmt(r.weekly) + ' hrs a week over \u00b7 ' + fmt(r.annual) + ' hrs a year'
        : r.difference === 0 ? 'Your hours match your preferred schedule' : 'Under your preferred hours';
    }
    document.dispatchEvent(new CustomEvent('tool-result', { detail: { text: text } }));
  }

  // Screen readers hear the headline once typing pauses, not on every keystroke.
  function announce(text) {
    clearTimeout(liveTimer);
    liveTimer = setTimeout(function () { live.textContent = text; }, 800);
  }

  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener('input', function () {
      $('tb-example-note').textContent = '';
      compute();
    });
  });

  $('tb-example').addEventListener('click', function () {
    fields.current.input.value = '50';
    fields.preferred.input.value = '35';
    fields.weeks.input.value = '48';
    goalTouched = false;
    compute();
    $('tb-example-note').textContent = strings.exampleNote || '';
  });

  $('tb-reset').addEventListener('click', function () {
    Object.keys(fields).forEach(function (key) { fields[key].input.value = ''; showError(key, ''); });
    form.querySelectorAll('input[name="where"]').forEach(function (r) { r.checked = false; });
    showSteps('default');
    goalTouched = false;
    $('tb-example-note').textContent = '';
    compute();
    fields.current.input.focus();
  });

  // Tailored first steps for the optional "where does the time go" answer.
  function showSteps(key) {
    var groups = document.querySelectorAll('.tb-steps');
    var found = false;
    groups.forEach(function (g) { if (g.getAttribute('data-where') === key) found = true; });
    groups.forEach(function (g) { g.hidden = g.getAttribute('data-where') !== (found ? key : 'default'); });
  }
  form.querySelectorAll('input[name="where"]').forEach(function (radio) {
    radio.addEventListener('change', function () { showSteps(radio.value); });
  });

  // Opens a draft in the visitor's own email app. Nothing is sent unless they send it.
  emailButton.addEventListener('click', function () {
    if (!last || !strings.email) return;
    var lines = [
      'Hi Maple Creek Advisors,',
      '',
      'I used the Owner Freedom Calculator on your website.',
      '',
      'Hours I work in an average week: ' + fmt(last.current),
      'Hours I would prefer to work: ' + fmt(last.preferred),
      'Weeks I work in a year: ' + fmt(last.weeks)
    ];
    if (last.weekly > 0) {
      lines.push('Time beyond my preferred schedule: about ' + fmt(last.weekly) + ' hours a week, ' + fmt(last.annual) + ' hours a year (' + fmt(last.days) + ' eight-hour workday equivalents)');
    }
    var where = form.querySelector('input[name="where"]:checked');
    if (where) lines.push('Where most of the extra time goes: ' + where.parentElement.textContent.trim());
    var hopes = Array.prototype.map.call(document.querySelectorAll('input[name="reflect"]:checked'), function (c) { return c.value; });
    if (hopes.length) lines.push('What I would do with some time back: ' + hopes.join('; '));
    lines.push('', 'I would like to talk about what could change.', '');
    window.location.href = 'mailto:' + strings.email + '?subject=' + encodeURIComponent(strings.emailSubject || '') + '&body=' + encodeURIComponent(lines.join('\n'));
  });

  compute();
})();
