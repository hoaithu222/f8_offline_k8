// các bước định nghĩa sự kiện

/*
Bước 1: Xác định tên sự kiện
Bước 2: Xác định element có sự kiện đó
Bước 3: xác định thời điểm gửi sự kiện(dispatch),có kèm theo dữ liệu hay không
Bước 4: Lắng nghe sự kiện(sử dụng)


*/


// var finishEvent = new Event("finish");
// var input = document.querySelector("input");


// input.addEventListener("input", function (e) {
//     var value = e.target.value;
//     if (+value === 100) {
//         this.dispatchEvent(finishEvent);
//     }

// });
// input.addEventListener("finish", function () {
//     console.log("Đã Xong");

// });
var input2 = document.querySelector(".input-2");
input2.addEventListener("finish", function () {
    console.log("Input2 đã hoàn thành");
});

