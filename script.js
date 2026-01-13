const grid = document.getElementById("grid");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  grid.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    grid.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter number of squares per side (max 100):");

  if (newSize === null) return; // cancelado

  newSize = Number(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createGrid(newSize);
});

// Crear una cuadrícula inicial de 16x16
createGrid(16);