// Chọn phần tử a với lớp log-in
var aEl = document.querySelector(".log-in");

// Chọn phần tử div với lớp box
var box = document.querySelector(".box");

// Chọn phần tử div với lớp over-display (lớp phủ mờ)
var overlay = document.querySelector(".over-display");

// Chọn tất cả các biểu tượng đóng với lớp fa-x
var iconClose = document.querySelectorAll(".fa-x");

// Chọn form đăng nhập
var loginForm = document.querySelector(".form-login");

// Chọn form đăng ký
var registerForm = document.querySelector(".register");

// Chọn nút đăng nhập
var btnLogin = document.querySelectorAll(".btn-log");

// Chọn nút đăng ký
var btnRegister = document.querySelectorAll(".btn-register");

// Chọn phần tử message để hiển thị thông báo
var messageLogin = document.querySelector(".form-login .message");
var messageRegister = document.querySelector(".register .message");

// Hiển thị form đăng nhập và box khi click vào link đăng nhập
aEl.addEventListener("click", function () {
    box.classList.add("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

// Ẩn box khi click vào lớp phủ mờ
overlay.addEventListener("click", function () {
    box.classList.remove("active");
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");
});

// Đóng modal khi click vào biểu tượng đóng
iconClose.forEach(function (icon) {
    icon.addEventListener("click", function () {
        box.classList.remove("active");
        loginForm.classList.remove("active");
        registerForm.classList.remove("active");
    });
});

// Chuyển đổi giữa form đăng nhập và đăng ký
btnLogin.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của button
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
    });
});

btnRegister.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của button
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    });
});

// Đóng modal khi nhấn phím Escape
document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        box.classList.remove("active");
        loginForm.classList.remove("active");
        registerForm.classList.remove("active");
    }
});

// Reset form đăng nhập
function resetLoginForm() {
    loginForm.reset();
    messageLogin.innerHTML = ""; // Xóa thông báo
}

// Reset form đăng ký
function resetRegisterForm() {
    registerForm.reset();
    messageRegister.innerHTML = ""; // Xóa thông báo
}

// Ngăn không cho form submit tải lại trang
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Xử lý form đăng nhập ở đây
    messageLogin.innerHTML = "Đăng nhập thành công";
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Xử lý form đăng ký ở đây
    messageRegister.innerHTML = "Đăng ký thành công";
    console.log("Đăng ký thành công");
});
// Đặt lại form khi chuyển từ đăng nhập sang đăng ký
btnRegister.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        resetLoginForm(); // Đặt lại form đăng nhập
        registerForm.classList.add("active");
    });
});

// Đặt lại form khi chuyển từ đăng ký sang đăng nhập
btnLogin.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        resetRegisterForm(); // Đặt lại form đăng ký
        loginForm.classList.add("active");
    });
});


