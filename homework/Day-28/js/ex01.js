document.addEventListener("DOMContentLoaded", function () {
    var btnEl = document.querySelector(".btn");
    var inputEl = document.querySelector(".name-task");

    btnEl.addEventListener("click", function (e) {
        e.preventDefault();
        var taskName = inputEl.value.trim();
        if (taskName) {
            addTask(taskName);
            inputEl.value = "";
        }
    });

    function addTask(taskName) {
        var menu = document.querySelector(".menu");

        var li = document.createElement("li");
        li.innerHTML = `
            <div class="inner-item">
                <p class="inner-name">${taskName}</p>
                <div class="inner-icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `;
        menu.appendChild(li);

        var pName = li.querySelector(".inner-name");
        var editIcon = li.querySelector(".fa-pen-to-square");
        var trashIcon = li.querySelector(".fa-trash");

        pName.addEventListener("click", function () {
            completeTask(pName);
        });

        editIcon.addEventListener("click", function () {
            enableEditTask(li, pName, taskName);
        });

        trashIcon.addEventListener("click", function () {
            menu.removeChild(li);
        });
    }

    function completeTask(pName) {
        if (pName.style.textDecoration === "line-through") {
            pName.style.textDecoration = "none";
            pName.style.color = "white";
        } else {
            pName.style.textDecoration = "line-through";
            pName.style.color = "grey";
        }
    }

    function enableEditTask(li, pName, taskName) {
        var inputEdit = document.createElement("input");
        var saveButton = document.createElement("button");

        inputEdit.type = "text";
        inputEdit.value = taskName;
        inputEdit.classList.add("name-task");

        var inputCssStyles = {
            width: "70%",
            padding: "6px",
            backgroundColor: "#1A1A40",
            color: "#fff",
            fontSize: "16px",
            border: "1.5px solid #8758FF",
            outline: "none"
        };

        Object.assign(inputEdit.style, inputCssStyles);

        saveButton.textContent = "Add Task";
        saveButton.classList.add("btn");

        var buttonCssStyles = {
            backgroundColor: "#8758FF",
            color: "#fff",
            fontSize: "16px",
            padding: "6px 10px",
            border: "1.5px solid #8758FF",
            cursor: "pointer",
            marginBottom: "10px"
        };

        Object.assign(saveButton.style, buttonCssStyles);

        li.innerHTML = "";
        li.appendChild(inputEdit);
        li.appendChild(saveButton);

        saveButton.addEventListener("click", function () {
            var updatedTaskName = inputEdit.value.trim();
            if (updatedTaskName) {
                pName.textContent = updatedTaskName;

                li.innerHTML = `
                    <div class="inner-item">
                        <p class="inner-name">${updatedTaskName}</p>
                        <div class="inner-icon">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                `;

                var newPName = li.querySelector(".inner-name");
                var newEditIcon = li.querySelector(".fa-pen-to-square");
                var newTrashIcon = li.querySelector(".fa-trash");

                newPName.addEventListener("click", function () {
                    completeTask(newPName);
                });

                newEditIcon.addEventListener("click", function () {
                    enableEditTask(li, newPName, updatedTaskName);
                });

                newTrashIcon.addEventListener("click", function () {
                    li.parentElement.removeChild(li);
                });
            }
        });
    }
});
