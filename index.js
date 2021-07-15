import lightButton from "./img/8ec1bb2628073f20382b238e319d5378.svg";
import darkButton from "./img/b5a1d1887b576690d954ecd6a6adb569.svg";

// Cards Hover

const cards = document.querySelectorAll(".categories__card");
const scrollBar = document.querySelector(".categories__scroll-bar");
scrollBar.style.display = "none";

const onHover = (event) => {
  const targetCard = event.currentTarget;
  const position = targetCard.getBoundingClientRect().x;
  scrollBar.style.left = position + "px";
  scrollBar.style.display = "block";
  cards.forEach((c) => {
    if (c !== targetCard && !c.classList.contains("unselected")) {
      c.classList.add("unselected");
    }
  });
};
const onHoverLeave = () => {
  cards.forEach((c) => c.classList.remove("unselected"));
};

cards.forEach((c) => c.addEventListener("mouseover", onHover));
cards.forEach((c) => c.addEventListener("mouseleave", onHoverLeave));

// Cards Hover END

// Theme Button

const themeButton = document.querySelector(".header__page-settings");

const toggleTheme = (event) => {
  const layout = document.querySelector(".layout");
  layout.classList.toggle("dark-theme");
  layout.classList.toggle("light-theme");
  const iconSun = document.querySelector(".header__theme-settings > img");
  const iconDiamond = document.querySelector(".header__logo > svg > path");

  if (layout.classList.contains("dark-theme")) {
    iconDiamond.setAttribute("fill", "#FDFDFD");
    iconSun.src = darkButton;
  } else {
    iconDiamond.setAttribute("fill", "#1e232b");
    iconSun.src = lightButton;
  }
  console.log(iconSun);
};

themeButton.addEventListener("click", toggleTheme);

// Theme Button END

const table = document.querySelector(".about__close");
