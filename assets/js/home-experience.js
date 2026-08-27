(() => {
  "use strict";

  const video = document.querySelector("[data-hero-video]");
  const control = document.querySelector("[data-video-control]");
  if (!video || !control) return;

  const label = control.querySelector(".hero-video-control__label");
  const updateControl = () => {
    const paused = video.paused;
    control.classList.toggle("is-paused", paused);
    control.setAttribute("aria-pressed", String(paused));
    control.setAttribute("aria-label", paused ? "Arka plan videosunu oynat" : "Arka plan videosunu duraklat");
    if (label) label.textContent = paused ? "Videoyu oynat" : "Videoyu duraklat";
  };

  control.addEventListener("click", async () => {
    if (video.paused) {
      try { await video.play(); } catch (_) { /* Tarayıcı otomatik oynatmayı engelleyebilir. */ }
    } else {
      video.pause();
    }
    updateControl();
  });

  video.addEventListener("play", updateControl);
  video.addEventListener("pause", updateControl);
  video.addEventListener("error", () => {
    control.hidden = true;
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.pause();
  }
  updateControl();
})();
