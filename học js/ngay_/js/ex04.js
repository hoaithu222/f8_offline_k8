const serverApi = "https://api.escuelajs.co/api/v1";

// Xử lý sự kiện gửi biểu mẫu
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("login-form")) {
    e.preventDefault();
    const loginForm = document.querySelector(".login-form");
    const { email, password } = Object.fromEntries(new FormData(loginForm));
    const errors = {};
    if (!email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }
    const errorsElList = loginForm.querySelectorAll(".error");
    errorsElList.forEach((errorsEl) => {
      errorsEl.innerHTML = "";
    });
    if (Object.keys(errors).length) {
      Object.keys(errors).forEach((key) => {
        const error = errors[key];
        const errorEl = loginForm.querySelector(`.error-${key}`);
        if (errorEl) {
          errorEl.innerHTML = error;
        }
      });
    } else {
      // Gọi API
      setLoadingBtn(loginForm);
      const loginData = await sendLogin({ email, password });
      removeLoading(loginForm);

      if (!loginData) {
        showMessage("Email hoặc mật khẩu không chính xác", "danger");
      } else {
        localStorage.setItem("login_token", JSON.stringify(loginData));
        render(); // Cập nhật giao diện sau khi đăng nhập thành công
      }
    }
    loginForm.reset();
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

    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch {
    return false;
  }
};

// Hàm hiển thị thông báo
const showMessage = (msg, type = "success") => {
  const msgEl = document.querySelector(".msg");
  if (msgEl) {
    msgEl.innerHTML = `<div class="alert alert-${type} text-center">${msg}</div>`;
  }
};

// Hàm thiết lập trạng thái loading cho nút
const setLoadingBtn = (loginForm) => {
  const btn = loginForm.querySelector(".btn");
  if (btn) {
    btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>
                      <span> Loading...</span>`;
    btn.disabled = true;
  }
};

// Cấp lại token mới và lưu cả hai lại
const sendRefreshToken = async () => {
  try {
    const { refresh_token: refreshToken } = JSON.parse(
      localStorage.getItem("login_token")
    );
    const response = await fetch(`${serverApi}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch {
    return false;
  }
};

// Hàm gỡ bỏ trạng thái loading từ nút
const removeLoading = (loginForm) => {
  const btn = loginForm.querySelector(".btn");
  if (btn) {
    btn.innerHTML = "Đăng Nhập";
    btn.disabled = false;
  }
};

// Hàm lấy thông tin hồ sơ người dùng
const getProfile = async () => {
  try {
    const { access_token: accessToken } = JSON.parse(
      localStorage.getItem("login_token")
    );
    const response = await fetch(`${serverApi}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (e) {
    console.log(e);
    return false;
  }
};

// Hiển thị thông tin hồ sơ người dùng
const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");
  if (user) {
    profileNameEl.innerText = user.name;
  } else {
    const newToken = await sendRefreshToken();
    if (newToken) {
      localStorage.setItem("login_token", JSON.stringify(newToken));
      showProfile();
    } else {
      localStorage.removeItem("login_token");
      render();
    }
  }
};

// Xử lý đăng xuất
const handleLogout = () => {
  localStorage.removeItem("login_token");
  render();
};

// Hàm render giao diện
const render = () => {
  const status = localStorage.getItem("login_token") ? true : false; // trạng thái đăng nhập
  if (status) {
    document.body.innerHTML = `<div class="container py-3">
        <h2>Chào mừng bạn đến với F8</h2>
        <ul class="list-unstyled d-flex gapo-2">
            <li>Chào bạn : <span class="profile-name">Loading...</span></li>
            <li><a href="#" id="logout">Đăng Xuất</a></li>
        </ul>
    </div>`;
    document.getElementById("logout").addEventListener("click", handleLogout);
    showProfile();
  } else {
    document.body.innerHTML = `<div class="w-50 mx-50 mx-auto py-3">
        <h2 class="text-content">Đăng Nhập</h2>
        <div class="msg"></div>
        <form action="" class="login-form">
            <div class="mb-3">
                <label>Email</label>
                <input type="text" name="email" class="form-control" placeholder="Email">
                <span class="text-danger error error-email"></span>
            </div>
            <div class="mb-3">
                <label>Mật khẩu</label>
                <input type="password" name="password" class="form-control" placeholder="Password">
                <span class="text-danger error error-password"></span>
            </div>
            <div class="d-grid">
                <button class="btn btn-primary">
                    Đăng nhập
                </button>
            </div>
        </form>
    </div>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
