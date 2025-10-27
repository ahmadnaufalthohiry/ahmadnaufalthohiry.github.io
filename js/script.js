// Navigation Active Link & Section Display
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class
    navLinks.forEach((nav) => nav.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));

    // Add active class to clicked link & section
    link.classList.add("active");
    const target = document.querySelector(link.getAttribute("href"));
    target.classList.add("active");

    // Scroll to top of section smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
