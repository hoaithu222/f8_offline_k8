import {
  calculateReadingTime,
  extractYouTubeIDs,
  getTime,
  toggleLoading,
} from "./utils.js";

var urlApi = "https://mqx3ch-8080.csb.app/blogs";
var currentPage = 1;
var pageSize = 5;
var isFetching = false;

function getBlog(page, size) {
  toggleLoading(true);
  isFetching = true;
  fetch(`${urlApi}?_page=${page}&_limit=${size}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Lỗi không lấy được dữ liệu");
      }
      return response.json();
    })
    .then(function (result) {
      toggleLoading(false);
      renderBlog(result);
      isFetching = false;
    })
    .catch(function (e) {
      toggleLoading(false);
      console.error(e);
      isFetching = false;
    });
}

window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    !isFetching
  ) {
    currentPage++;
    getBlog(currentPage, pageSize);
  }
});

function renderBlog(blogs) {
  const contain = document.querySelector(".inner-wrap");
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
                           <i class="fa-solid fa-user" style="color: #e0a2ec;"></i>
                            <span class="name">${blog.userId.name}</span>
                        </div>
                        <div class="inner-content">
                            <div class="inner-title">${blog.title}</div>
                            <div class="inner-desc">${
                              blog.content
                            }${iframes}</div>
                            <div class="inner-link">
                                <a href="https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/blog/blog.html?_id=${
                                  blog._id
                                }" class="view-more">#view-more ${blog.title}</a>
                                <a href="https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/blog/user.html?userId=${
                                  blog.userId._id
                                }" class="view-user">#${blog.userId.name}</a>
                            </div>
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
  contain.innerHTML += content;
}

getBlog(currentPage, pageSize);
