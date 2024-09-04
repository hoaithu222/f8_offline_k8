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

// const truncateText = (text, maxLength) => {
//   if (text.length > maxLength) {
//     return text.slice(0, maxLength) + "...";
//   }
//   return text;
// };
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
export function formatContent(content) {
  content = content.replaceAll(/(0|\+84)\d{9}/g, (phone) => {
    const normalizedPhone = phone.replace(/[-.\s]/g, "");
    return `<a href="tel:${normalizedPhone}" class="link" target="_blank">${phone}</a>`;
  });

  content = content.replaceAll(
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
    (email) => {
      return `<a href="mailto:${email}" class="link" target="_blank">${email}</a>`;
    }
  );

  const youtubeLinkRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
  const youtubeLinks = [];
  content = content.replace(youtubeLinkRegex, (match) => {
    youtubeLinks.push(match);
    return `__YOUTUBE_LINK_${youtubeLinks.length - 1}__`;
  });

  content = content.replaceAll(
    /(?:https?:\/\/|www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?/g,
    (url) => {
      let formattedUrl = url;
      if (
        !formattedUrl.startsWith("http://") &&
        !formattedUrl.startsWith("https://")
      ) {
        formattedUrl = "http://" + formattedUrl;
      }
      if (formattedUrl.endsWith("/")) {
        formattedUrl = formattedUrl.slice(0, -1);
      }
      return `<a href="${formattedUrl}" class="link" target="_blank" rel="noopener noreferrer">${formattedUrl.replace(
        /^https?:\/\//,
        ""
      )}</a>`;
    }
  );

  youtubeLinks.forEach((link, index) => {
    const videoId = link.match(youtubeLinkRegex)[1];
    content = content.replace(
      `__YOUTUBE_LINK_${index}__`,
      `
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 80%; height: 100%; margin: 20px auto;">
        </iframe>
      </div>
    `
    );
  });

  content = content.replace(/\s+/g, " ").replace(/\n+/g, "\n");

  console.log(content);

  content = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ["a", "iframe", "br", "div"],
    ALLOWED_ATTR: [
      "href",
      "target",
      "src",
      "frameborder",
      "allowfullscreen",
      "rel",
      "style",
      "title",
      "allow",
    ],
  });

  return content;
}

export {
  getTime,
  calculateReadingTime,
  toggleLoading,
  escapeHtml,
  redirectIfLoggedIn,
  getRandomAvatar,
  // truncateText,
};
