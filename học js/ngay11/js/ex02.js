var btn = document.querySelector(".btn");
var inputEl = document.querySelector("input");
var ulEl = document.querySelector("ul");
var msgEl = document.querySelector(".msg");
// var liList = document.querySelectorAll("ul li");
// console.log(liList);
var count = 0;

btn.addEventListener("click", function () {
    var value = inputEl.value;
    if (!value) {
        // người dùng chưa nhập
        msgEl.innerHTML = "Vui lòng nhập tên";
        msgEl.classList.add("error");
        return;
    }
    // xử lý thêm 
    ++count;
    ulEl.innerHTML += `<li><input type = "checkbox" data-id =" ${count}"/><span data-id =" ${count}">${value}</span></li>`;
    msgEl.innerHTML = `Đã thêm thành công`;
    msgEl.classList.remove("error");
    msgEl.classList.add("success");
    inputEl.value = "";
    var inputCheckboxList = ulEl.querySelectorAll("input");
    inputCheckboxList.forEach(function (inputCheckbox) {
        inputCheckbox.addEventListener("change", function () {
            handleMarkCompleted(inputCheckbox);
        });
    });
});
var handleMarkCompleted = function (checkbox) {
    var status = checkbox.checked;
    var id = checkbox.dataset.id;
    var span = ulEl.querySelector(`span[data-id = "${id}"]`);
    if (status) {
        span.classList.add("completed");

    }
    else {
        span.classList.remove("completed");
    }
}
// gợi ý
// event : change
// Property :checked






