(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function trackEvent(eventName, params) {
    window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
  }

  function getUTMSource() {
    try {
      return new URLSearchParams(window.location.search).get('utm_source') || '';
    } catch (e) {
      return '';
    }
  }

  function appendUTMToWhatsApp(url) {
    var utm = getUTMSource();
    if (!utm) return url;
    return url + '%0A%0A(utm_source%3A%20' + encodeURIComponent(utm) + ')';
  }

  var waMessages = {
    ar: {
      'navbar': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0648\u062f \u062d\u062c\u0632 \u0645\u0648\u0639\u062f \u0641\u064a \u0645\u0631\u0643\u0632 \u063a\u0632\u0627\u0644 \u0627\u0644\u0635\u062d\u0629',
      'hero': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0648\u062f \u062d\u062c\u0632 \u0645\u0648\u0639\u062f \u0644\u062c\u0644\u0633\u0629 \u0639\u0644\u0627\u062c \u0637\u0628\u064a\u0639\u064a',
      'services': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0648\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a\u0639\u064a',
      'offer-assessment': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0631\u064a\u062f \u062d\u062c\u0632 \u062c\u0644\u0633\u0629 \u062a\u0642\u064a\u064a\u0645 \u0645\u062c\u0627\u0646\u064a\u0629',
      'offer-package': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u0628\u0627\u0642\u0629 \u0627\u0644\u062c\u0644\u0633\u0627\u062a',
      'offer-homevisit': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u0639\u0631\u0636 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u0629',
      'gallery': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0634\u0627\u0647\u062f\u062a \u0646\u062a\u0627\u0626\u062c\u0643\u0645 \u0648\u0623\u0631\u064a\u062f \u062d\u062c\u0632 \u0645\u0648\u0639\u062f',
      'testimonials': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0642\u0631\u0623\u062a \u062a\u0642\u064a\u064a\u0645\u0627\u062a\u0643\u0645 \u0627\u0644\u0645\u0645\u062a\u0627\u0632\u0629 \u0648\u0623\u0631\u064a\u062f \u062d\u062c\u0632 \u0645\u0648\u0639\u062f',
      'contact': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0648\u062f \u062d\u062c\u0632 \u0645\u0648\u0639\u062f \u0641\u064a \u0627\u0644\u0645\u0631\u0643\u0632',
      'contact-main': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0648\u062f \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0631\u0626\u064a\u0633\u064a',
      'floating-widget': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u062d\u062a\u0627\u062c \u0645\u0633\u0627\u0639\u062f\u0629',
      'mobile-sticky': '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u062d\u062a\u0627\u062c \u0645\u0633\u0627\u0639\u062f\u0629',
      'footer': '\u0645\u0631\u062d\u0628\u0627\u064b'
    },
    en: {
      'navbar': 'Hello, I would like to book an appointment at Ghezzal Al Sahha Center',
      'hero': 'Hello, I would like to book a physiotherapy session',
      'services': 'Hello, I would like to inquire about your physiotherapy services',
      'offer-assessment': 'Hello, I would like to book a free assessment session',
      'offer-package': 'Hello, I would like to inquire about the session packages',
      'offer-homevisit': 'Hello, I would like to inquire about the home visit offer',
      'gallery': 'Hello, I saw your results and would like to book an appointment',
      'testimonials': 'Hello, I read your excellent reviews and would like to book an appointment',
      'contact': 'Hello, I would like to book an appointment at the center',
      'contact-main': 'Hello, I would like to contact the main branch',
      'floating-widget': 'Hello, I need assistance',
      'mobile-sticky': 'Hello, I need assistance',
      'footer': 'Hello'
    }
  };

  var WA_NUMBER = '966539834353';

  function buildWhatsAppURL(source, lang) {
    var message = (waMessages[lang] && waMessages[lang][source]) || waMessages.ar[source] || '';
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
    return appendUTMToWhatsApp(url);
  }

  var currentLang = localStorage.getItem('ghezzal_lang') || 'ar';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ghezzal_lang', lang);
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-wa-source]').forEach(function (el) {
      var source = el.getAttribute('data-wa-source');
      el.href = buildWhatsAppURL(source, lang);
    });

    updateMetaTags(lang);

    var switchBtn = document.getElementById('langSwitch');
    if (switchBtn) {
      switchBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch language to English' : '\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u063a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u064a\u0629');
    }

    trackEvent('language_switch', { language: lang });
  }

  function updateMetaTags(lang) {
    var titles = {
      ar: '\u063a\u0632\u0627\u0644 \u0627\u0644\u0635\u062d\u0629 \u0644\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a\u0639\u064a | \u0623\u0641\u0636\u0644 \u0645\u0631\u0643\u0632 \u0639\u0644\u0627\u062c \u0637\u0628\u064a\u0639\u064a \u0648\u062a\u0623\u0647\u064a\u0644 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629',
      en: 'Ghezzal Al Sahha Physiotherapy | Best Physiotherapy & Rehabilitation Center in Saudi Arabia'
    };
    var descriptions = {
      ar: '\u063a\u0632\u0627\u0644 \u0627\u0644\u0635\u062d\u0629 \u0644\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a\u0639\u064a \u0648\u0627\u0644\u062a\u0623\u0647\u064a\u0644 \u2014 \u0645\u0631\u0643\u0632 \u0645\u062a\u062e\u0635\u0635 \u0628\u0623\u062d\u062f\u062b \u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a. \u0627\u062d\u062c\u0632 \u062c\u0644\u0633\u062a\u0643 \u0627\u0644\u0622\u0646.',
      en: 'Ghezzal Al Sahha Physiotherapy & Rehabilitation. Book your session now.'
    };
    document.title = titles[lang] || titles.ar;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptions[lang] || descriptions.ar);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', titles[lang] || titles.ar);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', descriptions[lang] || descriptions.ar);
  }

  function hideLoader() {
    var loader = document.querySelector('.page-loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(function () { loader.style.display = 'none'; }, 600);
    }
  }

  function initNavbar() {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('main-nav');
    var links = document.querySelectorAll('.navbar__link');

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    }, { passive: true });

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('nav-open', isOpen);
      });
    }

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav) nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
        links.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      });
    });

    var sections = document.querySelectorAll('section[id]');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          links.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initAOS() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: function () {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
    });
    document.body.classList.add('aos-ready');
  }

  function initSwipers() {
    if (typeof Swiper === 'undefined') return;
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 6000, disableOnInteraction: false },
      pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 2000;
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var p = Math.min((ts - startTime) / duration, 1);
          el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { observer.observe(c); });
  }

  function initWhatsAppTracking() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('[data-wa-source]');
      if (!link) return;
      trackEvent('whatsapp_click', {
        click_source: link.getAttribute('data-wa-source'),
        language: currentLang,
        page_section: getParentSection(link)
      });
    });
  }

  function initPhoneTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function () {
        trackEvent('phone_call_click', {
          click_source: link.getAttribute('data-source') || 'unknown',
          phone_number: link.getAttribute('href'),
          page_section: getParentSection(link)
        });
      });
    });
  }

  function initGenericTracking() {
    document.querySelectorAll('[data-track]').forEach(function (el) {
      el.addEventListener('click', function () {
        trackEvent(el.getAttribute('data-track'), {
          click_source: el.getAttribute('data-source') || '',
          element_text: el.textContent.trim().substring(0, 50),
          page_section: getParentSection(el)
        });
      });
    });
  }

  function initSectionViewTracking() {
    var viewed = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          if (!viewed[id]) {
            viewed[id] = true;
            trackEvent('section_view', { section_id: id, language: currentLang });
          }
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section[id]').forEach(function (s) { observer.observe(s); });
  }

  function initScrollDepthTracking() {
    var thresholds = [25, 50, 75, 100];
    var reached = {};
    window.addEventListener('scroll', function () {
      var sh = document.documentElement.scrollHeight - window.innerHeight;
      if (sh <= 0) return;
      var pct = Math.round((window.pageYOffset / sh) * 100);
      thresholds.forEach(function (t) {
        if (pct >= t && !reached[t]) {
          reached[t] = true;
          trackEvent('scroll_depth', { depth_percent: t, language: currentLang });
        }
      });
    }, { passive: true });
  }

  function getParentSection(el) {
    var s = el.closest('section[id]');
    return s ? s.getAttribute('id') : 'other';
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var tid = link.getAttribute('href');
        if (tid === '#') return;
        var target = document.querySelector(tid);
        if (!target) return;
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('scroll-padding-top'), 10) || 72;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
      });
    });
  }

  function init() {
    setLanguage(currentLang);
    var langBtn = document.getElementById('langSwitch');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
        setTimeout(initSwipers, 100);
      });
    }
    initNavbar();
    initSmoothScroll();
    initCounters();
    initWhatsAppTracking();
    initPhoneTracking();
    initGenericTracking();
    initSectionViewTracking();
    initScrollDepthTracking();

    function waitForLibs() {
      if (typeof AOS !== 'undefined') initAOS();
      else setTimeout(waitForLibs, 100);
      if (typeof Swiper !== 'undefined') initSwipers();
      else setTimeout(function check() {
        if (typeof Swiper !== 'undefined') initSwipers();
        else setTimeout(check, 100);
      }, 100);
    }
    waitForLibs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { hideLoader(); init(); });
  } else {
    hideLoader();
    init();
  }
})();
