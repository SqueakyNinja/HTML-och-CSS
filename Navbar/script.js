function toggleHamburger() {
  document.querySelector("#button").classList.toggle("open");
  document.querySelector(".navbarList").classList.toggle("show");
}

function toggleList() {
  document.querySelector("#arrowDown").classList.toggle("spin180");
  document.querySelector(".dropdownContent").classList.toggle("toggleShow");
}
// document.querySelector(".dropdownContent").classList.toggle("show");
