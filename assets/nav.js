(async function () {
  const host = document.getElementById('site-nav');
  if (!host) return;

  const res = await fetch('./assets/nav.html', { cache: 'no-store' });
  host.innerHTML = await res.text();

  const path = (location.pathname || '').toLowerCase();
  let current = 'index';

  if (path.endsWith('/wiki.html')) current = 'wiki';
  else if (path.endsWith('/index.html') || path.endsWith('/')) current = 'index';

  host.querySelectorAll('.site-switch-btn').forEach(a => {
    const isActive = a.dataset.page === current;
    a.classList.toggle('active', isActive);
    a.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
})();
