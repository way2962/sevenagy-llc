/* ===== Mobile Menu ===== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ===== Sticky nav ===== */
const nav = document.getElementById("nav");
const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
