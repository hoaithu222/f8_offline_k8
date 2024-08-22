import { calculateReadingTime, getTime } from "./component.js";

const serverApi = "https://api-auth-two.vercel.app/blogs";
let params = {
  q: "",
  page: 1,
  limit: 10,
};
let allDataLoaded = false;
let isLoading = false;

// Lấy dữ liệu bài viết từ API
const getBlogs = async () => {
  if (isLoading || allDataLoaded) return;

  isLoading = true;
  document.querySelector(".loading").classList.add("active");
  try {
    const api = `${serverApi}?q=${params.q}&page=${params.page}&limit=${params.limit}`;
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
    drawBlogs(result.data);
    params.page++;
  } catch (e) {
    console.error("Error fetching data:", e);
  } finally {
    isLoading = false;
    document.querySelector(".loading").classList.remove("active"); // Ẩn biểu tượng tải
  }
};

const avatars = [
  "image/image1.jpg",
  "image/image2.gif",
  "image/image3.gif",
  "image/image6.gif",
  "image/image4.gif",
  "image/image5.jpg",
  "image/image7.gif",
  "image/image8.gif",
  "image/image9.gif",
  "image/image10.gif",
];

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

// Hiển thị bài viết
const drawBlogs = (blogs) => {
  const wrapEl = document.querySelector(".inner-blogs .inner-wrap");
  const content = blogs
    .map((blog) => {
      const avatar = getRandomAvatar();
      const { days, hour, minutes } = getTime(blog.timeUp);
      const truncatedTitle = truncateText(blog.title, 25);
      const truncatedUserName = truncateText(blog.userId.name, 20);
      const truncatedContent = truncateText(blog.content, 100);
      return `
        <div class="inner-box">
          <div class="user-info">
            <img src="${avatar}" alt="avatar">
            <h3 class="user-name">${blog.userId.name}</h3>
          </div>
          <div class="inner-content">
            <p class="inner-title">${truncatedTitle}</p>
            <p class="content">${truncatedContent}</p>
            <div class="inner-link">
              <a href="" class="view-more button-one">#view-more ${truncatedTitle}</a>
              <a href="" class="view-user button-one">#${truncatedUserName}</a>
            </div>
            <div class="inner-time">
              <div class="day">
                <span class="day">${days} ngày trước</span>
                <span class="hour">${hour}h ${
        hour > 12 ? (hour > 18 ? "tối" : "chiều") : "sáng"
      }</span>
                <span class="minutes">${minutes} phút</span>
              </div>
              <div class="time-about">Khoảng ${calculateReadingTime(
                blog.content
              )} đọc</div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
  wrapEl.insertAdjacentHTML("beforeend", content);
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
observer.observe(document.querySelector(".footer"));

// xử lý button
const btnLogin = document.querySelector(".btn-from");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/form.html";
  const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
  window.location.href = redirectUrl;
});

getBlogs();
