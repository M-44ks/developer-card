const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const counterButton = document.querySelector("#counter-button");


factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

var counter = 0;
counterButton.addEventListener("click", function () {
    counterButton.textContent = `Licznik: ${counter++}`
})