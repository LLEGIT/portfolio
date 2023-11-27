let burgerMenuIcon = document.querySelector("#menu-icon");
let burgerMenu = document.querySelector("#menu");
let burgerLinks = document.querySelectorAll(".menu-link");
let easterEgg = document.querySelector("#easter-egg");
let easterEggIteration = 0;
let easterEggCount = Math.floor(Math.random() * 10);

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

  let sectionLinks = document.querySelectorAll(".section-link");
  sectionLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });

  easterEgg.addEventListener("click", moveEasterEgg);
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

function moveEasterEgg(event) {
  if (easterEggCount === easterEggIteration) {
    event.target.src =
      "https://img1.picmix.com/output/stamp/normal/0/5/3/4/534350_587dd.gif";

    setTimeout(() => {
      event.target.remove();
    }, 1000);
    return;
  } else {
    let randomTop = (document.documentElement.scrollHeight / (Math.random() * 10)) + "px";
    let randomLeft = Math.floor(Math.random() * 98) + "vw";

    event.target.style.top = randomTop;
    event.target.style.left = randomLeft;
    console.log(event.target.style.top);
  }

  easterEggIteration++;
}
