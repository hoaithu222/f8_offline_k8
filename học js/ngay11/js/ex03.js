// var boxEl = document.querySelector(".box");
// console.log(boxEl.style);
// var css = {
//     color: "red",
//     textAlign: "center",
//     textTransform: "uppercase",
//     fontStyle: "italic",
// }
// // boxEl.style.color = "red";
// // boxEl.style.textAlign = "center";
// // boxEl.style.textTransform = "uppercase";
// // boxEl.style.fontStyle = "italic";
// css.color = null;
// Object.assign(boxEl.style, css);

// js chỉ can thiệt được vào html
// thêm thuộc tính background-image cho object trên
// boxEl.style.backgroundImage = `url("./image/")`

var boxEl = document.querySelector(".box");
var fadeIn = document.querySelector(".fade-in");
var fadeOut = document.querySelector(".fade-out");
boxEl.style.transition = `opacity 0.4s liner`;
fadeOut.addEventListener("click", function () {
    boxEl.style.opacity = 0;
    setTimeout(function () {
        boxEl.style.display = "none";

    }, 400);

});

fadeIn.addEventListener("click", function () {
    boxEl.style.display = null;
    setTimeout(function () {
        boxEl.style.opacity = 1;
    }, 200);
});
