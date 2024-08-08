const apiUrl = "https://88vk8v-8080.csb.app";

const btnCompleted = document.querySelector(".btn-completed");
const listCompleted = document.querySelector(".list-completed");
const btnCircle = document.querySelector(".fa-circle-right");
const btnAdd = document.querySelector(".btn-add");
const form = document.querySelector(".form");
const btnSave = form.querySelector(".btn-save");
const btnCancel = form.querySelector(".btn-cancel");
let editingTodoId = null;
let todosCache = [];
const fixWord = (word) => {
  return word.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
};

const getTodo = async () => {
  const response = await fetch(apiUrl + "/todos");
  const todos = await response.json();
  todosCache = todos;
  drawTodos(todos);
};

const deleteTodo = async (id) => {
  await fetch(apiUrl + "/todos/" + id, {
    method: "DELETE",
  });
  getTodo();
};

const editTodo = async (id, data) => {
  await fetch(apiUrl + "/todos/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  getTodo();
};

const addTodo = async (data) => {
  await fetch(apiUrl + "/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  getTodo();
};

const nameFind = () => {
  const inputFind = document.querySelector(".inner-search .search");

  inputFind.addEventListener("input", function () {
    const query = fixWord(inputFind.value.toLowerCase());
    const filteredTodos = todosCache.filter((todo) =>
      todo.todo.toLowerCase().includes(query)
    );
    drawTodos(filteredTodos);
  });
};

const updateCompletedCount = (count) => {
  const countSpan = document.querySelector(".btn-completed .count");
  countSpan.textContent = count;
};

const drawTodos = (todos) => {
  const todoList = document.querySelector("#todo-list");
  const completedList = document.querySelector(".list-completed");

  const activeTodos = todos.filter((item) => !item.completed);
  const completedTodos = todos.filter((item) => item.completed);

  updateCompletedCount(completedTodos.length);

  const activeTodoHTML = activeTodos
    .map((item) => {
      return `
      <li class="todo-item" data-id="${item.id}">
        <div class="content">${fixWord(item.todo)}</div>
        <div class="inner-list">
          <i class="fa-solid fa-trash-can"></i>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-check-to-slot"></i>
        </div>
      </li>
      `;
    })
    .join("");

  const completedTodoHTML = completedTodos
    .map((item) => {
      return `
      <li class="item-completed" data-id="${item.id}">
        <div class="content">${fixWord(item.todo)}</div>
        <div class="inner-list">
          <i class="fa-solid fa-trash-can"></i>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-check-to-slot active"></i>
        </div>
      </li>
      `;
    })
    .join("");

  todoList.innerHTML = activeTodoHTML;
  completedList.innerHTML = completedTodoHTML;

  document.querySelectorAll(".fa-trash-can").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.closest("li").getAttribute("data-id");
      deleteTodo(id);
    });
  });

  document.querySelectorAll(".fa-pen-to-square").forEach((btn) => {
    btn.addEventListener("click", function () {
      const todoItem = this.closest("li");
      const id = todoItem.getAttribute("data-id");
      const currentTodo = todoItem.querySelector(".content").textContent;

      form.classList.add("active");
      const inputElement = form.querySelector("input[name='todo']");
      inputElement.value = currentTodo;

      editingTodoId = id;
    });
  });

  document.querySelectorAll(".fa-check-to-slot").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.closest("li").getAttribute("data-id");
      const isCompleted = this.classList.contains("active");

      editTodo(id, { completed: !isCompleted });
    });
  });
};

btnCompleted.addEventListener("click", function () {
  listCompleted.classList.toggle("active");
  btnCircle.classList.toggle("active");
});

btnAdd.addEventListener("click", function () {
  form.classList.add("active");
  editingTodoId = null;
  form.querySelector("input[name='todo']").value = "";
});

btnSave.addEventListener("click", async function (e) {
  e.preventDefault();
  const inputElement = form.querySelector("input[name='todo']");
  const todoValue = inputElement.value.trim();

  if (todoValue) {
    if (editingTodoId) {
      await editTodo(editingTodoId, { todo: todoValue });
    } else {
      await addTodo({ todo: todoValue, completed: false });
    }
    inputElement.value = "";
    form.classList.remove("active");
  } else {
    alert("vui lòng nhập thông tin");
  }
});

btnCancel.addEventListener("click", function () {
  form.classList.remove("active");
});

getTodo();
nameFind();
