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
const handleLogout = (e) => {
  if (e) e.preventDefault();
  localStorage.removeItem("auth_token");

  const redirectUrl =
    window.location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:5500/homework/Day_/form.html"
      : "https://hoaithu222.github.io/f8_offline_k8/homework/Day_/form.html";
  window.location.href = redirectUrl;
};
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
export {
  getTime,
  calculateReadingTime,
  toggleLoading,
  handleLogout,
  escapeHtml,
};
