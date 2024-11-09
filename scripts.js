function createFlexboxGrid(rows, columns) {
  const container = document.createElement("div");
  container.classList.add("grid-container");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  for (let i = 0; i < rows * columns; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getRandomColor();
    });
    container.appendChild(item);
  }
  document.body.appendChild(container);
}
createFlexboxGrid(16, 16);

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

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   let gridSize = prompt(
//     "How many squares do you want? Number must be less than 100"
//   );
//   let chosenSize = parseInt(gridSize);
//   if (chosenSize > 100 || chosenSize < 1 || !Number.isInteger(chosenSize)) {
//     alert("Please choose a number between 1 and 100");
//   } else {
//     const oldContainer = document.querySelector(".grid-container");
//     oldContainer.remove();
//     const newContainer = document.querySelector("#canvas");
//     for (let i = 0; i < chosenSize * chosenSize; i++) {
//       const newItem = document.createElement("div");
//       newItem.classList.add("grid-item");
//       newItem.addEventListener("mouseover", () => {
//         newItem.style.backgroundColor = "lightcoral";
//       });
//       newContainer.appendChild(newItem);
//     }
//   }
// });
