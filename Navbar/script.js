function toggleHamburger() {
  document.querySelector("#button").classList.toggle("open");
  document.querySelector(".navbarListDiv").classList.toggle("show");
}

function toggleList() {
  document.querySelector("#arrowDown").classList.toggle("spin180");
  document.querySelector(".dropdownDiv").classList.toggle("toggleShow");
}
// document.querySelector(".dropdownContent").classList.toggle("show");
function toggleList2() {
  document.querySelector("#arrowDown2").classList.toggle("spin180");
  document.querySelector(".dropdownContent2").classList.toggle("toggleShow");
}
