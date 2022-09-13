const menu = document.querySelector(".main-header");
const openMenuButton = document.querySelector(".burger");

document.querySelector(".no-js").classList.remove("no-js");
document.getElementById('map').remove();

openMenuButton.addEventListener("click", function () {
  menu.classList.toggle("main-header--opened");
});
