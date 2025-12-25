(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });
  }

  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('form--submitted');
      const hint = form.querySelector('.form__hint');
      if (hint) {
        hint.textContent = 'Gracias por tu mensaje. Te responderé pronto.';
      }
    });
  }
})();
