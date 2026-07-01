document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });
  }
});

function enableReveals() {
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const staggerRoots = Array.from(document.querySelectorAll('.stagger'));
  if (!revealEls.length && !staggerRoots.length) return;
  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '-24px' });
  revealEls.forEach(function(el, i) { el.style.transitionDelay = (i % 6) * 0.06 + 's'; io.observe(el); });
  staggerRoots.forEach(function(root) {
    const children = Array.from(root.children);
    children.forEach(function(child, i) { child.style.transitionDelay = i * 0.06 + 's'; io.observe(child); });
  });
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', enableReveals); } else { enableReveals(); }

