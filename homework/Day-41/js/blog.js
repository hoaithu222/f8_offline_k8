import {
  escapeHtml,
  getRandomAvatar,
  getTime,
  calculateReadingTime,
  formatContent,
} from "./component.js";

const serverApi = "https://api-auth-two.vercel.app";
const title = document.querySelector(".title");
title.innerHTML = localStorage.getItem("blogTitle");

const getBlog = async () => {
  try {
    const blogId = localStorage.getItem("blogId");
    const api = `${serverApi}/blogs/${blogId}`;
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(Error);
    }
    const result = await response.json();
    console.log(result);
    drawBlog(result.data);
  } catch (e) {
    console.log(e);
    return false;
  }
};
const drawBlog = (blog) => {
  const wrapEl = document.querySelector(".inner-blogs .inner-wrap");
  const avatar = getRandomAvatar();
  const { days, hoursBefore, hour, minutes } = getTime(blog.timeUp);
  wrapEl.innerHTML = `
        <div class="inner-box">
          <div class="user-info">
            <img src="${avatar}" alt="avatar">
            <h3 class="user-name">${escapeHtml(blog.userId.name)}</h3>
          </div>
          <div class="inner-content">
            <p class="inner-title">${escapeHtml()}</p>
            <p class="content">${formatContent(blog.content)}</p>
             <div class="inner-link">
              <a href="#" class="view-user button-one" data-user-id="${
                blog.userId._id
              }" data-user-name="${escapeHtml(
    blog.userId.name
  )}";>#${escapeHtml(blog.userId.name)}</a>
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
  document.querySelectorAll(".view-user").forEach((viewUser) => {
    viewUser.addEventListener("click", function (e) {
      e.preventDefault();
      const userId = this.getAttribute("data-user-id");
      const userName = this.getAttribute("data-user-name");
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", userName);
      const hostname = window.location.hostname;
      const localUrl = `http://127.0.0.1:5500/homework/Day-41/page-user.html`;
      const gitUrl = `https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/page-user.html`;
      window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
    });
  });
};
getBlog();

// xử lsy button

const btnHome = document.querySelector(".btn-home");
btnHome.addEventListener("click", () => {
  if (localStorage.getItem("auth_token")) {
    const hostname = window.location.hostname;
    const localUrl = "http://127.0.0.1:5500/homework/Day-41/home.html";
    const gitUrl =
      "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/home.html";

    window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
  } else {
    const hostname = window.location.hostname;
    const localUrl = "http://127.0.0.1:5500/homework/Day-41/index.html";
    const gitUrl =
      "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/index.html";

    window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
  }
});
