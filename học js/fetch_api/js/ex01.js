/*
API 
khi làm việc với web api ==> học http
Client (Front-end) --> API ==> Server(back-end)
Để giao tiếp giữa client và server --> có 2 cách
- XHR
- Fetch
Chuẩn bị server 
-Tìm các dịch vụ Fake
- Cài thư viện và tự fake 

HTTP REQUEST
- URL
- METHOD
- HEADER
- BODY
HTTP RESPONSE 
-BODY --> dữ liệu trả về từ server
-STATUS (Code,Text)
-HEADER



--- đẩy dữ liệu lên 
-BODY 
-STATUS(code,text)
-header


POST,PUT,PATCH   

Đẩy dữ liệu lên body phải có body và có header Content-Type
+ application/x-www-form-urlencoded (name=Hoang+An&email = hoangan.web@gmail.com)
+ multipart/form-data (Text,File)
+multipart/form-data

*/

// const url = `http://localhost:3000/users`;

// const result = fetch(url, {
//   method: "GET",
//   headers: {
//     "x-api-key": "hello",
//   },
// });

// result
//   .then((response) => {
//     return response.json("");
//   })
//   .then((users) => {
//     console.log(users);
//   });

// const serverApi = "http://localhost:3000";

// const getUser = async () => {
//   try {
//     const response = await fetch(serverApi + "/users");
//     if (!response.ok) {
//       throw new Error("Fetch to failed");
//     }
//     const users = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
// const render = (users) => {
//   const tbody = document.querySelector(".table tbody");
//   users.map((users) =>{
//     return
//   })

// };

// getUser();

const serverApi = "http://localhost:3000";

// Lấy danh sách các user
const getUsers = async () => {
  try {
    const response = await fetch(serverApi + "/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    renderUser(users);
  } catch (e) {
    console.log(e.message);
  }
};

// Lấy một user theo ID
const getUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

// Thêm một user mới
const addUser = async (data) => {
  try {
    const response = await fetch(serverApi + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

// Cập nhật thông tin user
const updateUser = async (id, data) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

// Hiển thị danh sách user ra giao diện
const renderUser = (users) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email, status }, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>
          <span class="badge bg-${
            status === "active" ? "success" : "warning"
          }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span>
        </td>
        <td><button class="btn btn-warning" data-id="${id}" data-action="update">Sửa</button></td>
        <td><button class="btn btn-danger" data-id="${id}" data-action="delete">Xóa</button></td>
      </tr>`
    )
    .join("")}`;
};

// Xử lý sự kiện thêm hoặc cập nhật user
const handleAddUser = async () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const id = form.dataset.id;

    if (!id) {
      // Thêm mới người dùng
      const status = await addUser(formData);
      if (status) {
        console.log("Thêm thành công");
        getUsers();
        form.reset();
      } else {
        console.log("Thêm thất bại");
      }
    } else {
      // Cập nhật người dùng
      const status = await updateUser(id, formData);
      if (status) {
        console.log("Cập nhật thành công");
        getUsers(); // Làm mới danh sách người dùng
        switchFormAdd(); // Reset form về trạng thái thêm mới
      } else {
        console.log("Cập nhật thất bại");
      }
    }
  });
};

// reset form
const switchFormAdd = () => {
  const form = document.querySelector(".update-form");
  form.reset();
  const h3 = form.querySelector("h3");
  h3.innerText = "Thêm người dùng";
  delete form.dataset.id;
};

// Xử lý sự kiện khi nhấn nút sửa user
const handleUpdateUser = () => {
  const tbody = document.querySelector(".table tbody");
  tbody.addEventListener("click", async (e) => {
    const action = e.target.dataset.action;
    const id = e.target.dataset.id;
    if (action === "update" && id) {
      const user = await getUser(id);
      if (user) {
        changeFormUpdate(user);
      } else {
        console.log("Đã có lỗi xảy ra, vui lòng thử lại sau");
      }
    }
  });
};

// Thay đổi form thành chế độ cập nhật user
const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = "Cập nhật người dùng";
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.status.value = user.status;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn", "btn-danger");
  closeBtn.innerText = "Hủy";

  if (!form.lastElementChild.classList.contains("btn-danger")) {
    form.append(closeBtn);
  }

  closeBtn.addEventListener("click", () => {
    switchFormAdd();
    closeBtn.remove();
  });
};

// Khởi chạy các hàm cần thiết khi trang được load
handleAddUser();
getUsers();
handleUpdateUser();
