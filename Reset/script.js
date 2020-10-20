function toggleNavbar() {
  document.querySelector(".dropdownList").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropBtn")) {
    if (document.querySelector(".dropdownList").classList.contains("show")) {
      document.querySelector(".dropdownList").classList.remove("show");
    }
  }
};

function toggleNavbar2() {
  document.querySelector(".dropdownList2").classList.toggle("show");
}

// window.onclick = function (event) {
//   if (!event.target.matches(".dropBtn2")) {
//     if (document.querySelector(".dropdownList2").classList.contains("show")) {
//       document.querySelector(".dropdownList2").classList.remove("show");
//     }
//   }
// };

function toggleFacebook() {
  document.querySelector(".facebookDropdown").classList.toggle("show");
}
