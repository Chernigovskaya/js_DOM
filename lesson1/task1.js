const container = document.querySelector(".container");

const addElement = document.querySelector("#addButton");

const cloneElement = document.querySelector("#cloneButton");

const deleteElement = document.querySelector("#removeButton");

addElement.addEventListener("click", function (event) {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.textContent = container.children.length + 1;
  container.append(newBox);
});

deleteElement.addEventListener("click", function (event) {
  const lastBox = container.lastChild;
  container.removeChild(lastBox);
});

cloneElement.addEventListener("click", function (event) {
  const lastBox = container.lastChild;
  const clone = lastBox.cloneNode(true);
  container.append(clone);
});
