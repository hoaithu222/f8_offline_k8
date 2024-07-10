// Taoj Element 
var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = "Học lập trình không khó";
h1.className = "title";
h1.id = "title";
console.dir(h1);
// h1:node element
// Việc cần làm đưa node element vào cây DOM (xác định vị trí cần đưa vào )  1 node chỉ dùng đc 1 lần 
// chỉ tạo được 1 lần
root.append(h1);
h1.addEventListener("click", function () {
    h1.style.color = "red";
});
var h2 = document.createElement("h2");
h2.innerText = "Học Js rất dễ";

root.prepend(h2);
var a = document.createElement("a");
a.href = "https://fullstack.edu.vn";
a.innerText = "F8";
h1.append(a);
// bài tập
/*
Thêm đoạn html sau vào dưới cùng của root
<ul class = "menu">
<li>Item1</li>
<li>Item2</li>
<li>Item3</li>
<li>Item4</li>
</ul>
<button>Thêm</button>


*/
var ul = document.createElement("ul");
ul.className = "menu";
var btn = document.createElement("button");
btn.className = "btn";
btn.innerText = "Thêm";
var n = 4;



for (var i = 0; i < n; i++) {
    var li = document.createElement("li");
    li.innerText = `Item${i + 1}`;
    ul.append(li);
}
btn.addEventListener("click", function () {
    n += 1;
    var li = document.createElement("li");
    li.innerText = `Item${n}`;
    ul.append(li);
});

root.append(ul);
root.append(btn);


var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerText = "Insert Before ";
var nextH1 = h1.nextElementSibling;


insertBeforeBtn.addEventListener("click", function () {
    var h3 = document.createElement("h3");
    h3.innerText = "Hello";
    root.insertBefore(h3, h1);
    var p = document.createElement("p");
    p.innerText = "Học lập trình";
    if (nextH1) {
        root.insertBefore(p, nextH1);
    }
    else {
        root.append(h4);
    }
});
root.append(insertBeforeBtn);
