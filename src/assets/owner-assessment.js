// Owner Freedom Assessment. Runs entirely in the browser: no storage, no network requests, no tracking.
// All copy is on the page (rendered from src/assessment-content.mjs); this file scores the answers and
// shows or hides what the page already contains.
// Scoring: each answer is 0 to 3. An area's score is its average answer as a percent of 3 (0 to 100).
// The overall score is the plain average of the six area scores. Bands: below 40 low, 40 to 69 mid, 70 up high.
(function () {
  var form = document.getElementById('oa-form');
  if (!form) return;

  var strings = {};
  try {
    strings = JSON.parse(document.getElementById('oa-strings').textContent);
  } catch (e) {}
  var areas = strings.areas || [];
  var total = strings.total || 0;

  var $ = function (id) { return document.getElementById(id); };
  var out = $('oa-out');
  var empty = $('oa-empty');
  var live = $('oa-live');
  var jump = $('oa-jump');
  var emailButton = $('oa-email');
  var exampleNote = $('oa-example-note');
  var priorities = $('oa-priorities');
  var liveTimer = null;
  var last = null;
  var wasComplete = false;

  function band(score) {
    return score < 40 ? 'low' : score < 70 ? 'mid' : 'high';
  }

  // Question numbers run in order across the areas: area 1 holds 1 to n1, area 2 the next, and so on.
  function readAnswers() {
    var answers = [];
    for (var i = 1; i <= total; i++) {
      var picked = form.querySelector('input[name="q' + i + '"]:checked');
      answers.push(picked ? Number(picked.value) : null);
    }
    return answers;
  }

  function score(answers) {
    var at = 0;
    var result = areas.map(function (a, index) {
      var sum = 0;
      for (var i = 0; i < a.count; i++) sum += answers[at + i];
      at += a.count;
      return { id: a.id, name: a.name, index: index, score: Math.round((sum / (a.count * 3)) * 100) };
    });
    var overall = Math.round(result.reduce(function (s, r) { return s + r.score; }, 0) / result.length);
    // Lowest first; ties keep the page order so results are stable.
    var ranked = result.slice().sort(function (x, y) { return x.score - y.score || x.index - y.index; });
    var strongest = result.slice().sort(function (x, y) { return y.score - x.score || x.index - y.index; })[0];
    return { areas: result, overall: overall, lowest: ranked.slice(0, 2), strongest: strongest };
  }

  function announce(text) {
    clearTimeout(liveTimer);
    liveTimer = setTimeout(function () { live.textContent = text; }, 600);
  }

  function render() {
    var answers = readAnswers();
    var answered = answers.filter(function (a) { return a !== null; }).length;
    $('oa-count').textContent = answered;
    $('oa-progress-bar').style.width = (total ? (answered / total) * 100 : 0) + '%';

    // Mark answered statements so the page can show which ones are left.
    form.querySelectorAll('.oa-q').forEach(function (fs) {
      var n = fs.getAttribute('data-q');
      fs.classList.toggle('is-answered', answers[n - 1] !== null);
    });

    var complete = answered === total && total > 0;
    jump.hidden = !complete;
    emailButton.disabled = !complete;
    out.hidden = !complete;
    empty.hidden = complete;

    if (!complete) {
      last = null;
      if (wasComplete) announce('Results hidden until every statement has an answer.');
      wasComplete = false;
      document.dispatchEvent(new CustomEvent('tool-result', { detail: { text: null } }));
      return;
    }

    var r = score(answers);
    last = r;
    $('oa-overall').textContent = r.overall;
    $('oa-overall-band').textContent = strings.bands[band(r.overall)];
    $('oa-overall-msg').textContent = strings.overall[band(r.overall)];
    $('oa-strength').textContent = r.strongest.name + ' (' + r.strongest.score + ')';

    r.areas.forEach(function (a) {
      var row = out.querySelector('.oa-bar-row[data-area="' + a.id + '"]');
      var b = band(a.score);
      row.querySelector('.oa-score-num').textContent = a.score;
      row.querySelector('.oa-band').textContent = strings.bands[b];
      var bar = row.querySelector('.oa-bar');
      bar.style.width = Math.max(a.score, 2) + '%';
      bar.setAttribute('data-band', b);
    });

    // Show the two lowest areas, in order, with the message for their band.
    priorities.querySelectorAll('.oa-priority').forEach(function (p) { p.hidden = true; });
    r.lowest.forEach(function (a) {
      var card = priorities.querySelector('.oa-priority[data-area="' + a.id + '"]');
      var b = band(a.score);
      card.querySelector('.oa-priority-score').textContent = a.score + ' of 100';
      card.querySelectorAll('.oa-msg').forEach(function (m) { m.hidden = m.getAttribute('data-band') !== b; });
      priorities.appendChild(card);
      card.hidden = false;
    });

    var summary = 'Owner Freedom score ' + r.overall + ' of 100';
    announce(summary + '. Start with ' + r.lowest[0].name + ' and ' + r.lowest[1].name + '.');
    document.dispatchEvent(new CustomEvent('tool-result', { detail: { text: 'Score: ' + r.overall + ' of 100' } }));
    wasComplete = true;
  }

  form.addEventListener('change', function () {
    exampleNote.textContent = '';
    render();
  });

  $('oa-example').addEventListener('click', function () {
    (strings.example || []).forEach(function (v, i) {
      var input = form.querySelector('input[name="q' + (i + 1) + '"][value="' + v + '"]');
      if (input) input.checked = true;
    });
    exampleNote.textContent = strings.exampleNote || '';
    render();
  });

  $('oa-reset').addEventListener('click', function () {
    form.querySelectorAll('input[type="radio"]').forEach(function (i) { i.checked = false; });
    exampleNote.textContent = '';
    render();
    var first = form.querySelector('input[type="radio"]');
    if (first) first.focus();
  });

  jump.addEventListener('click', function () {
    // Let the browser scroll, then move focus so keyboard and screen reader users land on the results.
    setTimeout(function () { $('oa-results').focus({ preventScroll: true }); }, 0);
  });

  // Opens a draft in the visitor's own email app. Nothing is sent from the page.
  emailButton.addEventListener('click', function () {
    if (!last) return;
    var lines = ['Here are my Owner Freedom Assessment results.', '', 'Owner Freedom score: ' + last.overall + ' of 100', ''];
    last.areas.forEach(function (a) { lines.push(a.name + ': ' + a.score); });
    lines.push('', 'Where I would start: ' + last.lowest[0].name + ' and ' + last.lowest[1].name, '', 'I would like to talk through these.');
    window.location.href = 'mailto:' + strings.email + '?subject=' + encodeURIComponent(strings.emailSubject || '') + '&body=' + encodeURIComponent(lines.join('\n'));
  });

  render();
})();
