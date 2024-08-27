const matrix = document.querySelector(".matrix");

for (let i = 1; i < 10; i++) {
  let newSpan = document.createElement("span");
  newSpan.innerHTML = i * 5;
  newSpan.classList.add("matrix-element"); 
  matrix.appendChild(newSpan);
}

const selectedElement = document.querySelector(".selected-element");

document.querySelectorAll(".matrix-element").forEach((span) => {
  span.addEventListener("click", () => {
    document
      .querySelectorAll(".matrix-element")
      .forEach((el) => (el.style.backgroundColor = ""));
    //el is a parameter representing the current element in the iteration
    //(el) => (el.style.backgroundColor = "") is an arrow function
    span.style.backgroundColor = "#1cc6ac";
    const selectedValue = span.textContent;
    selectedElement.innerHTML = `Selected value is ${selectedValue}`;
  });
});
