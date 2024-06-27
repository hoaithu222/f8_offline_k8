document.addEventListener("DOMContentLoaded", function () {
    var box = document.querySelector(".box");
    var loginForm = document.querySelector(".form-login");
    var registerForm = document.querySelector(".register");
    var aEl = document.querySelector(".log-in");
    var overlay = document.querySelector(".over-display");
    var iconClose = document.querySelectorAll(".fa-x");
    var btnLogin = document.querySelectorAll(".btn-log");
    var btnRegister = document.querySelectorAll(".btn-register");
    var eyeIcons = document.querySelectorAll(".fa-eye");
    var eyeSlashIcons = document.querySelectorAll(".fa-eye-slash");

    // Chọn phần tử message để hiển thị thông báo
    var messageLogin = document.querySelector(".form-login .message");
    var messageRegister = document.querySelector(".register .message");

    // Hiển thị form đăng nhập và box khi click vào link đăng nhập
    aEl.addEventListener("click", function () {
        box.classList.add("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        resetRegisterForm(); // Reset form đăng ký khi chuyển sang đăng nhập
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
            resetRegisterForm(); // Reset form đăng ký khi chuyển sang đăng nhập
        });
    });

    btnRegister.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của button
            loginForm.classList.remove("active");
            registerForm.classList.add("active");
            resetLoginForm(); // Reset form đăng nhập khi chuyển sang đăng ký
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
        var loginInputs = loginForm.querySelectorAll('input');
        loginInputs.forEach(function (input) {
            input.style.borderColor = '';
            var errorMessage = input.parentElement.nextElementSibling;
            if (errorMessage) {
                errorMessage.innerHTML = '';
            }
        });
        resetEyeIcons(); // Đặt lại biểu tượng mắt
    }

    // Reset form đăng ký
    function resetRegisterForm() {
        registerForm.reset();
        messageRegister.innerHTML = ""; // Xóa thông báo
        var registerInputs = registerForm.querySelectorAll('input');
        registerInputs.forEach(function (input) {
            input.style.borderColor = '';
            var errorMessage = input.parentElement.nextElementSibling;
            if (errorMessage) {
                errorMessage.innerHTML = '';
            }
        });
        resetEyeIcons(); // Đặt lại biểu tượng mắt
    }

    // Đặt lại biểu tượng mắt và kiểu hiển thị mật khẩu
    function resetEyeIcons() {
        eyeIcons.forEach(function (icon) {
            var input = icon.previousElementSibling;
            if (input.type === "text") {
                input.type = "password";
            }
            icon.classList.add("active");
            icon.nextElementSibling.classList.remove("active");
        });

        eyeSlashIcons.forEach(function (icon) {
            var input = icon.previousElementSibling.previousElementSibling;
            if (input.type === "text") {
                input.type = "password";
            }
            icon.classList.remove("active");
            icon.previousElementSibling.classList.add("active");
        });
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

    // Kiểm tra định dạng email
    function isValidEmail(email) {
        var atSymbol = email.indexOf('@');
        if (atSymbol < 1) return false;

        var dot = email.indexOf('.');
        if (dot <= atSymbol + 2) return false;

        if (dot === email.length - 1) return false;

        return true;
    }

    // Hàm kiểm tra input
    function validateInput(input) {
        var errorMessage = input.parentElement.nextElementSibling; // Chọn phần tử error-message ngay sau input
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            errorMessage.innerHTML = 'Vui lòng nhập thông tin';
        } else if (input.type === 'email' && !isValidEmail(input.value.trim())) {
            input.style.borderColor = 'red';
            errorMessage.innerHTML = 'Vui lòng nhập đúng định dạng email';
        } else {
            input.style.borderColor = '';
            errorMessage.innerHTML = '';
        }
    }

    // Hàm kiểm tra tất cả các input trong form
    function validateForm(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            validateInput(input); // Kiểm tra từng input
        });
    }

    // Áp dụng validateForm khi một input trong form mất focus
    function addBlurEvent(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('blur', function () {
                validateForm(form); // Kiểm tra toàn bộ form khi một input mất focus
            });
        });
    }

    // Áp dụng validateForm khi một input trong form thay đổi
    function addInputEvent(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                validateForm(form); // Kiểm tra toàn bộ form khi một input thay đổi
            });
        });
    }

    // Sự kiện hiển thị/ẩn mật khẩu cho biểu tượng mắt
    eyeIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            var input = icon.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
            icon.classList.toggle("active");
            icon.nextElementSibling.classList.toggle("active");
        });
    });

    // Sự kiện hiển thị/ẩn mật khẩu cho biểu tượng mắt có dấu gạch chéo
    eyeSlashIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            var input = icon.previousElementSibling.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
            icon.classList.toggle("active");
            icon.previousElementSibling.classList.toggle("active");
        });
    });

    // Áp dụng validateForm và sự kiện cho từng form riêng biệt
    addBlurEvent(loginForm);
    addInputEvent(loginForm);
    addBlurEvent(registerForm);
    addInputEvent(registerForm);
});





