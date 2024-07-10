var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var progressBarWidth = progressBar.clientWidth;

progressBar.addEventListener("mousedown", function (e) {
    if (e.which !== 1) {
        return;
    }
    document.addEventListener("mousemove", handleDrag);
    var offsetX = e.offsetX;
    var rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    initialClientX = e.clientX;
    moveSpace = offsetX;
    lastMoveSpace = offsetX;
});

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
});
document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", handleDrag);
    lastMoveSpace = moveSpace;
    // console.log(lastMoveSpace);
});


var moveSpace = 0;
var lastMoveSpace = 0;
var initialClientX = 0;
function handleDrag(e) {
    var moveSpace = e.clientX - initialClientX + lastMoveSpace;
    var rate = (moveSpace / progressBarWidth) * 100;
    if (rate < 0) {
        rate = 0;
    }
    if (rate >= 100) {
        rate = 100;
    }
    progress.style.width = `${rate}%`;
}


// xử lý autdio
var audio = document.querySelector("audio");

var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");
var getTimeFormat = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
}
window.addEventListener("load", function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});

playActionEl.addEventListener("click", function () {

    // audio paused ==> Kiểm tra xem nhạc có đang dừng hay không 
    // audio.play() ==> phát nhạc 
    // audio.pause() ===> dừng nhạc 
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }

});

audio.addEventListener('play', function () {
    playActionEl.classList.replace('fa-play', 'fa-pause');
});
audio.addEventListener('pause', function () {
    playActionEl.classList.replace('fa-pause', 'fa-play');
});
audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    var rate = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
});