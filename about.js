const menuBtn = document.querySelector(".burger-bars");
const hiddenMenu = document.querySelector(".nav-mobile");
const aboutShade = document.querySelector(".about");
const overflow = document.querySelector("body");
const arrowBtn = document.querySelector(".arrow-btn");

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
  aboutShade.classList.toggle("active");
  overflow.classList.toggle("active");
});

// Do opracowania jak zrobić, żeby poszczególne buttony aktywowały poszczególny div
let arrow = false;
arrowBtn.addEventListener("click", () => {
  if (!menuOpen) {
    arrowBtn.classList.add("active");
    arrowOpen = true;
  } else {
    arrowBtn.classList.remove("active");
    arrowOpen = false;
  }
});
arrowBtn.addEventListener("click", function () {
  const showP = document.querySelectorAll(".toggle");
  for (let i = 0; i < showP.length; i++) {
    showP[i].classList.toggle("active");
  }
});
