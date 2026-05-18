/* ─── NAVBAR SCROLL EFFECT ─────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* ─── MOBILE HAMBURGER MENU ────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
  hamburger.classList.remove('active');
});

/* ─── SCROLL REVEAL ────────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [
        ...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
      ];
      const delay = siblings.indexOf(entry.target) * 80;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* ─── THEME TOGGLE ─────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  // Grab the <html> element
  const root = document.documentElement;
  
  // Check the current theme
  const currentTheme = root.getAttribute('data-theme');
  
  // Swap the theme
  if (currentTheme === 'dark') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
  }
});

