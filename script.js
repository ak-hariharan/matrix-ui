const matrix = document.querySelector(".matrix");
const startValue = document.querySelector(".start-value");
const endValue = document.querySelector(".end-value");
var selectedElement = document.querySelector(".selected-element");


function renderMatrix() {
  matrix.innerHTML = "";
    for (let i = startValue.value; i < endValue.value; i++) {
    matrix.insertAdjacentHTML("beforeend", `<span class="matrix-element">${i * 5}</span>`);
  }
}

startValue.addEventListener("input", renderMatrix);
endValue.addEventListener("input", renderMatrix);

renderMatrix();

matrix.addEventListener("click", handleClickEvent);
var previousElement = null;

function handleClickEvent(event) {
  let targetElement = event.target;
  if (previousElement) {
    previousElement.style.backgroundColor = "";
  }
  selectedElement.textContent = `Selected value is ${targetElement.textContent}`;
  targetElement.style.backgroundColor = "#1cc6ac";
  previousElement = targetElement;
  
}

