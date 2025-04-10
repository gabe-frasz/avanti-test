document.querySelectorAll(".product-slider").forEach((slider) => {
  const track = slider.querySelector("ul");
  for (let i = 0; i < 14; i++) {
    const slide = slider.querySelector("ul>li");
    track.appendChild(slide.cloneNode(true));
  }
  const prevBtn = slider.querySelector("#prev");
  const nextBtn = slider.querySelector("#next");
  const sliderId = slider.dataset.slider;
  const dots = Array.from(
    document.querySelector(`[data-dots-for="${sliderId}"]`).children,
  );

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.remove("bg-[#838383]");
      dot.classList.remove("bg-[#303030]");
      dot.classList.add(
        index === currentIndex ? "bg-[#303030]" : "bg-[#838383]",
      );
    });
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex >= 2) return;
    currentIndex++;
    updateSlider();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      currentIndex = index;
      updateSlider();
    });
  });

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }
  });

  track.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && currentIndex < 2) {
      currentIndex++;
    } else if (diff < -50 && currentIndex > 0) {
      currentIndex--;
    }

    updateSlider();
    isDragging = false;
  });

  updateSlider();
});
