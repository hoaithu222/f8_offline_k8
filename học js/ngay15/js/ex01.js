// DOM Nodes

// HTML ==> DOM Tree => Tạo Nodes

// từ JS ===> tạo nodes ==> Update DOM Tree 

// Tạo Element Node
var root = document.querySelector("#root");
var h1 = document.createElement("h1");
console.log(h1);
h1.classList.add("title");
h1.innerText = "Học JS không khó";
var btn = document.createElement("button");
btn.innerText = "click";
btn.addEventListener("click", function () {
    h1.innerText = 'học lập trình để làm gì';
    var h2 = document.createElement("h2");
    h2.innerText = `Hello: ${Math.random()}`;
    root.append(h2);
});

// Thêm node vào cây DOM
// append sẽ đẩy xuống dưới cùng 
root.append(h1);
//prepend() đẩy lên trên 
// 1 node đã cập nhập vào cây DOM thì không sử dụng được nữa 
// --> chỉ xuất hiên ở 1 vị trí 
root.prepend(btn);


/*
Bài tâp
thêm html bằng js
khi click add thì tự động thêm Item mới
<ul class = "menu"> 
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
</ul>
<button>Add</button>
*/
var ul = document.createElement("ul");
ul.className = "menu";
var n = 4;
for (var i = 0; i < n; i++) {
    var li = document.createElement("li");
    li.innerText = `Item${i + 1}`;
    ul.append(li);
}
var btn = document.createElement("button");
btn.className = "Add";
btn.innerText = "Add";
btn.addEventListener("click", function () {
    // n++;
    // var li = document.createElement("li");
    // li.innerText = `Item${n}`;
    // ul.append(li);
    var h2 = document.createElement("h2");
    h2.innerText = "hello";
    // root.insertBefore(h2, ul);
    // var nextUlEl = ul.nextElementSibling;
    // if (!nextUlEl) {
    //     return;
    // }
    // root.insertBefore(h2, nextUlEl);
    // replaceChild thay thế 

    // root.replaceChild(h2, h1);
    // root.append(h1);
    root.removeChild(h1);
});

root.append(ul);
root.append(btn);
// append chỉ nhận node và text
// appendChild chỉ nhận 1 node
root.append(`<h1>Học lập trình không khó</h1>`);


