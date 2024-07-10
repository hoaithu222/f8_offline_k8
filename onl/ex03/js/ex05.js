var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.children[0];
var progressSpan = progress.children[0];

// var progress = document.querySelector(".progress");
// var progressSpan = progress.querySelector("span"); 
var progressBarWidth = progressBar.clientWidth;
progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        // tính width của progressBar 

        console.log(progressBarWidth);
        //tính offsetX tại vị trí click
        var offsetX = e.offsetX;
        //tính phàn trăm 
        var rate = (offsetX * 100) / progressBarWidth;
        // cập nhập css
        progress.style.width = `${rate}%`;
    }

});
progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
});
document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);

});
var initialClientX = 0;

var handleDrag = function (e) {
    var clientX = e.clientX;
    // width tính khoảng cách kéo
    var dragSpace = clientX - initialClientX;
    //tính phàn trăm 
    var rate = (dragSpace * 100) / progressBarWidth;
    // cập nhập css
    progress.style.width = `${rate}%`;
}