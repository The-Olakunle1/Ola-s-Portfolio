(function () {
  var STORAGE_KEY = 'theme';
  var body = document.body;
  if (!body) {
    return;
  }

  var toggle = document.querySelector('[data-theme-toggle]');
  var label = toggle ? toggle.querySelector('.theme-toggle-label') : null;

  var storedTheme = localStorage.getItem(STORAGE_KEY);
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var activeTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(activeTheme);

  if (toggle) {
    toggle.addEventListener('click', function () {
      activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, activeTheme);
      applyTheme(activeTheme);
    });
  }

  function applyTheme(theme) {
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme + '-theme');
    document.documentElement.style.setProperty('color-scheme', theme === 'dark' ? 'dark' : 'light');

    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark');
      if (label) {
        label.textContent = theme === 'dark' ? 'Dark mode' : 'Light mode';
      }
    }
  }
})();

