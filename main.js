// Initialize gadget
function init() {
  var oBackground = document.getElementById("imgBackground");
  oBackground.src = "./images/background.png";
  oBackground.style.height = "330px";
  oBackground.style.width = "330px";
}

//enter key 입력으로 추가하는 방식 - 미완성
// var inputText = document.getElementById("inputText");
// inputText.focus();

// inputText.onkeyup = function(keyPress) {
//   if (keyPress.which == 13) {
//     var itemText = inputText.value;
//     if (!itemText || itemText === "" || itemText === " ") return false;

//     addNewItem(document.getElementById("todolist"), itemText);
//     inputText.focus();
//     inputText.select();
//   }
// };

//버튼을 눌러서 추가하는 방식
//asdf
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
