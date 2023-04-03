const changeColorButton = document.getElementById("changeColorButton");
const h2Element = document.getElementsByTagName("h2")[0];

function toggleRedClass() {
  h2Element.classList.toggle("red");
}

changeColorButton.addEventListener("click", toggleRedClass);
