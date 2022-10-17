console.log("Cześć! Nauczycielu :) Bardzo mi miło");

let button = document.querySelector(".js-button");
let header = document.querySelector(".js-header");
let buttonName = document.querySelector(".js-buttonName");

button.addEventListener("click", () => {
  header.classList.toggle("hide");
  buttonName.innerText = header.classList.contains("hide") ? "Pokaż" : "Ukryj";
});
