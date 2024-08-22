import { calculateReadingTime, getTime, handleLogout } from "./component.js";

const serverApi = "https://api-auth-two.vercel.app";
let params = {
  q: "",
  page: 1,
  limit: 10,
};
let allDataLoaded = false;
let isLoading = false;

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
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const getBlogs = async () => {
  if (isLoading || allDataLoaded) return;
  isLoading = true;
  document.querySelector(".loading").classList.add("active");

  try {
    const api = `${serverApi}/blogs?q=${params.q}&page=${params.page}&limit=${params.limit}`;
    const response = await fetch(api);
    const result = await response.json();

    if (result.data.length === 0) {
      allDataLoaded = true;
      document
        .querySelector(".inner-blogs .inner-wrap")
        .insertAdjacentHTML("beforeend", "<p>Không có bài viết nào</p>");
      return;
    }
    drawBlogs(result.data);
    params.page++;
  } catch (e) {
    console.error("Error fetching data:", e);
  } finally {
    isLoading = false;
    document.querySelector(".loading").classList.remove("active");
  }
};

document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-create")) {
    e.preventDefault();
    const registerForm = document.querySelector(".form-create");
    const { title, content } = Object.fromEntries(new FormData(registerForm));
    try {
      const addBlogNew = await addBlogs({ title, content });

      if (addBlogNew.error) {
        console.error(addBlogNew.error);
        // Bạn có thể hiển thị thông báo lỗi cho người dùng ở đây
      } else {
        // Xử lý tạo thành công
        console.log(addBlogNew);
        drawBlogs([addBlogNew.data]);
        registerForm.reset();
        document
          .querySelector(".create-blog .box-form")
          .classList.remove("active"); // Ẩn form sau khi thêm bài viết
      }
    } catch (e) {
      console.log(e);
    }
  }
});

const addBlogs = async (dataBlog) => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");
    const { access_token: accessToken } = tokenData;
    const response = await fetch(`${serverApi}/blogs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBlog),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi đăng bài viết");
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
};

const render = () => {
  const status = !!localStorage.getItem("auth_token");
  const header = document.querySelector(".header");
  const createBoxEl = document.querySelector(".create-blog");
  createBoxEl.innerHTML = status
    ? `<div class="container">
            <div class="box-form form">
                <form class="form-create">
                    <div class="close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="input">
                        <label for="title">Enter Your title</label>
                        <input type="text" name="title" id="title" placeholder="Please enter your title">
                    </div>
                    <div class="textarea">
                        <label for="content">Enter Your content</label>
                        <textarea name="content" id="content" placeholder="Enter content here"></textarea>
                    </div>
                    <div class="submit ">
                        <button type="submit" class="btn-save button-two">Save</button>
                    </div>
                </form>
            </div>
        </div>`
    : ``;
  header.innerHTML = status
    ? `<div class="container">
          <div class="inner-wrap">
              <div class="logo">
                  <a href="#"><img src="image/photo.webp" alt="logo" /></a>
              </div>
              <div class="item">
                  <button class="button-logout">Sign Out</button>
                  <button class="post-blog button-two">Tạo bài viết</button>
                  <div class="user">
                      <img src="image/image1.jpg" alt="avatar" />
                      <p class="profile-name">Loading...</p>
                  </div>
              </div>
          </div>
      </div>`
    : `<div class="container">
          <div class="inner-wrap">
              <div class="logo">
                  <a href="#"><img src="image/photo.webp" alt="logo" /></a>
              </div>
              <div class="btn-from button">Login</div>
          </div>
      </div>`;

  if (!status) {
    document.querySelector(".btn-from").addEventListener("click", (e) => {
      e.preventDefault();
      const redirectUrl =
        window.location.hostname === "127.0.0.1"
          ? "http://127.0.0.1:5500/homework/Day_/form.html"
          : "https://hoaithu222.github.io/f8_offline_k8/homework/Day_/form.html";
      window.location.href = redirectUrl;
    });
  } else {
    document
      .querySelector(".button-logout")
      .addEventListener("click", handleLogout);
    const btnCreateEl = document.querySelector(".post-blog");
    const formCrateEl = document.querySelector(".create-blog .box-form");
    const btnClose = document.querySelector(".create-blog .close i");
    btnClose.addEventListener("click", () => {
      formCrateEl.classList.remove("active");
    });
    btnCreateEl.addEventListener("click", () => {
      formCrateEl.classList.add("active");
    });
  }
};

const drawBlogs = (blogs) => {
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
            <h3 class="user-name">${blog.userId.name}</h3>
          </div>
          <div class="inner-content">
            <p class="inner-title">${truncatedTitle}</p>
            <p class="content">${truncatedContent}</p>
            <div class="inner-link">
              <a href="" class="view-more button-one">#view-more ${truncatedTitle}</a>
              <a href="" class="view-user button-one">#${truncatedUserName}</a>
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
                blog.content
              )} đọc</div>
            </div>
          </div>
        </div>`;
    })
    .join("");
  wrapEl.insertAdjacentHTML("afterbegin", content);
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
observer.observe(document.querySelector(".footer"));

const getProfile = async () => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    const { access_token: accessToken } = tokenData;
    const response = await fetch(`${serverApi}/users/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return false;
  }
};

const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");

  if (user) {
    profileNameEl.innerText = user.data.name;
  } else {
    const newToken = await sendRefreshToken();
    if (newToken) {
      localStorage.setItem("auth_token", JSON.stringify(newToken.data.token));
      showProfile();
    } else {
      localStorage.removeItem("auth_token");
      // handleLogout();
    }
  }
};

const sendRefreshToken = async () => {
  try {
    const tokenData = JSON.parse(localStorage.getItem("auth_token"));
    if (!tokenData) throw new Error("Token not found");

    const { refresh_token: refreshToken } = tokenData;
    const response = await fetch(`${serverApi}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false;
  }
};

showProfile();
render();
getBlogs();
