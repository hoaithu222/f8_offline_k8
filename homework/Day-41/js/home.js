import { escapeHtml, redirectIfLoggedIn, formatContent } from "./component.js";
import { serverApi, getBlogs, drawBlogs } from "./http.js";

// Hàm lấy thông tin hồ sơ người dùng
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
export const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");

  if (user) {
    profileNameEl.innerText = user.data.name;
    localStorage.setItem("idMe", user.data._id);
    renderPage("profile");
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
    let tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    let { access_token: accessToken } = tokenData;

    // Áp dụng formatContent cho nội dung blog
    dataBlog.content = formatContent(dataBlog.content);

    let response = await fetch(`${serverApi}/blogs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBlog),
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Nếu token hết hạn, gọi hàm lấy lại token mới
        const newTokenData = await sendRefreshToken();
        if (newTokenData && newTokenData.data && newTokenData.data.token) {
          localStorage.setItem(
            "auth_token",
            JSON.stringify({
              access_token: newTokenData.data.token.accessToken,
              refresh_token: newTokenData.data.token.refreshToken,
            })
          );
          accessToken = newTokenData.data.token.accessToken;

          // Gọi lại yêu cầu với token mới
          response = await fetch(`${serverApi}/blogs`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBlog),
          });
        }
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Lỗi khi đăng bài viết");
      }
    }

    return response.json();
  } catch (error) {
    console.error("Error adding blog:", error);
    return { error: error.message };
  }
};

// Đảm bảo rằng showNotification được định nghĩa trước khi sử dụng
const showNotification = (message) => {
  const notification = document.getElementById("notification");
  notification.innerText = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
};
// Hàm tính thời gian đợi
const calculateWaitTime = (targetDate) => {
  const now = new Date();
  const targetTime = new Date(targetDate).getTime();
  const waitTime = targetTime - now.getTime();
  console.log("calculateWaitTime - now:", now);
  console.log("calculateWaitTime - targetTime:", targetTime);
  console.log("calculateWaitTime - waitTime:", waitTime);
  return waitTime;
};

// Hàm tính thời gian còn lại
const calculateRemainingTime = (targetDate) => {
  const now = new Date();
  const targetTime = new Date(targetDate).getTime();
  const timeDifference = targetTime - now.getTime();
  console.log("calculateRemainingTime - now:", now);
  console.log("calculateRemainingTime - targetTime:", targetTime);
  console.log("calculateRemainingTime - timeDifference:", timeDifference);

  if (timeDifference <= 0) return "Thời gian chọn không hợp lệ";

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const remainingTime = `${days} days, ${hours} hours, ${minutes} minutes left`;
  console.log("calculateRemainingTime - remainingTime:", remainingTime);

  return remainingTime;
};

// Xử lý chọn ngày
const choseDate = document.querySelector(".datePicker");
choseDate.addEventListener("change", (e) => {
  const selectedDate = e.target.value;
  console.log("choseDate - selectedDate:", selectedDate);

  if (selectedDate) {
    const remainingTimeMessage = calculateRemainingTime(selectedDate);
    console.log("choseDate - remainingTimeMessage:", remainingTimeMessage);
    showNotification(remainingTimeMessage); // Hàm này sẽ không gây lỗi nếu được định nghĩa đúng
  }
});

// Hàm xử lý form tạo blog mới
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-create")) {
    e.preventDefault();

    const registerForm = document.querySelector(".form-create");
    let { title, content, datePicker } = Object.fromEntries(
      new FormData(registerForm)
    );

    title = escapeHtml(title);

    console.log("form-create - title:", title);
    console.log("form-create - content:", content);
    console.log("form-create - datePicker:", datePicker);

    if (datePicker) {
      const waitTime = calculateWaitTime(datePicker);
      console.log("form-create - waitTime:", waitTime);

      if (waitTime > 0) {
        showNotification(
          `Bài viết sẽ được đăng sau ${Math.floor(waitTime / 1000)} giây.`
        );

        setTimeout(async () => {
          try {
            const addBlogNew = await addBlogs({ title, content });
            console.log("form-create - addBlogNew:", addBlogNew);

            if (addBlogNew.error) {
              console.error(addBlogNew.error);
            } else {
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
          hideNotification();
        }, waitTime);

        document
          .querySelector(".create-blog .box-form")
          .classList.remove("active");

        return;
      }
    } else {
      try {
        const addBlogNew = await addBlogs({ title, content });
        console.log("form-create - addBlogNew:", addBlogNew);

        if (addBlogNew.error) {
          console.error(addBlogNew.error);
        } else {
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
  }
});
// Hàm xử lý đăng xuất
const sendLogout = async () => {
  try {
    // Lấy thông tin token từ localStorage
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token không tìm thấy");

    let { access_token: accessToken } = tokenData;

    // Gửi yêu cầu logout với access token hiện tại
    let response = await fetch(`${serverApi}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Nếu gặp lỗi 401 (Unauthorized), có thể do token đã hết hạn
    if (!response.ok && response.status === 401) {
      // Thử refresh lại token
      const newTokenData = await sendRefreshToken();
      if (newTokenData && newTokenData.data && newTokenData.data.token) {
        // Lưu lại token mới vào localStorage
        localStorage.setItem(
          "auth_token",
          JSON.stringify({
            access_token: newTokenData.data.token.accessToken,
            refresh_token: newTokenData.data.token.refreshToken,
          })
        );
        accessToken = newTokenData.data.token.accessToken;

        // Thử lại yêu cầu logout với token mới
        response = await fetch(`${serverApi}/auth/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
      }
    }

    // Nếu logout thất bại, ném ra lỗi
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng xuất");
    }

    // Nếu logout thành công, xóa token khỏi localStorage và chuyển hướng
    localStorage.removeItem("auth_token");
    handleLogout();
    return response.json();
  } catch (error) {
    console.error("Lỗi trong quá trình đăng xuất:", error);
    localStorage.removeItem("auth_token");
    handleLogout();
    return { error: error.message };
  }
};

// Hàm chuyển hướng sau khi đăng xuất
const handleLogout = () => {
  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/form.html";

  // Chuyển hướng tới URL tương ứng
  window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
};

// Xử lý sự kiện đăng xuất
const btnLogout = document.querySelector(".button-logout");
btnLogout.addEventListener("click", function () {
  sendLogout();
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

// Lấy profile
const userEl = document.querySelector(".user");
userEl.addEventListener("click", async () => {
  const user = await getProfile();
  console.log(user.data._id);
  console.log(user);
});

function renderPage(page) {
  // const hostname = window.location.hostname;
  // const basePath =
  //   hostname === "127.0.0.1"
  //     ? "/homework/Day-41"
  //     : "/f8_offline_k8/homework/Day-41";

  if (page === "profile") {
    const path = "#/profile/@me";
    window.location.hash = path;
    // history.pushState(null, null, `${basePath}${path}`);
    showProfile();
  }
}

// Thực hiện kiểm tra khi DOM được tải
document.addEventListener("DOMContentLoaded", redirectIfLoggedIn);
// Hiển thị thông tin người dùng khi trang được tải
showProfile();
