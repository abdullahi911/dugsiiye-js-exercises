let color = document.querySelector(".colors");
let colorplace = document.querySelector(".colorplace");
let colorH = document.querySelector(".history");
let resetBtn = document.querySelector(".reset");

color.addEventListener('input', function (event) {
  event.preventDefault();

  let chosenColor = color.value;

  // Set background color correctly
  colorplace.style.backgroundColor = chosenColor;

  addHistory(chosenColor);
});

function addHistory(chosenColor) {
  let li = document.createElement("li");
  li.textContent = chosenColor;

  // Set background correctly
  li.style.color = chosenColor;

  colorH.appendChild(li);
}

resetBtn.addEventListener("click", function () {
  let lastItem = colorH.lastElementChild;

  if (lastItem) {
    colorH.removeChild(lastItem);
  }

  if (!colorH.lastElementChild) {
    colorplace.style.backgroundColor = "";
  }
});
