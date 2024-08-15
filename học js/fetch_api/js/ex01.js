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

const serverApi = "http://localhost:3000";
const cancelBtn = document.createElement("button");
cancelBtn.className = "btn btn-danger";
cancelBtn.innerText = "Hủy";

// Lấy danh sách các user
const getUsers = async (query = {}) => {
  try {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    console.log(queryString);
    const response = await fetch(`${serverApi}/users${queryString}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    renderUser(users);
    // tính tổng số trang =
    const totalPages = Math.ceil(
      response.headers.get("x-total-count") / query._limit
    );
    renderPagination(totalPages);
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
const deleteUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
const renderPagination = (totalPages) => {
  console.log(totalPages);
  const paginationView = document.querySelector(".pagination-view");
  console.log(paginationView);
  paginationView.innerHTML = `<ul class="pagination d-flex justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" data-type = "prev">
        
      </a>
    </li>
    ${Array.from(Array(totalPages).keys())
      .map((_, index) => {
        console.log(1);
        const page = index + 1;
        return ` <li class="page-item" ${page === query._page ? "active" : ""}>
        <a class="page-link" href="#">
        ${page}
        </a>
      </li>`;
      })
      .join("")}
    
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>`;
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
  cancelBtn.remove();
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
    // if (action === "delete" && id) {
    //   const isConfirm = confirm("Bạn có muốn xóa không ?");
    //   if (isConfirm) {
    //     const status = await deleteUser(id);
    //     if (status) {
    //       console.log("Đã xóa thành công");
    //       getUsers();
    //     }
    //   }
    // }
  });
};

const handleDeleteUser = () => {
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "delete" && confirm("Bạn chắc chắn muốn xóa!")) {
      const status = await deleteUser(id);
      if (!status) {
        console.log("đã có lỗi xảy ra");
        return;
      }
      getUsers();
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
  form.append(cancelBtn);
};

const cancelUpdateForm = () => {
  cancelBtn.addEventListener("click", () => {
    switchFormAdd();
  });
};

const debounce = (callback, timeout = 500) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

const handleSearch = () => {
  const keywordEl = document.querySelector(".keyword");
  keywordEl.addEventListener(
    "input",
    debounce((e) => {
      const keyword = e.target.value;
      query.q = keyword;
      getUsers(query);
    })
  );
};

const handleSort = () => {
  const btnSortEl = document.querySelector(".btn-sort");
  const allowed = ["latest", "oldest"];
  btnSortEl.addEventListener("click", (e) => {
    const sortValue = e.target.dataset.sort;
    if (allowed.includes(sortValue)) {
      // xử lấy Api
      query._order = sortValue === "latest" ? "desc" : "asc";
      getUsers(query);
      // xử lý giao diện
      const btnActive = btnSortEl.querySelector(".active");
      if (btnActive) {
        btnActive.classList.remove("active");
      }
      e.target.classList.add("active");
    }
  });
};
const handlePagination = () => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    if (page) {
      query._page = +page;
      getUsers(query);
    }
  });
};
const query = {
  _sort: "id",
  _order: "desc",
  _limit: 3,
  _page: 1,
};

getUsers(query);
handleAddUser();
handleUpdateUser();
handleDeleteUser();
handleSearch();
handleSort();
handlePagination();
