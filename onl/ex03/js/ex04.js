var checkboxEl = document.querySelectorAll(".check");
var checkAll = document.querySelector("#checkAll");
var spanCount = document.querySelector(".btn span");
var btnEl = document.querySelector(".btn");

function updateCount() {
    var count = document.querySelectorAll(".check:checked").length;
    spanCount.textContent = `${count}`;
    btnEl.disabled = count === 0;
}

checkAll.addEventListener("click", function () {
    checkboxEl.forEach(function (checkbox) {
        checkbox.checked = checkAll.checked;

    });
    updateCount();
});

checkboxEl.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        if (!checkbox.checked) {
            checkAll.checked = false;
        } else {
            var allChecked = Array.from(checkboxEl).every(function (item) {
                return item.checked;
            });
            checkAll.checked = allChecked;
        }
        updateCount();
    });
});
btnEl.addEventListener("click", function (e) {
    e.preventDefault();
    checkboxEl.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    checkAll.checked = false;
    updateCount();
});


updateCount();