const dropdownList = document.querySelector(".dropdownList");
const toggle = document.querySelector(".toggle");

function toggleNavbar() {
  dropdownList.classList.toggle("show");
  toggle.classList.toggle("open");
  console.log("hej");
}

// window.onclick = function (event) {
//   if (!event.target.matches(".dropBtn")) {
//     if (document.querySelector(".dropdownList").classList.contains("show")) {
//       document.querySelector(".dropdownList").classList.remove("show");
//     }
//   }
// };
