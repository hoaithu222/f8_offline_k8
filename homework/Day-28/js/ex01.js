document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".btn");
  const taskInput = document.querySelector(".task-name");

  taskInput.focus(); // Focus input khi load trang

  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName) {
      addTask(taskName);
      taskInput.value = "";
      taskInput.focus(); // Focus lại input sau khi thêm task
    }
  });

  function addTask(taskName) {
    const taskMenu = document.querySelector(".task-menu");

    const li = document.createElement("li");
    li.innerHTML = `
            <div class="inner-item">
                <p class="inner-name">${escapeHtml(taskName)}</p>
                <div class="inner-icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;
    taskMenu.appendChild(li);

    const taskNameElement = li.querySelector(".inner-name");
    const editIcon = li.querySelector(".fa-pen-to-square");
    const trashIcon = li.querySelector(".fa-trash");

    taskNameElement.addEventListener("click", function () {
      toggleCompleteTask(taskNameElement);
    });

    editIcon.addEventListener("click", function () {
      enableEditTask(li, taskNameElement, taskName);
    });

    trashIcon.addEventListener("click", function () {
      taskMenu.removeChild(li);
    });
  }

  function toggleCompleteTask(taskElement) {
    if (taskElement.style.textDecoration === "line-through") {
      taskElement.style.textDecoration = "none";
      taskElement.style.color = "white";
    } else {
      taskElement.style.textDecoration = "line-through";
      taskElement.style.color = "grey";
    }
  }

  function enableEditTask(taskElement, taskNameElement, taskName) {
    const inputEdit = document.createElement("input");
    const saveButton = document.createElement("button");

    inputEdit.type = "text";
    inputEdit.value = taskName;
    inputEdit.classList.add("task-name");

    Object.assign(inputEdit.style, {
      width: "70%",
      padding: "6px",
      backgroundColor: "#1A1A40",
      color: "#fff",
      fontSize: "16px",
      border: "1.5px solid #8758FF",
      outline: "none",
    });

    saveButton.textContent = "Save Task";
    saveButton.classList.add("btn");

    Object.assign(saveButton.style, {
      backgroundColor: "#8758FF",
      color: "#fff",
      fontSize: "16px",
      padding: "6px 10px",
      border: "1.5px solid #8758FF",
      cursor: "pointer",
      marginBottom: "10px",
    });

    taskElement.innerHTML = "";
    taskElement.appendChild(inputEdit);
    taskElement.appendChild(saveButton);

    inputEdit.focus(); // Auto focus vào input khi sửa task

    saveButton.addEventListener("click", function () {
      const updatedTaskName = inputEdit.value.trim();
      if (updatedTaskName) {
        taskNameElement.textContent = escapeHtml(updatedTaskName);

        taskElement.innerHTML = `
                    <div class="inner-item">
                        <p class="inner-name">${escapeHtml(updatedTaskName)}</p>
                        <div class="inner-icon">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                `;

        const newTaskNameElement = taskElement.querySelector(".inner-name");
        const newEditIcon = taskElement.querySelector(".fa-pen-to-square");
        const newTrashIcon = taskElement.querySelector(".fa-trash");

        newTaskNameElement.addEventListener("click", function () {
          toggleCompleteTask(newTaskNameElement);
        });

        newEditIcon.addEventListener("click", function () {
          enableEditTask(taskElement, newTaskNameElement, updatedTaskName);
        });

        newTrashIcon.addEventListener("click", function () {
          taskElement.parentElement.removeChild(taskElement);
        });
      } else {
        taskElement.parentElement.removeChild(taskElement); // Xoá task nếu nội dung trống
      }
    });
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (match) {
      const escapeChars = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return escapeChars[match];
    });
  }
});
