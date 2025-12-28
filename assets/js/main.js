(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const slider = document.querySelector('.projects__track');
  const btnPrev = document.querySelector('.slider-btn--prev');
  const btnNext = document.querySelector('.slider-btn--next');
  const heroImage = document.querySelector('.hero__image img');
  const testimonialsTrack = document.querySelector('.testimonials__track');
  const testimonialDots = document.querySelectorAll('.testimonials__dots .dot');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const honeypot = form.querySelector('#website');
      if (honeypot && honeypot.value.trim() !== '') {
        return;
      }

      form.classList.add('form--submitted');
      const hint = form.querySelector('.form__hint');
      if (hint) {
        hint.textContent = 'Mensagem enviada com sucesso. Responderei em breve!';
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

  const scrollSlider = (direction) => {
    if (!slider) return;
    const card = slider.querySelector('.project-card');
    const scrollAmount = card ? card.getBoundingClientRect().width + 20 : 320;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  if (btnPrev) {
    btnPrev.addEventListener('click', () => scrollSlider(-1));
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => scrollSlider(1));
  }

  const moveTestimonials = (index) => {
    if (!testimonialsTrack) return;
    const cards = Array.from(testimonialsTrack.querySelectorAll('.testimonial-card'));
    if (!cards.length) return;
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    const width = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(testimonialsTrack).columnGap || '12');
    testimonialsTrack.style.transform = `translateX(${-(width + gap) * clamped}px)`;
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('dot--active', i === clamped);
    });
  };

  testimonialDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => moveTestimonials(idx));
  });

  if (heroImage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parallax = () => {
      const offset = window.scrollY * 0.12;
      heroImage.style.transform = `translateY(${offset * -1}px) scale(1.02)`;
      requestAnimationFrame(parallax);
    };
    requestAnimationFrame(parallax);
  }

  moveTestimonials(0);
})();
