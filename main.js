// Initialize gadget
function init() {
  var oBackground = document.getElementById("imgBackground");
  oBackground.src = "./images/background.png";
  oBackground.style.height = "330px";
  oBackground.style.width = "330px";
}

//enter key 입력으로 추가하는 방식 - gadget에서 안됨
var inputText = document.getElementById("inputText");
inputText.focus();

inputText.onkeyup = function(keyPress) {
  if (keyPress.which == 13) {
    var itemText = inputText.value;
    if (!itemText || itemText === "" || itemText === " ") return false;

    addNewItem(document.getElementById("todolist"), itemText);
    inputText.focus();
    inputText.select();
  }
};

//체크박스 만들기

var totalItems = 0;
function updateItemStatus() {
  var chId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + chId);

  if (true) {
    itemText.className = "checked";
  } else {
    itemText.className = "";
  }
}

//버튼을 눌러서 추가하는 방식
var newBtn = document.getElementById("addBtn");

newBtn.onclick = function() {
  var inputText = document.getElementById("inputText");
  var itemText = inputText.value;
  if (!itemText || itemText === "" || itemText === "") return false;

  addNewItem(document.getElementById("todolist"), itemText);
};

//add new item
function addNewItem(list, itemText) {
  totalItems++;

  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + totalItems;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + totalItems;
  span.innerText = itemText;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  list.appendChild(listItem);
}
