let number1 = 35;
let number2 = 10;

if (number1 < number2) {
  console.log("number1 jest mniejsze");
} else {
  console.log("number1 nie jest mniejsze");
}

let container = document.querySelector(".container");
console.log(container);

if (container.classList.contains("dark")) {
  console.log("Kontener jest ciemny!");
}

let button = document.querySelector(".button");

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "wyłącz ciemny motyw";
      }
})
