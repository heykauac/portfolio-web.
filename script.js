(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'kc-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);

  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  const roles = [
    'Estudante de Tecnologia',
    'Cybersec Enthusiast',
    'Python Developer',
    'Web App Security',
    'Future Hacker Ético',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typedText');
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE_END = 2200;
  const PAUSE_START = 400;

  function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && charIndex === current.length) {
      delay = PAUSE_END;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = PAUSE_START;
    }

    setTimeout(type, delay);
  }

  type();

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: `-${64 / 2}px 0px -50% 0px`, threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const areaBlocks = document.querySelectorAll('.area-block');
  areaBlocks.forEach((block) => {
    block.addEventListener('click', () => {
      areaBlocks.forEach((b) => b.classList.remove('active'));
      block.classList.add('active');
    });
  });

  const progressBars = document.querySelectorAll('.progress-bar');
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.setProperty('--fill', entry.target.style.getPropertyValue('--fill'));
          progressObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach((bar) => {
    const fill = bar.style.getPropertyValue('--fill');
    bar.style.setProperty('--fill', '0%');
    progressObserver.observe(bar);
    setTimeout(() => {
      bar.style.setProperty('--fill', fill);
    }, 200);
  });

  const cards = document.querySelectorAll('.projeto-card');
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('featured')
            ? 'translateY(0)'
            : 'translateY(0)';
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.25s`;
    cardObserver.observe(card);
  });
})();
