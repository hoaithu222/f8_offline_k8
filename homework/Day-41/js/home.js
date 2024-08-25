import { escapeHtml, redirectIfLoggedIn } from "./component.js";
import { serverApi, getBlogs, drawBlogs } from "./http.js";

const getProfile = async () => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    const { access_token: accessToken } = tokenData;
    const response = await fetch(`${serverApi}/users/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unauthorized");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return false;
  }
};

// Hàm hiển thị thông tin hồ sơ người dùng

const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");

  if (user) {
    profileNameEl.innerText = user.data.name;
  } else {
    const newTokenData = await sendRefreshToken();
    console.log(newTokenData);
    if (newTokenData && newTokenData.data && newTokenData.data.token) {
      localStorage.setItem(
        "auth_token",
        JSON.stringify({
          access_token: newTokenData.data.token.accessToken,
          refresh_token: newTokenData.data.token.refreshToken,
        })
      );
      showProfile();
    } else {
      localStorage.removeItem("auth_token");
      handleLogout();
    }
  }
};

// Hàm cấp lại token mới và lưu cả hai lại
const sendRefreshToken = async () => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    const { refresh_token: refreshToken } = tokenData;
    const response = await fetch(`${serverApi}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Unauthorized");
    }

    const newTokenData = await response.json();

    // Kiểm tra dữ liệu trả về từ API
    console.log("New token data:", newTokenData);

    return newTokenData;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false;
  }
};

// Hàm thêm blog mới
const addBlogs = async (dataBlog) => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    const { access_token: accessToken } = tokenData;
    const response = await fetch(`${serverApi}/blogs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBlog),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng bài viết");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding blog:", error);
    return { error: error.message };
  }
};

// Hàm xử lý form tạo blog mới
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-create")) {
    e.preventDefault();

    const registerForm = document.querySelector(".form-create");
    let { title, content } = Object.fromEntries(new FormData(registerForm));
    title = escapeHtml(title);
    content = escapeHtml(content);

    try {
      const addBlogNew = await addBlogs({ title, content });

      if (addBlogNew.error) {
        console.error(addBlogNew.error);
      } else {
        console.log(addBlogNew);
        const allBlogs = await getBlogs();
        drawBlogs([addBlogNew.data], true);
        registerForm.reset();
        document
          .querySelector(".create-blog .box-form")
          .classList.remove("active");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
});

// hàm xử lý Logout
const sendLogout = async () => {
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
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

// Hàm xử lý đăng xuất
const handleLogout = (e) => {
  if (e) e.preventDefault();
  localStorage.removeItem("auth_token");

  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/form.html";

  window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
};

// Xử lý sự kiện đăng xuất
const btnLogout = document.querySelector(".button-logout");
btnLogout.addEventListener("click", function () {
  sendLogout();
  handleLogout();
});

// Xử lý sự kiện mở form tạo blog mới
const btnCreateEl = document.querySelector(".post-blog");
const formCreateEl = document.querySelector(".create-blog .box-form");
const btnClose = document.querySelector(".create-blog .close i");

btnClose.addEventListener("click", () => {
  formCreateEl.classList.remove("active");
});

btnCreateEl.addEventListener("click", () => {
  formCreateEl.classList.add("active");
});
// lấy profile
const userEl = document.querySelector(".user");
userEl.addEventListener("click", async () => {
  const user = await getProfile();
  console.log(user);
});
// Thực hiện kiểm tra khi DOM được tải
document.addEventListener("DOMContentLoaded", redirectIfLoggedIn);
// Hiển thị thông tin người dùng khi trang được tải
showProfile();
