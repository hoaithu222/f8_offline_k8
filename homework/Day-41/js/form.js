const serverApi = "https://api-auth-two.vercel.app";

// Xử lý chuyển form
const buttons = document.querySelectorAll(".menu button");
const loginForm = document.querySelector(".form-login");
const registerForm = document.querySelector(".form-register");

const switchForm = (formToShow) => {
  if (formToShow === "login") {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    buttons[0].classList.add("active");
    buttons[1].classList.remove("active");
  } else if (formToShow === "register") {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    buttons[0].classList.remove("active");
    buttons[1].classList.add("active");
  }
};

buttons[0].addEventListener("click", () => switchForm("login"));
buttons[1].addEventListener("click", () => switchForm("register"));
switchForm("login");

// Xử lý button về trang chủ
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

// Hàm tạo thông báo
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
  }, 5000); // 5 giây sau thì ẩn thông báo
};

// Xử lý đóng thông báo
notificationClose.addEventListener("click", () => {
  notification.classList.add("hidden");
});

// Tạo tài khoản
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
      // Đọc lỗi từ phản hồi nếu không thành công
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng kí");
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

// Xử lý đăng kí
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-register")) {
    e.preventDefault();
    const registerForm = document.querySelector(".form-register");
    const { email, password, name } = Object.fromEntries(
      new FormData(registerForm)
    );

    try {
      const registerData = await createUser({ email, password, name });

      if (registerData.error) {
        // Hiển thị thông báo lỗi cho người dùng
        showNotification(registerData.error);
      } else {
        // Xử lý đăng ký thành công
        console.log(registerData);
        showNotification("Đăng ký thành công!", true);
        registerForm.reset();
      }
    } catch (e) {
      console.log(e);
      showNotification(
        "Đã xảy ra lỗi khi đăng ký. Vui lòng kiểm tra thông tin và thử lại."
      );
    }
  }
});

// Gửi dữ liệu đăng nhập
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
      return response.json();
    } else {
      // Đọc lỗi từ phản hồi nếu không thành công
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng nhập");
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

// Xử lý form đăng nhập
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-login")) {
    e.preventDefault();
    const loginForm = document.querySelector(".form-login");
    const { email, password } = Object.fromEntries(new FormData(loginForm));

    try {
      const loginData = await sendLogin({ email, password });
      if (loginData.error) {
        // Hiển thị thông báo lỗi cho người dùng
        showNotification(loginData.error);
      } else {
        // Xử lý đăng nhập thành công
        console.log(loginData);
        showNotification("Đăng nhập thành công!", true);
        const authToken = {
          access_token: loginData.data.accessToken,
          refresh_token: loginData.data.accessToken,
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
      showNotification(
        "Đã xảy ra lỗi khi đăng nhập. Vui lòng kiểm tra thông tin và thử lại."
      );
    }
  }
});
