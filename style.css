@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap');

:root {
  --bg: #0a0a0a;
  --bg-card: #111111;
  --bg-card-2: #161616;
  --border: #2a2a2a;
  --text: #e8e8e8;
  --text-muted: #888888;
  --red: #ff1a1a;
  --red-glow: rgba(255, 26, 26, 0.35);
  --gold: #FFD700;
  --gold-glow: rgba(255, 215, 0, 0.3);
  --header-bg: rgba(10, 10, 10, 0.92);
  --nav-logo-color: var(--red);
}

[data-theme="light"] {
  --bg: #f0efeb;
  --bg-card: #ffffff;
  --bg-card-2: #f5f4f0;
  --border: #d8d6d0;
  --text: #1a1a1a;
  --text-muted: #5a5a5a;
  --red: #cc0000;
  --red-glow: rgba(204, 0, 0, 0.2);
  --gold: #b8860b;
  --gold-glow: rgba(184, 134, 11, 0.2);
  --header-bg: rgba(240, 239, 235, 0.92);
  --nav-logo-color: var(--red);
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.4rem;
  color: var(--nav-logo-color);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--red);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s, transform 0.15s;
}

.theme-toggle:hover {
  border-color: var(--gold);
  transform: scale(1.05);
}

.hero {
  min-height: 100svh;
  padding: 100px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
}

.hero-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-tag {
  margin-bottom: 1rem;
}

.tag-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: var(--red);
  letter-spacing: 0.15em;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--red);
  display: inline-block;
}

.hero-name {
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.92;
  letter-spacing: -1px;
  color: var(--text);
  text-shadow:
    2px 2px 0px var(--red),
    0 0 30px var(--red-glow),
    0 0 60px var(--red-glow);
  margin-bottom: 1.25rem;
}

.hero-descriptor {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  color: var(--gold);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 1.4em;
}

.blink-cursor {
  animation: blink 1s step-end infinite;
  color: var(--red);
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-bio {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 480px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-bio strong {
  color: var(--text);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.btn-primary {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  padding: 0.7rem 1.4rem;
  background: var(--red);
  color: #fff;
  border: none;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: box-shadow 0.2s, transform 0.15s;
  display: inline-block;
}

.btn-primary:hover {
  box-shadow: 0 0 20px var(--red-glow), 0 0 40px var(--red-glow);
  transform: translateY(-1px);
}

.btn-ghost {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
  display: inline-block;
}

.btn-ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.avatar-frame {
  position: relative;
  width: 240px;
  height: 240px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-left: 4px solid var(--red);
  border-bottom: 4px solid var(--red);
  transform: rotate(1.5deg);
  filter: contrast(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar-img:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: -8px 8px 0 var(--red);
}

.avatar-glitch {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  max-width: 320px;
}

.stat-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-value {
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
}

.stat-value.red {
  color: var(--red);
}

.stat-value.gold {
  color: var(--gold);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-family: 'Inter', sans-serif;
}

.section-divider {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--text-muted);
}

.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.section-divider span {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  white-space: nowrap;
  color: var(--text-muted);
}

.arsenal {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.arsenal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px;
  background: var(--border);
}

.arsenal-card {
  background: var(--bg-card);
  padding: 2rem 1.75rem;
  transition: background 0.2s;
}

.arsenal-card:hover {
  background: var(--bg-card-2);
}

.arsenal-card.featured {
  border-top: 2px solid var(--red);
}

.card-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.arsenal-card h3 {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--text);
}

.arsenal-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.skill-bar {
  height: 3px;
  background: var(--border);
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  width: var(--pct);
  background: var(--red);
  box-shadow: 0 0 8px var(--red-glow);
  animation: fill-bar 1.2s ease forwards;
  transform-origin: left;
}

@keyframes fill-bar {
  from { width: 0; }
  to { width: var(--pct); }
}

.arsenal-card.featured .skill-fill {
  background: var(--gold);
  box-shadow: 0 0 8px var(--gold-glow);
}

.projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.projects-header,
.studies-header {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text);
  letter-spacing: -0.5px;
}

.section-sub {
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  color: var(--text-muted);
  display: block;
  margin-top: 0.4rem;
  letter-spacing: 0.08em;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}

.project-card:hover {
  border-color: var(--red);
  transform: translateY(-3px);
}

.project-card.large {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 0;
}

.project-img-frame {
  position: relative;
  background: var(--bg-card-2);
  min-height: 220px;
  overflow: hidden;
}

.project-img-frame.small {
  min-height: 160px;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  inset: 0;
}

.img-hint {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--border);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  white-space: nowrap;
}

.project-img[src=""] + .img-hint,
.project-img:not([src]) + .img-hint {
  display: block;
}

.project-img[src]:not([src=""]) + .img-hint {
  display: none;
}

.project-info {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.project-tag {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--gold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}

.project-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex: 1;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.btn-code {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--red);
  color: var(--red);
  transition: background 0.2s, color 0.2s;
  display: inline-block;
}

.btn-code:hover {
  background: var(--red);
  color: #fff;
}

.btn-demo {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
  display: inline-block;
}

.btn-demo:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.studies {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.studies-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}

.studies-track {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.track-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 1.25rem;
  padding-bottom: 2rem;
  position: relative;
}

.track-item:not(:last-child) .track-dot::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 9px;
  width: 1px;
  height: calc(100% - 10px);
  background: var(--border);
}

.track-dot {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border);
  margin-top: 4px;
  flex-shrink: 0;
}

.track-item.active .track-dot {
  background: var(--red);
  box-shadow: 0 0 10px var(--red-glow);
}

.track-item.upcoming .track-dot {
  background: transparent;
  border: 1px solid var(--border);
}

.track-status {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  display: block;
  margin-bottom: 0.35rem;
}

.track-item.active .track-status {
  color: var(--red);
}

.track-item.upcoming .track-status {
  color: var(--gold);
}

.track-content h4 {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.4rem;
}

.track-content p {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.studies-stack {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  padding: 1.75rem;
}

.stack-title {
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold);
  margin-bottom: 1.5rem;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.resource-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.resource-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.resource-item strong {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.resource-item p {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.site-footer {
  border-top: 1px solid var(--border);
  margin-top: 5rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-name {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.2rem;
  color: var(--red);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  color: var(--text-muted);
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--text);
}

.footer-copy {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 90px;
  }

  .hero-visual {
    order: -1;
    align-items: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-bio {
    margin-left: auto;
    margin-right: auto;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card.large {
    grid-template-columns: 1fr;
  }

  .studies-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 0.7rem;
  }

  .arsenal-grid {
    grid-template-columns: 1fr;
    background: transparent;
    gap: 1px;
  }

  .hero-stats {
    grid-template-columns: 1fr 1fr;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-fill {
    animation: none;
    width: var(--pct);
  }
}
