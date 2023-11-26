let burgerMenuIcon = document.querySelector("#menu-icon");
let burgerMenu = document.querySelector("#menu");
let burgerLinks = document.querySelectorAll(".menu-link")

document.addEventListener("DOMContentLoaded", function () {
  burgerMenuIcon.addEventListener("click", () => {
    toggleMenu(burgerMenu);
  });

  document.addEventListener("click", (event) => {
    hideMenu(event, burgerMenuIcon, burgerMenu);
  });

  burgerLinks.forEach((link) => {
    link.addEventListener("click", toggleMenuLink);
  });
});

function toggleMenu(burgerMenu) {
  burgerMenu.classList.toggle("hidden");
}

function hideMenu(event, burgerMenuIcon, burgerMenu) {
  if (event.target === burgerMenuIcon || event.target === burgerMenu) {
    return;
  }

  burgerMenu.classList.add("hidden");
}

function toggleMenuLink(event) {
  burgerLinks.forEach((link) => {
    link.classList.remove("bg-black", "text-white");
  });

  event.target.classList.add("bg-black", "text-white");
}