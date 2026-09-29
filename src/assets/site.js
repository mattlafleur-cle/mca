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
    // Close the menu if the window grows past the mobile breakpoint.
    var wide = window.matchMedia('(min-width: 56.0625rem)');
    var onChange = function () { if (wide.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', onChange);
  }

  document.querySelectorAll('.copy-emails').forEach(function (button) {
    var status = button.parentElement.querySelector('.copy-status');
    var original = button.textContent;
    button.addEventListener('click', function () {
      var text = button.getAttribute('data-copy');
      var done = function () {
        button.textContent = button.getAttribute('data-copied') || 'Copied';
        if (status) status.textContent = 'Email addresses copied to your clipboard.';
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
