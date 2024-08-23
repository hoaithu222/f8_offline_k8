import { getBlogs } from "./component.js";

// xử lý button
const btnLogin = document.querySelector(".btn-from");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const hostname = window.location.hostname;
  const localUrl = "http://127.0.0.1:5500/homework/Day-41/form.html";
  const gitUrl =
    "https://hoaithu222.github.io/f8_offline_k8/homework/Day-41/form.html";
  const redirectUrl = hostname === "127.0.0.1" ? localUrl : gitUrl;
  window.location.href = redirectUrl;
});

getBlogs();
