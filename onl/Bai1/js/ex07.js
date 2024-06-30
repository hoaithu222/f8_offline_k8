// var btn = document.querySelector(".btn");
// var input = document.querySelector(".input");
// btn.addEventListener("click", function (e) {
//     // console.log(this);
//     // console.log(e);


//     console.log(`clientX = ${e.clientX}`);
//     console.log(`clientY= ${e.clientY}`);
//     console.log(`offsetX = ${e.offsetX}`);
//     console.log(`offsetY = ${e.offsetY}`);
// });




// input.addEventListener('input', function (e) {
//     // blur để kiểm tra sự kiện đã bấm vào input
//     console.log(e);
//     // var key = e.data; đây là trường hợp tên sự kiện là input
//     // var key = e.key; // trong trường hợp dành cho tên sự kiện là keyup là nhả phím
//     var value = e.target.value;
//     console.log(`key = ${key}`, `value = ${value}`);
//     console.log(e);
// });

// input.addEventListener('change', function (e) {
//     // change là sự thay đổi soi sánh chỗ input có sự thay đổi giá trị cũ
//     // console.log(e);
//     // var key = e.data;
//     // var key = e.key;
//     // var value = e.target.value;
//     // console.log(`key = ${key}`, `value = ${value}`);
//     console.log(e);
// });
// input.addEventListener('blur', function (e) {
//     // blur để kiểm tra sự kiện đã bấm vào input
//     // console.log(e);
//     // var key = e.data;
//     // var key = e.key;
//     // var value = e.target.value;
//     // console.log(`key = ${key}`, `value = ${value}`);
//     console.log(e);
// });

// // lắng nghe từ tấ cả phím


// // document.body.addEventListener("keyup", function (e) {
// //     console.log(e);
// // });

// xây dựng chức nắng kéo thả
// mousedown, mouseup, mousemove

/*
 html 
 <button id="dragButton">Đăng kí khóa học</button>
const dragButton = document.getElementById('dragButton');

let isDragging = false;
let offsetX, offsetY;

// Khi nhấn chuột xuống
dragButton.addEventListener('mousedown', function (event) {
    isDragging = true;
    // Tính khoảng cách từ vị trí nhấn chuột đến góc trên bên trái của nút
    offsetX = event.clientX - dragButton.getBoundingClientRect().left;
    offsetY = event.clientY - dragButton.getBoundingClientRect().top;
    // Thêm lớp để thay đổi kiểu trong khi kéo (nếu muốn)
    dragButton.classList.add('dragging');
});

// Khi nhả chuột
document.addEventListener('mouseup', function (event) {
    isDragging = false;
    dragButton.classList.remove('dragging');
});

// Khi di chuyển chuột
document.addEventListener('mousemove', function (event) {
    if (isDragging) {
        // Cập nhật vị trí của nút
        dragButton.style.left = `${event.clientX - offsetX}px`;
        dragButton.style.top = `${event.clientY - offsetY}px`;
    }
});

*/

/*
B1. lắng nghe sự kiện giữ và khéo chuột 

*/

var btn = document.querySelector(".btn");
var initialX = 0;
var initialY = 0;
btn.addEventListener("mousedown", function (e) {
    // add event kéo (mousemove)
    document.addEventListener("mousemove", handleDrag);
    initialX = e.offsetX;
    initialY = e.offsetY;
});
document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);
});
var handleDrag = function (e) {
    var clientX = e.clientX;
    var clientY = e.clientY;
    btn.style.translate = `${clientX - initialX - 10}px ${clientY - initialY - 10}px`;
}