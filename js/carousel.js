document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.galeria-grid');
  const prev = document.querySelector('.g-prev-global');
  const next = document.querySelector('.g-next-global');
  if (!track || !prev || !next) return;
  const items = track.querySelectorAll('.g-item');
  const get = () => {
    if (!items.length) return { step: track.clientWidth, visible: 1 };
    const w = items[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    return { step: Math.round(w + gap), visible: Math.max(1, Math.floor(track.clientWidth / w)) };
  };
  prev.addEventListener('click', () => { const m = get(); track.scrollBy({ left: -m.step * m.visible, behavior: 'smooth' }); });
  next.addEventListener('click', () => { const m = get(); track.scrollBy({ left: m.step * m.visible, behavior: 'smooth' }); });
  track.tabIndex = 0;
  track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') next.click(); if (e.key === 'ArrowLeft') prev.click(); });
});
