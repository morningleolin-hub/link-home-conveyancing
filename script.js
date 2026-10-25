(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const servicesMenu = document.querySelector('.services-menu');
  const servicesToggle = document.querySelector('.services-toggle');
  if (servicesMenu && servicesToggle) {
    servicesToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = servicesMenu.classList.toggle('open');
      servicesToggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (event) => {
      if (!servicesMenu.contains(event.target)) {
        servicesMenu.classList.remove('open');
        servicesToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        servicesMenu.classList.remove('open');
        servicesToggle.setAttribute('aria-expanded', 'false');
        servicesToggle.focus();
      }
    });
    servicesMenu.querySelectorAll('.services-dropdown a').forEach((link) => {
      link.addEventListener('click', () => {
        servicesMenu.classList.remove('open');
        servicesToggle.setAttribute('aria-expanded', 'false');
        const nav = document.querySelector('#primary-nav');
        const toggle = document.querySelector('.menu-toggle');
        if (nav) nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
