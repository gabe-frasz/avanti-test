const menuBtnDesktop = document.querySelector("#menu-button");
const menuDesktop = document.querySelector("#menu");

const menuBtnMobile = document.querySelector("#menu-button-mobile");
const menuMobile = document.querySelector("#menu-mobile");

menuBtnDesktop.addEventListener("click", async () => {
  menuBtnDesktop.classList.toggle("text-primary-500");
  const isOpen = !menuDesktop.classList.toggle("-top-full");
  if (isOpen) {
    menuDesktop.classList.add("top-0");
    menuDesktop.classList.add("translate-y-38");
    menuDesktop.classList.remove("opacity-0");
    menuBtnDesktop.querySelector("img").src = "assets/menu-desktop-active.svg";
  } else {
    menuDesktop.classList.remove("translate-y-38");
    menuDesktop.classList.add("opacity-0");
    menuBtnDesktop.querySelector("img").src = "assets/menu-desktop.svg";

    await new Promise((resolve) => setTimeout(resolve, 300));
    menuDesktop.classList.remove("top-0");
  }
});

menuBtnMobile.addEventListener("click", () => {
  const isOpen = !menuMobile.classList.toggle("-translate-x-full");
  if (isOpen) {
    menuMobile.classList.remove("opacity-0");
    document.body.style.overflow = "hidden";
  } else {
    menuMobile.classList.add("opacity-0");
    document.body.style.overflow = "auto";
  }
});
