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

    var messageLogin = document.querySelector(".form-login .message");
    var messageRegister = document.querySelector(".register .message");

    aEl.addEventListener("click", function () {
        box.classList.add("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        resetRegisterForm();
    });

    overlay.addEventListener("click", function () {
        closeModal();
    });

    iconClose.forEach(function (icon) {
        icon.addEventListener("click", function () {
            closeModal();
        });
    });

    document.addEventListener("keyup", function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    function closeModal() {
        box.classList.remove("active");
        loginForm.classList.remove("active");
        registerForm.classList.remove("active");
        resetLoginForm();
        resetRegisterForm();
    }

    btnLogin.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
            resetRegisterForm();
        });
    });

    btnRegister.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            loginForm.classList.remove("active");
            registerForm.classList.add("active");
            resetLoginForm();
        });
    });

    function resetLoginForm() {
        loginForm.reset();
        messageLogin.innerHTML = "";
        var loginInputs = loginForm.querySelectorAll('input');
        loginInputs.forEach(function (input) {
            input.style.borderColor = '';
            var errorMessage = input.closest('.input').querySelector('.error-message');
            if (errorMessage) {
                errorMessage.innerHTML = '';
            }
        });
        resetEyeIcons();
    }

    function resetRegisterForm() {
        registerForm.reset();
        messageRegister.innerHTML = "";
        var registerInputs = registerForm.querySelectorAll('input');
        registerInputs.forEach(function (input) {
            input.style.borderColor = '';
            var errorMessage = input.closest('.input').querySelector('.error-message');
            if (errorMessage) {
                errorMessage.innerHTML = '';
            }
        });
        resetEyeIcons();
    }

    function resetEyeIcons() {
        eyeIcons.forEach(function (icon) {
            var input = icon.parentElement.querySelector('input');
            if (input.type === "text") {
                input.type = "password";
            }
            icon.classList.add("active");
            var nextIcon = icon.parentElement.querySelector('.fa-eye-slash');
            nextIcon.classList.remove("active");
        });

        eyeSlashIcons.forEach(function (icon) {
            var input = icon.parentElement.querySelector('input');
            if (input.type === "text") {
                input.type = "password";
            }
            icon.classList.remove("active");
            var prevIcon = icon.parentElement.querySelector('.fa-eye');
            prevIcon.classList.add("active");
        });
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        messageLogin.innerHTML = "Đăng nhập thành công";
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        messageRegister.innerHTML = "Đăng ký thành công";
        console.log("Đăng ký thành công");
    });

    function isValidEmail(email) {
        var atSymbol = email.indexOf('@');
        if (atSymbol < 1) return false;

        var dot = email.indexOf('.');
        if (dot <= atSymbol + 2) return false;

        if (dot === email.length - 1) return false;

        return true;
    }

    function validateInput(input) {
        var errorMessage = input.closest('.input').querySelector('.error-message');
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

    function validateForm(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            validateInput(input);
        });
    }

    function addBlurEvent(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('blur', function () {
                validateForm(form);
            });
        });
    }

    function addInputEvent(form) {
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                validateForm(form);
            });
        });
    }

    eyeIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            var input = icon.parentElement.querySelector('input');
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
            icon.classList.toggle("active");
            var nextIcon = icon.parentElement.querySelector('.fa-eye-slash');
            nextIcon.classList.toggle("active");
        });
    });

    eyeSlashIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            var input = icon.parentElement.querySelector('input');
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
            icon.classList.toggle("active");
            var prevIcon = icon.parentElement.querySelector('.fa-eye');
            prevIcon.classList.toggle("active");
        });
    });

    addBlurEvent(loginForm);
    addInputEvent(loginForm);
    addBlurEvent(registerForm);
    addInputEvent(registerForm);
});





