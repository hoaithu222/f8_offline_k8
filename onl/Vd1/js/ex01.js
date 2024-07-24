// các bước định nghĩa sự kiện
/*
Bước 1 :Xác định tên sự kiện
Bước 2 : Xác định element có sự kiện đó
Bước 3 : Thời điểm gửi sự kiện (dispatch), có kèm theo dữ liệu hay không
Bước 4 : Lắng nghe sự kiện

*/

/*

dispatch ---> Element ---> listener
đăng kí tài khoản gửi emil kích hoạt
 gửi thông báo cho quản trị
gửi email cho quản trị
handleRegister(){
    // xử lý đăng kí
    sendEmailActive();  
    sendNotificationToAdmin();
    sendEmailToAdimin();
}
---> cách khác

handleRegister(){
// kiểm tra xem đăng kí thành công hay không
// dispatch event:Register

}
File khác:
listener Event Register
    + sendEmailActive();
    + sendNotificationToAdmin();
    + sendEmailToAdimin();

---> để bảo trì nâng cấp

Tính năng thanh toán
-thêm sản phẩm vào giỏ hàng --> dispatch Event
-vào trang thanh toán --> dispatch Event
- submit form --> dispatch Event
- Thực hiện thanh toán thành công --> dispatch Event
- Thực hiện thanh toán thất bại --> dispatch Event

*/

// var input = document.querySelector("input");
// input.addEventListener("input", function (e) {
//     var value = e.target.value;
//     console.log(value);
//     if (+value === 100) {
//         this.dispatchEvent(finishEvent);
//     }
// });
// input.addEventListener("finish", function () {
//     console.log("đã xong");

// });
// var input2 = document.querySelector(".input-2");
// input2.addEventListener("finish", function (e) {
//     console.log("đã xong input-2");
//     console.log("Vị trí đầu tiên : ", e.initialRate);
// });
// HTMLElement

HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var quantity = document.querySelector(".quantity");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var input = document.querySelector("input[type = number]");

minus.addEventListener("click", function () {
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
  // input.dispatchEvent(changeEvent);//-> tác động vào event có sẵn
  input.change();
});
plus.addEventListener("click", function () {
  input.value++;
  // input.dispatchEvent(changeEvent);
  input.change();
});

input.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
});

// Trigger Event --> tự động tác động sự kiện

/*
1.Dùng các hàm có sẵn
-click()
-focus()
-submit()

2.dispatch Event

*/

input.focus(); //dispatch event focus

// setInterval(function () {
//     plus.click(); // dispatch event click

// }, 500);
