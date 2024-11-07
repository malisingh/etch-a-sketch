function createFlexboxGrid(rows, cols) {
  const container = document.createElement("div");
  container.classList.add("grid-container");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  for (let i = 0; i < rows * cols; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    container.appendChild(item);
  }
  document.body.appendChild(container);
}
createFlexboxGrid(4, 4);
