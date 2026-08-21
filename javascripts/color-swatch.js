document.addEventListener("click", function (e) {
  var swatch = e.target.closest(".color-palette .swatch");
  if (!swatch) return;

  var hexEl = swatch.querySelector(".swatch-hex");
  if (!hexEl) return;

  var hex = hexEl.dataset.original || hexEl.textContent.trim();
  hexEl.dataset.original = hex;

  navigator.clipboard.writeText(hex).then(function () {
    swatch.classList.add("copied");
    hexEl.textContent = "복사됨!";
    clearTimeout(swatch._copyTimer);
    swatch._copyTimer = setTimeout(function () {
      hexEl.textContent = hex;
      swatch.classList.remove("copied");
    }, 900);
  });
});
