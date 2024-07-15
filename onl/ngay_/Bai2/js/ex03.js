// window.scrollX lây tọa độ so với left theo trục X
// window.scrollY lấy tọa độ so với top theo trục Y


// var body = document.querySelector("body");
// var pos = 0;
// window.addEventListener("scroll", function () {
//     var position = this.scrollY;//lấy tọa độ so với top theo trục Y
//     // console.log(position);
//     if (position > pos) {
//         document.body.style.background = "red";

//     }
//     else {
//         document.body.style.background = "white";
//     } 
//     pos = position;

// });
// Bài tập 1 : Kéo chuột xuống body chuyển thành màu đỏ

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.scroll({
        top: 500,
        behavior: "smooth",
    })

});
var topEl = document.querySelector(".top");
window.addEventListener("scroll", function () {
    var position = window.scrollY;
    if (position > 100) {
        topEl.style.display = "block";
    }
    else {
        topEl.style.display = "none";
    }
});
top.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })

});