// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const toc = document.getElementById('toc');
navToggle.addEventListener('click', () => {
  const isOpen = toc.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after tapping a link
toc.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toc.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-spy: highlight current section in the sidebar
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.toc a');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.sec === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => spy.observe(sec));
