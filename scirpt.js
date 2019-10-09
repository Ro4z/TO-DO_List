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

window.addEventListener(
  "keydown",
  function(event) {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key == "Enter") {
      var itemText = inputText.value;
      if (!itemText || itemText === "" || itemText === " ") return false;
      addNewItem(document.getElementById("todolist"), itemText);
    }
  },
  true
);
// inputText.onkeyup = function(keyPress) {
//   if (keyPress.which == 13) {
//     var itemText = inputText.value;
//     if (!itemText || itemText === "" || itemText === " ") return false;

//     addNewItem(document.getElementById("todolist"), itemText);
//     inputText.focus();
//     inputText.select();
//   }
// };

//done list <-> todo list
var donelist = document.getElementById("donelist");
function moveItem() {
  //this === span
  var listItemId = this.id.replace("li_", "");
  var listItem = document.getElementById("li_" + listItemId);
  var listItemParentId = listItem.parentElement;

  console.log(listItemParentId);
  if (listItemParentId == donelist) {
    todolist.appendChild(listItem);
  } else {
    donelist.appendChild(listItem);
  }
}

//list 이름 변경
function renameItem() {
  //this == pencilIcon
  var newText = prompt("what should this item be renamed to?");
  if (!newText || newText === "" || newText === " ") return false;

  var spanId = this.id.replace("pencilicon", "");
  var span = document.getElementById("Item" + spanId);

  span.innerText = newText;
}

//list 삭제
function deleteItem() {
  //this === minusIcon
  var listItemId = this.id.replace("minusIcon_", "");
  document.getElementById("li_" + listItemId).style.display = "none";
}

//체크박스 만들기

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
  var date = new Date();
  var id =
    "" +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds() +
    date.getMilliseconds();

  var listItem = document.createElement("li");
  listItem.id = "li_" + id;
  listItem.ondblclick = moveItem;

  //수정하는 버튼
  var pencilIcon = document.createElement("i");
  pencilIcon.className = "fa fa-pencil";
  pencilIcon.onclick = renameItem;
  listItem.appendChild(pencilIcon);

  //삭제하는 버튼
  var minusIcon = document.createElement("i");
  minusIcon.className = "fa fa-minus";
  minusIcon.id = "minusIcon_" + id;
  minusIcon.onclick = deleteItem;
  listItem.appendChild(minusIcon);

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  list.appendChild(listItem);
}
