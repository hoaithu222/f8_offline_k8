// Địa chỉ API của máy chủ
const serverApi = `http://localhost:3000`;

// Hàm để thay thế các ký tự đặc biệt HTML để tránh lỗi hiển thị
const escapeHtml = (str) => {
  return str
    .replace(/&/g, "&amp;") // Thay thế '&' bằng '&amp;'
    .replace(/</g, "&lt;") // Thay thế '<' bằng '&lt;'
    .replace(/>/g, "&gt;") // Thay thế '>' bằng '&gt;'
    .replace(/"/g, "&quot;") // Thay thế '"' bằng '&quot;'
    .replace(/'/g, "&#039;"); // Thay thế "'" bằng '&#039;'
};

// Hàm để lấy danh sách người dùng từ API với các tham số lọc
const getUsers = async (params = {}) => {
  // Tạo chuỗi truy vấn từ các tham số
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }
  console.log(query);

  try {
    // Gửi yêu cầu đến API và nhận dữ liệu
    const response = await fetch(serverApi + "/users" + query);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    const totalRecords = response.headers.get("x-total-count");

    // Tính tổng số trang
    data.totalPages = Math.ceil(totalRecords / params._limit);
    data.recordNumber = users.length;

    // Hiển thị bảng người dùng và phân trang
    renderTable(users);
    renderPagination(data.totalPages);
  } catch (error) {
    console.error(error.message);
  }
};

// Hàm để lấy thông tin chi tiết của một người dùng theo ID
const getUser = async (id) => {
  try {
    if (!id) {
      throw new Error("ID not exist");
    }

    const response = await fetch(`${serverApi}/users/${id}`);

    if (!response.ok) {
      throw new Error("User not exist");
    }

    const user = await response.json();
    fillUserFormUpdate(user);
  } catch (error) {
    alert(error.message);
  }
};

// Hàm để thêm người dùng mới vào hệ thống
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
  } catch {
    return false;
  }
};

// Hàm để cập nhật thông tin của người dùng theo ID
const updateUser = async (id, data) => {
  try {
    if (!id) {
      throw new Error("ID not exist");
    }

    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Update Failed");
    }

    getUsers(params); // Cập nhật lại danh sách người dùng
    closeFormUpdate(); // Đóng form cập nhật
  } catch (error) {
    alert(error.message);
  }
};

// Hàm để xóa người dùng theo ID
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
      const response = await fetch(`${serverApi}/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        if (data.totalPages === params._page && data.recordNumber === 1) {
          params._page--; // Chuyển trang khi xóa ở trang cuối
        }
        getUsers(params); // Cập nhật lại danh sách người dùng
        Swal.fire({
          title: "Đã xóa!",
          text: "Người dùng đã bị xóa.",
          icon: "success",
        });
      }
    }
  });
};

// Hàm để hiển thị bảng danh sách người dùng
const renderTable = (users) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email, status }, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(name)}</td>
        <td>${escapeHtml(email)}</td>
        <td>
          <span class="badge bg-${
            status === "active" ? "success" : "warning"
          }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span>
        </td>
        <td><button class="btn btn-warning" data-id="${id}" data-action="edit">Sửa</button></td>
        <td><button class="btn btn-danger" data-id="${id}" data-action="delete">Xóa</button></td>
      </tr>`
    )
    .join("")}`;
};

// Hàm để hiển thị phân trang
const renderPagination = (totalPages) => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.innerHTML = `<ul class="pagination pagination-sm">
      ${
        params._page > 1
          ? `<li class="page-item">
        <a class="page-link page-prev" href="#" aria-label="Previous">
          &laquo;
        </a>
      </li>`
          : ""
      }
      ${Array.from(Array(totalPages).keys())
        .map(
          (_, index) => `
          <li class="page-item">
            <a class="page-link page-number ${
              index === params._page - 1 ? "active" : ""
            }" href="#">${index + 1}</a>
          </li>`
        )
        .join("")}
      ${
        params._page < totalPages
          ? `<li class="page-item">
        <a class="page-link page-next" href="#" aria-label="Next">
          &raquo;
        </a>
      </li>`
          : ""
      }
    </ul>`;
};

// Hàm để xử lý sự kiện gửi form thêm hoặc cập nhật người dùng
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);

    if (!form.dataset.id) {
      const status = await addUser(formData);
      if (status) {
        params._page = 1;
        params._order = "desc";
        getUsers(params);
        form.reset();
      } else {
        alert("Thêm thất bại");
      }
    } else {
      const id = form.dataset.id;
      updateUser(id, formData);
    }
  });
};

// Hàm để xử lý sự kiện nhấp vào các nút sửa và xóa trong bảng
const addEventActionBtn = () => {
  const tbody = document.querySelector(".table tbody");
  tbody.addEventListener("click", ({ target }) => {
    if (target.dataset.action === "edit") {
      getUser(target.dataset.id);
    }
    if (target.dataset.action === "delete") {
      deleteUser(target.dataset.id);
    }
  });
};

// Hàm để điền thông tin người dùng vào form cập nhật
const fillUserFormUpdate = ({ id, name, email, status }) => {
  const form = document.querySelector(".form-update");
  form.dataset.id = id;
  form.previousElementSibling.innerText = `Cập nhật người dùng`;
  form.elements.name.value = name;
  form.elements.email.value = email;
  form.elements.status.value = status;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn", "btn-danger");
  closeBtn.innerText = "Hủy";

  if (!form.lastElementChild.classList.contains("btn-danger")) {
    form.append(closeBtn);
  }

  closeBtn.addEventListener("click", () => {
    closeFormUpdate();
    closeBtn.remove();
  });
};

// Hàm để đóng form cập nhật và chuyển lại thành form thêm người dùng
const closeFormUpdate = () => {
  const form = document.querySelector(".form-update");
  form.reset();
  delete form.dataset.id;
  form.previousElementSibling.innerText = `Thêm người dùng`;
};

// Hàm để xử lý sự kiện gửi form lọc người dùng
const addEventFilterForm = () => {
  const form = document.querySelector(".filter-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { status, keyword } = Object.fromEntries([...new FormData(form)]);

    if (status === "active" || status === "inactive") {
      params.status = status;
    } else {
      delete params.status;
    }

    if (keyword) {
      params.q = keyword;
    } else {
      delete params.q;
    }

    getUsers(params);
  });
};

// Hàm để xử lý sự kiện nhấp vào các nút sắp xếp
const addEventSort = () => {
  const sortItems = document.querySelectorAll(".sort-item");
  sortItems.forEach((sortItem) => {
    sortItem.addEventListener("click", (e) => {
      const itemActive = document.querySelector(".sort-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      e.target.classList.add("active");
      const value = e.target.dataset.value;
      params._order = value === "latest" ? "desc" : "asc";
      getUsers(params);
    });
  });
};

// Hàm để xử lý sự kiện thay đổi trang phân trang
const addEventChangePagination = () => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page-number")) {
      const pageNumber = +e.target.innerText;
      params._page = pageNumber;
      getUsers(params);
    }
    if (e.target.classList.contains("page-prev")) {
      params._page--;
      getUsers(params);
    }
    if (e.target.classList.contains("page-next")) {
      params._page++;
      getUsers(params);
    }
  });
};

// Khởi tạo các tham số và dữ liệu ban đầu
const params = { _sort: "id", _order: "desc", _limit: 2, _page: 1 };
const data = {
  totalPages: 1,
  recordNumber: 0,
};

// Gọi các hàm khởi tạo
getUsers(params);
addEventFormSubmit();
addEventActionBtn();
addEventFilterForm();
addEventSort();
addEventChangePagination();
