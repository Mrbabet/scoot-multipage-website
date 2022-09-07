const menuBtn = document.querySelector(".burger-bars");
const hiddenMenu = document.querySelector(".nav-mobile");
const heroShade = document.querySelector(".hero");
const overflow = document.querySelector("body");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  hiddenMenu.classList.toggle("active");
  heroShade.classList.toggle("active");
  overflow.classList.toggle("active");
});
