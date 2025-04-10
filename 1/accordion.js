document.querySelectorAll(".accordion").forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const body = accordion.querySelector(".accordion-body");
  const icon = accordion.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = body.classList.contains("max-h-[500px]");

    document.querySelectorAll(".accordion-body").forEach((el) => {
      el.classList.remove("max-h-[500px]");
      el.classList.add("max-h-0");
    });

    document.querySelectorAll(".accordion-icon").forEach((i) => {
      i.classList.remove("rotate-180");
    });

    if (!isOpen) {
      body.classList.remove("max-h-0");
      body.classList.add("max-h-[500px]");
      icon.classList.add("rotate-180");
    }
  });
});
