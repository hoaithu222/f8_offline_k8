
// Event Object 
// Đối tượng chứa toàn bộ thông tin của sự kiện 
// mousedown : bấm chuột

// target đối tượng vừa tác động sự kiện lên đâu nhỏ hơn
// this là thằng gán sự kiện
// btn.addEventListener("mousedown", function (e) {
//     console.log(e.offsetX, e.offsetY);
//     console.log(e.clientX, e.clientY);
//     // console.dir(this);
// });
// document.addEventListener("mousemove", function (e) {
//     // console.log(e.clientX, e.clientY);
//     btn.style.translate = `${e.clientX}px ${e.clientY}px`;

// });
// var clientX = 0, clientY = 0, offsetX = 0, offsetY = 0;
// var mousemoveEl = function (e) {
//     clientX = e.clientX;
//     clientY = e.clientY;
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//     console.log(offsetX, offsetY, clientX, clientY);
//     btn.style.top = `${clientY - 10}px`;
//     btn.style.left = `${clientX - 65}px`;
// }
// btn.addEventListener("mousedown", function () {
//     document.addEventListener("mousemove", mousemoveEl);
// });

// btn.addEventListener("mouseup", function () {
//     document.removeEventListener("mousemove", mousemoveEl);
// });
// var btn = document.querySelector(".btn");
// var offsetX = 0, offsetY = 0;
// var box = document.querySelector(".box");
// var bodyWidth = document.body.clientWidth;
// var currentX = 0;


// btn.addEventListener("mousedown", function (e) {
//     if (e.which === 1) {
//         offsetX = e.offsetX;
//         offsetY = e.offsetY;
//         document.addEventListener("mousemove", handleDrag);
//     }
// });

// document.addEventListener("mouseup", function () {
//     document.removeEventListener("mousemove", handleDrag);
//     if (currentX >= bodyWidth / 2) {
//         Object.assign(btn.style, {
//             top: 0,
//             right: 0,
//             left: "auto",

//         });
//     }
//     else {
//         Object.assign(btn.style, {
//             top: 0,
//             left: 0,
//             right: "auto",
//         });
//     }
// });

// function handleDrag(e) {

//     console.log(bodyWidth);
//     var x = e.clientX - offsetX;
//     var y = e.clientY - offsetY;
//     currentX = x;
//     console.log(x, y);
//     if (x >= bodyWidth / 2) {
//         box.classList.add("active");
//     }
//     else {
//         box.classList.remove("active");
//     }
//     var css = {
//         top: y - offsetY + "px",
//         left: x - offsetX + "px",
//     };
//     Object.assign(btn.style, css);

// }
var btn = document.querySelector(".btn");
var offsetX = 0, offsetY = 0;
var box = document.querySelector(".box");
var bodyWidth = document.body.clientWidth;
var currentX = 0;

function handleDrag(e) {
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;
    currentX = x;

    if (x >= bodyWidth / 2) {
        box.classList.add("active");
    } else {
        box.classList.remove("active");
    }

    btn.style.transform = `translate(${x}px, ${y}px)`;
}

btn.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        document.addEventListener("mousemove", handleDrag);
    }
});

document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);
    if (currentX >= bodyWidth / 2) {
        btn.style.transform = `translate(${bodyWidth - btn.offsetWidth}px, 0)`;
    } else {
        btn.style.transform = `translate(0, 0)`;
    }
});