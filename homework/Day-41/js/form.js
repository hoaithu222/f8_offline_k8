const serverApi = "https://api-auth-two.vercel.app";

// Hàm chuyển đổi giữa form đăng nhập và đăng ký
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
    const { email, password, name } = Object.fromEntries(
      new FormData(registerForm)
    );

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

// hàm xử lý Logout
const handleLogout = async () => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");
    const { access_token: accessToken } = tokenData;
    const response = await fetch(`${serverApi}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.code === 200 && data.status_code === "SUCCESS") {
        localStorage.removeItem("auth_token");
        showNotification("Đăng xuất thành công", true);
      } else {
        throw new Error(data.message || "Lỗi khi đăng xuất");
      }
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng xuất");
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
    const { email, password } = Object.fromEntries(new FormData(loginForm));

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
    }
  }
});

// Kiểm tra token và refresh nếu cần thiết
const checkAndRefreshToken = async () => {
  const authToken = JSON.parse(localStorage.getItem("auth_token"));
  if (!authToken) return;

  const { access_token, refresh_token } = authToken;

  // Kiểm tra xem access_token có hết hạn không
  const isTokenExpired = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  };

  if (isTokenExpired(access_token)) {
    try {
      const response = await fetch(`${serverApi}/auth/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refresh_token }),
      });

      if (response.ok) {
        const newTokenData = await response.json();
        if (
          newTokenData.code === 200 &&
          newTokenData.status_code === "SUCCESS"
        ) {
          localStorage.setItem(
            "auth_token",
            JSON.stringify({
              access_token: newTokenData.data.token.accessToken,
              refresh_token: newTokenData.data.token.refreshToken,
            })
          );
          showNotification("Token đã được làm mới.", true);
        } else {
          throw new Error("Không thể làm mới token.");
        }
      } else {
        throw new Error("Không thể làm mới token.");
      }
    } catch (e) {
      console.log(e);
      showNotification("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      localStorage.removeItem("auth_token");
      switchForm("login");
    }
  }
};

// Ngăn người dùng truy cập trang đăng nhập/đăng ký khi đã đăng nhập
const preventAccessWhenLoggedIn = () => {
  const authToken = JSON.parse(localStorage.getItem("auth_token"));
  if (authToken) {
    const hostname = window.location.hostname;
    const localUrl = "http://127.0.0.1:5500/homework/Day-41/home.html";
    const gitUrl =
      "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/home.html";
    const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
    window.location.href = redirectUrl;
  }
};

// Kiểm tra token khi tải trang
window.addEventListener("load", () => {
  preventAccessWhenLoggedIn();
  checkAndRefreshToken();
});
