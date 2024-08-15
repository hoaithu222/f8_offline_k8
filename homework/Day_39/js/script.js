var urlApi = "http://localhost:3000/blogs";
var currentPage = 1;
var pageSize = 5;
var isFetching = false;

// Hàm để lấy dữ liệu blog
function getBlog(page, size) {
  isFetching = true; // Đánh dấu trạng thái đang tải dữ liệu
  fetch(`${urlApi}?_page=${page}&_limit=${size}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Lỗi không lấy được dữ liệu");
      }
      return response.json();
    })
    .then(function (result) {
      renderBlog(result);
      isFetching = false; // Hoàn thành tải dữ liệu
    })
    .catch(function (e) {
      console.error(e);
      isFetching = false; // Xử lý lỗi và hoàn thành tải
    });
}

// Hàm để xử lý sự kiện cuộn trang
window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    !isFetching
  ) {
    currentPage++; // Tăng số trang hiện tại
    getBlog(currentPage, pageSize); // Lấy thêm dữ liệu blog
  }
});

// Hàm để tính toán thời gian đăng bài
function getTime(times) {
  var now = Date.now();
  var eventTime = Date.parse(times);
  var timeBefore = (now - eventTime) / 1000;
  var days = Math.ceil(timeBefore / 86400);
  var date1 = new Date(times);
  var hour = date1.getHours();
  var minutes = date1.getMinutes();
  return {
    days: days,
    hour: hour,
    minutes: minutes,
  };
}

// Hàm để tính toán thời gian đọc bài
function calculateReadingTime(text) {
  var wordsPerMinute = 200;
  var wordsArray = text.trim().split(/\s+/);
  var numberOfWords = wordsArray.length;

  if (numberOfWords <= 100) {
    var wordsPerSecond = wordsPerMinute / 60;
    var readingTimeSeconds = Math.ceil(numberOfWords / wordsPerSecond);
    return readingTimeSeconds + " giây";
  } else {
    var readingTimeMinutes = Math.ceil(numberOfWords / wordsPerMinute);
    return readingTimeMinutes + " phút";
  }
}

// Hàm để lấy các ID video YouTube từ nội dung
function extractYouTubeIDs(content) {
  var videoIDs = [];
  var startIndex = 0;

  while (
    content.includes("youtube.com/watch?v=", startIndex) ||
    content.includes("youtu.be/", startIndex)
  ) {
    if (content.includes("youtube.com/watch?v=", startIndex)) {
      startIndex = content.indexOf("youtube.com/watch?v=", startIndex) + 20;
      var endIndex = content.indexOf(" ", startIndex);
      if (endIndex === -1) endIndex = content.length;
      videoIDs.push(content.substring(startIndex, endIndex));
    } else if (content.includes("youtu.be/", startIndex)) {
      startIndex = content.indexOf("youtu.be/", startIndex) + 9;
      var endIndex = content.indexOf(" ", startIndex);
      if (endIndex === -1) endIndex = content.length;
      videoIDs.push(content.substring(startIndex, endIndex));
    }
  }

  // Loại bỏ link YouTube khỏi nội dung sau khi đã lấy video ID
  content = content.replace(
    /https?:\/\/(www\.)?youtu\.be\/\S+|https?:\/\/(www\.)?youtube\.com\/watch\?v=\S+/g,
    ""
  );

  return {
    videoIDs: videoIDs.map(function (id) {
      return id.replace(/[^\w-]/g, ""); // Loại bỏ các ký tự không hợp lệ
    }),
    updatedContent: content, // Nội dung đã loại bỏ các link YouTube
  };
}

// Hàm render blog
function renderBlog(blogs) {
  var contain = document.querySelector(".inner-wrap");
  var content = blogs
    .map(function (blog) {
      var timeInfo = getTime(blog.timeUp);
      var days = timeInfo.days;
      var hour = timeInfo.hour;
      var minutes = timeInfo.minutes;

      var iframes = "";
      var extracted = extractYouTubeIDs(blog.content);
      var videoIDs = extracted.videoIDs;
      var updatedContent = extracted.updatedContent;

      if (videoIDs.length > 0) {
        iframes = videoIDs
          .map(function (id) {
            return (
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
              id +
              '" frameborder="0" allowfullscreen></iframe>'
            );
          })
          .join(""); // Nối tất cả các iframe lại với nhau
      }

      return (
        '<div class="inner-box">' +
        '<div class="inner-logo">' +
        '<img src="image/OIP.jpg" alt="" width="40px" />' +
        '<span class="name">' +
        blog.userId.name +
        "</span>" +
        "</div>" +
        '<div class="inner-content">' +
        '<div class="inner-title">' +
        blog.title +
        "</div>" +
        '<div class="inner-desc">' +
        updatedContent + // Sử dụng nội dung đã cập nhật
        iframes +
        "</div>" +
        '<div class="inner-link">' +
        '<a href="#" class="view-more">' +
        "#view-more " +
        blog.title +
        "</a>" +
        '<a href="#" class="view-user">' +
        "#g" +
        "</a>" +
        "</div>" +
        '<div class="inner-time">' +
        '<div class="day">' +
        '<span class="day">' +
        days +
        " ngày trước" +
        "</span>" +
        '<span class="hour">' +
        hour +
        "h " +
        (hour > 12 ? (hour > 18 ? "tối" : "chiều") : "sáng") +
        "</span>" +
        '<span class="minutes">' +
        minutes +
        " phút" +
        "</span>" +
        "</div>" +
        '<div class="time-about">' +
        "Khoảng " +
        calculateReadingTime(updatedContent) +
        " đọc" + // Sử dụng nội dung đã cập nhật
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");

  contain.innerHTML += content; // Thêm nội dung mới vào phần cuối trang
}

// Bắt đầu tải dữ liệu lần đầu tiên
getBlog(currentPage, pageSize);
