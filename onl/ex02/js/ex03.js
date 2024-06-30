var btn = document.querySelector(".btn");
var contentEl = document.querySelector(".content");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    var contentElValue = contentEl.value;
    if (!contentElValue) {
        alert("Vui lòng nhập công việc");
        return;
    }
    var tasks = [];
    tasks.push({ name: contentElValue });
    renderTasks(tasks);
    contentEl.value = "";
});
function renderTasks(tasks = []) {
    var content = `<ul>`;
    tasks.forEach(function (task) {
        content += `<li>
                <div class=" task-name">${task.name}</div>
                <a href="#">Sửa</a>
                <a href="#">Xóa</a>
            </li> `

    });
    content += `</ul>`;
    var result = document.querySelector(".result");
    result.innerHTML = content;
};