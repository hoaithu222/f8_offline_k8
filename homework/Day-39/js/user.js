import {
  calculateReadingTime,
  extractYouTubeIDs,
  getTime,
  toggleLoading,
} from "./utils.js";

var urlApi = "https://94grdx-8080.csb.app/blogs";

var searchParams = new URLSearchParams(window.location.search);
var userId = searchParams.get("_id");
console.log(userId);

function getUserBlogs(userId) {
  toggleLoading(true);
  fetch(`${urlApi}?_id=${userId}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Lỗi không lấy được dữ liệu");
      }
      return response.json();
    })
    .then(function (blogs) {
      toggleLoading(false);
      renderUserBlogs(blogs);
    })
    .catch(function (e) {
      toggleLoading(false);
      console.error(e);
    });
}

function renderUserBlogs(blogs) {
  console.log(blogs);
  const innerWrap = document.querySelector(".inner-wrap");
  const content = blogs
    .map(function (blog) {
      const { days, hour, minutes } = getTime(blog.timeUp);

      let iframes = "";
      const videoIDs = extractYouTubeIDs(blog.content);

      if (videoIDs.length > 0) {
        iframes = videoIDs
          .map(function (id) {
            return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
          })
          .join("");

        blog.content = blog.content.replace(
          /https?:\/\/(www\.)?youtu\.be\/\S+|https?:\/\/(www\.)?youtube\.com\/watch\?v=\S+/g,
          ""
        );
      }

      return `<div class="inner-box">
                        <div class="inner-logo">
                            <img src="../image/OIP.jpg" alt="" width="40px" />
                            <span class="name">${blog.userId.name}</span>
                        </div>
                        <div class="inner-content">
                            <div class="inner-title">${blog.title}</div>
                            <div class="inner-desc">${
                              blog.content
                            }${iframes}</div>
                            <div class="inner-time">
                                <div class="day">
                                    <span class="day">${days} ngày trước</span>
                                    <span class="hour">${hour}h ${hour > 12 ? (hour > 18 ? "tối" : "chiều") : "sáng"}</span>
                                    <span class="minutes">${minutes} phút</span>
                                </div>
                                <div class="time-about">Khoảng ${calculateReadingTime(
                                  blog.content
                                )} đọc</div>
                            </div>
                        </div>
                    </div>`;
    })
    .join("");
  innerWrap.innerHTML += content;
}

document.getElementById("home-button").addEventListener("click", function () {
  window.location.href =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-39/ex01.html";
});

getUserBlogs(userId);
