const menu = document.querySelector(".main-header");
const openMenuButton = document.querySelector(".burger");

openMenuButton.addEventListener("click", function () {
  menu.classList.toggle("main-header--opened");
});
console.log('test');
