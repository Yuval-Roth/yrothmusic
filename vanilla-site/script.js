const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const nav = document.querySelector("#primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const sections = Array.from(document.querySelectorAll("[data-section]"));
const studioImage = document.querySelector("#studio-image");
const galleryCurrent = document.querySelector("#gallery-current");
const galleryTotal = document.querySelector("#gallery-total");
const projectGrid = document.querySelector("#project-grid");
const contactForm = document.querySelector("#contact-form");

const studioImages = [
  "assets/studio/studio-01.jpg",
  "assets/studio/studio-02.jpg",
  "assets/studio/studio-03.jpg",
  "assets/studio/studio-04.jpg",
  "assets/studio/studio-05.jpg",
  "assets/studio/studio-06.jpg",
  "assets/studio/studio-07.jpg",
  "assets/studio/studio-08.jpg",
  "assets/studio/studio-09.jpg",
];

const mediaProjects = [
  {
    title: "חזי כהן - אדם אחר",
    cover: "assets/media/adam-aher.jpg",
    spotify: "https://open.spotify.com/track/5BDP6Vmi06vFNFPP95i4c8?si=84372c43782a429c",
    youtube: "https://www.youtube.com/watch?v=pKH4XQqeAp8",
    apple: "https://music.apple.com/il/album/%D7%90%D7%93%D7%9D-%D7%90%D7%97%D7%A8/1624543561?i=1624543724",
  },
  {
    title: "Fox Temple - Don D",
    cover: "assets/media/don-d.png",
    spotify: "https://open.spotify.com/track/5oM1L9m8ScMpP7QZY6qJR0?si=8171240810c94c66",
    youtube: "https://youtu.be/t97zqoysDHM",
    apple: "https://music.apple.com/il/album/don-d/1642928398?i=1642928399",
  },
  {
    title: "חזי כהן - מרכיב את עצמי מחדש (אלבום)",
    cover: "assets/media/hezi2.jpg",
    spotify: "https://open.spotify.com/album/2STAX3OWRlrhzhjqZAvrYN?si=TS_K5L0WQkigGeg-dFa3iQ",
    youtube: "https://www.youtube.com/watch?v=MuvS6uSOtJM&list=PLQc9GxIVl4KZauza34ALATYfDKE7PY1Fw",
    apple: "https://music.apple.com/il/album/%D7%9E%D7%A8%D7%9B%D7%99%D7%91-%D7%90%D7%AA-%D7%A2%D7%A6%D7%9E%D7%99-%D7%9E%D7%97%D7%93%D7%A9/1626880314",
  },
  {
    title: "Fox Temple - Women",
    cover: "assets/media/women.png",
    spotify: "https://open.spotify.com/track/5C3LNCv1R52BLzFAk7tMNi",
    youtube: "https://www.youtube.com/watch?v=Kw4ROo4g5Qw&ab_channel=FoxTemple",
    apple: "https://music.apple.com/album/1616048332?i=1616048333&at=1001lbRT&ct=1164600",
  },
  {
    title: "חזי כהן - בין מציאות לחלום ישן",
    cover: "assets/media/hezi-bmly.png",
    spotify: "https://open.spotify.com/track/11N4xQrFUdPlqUOoyqu5e2",
    youtube: "https://www.youtube.com/watch?v=Rngkvr-DeS0",
    apple: "https://music.apple.com/album/%D7%91%D7%99%D7%9F-%D7%9E%D7%A6%D7%99%D7%90%D7%95%D7%AA-%D7%9C%D7%97%D7%9C%D7%95%D7%9D-%D7%99%D7%A9%D7%9F/1589857832?i=1589857970",
  },
  {
    title: "Fox Temple - Vampire of Energy",
    cover: "assets/media/vampire-of-energy.png",
    spotify: "https://open.spotify.com/track/0WxDvecerXuae1HeTvxEbU?si=Vobtj-QjTQyI56m4Ry7lKg&utm_",
    youtube: "https://www.youtube.com/watch?v=zdkrXqEXcQY",
    apple: "https://music.apple.com/il/album/vampire-of-energy/1604092818?i=1604092819",
  },
  {
    title: "Fox Temple - I'm the Voice",
    cover: "assets/media/im-the-voice.jpg",
    spotify: "https://open.spotify.com/track/5vEoQUqlQ9tNqhh1MmAqd4?si=f8454206257b4f99",
    youtube: "https://www.youtube.com/watch?v=MpPt1W9B-TA",
    apple: "https://music.apple.com/us/album/im-the-voice/1569168019?i=1569168022",
  },
  {
    title: "Fox Temple - Imperfect Fifth",
    cover: "assets/media/imperfect-fifth.jpg",
    spotify: "https://open.spotify.com/track/0lFfTMAdGpHnnRPp5Fg9sI?si=8dceb1b4c4194bc6",
    youtube: "https://www.youtube.com/watch?v=_K653hArYxE",
    apple: "https://music.apple.com/us/album/imperfect-fifth/1579151970?i=1579151971",
  },
  {
    title: "גיל אלחנטי - תוצר של בחירות (אלבום)",
    cover: "assets/media/gil-elchanti.png",
    spotify: "https://open.spotify.com/album/7BMQxdoNwqaXbX22EUOqvi?si=0m0mf7oOReqZckptRdQwWw",
    youtube: "https://www.youtube.com/watch?v=9u68kiGryRA&list=OLAK5uy_n2ps1rGEfJKgQueHG2d4-uf3MyPl3SkP0",
    apple: "https://music.apple.com/us/album/%D7%AA%D7%95%D7%A6%D7%A8-%D7%A9%D7%9C-%D7%91%D7%97%D7%99%D7%A8%D7%95%D7%AA/1559370757",
  },
  {
    title: "איש הפסנתר - יומרני",
    cover: "assets/media/yomrani.png",
    spotify: "https://open.spotify.com/album/0u8xa6hLSyAxjfz0As4vEL?si=dtB1VhzuRh6_bKN_vPGIzw",
    youtube: "https://www.youtube.com/watch?v=QLSs2rRgHBw&list=OLAK5uy_nBbuKcDGUhMunvA24me7P9BUlIKZN4uGE",
    apple: "https://music.apple.com/us/album/%D7%99%D7%95%D7%9E%D7%A8%D7%A0%D7%99/1434286006",
  },
  {
    title: "חזי כהן - מרכיב את עצמי מחדש",
    cover: "assets/media/hezi-markiv.jpg",
    spotify: "https://open.spotify.com/track/6kNYmggzZPKJiFUSyCf19T?si=0b5cf42c51e844fa",
    youtube: "https://www.youtube.com/watch?v=KoKsnbe8oiw",
    apple: "https://music.apple.com/us/album/%D7%9E%D7%A8%D7%9B%D7%99%D7%91-%D7%90%D7%AA-%D7%A2%D7%A6%D7%9E%D7%99-%D7%9E%D7%97%D7%93%D7%A9/1568540588?i=1568540731",
  },
  {
    title: "אלמוג - אם לא הייתי",
    cover: "assets/media/almog-history.jpg",
    spotify: "https://www.youtube.com/watch?v=KpmPWAXA-Pg",
    youtube: "https://www.youtube.com/watch?v=KpmPWAXA-Pg",
    apple: "https://www.youtube.com/watch?v=KpmPWAXA-Pg",
  },
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
  galleryIndex = (galleryIndex + direction + studioImages.length) % studioImages.length;
  studioImage.src = studioImages[galleryIndex];
  studioImage.alt = `Yiftach Roth music studio ${galleryIndex + 1}`;
  galleryCurrent.textContent = String(galleryIndex + 1);
}

function createIconLink(href, icon, label) {
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("aria-label", label);

  const img = document.createElement("img");
  img.src = icon;
  img.alt = "";
  link.append(img);

  return link;
}

function renderProjects() {
  const fragment = document.createDocumentFragment();

  mediaProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const coverWrap = document.createElement("div");
    coverWrap.className = "project-cover";

    const cover = document.createElement("img");
    cover.src = project.cover;
    cover.alt = project.title;
    cover.loading = "lazy";
    coverWrap.append(cover);

    const actions = document.createElement("div");
    actions.className = "project-actions";
    actions.append(
      createIconLink(project.spotify, "assets/spotify.png", `${project.title} on Spotify`),
      createIconLink(project.youtube, "assets/youtube.png", `${project.title} on YouTube`),
      createIconLink(project.apple, "assets/apple-music.png", `${project.title} on Apple Music`)
    );

    card.append(coverWrap, actions);
    fragment.append(card);
  });

  projectGrid.append(fragment);
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
galleryTotal.textContent = String(studioImages.length);
renderProjects();
setActiveNav("about");
