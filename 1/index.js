const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("text-primary-500");
  const isOpen = menu.classList.toggle("translate-y-38");
  if (isOpen) {
    menu.classList.remove("opacity-0");
    menuButton.querySelector("img").src = "assets/menu-desktop-active.svg";
  } else {
    menu.classList.add("opacity-0");
    menuButton.querySelector("img").src = "assets/menu-desktop.svg";
  }
});
