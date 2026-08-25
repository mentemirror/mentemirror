(() => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
  }

  document.querySelectorAll('[data-submenu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.closest('.has-children')?.classList.toggle('submenu-open', !open);
    });
  });

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = carousel.querySelector('[data-carousel-dots]');

    if (!track || slides.length === 0 || !prev || !next || !dotsWrap) return;

    let index = 0;
    let maxIndex = 0;
    let timer = null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getPerView = () => {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 920) return 2;
      return 3;
    };

    const buildDots = () => {
      dotsWrap.innerHTML = '';
      for (let i = 0; i <= maxIndex; i += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'mm-carousel__dot';
        dot.setAttribute('aria-label', `Show carousel position ${i + 1} of ${maxIndex + 1}`);
        dot.addEventListener('click', () => {
          index = i;
          render();
          restartAutoplay();
        });
        dotsWrap.appendChild(dot);
      }
    };

    const render = () => {
      index = Math.max(0, Math.min(index, maxIndex));
      const target = slides[index];
      const x = target ? target.offsetLeft : 0;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;

      Array.from(dotsWrap.children).forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });

      slides.forEach((slide, i) => {
        const visible = i >= index && i < index + getPerView();
        slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      });
    };

    const recalc = () => {
      maxIndex = Math.max(0, slides.length - getPerView());
      if (index > maxIndex) index = maxIndex;
      buildDots();
      render();
    };

    const goNext = () => {
      index = index >= maxIndex ? 0 : index + 1;
      render();
    };

    const goPrev = () => {
      index = index <= 0 ? maxIndex : index - 1;
      render();
    };

    const stopAutoplay = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    const startAutoplay = () => {
      if (reduceMotion || maxIndex === 0) return;
      stopAutoplay();
      timer = window.setInterval(goNext, 5000);
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    prev.addEventListener('click', () => {
      goPrev();
      restartAutoplay();
    });

    next.addEventListener('click', () => {
      goNext();
      restartAutoplay();
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        recalc();
        restartAutoplay();
      }, 120);
    });

    recalc();
    startAutoplay();
  });
})();
