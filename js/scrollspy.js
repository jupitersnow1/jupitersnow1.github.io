export function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-teal-600", "font-semibold");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-teal-600", "font-semibold");
      }
    });
  });
}
