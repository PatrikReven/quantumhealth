const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const forms = document.querySelectorAll("[data-contact-form]");

const syncHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    header.classList.toggle("nav-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      header.classList.remove("nav-active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

forms.forEach((form) => {
  const formNote = form.querySelector("[data-form-note]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    formNote.textContent = name
      ? `${name}, hvala. Povpraševanje je pripravljeno. Za pravo pošiljanje je treba povezati e-poštni ali CRM sistem.`
      : "Hvala. Povpraševanje je pripravljeno. Za pravo pošiljanje je treba povezati e-poštni ali CRM sistem.";
    form.reset();
  });
});
// Home hero subtle mouse movement
const homeHero = document.querySelector(".home-hero-clean");
const homeHeroImage = document.querySelector(".home-hero-clean .hero-image");

if (homeHero && homeHeroImage) {
  homeHero.addEventListener("mousemove", (event) => {
    const rect = homeHero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    homeHeroImage.style.setProperty("--hero-move-x", `${x * -22}px`);
    homeHeroImage.style.setProperty("--hero-move-y", `${y * -16}px`);
  });

  homeHero.addEventListener("mouseleave", () => {
    homeHeroImage.style.setProperty("--hero-move-x", "0px");
    homeHeroImage.style.setProperty("--hero-move-y", "0px");
  });
}