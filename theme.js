// Light / dark switch. Light is the default; the visitor's choice is remembered.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');

  function show() {
    // moon in light mode, sun in dark mode (swapped in CSS); the label says what pressing does
    var label = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  button.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    show();
  });

  button.hidden = false;
  show();
})();
