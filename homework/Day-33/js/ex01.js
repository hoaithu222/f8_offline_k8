var list = document.getElementById("list");
var draggingElement = null;
var initialMouseY = 0;

document.querySelectorAll(".item").forEach(function (item) {
  item.addEventListener("mousedown", function (e) {
    draggingElement = item;
    initialMouseY = e.clientY;
    item.classList.add("dragging");
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});

function onMouseMove(e) {
  var afterElement = getDragAfterElement(list, e.clientY);
  if (afterElement == null) {
    list.appendChild(draggingElement);
  } else {
    list.insertBefore(draggingElement, afterElement);
  }

  draggingElement.style.top = e.clientY - initialMouseY + "px";
}

function onMouseUp() {
  if (draggingElement) {
    draggingElement.classList.remove("dragging");
    draggingElement.style.top = "";
    draggingElement = null;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    updateTitlesAndItems();
  }
}

function getDragAfterElement(container, mouseY) {
  var draggableElements = Array.from(
    container.querySelectorAll(".item")
  ).filter(function (item) {
    return !item.classList.contains("dragging");
  });
  var closest = null;
  var closestOffset = -Infinity;

  draggableElements.forEach(function (child) {
    var box = child.getBoundingClientRect();
    var offset = mouseY - box.top - box.height / 2;
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closest = child;
    }
  });

  return closest;
}

function updateTitlesAndItems() {
  var items = Array.from(list.querySelectorAll(".item"));
  var titles = items.filter(function (item) {
    return item.classList.contains("title");
  });
  var subItems = items.filter(function (item) {
    return !item.classList.contains("title");
  });

  titles.forEach(function (title, index) {
    title.firstChild.nodeValue = "Module : " + (index + 1) + ":";
  });

  subItems.forEach(function (subItem, index) {
    subItem.firstChild.nodeValue = "Bài : " + (index + 1) + ":";
  });
}

updateTitlesAndItems();
