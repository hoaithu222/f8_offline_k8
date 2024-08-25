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

function escapeHtml(text) {
  if (typeof text !== "string") {
    return "";
  }
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
  escapeHtml,
  redirectIfLoggedIn,
  getRandomAvatar,
  truncateText,
};
