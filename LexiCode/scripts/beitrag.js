"use strict";

// document.querySelector(".beitrag-erstellen").addEventListener("click", () => {
//   const div = document.createElement("div");
//   const textarea = document.createElement("textarea");
//   div.appendChild(textarea);
//   document.body.appendChild(div);
// });

document.querySelector(".beitrag-erstellen").addEventListener("click", () => {
  const node = document.querySelector(".beitrag-container");
  const clone = node.cloneNode(true);
  document.body.appendChild(clone);
});
