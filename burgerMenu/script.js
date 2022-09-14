// * nodes
const $menuBtn = document.querySelector(".burger");
const $menu = document.querySelector(".menu");

function activateMenu() {
  $menu.classList.toggle("activeMenu");
}

// * event listener
$menuBtn.addEventListener("click", (e) => {
  activateMenu();
})