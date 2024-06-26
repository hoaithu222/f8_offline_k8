document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("form-login");
    var registerForm = document.getElementById("form-register");
    var loginTabLogin = document.getElementById("login-tab-login");
    var registerTabLogin = document.getElementById("register-tab-login");
    var loginTabRegister = document.getElementById("login-tab-register");
    var registerTabRegister = document.getElementById("register-tab-register");
    var logInBtn = document.getElementById("log-in-btn");
    var closeLogin = document.getElementById("close-login");
    var closeRegister = document.getElementById("close-register");
    var box = document.getElementById("box");

    // Function to switch forms
    function switchForm(isLogin) {
        if (isLogin) {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            loginTabLogin.classList.add("active");
            registerTabLogin.classList.remove("active");
            loginTabRegister.classList.add("active");
            registerTabRegister.classList.remove("active");
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            loginTabLogin.classList.remove("active");
            registerTabLogin.classList.add("active");
            loginTabRegister.classList.remove("active");
            registerTabRegister.classList.add("active");
        }
        loginForm.reset();
        registerForm.reset();
    }

    // Switch forms on tab click
    loginTabLogin.addEventListener("click", function (e) {
        e.preventDefault();
        switchForm(true);
    });

    registerTabLogin.addEventListener("click", function (e) {
        e.preventDefault();
        switchForm(false);
    });

    loginTabRegister.addEventListener("click", function (e) {
        e.preventDefault();
        switchForm(true);
    });

    registerTabRegister.addEventListener("click", function (e) {
        e.preventDefault();
        switchForm(false);
    });

    logInBtn.addEventListener("click", function (e) {
        e.preventDefault();
        box.style.display = "block";
        switchForm(true);
    });

    closeLogin.addEventListener("click", function () {
        box.style.display = "none";
    });

    closeRegister.addEventListener("click", function () {
        box.style.display = "none";
    });

    box.addEventListener("click", function (e) {
        if (e.target === box) {
            box.style.display = "none";
        }
    });

    function togglePassword(inputId, toggleIconId) {
        var input = document.querySelector(inputId);
        var toggleIcon = document.querySelector(toggleIconId);

        toggleIcon.addEventListener("click", function () {
            if (input.type === "password") {
                input.type = "text";
                toggleIcon.classList.remove("fa-eye");
                toggleIcon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                toggleIcon.classList.remove("fa-eye-slash");
                toggleIcon.classList.add("fa-eye");
            }
        });
    }

    togglePassword("#form-login input[name='password']", "#toggle-password-login");
    togglePassword("#form-register input[name='password']", "#toggle-password-register");

    function validateInput(input) {
        const value = input.value.trim();
        const errorMessage = input.parentElement.querySelector(".error-message");

        if (input.type === "email" && !isValidEmail(value)) {
            errorMessage.innerHTML = "Email không hợp lệ";
            errorMessage.style.color = "red";
            errorMessage.style.display = "block";
            input.style.backgroundColor = "#fdd";
        } else if (input.type === "password" && !isValidPassword(value)) {
            errorMessage.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự";
            errorMessage.style.color = "red";
            errorMessage.style.display = "block";
            input.style.backgroundColor = "#fdd";
        } else if (input.type === "text" && !isValidName(value)) {
            errorMessage.innerHTML = "Họ và tên không được chứa ký tự đặc biệt hoặc số";
            errorMessage.style.color = "red";
            errorMessage.style.display = "block";
            input.style.backgroundColor = "#fdd";
        } else {
            hideErrorMessage(input);
        }
    }

    const allInputs = document.querySelectorAll("#form-login input, #form-register input");
    allInputs.forEach(function (input) {
        input.addEventListener("blur", function () {
            validateInput(input);
        });
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm(loginForm);
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm(registerForm);
    });

    function validateForm(form) {
        const inputs = form.querySelectorAll("input");
        inputs.forEach(function (input) {
            validateInput(input);
        });
    }

    function isValidEmail(email) {
        return email.includes("@");
    }

    function isValidPassword(password) {
        return password.length >= 6;
    }

    function isValidName(name) {
        return /^[a-zA-Z\s]*$/.test(name);
    }

    function hideErrorMessage(input) {
        const errorMessage = input.parentElement.querySelector(".error-message");
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";
        input.style.backgroundColor = "transparent";
    }
});
