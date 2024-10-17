
const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
// const amount = input.value;
let sizes = 30;

create.addEventListener("click", addElement);

destroy.addEventListener("click", destroyBoxes);
  
function addElement() {

  if (input.value < 1 || input.value > 100) {
    console.log("error");
    return    
  } else {
    createBoxes(input.value)
    // input.value = "";
  } 
}

function createBoxes(amount) {
    boxes.innerHTML = "";
      sizes = 30;

  let boxesMarkup = "";

  for (let i = 0; i < amount; i++) {
    // const boxElement = document.createElement("div");
    // boxElement.style.width = `${sizes}px`;
    // boxElement.style.height = `${sizes}px`;
    // boxElement.style.backgroundColor = getRandomHexColor();

    // boxes.append(boxElement);

    const boxElement = `<div style="width: ${sizes}px; height: ${sizes}px; background-color: ${getRandomHexColor()}"></div>`;

    boxesMarkup += boxElement;
    sizes += 10;
  }

  boxes.innerHTML = boxesMarkup;
}


function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
  sizes = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
