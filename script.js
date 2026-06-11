// ── THEME TOGGLE ──────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html        = document.documentElement;

const applyIcon = (theme) => {
  themeToggle.textContent = theme === 'dark' ? '🌓' : '☀️';
};

applyIcon(html.getAttribute('data-theme'));

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  applyIcon(next);
});

// ── TYPEWRITER ────────────────────────────────────────────
const phrases = [
  'Cybersecurity Student',
  'Red Team em Formação',
  'Pentest Ético',
  'Python & C++',
  'Exploits & Vulnerabilidades',
  'IoT & Hardware Hacking',
];

let pIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typeLoop() {
  const cur = phrases[pIdx];
  tw.textContent = deleting ? cur.slice(0, cIdx - 1) : cur.slice(0, cIdx + 1);
  deleting ? cIdx-- : cIdx++;

  if (!deleting && cIdx === cur.length) {
    deleting = true;
    setTimeout(typeLoop, 1900);
    return;
  }
  if (deleting && cIdx === 0) {
    deleting = false;
    pIdx = (pIdx + 1) % phrases.length;
  }
  setTimeout(typeLoop, deleting ? 48 : 88);
}

typeLoop();

// ── SMOOTH SCROLL ─────────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 64,
        behavior: 'smooth'
      });
    }
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.opacity    = '1';
      en.target.style.transform  = 'translateY(0)';
      io.unobserve(en.target);
    }
  });
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.a-card, .proj-card, .track-row, .res-card').forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = `opacity .45s ease ${i * .055}s, transform .45s ease ${i * .055}s`;
  io.observe(el);
});
