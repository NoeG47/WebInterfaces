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

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las secciones que contienen temas
  const temaSections = document.querySelectorAll(".tema");

  temaSections.forEach((section) => {
    const buttons = section.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        toggleEstado(button);
      });
    });
  });
});
//Funcion de marcar boton hecho
function toggleEstado(button) {
  if (button.classList.contains("bg-teal")) {
    // Volver al estado inicial
    button.classList.remove("bg-teal", "text-white");
    button.classList.add("bg-white");
    button.textContent = "Marcar como hecha";
  } else {
    // Cambiar a estado "Hecha"
    button.classList.remove("bg-white");
    button.classList.add("bg-teal", "text-white");
    button.textContent = "Hecha";
  }
}
//Funcion para reproducir pedro el mapache
function toggleReproductor() {
  const boton = document.getElementById("reproductor");
  const audio = document.getElementById("audio");
  const foto = document.getElementById("foto");

  const gifSrc = "./img/pedro.gif";
  const imagenEstaticaSrc = "./img/pedro.png";

  if (foto.getAttribute("src") === imagenEstaticaSrc) {
    foto.setAttribute("src", gifSrc);
    audio.play();
    boton.textContent = "Pausar";
  } else {
    foto.setAttribute("src", imagenEstaticaSrc);
    audio.pause();
    audio.currentTime = 0;
    boton.textContent = "Reproducir";
  }

  audio.addEventListener("ended", function () {
    foto.setAttribute("src", imagenEstaticaSrc);
    boton.textContent = "Reproducir";
  });
}
