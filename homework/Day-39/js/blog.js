import {
  calculateReadingTime,
  extractYouTubeIDs,
  getTime,
  toggleLoading,
} from "./utils.js";

var urlApi = "https://94grdx-8080.csb.app/blogs";

function getBlogId() {
  const searchParams = new URLSearchParams(window.location.search);
  const blogId = searchParams.get("_id");
  if (blogId) {
    fetchBlogDetails(blogId);
  } else {
    console.error("Blog ID không tồn tại");
  }
}

function fetchBlogDetails(blogId) {
  toggleLoading(true);
  fetch(`${urlApi}?_id=${blogId}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Không tìm thấy blog với ID này");
      }
      return response.json();
    })
    .then(function (result) {
      toggleLoading(false);
      handleBlog(result);
    })
    .catch(function (e) {
      toggleLoading(false);
      console.error(e);
    });
}
document.getElementById("home-button").addEventListener("click", function () {
  window.location.href =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-39/ex01.html";
});
function handleBlog(blogs) {
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
                       <i class="fa-solid fa-user" style="color: #e0a2ec;"></i>
                        <span class="name">${blog.userId.name}</span>
                    </div>
                    <div class="inner-content">
                        <div class="inner-title">${blog.title}</div>
                        <div class="inner-desc">${blog.content}${iframes}</div>
                        <div class="inner-link">
                           <a href="https://hoaithu222.github.io/f8_offline_k8/homework/Day-39/blog/user.html?userId=${
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
  innerWrap.innerHTML += content;
}

getBlogId();
