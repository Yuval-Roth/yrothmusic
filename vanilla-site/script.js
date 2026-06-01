const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const nav = document.querySelector("#primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const sections = Array.from(document.querySelectorAll("[data-section]"));
const studioImage = document.querySelector("#studio-image");
const galleryCurrent = document.querySelector("#gallery-current");
const contactForm = document.querySelector("#contact-form");

const galleryFrames = [
  { position: "center center", label: "Studio view" },
  { position: "75% center", label: "Yiftach Roth playing guitar" },
  { position: "18% center", label: "Studio amplifier and instruments" },
];

let galleryIndex = 0;

function setActiveNav(sectionName) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === sectionName);
  });
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function updateGallery(direction) {
  galleryIndex = (galleryIndex + direction + galleryFrames.length) % galleryFrames.length;
  const frame = galleryFrames[galleryIndex];
  studioImage.style.objectPosition = frame.position;
  studioImage.alt = frame.label;
  galleryCurrent.textContent = String(galleryIndex + 1);
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveNav(link.dataset.nav);
    closeMenu();
  });
});

document.querySelector(".gallery-prev").addEventListener("click", () => updateGallery(-1));
document.querySelector(".gallery-next").addEventListener("click", () => updateGallery(1));

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".form-status");
  status.textContent = "Thanks. Your message is ready to connect to an email or form service.";
  contactForm.reset();
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveNav(visible.target.dataset.section);
    }
  },
  {
    rootMargin: "-20% 0px -45% 0px",
    threshold: [0.2, 0.45, 0.7],
  }
);

sections.forEach((section) => sectionObserver.observe(section));
setActiveNav("about");
