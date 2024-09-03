import {
  escapeHtml,
  getRandomAvatar,
  getTime,
  calculateReadingTime,
  // truncateText,
  formatContent,
} from "./component.js";
const serverApi = "https://api-auth-two.vercel.app";

// Hàm hiển thị thông tin hồ sơ người dùng
const showProfileEl = (data) => {
  const innerUser = document.querySelector(".info-user");

  innerUser.innerHTML = `
    <p class="info">Thông tin user : <i class="fa-solid fa-circle-down"></i></p>
    <div class="name">
         <img src="/homework/Day-41/image/image1.jpg" alt="avatar" width="130px" style="border-radius: 50%;" />
         <h3>${localStorage.getItem("userName")}</h3>
    </div>
    <p>Các bài ${localStorage.getItem(
      "userName"
    )} đã đăng <i class="fa-solid fa-circle-right"></i></p>`;
};

// Lấy danh sách các bài viết
const userId = localStorage.getItem("userId");

const getBlogs = async () => {
  try {
    const response = await fetch(`${serverApi}/users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    console.log(data);

    drawBlogs(data.data.blogs);
    renderPage("profile", userId);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Hiển thị danh sách bài viết
const drawBlogs = (blogs, prepend = false) => {
  const wrapEl = document.querySelector(".inner-blogs .inner-wrap");

  const content = blogs
    .map((blog) => {
      const avatar = getRandomAvatar();
      const { days, hoursBefore, hour, minutes } = getTime(blog.timeUp);
      // const content = truncateText(escapeHtml(blog.content), 60);

      return `
        <div class="inner-box">
          <div class="user-info">
            <img src="${avatar}" alt="avatar">
            <h3 class="user-name">${escapeHtml(blog.userId.name)}</h3>
          </div>
          <div class="inner-content">
            <p class="inner-title">${escapeHtml(blog.title)}</p>
            <p class="content">${formatContent(blog.content)}</p>
            <div class="inner-link">
              <a href="#" class="view-more button-one" data-blog-id="${
                blog._id
              }" data-blog-title="${blog.title}">#view-more ${escapeHtml(
        blog.title
      )}</a>
            </div>
            <div class="inner-time">
              <div class="day">
                <span class="day">
                  ${days > 0 ? `${days} ngày trước` : ""}
                  ${hoursBefore > 0 ? `${hoursBefore} giờ trước` : ""}
                </span>
                <span class="hour">
                  ${hour}h ${hour > 12 ? (hour > 18 ? "tối" : "chiều") : "sáng"}
                </span>
                <span class="minutes">${minutes} phút</span>
              </div>
              <div class="time-about">Khoảng ${calculateReadingTime(
                escapeHtml(blog.content)
              )} đọc</div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  if (prepend) {
    wrapEl.insertAdjacentHTML("afterbegin", content);
  } else {
    wrapEl.insertAdjacentHTML("beforeend", content);
  }

  document.querySelectorAll(".view-more").forEach((viewMore) => {
    viewMore.addEventListener("click", function (e) {
      e.preventDefault();
      const blogId = this.getAttribute("data-blog-id");
      const blogTitle = this.getAttribute("data-blog-title");
      localStorage.setItem("blogId", blogId);
      localStorage.setItem("blogTitle", blogTitle);
      const hostname = window.location.hostname;
      const localUrl = `http://127.0.0.1:5500/homework/Day-41/blog.html`;
      const gitUrl = `https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/blog.html`;

      window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
    });
  });
};

// Xử lý button home
const btnHome = document.querySelector(".button-home");
btnHome.addEventListener("click", () => {
  const authToken = localStorage.getItem("auth_token");
  const hostname = window.location.hostname;
  const localUrl = authToken
    ? "http://127.0.0.1:5500/homework/Day-41/home.html"
    : "http://127.0.0.1:5500/homework/Day-41/index.html";
  const gitUrl = authToken
    ? "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/home.html"
    : "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/index.html";

  window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
});

function renderPage(page, userId = null) {
  // const hostname = window.location.hostname;
  // const basePath =
  //   hostname === "127.0.0.1"
  //     ? "/homework/Day-41"
  //     : "/f8_offline_k8/homework/Day-41";

  if (page === "profile") {
    const path = userId ? `#/profile/${userId}` : "#/profile/@me";
    window.location.hash = path;
    // history.pushState(null, null, `${basePath}${path}`);
    if (userId) {
      renderOtherUserProfile(userId);
    }
  }
}

function renderOtherUserProfile(userId) {
  showProfileEl();
  console.log("Render trang cá nhân của người dùng với ID:", userId);
}

// Gọi các hàm cần thiết
showProfileEl();
getBlogs();
