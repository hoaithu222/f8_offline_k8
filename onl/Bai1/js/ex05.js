
var btn = document.querySelector(".btn");
var box = document.querySelector(".box");
var closeBtn = document.querySelector(".fa-xmark");
var overlay = document.querySelector(".over-display");

// Mở modal khi nhấn nút "Open Modal"
btn.addEventListener("click", function () {
    box.classList.add("active");
});

// Đóng modal khi nhấn biểu tượng đóng
closeBtn.addEventListener("click", function () {
    box.classList.remove("active");
});

// Đóng modal khi nhấn bên ngoài nội dung modal
overlay.addEventListener("click", function () {
    box.classList.remove("active");
});

document.addEventListener("keyup", function (e) {
    console.log("nhả phím");
    if (e.key === "Escape") {
        box.classList.remove("active");
    }
});
document.addEventListener("keyup", function (e) {
    console.log("nhả phím");
    if (e.key === "Enter") {
        box.classList.add("active");
    }
});


var form = document.querySelector("form");
form.addEventListener("submit", function () {
    // ngăn hành động mặc định của trình duyệt với thẻ html 
    console.log("submit");
    e.preventDefault();
    // để lấy ra được dữ liệu form
    var nameEl = document.querySelector(".name");
    nameEl.value = "";
});