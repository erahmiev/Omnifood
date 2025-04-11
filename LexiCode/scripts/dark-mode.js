/* DARK MODE */

// const { text } = require("body-parser");

document.querySelector(".dark").addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
  let container = document.querySelector(".vocab-exercise");
  container.classList.toggle("dark-mode");
  let sidenav = document.querySelector(".sidebar-nav");
  sidenav.classList.toggle("dark-mode");
  let textArea = document.getElementByTagName("textarea");
  textArea.classList.toggle("dark-mode");
});
