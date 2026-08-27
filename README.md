# Ezo Eylül Sağır — İç Mimarlık Portföyü

GitHub Pages uyumlu, statik ve mobil duyarlı iç mimarlık portföyü.

## Yeni deneyimler

- Anasayfada ileri yönde ilerleyen yaklaşık 25 saniyelik sinematik iç mekân videosu
- Altı özgün iç mekân projesi: salon, mutfak, yatak odası, banyo, yemek alanı ve çalışma odası
- Her projede üç profesyonel kamera açısı ve aynı tasarımı koruyan eşleşmiş gündüz/gece renderları
- Gece görselleri gündüz karelerinden tek tek ışıklandırılmıştır; mevcut armatürler sıcak 2700K ışık verirken dış mekân mavi geceye dönüşür
- Tek düğmeyle bütün galeri üzerinde gündüz/gece karşılaştırması
- Render kartları masaüstünde ve mobilde tıklanmaz; tam ekran açılır pencere kaldırılmıştır
- Masaüstünde 7680 × 7680 piksel 8K render dosyaları ve eşit ölçülü üçlü galeri
- Mobilde aynı koyu renk tema, mevcut duyarlı yerleşim ve 7680 × 7680 piksel 8K render dosyaları

## Yerelde çalıştırma

Proje klasöründe bir yerel sunucu başlatın:

```bash
python3 -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın. Render projeleri `projects.html`, proje galerileri ise `render-project.html` sayfasındadır.

## GitHub Pages

Dosyaları deponun ana dalına yükleyin. GitHub'da **Settings → Pages → Deploy from a branch** seçeneğiyle ana dalın kök klasörünü yayınlayın.

## Kaynak notu

Anasayfa videosu Pexels'teki Abdullah tarafından yayımlanan [A Long Take Video Showing a Home Interior Design](https://www.pexels.com/video/a-long-take-video-showing-a-home-interior-design-12956438/) içeriğinden kullanılmıştır. Yeni proje görselleri bu portföy için özgün olarak üretilmiş foto-gerçekçi konsept renderlardır; uygulanmış yapı fotoğrafı olarak sunulmamalıdır. Diğer eski portföy sayfalarındaki görseller Unsplash kaynaklıdır.
