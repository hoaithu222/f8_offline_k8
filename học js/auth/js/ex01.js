import { requestLogin } from "./http.js";

const root = document.querySelector(".root");
const render = () => {
  root.innerHTML = `
  <h2 class="text-center">Đăng nhập</h2>
        <form action="" class="login">
       <div class = "msg"></div>
            <div class="mb-3">
                <label for="">Email</label>
                <input type="email" name="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
                <label for="">Mật khẩu</label>
                <input type="password" name="password" class="form-control" placeholder="Password" />
            </div>
            <div class="d-grid">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
  `;
};

const handleLoginForm = () => {
  root.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.target.classList.contains("login")) {
      const msgEl = e.target.querySelector(".msg");
      msgEl.innerHTML = "";
      const dataLogin = Object.fromEntries(new FormData(e.target));
      const response = await requestLogin(dataLogin);

      if (!response) {
        msgEl.innerHTML = `<div class= "alert alert-danger text-center">Email học mật khẩu không chính xác</div>`;
      } else {
        // Thành công lưu token vào bộ nhớ trình duyệt
        localStorage.setItem("user_token", JSON.stringify(response));
        e.target.reset(); // clear form data
      }
    }
  });
};
render();
handleLoginForm();
