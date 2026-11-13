// Progressive enhancement only: the site works without this file.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) {
        var first = nav.querySelector('a');
        if (first) first.focus();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    // Close the menu if the window grows past the menu breakpoint (72rem, matching site.css).
    var wide = window.matchMedia('(min-width: 72.0625rem)');
    var onChange = function () { if (wide.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', onChange);
  }

  // Grow menu: close it on a click outside or on Escape. It works without this as a plain <details>.
  document.querySelectorAll('.nav-group details').forEach(function (group) {
    document.addEventListener('click', function (event) {
      if (group.open && !group.contains(event.target)) group.open = false;
    });
    group.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && group.open) {
        group.open = false;
        group.querySelector('summary').focus();
        event.stopPropagation();
      }
    });
  });

  // Tool results bar (calculator pages, phones only). A calculator dispatches a 'tool-result' event with a
  // one-line summary, or null when there is no result. The bar shows only while that result is below the
  // screen, so it never covers the full results. Its numbers are hidden from screen readers, which already
  // hear the result through the calculator's own live region.
  var dock = document.querySelector('.tool-dock');
  if (dock) {
    var dockText = dock.querySelector('.tool-dock-text');
    var dockTarget = document.getElementById(dock.getAttribute('data-target'));
    var narrow = window.matchMedia('(max-width: 56rem)');
    var summary = null;
    var targetBelow = true;
    var refreshDock = function () {
      var show = Boolean(summary) && narrow.matches && targetBelow;
      dock.hidden = !show;
      document.body.classList.toggle('has-tool-dock', show);
    };
    document.addEventListener('tool-result', function (event) {
      summary = event.detail && event.detail.text;
      if (summary) dockText.textContent = summary;
      refreshDock();
    });
    if (dockTarget && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        var e = entries[0];
        targetBelow = !e.isIntersecting && e.boundingClientRect.top > 0;
        refreshDock();
      }).observe(dockTarget);
    }
    if (narrow.addEventListener) narrow.addEventListener('change', refreshDock);
  }

  document.querySelectorAll('.copy-emails').forEach(function (button) {
    var status = button.parentElement.querySelector('.copy-status');
    var original = button.textContent;
    button.addEventListener('click', function () {
      var text = button.getAttribute('data-copy');
      var done = function () {
        button.textContent = button.getAttribute('data-copied') || 'Copied';
        if (status) status.textContent = 'Copied to your clipboard.';
        setTimeout(function () { button.textContent = original; }, 2500);
      };
      var fail = function () {
        if (status) status.textContent = 'Copy is not available here. Select the addresses above to copy them.';
        var list = button.parentElement.querySelector('ul');
        if (list && window.getSelection) {
          var range = document.createRange();
          range.selectNodeContents(list);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fail);
        } else {
          fail();
        }
      } catch (e) {
        fail();
      }
    });
  });
})();
