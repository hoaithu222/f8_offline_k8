const serverApi = "https://api-auth-two.vercel.app";

// Tạo tài khoản
const createUser = async (loginData) => {
  try {
    const response = await fetch(`${serverApi}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      throw new Error("Lỗi khi đăng kí");
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

// xử lý form login

document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-login")) {
    e.preventDefault();
    const loginRegister = document.querySelector(".form-login");
    const { email, passwords } = Object.fromEntries(
      new FormData(loginRegister)
    );
    e.target.reset();
  }
});

// xử lý form register
document.body.addEventListener("submit", async (e) => {
  if (e.target.classList.contains("form-register")) {
    e.preventDefault();
    const loginRegister = document.querySelector(".form-register");
    const { email, password, name } = Object.fromEntries(
      new FormData(loginRegister)
    );
    const registerData = await createUser({ email, password, name });
    console.log(registerData);
    e.target.reset();
  }
});
