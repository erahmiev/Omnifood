"use strict";

// document.querySelector(".beitrag-erstellen").addEventListener("click", () => {
//   const div = document.createElement("div");
//   const textarea = document.createElement("textarea");
//   div.appendChild(textarea);
//   document.body.appendChild(div);
// });

document.querySelector(".beitrag-erstellen").addEventListener("click", () => {
  // const node = document.querySelector(".beitrag-container");
  // const clone = node.cloneNode(true);
  // const forum_header = document.querySelector(".forum-header");
  // forum_header.textContent = "";
  // document.body.appendChild(clone);
  const newPost = document.createElement("div");
  // newPost.style.border = "1px solid #0ea5e9";
  // newPost.style.borderRadius = "5px";
  // newPost.style.marginTop = "20px";
  // newPost.style.padding = "20px";
  // newPost.style.maxWidth = "600px";
  newPost.classList.add("beitrag-container");
  const postContainer = document.createElement("div");
  postContainer.classList.add("beitrag");
  const postText = document.createElement("textarea");
  postText.classList.add("beitrag-text");
  postText.style.marginTop = "50px";
  postContainer.appendChild(postText);
  newPost.appendChild(postContainer);
  document.body.appendChild(newPost);
});
