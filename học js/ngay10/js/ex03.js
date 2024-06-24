// JS định nghĩa sẵn các sự kiện tương ứng với các thẻ html
// Mỗi thẻ html sẽ có những sự kiện riêng 
// Việc của lập trình viên sẽ lắng nghe sự kiện 

// var btn = document.querySelector(".btn");
// btn.onclick = function () {
//     console.log("Click Me");
// };
// btn.onmouseover = function () {
//     console.log("Di chuột vào");
// }
// btn.onmouseout = function () {
//     console.log("Di chuột ra");
// }
// btn.onmousemove = function () {
//     console.log("Di chuột trong nút ");
// }

// var nameEl = document.querySelector(".name");
// // nameEl.oninput = function () {
// //     console.log("bạn dang gõ vào input");
// // }
// nameEl.onblur = function () {
//     console.log("Bạn vừa blur")
// }
// nameEl.onchange = function () {
//     console.log("Bạn vừa thay đổi");
// }


// Event Listener

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     console.log("click me");
// });
// var input = document.querySelector("input");
// input.addEventListener("click", function () {
//     console.log("Vui lòng nhập");
// })

// var btn = document.querySelector(".btn");
// var remove_btn = document.querySelector(".btn-remove");
// var count = 0;
// var handleClickBtn = function () {
//     console.log('Count :', ++count);

// }
// btn.addEventListener("click", handleClickBtn);
// remove_btn.addEventListener("click", function () {
//     // xóa sự kiện click và listener handleClickBtn ra khỏi element btn
//     btn.removeEventListener("click", handleClickBtn);
// });

var nameEl = document.querySelector("input");
nameEl.addEventListener("keyup", function (e) {
    var value = this.value;
    console.log(value);
    if (e.key === "Enter") {
        document.body.style.background = "yellow";
    }
    if (e.ctrlKey && e.key === "Enter") {
        document.body.style.background = "red";
    }
});