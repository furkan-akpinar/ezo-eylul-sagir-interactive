(() => {
  "use strict";

  const CONTACT_EMAIL = "ezoeylulsagir@gmail.com";
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=82";

  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const toTop = document.getElementById("toTop");

  const updateHeader = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 30);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menüyü aç");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
      menuToggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("click", event => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach(link => {
      if (link.dataset.nav === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      projectCards.forEach(card => {
        const categories = (card.dataset.category || "").split(" ");
        card.hidden = filter !== "all" && !categories.includes(filter);
      });
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const subject = `Yeni proje talebi — ${data.get("name")}`;
      const body = [
        `Ad Soyad: ${data.get("name")}`,
        `E-posta: ${data.get("email")}`,
        `Telefon: ${data.get("phone") || "Belirtilmedi"}`,
        `Proje Türü: ${data.get("projectType")}`,
        "",
        "Proje Detayı:",
        data.get("message")
      ].join("\n");
      const status = document.getElementById("formStatus");
      if (status) status.textContent = "E-posta uygulamanız açılıyor…";
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const projectData = {
    "modern-villa": {
      title: "Modern Villa Yaşam Alanı",
      category: "Konut · Villa",
      location: "İstanbul",
      year: "2026",
      cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Gün ışığı, doğal dokular ve kesintisiz dolaşım üzerine kurulan sakin bir yaşam alanı.",
      body: "Ailenin günlük kullanım alışkanlıklarını merkeze alan projede salon, yemek alanı ve mutfak arasında görsel süreklilik sağlandı. Meşe, doğal taş ve keten dokular sıcak bir temel oluştururken seçili metal detaylar mekâna çağdaş bir karakter kattı.",
      bullets: ["Mekân planlama ve konsept tasarım", "Özel üretim sabit mobilyalar", "Aydınlatma ve malzeme danışmanlığı"]
    },
    "sehir-dairesi": {
      title: "Sakin Şehir Dairesi",
      category: "Konut · Daire",
      location: "İstanbul",
      year: "2026",
      cover: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Kompakt metrekarede ferahlık, depolama ve yalın estetiği bir araya getiren şehir evi.",
      body: "Gereksiz bölücüler azaltılarak görüş hattı uzatıldı, depolama çözümleri duvar yüzeylerine entegre edildi. Açık renkli yüzeyler ve sıcak ahşap tonları, şehir yaşamının temposuna karşı dingin bir iç atmosfer yarattı.",
      bullets: ["Kompakt alan optimizasyonu", "Gizli depolama çözümleri", "Mobilya ve aksesuar seçimi"]
    },
    "dogal-mutfak": {
      title: "Doğal Dokulu Mutfak",
      category: "Konut · Mutfak",
      location: "Bursa",
      year: "2025",
      cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Hazırlık, pişirme ve sosyalleşme işlevlerini tek güçlü merkezde buluşturan mutfak tasarımı.",
      body: "Ergonomik çalışma üçgeni, kolay temizlenen dayanıklı yüzeyler ve doğal malzeme dengesi projenin temelini oluşturdu. Ada ünitesi hem hazırlık yüzeyi hem de gündelik buluşma noktası olarak kurgulandı.",
      bullets: ["Mutfak yerleşim planı", "Dolap ve ada detayları", "Tezgâh, armatür ve aydınlatma seçimi"]
    },
    "yatak-odasi": {
      title: "Dinlendirici Yatak Odası",
      category: "Konut · Yatak Odası",
      location: "İzmir",
      year: "2025",
      cover: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Yumuşak dokular, kontrollü ışık ve sade detaylarla uyku kalitesini destekleyen özel alan.",
      body: "Renk paleti düşük kontrastlı tonlardan oluşturuldu; başlık duvarı akustik ve görsel konfor sağlayan tekstil yüzeylerle güçlendirildi. Katmanlı aydınlatma sayesinde dinlenme, okuma ve hazırlanma senaryoları ayrı ayrı kontrol edilebiliyor.",
      bullets: ["Renk ve tekstil paleti", "Özel başlık ve dolap tasarımı", "Katmanlı aydınlatma planı"]
    },
    "butik-kafe": {
      title: "Butik Kafe",
      category: "Ticari · Kafe",
      location: "İstanbul",
      year: "2026",
      cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Marka kimliğini sıcak malzemeler ve farklı oturma senaryolarıyla mekâna taşıyan buluşma noktası.",
      body: "Hızlı servis, uzun süreli çalışma ve sosyal buluşma gibi farklı kullanıcı davranışları için bölgesel oturma düzenleri kuruldu. Cephe görünürlüğü, tezgâh akışı ve ürün sunumu ticari performansı destekleyecek şekilde birlikte ele alındı.",
      bullets: ["Marka ve konsept geliştirme", "Müşteri-servis akış planı", "Uygulama çizimleri ve saha kontrolü"]
    },
    "yonetici-ofisi": {
      title: "Yönetici Ofisi",
      category: "Ticari · Ofis",
      location: "Ankara",
      year: "2025",
      cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=86",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=86"
      ],
      intro: "Odaklanma, toplantı ve dinlenme ihtiyaçlarını aynı mekânda karşılayan dengeli çalışma ortamı.",
      body: "Kurumsal kimlik koyu ahşap, taş ve metal birlikteliğiyle yorumlandı. Çalışma masasından toplantı alanına kadar bütün kararlar, kullanıcı mahremiyetini korurken ekip iletişimini kolaylaştıracak biçimde kurgulandı.",
      bullets: ["Kurumsal mekân konsepti", "Özel mobilya ve depolama", "Akustik ve aydınlatma çözümleri"]
    }
  };

  const articleData = {
    "kucuk-alanlar": {
      title: "Küçük alanları daha ferah göstermenin 7 yolu",
      tag: "Mekân Planlama",
      time: "6 dk. okuma",
      cover: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=2200&q=88",
      intro: "Doğru ölçek, görüş hattı ve aydınlatmayla metrekareden daha fazlasını elde etmek mümkün.",
      content: `
        <p>Küçük bir mekânı ferah göstermek yalnızca duvarları açık renge boyamakla çözülmez. Asıl farkı, dolaşım alanlarını ve gözün mekân içinde izlediği hattı doğru kurgulamak yaratır.</p>
        <h2>Ölçek ve görüş hattıyla başlayın</h2>
        <ol>
          <li>Odaya göre fazla derin ve yüksek mobilyalar yerine zemini daha görünür bırakan parçalar seçin.</li>
          <li>Mobilyaları tümüyle duvara yapıştırmak yerine rahat dolaşım boşlukları kurun.</li>
          <li>Perdeleri tavana yakın konumlandırarak düşey etkiyi güçlendirin.</li>
          <li>Depolamayı yatayda yaymak yerine duvar yüksekliğini kullanın.</li>
          <li>Aynayı dekor olsun diye değil, doğal ışığı taşıyacağı noktaya yerleştirin.</li>
          <li>Zeminde gereksiz malzeme geçişlerini azaltın.</li>
          <li>Genel, görev ve vurgu ışığını birlikte kullanın.</li>
        </ol>
        <h2>Az eşya değil, doğru eşya</h2>
        <p>Ferahlık hissi yalnızca eşya sayısıyla ilgili değildir. Birbirine oranı doğru, işlevi net ve yerleşimi dengeli parçalar; az ama ölçüsüz mobilyadan daha iyi sonuç verir.</p>`
    },
    "aydinlatma": {
      title: "Evde doğru aydınlatma katmanları nasıl kurulur?",
      tag: "Aydınlatma",
      time: "5 dk. okuma",
      cover: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=88",
      intro: "Genel, görev ve vurgu ışığını birlikte düşünerek daha konforlu bir atmosfer oluşturun.",
      content: `
        <p>Tek bir tavan armatürü çoğu mekân için hem yetersiz hem de serttir. İyi bir aydınlatma planı, farklı saatlerde ve farklı kullanım senaryolarında ihtiyaç duyulan ışığı katmanlar.</p>
        <h2>Üç temel ışık katmanı</h2>
        <ul>
          <li><strong>Genel ışık:</strong> Mekânda güvenli ve dengeli bir temel aydınlık sağlar.</li>
          <li><strong>Görev ışığı:</strong> Okuma, hazırlık veya çalışma yüzeyini doğrudan destekler.</li>
          <li><strong>Vurgu ışığı:</strong> Tablo, bitki, doku ve mimari ayrıntıları öne çıkarır.</li>
        </ul>
        <h2>Renk sıcaklığını tutarlı seçin</h2>
        <p>Yaşam ve dinlenme alanlarında sıcak ışık daha rahatlatıcıdır. Mutfak veya çalışma alanında ise renkleri bozmayacak, daha dengeli bir sıcaklık tercih edilebilir. Aynı görüş alanındaki armatürlerin renk sıcaklıklarının birbirinden kopmaması önemlidir.</p>`
    },
    "malzeme": {
      title: "Zamansız bir iç mekân için malzeme seçimi",
      tag: "Malzeme",
      time: "4 dk. okuma",
      cover: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=88",
      intro: "Taş, ahşap, metal ve tekstil dengesini doğru kurarak uzun ömürlü bir bütünlük yaratın.",
      content: `
        <p>Zamansızlık, her yüzeyi nötr yapmak değildir. Uzun ömürlü bir iç mekân; malzemenin karakterini, bakım ihtiyacını ve zaman içinde nasıl yaşlanacağını birlikte değerlendirir.</p>
        <h2>Ana yüzeylerde sakin bir temel kurun</h2>
        <p>Zemin, duvar ve büyük sabit mobilyalarda dayanıklı ve kolay eşleşen malzemeler seçin. Daha iddialı renk ve desenleri değiştirilebilir tekstil, sanat ve aksesuarlarda kullanmak mekânın yıllar içinde yenilenmesini kolaylaştırır.</p>
        <h2>Numuneyi gerçek ışıkta görün</h2>
        <ul>
          <li>Numuneleri mekânın sabah ve akşam ışığında inceleyin.</li>
          <li>Mat ve parlak yüzeyleri dengeli dağıtın.</li>
          <li>Bakım sıklığını ve kullanım yoğunluğunu karar ölçütüne dahil edin.</li>
          <li>Doğal malzemelerin renk ve doku farklılıklarını tasarımın parçası olarak kabul edin.</li>
        </ul>`
    }
  };

  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get("proje");
  const articleKey = params.get("yazi");

  if (projectKey && document.getElementById("projectTitle")) {
    const project = projectData[projectKey] || projectData["modern-villa"];
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectCategory").textContent = project.category;
    document.getElementById("projectLocation").textContent = project.location;
    document.getElementById("projectYear").textContent = project.year;
    document.getElementById("projectCover").src = project.cover;
    document.getElementById("projectCover").alt = project.title;
    document.getElementById("projectIntro").textContent = project.intro;
    document.getElementById("projectBody").textContent = project.body;
    document.getElementById("projectGalleryOne").src = project.gallery[0];
    document.getElementById("projectGalleryOne").alt = `${project.title} proje detayı`;
    document.getElementById("projectGalleryTwo").src = project.gallery[1];
    document.getElementById("projectGalleryTwo").alt = `${project.title} ikinci proje detayı`;
    const list = document.getElementById("projectBullets");
    list.innerHTML = project.bullets.map(item => `<li>${item}</li>`).join("");
    document.title = `${project.title} | Ezo Eylül Sağır`;
  }

  if (articleKey && document.getElementById("articleTitle")) {
    const article = articleData[articleKey] || articleData["kucuk-alanlar"];
    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleTag").textContent = article.tag;
    document.getElementById("articleTime").textContent = article.time;
    document.getElementById("articleIntro").textContent = article.intro;
    document.getElementById("articleCover").src = article.cover;
    document.getElementById("articleCover").alt = article.title;
    document.getElementById("articleContent").innerHTML = article.content;
    document.title = `${article.title} | Ezo Eylül Sağır`;
  }

  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelectorAll("[data-year]").forEach(item => { item.textContent = new Date().getFullYear(); });
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "true";
      img.src = FALLBACK_IMAGE;
    });
  });
})();
