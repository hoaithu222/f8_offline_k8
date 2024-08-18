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
cancelBtn.className = `btn btn-danger`;
cancelBtn.innerText = `Hủy`;
cancelBtn.type = "button";
const getUsers = async (query = {}) => {
  try {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    const response = await fetch(`${serverApi}/users${queryString}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);
    //Tính số trang = Math.ceil(Tổng số bản ghi / Số bản ghi của 1 trang)
    const totalPages = Math.ceil(
      response.headers.get("x-total-count") / query._limit
    );
    renderPagination(totalPages);
  } catch (e) {
    console.log(e);
  }
};
const getUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
// getUser(1);
const addUser = async (data) => {
  try {
    const response = await fetch(`${serverApi}/users`, {
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
  } catch {
    return false;
  }
};
const deleteUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch {
    return false;
  }
};
const render = (users) => {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = `${users
    .map(({ id, name, email, status }, index) => {
      return `<tr>
            <td>${index + 1}</td>
            <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td><span class="badge bg-${
              status === "active" ? "success" : "warning"
            }">${
        status === "active" ? "Kích hoạt" : "Chưa kích hoạt"
      }</span></td>
            <td>
              <button class="btn btn-warning btn-sm" data-id="${id}" data-action="update">Sửa</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" data-id="${id}" data-action="delete">Xóa</button>
            </td>
          </tr>`;
    })
    .join("")}`;
};
const renderPagination = (totalPages) => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.innerHTML = `<ul class="pagination d-flex justify-content-end">
          ${
            query._page > 1
              ? `<li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" data-type="prev">
              &laquo;
            </a>
          </li>`
              : ""
          }
          ${Array.from(Array(totalPages).keys())
            .map((_, index) => {
              const page = index + 1;
              return `<li class="page-item ${
                page === query._page ? "active" : ""
              }"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`;
            })
            .join("")}
          ${
            query._page < totalPages
              ? `<li class="page-item">
            <a class="page-link" href="#" aria-label="Next" data-type="next">
              &raquo;
            </a>
          </li>`
              : ""
          }
        </ul>`;
};
const handleAddUser = () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const id = form.dataset.id;
    if (!id) {
      const status = await addUser(formData);
      if (status) {
        //Thêm thành công
        query._page = 1; // chuyển về trang 1
        query._order = "desc";
        // chuyển thành sắp xếp mới nhất
        getUsers(query);
        form.reset();
      }
    } else {
      const status = await updateUser(id, formData);
      if (status) {
        getUsers(query);
        switchFormAdd();
      }
    }
  });
};
const switchFormAdd = () => {
  const form = document.querySelector(".update-form");
  form.reset();
  const h3 = form.querySelector("h3");
  h3.innerText = `Thêm người dùng`;
  delete form.dataset.id;
  cancelBtn.remove();
};
const handleUpdateUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "update") {
      const user = await getUser(id);
      if (!user) {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
        return;
      }
      changeFormUpdate(user);
    }
  });
};
const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = `Cập nhật người dùng`;
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
const handleDeleteUser = () => {
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "delete" && confirm("Chắc chưa?")) {
      //Call API
      const status = await deleteUser(id);
      if (!status) {
        alert("Đã có lỗi xảy ra");
        return;
      }
      const totalUser = document.querySelector("tbody tr").length - 1;
      getUsers(query);
      if (totalUser === 0 && query._page > 1) {
        query._page--;
        getUsers(query);
      }

      getUsers(query);
    }
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

const renderSort = () => {
  const btnSortEl = document.querySelector(".btn-sort");
  btnSortEl.innerHTML = `<button class="btn btn-primary btn-new btn-sm active " data-sort="latest">Mới nhất</button>
                    <button class="btn btn-primary btn-old btn-sm " data-sort="oldest">Cũ nhất</button>`;
};
const handleSort = () => {
  const btnSortEl = document.querySelector(".btn-sort");
  const allowed = ["latest", "oldest"];
  btnSortEl.addEventListener("click", (e) => {
    const sortValue = e.target.dataset.sort;
    if (allowed.includes(sortValue)) {
      //Xử lý gọi API
      query._order = sortValue === "latest" ? "desc" : "asc";
      getUsers(query);
      //Xử lý giao diện
      // const btnActive = btnSortEl.querySelector(".active");
      // if (btnActive) {
      //   btnActive.classList.remove("active");
      // }
      // e.target.classList.add("active");
      renderSort();
    }
  });
};
const handleNavigatePagination = () => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const type = e.target.dataset.type;
    if (page) {
      query._page = +page;
      getUsers(query);
    }

    if (type === "prev") {
      query._page--;
      getUsers(query);
    }

    if (type === "next") {
      query._page++;
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
cancelUpdateForm();
handleDeleteUser();
handleSearch();
handleSort();
handleNavigatePagination();
renderSort();

// bình thường các api sẽ ở trạng thái public

// tuy nhiên muốn bảo vệ api sẽ cần phải thông qua các hình thức xác thực
/*
API KEY 
- Basic Auth
- Bearer --> phụ thuộc người dùng đăng nhập 
- OAuth 2.0
-

*/
