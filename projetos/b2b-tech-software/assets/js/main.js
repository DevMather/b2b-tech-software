/* =========================================================
   B2B Tech Software — Interações (JavaScript Vanilla)
   ========================================================= */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Ícones Lucide ---------- */
  function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
    }
  }

  /* ---------- Navbar: muda ao rolar ---------- */
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 16);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Menu mobile ---------- */
  var menuBtn, menu;
  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    var iconOpen = menuBtn.querySelector('[data-icon="open"]');
    var iconClose = menuBtn.querySelector('[data-icon="close"]');
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    }
  }
  function initMobileMenu() {
    menuBtn = document.getElementById('menu-toggle');
    menu = document.getElementById('mobile-menu');
    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuBtn.focus();
      }
    });
    // Fecha o menu ao redimensionar para desktop
    var mq = window.matchMedia('(min-width: 1024px)');
    var onChange = function (e) { if (e.matches) setMenu(false); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---------- Scroll suave com offset da navbar ---------- */
  function initSmoothScroll() {
    var header = document.getElementById('site-header');
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var offset = (header ? header.offsetHeight : 0) + 12;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        if (history.pushState) history.pushState(null, '', id);
        // Move o foco para a seção (acessibilidade) sem novo salto
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  function initFaq() {
    var items = document.querySelectorAll('[data-faq-item]');
    items.forEach(function (item) {
      var btn = item.querySelector('[data-faq-trigger]');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        // Fecha os demais (comportamento de accordion único)
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('is-open');
            var ob = other.querySelector('[data-faq-trigger]');
            if (ob) ob.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  function initReveal() {
    window.__b2bRevealReady = true;
    var els = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) {
      var d = el.getAttribute('data-delay');
      if (d) el.style.setProperty('--reveal-delay', d + 'ms');
      io.observe(el);
    });
  }

  /* ---------- Ano dinâmico ---------- */
  function initYear() {
    var y = document.getElementById('current-year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function init() {
    renderIcons();
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initFaq();
    initReveal();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
