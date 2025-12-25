(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
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

  const toggleScrollTop = () => {
    if (!scrollTopBtn) return;
    const shouldShow = window.scrollY > 300;
    scrollTopBtn.classList.toggle('show', shouldShow);
  };

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();
  }
})();
