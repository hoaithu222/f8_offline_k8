const serverApi = "http://localhost:3000";

// Lấy danh sách các user
const getUsers = async (params = {}) => {
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }

  try {
    const response = await fetch(serverApi + "/users" + query);
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
// xóa 1 user
const deleteUser = (id) => {
  Swal.fire({
    title: "Bạn chắc chắn không?",
    text: "Nếu xóa thì không thể khôi phục lại!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Xóa!",
    cancelButtonText: "Hủy",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // await sẽ theo hàm gần nhất với nó
      const response = await fetch(`${serverApi}/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        getUsers(); // Cập nhật lại danh sách người dùng
        Swal.fire({
          title: "Đã xóa!",
          text: "Người dùng đã bị xóa.",
          icon: "success",
        });
      }
    }
  });
};
// Hiển thị danh sách user ra giao diện
const renderUser = (users) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email, status }, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${email}</td>
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
    if (action === "delete" && id) {
      deleteUser(id);
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

const addEventFilterForm = () => {
  const form = document.querySelector(".filter-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const { status, keyword } = Object.fromEntries(new FormData(form));
    const params = {};
    if (status === "active" || status === "inactive") {
      params.status = status;
    }
    if (keyword) {
      params.q = keyword;
    }
    getUsers(params);
  });
};
// sắp xếp
const addEventSort = () => {
  const sortItems = document.querySelectorAll(".sort-item");
  sortItems.forEach((sortItem) => {
    sortItem.addEventListener("click", (e) => {
      const value = e.target.dataset.value;
      const itemActive = document.querySelector(".sort-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      e.target.classList.add("active");
      const params = {
        _sort: "id",
        _order: value === "latest" ? "desc" : "asc",
      };
      getUsers(params);
    });
  });
};
handleAddUser();
getUsers({ _sort: "id", _order: "desc" });
handleUpdateUser();
addEventFilterForm();
addEventSort();
