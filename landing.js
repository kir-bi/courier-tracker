/* Courier Tracker — landing interactions */
(function () {
  // Sticky header shadow on scroll
  const hdr = document.getElementById('hdr');
  const onScroll = () => {
    if (window.scrollY > 8) hdr.style.boxShadow = '0 6px 24px rgba(0,0,0,.18)';
    else hdr.style.boxShadow = 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const burger = document.getElementById('burger');
  const mob = document.getElementById('hdrMobile');
  burger.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mob.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  // FAQ — only one open at a time
  const items = document.querySelectorAll('.faq__item');
  items.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach(o => { if (o !== item) o.open = false; });
      }
    });
  });

  // Intersection — rise-in animations for mockups + cards
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.painCard, .solCard, .step, .cmp__col, .browser--full, .shot__phones, .leadForm').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity .6s ${i * 60}ms cubic-bezier(.2,.7,.2,1), transform .6s ${i * 60}ms cubic-bezier(.2,.7,.2,1)`;
    io.observe(el);
  });

  // Phone mask: format as +7 (XXX) XXX-XX-XX
  const phone = document.getElementById('phoneInput');
  if (phone) {
    // Ukrainian: +380 (XX) XXX-XX-XX — 12 digits total
    const fmt = (raw) => {
      let d = raw.replace(/\D/g, '');
      if (d.startsWith('80')) d = '3' + d;
      if (!d.startsWith('380')) d = '380' + d;
      d = d.slice(0, 12);
      const p = d.slice(3);
      let out = '+380';
      if (p.length > 0) out += ' (' + p.slice(0, 2);
      if (p.length >= 2) out += ')';
      if (p.length > 2) out += ' ' + p.slice(2, 5);
      if (p.length > 5) out += '-' + p.slice(5, 7);
      if (p.length > 7) out += '-' + p.slice(7, 9);
      return out;
    };
    phone.addEventListener('input', (e) => {
      const cur = e.target.value;
      e.target.value = fmt(cur);
    });
    phone.addEventListener('focus', (e) => {
      if (!e.target.value) e.target.value = '+380 ';
    });
  }

  // Form submit (smoke-test demo — no backend)
  const form = document.getElementById('leadForm');
  const success = document.getElementById('leadSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const ph = form.elements['phone'].value.trim();
      if (!name || ph.replace(/\D/g, '').length < 12) {
        if (!name) form.elements['name'].focus();
        else form.elements['phone'].focus();
        return;
      }
      // Hide form fields, show success
      [...form.querySelectorAll('.field, button[type=submit], .leadForm__legal, .leadForm__head')]
        .forEach(el => el.style.display = 'none');
      success.hidden = false;
      // (would POST to backend in production)
    });
  }
})();
