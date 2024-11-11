function createFlexboxGrid(size) {
  const container = document.createElement("div");
  container.classList.add("grid-container");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "600px";
  container.style.margin = "auto";

  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.style.width = `${squareSize}px`;
    item.style.height = `${squareSize}px`;
    item.style.border = "1px solid coral";
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getRandomColor();
    });
    container.appendChild(item);
  }
  document.body.appendChild(container);
}
createFlexboxGrid(16);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let gridSize = prompt(
    "How many squares do you want? Number must be less than 100"
  );
  let chosenSize = parseInt(gridSize);
  if (chosenSize > 100 || chosenSize < 1 || !Number.isInteger(chosenSize)) {
    alert("Please choose a number between 1 and 100");
  } else {
    const oldContainer = document.querySelector(".grid-container");
    oldContainer.remove();
    createFlexboxGrid(chosenSize, chosenSize);
  }
});
