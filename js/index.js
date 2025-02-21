// funcion para desplegar menu de la foto del usuario
const userMenuButton = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");

// Añadir evento de clic al botón (imagen)
userMenuButton.addEventListener("click", function () {
  // Alternar la visibilidad del menú
  if (userMenu.style.display === "none" || userMenu.style.display === "") {
    userMenu.style.display = "block"; // Mostrar menú
  } else {
    userMenu.style.display = "none"; // Ocultar menú
  }
});

//funcion para desplegar el menu hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.querySelector(".menu-icon-open");
  const closeIcon = document.querySelector(".menu-icon-close");

  // Alternar visibilidad del menú
  menu.classList.toggle("hidden");

  // Alternar iconos
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  // Actualizar aria-expanded
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !isExpanded);
});
