
var root = document.querySelector("#root");
// var h1 = document.createElement("h1");
// h1.innerText = `Count : `;
// var countNumberNode = document.createTextNode(0);
// h1.append(countNumberNode);
// console.dir(countNumberNode);
// // var span = document.createElement("span");
// // span.innerText = 0;
// // h1.append(span);
// // countNumberNode không nằm trong bất cứ 
// var plusBtn = document.createElement("button");
// plusBtn.innerText = '+';
// plusBtn.addEventListener("click", function () {
//     // span.innerText++;
//     countNumberNode.data++;
//     if (countNumberNode.data >= 10) {
//         countNumberNode.remove();
//     }
// });


// root.append(h1);
// root.append(plusBtn);

// // Comment Node

// var comment = document.createComment("Đây là comment demo");
// document.body.append(comment);

// var commentLits = Array.form(document.body.childNodes).find(function (node) {
//     return node.nodeName === "#comment" && node.nodeValue === "#comment";

// });
// console.log(commentLits);
// setTimeout(() => {
//     var commentLiveSever = Array.from(document.body.childNodes).find(function (node) {
//         return node.nodeName === "#comment" && node.nodeValue.includes("live-server");
//     });
//     if (commentLiveSever) {
//         commentLiveSever.data = "Code injected by F8";
//     }
// });


// cloneNodes() ---> sao chép 1 node --> xây dựng tính năng của slides

// var h1 = document.createElement("h1");
// h1.innerText = "Hoàng An F8";
// root.append(h1);
// for (var i = 0; i < 10; i++) {
//     var h1 = h1.cloneNode(true);
//     root.append(h1);
// }


var ul = document.createElement("ul");
var li = document.createElement("li");

var input = document.createElement("input");
input.placeholder = `Name......`;
input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        var name = e.target.value;
        var todoItem = li.cloneNode(true);
        // todoItem.innerText = `${name}`;
        todoItem.innerHTMl = `${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}`;
        ul.append(todoItem);
        e.target.value = "";
    }

});
root.append(input);
root.append(ul);

