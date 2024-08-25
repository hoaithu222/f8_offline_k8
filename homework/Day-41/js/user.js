import { serverApi, getBlogs, drawBlogs } from "./http.js";

// Hàm hiển thị thông tin hồ sơ người dùng

const showProfile = () => {
  const innerUser = document.querySelector(".info-user");

  innerUser.innerHTML = `
  <p class="info">Thông tin user : <i class="fa-solid fa-circle-down"></i></p>
  <div class="name">
  
                <img src="./image/image1.jpg" alt="avatar" width="130px" style="border-radius: 50%;" />
                <h3>${localStorage.getItem("userName")}</h3>
            </div>`;
};

// xử lý button home
const btnHome = document.querySelector(".button-home");
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
showProfile();
getBlogs();
