var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var previewTime = document.querySelector(".preview-time");
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var isDragging = false;

// Xử lý sự kiện khi nhấn chuột xuống trên thanh tiến trình
progressBar.addEventListener("mousedown", function (e) {
    if (e.which !== 1) {
        return; // Chỉ xử lý cho chuột trái
    }
    isDragging = true;
    var offsetX = e.offsetX; // Lấy vị trí nhấn chuột so với thanh tiến trình
    var progressBarWidth = progressBar.clientWidth;
    var rate = (offsetX / progressBarWidth) * 100; // Tính phần trăm vị trí
    progress.style.width = `${rate}%`;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    moveSpace = offsetX;
    lastMoveSpace = offsetX;
});

// Xử lý sự kiện khi nhấn chuột xuống trên thanh trượt
progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    isDragging = true;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
});

// Xử lý sự kiện khi nhả chuột
document.addEventListener("mouseup", function (e) {
    if (isDragging) {
        isDragging = false;
        var progressBarWidth = progressBar.clientWidth;
        var rate = (moveSpace / progressBarWidth) * 100;
        audio.currentTime = (rate / 100) * audio.duration; // Cập nhật thời gian của audio sau khi kéo xong
        document.removeEventListener("mousemove", handleDrag);
        lastMoveSpace = moveSpace;
        previewTime.style.display = 'none'; // Ẩn thời gian xem trước sau khi kéo xong
    }
});

// Hàm xử lý kéo thanh tiến trình
function handleDrag(e) {
    if (isDragging) {
        moveSpace = e.clientX - initialClientX + lastMoveSpace;
        var progressBarWidth = progressBar.clientWidth;
        var rate = (moveSpace / progressBarWidth) * 100;
        if (rate < 0) {
            rate = 0;
        }
        if (rate > 100) {
            rate = 100;
        }
        progress.style.width = `${rate}%`;
        var previewTimeValue = (rate / 100) * audio.duration;
        previewTime.style.display = 'block';
        previewTime.style.left = `${moveSpace}px`;
        previewTime.style.transform = `translate(-50%, -150%)`;
        previewTime.innerText = getTimeFormat(previewTimeValue);
    }
}

// Xử lý audio
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");

// Hàm định dạng thời gian từ giây thành mm:ss
var getTimeFormat = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
};

// Khi tải trang, cập nhật thời gian tổng của audio
audio.addEventListener("loadedmetadata", function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});

// Xử lý sự kiện nhấn nút phát/tạm dừng
playActionEl.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Khi audio phát, thay đổi biểu tượng nút phát thành tạm dừng
audio.addEventListener("play", function () {
    playActionEl.classList.replace("fa-play", "fa-pause");
});

// Khi audio tạm dừng, thay đổi biểu tượng nút tạm dừng thành phát
audio.addEventListener("pause", function () {
    playActionEl.classList.replace("fa-pause", "fa-play");
});

// Khi audio cập nhật thời gian, cập nhật thanh tiến trình và thời gian hiện tại
audio.addEventListener("timeupdate", function () {
    if (!isDragging) { // Chỉ cập nhật khi không kéo
        var currentTime = audio.currentTime;
        currentTimeEl.innerText = getTimeFormat(currentTime);
        var rate = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${rate}%`;
        updateKaraoke(currentTime);
    }
});

// Khi hover vào thanh tiến trình, hiển thị thời gian xem trước
progressBar.addEventListener("mousemove", function (e) {
    if (!isDragging) { // Chỉ hiển thị khi không kéo
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

// Khi audio chạy hết, reset mọi thứ về 0
audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    currentTimeEl.innerText = "00:00";
    progress.style.width = "0%";
    playActionEl.classList.replace("fa-pause", "fa-play");
});

var openKaraoke = document.querySelector(".open-karaoke");
var karaoke = document.querySelector(".karaoke");
openKaraoke.addEventListener("click", function () {
    karaoke.classList.add("show");
});
var close = document.querySelector(".close");
close.addEventListener("click", function () {
    karaoke.classList.remove("show");
});

// Karaoke

function updateKaraoke(currentTime) {
    var lines = lyric.data.sentences;
    var line1 = lines[0].words.slice(0, 4).map(word => word.data).join(' ');
    var line2 = lines[0].words.slice(4, 8).map(word => word.data).join(' ');

    var line1Element = document.getElementById('line1');
    var line2Element = document.getElementById('line2');
    line1Element.innerText = line1;
    line2Element.innerText = line2;

    lines.forEach((line, index) => {
        var startTime = line.words[0].startTime / 1000;
        var endTime = line.words[line.words.length - 1].endTime / 1000;

        if (currentTime >= startTime && currentTime <= endTime) {
            line1 = line.words.slice(0, 4).map(word => word.data).join(' ');
            line2 = line.words.slice(4, 8).map(word => word.data).join(' ');
            line1Element.innerText = line1;
            line2Element.innerText = line2;
        }
    });
}

audio.addEventListener("timeupdate", function () {
    updateKaraoke(audio.currentTime);
});



var lyric = {
    "err": 0,
    "msg": "Success",
    "data": {
        "sentences": [
            {
                "words": [
                    {
                        "startTime": 1050,
                        "endTime": 1580,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 1580,
                        "endTime": 1580,
                        "data": "để"
                    },
                    {
                        "startTime": 1580,
                        "endTime": 2120,
                        "data": "tôi"
                    },
                    {
                        "startTime": 2120,
                        "endTime": 2640,
                        "data": "ôm"
                    },
                    {
                        "startTime": 2640,
                        "endTime": 3690,
                        "data": "lấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 3690,
                        "endTime": 4230,
                        "data": "Điều"
                    },
                    {
                        "startTime": 4230,
                        "endTime": 4230,
                        "data": "bận"
                    },
                    {
                        "startTime": 4230,
                        "endTime": 4770,
                        "data": "lòng"
                    },
                    {
                        "startTime": 4770,
                        "endTime": 5300,
                        "data": "hôm"
                    },
                    {
                        "startTime": 5300,
                        "endTime": 6350,
                        "data": "nay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 6350,
                        "endTime": 6910,
                        "data": "Để"
                    },
                    {
                        "startTime": 6910,
                        "endTime": 6910,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 6910,
                        "endTime": 7420,
                        "data": "khi"
                    },
                    {
                        "startTime": 7420,
                        "endTime": 7960,
                        "data": "cầm"
                    },
                    {
                        "startTime": 7960,
                        "endTime": 8480,
                        "data": "tay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 8480,
                        "endTime": 9010,
                        "data": "Xoa"
                    },
                    {
                        "startTime": 9010,
                        "endTime": 9570,
                        "data": "dịu"
                    },
                    {
                        "startTime": 9570,
                        "endTime": 10090,
                        "data": "em"
                    },
                    {
                        "startTime": 10090,
                        "endTime": 10090,
                        "data": "với"
                    },
                    {
                        "startTime": 10090,
                        "endTime": 10620,
                        "data": "câu"
                    },
                    {
                        "startTime": 10620,
                        "endTime": 11140,
                        "data": "hát"
                    },
                    {
                        "startTime": 11140,
                        "endTime": 12200,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 12200,
                        "endTime": 12200,
                        "data": "Để"
                    },
                    {
                        "startTime": 12200,
                        "endTime": 12750,
                        "data": "những"
                    },
                    {
                        "startTime": 12750,
                        "endTime": 13280,
                        "data": "thanh"
                    },
                    {
                        "startTime": 13280,
                        "endTime": 13280,
                        "data": "âm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 13280,
                        "endTime": 13790,
                        "data": "Thật"
                    },
                    {
                        "startTime": 13790,
                        "endTime": 14330,
                        "data": "thà"
                    },
                    {
                        "startTime": 14330,
                        "endTime": 14330,
                        "data": "từ"
                    },
                    {
                        "startTime": 14330,
                        "endTime": 14860,
                        "data": "tim"
                    },
                    {
                        "startTime": 14860,
                        "endTime": 15390,
                        "data": "tôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 15390,
                        "endTime": 15920,
                        "data": "Có"
                    },
                    {
                        "startTime": 15920,
                        "endTime": 16470,
                        "data": "thể"
                    },
                    {
                        "startTime": 16470,
                        "endTime": 16470,
                        "data": "sưởi"
                    },
                    {
                        "startTime": 16470,
                        "endTime": 16990,
                        "data": "ấm"
                    },
                    {
                        "startTime": 16990,
                        "endTime": 17520,
                        "data": "tim"
                    },
                    {
                        "startTime": 17520,
                        "endTime": 18570,
                        "data": "người"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 18570,
                        "endTime": 18570,
                        "data": "Luôn"
                    },
                    {
                        "startTime": 18570,
                        "endTime": 19120,
                        "data": "gần"
                    },
                    {
                        "startTime": 19120,
                        "endTime": 19630,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 19630,
                        "endTime": 20190,
                        "data": "Dù"
                    },
                    {
                        "startTime": 20190,
                        "endTime": 20190,
                        "data": "ta"
                    },
                    {
                        "startTime": 20190,
                        "endTime": 20720,
                        "data": "cách"
                    },
                    {
                        "startTime": 20720,
                        "endTime": 21240,
                        "data": "xa"
                    },
                    {
                        "startTime": 21240,
                        "endTime": 21770,
                        "data": "mây"
                    },
                    {
                        "startTime": 21770,
                        "endTime": 23900,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 23900,
                        "endTime": 24430,
                        "data": "Chớp"
                    },
                    {
                        "startTime": 24430,
                        "endTime": 24430,
                        "data": "mắt"
                    },
                    {
                        "startTime": 24430,
                        "endTime": 25510,
                        "data": "thôi,"
                    },
                    {
                        "startTime": 25510,
                        "endTime": 26010,
                        "data": "đâu"
                    },
                    {
                        "startTime": 26010,
                        "endTime": 26010,
                        "data": "hay"
                    },
                    {
                        "startTime": 26010,
                        "endTime": 26560,
                        "data": "mới"
                    },
                    {
                        "startTime": 26560,
                        "endTime": 27090,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 27090,
                        "endTime": 27090,
                        "data": "Chiều"
                    },
                    {
                        "startTime": 27090,
                        "endTime": 28140,
                        "data": "buông"
                    },
                    {
                        "startTime": 28140,
                        "endTime": 28670,
                        "data": "mất"
                    },
                    {
                        "startTime": 28670,
                        "endTime": 29200,
                        "data": "rồi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 29200,
                        "endTime": 29760,
                        "data": "Thôi"
                    },
                    {
                        "startTime": 29760,
                        "endTime": 29760,
                        "data": "về"
                    },
                    {
                        "startTime": 29760,
                        "endTime": 30810,
                        "data": "nhà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 30810,
                        "endTime": 31340,
                        "data": "Dù"
                    },
                    {
                        "startTime": 31340,
                        "endTime": 31860,
                        "data": "đâu"
                    },
                    {
                        "startTime": 31860,
                        "endTime": 32390,
                        "data": "có"
                    },
                    {
                        "startTime": 32390,
                        "endTime": 32390,
                        "data": "ai"
                    },
                    {
                        "startTime": 32390,
                        "endTime": 32910,
                        "data": "đang"
                    },
                    {
                        "startTime": 32910,
                        "endTime": 34520,
                        "data": "đợi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 34520,
                        "endTime": 35040,
                        "data": "Vẫn"
                    },
                    {
                        "startTime": 35040,
                        "endTime": 35040,
                        "data": "mỗi"
                    },
                    {
                        "startTime": 35040,
                        "endTime": 36120,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 36120,
                        "endTime": 36640,
                        "data": "Tự"
                    },
                    {
                        "startTime": 36640,
                        "endTime": 37170,
                        "data": "mình"
                    },
                    {
                        "startTime": 37170,
                        "endTime": 37170,
                        "data": "chăm"
                    },
                    {
                        "startTime": 37170,
                        "endTime": 37700,
                        "data": "sóc"
                    },
                    {
                        "startTime": 37700,
                        "endTime": 38230,
                        "data": "mình"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 38230,
                        "endTime": 38230,
                        "data": "Cũng"
                    },
                    {
                        "startTime": 38230,
                        "endTime": 38770,
                        "data": "đã"
                    },
                    {
                        "startTime": 38770,
                        "endTime": 39840,
                        "data": "quen"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 39840,
                        "endTime": 40350,
                        "data": "Ăn"
                    },
                    {
                        "startTime": 40350,
                        "endTime": 40890,
                        "data": "một"
                    },
                    {
                        "startTime": 40890,
                        "endTime": 41420,
                        "data": "mình,"
                    },
                    {
                        "startTime": 41420,
                        "endTime": 41950,
                        "data": "nấu"
                    },
                    {
                        "startTime": 41950,
                        "endTime": 42500,
                        "data": "một"
                    },
                    {
                        "startTime": 42500,
                        "endTime": 43030,
                        "data": "mình"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 43030,
                        "endTime": 43030,
                        "data": "Lắm"
                    },
                    {
                        "startTime": 43030,
                        "endTime": 43550,
                        "data": "lúc"
                    },
                    {
                        "startTime": 43550,
                        "endTime": 43550,
                        "data": "cũng"
                    },
                    {
                        "startTime": 43550,
                        "endTime": 44080,
                        "data": "xem"
                    },
                    {
                        "startTime": 44080,
                        "endTime": 44600,
                        "data": "phim"
                    },
                    {
                        "startTime": 44600,
                        "endTime": 44600,
                        "data": "một"
                    },
                    {
                        "startTime": 44600,
                        "endTime": 45770,
                        "data": "mình"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45770,
                        "endTime": 45770,
                        "data": "Still"
                    },
                    {
                        "startTime": 45770,
                        "endTime": 47360,
                        "data": "okay,"
                    },
                    {
                        "startTime": 47360,
                        "endTime": 47910,
                        "data": "em"
                    },
                    {
                        "startTime": 47910,
                        "endTime": 47910,
                        "data": "không"
                    },
                    {
                        "startTime": 47910,
                        "endTime": 48420,
                        "data": "mấy"
                    },
                    {
                        "startTime": 48420,
                        "endTime": 48960,
                        "data": "khi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48960,
                        "endTime": 48960,
                        "data": "Nghĩ"
                    },
                    {
                        "startTime": 48960,
                        "endTime": 49490,
                        "data": "suy"
                    },
                    {
                        "startTime": 49490,
                        "endTime": 50020,
                        "data": "như"
                    },
                    {
                        "startTime": 50020,
                        "endTime": 50020,
                        "data": "thế"
                    },
                    {
                        "startTime": 50020,
                        "endTime": 51100,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 51100,
                        "endTime": 51630,
                        "data": "Dẫu"
                    },
                    {
                        "startTime": 51630,
                        "endTime": 51630,
                        "data": "ngày"
                    },
                    {
                        "startTime": 51630,
                        "endTime": 52680,
                        "data": "dài"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 52680,
                        "endTime": 53210,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 53210,
                        "endTime": 53210,
                        "data": "đến"
                    },
                    {
                        "startTime": 53210,
                        "endTime": 53730,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 53730,
                        "endTime": 54260,
                        "data": "khó"
                    },
                    {
                        "startTime": 54260,
                        "endTime": 54260,
                        "data": "khăn"
                    },
                    {
                        "startTime": 54260,
                        "endTime": 54820,
                        "data": "như"
                    },
                    {
                        "startTime": 54820,
                        "endTime": 56400,
                        "data": "vậy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 56400,
                        "endTime": 56920,
                        "data": "Dẫu"
                    },
                    {
                        "startTime": 56920,
                        "endTime": 56920,
                        "data": "mệt"
                    },
                    {
                        "startTime": 56920,
                        "endTime": 58000,
                        "data": "mỏi"
                    },
                    {
                        "startTime": 58000,
                        "endTime": 58530,
                        "data": "tự"
                    },
                    {
                        "startTime": 58530,
                        "endTime": 59060,
                        "data": "mình"
                    },
                    {
                        "startTime": 59060,
                        "endTime": 59060,
                        "data": "uống"
                    },
                    {
                        "startTime": 59060,
                        "endTime": 59580,
                        "data": "thuốc"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 59580,
                        "endTime": 60110,
                        "data": "Rồi"
                    },
                    {
                        "startTime": 60110,
                        "endTime": 60110,
                        "data": "sẽ"
                    },
                    {
                        "startTime": 60110,
                        "endTime": 60660,
                        "data": "khá"
                    },
                    {
                        "startTime": 60660,
                        "endTime": 61720,
                        "data": "hơn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 61720,
                        "endTime": 62240,
                        "data": "Tự"
                    },
                    {
                        "startTime": 62240,
                        "endTime": 62770,
                        "data": "mình"
                    },
                    {
                        "startTime": 62770,
                        "endTime": 62770,
                        "data": "sống"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 62770,
                        "endTime": 63290,
                        "data": "Cuộc"
                    },
                    {
                        "startTime": 63290,
                        "endTime": 63850,
                        "data": "đời"
                    },
                    {
                        "startTime": 63850,
                        "endTime": 63850,
                        "data": "của"
                    },
                    {
                        "startTime": 63850,
                        "endTime": 64370,
                        "data": "một"
                    },
                    {
                        "startTime": 64370,
                        "endTime": 64900,
                        "data": "người"
                    },
                    {
                        "startTime": 64900,
                        "endTime": 66510,
                        "data": "lớn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 66510,
                        "endTime": 67010,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 67010,
                        "endTime": 67010,
                        "data": "để"
                    },
                    {
                        "startTime": 67010,
                        "endTime": 67540,
                        "data": "tôi"
                    },
                    {
                        "startTime": 67540,
                        "endTime": 68090,
                        "data": "ôm"
                    },
                    {
                        "startTime": 68090,
                        "endTime": 69170,
                        "data": "lấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 69170,
                        "endTime": 69170,
                        "data": "Điều"
                    },
                    {
                        "startTime": 69170,
                        "endTime": 69670,
                        "data": "bận"
                    },
                    {
                        "startTime": 69670,
                        "endTime": 70210,
                        "data": "lòng"
                    },
                    {
                        "startTime": 70210,
                        "endTime": 70740,
                        "data": "hôm"
                    },
                    {
                        "startTime": 70740,
                        "endTime": 71800,
                        "data": "nay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 71800,
                        "endTime": 71800,
                        "data": "Để"
                    },
                    {
                        "startTime": 71800,
                        "endTime": 72330,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 72330,
                        "endTime": 72880,
                        "data": "khi"
                    },
                    {
                        "startTime": 72880,
                        "endTime": 72880,
                        "data": "cầm"
                    },
                    {
                        "startTime": 72880,
                        "endTime": 73970,
                        "data": "tay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 73970,
                        "endTime": 74490,
                        "data": "Xoa"
                    },
                    {
                        "startTime": 74490,
                        "endTime": 75020,
                        "data": "dịu"
                    },
                    {
                        "startTime": 75020,
                        "endTime": 75020,
                        "data": "em"
                    },
                    {
                        "startTime": 75020,
                        "endTime": 75540,
                        "data": "với"
                    },
                    {
                        "startTime": 75540,
                        "endTime": 76100,
                        "data": "câu"
                    },
                    {
                        "startTime": 76100,
                        "endTime": 76620,
                        "data": "hát"
                    },
                    {
                        "startTime": 76620,
                        "endTime": 77150,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 77150,
                        "endTime": 77680,
                        "data": "Vì"
                    },
                    {
                        "startTime": 77680,
                        "endTime": 78210,
                        "data": "những"
                    },
                    {
                        "startTime": 78210,
                        "endTime": 78210,
                        "data": "giai"
                    },
                    {
                        "startTime": 78210,
                        "endTime": 78760,
                        "data": "điệu"
                    },
                    {
                        "startTime": 78760,
                        "endTime": 79280,
                        "data": "ngọt"
                    },
                    {
                        "startTime": 79280,
                        "endTime": 79280,
                        "data": "ngào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 79280,
                        "endTime": 79790,
                        "data": "Mà"
                    },
                    {
                        "startTime": 79790,
                        "endTime": 80340,
                        "data": "tôi"
                    },
                    {
                        "startTime": 80340,
                        "endTime": 80870,
                        "data": "viết"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 80870,
                        "endTime": 81390,
                        "data": "Chính"
                    },
                    {
                        "startTime": 81390,
                        "endTime": 81920,
                        "data": "là"
                    },
                    {
                        "startTime": 81920,
                        "endTime": 81920,
                        "data": "để"
                    },
                    {
                        "startTime": 81920,
                        "endTime": 82450,
                        "data": "tôi"
                    },
                    {
                        "startTime": 82450,
                        "endTime": 83000,
                        "data": "ôm"
                    },
                    {
                        "startTime": 83000,
                        "endTime": 83530,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 83530,
                        "endTime": 84040,
                        "data": "An"
                    },
                    {
                        "startTime": 84040,
                        "endTime": 84580,
                        "data": "ủi"
                    },
                    {
                        "startTime": 84580,
                        "endTime": 85110,
                        "data": "em"
                    },
                    {
                        "startTime": 85110,
                        "endTime": 85110,
                        "data": "vào"
                    },
                    {
                        "startTime": 85110,
                        "endTime": 85660,
                        "data": "ngày"
                    },
                    {
                        "startTime": 85660,
                        "endTime": 86190,
                        "data": "cuộc"
                    },
                    {
                        "startTime": 86190,
                        "endTime": 86710,
                        "data": "sống"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 86710,
                        "endTime": 86710,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 86710,
                        "endTime": 87240,
                        "data": "dễ"
                    },
                    {
                        "startTime": 87240,
                        "endTime": 87770,
                        "data": "dàng"
                    },
                    {
                        "startTime": 87770,
                        "endTime": 88300,
                        "data": "mấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 88300,
                        "endTime": 88850,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 88850,
                        "endTime": 88850,
                        "data": "để"
                    },
                    {
                        "startTime": 88850,
                        "endTime": 89370,
                        "data": "tôi"
                    },
                    {
                        "startTime": 89370,
                        "endTime": 89910,
                        "data": "ôm"
                    },
                    {
                        "startTime": 89910,
                        "endTime": 90950,
                        "data": "lấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 90950,
                        "endTime": 90950,
                        "data": "Điều"
                    },
                    {
                        "startTime": 90950,
                        "endTime": 91500,
                        "data": "bận"
                    },
                    {
                        "startTime": 91500,
                        "endTime": 92020,
                        "data": "lòng"
                    },
                    {
                        "startTime": 92020,
                        "endTime": 92020,
                        "data": "hôm"
                    },
                    {
                        "startTime": 92020,
                        "endTime": 93080,
                        "data": "nay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 93080,
                        "endTime": 93610,
                        "data": "Để"
                    },
                    {
                        "startTime": 93610,
                        "endTime": 94140,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 94140,
                        "endTime": 94690,
                        "data": "khi"
                    },
                    {
                        "startTime": 94690,
                        "endTime": 94690,
                        "data": "cầm"
                    },
                    {
                        "startTime": 94690,
                        "endTime": 95730,
                        "data": "tay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 95730,
                        "endTime": 96270,
                        "data": "Xoa"
                    },
                    {
                        "startTime": 96270,
                        "endTime": 96800,
                        "data": "dịu"
                    },
                    {
                        "startTime": 96800,
                        "endTime": 96800,
                        "data": "em"
                    },
                    {
                        "startTime": 96800,
                        "endTime": 97340,
                        "data": "bằng"
                    },
                    {
                        "startTime": 97340,
                        "endTime": 97860,
                        "data": "câu"
                    },
                    {
                        "startTime": 97860,
                        "endTime": 98410,
                        "data": "hát"
                    },
                    {
                        "startTime": 98410,
                        "endTime": 98940,
                        "data": "hay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98940,
                        "endTime": 99460,
                        "data": "Để"
                    },
                    {
                        "startTime": 99460,
                        "endTime": 99980,
                        "data": "những"
                    },
                    {
                        "startTime": 99980,
                        "endTime": 99980,
                        "data": "thanh"
                    },
                    {
                        "startTime": 99980,
                        "endTime": 100520,
                        "data": "âm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 100520,
                        "endTime": 101070,
                        "data": "Thật"
                    },
                    {
                        "startTime": 101070,
                        "endTime": 101600,
                        "data": "thà"
                    },
                    {
                        "startTime": 101600,
                        "endTime": 101600,
                        "data": "từ"
                    },
                    {
                        "startTime": 101600,
                        "endTime": 102120,
                        "data": "tim"
                    },
                    {
                        "startTime": 102120,
                        "endTime": 102640,
                        "data": "tôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 102640,
                        "endTime": 103170,
                        "data": "Có"
                    },
                    {
                        "startTime": 103170,
                        "endTime": 103730,
                        "data": "thể"
                    },
                    {
                        "startTime": 103730,
                        "endTime": 103730,
                        "data": "sưởi"
                    },
                    {
                        "startTime": 103730,
                        "endTime": 104280,
                        "data": "ấm"
                    },
                    {
                        "startTime": 104280,
                        "endTime": 104810,
                        "data": "tim"
                    },
                    {
                        "startTime": 104810,
                        "endTime": 105320,
                        "data": "người"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 105320,
                        "endTime": 105860,
                        "data": "Luôn"
                    },
                    {
                        "startTime": 105860,
                        "endTime": 106410,
                        "data": "gần"
                    },
                    {
                        "startTime": 106410,
                        "endTime": 106410,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 106410,
                        "endTime": 106940,
                        "data": "Dù"
                    },
                    {
                        "startTime": 106940,
                        "endTime": 107470,
                        "data": "ta"
                    },
                    {
                        "startTime": 107470,
                        "endTime": 107470,
                        "data": "cách"
                    },
                    {
                        "startTime": 107470,
                        "endTime": 107980,
                        "data": "xa"
                    },
                    {
                        "startTime": 107980,
                        "endTime": 109050,
                        "data": "mây"
                    },
                    {
                        "startTime": 109050,
                        "endTime": 111520,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 111520,
                        "endTime": 112300,
                        "data": "Oh"
                    },
                    {
                        "startTime": 112300,
                        "endTime": 112720,
                        "data": "dạo"
                    },
                    {
                        "startTime": 112720,
                        "endTime": 112720,
                        "data": "này"
                    },
                    {
                        "startTime": 112720,
                        "endTime": 113110,
                        "data": "cuộc"
                    },
                    {
                        "startTime": 113110,
                        "endTime": 113510,
                        "data": "sống"
                    },
                    {
                        "startTime": 113510,
                        "endTime": 113910,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 113910,
                        "endTime": 113910,
                        "data": "Đang"
                    },
                    {
                        "startTime": 113910,
                        "endTime": 114300,
                        "data": "như"
                    },
                    {
                        "startTime": 114300,
                        "endTime": 114710,
                        "data": "nào"
                    },
                    {
                        "startTime": 114710,
                        "endTime": 115110,
                        "data": "oh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 115110,
                        "endTime": 115490,
                        "data": "Gần"
                    },
                    {
                        "startTime": 115490,
                        "endTime": 115900,
                        "data": "đây"
                    },
                    {
                        "startTime": 115900,
                        "endTime": 115900,
                        "data": "không"
                    },
                    {
                        "startTime": 115900,
                        "endTime": 116290,
                        "data": "thấy"
                    },
                    {
                        "startTime": 116290,
                        "endTime": 116710,
                        "data": "online"
                    },
                    {
                        "startTime": 116710,
                        "endTime": 117100,
                        "data": "nữa"
                    },
                    {
                        "startTime": 117100,
                        "endTime": 117490,
                        "data": "sao"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 117490,
                        "endTime": 117890,
                        "data": "Bận"
                    },
                    {
                        "startTime": 117890,
                        "endTime": 118290,
                        "data": "việc"
                    },
                    {
                        "startTime": 118290,
                        "endTime": 118290,
                        "data": "công"
                    },
                    {
                        "startTime": 118290,
                        "endTime": 118680,
                        "data": "ty"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 118680,
                        "endTime": 119080,
                        "data": "Hay"
                    },
                    {
                        "startTime": 119080,
                        "endTime": 119490,
                        "data": "là"
                    },
                    {
                        "startTime": 119490,
                        "endTime": 119490,
                        "data": "đang"
                    },
                    {
                        "startTime": 119490,
                        "endTime": 119880,
                        "data": "dating"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 119880,
                        "endTime": 120280,
                        "data": "Hay"
                    },
                    {
                        "startTime": 120280,
                        "endTime": 120680,
                        "data": "lại"
                    },
                    {
                        "startTime": 120680,
                        "endTime": 121070,
                        "data": "đang"
                    },
                    {
                        "startTime": 121070,
                        "endTime": 121070,
                        "data": "co"
                    },
                    {
                        "startTime": 121070,
                        "endTime": 121470,
                        "data": "ro"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 121470,
                        "endTime": 121880,
                        "data": "Tủi"
                    },
                    {
                        "startTime": 121880,
                        "endTime": 121880,
                        "data": "thân"
                    },
                    {
                        "startTime": 121880,
                        "endTime": 122280,
                        "data": "chốn"
                    },
                    {
                        "startTime": 122280,
                        "endTime": 123070,
                        "data": "nao"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 123070,
                        "endTime": 123460,
                        "data": "Giờ"
                    },
                    {
                        "startTime": 123460,
                        "endTime": 123460,
                        "data": "em"
                    },
                    {
                        "startTime": 123460,
                        "endTime": 123860,
                        "data": "rất"
                    },
                    {
                        "startTime": 123860,
                        "endTime": 124270,
                        "data": "vui"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 124270,
                        "endTime": 124670,
                        "data": "Hay"
                    },
                    {
                        "startTime": 124670,
                        "endTime": 124670,
                        "data": "đang"
                    },
                    {
                        "startTime": 124670,
                        "endTime": 125050,
                        "data": "u"
                    },
                    {
                        "startTime": 125050,
                        "endTime": 125860,
                        "data": "sầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125860,
                        "endTime": 125860,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 125860,
                        "endTime": 126250,
                        "data": "xưa"
                    },
                    {
                        "startTime": 126250,
                        "endTime": 126670,
                        "data": "đó"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 126670,
                        "endTime": 126670,
                        "data": "Em"
                    },
                    {
                        "startTime": 126670,
                        "endTime": 127050,
                        "data": "rất"
                    },
                    {
                        "startTime": 127050,
                        "endTime": 127460,
                        "data": "hay"
                    },
                    {
                        "startTime": 127460,
                        "endTime": 127460,
                        "data": "buồn"
                    },
                    {
                        "startTime": 127460,
                        "endTime": 128260,
                        "data": "lâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 128260,
                        "endTime": 128640,
                        "data": "Một"
                    },
                    {
                        "startTime": 128640,
                        "endTime": 129050,
                        "data": "vài"
                    },
                    {
                        "startTime": 129050,
                        "endTime": 129440,
                        "data": "năm"
                    },
                    {
                        "startTime": 129440,
                        "endTime": 129840,
                        "data": "qua"
                    },
                    {
                        "startTime": 129840,
                        "endTime": 129840,
                        "data": "đi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 129840,
                        "endTime": 130250,
                        "data": "Giờ"
                    },
                    {
                        "startTime": 130250,
                        "endTime": 130650,
                        "data": "em"
                    },
                    {
                        "startTime": 130650,
                        "endTime": 130650,
                        "data": "đã"
                    },
                    {
                        "startTime": 130650,
                        "endTime": 131060,
                        "data": "biết"
                    },
                    {
                        "startTime": 131060,
                        "endTime": 131450,
                        "data": "chưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 131450,
                        "endTime": 131860,
                        "data": "Lòng"
                    },
                    {
                        "startTime": 131860,
                        "endTime": 131860,
                        "data": "ta"
                    },
                    {
                        "startTime": 131860,
                        "endTime": 132250,
                        "data": "vốn"
                    },
                    {
                        "startTime": 132250,
                        "endTime": 132670,
                        "data": "dĩ"
                    },
                    {
                        "startTime": 132670,
                        "endTime": 132670,
                        "data": "chẳng"
                    },
                    {
                        "startTime": 132670,
                        "endTime": 133070,
                        "data": "cần"
                    },
                    {
                        "startTime": 133070,
                        "endTime": 133460,
                        "data": "phải"
                    },
                    {
                        "startTime": 133460,
                        "endTime": 134250,
                        "data": "giấu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 134250,
                        "endTime": 134640,
                        "data": "Buồn"
                    },
                    {
                        "startTime": 134640,
                        "endTime": 135040,
                        "data": "thì"
                    },
                    {
                        "startTime": 135040,
                        "endTime": 135040,
                        "data": "buồn"
                    },
                    {
                        "startTime": 135040,
                        "endTime": 135450,
                        "data": "thật"
                    },
                    {
                        "startTime": 135450,
                        "endTime": 135850,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 135850,
                        "endTime": 135850,
                        "data": "Để"
                    },
                    {
                        "startTime": 135850,
                        "endTime": 136250,
                        "data": "hết"
                    },
                    {
                        "startTime": 136250,
                        "endTime": 136250,
                        "data": "rồi"
                    },
                    {
                        "startTime": 136250,
                        "endTime": 137030,
                        "data": "thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 137030,
                        "endTime": 137030,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 137030,
                        "endTime": 137430,
                        "data": "cần"
                    },
                    {
                        "startTime": 137430,
                        "endTime": 137430,
                        "data": "phải"
                    },
                    {
                        "startTime": 137430,
                        "endTime": 137850,
                        "data": "tỏ"
                    },
                    {
                        "startTime": 137850,
                        "endTime": 138230,
                        "data": "vẻ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 138230,
                        "endTime": 138230,
                        "data": "Là"
                    },
                    {
                        "startTime": 138230,
                        "endTime": 138620,
                        "data": "mình"
                    },
                    {
                        "startTime": 138620,
                        "endTime": 138620,
                        "data": "mạnh"
                    },
                    {
                        "startTime": 138620,
                        "endTime": 139030,
                        "data": "mẽ"
                    },
                    {
                        "startTime": 139030,
                        "endTime": 139030,
                        "data": "mình"
                    },
                    {
                        "startTime": 139030,
                        "endTime": 139860,
                        "data": "tôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 139860,
                        "endTime": 140260,
                        "data": "Ừ"
                    },
                    {
                        "startTime": 140260,
                        "endTime": 140650,
                        "data": "thì"
                    },
                    {
                        "startTime": 140650,
                        "endTime": 141040,
                        "data": "mình"
                    },
                    {
                        "startTime": 141040,
                        "endTime": 141040,
                        "data": "một"
                    },
                    {
                        "startTime": 141040,
                        "endTime": 141440,
                        "data": "mình"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 141440,
                        "endTime": 141440,
                        "data": "Cũng"
                    },
                    {
                        "startTime": 141440,
                        "endTime": 141860,
                        "data": "tốt"
                    },
                    {
                        "startTime": 141860,
                        "endTime": 141860,
                        "data": "được"
                    },
                    {
                        "startTime": 141860,
                        "endTime": 142230,
                        "data": "thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 142230,
                        "endTime": 142650,
                        "data": "Đâu"
                    },
                    {
                        "startTime": 142650,
                        "endTime": 143040,
                        "data": "có"
                    },
                    {
                        "startTime": 143040,
                        "endTime": 143040,
                        "data": "cần"
                    },
                    {
                        "startTime": 143040,
                        "endTime": 143430,
                        "data": "tỏ"
                    },
                    {
                        "startTime": 143430,
                        "endTime": 143430,
                        "data": "ra"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 143430,
                        "endTime": 143830,
                        "data": "Tôi"
                    },
                    {
                        "startTime": 143830,
                        "endTime": 143830,
                        "data": "chẳng"
                    },
                    {
                        "startTime": 143830,
                        "endTime": 144240,
                        "data": "cần"
                    },
                    {
                        "startTime": 144240,
                        "endTime": 144630,
                        "data": "ai"
                    },
                    {
                        "startTime": 144630,
                        "endTime": 144630,
                        "data": "sánh"
                    },
                    {
                        "startTime": 144630,
                        "endTime": 145440,
                        "data": "đôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 145440,
                        "endTime": 145840,
                        "data": "Có"
                    },
                    {
                        "startTime": 145840,
                        "endTime": 145840,
                        "data": "người"
                    },
                    {
                        "startTime": 145840,
                        "endTime": 146240,
                        "data": "thương"
                    },
                    {
                        "startTime": 146240,
                        "endTime": 146630,
                        "data": "em"
                    },
                    {
                        "startTime": 146630,
                        "endTime": 147030,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 147030,
                        "endTime": 147420,
                        "data": "Lúc"
                    },
                    {
                        "startTime": 147420,
                        "endTime": 147830,
                        "data": "trời"
                    },
                    {
                        "startTime": 147830,
                        "endTime": 147830,
                        "data": "đổ"
                    },
                    {
                        "startTime": 147830,
                        "endTime": 148210,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 148210,
                        "endTime": 148630,
                        "data": "Có"
                    },
                    {
                        "startTime": 148630,
                        "endTime": 148630,
                        "data": "người"
                    },
                    {
                        "startTime": 148630,
                        "endTime": 149010,
                        "data": "nào"
                    },
                    {
                        "startTime": 149010,
                        "endTime": 149010,
                        "data": "sẽ"
                    },
                    {
                        "startTime": 149010,
                        "endTime": 149410,
                        "data": "đưa"
                    },
                    {
                        "startTime": 149410,
                        "endTime": 149810,
                        "data": "em"
                    },
                    {
                        "startTime": 149810,
                        "endTime": 150200,
                        "data": "về"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 150200,
                        "endTime": 150610,
                        "data": "Có"
                    },
                    {
                        "startTime": 150610,
                        "endTime": 151000,
                        "data": "một"
                    },
                    {
                        "startTime": 151000,
                        "endTime": 151410,
                        "data": "người"
                    },
                    {
                        "startTime": 151410,
                        "endTime": 151410,
                        "data": "care"
                    },
                    {
                        "startTime": 151410,
                        "endTime": 151810,
                        "data": "em"
                    },
                    {
                        "startTime": 151810,
                        "endTime": 152610,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 152610,
                        "endTime": 153010,
                        "data": "Lo"
                    },
                    {
                        "startTime": 153010,
                        "endTime": 153010,
                        "data": "lúc"
                    },
                    {
                        "startTime": 153010,
                        "endTime": 153390,
                        "data": "mệt"
                    },
                    {
                        "startTime": 153390,
                        "endTime": 153390,
                        "data": "mỏi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 153390,
                        "endTime": 153790,
                        "data": "Em"
                    },
                    {
                        "startTime": 153790,
                        "endTime": 154200,
                        "data": "có"
                    },
                    {
                        "startTime": 154200,
                        "endTime": 154200,
                        "data": "người"
                    },
                    {
                        "startTime": 154200,
                        "endTime": 154590,
                        "data": "nào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 154590,
                        "endTime": 154590,
                        "data": "Nhắn"
                    },
                    {
                        "startTime": 154590,
                        "endTime": 154980,
                        "data": "are"
                    },
                    {
                        "startTime": 154980,
                        "endTime": 155390,
                        "data": "you"
                    },
                    {
                        "startTime": 155390,
                        "endTime": 155670,
                        "data": "okay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 155670,
                        "endTime": 156210,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 156210,
                        "endTime": 156210,
                        "data": "để"
                    },
                    {
                        "startTime": 156210,
                        "endTime": 156740,
                        "data": "tôi"
                    },
                    {
                        "startTime": 156740,
                        "endTime": 156740,
                        "data": "ôm"
                    },
                    {
                        "startTime": 156740,
                        "endTime": 157260,
                        "data": "lấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 157260,
                        "endTime": 157260,
                        "data": "Điều"
                    },
                    {
                        "startTime": 157260,
                        "endTime": 157800,
                        "data": "bận"
                    },
                    {
                        "startTime": 157800,
                        "endTime": 158320,
                        "data": "lòng"
                    },
                    {
                        "startTime": 158320,
                        "endTime": 158320,
                        "data": "hôm"
                    },
                    {
                        "startTime": 158320,
                        "endTime": 158840,
                        "data": "nay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 158840,
                        "endTime": 159370,
                        "data": "Để"
                    },
                    {
                        "startTime": 159370,
                        "endTime": 159370,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 159370,
                        "endTime": 159920,
                        "data": "khi"
                    },
                    {
                        "startTime": 159920,
                        "endTime": 160460,
                        "data": "cầm"
                    },
                    {
                        "startTime": 160460,
                        "endTime": 160980,
                        "data": "tay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 160980,
                        "endTime": 161510,
                        "data": "Xoa"
                    },
                    {
                        "startTime": 161510,
                        "endTime": 162030,
                        "data": "dịu"
                    },
                    {
                        "startTime": 162030,
                        "endTime": 162590,
                        "data": "em"
                    },
                    {
                        "startTime": 162590,
                        "endTime": 163110,
                        "data": "với"
                    },
                    {
                        "startTime": 163110,
                        "endTime": 163110,
                        "data": "câu"
                    },
                    {
                        "startTime": 163110,
                        "endTime": 163640,
                        "data": "hát"
                    },
                    {
                        "startTime": 163640,
                        "endTime": 164700,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 164700,
                        "endTime": 164700,
                        "data": "Vì"
                    },
                    {
                        "startTime": 164700,
                        "endTime": 165230,
                        "data": "những"
                    },
                    {
                        "startTime": 165230,
                        "endTime": 165750,
                        "data": "giai"
                    },
                    {
                        "startTime": 165750,
                        "endTime": 165750,
                        "data": "điệu"
                    },
                    {
                        "startTime": 165750,
                        "endTime": 166290,
                        "data": "ngọt"
                    },
                    {
                        "startTime": 166290,
                        "endTime": 166810,
                        "data": "ngào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 166810,
                        "endTime": 166810,
                        "data": "Mà"
                    },
                    {
                        "startTime": 166810,
                        "endTime": 167350,
                        "data": "tôi"
                    },
                    {
                        "startTime": 167350,
                        "endTime": 168420,
                        "data": "viết"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 168420,
                        "endTime": 168420,
                        "data": "Chính"
                    },
                    {
                        "startTime": 168420,
                        "endTime": 168940,
                        "data": "là"
                    },
                    {
                        "startTime": 168940,
                        "endTime": 169500,
                        "data": "để"
                    },
                    {
                        "startTime": 169500,
                        "endTime": 169500,
                        "data": "tôi"
                    },
                    {
                        "startTime": 169500,
                        "endTime": 170020,
                        "data": "ôm"
                    },
                    {
                        "startTime": 170020,
                        "endTime": 171070,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 171070,
                        "endTime": 171070,
                        "data": "An"
                    },
                    {
                        "startTime": 171070,
                        "endTime": 171590,
                        "data": "ủi"
                    },
                    {
                        "startTime": 171590,
                        "endTime": 172150,
                        "data": "em"
                    },
                    {
                        "startTime": 172150,
                        "endTime": 172150,
                        "data": "vào"
                    },
                    {
                        "startTime": 172150,
                        "endTime": 172720,
                        "data": "ngày"
                    },
                    {
                        "startTime": 172720,
                        "endTime": 173240,
                        "data": "cuộc"
                    },
                    {
                        "startTime": 173240,
                        "endTime": 173760,
                        "data": "sống"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 173760,
                        "endTime": 173760,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 173760,
                        "endTime": 174280,
                        "data": "dễ"
                    },
                    {
                        "startTime": 174280,
                        "endTime": 174820,
                        "data": "dàng"
                    },
                    {
                        "startTime": 174820,
                        "endTime": 175350,
                        "data": "mấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 175350,
                        "endTime": 175880,
                        "data": "Hãy"
                    },
                    {
                        "startTime": 175880,
                        "endTime": 176430,
                        "data": "để"
                    },
                    {
                        "startTime": 176430,
                        "endTime": 176430,
                        "data": "tôi"
                    },
                    {
                        "startTime": 176430,
                        "endTime": 176960,
                        "data": "ôm"
                    },
                    {
                        "startTime": 176960,
                        "endTime": 178010,
                        "data": "lấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 178010,
                        "endTime": 178560,
                        "data": "Điều"
                    },
                    {
                        "startTime": 178560,
                        "endTime": 179090,
                        "data": "bận"
                    },
                    {
                        "startTime": 179090,
                        "endTime": 179090,
                        "data": "lòng"
                    },
                    {
                        "startTime": 179090,
                        "endTime": 179610,
                        "data": "hôm"
                    },
                    {
                        "startTime": 179610,
                        "endTime": 180660,
                        "data": "nay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 180660,
                        "endTime": 181220,
                        "data": "Để"
                    },
                    {
                        "startTime": 181220,
                        "endTime": 181220,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 181220,
                        "endTime": 181750,
                        "data": "khi"
                    },
                    {
                        "startTime": 181750,
                        "endTime": 182290,
                        "data": "cầm"
                    },
                    {
                        "startTime": 182290,
                        "endTime": 182820,
                        "data": "tay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 182820,
                        "endTime": 183350,
                        "data": "Xoa"
                    },
                    {
                        "startTime": 183350,
                        "endTime": 183900,
                        "data": "dịu"
                    },
                    {
                        "startTime": 183900,
                        "endTime": 184430,
                        "data": "em"
                    },
                    {
                        "startTime": 184430,
                        "endTime": 184960,
                        "data": "bằng"
                    },
                    {
                        "startTime": 184960,
                        "endTime": 184960,
                        "data": "câu"
                    },
                    {
                        "startTime": 184960,
                        "endTime": 185480,
                        "data": "hát"
                    },
                    {
                        "startTime": 185480,
                        "endTime": 186540,
                        "data": "hay"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 186540,
                        "endTime": 186540,
                        "data": "Để"
                    },
                    {
                        "startTime": 186540,
                        "endTime": 187080,
                        "data": "những"
                    },
                    {
                        "startTime": 187080,
                        "endTime": 187620,
                        "data": "thanh"
                    },
                    {
                        "startTime": 187620,
                        "endTime": 187620,
                        "data": "âm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 187620,
                        "endTime": 188140,
                        "data": "Thật"
                    },
                    {
                        "startTime": 188140,
                        "endTime": 188670,
                        "data": "thà"
                    },
                    {
                        "startTime": 188670,
                        "endTime": 188670,
                        "data": "từ"
                    },
                    {
                        "startTime": 188670,
                        "endTime": 189190,
                        "data": "tim"
                    },
                    {
                        "startTime": 189190,
                        "endTime": 189730,
                        "data": "tôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 189730,
                        "endTime": 190250,
                        "data": "Có"
                    },
                    {
                        "startTime": 190250,
                        "endTime": 190790,
                        "data": "thể"
                    },
                    {
                        "startTime": 190790,
                        "endTime": 191340,
                        "data": "sưởi"
                    },
                    {
                        "startTime": 191340,
                        "endTime": 191340,
                        "data": "ấm"
                    },
                    {
                        "startTime": 191340,
                        "endTime": 191850,
                        "data": "tim"
                    },
                    {
                        "startTime": 191850,
                        "endTime": 192920,
                        "data": "người"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 192920,
                        "endTime": 192920,
                        "data": "Luôn"
                    },
                    {
                        "startTime": 192920,
                        "endTime": 193450,
                        "data": "gần"
                    },
                    {
                        "startTime": 193450,
                        "endTime": 193970,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 193970,
                        "endTime": 193970,
                        "data": "Dù"
                    },
                    {
                        "startTime": 193970,
                        "endTime": 194510,
                        "data": "ta"
                    },
                    {
                        "startTime": 194510,
                        "endTime": 195030,
                        "data": "cách"
                    },
                    {
                        "startTime": 195030,
                        "endTime": 195560,
                        "data": "xa"
                    },
                    {
                        "startTime": 195560,
                        "endTime": 196120,
                        "data": "mây"
                    },
                    {
                        "startTime": 196120,
                        "endTime": 199120,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 225010,
                        "endTime": 225010,
                        "data": "Cuộc"
                    },
                    {
                        "startTime": 225010,
                        "endTime": 225540,
                        "data": "đời"
                    },
                    {
                        "startTime": 225540,
                        "endTime": 226070,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 226070,
                        "endTime": 226070,
                        "data": "Là"
                    },
                    {
                        "startTime": 226070,
                        "endTime": 227650,
                        "data": "những"
                    },
                    {
                        "startTime": 227650,
                        "endTime": 228180,
                        "data": "gặp"
                    },
                    {
                        "startTime": 228180,
                        "endTime": 228710,
                        "data": "mặt"
                    },
                    {
                        "startTime": 228710,
                        "endTime": 228710,
                        "data": "và"
                    },
                    {
                        "startTime": 228710,
                        "endTime": 229260,
                        "data": "chia"
                    },
                    {
                        "startTime": 229260,
                        "endTime": 230830,
                        "data": "ly"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 230830,
                        "endTime": 231370,
                        "data": "Và"
                    },
                    {
                        "startTime": 231370,
                        "endTime": 231900,
                        "data": "mình"
                    },
                    {
                        "startTime": 231900,
                        "endTime": 232420,
                        "data": "lớn"
                    },
                    {
                        "startTime": 232420,
                        "endTime": 232420,
                        "data": "dần"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 232420,
                        "endTime": 232950,
                        "data": "Khi"
                    },
                    {
                        "startTime": 232950,
                        "endTime": 233510,
                        "data": "trái"
                    },
                    {
                        "startTime": 233510,
                        "endTime": 234030,
                        "data": "tim"
                    },
                    {
                        "startTime": 234030,
                        "endTime": 234560,
                        "data": "biết"
                    },
                    {
                        "startTime": 234560,
                        "endTime": 235080,
                        "data": "nói"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 235080,
                        "endTime": 235080,
                        "data": "Lời"
                    },
                    {
                        "startTime": 235080,
                        "endTime": 235610,
                        "data": "giã"
                    },
                    {
                        "startTime": 235610,
                        "endTime": 237220,
                        "data": "biệt"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 237220,
                        "endTime": 237750,
                        "data": "Thì"
                    },
                    {
                        "startTime": 237750,
                        "endTime": 237750,
                        "data": "những"
                    },
                    {
                        "startTime": 237750,
                        "endTime": 238260,
                        "data": "giai"
                    },
                    {
                        "startTime": 238260,
                        "endTime": 238800,
                        "data": "điệu"
                    },
                    {
                        "startTime": 238800,
                        "endTime": 238800,
                        "data": "ngọt"
                    },
                    {
                        "startTime": 238800,
                        "endTime": 239330,
                        "data": "ngào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 239330,
                        "endTime": 239860,
                        "data": "Mà"
                    },
                    {
                        "startTime": 239860,
                        "endTime": 240420,
                        "data": "tôi"
                    },
                    {
                        "startTime": 240420,
                        "endTime": 240950,
                        "data": "viết"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 240950,
                        "endTime": 241450,
                        "data": "Chính"
                    },
                    {
                        "startTime": 241450,
                        "endTime": 242010,
                        "data": "là"
                    },
                    {
                        "startTime": 242010,
                        "endTime": 242530,
                        "data": "để"
                    },
                    {
                        "startTime": 242530,
                        "endTime": 242530,
                        "data": "tôi"
                    },
                    {
                        "startTime": 242530,
                        "endTime": 243060,
                        "data": "ôm"
                    },
                    {
                        "startTime": 243060,
                        "endTime": 244110,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 244110,
                        "endTime": 244670,
                        "data": "An"
                    },
                    {
                        "startTime": 244670,
                        "endTime": 244670,
                        "data": "ủi"
                    },
                    {
                        "startTime": 244670,
                        "endTime": 245180,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 245180,
                        "endTime": 245720,
                        "data": "Dù"
                    },
                    {
                        "startTime": 245720,
                        "endTime": 246250,
                        "data": "ta"
                    },
                    {
                        "startTime": 246250,
                        "endTime": 246770,
                        "data": "cách"
                    },
                    {
                        "startTime": 246770,
                        "endTime": 249960,
                        "data": "xa"
                    },
                    {
                        "startTime": 249960,
                        "endTime": 251560,
                        "data": "mây"
                    },
                    {
                        "startTime": 251560,
                        "endTime": 252560,
                        "data": "trời"
                    }
                ]
            }
        ],
        "file": "https://static-zmp3.zmdcdn.me/lyrics/a/4/5/8/a458d2c7ea361c60f62d8fecdbfe5f4e.lrc",
        "enabledVideoBG": true,
        "defaultIBGUrls": [
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
        ],
        "BGMode": 0
    },
    "timestamp": 1720948446232
}
