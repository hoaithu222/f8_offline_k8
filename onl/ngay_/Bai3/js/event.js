var inputList = document.querySelectorAll('input[type = "range"]');


var finishEvent = new Event("finish");


inputList.forEach(function (input) {
    input.addEventListener("input", function (e) {
        var value = e.target.value;
        if (+value === 100) {
            this.dispatchEvent(finishEvent)
        }

    });
});

// chỉ áp dụng khi làm dự án
// Dispatch ==> Elemnet --> Listener
// ví dụn chức năng hàm thông báo
/*
-Gửi email kích hoạt tài khoản


*/

