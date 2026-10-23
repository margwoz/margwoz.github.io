document.documentElement.classList.add("js-enabled");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

// Reveal content as it enters the viewport. Content remains visible if
// IntersectionObserver is unavailable or the visitor requests reduced motion.
const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}


// Show the resume PDF in a modal dialog in the current tab.
const resumeDialog = document.querySelector("#resume-dialog");
const resumeLinks = document.querySelectorAll("[data-resume-popup]");
const closeResumeButtons = document.querySelectorAll("[data-resume-close]");

resumeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!resumeDialog || typeof resumeDialog.showModal !== "function") return;
    event.preventDefault();
    resumeDialog.showModal();
  });
});

closeResumeButtons.forEach((button) => {
  button.addEventListener("click", () => resumeDialog?.close());
});

if (resumeDialog) {
  resumeDialog.addEventListener("click", (event) => {
    if (event.target === resumeDialog) resumeDialog.close();
  });
}
