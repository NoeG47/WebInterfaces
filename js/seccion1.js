//Funcion de leer mas
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const extraContent = document.getElementById("extra-content");

  toggleButton.addEventListener("click", function () {
    if (extraContent.classList.contains("hidden")) {
      extraContent.classList.remove("hidden");
      toggleButton.textContent = "Leer menos";
    } else {
      extraContent.classList.add("hidden");
      toggleButton.textContent = "Leer más";
    }
  });
});
