document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    const targetSelector = btn.getAttribute('data-target') || 'nav';
    const nav = document.querySelector(targetSelector);
    if (!nav) return;
    const list = nav.querySelector('.nav-links');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
    });
  });
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const nav = e.target.closest('nav');
  if (!nav) return;
  const toggle = document.querySelector(`.nav-toggle[data-target="#${nav.id}"]`);
  if (toggle && nav.querySelector('.nav-links')) {
    if (!link.classList.contains('dropbtn')) {
      nav.querySelector('.nav-links').classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dropBtns = document.querySelectorAll('.dropdown > .dropbtn');
  dropBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.parentElement;
      parent.classList.toggle('open');
      document.querySelectorAll('.dropdown.open').forEach(d => { if (d !== parent) d.classList.remove('open'); });
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
});
