const menuBtnDesktop = document.querySelector("#menu-button");
const menuDesktop = document.querySelector("#menu");

const menuBtnMobile = document.querySelector("#menu-button-mobile");
const menuMobile = document.querySelector("#menu-mobile");

menuBtnDesktop.addEventListener("click", () => {
  menuBtnDesktop.classList.toggle("text-primary-500");
  const isOpen = menuDesktop.classList.toggle("translate-y-38");
  if (isOpen) {
    menuDesktop.classList.remove("opacity-0");
    menuBtnDesktop.querySelector("img").src = "assets/menu-desktop-active.svg";
  } else {
    menuDesktop.classList.add("opacity-0");
    menuBtnDesktop.querySelector("img").src = "assets/menu-desktop.svg";
  }
});

menuBtnMobile.addEventListener("click", () => {
  const isOpen = !menuMobile.classList.toggle("-translate-x-1/4");
  if (isOpen) {
    menuMobile.classList.remove("opacity-0");
    document.body.style.overflow = "hidden";
  } else {
    menuMobile.classList.add("opacity-0");
    document.body.style.overflow = "auto";
  }
});
