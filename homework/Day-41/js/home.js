import { serverApi, getBlogs, drawBlogs } from "./component.js";

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

document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-create")) {
    e.preventDefault();
    const registerForm = document.querySelector(".form-create");
    const { title, content } = Object.fromEntries(new FormData(registerForm));
    try {
      const addBlogNew = await addBlogs({ title, content });

      if (addBlogNew.error) {
        console.error(addBlogNew.error);
      } else {
        console.log(addBlogNew);
        const allBlogs = await getBlogs();
        drawBlogs([addBlogNew.data], true);
        registerForm.reset();
        document
          .querySelector(".create-blog .box-form")
          .classList.remove("active");
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

const showProfile = async () => {
  const user = await getProfile();
  const profileNameEl = document.querySelector(".profile-name");

  if (user) {
    profileNameEl.innerText = user.data.name;
  } else {
    const newToken = await sendRefreshToken();
    if (newToken.data.token) {
      localStorage.setItem("auth_token", JSON.stringify(newToken.data.token));
      showProfile();
    } else {
      localStorage.removeItem("auth_token");
      handleLogout();
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

const handleLogout = (e) => {
  if (e) e.preventDefault();
  localStorage.removeItem("auth_token");

  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/ex01.html";

  window.location.href = hostname === "127.0.0.1" ? localUrl : gitUrl;
};

document
  .querySelector(".button-logout")
  .addEventListener("click", handleLogout);

const btnCreateEl = document.querySelector(".post-blog");
const formCreateEl = document.querySelector(".create-blog .box-form");
const btnClose = document.querySelector(".create-blog .close i");
btnClose.addEventListener("click", () => {
  formCreateEl.classList.remove("active");
});
btnCreateEl.addEventListener("click", () => {
  formCreateEl.classList.add("active");
});

showProfile();
