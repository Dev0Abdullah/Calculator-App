window.onload = function () {
  let local = localStorage.getItem("dark");
  if (local) {
    localStorage.setItem("dark", document.body.classList.toggle("themeTow"));
  } else [localStorage.removeItem("dark")];
};

const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculatDisplay() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
// Theme
let label = document.querySelector(".button");
label.addEventListener("click", function () {
  document.body.classList.toggle("themeTow");
});
