/*
Event:
- Hành động từ phía người dùng tác động lên thẻ html
- Mặc định trình duyệt định nghĩa các event tương ứng với các thẻ html (Mỗi thẻ html sẽ có các event khác nhau)
- nghiệm vụ của các lập trình viên javascript

==> Lắng nghe event từ phía người dùng để xử lý
*/


/* Cú pháp lắng nghe sự kiện :
element.tensukien = eventHandler(evenHandler là 1 hàm)
// các sự kiện google search
https://www.w3schools.com/jsref/dom_obj_event.asp

element.addEventListener(tensukien,listener)
(listener là 1 hàm ) 
đa số dùng cách này
*/
var btn = document.querySelector(".btn");
console.dir(btn);
var startBtn = document.querySelector('.start-btn');
// btn.onclick = function () {
//     console.log("Click Me");
// };
// btn.onclick = function () {
//     console.log("Học DOM không khó");
// };

// btn.addEventListener("click", function () {
//     console.log("Click Me");
// });

// btn.addEventListener("click", function () {
//     console.log("Học DOM không khó");
// });



// khi click vào từng Item ul li thì sẽ console.log ra được

// var items = document.querySelectorAll(".menu li");
// items.forEach(function (item) {
//     item.onclick = function () {
//         console.log(this);
//     }
// });


var count = 0;
var handleClick = function () {
    ++count;
    console.log(count);
    if (count % 5 === 0) {
        btn.removeEventListener("click", handleClick);
    }

}
// btn.addEventListener("click", handleClick);

startBtn.addEventListener('click', function (e) {
    console.log("Đã bắt đầu");
    console.log(e);//event object
    btn.addEventListener("click", handleClick);
    // mặc định có biến e 
});
// là tham số duy nhất function này
// các sự kiện trong JS là bất đồng bộ chuyển sang trình duyệt xử lý
// ==> chú ý mỗi sự kiên sẽ có biến e thông tin về sự kiện
