// 3D tilt & parallax glow on hover
const MAX_TILT = 12; // degrees
const ELEMENTS = document.querySelectorAll('.tilt');

ELEMENTS.forEach(el => {
  const rect = () => el.getBoundingClientRect();
  el.addEventListener('mousemove', (e) => {
    const r = rect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * (MAX_TILT * -2);
    const ry = (px - 0.5) * (MAX_TILT * 2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    // parallax glow
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      history.pushState(null, '', `#${id}`);
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
