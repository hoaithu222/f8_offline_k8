var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var previewTime = document.querySelector(".preview-time");
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var isDragging = false;
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling; // Element to display song duration
var currentTimeEl = progressBar.previousElementSibling; // Element to display current song time
var playActionEl = document.querySelector(".play-action i");

function getTimeFormat(seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function handleDrag(e) {
    if (isDragging) {
        moveSpace = e.clientX - initialClientX + lastMoveSpace;
        var progressBarWidth = progressBar.clientWidth;
        var rate = (moveSpace / progressBarWidth) * 100;

        rate = Math.max(0, Math.min(100, rate));

        progress.style.width = `${rate}%`;

        var previewTimeValue = (rate / 100) * audio.duration;
        previewTime.style.left = `${Math.min(moveSpace, progressBarWidth)}px`;
        previewTime.innerText = getTimeFormat(previewTimeValue);
    }
}

progressBar.addEventListener("mousedown", function (e) {
    if (e.which !== 1) {
        return;
    }
    isDragging = true;
    initialClientX = e.clientX;
    moveSpace = e.offsetX;
    lastMoveSpace = moveSpace;

    var progressBarWidth = progressBar.clientWidth;
    var rate = (moveSpace / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;

    document.addEventListener("mousemove", handleDrag);
    previewTime.style.display = 'block';
});

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    isDragging = true;
    initialClientX = e.clientX;
    document.addEventListener("mousemove", handleDrag);
    previewTime.style.display = 'block';
});

document.addEventListener("mouseup", function (e) {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener("mousemove", handleDrag);
        var progressBarWidth = progressBar.clientWidth;
        var rate = (moveSpace / progressBarWidth) * 100;
        audio.currentTime = (rate / 100) * audio.duration;
        lastMoveSpace = moveSpace;
        previewTime.style.display = 'none';
    }
});

audio.addEventListener("loadedmetadata", function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});

playActionEl.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", function () {
    playActionEl.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
    playActionEl.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", function () {
    if (!isDragging) {
        var currentTime = audio.currentTime;
        currentTimeEl.innerText = getTimeFormat(currentTime);
        var rate = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${rate}%`;
        // updateKaraoke(currentTime);
    }
});

progressBar.addEventListener("mousemove", function (e) {
    if (!isDragging) {
        var offsetX = e.offsetX;
        var progressBarWidth = progressBar.clientWidth;
        var rate = (offsetX / progressBarWidth) * 100;
        var previewTimeValue = (rate / 100) * audio.duration;
        previewTime.style.display = 'block';
        previewTime.style.left = `${offsetX}px`;
        previewTime.style.transform = `translate(-50%, -150%)`;
        previewTime.innerText = getTimeFormat(previewTimeValue);
    }
});

progressSpan.addEventListener("mousemove", function (e) {
    e.stopPropagation();
});

progressBar.addEventListener("mouseleave", function () {
    previewTime.style.display = 'none';
});

audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    currentTimeEl.innerText = "00:00";
    progress.style.width = "0%";
    playActionEl.classList.replace("fa-pause", "fa-play");
});

var lyric = lyric.data.sentences;
var requestId;
audio.addEventListener("play", function () {
    requestId = requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
    cancelAnimationFrame(requestId);
});
var currentIndex;
var openKaraoke = document.querySelector(".open-karaoke button");
var karaoke = document.querySelector(".karaoke");
var closeKaraoke = document.querySelector(".close");

openKaraoke.addEventListener("click", function () {
    karaoke.classList.add("show");
});

closeKaraoke.addEventListener("click", function () {
    karaoke.classList.remove("show");
});
var karaokeInner = document.querySelector(".karaoke-inner");
function handleKaraoke() {
    var currentTime = audio.currentTime * 1000;
    handleFillColor(currentTime);
    var index = lyric.findIndex(function (item) {
        var words = item.words;
        var firstWord = words[0];
        var lastWord = words[words.length - 1];
        return currentTime >= firstWord.startTime && currentTime <= lastWord.endTime;
    });
    if (index !== -1 && index !== currentIndex) {
        if (index === 0) {
            var output = `<p>${getSentence(index)}</p>
        <p>${getSentence(index + 1)}</p>`;
            karaokeInner.innerHTML = output;
        }
        else {
            // khi index >= 1 
            /* index = 1 --> ẩn dòng 1 ==> hiển thị câu tiếp theo  
            index = 2 --> ẩn dòng 2 ==> hiển thị câu tiếp theo 
            index = 3 --> ẩn dòng 1 hiển thị câu tiếp theo 
            index = 4 --> ẩn dòng 2 --> hiển thị câu tiếp theo
            
            */
            var nextSentenceStr = getSentence(index + 1);

            setTimeout(function () {
                if (index % 2 !== 0) {
                    nextSentence(karaokeInner.children[0], nextSentenceStr);

                }
                else {
                    nextSentence(karaokeInner.children[1], nextSentenceStr);

                }

            }, 500);
        }

        currentIndex = index;

    }

    requestId = requestAnimationFrame(handleKaraoke);
}
function handleFillColor(currentTime) {
    var wordList = karaokeInner.querySelectorAll('.word');
    wordList.forEach(function (wordEl) {
        var startTime = wordEl.dataset.startTime;
        var endTime = wordEl.dataset.endTime;
        if (currentTime >= startTime && currentTime <= endTime) {
            var percent = (currentTime - startTime) / (endTime - startTime) * 100;
            wordEl.children[0].style.width = `${percent}%`;
        }
        if (currentTime > endTime) {
            wordEl.children[0].style.width = `100%`;
        }

    });

}
function getSentence(index) {
    return lyric[index].words.map(function (item) {
        return `<span class ="word" data-start-time ="${item.startTime}" data-end-time = "${item.endTime}">${item.data}<span>${item.data}</span></span>`;
    }).join(" ");
}
function nextSentence(element, sentence) {
    // dòng muốn ẩn để hiển thị câu tiếp theo
    // nextSentence câu tiếp theo muốn hiển thị
    element.style.transition = "opacity 0.3s ease-in-out";
    element.style.opacity = 0;
    setTimeout(function () {
        element.innerHTML = sentence;
        element.style.opacity = 1;

    }, 600);
}

