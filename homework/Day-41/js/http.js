import {
  getTime,
  calculateReadingTime,
  toggleLoading,
  escapeHtml,
  redirectIfLoggedIn,
  getRandomAvatar,
  truncateText,
} from "./component.js";

const serverApi = "https://api-auth-two.vercel.app";
export let params = {
  q: "",
  page: 1,
  limit: 10,
};
let allDataLoaded = false;
let isLoading = false;
const getBlogs = async () => {
  if (isLoading || allDataLoaded) return;

  isLoading = true;
  document.querySelector(".loading").classList.add("active");
  try {
    const api = `${serverApi}/blogs?q=${params.q}&page=${params.page}&limit=${params.limit}`;
    console.log(`Đường dẫn :${api}`);
    const response = await fetch(api);
    const result = await response.json();
    if (result.data.length === 0) {
      allDataLoaded = true;
      document
        .querySelector(".inner-blogs .inner-wrap")
        .insertAdjacentHTML("beforeend", "<p>Không có bài viêt nào</p>");
      return;
    }
    drawBlogs(result.data, false);
    params.page++;
  } catch (e) {
    console.error("Error fetching data:", e);
  } finally {
    isLoading = false;
    document.querySelector(".loading").classList.remove("active");
  }
};
// Hiển thị bài viết

const drawBlogs = (blogs, prepend = false) => {
  const wrapEl = document.querySelector(".inner-blogs .inner-wrap");
  const content = blogs
    .map((blog) => {
      const avatar = getRandomAvatar();
      const { days, hoursBefore, hour, minutes } = getTime(blog.timeUp);
      const truncatedTitle = truncateText(blog.title, 25);
      const truncatedUserName = truncateText(blog.userId.name, 20);
      const truncatedContent = truncateText(blog.content, 100);

      return `
        <div class="inner-box">
          <div class="user-info">
            <img src="${avatar}" alt="avatar">
            <h3 class="user-name">${escapeHtml(blog.userId.name)}</h3>
          </div>
          <div class="inner-content">
            <p class="inner-title">${escapeHtml(truncatedTitle)}</p>
            <p class="content">${escapeHtml(truncatedContent)}</p>
            <div class="inner-link">
              <a href="#" class="view-more button-one" data-blog-id="${
                blog._id
              }" data-blog-title="${blog.title}">#view-more ${escapeHtml(
        truncatedTitle
      )}</a>
              <a href="#" class="view-user button-one" data-user-id="${
                blog.userId._id
              }" data-user-name="${escapeHtml(blog.userId.name)}">#${escapeHtml(
        truncatedUserName
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

  document.querySelectorAll(".view-user").forEach((viewUser) => {
    viewUser.addEventListener("click", function (e) {
      e.preventDefault();
      const userId = this.getAttribute("data-user-id");
      const userName = this.getAttribute("data-user-name");
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", userName);
      if (localStorage.getItem("auth_token")) {
        const hostname = window.location.hostname;
        const localUrl = `http://127.0.0.1:5500/homework/Day-41/page-user.html`;
        const gitUrl = `https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/page-user.html`;
        window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
      } else {
        alert("Bạn cần đăng nhập để xem được các bài viết");
      }
    });
  });

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

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !allDataLoaded) {
      getBlogs();
    }
  },
  {
    rootMargin: "100px",
  }
);

const targetElement = document.querySelector(".footer");

if (targetElement) {
  observer.observe(targetElement);
} else {
  console.error("Element not found or is not a DOM element");
}
export { drawBlogs, getBlogs, serverApi };
