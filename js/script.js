{
  const welcome = () => {
    console.log("Cześć! Nauczycielu :) Bardzo mi miło");
  };

  const toggleHeader = () => {
    const header = document.querySelector(".js-header");
    const buttonName = document.querySelector(".js-buttonName");
    header.classList.toggle("hide");
    buttonName.innerText = header.classList.contains("hide")
      ? "Pokaż"
      : "Ukryj";
  };

  const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", toggleHeader);

    welcome();
  };
  
  init();
}
