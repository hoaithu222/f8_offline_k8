import { requestLogin, requestProfile, requestRefreshToken } from "./http.js";
const root = document.querySelector(".root");
const render = async () => {
  if (localStorage.getItem("user_token")) {
    root.innerHTML = `<div class="profile">
        <h2>Chào mừng bạn quay trở lại với F8</h2>
        <ul class="list-unstyled d-flex gap-2">
          <li>Chào bạn: <span class="name">Loading...</span></li>
          <li><a href="#" class="logout">Đăng xuất</a></li>
        </ul>
      </div>`;
    const getProfile = async () => {
      // try {
      //   const { access_token: accessToken, refresh_token: refreshToken } =
      //     JSON.parse(localStorage.getItem("user_token"));
      //   const profile = await requestProfile(accessToken);
      //   // if (!profile) {
      //   //   //Xử lý gọi refresh token
      //   //   // const newToken = await requestRefreshToken(refreshToken);
      //   //   if (!newToken) {
      //   //     throw new Error("Unauthorize"); //Đăng xuất
      //   //   }
      //   //   //Lưu vào localStorage
      //   //   // localStorage.setItem("user_token", JSON.stringify(newToken));
      //   //   // //Gọi lại requestProfile
      //   //   // getProfile();
      //   // } else {
      //   //   const nameEl = root.querySelector(".profile .name");
      //   //   nameEl.innerText = profile.name;
      //   // }

      // } catch (e) {
      //   localStorage.removeItem("user_token");
      //   render();
      // }
      const profile = await requestProfile();
      if (profile) {
        const nameEl = root.querySelector(".profile .name");
        nameEl.innerText = profile.name;
      } else {
        render();
      }
    };
    getProfile();
    const logoutEl = root.querySelector(".profile .logout");
    if (logoutEl) {
      logoutEl.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("user_token");
        render();
      });
    }
    return;
  }
  root.innerHTML = `<h2 class="text-center">Đăng nhập</h2>
      <form action="" class="login">
        <div class="msg"></div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <label for="">Mật khẩu</label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-primary">
          Đăng nhập</button>
        </div>
      </form>`;
};
const handleLoginForm = () => {
  root.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.target.classList.contains("login")) {
      const msgEl = e.target.querySelector(".msg");
      msgEl.innerText = ``;
      const dataLogin = Object.fromEntries(new FormData(e.target));
      //set loading
      const btn = e.target.querySelector("button");
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Loading...`;
      const response = await requestLogin(dataLogin);
      btn.disabled = false;
      btn.innerText = `Đăng nhập`;
      if (!response) {
        msgEl.innerHTML = `<div class="alert alert-danger text-center">Email hoặc mật khẩu không chính xác</div>`;
      } else {
        //Thành công ==> Lưu token vào bộ nhớ trình duyệt
        //Chuyển object ==> JSON
        localStorage.setItem("user_token", JSON.stringify(response));
        e.target.reset(); //Clear form data
        //render
        render();
      }
    }
  });
};
render();
handleLoginForm();

/*
Trong 1 trang bất kỳ request nào cần authorization cần phải thực hiện các bước sau

- Lấy token ở localStorage hoặc cookie
- Gọi API cần lấy dữ liệu hoặc các thao tác khác (Có truyền token lên)
+ Nếu thành công ==> Trả về dữ liệu tương ứng từ API ==> Thực hiện update giao diện
+ Nếu thất bại ==> Gọi API Refresh Token 
 ++ Thành công: Update token mới vào localStorage ==> Gọi lại API đã bị failed ở bước trên
 ++ Thất bại ==> Đăng xuất

 - Request 1 ==> Success
 - Request 2 ==> Failed ==> Refresh Token ==> Request 2
 - Request 3 ==> Failed ==> Refresh Token ==> Request 3
 - Request 4 ==> Failed ==> Refresh Token ==> Request 4

Xử lý đăng xuất
- Call API đăng xuất do back-end cung cấp ==> Lưu token vào blacklist ở phía back-end
- Xóa token ở Storage 
*/
