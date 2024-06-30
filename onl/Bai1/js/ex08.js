// Event Object

// 1. preventDefault()

//==> Ngăn các hành động mặc định của trình duyệt với các thẻ html

// 2.stopPropagation() : chống hiện tượng nổi bọt của thẻ html


// var link = document.querySelector(".link");
// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(this.href);
// });
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     console.log("ok");// khi bấm chuột phải thì in 

// });


var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    var css = {
        display: "block",
        top: y + "px",
        left: x + "px",
    };
    Object.assign(menu.style, css);
});
document.addEventListener("click", function () {
    var css = {
        display: "none",
    };
    Object.assign(menu.style, css);
})
menu.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.target.nodeName === "LI") {
        e.target.style.color = "yellow";

    }
});