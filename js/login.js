// Obtener elementos
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
