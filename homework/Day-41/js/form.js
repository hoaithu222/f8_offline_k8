import { escapeHtml, redirectIfLoggedIn } from "./component.js";

const serverApi = "https://api-auth-two.vercel.app";

// Hàm chuyển đổi giữa form đăng nhập và đăng ký
const buttons = document.querySelectorAll(".menu button");
const loginForm = document.querySelector(".form-login");
const registerForm = document.querySelector(".form-register");
function renderPage(page) {
  let path = "";

  if (page === "login") {
    path = "#/sign-in";
    switchForm("login", false);
  } else if (page === "register") {
    path = "#/sign-up";
    switchForm("register", false);
  }

  if (path) {
    window.location.hash = path;
  }
}

const switchForm = (formToShow, shouldChangeURL = true) => {
  if (formToShow === "login") {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    buttons[0].classList.add("active");
    buttons[1].classList.remove("active");
    if (shouldChangeURL) renderPage("login");
  } else if (formToShow === "register") {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    buttons[0].classList.remove("active");
    buttons[1].classList.add("active");
    if (shouldChangeURL) renderPage("register");
  }
};

buttons[0].addEventListener("click", () => switchForm("login"));
buttons[1].addEventListener("click", () => switchForm("register"));
switchForm("login");

// Hàm điều hướng về trang chủ
const btnHome = document.querySelector(".btn-home button");
btnHome.addEventListener("click", (e) => {
  e.preventDefault();
  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/index.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/index.html";
  const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
  window.location.href = redirectUrl;
});

// Hàm hiển thị thông báo
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notification-message");
const notificationClose = document.getElementById("notification-close");

const showNotification = (message, isSuccess = false) => {
  notificationMessage.textContent = message;
  notification.style.backgroundColor = isSuccess ? "#d4edda" : "#f8d7da";
  notification.style.color = isSuccess ? "#155724" : "#721c24";
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 5000); // Ẩn thông báo sau 5 giây
};

notificationClose.addEventListener("click", () => {
  notification.classList.add("hidden");
});
//hàm loading
const toggleLoading = (button, isLoading) => {
  const btnText = button.querySelector(".btn-text");

  if (isLoading) {
    btnText.textContent = "Loading...";
    button.disabled = true;
  } else {
    btnText.textContent = button.id === "btn-login" ? "Đăng nhập" : "Đăng Kí";
    button.disabled = false;
  }
};

// Hàm tạo tài khoản
const createUser = async (loginData) => {
  try {
    const response = await fetch(`${serverApi}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      return response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng kí");
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

// Xử lý đăng ký
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-register")) {
    e.preventDefault();
    const registerForm = document.querySelector(".form-register");
    const registerButton = registerForm.querySelector(".btn-register");
    let { email, password, name } = Object.fromEntries(
      new FormData(registerForm)
    );
    email = escapeHtml(email);
    password = escapeHtml(password);
    name = escapeHtml(name);
    toggleLoading(registerButton, true);

    try {
      const registerData = await createUser({ email, password, name });

      if (registerData.error) {
        showNotification(registerData.error);
      } else {
        showNotification("Đăng ký thành công! Vui lòng đăng nhập.", true);
        registerForm.reset();
        switchForm("login");
      }
    } catch (e) {
      console.log(e);
      showNotification("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    } finally {
      toggleLoading(registerButton, false);
    }
  }
});

// Hàm gửi dữ liệu đăng nhập
const sendLogin = async (loginData) => {
  try {
    const response = await fetch(`${serverApi}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.code === 200 && data.status_code === "SUCCESS") {
        return data;
      } else {
        throw new Error(data.message || "Lỗi khi đăng nhập");
      }
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng nhập");
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

// Xử lý đăng nhập
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-login")) {
    e.preventDefault();
    const loginForm = document.querySelector(".form-login");
    const loginButton = loginForm.querySelector(".btn-login");
    let { email, password } = Object.fromEntries(new FormData(loginForm));
    email = escapeHtml(email);
    password = escapeHtml(password);
    toggleLoading(loginButton, true);
    try {
      const loginData = await sendLogin({ email, password });
      if (loginData.error) {
        showNotification(loginData.error);
      } else {
        showNotification("Đăng nhập thành công!", true);
        const authToken = {
          access_token: loginData.data.accessToken,
          refresh_token: loginData.data.refreshToken,
        };
        localStorage.setItem("auth_token", JSON.stringify(authToken));

        const hostname = window.location.hostname;
        const localUrl = "http://127.0.0.1:5500/homework/Day-41/home.html";
        const gitUrl =
          "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/home.html";
        const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
        window.location.href = redirectUrl;
        loginForm.reset();
      }
    } catch (e) {
      console.log(e);
      showNotification("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.");
    } finally {
      toggleLoading(loginButton, false);
    }
  }
});
// Thực hiện kiểm tra khi DOM được tải
document.addEventListener("DOMContentLoaded", redirectIfLoggedIn);
