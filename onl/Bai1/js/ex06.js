// dung inline css ===> thêm trực tiếp css từ JS
const styleBtn1 = document.querySelector(".style-1");
const styleBtn2 = document.querySelector(".style-2");
const styleBtn3 = document.querySelector(".style-3");
const styleBtn4 = document.querySelector(".style-4");
var boxEl = document.querySelector(".box");
styleBtn1.addEventListener("click", function () {
    boxEl.style.color = "red";
});
styleBtn2.addEventListener("click", function () {
    var css = {
        fontStyle: "italic",
        fontWeight: "700",
        backgroundColor: "gray",
        color: null,

    }
    Object.assign(boxEl.style, css);

});

// Bài tập : click vòa button style 3 ==> thêm ảnh nền (background - image) với hình ảnh trong folder images

styleBtn3.addEventListener("click", function () {
    boxEl.style.backgroundImage = `url("./images/866-200x300.jpg")`;
});