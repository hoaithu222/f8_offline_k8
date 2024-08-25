function calculateReadingTime(text) {
  var wordsPerMinute = 200;
  var wordsArray = text.trim().split(/\s+/);
  var numberOfWords = wordsArray.length;

  if (numberOfWords <= 100) {
    var wordsPerSecond = wordsPerMinute / 60;
    var readingTimeSeconds = Math.ceil(numberOfWords / wordsPerSecond);
    return `${readingTimeSeconds} giây`;
  } else {
    var readingTimeMinutes = Math.ceil(numberOfWords / wordsPerMinute);
    return `${readingTimeMinutes} phút`;
  }
}

function getTime(times) {
  var now = Date.now();
  var eventTime = Date.parse(times);
  var timeBefore = (now - eventTime) / 1000;

  var days = Math.floor(timeBefore / 86400);
  timeBefore %= 86400;
  var hoursBefore = Math.floor(timeBefore / 3600);
  timeBefore %= 3600;

  var date1 = new Date(times);
  var hour = date1.getHours();
  var minutes = date1.getMinutes();

  return {
    days: days,
    hoursBefore: hoursBefore,
    hour: hour,
    minutes: minutes,
  };
}

const toggleLoading = (show) => {
  const loading = document.querySelector(".loading");
  if (show) {
    loading.classList.add("active");
  } else {
    loading.classList.remove("active");
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
// Lấy dữ liệu bài viết từ API
const serverApi = "https://api-auth-two.vercel.app";
let params = {
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
              <a href="" class="view-more button-one">#view-more ${escapeHtml(
                truncatedTitle
              )}</a>
              <a href="" class="view-user button-one">#${escapeHtml(
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
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
// Hàm kiểm tra và chuyển hướng nếu người dùng đã đăng nhập
const redirectIfLoggedIn = () => {
  const tokenData = JSON.parse(localStorage.getItem("auth_token"));
  if (tokenData && tokenData.access_token) {
    const hostname = window.location.hostname;
    const localUrl = "http://127.0.0.1:5500/homework/Day-41/home.html";
    const gitUrl =
      "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/home.html";
    const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
    if (window.location.href !== redirectUrl) {
      window.location.href = redirectUrl;
    }
  }
};

export {
  getTime,
  calculateReadingTime,
  toggleLoading,
  getBlogs,
  drawBlogs,
  serverApi,
  escapeHtml,
  redirectIfLoggedIn,
};
