// Sticky header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// // Dark mode button
var icon = document.getElementById("sun");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/dark-theme/sun.png";
  } else {
    icon.src = "img/dark-theme/moon.png";
    I;
  }
};
// // toggle start
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// onclick toggle menu show
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

// onclick toggle menu hide
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

// html body scroll animation
const sr = ScrollReveal({
  distance: "25px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-text", {delay: 200, origin: "left"});
sr.reveal(".home-img", {delay: 200, origin: "right"});

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {delay: 100, origin: "bottom"});
