// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");
let itemList = [];

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }
}

// Menu Option Functions
function addItem() {
  console.log("Add Item");
  let item = prompt("Enter Item:");
  itemList.push(item);
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}

function removeLast() {
  console.log("Remove Last");
  itemList.pop();
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}

function insert() {
  console.log("Insert");
  let pos = prompt("Enter Position:");
  let item = prompt("Enter Item:");
  itemList.splice(pos - 1, 0, item);
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}

function removePos() {
  console.log("Remove at Position");
  let pos = prompt("Enter Position:");
  itemList.splice(pos - 1, 1);
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}

function move() {
  console.log("Move");
  let pos1 = prompt("Move Item From:");
  let pos2 = prompt("Move Item To:");
  let item = itemList[pos1 - 1];
  itemList.splice(pos1 - 1, 1);
  itemList.splice(pos2 - 1, 0, item);
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}

function edit() {
  console.log("Edit");
  let pos = prompt("Enter Position:");
  let item = prompt("Replace With:");
  itemList.splice(pos - 1, 1, item);
  outputEl.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${itemList[i]}</div>`;
  }
}
