(() => {
  "use strict";

  const projects = {
    kitchen: {
      title: "Traverten Mutfak",
      category: "Konut · Mutfak",
      description: "Doğal taş, füme meşe ve bronz detayların sakin bir ışık kurgusuyla birleştiği çağdaş mutfak tasarımı.",
      specs: ["42 m²", "Traverten", "Füme Meşe", "2026"],
      next: { key: "living", label: "Heykelsi Salon" },
      views: [
        { label: "Ana Perspektif", day: "assets/renders/kitchen/view-1-day-8k.jpg", night: "assets/renders/kitchen/view-1-night-v2-8k.jpg" },
        { label: "Ada Detayı", day: "assets/renders/kitchen/view-2-day-8k.jpg", night: "assets/renders/kitchen/view-2-night-v2-8k.jpg" },
        { label: "Yemek Alanına Bakış", day: "assets/renders/kitchen/view-3-day-8k.jpg", night: "assets/renders/kitchen/view-3-night-v2-8k.jpg" }
      ]
    },
    living: {
      title: "Heykelsi Salon",
      category: "Konut · Salon",
      description: "Kıvrımlı oturma elemanları, açık renk kireçtaşı ve füme meşe yüzeylerin bahçe manzarasıyla dengelendiği sakin yaşam alanı.",
      specs: ["68 m²", "Kireçtaşı", "Füme Meşe", "2026"],
      next: { key: "bedroom", label: "Sessiz Süit" },
      views: [
        { label: "Salon Ana Perspektif", day: "assets/renders/living/view-1-day-8k.jpg", night: "assets/renders/living/view-1-night-v2-8k.jpg" },
        { label: "Şömine ve Oturma", day: "assets/renders/living/view-2-day-8k.jpg", night: "assets/renders/living/view-2-night-v2-8k.jpg" },
        { label: "Bahçeye Bakış", day: "assets/renders/living/view-3-day-8k.jpg", night: "assets/renders/living/view-3-night-v2-8k.jpg" }
      ]
    },
    bedroom: {
      title: "Sessiz Süit",
      category: "Konut · Yatak Odası",
      description: "Dokulu tekstiller, füme meşe başlık duvarı ve yumuşak ışık katmanlarıyla dinlenme hissini güçlendiren ebeveyn süiti.",
      specs: ["38 m²", "Keten & Bukle", "Füme Meşe", "2026"],
      next: { key: "bathroom", label: "Taş Spa Banyosu" },
      views: [
        { label: "Yatak Ana Perspektif", day: "assets/renders/bedroom/view-1-day-8k.jpg", night: "assets/renders/bedroom/view-1-night-v2-8k.jpg" },
        { label: "Komodin Detayı", day: "assets/renders/bedroom/view-2-day-8k.jpg", night: "assets/renders/bedroom/view-2-night-v2-8k.jpg" },
        { label: "Bahçe ve Okuma Köşesi", day: "assets/renders/bedroom/view-3-day-8k.jpg", night: "assets/renders/bedroom/view-3-night-v2-8k.jpg" }
      ]
    },
    bathroom: {
      title: "Taş Spa Banyosu",
      category: "Konut · Banyo",
      description: "Damarlı doğal taş, bronz armatürler ve bahçeye açılan mahrem cam yüzeylerle kurgulanmış ev içi spa deneyimi.",
      specs: ["26 m²", "Doğal Taş", "Bronz", "2026"],
      next: { key: "dining", label: "Alabaster Yemek Salonu" },
      views: [
        { label: "Küvet ve Vanity", day: "assets/renders/bathroom/view-1-day-8k.jpg", night: "assets/renders/bathroom/view-1-night-v2-8k.jpg" },
        { label: "Ayna ve Malzeme", day: "assets/renders/bathroom/view-2-day-8k.jpg", night: "assets/renders/bathroom/view-2-night-v2-8k.jpg" },
        { label: "Duş Alanı", day: "assets/renders/bathroom/view-3-day-8k.jpg", night: "assets/renders/bathroom/view-3-night-v2-8k.jpg" }
      ]
    },
    dining: {
      title: "Alabaster Yemek Salonu",
      category: "Konut · Yemek Alanı",
      description: "Traverten masa, alabaster sarkıt ve koyu ahşap sergileme yüzeylerinin birlikte çalıştığı zarif davet alanı.",
      specs: ["44 m²", "Traverten", "Alabaster", "2026"],
      next: { key: "office", label: "Monolitik Çalışma Odası" },
      views: [
        { label: "Masa Ana Perspektif", day: "assets/renders/dining/view-1-day-8k.jpg", night: "assets/renders/dining/view-1-night-v2-8k.jpg" },
        { label: "Sarkıt ve Sofra", day: "assets/renders/dining/view-2-day-8k.jpg", night: "assets/renders/dining/view-2-night-v2-8k.jpg" },
        { label: "Bahçeye Bakış", day: "assets/renders/dining/view-3-day-8k.jpg", night: "assets/renders/dining/view-3-night-v2-8k.jpg" }
      ]
    },
    office: {
      title: "Monolitik Çalışma Odası",
      category: "Konut · Çalışma Alanı",
      description: "Koyu taş çalışma masası, bronz detaylı kütüphane ve odaklanmayı destekleyen kontrollü ışık senaryosuyla özel çalışma odası.",
      specs: ["31 m²", "Koyu Taş", "Konyak Deri", "2026"],
      next: { key: "kitchen", label: "Traverten Mutfak" },
      views: [
        { label: "Masa ve Kütüphane", day: "assets/renders/office/view-1-day-8k.jpg", night: "assets/renders/office/view-1-night-v2-8k.jpg" },
        { label: "Çalışma Detayı", day: "assets/renders/office/view-2-day-8k.jpg", night: "assets/renders/office/view-2-night-v2-8k.jpg" },
        { label: "Okuma Köşesi", day: "assets/renders/office/view-3-day-8k.jpg", night: "assets/renders/office/view-3-night-v2-8k.jpg" }
      ]
    }
  };

  const requestedKey = new URLSearchParams(window.location.search).get("project") || "kitchen";
  const project = projects[requestedKey] || projects.kitchen;
  const renderGrid = document.getElementById("renderGrid");
  const modeButtons = [...document.querySelectorAll("[data-mode]")];

  const imageFor = (view, mode) => view[mode];
  let renderSwapId = 0;

  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectCategory").textContent = project.category;
  document.getElementById("projectDescription").textContent = project.description;
  document.getElementById("renderYear").textContent = new Date().getFullYear();
  document.title = `${project.title} | Ezo Eylül Sağır İç Mimarlık`;

  const specs = document.getElementById("projectSpecs");
  project.specs.forEach((spec) => {
    const item = document.createElement("span");
    item.textContent = spec;
    specs.append(item);
  });

  const nextProject = document.getElementById("nextProject");
  nextProject.href = `render-project.html?project=${project.next.key}`;
  nextProject.innerHTML = `${project.next.label} <b>→</b>`;

  project.views.forEach((view, index) => {
    const card = document.createElement("article");
    card.className = "render-card";
    card.innerHTML = `
      <div class="render-card__image">
        <img src="${imageFor(view, "day")}" alt="${project.title} · ${view.label} · gündüz renderı" data-view-index="${index}" decoding="async"${index === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>
        <div class="render-card__meta"><strong>${view.label}</strong><span data-card-mode>Doğal Gün Işığı</span></div>
      </div>`;
    renderGrid.append(card);
  });

  // İlk geçişte bekleme yaşanmaması için sayfa açıldıktan sonra bu projeye ait
  // üç gece renderını arka planda önbelleğe al.
  window.addEventListener("load", () => {
    project.views.forEach((view) => {
      const preloader = new Image();
      preloader.src = imageFor(view, "night");
    });
  }, { once: true });

  const setMode = (mode) => {
    const swapId = ++renderSwapId;
    document.body.dataset.renderMode = mode;
    modeButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.mode === mode)));
    const cards = [...document.querySelectorAll(".render-card")];
    cards.forEach((card) => card.classList.add("is-changing"));

    const preloaders = project.views.map((view) => new Promise((resolve) => {
      const preloader = new Image();
      preloader.onload = resolve;
      preloader.onerror = resolve;
      preloader.src = imageFor(view, mode);
    }));

    Promise.all(preloaders).then(() => {
      if (swapId !== renderSwapId) return;
      cards.forEach((card, index) => {
        const image = card.querySelector("img");
        const view = project.views[index];
        image.src = imageFor(view, mode);
        image.alt = `${project.title} · ${view.label} · ${mode === "day" ? "gündüz" : "gece"} renderı`;
        card.querySelector("[data-card-mode]").textContent = mode === "day" ? "Doğal Gün Işığı" : "Yapay Gece Aydınlatması";
        card.classList.remove("is-changing");
      });
    });
  };

  modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  document.body.dataset.renderMode = "day";
})();
