// Initialize gadget
function init() {
  var oBackground = document.getElementById("imgBackground");
  oBackground.src = "./images/background.png";
  oBackground.style.height = "330px";
  oBackground.style.width = "330px";
}

var newBtn = document.getElementById("addBtn");

newBtn.onclick = function() {
  var inputText = document.getElementById("inputText");
  var itemText = inputText.value;

  if (!itemText || itemText === "" || itemText === "") return false;

  addNewItem(document.getElementById("todolist"), itemText);
};

function addNewItem(list, itemText) {
  var listItem = document.createElement("li");

  listItem.innerText = itemText;
  list.appendChild(listItem);
}
