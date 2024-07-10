// Scroll Event : liên quan đến sự kiện kéo thanh cuộn
// Scrolly:lấy vị tri thanh cuộn theo trục y
// Scrolly:lấy vị trí thanh cuộn theo trục x



var btn = document.querySelector(".btn");
window.addEventListener("scroll", function () {
    var position = window.scrollY;
    if (position >= 100) {
        btn.classList.add("show");
    }
    else {
        btn.classList.remove("show");
    }
});
// áp dụng rất nhiều 
btn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
/*

scroll({
top:value1,
left:value2,
})
===> Chuyển vị trí thanh cuộn tới vị trí đã chỉ định


*/
// var currentPosition = 0;

// window.addEventListener('scroll', function () {
//     if (this.scrollY > currentPosition) {
//         document.body.style.background = "yellow";
//     }
//     else {
//         document.body.style.background = "white";
//     }

//     currentPosition = this.scrollY;
// });
// Bài tập : kéo thanh cuộn xuống --> đổi màu body thành màu vàng, kéo thanh cuộn lên thành màu trăng


