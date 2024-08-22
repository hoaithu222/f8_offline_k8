const serverApi = "https://api-auth-two.vercel.app";

// Hàm lấy thông tin người dùng
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
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return false;
  }
};

// Hàm hiển thị thông tin người dùng
const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");

  if (user) {
    profileNameEl.innerText = user.data.name;
  } else {
    const newToken = await sendRefreshToken();
    if (newToken) {
      localStorage.setItem("auth_token", JSON.stringify(newToken));
      showProfile(); // Retry showing profile with the new token
    } else {
      localStorage.removeItem("auth_token");
      handleLogout(); // Redirect or show login
    }
  }
};

// Cấp lại token mới và lưu cả hai lại
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
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false;
  }
};

// Xử lý đăng xuất
const handleLogout = (e) => {
  if (e) e.preventDefault();
  localStorage.removeItem("auth_token");

  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/ex01.html";

  window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
};

// Xử lý sự kiện logout
document
  .querySelector(".button-logout")
  .addEventListener("click", handleLogout);

// Hiển thị thông tin người dùng khi trang được tải
showProfile();
