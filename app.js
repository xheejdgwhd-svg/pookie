// Simple horizontal scroll buttons for the categories
const wrap = document.querySelector('.cat-carousel-wrap');
const scroller = document.getElementById('catCarousel');
wrap?.addEventListener('click', (e) => {
  const btn = e.target.closest('.carousel-arrow');
  if(!btn) return;
  const dir = parseInt(btn.dataset.dir || '1', 10);
  scroller.scrollBy({ left: dir * (scroller.clientWidth * 0.7), behavior: 'smooth' });
});

// Keyboard arrows on focus
scroller?.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight'){ scroller.scrollBy({ left: scroller.clientWidth * 0.7, behavior: 'smooth' }); }
  if(e.key === 'ArrowLeft'){ scroller.scrollBy({ left: -scroller.clientWidth * 0.7, behavior: 'smooth' }); }
});
