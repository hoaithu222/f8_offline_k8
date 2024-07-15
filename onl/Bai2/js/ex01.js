var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var previewTime = document.querySelector(".preview-time");
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
    if (e.which !== 1) {
        return;
    }
    isDragging = true;
    var offsetX = e.offsetX;
    var progressBarWidth = progressBar.clientWidth;
    var rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    moveSpace = offsetX;
    lastMoveSpace = offsetX;
});

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    isDragging = true;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
});

document.addEventListener("mouseup", function (e) {
    if (isDragging) {
        isDragging = false;
        var progressBarWidth = progressBar.clientWidth;
        var rate = (moveSpace / progressBarWidth) * 100;
        audio.currentTime = (rate / 100) * audio.duration;
        document.removeEventListener("mousemove", handleDrag);
        lastMoveSpace = moveSpace;
        previewTime.style.display = 'none';
    }
});

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

var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");

var getTimeFormat = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
};

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
        updateKaraoke(currentTime);
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

var openKaraoke = document.querySelector(".open-karaoke button");
var karaoke = document.querySelector(".karaoke");
var closeKaraoke = document.querySelector(".close");

openKaraoke.addEventListener("click", function () {
    karaoke.classList.add("show");
});

closeKaraoke.addEventListener("click", function () {
    karaoke.classList.remove("show");
});

var line1El = document.getElementById("line1");
var line2El = document.getElementById("line2");
var currentPairIndex = 0;

function updateKaraoke(currentTime) {
    var sentences = lyric.data.sentences;
    var displayed = false;

    for (var i = 0; i < sentences.length; i += 2) {
        var sentence1 = sentences[i];
        var sentence2 = sentences[i + 1];

        var sentence1StartTime = sentence1.words[0].startTime / 1000;
        var sentence1EndTime = sentence1.words[sentence1.words.length - 1].endTime / 1000;
        var sentence2StartTime = sentence2.words[0].startTime / 1000;
        var sentence2EndTime = sentence2.words[sentence2.words.length - 1].endTime / 1000;

        if (currentTime >= sentence1StartTime && currentTime <= sentence2EndTime) {
            line1El.innerText = sentence1.words.map(function (word) { return word.data; }).join(' ');
            line2El.innerText = sentence2.words.map(function (word) { return word.data; }).join(' ');
            displayed = true;
            break;
        }
    }

    if (!displayed) {
        line1El.innerText = "Chúng Ta Của Hiện Tại";
        line2El.innerText = "Ca sĩ: Sơn Tùng M-TP";
    }
}

var audioElement = document.querySelector("audio");
audioElement.addEventListener("timeupdate", function () {
    var currentTime = audioElement.currentTime;
    updateKaraoke(currentTime);
});








var lyric = {
    "err": 0,
    "msg": "Success",
    "data": {
        "sentences": [
            {
                "words": [
                    {
                        "startTime": 23080,
                        "endTime": 23610,
                        "data": "Good"
                    },
                    {
                        "startTime": 23610,
                        "endTime": 25730,
                        "data": "boy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 25730,
                        "endTime": 26260,
                        "data": "Mùa"
                    },
                    {
                        "startTime": 26260,
                        "endTime": 26530,
                        "data": "thu"
                    },
                    {
                        "startTime": 26530,
                        "endTime": 26790,
                        "data": "mang"
                    },
                    {
                        "startTime": 26790,
                        "endTime": 27330,
                        "data": "giấc"
                    },
                    {
                        "startTime": 27330,
                        "endTime": 27860,
                        "data": "mơ"
                    },
                    {
                        "startTime": 27860,
                        "endTime": 28120,
                        "data": "quay"
                    },
                    {
                        "startTime": 28120,
                        "endTime": 29980,
                        "data": "về"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 29980,
                        "endTime": 30250,
                        "data": "Vẫn"
                    },
                    {
                        "startTime": 30250,
                        "endTime": 30510,
                        "data": "nguyên"
                    },
                    {
                        "startTime": 30510,
                        "endTime": 30780,
                        "data": "vẹn"
                    },
                    {
                        "startTime": 30780,
                        "endTime": 31050,
                        "data": "như"
                    },
                    {
                        "startTime": 31050,
                        "endTime": 31310,
                        "data": "hôm"
                    },
                    {
                        "startTime": 31310,
                        "endTime": 32900,
                        "data": "nào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 32900,
                        "endTime": 33160,
                        "data": "Lá"
                    },
                    {
                        "startTime": 33160,
                        "endTime": 33430,
                        "data": "bay"
                    },
                    {
                        "startTime": 33430,
                        "endTime": 33700,
                        "data": "theo"
                    },
                    {
                        "startTime": 33700,
                        "endTime": 34230,
                        "data": "gió"
                    },
                    {
                        "startTime": 34230,
                        "endTime": 34760,
                        "data": "xôn"
                    },
                    {
                        "startTime": 34760,
                        "endTime": 36090,
                        "data": "xao"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 36090,
                        "endTime": 36350,
                        "data": "Chốn"
                    },
                    {
                        "startTime": 36350,
                        "endTime": 36620,
                        "data": "xưa"
                    },
                    {
                        "startTime": 36620,
                        "endTime": 36880,
                        "data": "em"
                    },
                    {
                        "startTime": 36880,
                        "endTime": 38480,
                        "data": "chờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 38480,
                        "endTime": 38750,
                        "data": "Đoạn"
                    },
                    {
                        "startTime": 38750,
                        "endTime": 39010,
                        "data": "đường"
                    },
                    {
                        "startTime": 39010,
                        "endTime": 39280,
                        "data": "ngày"
                    },
                    {
                        "startTime": 39280,
                        "endTime": 39280,
                        "data": "nào"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 39280,
                        "endTime": 39540,
                        "data": "Hôm"
                    },
                    {
                        "startTime": 39540,
                        "endTime": 39810,
                        "data": "nay"
                    },
                    {
                        "startTime": 39810,
                        "endTime": 40070,
                        "data": "ta"
                    },
                    {
                        "startTime": 40070,
                        "endTime": 40340,
                        "data": "từng"
                    },
                    {
                        "startTime": 40340,
                        "endTime": 40600,
                        "data": "đón"
                    },
                    {
                        "startTime": 40600,
                        "endTime": 42190,
                        "data": "đưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 42190,
                        "endTime": 42190,
                        "data": "Còn"
                    },
                    {
                        "startTime": 42190,
                        "endTime": 42730,
                        "data": "vẫn"
                    },
                    {
                        "startTime": 42730,
                        "endTime": 42990,
                        "data": "vương"
                    },
                    {
                        "startTime": 42990,
                        "endTime": 43260,
                        "data": "không"
                    },
                    {
                        "startTime": 43260,
                        "endTime": 43530,
                        "data": "phai"
                    },
                    {
                        "startTime": 43530,
                        "endTime": 45130,
                        "data": "mờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45130,
                        "endTime": 45660,
                        "data": "Dấu"
                    },
                    {
                        "startTime": 45660,
                        "endTime": 46180,
                        "data": "yêu"
                    },
                    {
                        "startTime": 46180,
                        "endTime": 46710,
                        "data": "thương"
                    },
                    {
                        "startTime": 46710,
                        "endTime": 46980,
                        "data": "trong"
                    },
                    {
                        "startTime": 46980,
                        "endTime": 47240,
                        "data": "vần"
                    },
                    {
                        "startTime": 47240,
                        "endTime": 48570,
                        "data": "thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48570,
                        "endTime": 49110,
                        "data": "Chúng"
                    },
                    {
                        "startTime": 49110,
                        "endTime": 51230,
                        "data": "ta"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 51230,
                        "endTime": 51490,
                        "data": "Là"
                    },
                    {
                        "startTime": 51490,
                        "endTime": 51760,
                        "data": "áng"
                    },
                    {
                        "startTime": 51760,
                        "endTime": 52020,
                        "data": "mây"
                    },
                    {
                        "startTime": 52020,
                        "endTime": 52290,
                        "data": "bên"
                    },
                    {
                        "startTime": 52290,
                        "endTime": 52560,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 52560,
                        "endTime": 52830,
                        "data": "Vội"
                    },
                    {
                        "startTime": 52830,
                        "endTime": 53090,
                        "data": "vàng"
                    },
                    {
                        "startTime": 53090,
                        "endTime": 53360,
                        "data": "ngang"
                    },
                    {
                        "startTime": 53360,
                        "endTime": 54940,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 54940,
                        "endTime": 55210,
                        "data": "Chúng"
                    },
                    {
                        "startTime": 55210,
                        "endTime": 57610,
                        "data": "ta"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 57610,
                        "endTime": 57870,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 57870,
                        "endTime": 58140,
                        "data": "thể"
                    },
                    {
                        "startTime": 58140,
                        "endTime": 58400,
                        "data": "nâng"
                    },
                    {
                        "startTime": 58400,
                        "endTime": 59190,
                        "data": "niu"
                    },
                    {
                        "startTime": 59190,
                        "endTime": 59460,
                        "data": "những"
                    },
                    {
                        "startTime": 59460,
                        "endTime": 59730,
                        "data": "câu"
                    },
                    {
                        "startTime": 59730,
                        "endTime": 60520,
                        "data": "thề"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 60520,
                        "endTime": 60790,
                        "data": "Cứ"
                    },
                    {
                        "startTime": 60790,
                        "endTime": 61060,
                        "data": "như"
                    },
                    {
                        "startTime": 61060,
                        "endTime": 61320,
                        "data": "vậy"
                    },
                    {
                        "startTime": 61320,
                        "endTime": 62380,
                        "data": "thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 62380,
                        "endTime": 62650,
                        "data": "Không"
                    },
                    {
                        "startTime": 62650,
                        "endTime": 62910,
                        "data": "một"
                    },
                    {
                        "startTime": 62910,
                        "endTime": 63980,
                        "data": "lời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 63980,
                        "endTime": 64240,
                        "data": "Lặng"
                    },
                    {
                        "startTime": 64240,
                        "endTime": 64510,
                        "data": "lẽ"
                    },
                    {
                        "startTime": 64510,
                        "endTime": 64770,
                        "data": "thế"
                    },
                    {
                        "startTime": 64770,
                        "endTime": 65040,
                        "data": "chia"
                    },
                    {
                        "startTime": 65040,
                        "endTime": 66370,
                        "data": "xa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 66370,
                        "endTime": 66910,
                        "data": "Chiều"
                    },
                    {
                        "startTime": 66910,
                        "endTime": 67160,
                        "data": "mưa"
                    },
                    {
                        "startTime": 67160,
                        "endTime": 67440,
                        "data": "bên"
                    },
                    {
                        "startTime": 67440,
                        "endTime": 67960,
                        "data": "hiên"
                    },
                    {
                        "startTime": 67960,
                        "endTime": 68490,
                        "data": "vắng"
                    },
                    {
                        "startTime": 68490,
                        "endTime": 69750,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 69750,
                        "endTime": 70010,
                        "data": "Còn"
                    },
                    {
                        "startTime": 70010,
                        "endTime": 70280,
                        "data": "ai"
                    },
                    {
                        "startTime": 70280,
                        "endTime": 70550,
                        "data": "thương"
                    },
                    {
                        "startTime": 70550,
                        "endTime": 71610,
                        "data": "ai,"
                    },
                    {
                        "startTime": 71610,
                        "endTime": 71880,
                        "data": "mong"
                    },
                    {
                        "startTime": 71880,
                        "endTime": 72670,
                        "data": "ai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 72670,
                        "endTime": 72930,
                        "data": "Điều"
                    },
                    {
                        "startTime": 72930,
                        "endTime": 73200,
                        "data": "anh"
                    },
                    {
                        "startTime": 73200,
                        "endTime": 73470,
                        "data": "luôn"
                    },
                    {
                        "startTime": 73470,
                        "endTime": 73730,
                        "data": "giữ"
                    },
                    {
                        "startTime": 73730,
                        "endTime": 74000,
                        "data": "kín"
                    },
                    {
                        "startTime": 74000,
                        "endTime": 74260,
                        "data": "trong"
                    },
                    {
                        "startTime": 74260,
                        "endTime": 74530,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 74530,
                        "endTime": 74800,
                        "data": "Thương"
                    },
                    {
                        "startTime": 74800,
                        "endTime": 75060,
                        "data": "em"
                    },
                    {
                        "startTime": 75060,
                        "endTime": 75060,
                        "data": "đôi"
                    },
                    {
                        "startTime": 75060,
                        "endTime": 75330,
                        "data": "mắt"
                    },
                    {
                        "startTime": 75330,
                        "endTime": 75600,
                        "data": "ướt"
                    },
                    {
                        "startTime": 75600,
                        "endTime": 75860,
                        "data": "nhòa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 75860,
                        "endTime": 76120,
                        "data": "Điều"
                    },
                    {
                        "startTime": 76120,
                        "endTime": 76390,
                        "data": "anh"
                    },
                    {
                        "startTime": 76390,
                        "endTime": 76660,
                        "data": "luôn"
                    },
                    {
                        "startTime": 76660,
                        "endTime": 76660,
                        "data": "giữ"
                    },
                    {
                        "startTime": 76660,
                        "endTime": 76930,
                        "data": "kín"
                    },
                    {
                        "startTime": 76930,
                        "endTime": 77200,
                        "data": "trong"
                    },
                    {
                        "startTime": 77200,
                        "endTime": 77470,
                        "data": "tim"
                    },
                    {
                        "startTime": 77470,
                        "endTime": 78000,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 78000,
                        "endTime": 78260,
                        "data": "Thương"
                    },
                    {
                        "startTime": 78260,
                        "endTime": 78260,
                        "data": "em"
                    },
                    {
                        "startTime": 78260,
                        "endTime": 78530,
                        "data": "đâu"
                    },
                    {
                        "startTime": 78530,
                        "endTime": 78800,
                        "data": "đó"
                    },
                    {
                        "startTime": 78800,
                        "endTime": 78800,
                        "data": "khóc"
                    },
                    {
                        "startTime": 78800,
                        "endTime": 79330,
                        "data": "òa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 79330,
                        "endTime": 79330,
                        "data": "Điều"
                    },
                    {
                        "startTime": 79330,
                        "endTime": 79600,
                        "data": "anh"
                    },
                    {
                        "startTime": 79600,
                        "endTime": 79860,
                        "data": "luôn"
                    },
                    {
                        "startTime": 79860,
                        "endTime": 80120,
                        "data": "giữ"
                    },
                    {
                        "startTime": 80120,
                        "endTime": 80120,
                        "data": "kín"
                    },
                    {
                        "startTime": 80120,
                        "endTime": 80390,
                        "data": "trong"
                    },
                    {
                        "startTime": 80390,
                        "endTime": 80660,
                        "data": "tim"
                    },
                    {
                        "startTime": 80660,
                        "endTime": 80920,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 80920,
                        "endTime": 81190,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 81190,
                        "endTime": 81450,
                        "data": "mai,"
                    },
                    {
                        "startTime": 81450,
                        "endTime": 81450,
                        "data": "nắng"
                    },
                    {
                        "startTime": 81450,
                        "endTime": 81720,
                        "data": "gió,"
                    },
                    {
                        "startTime": 81720,
                        "endTime": 82000,
                        "data": "sương"
                    },
                    {
                        "startTime": 82000,
                        "endTime": 82250,
                        "data": "hao"
                    },
                    {
                        "startTime": 82250,
                        "endTime": 82510,
                        "data": "gầy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 82510,
                        "endTime": 82780,
                        "data": "Có"
                    },
                    {
                        "startTime": 82780,
                        "endTime": 82780,
                        "data": "ai"
                    },
                    {
                        "startTime": 82780,
                        "endTime": 83050,
                        "data": "thương"
                    },
                    {
                        "startTime": 83050,
                        "endTime": 83050,
                        "data": "lắng"
                    },
                    {
                        "startTime": 83050,
                        "endTime": 83310,
                        "data": "lo"
                    },
                    {
                        "startTime": 83310,
                        "endTime": 83580,
                        "data": "cho"
                    },
                    {
                        "startTime": 83580,
                        "endTime": 84110,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 84110,
                        "endTime": 85170,
                        "data": "Whoo-whoo-whoo"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 85170,
                        "endTime": 85440,
                        "data": "Điều"
                    },
                    {
                        "startTime": 85440,
                        "endTime": 85440,
                        "data": "anh"
                    },
                    {
                        "startTime": 85440,
                        "endTime": 85700,
                        "data": "luôn"
                    },
                    {
                        "startTime": 85700,
                        "endTime": 85970,
                        "data": "giữ"
                    },
                    {
                        "startTime": 85970,
                        "endTime": 86230,
                        "data": "kín"
                    },
                    {
                        "startTime": 86230,
                        "endTime": 86510,
                        "data": "trong"
                    },
                    {
                        "startTime": 86510,
                        "endTime": 86760,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 86760,
                        "endTime": 87030,
                        "data": "Thương"
                    },
                    {
                        "startTime": 87030,
                        "endTime": 87030,
                        "data": "em"
                    },
                    {
                        "startTime": 87030,
                        "endTime": 87300,
                        "data": "anh"
                    },
                    {
                        "startTime": 87300,
                        "endTime": 87560,
                        "data": "mãi"
                    },
                    {
                        "startTime": 87560,
                        "endTime": 87830,
                        "data": "xin"
                    },
                    {
                        "startTime": 87830,
                        "endTime": 88100,
                        "data": "là"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 88100,
                        "endTime": 88360,
                        "data": "Điều"
                    },
                    {
                        "startTime": 88360,
                        "endTime": 88630,
                        "data": "anh"
                    },
                    {
                        "startTime": 88630,
                        "endTime": 88630,
                        "data": "luôn"
                    },
                    {
                        "startTime": 88630,
                        "endTime": 88890,
                        "data": "giữ"
                    },
                    {
                        "startTime": 88890,
                        "endTime": 89160,
                        "data": "kín"
                    },
                    {
                        "startTime": 89160,
                        "endTime": 89420,
                        "data": "trong"
                    },
                    {
                        "startTime": 89420,
                        "endTime": 89690,
                        "data": "tim"
                    },
                    {
                        "startTime": 89690,
                        "endTime": 90230,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 90230,
                        "endTime": 90230,
                        "data": "Thương"
                    },
                    {
                        "startTime": 90230,
                        "endTime": 90500,
                        "data": "em"
                    },
                    {
                        "startTime": 90500,
                        "endTime": 90760,
                        "data": "vì"
                    },
                    {
                        "startTime": 90760,
                        "endTime": 91030,
                        "data": "thương"
                    },
                    {
                        "startTime": 91030,
                        "endTime": 91030,
                        "data": "thôi"
                    },
                    {
                        "startTime": 91030,
                        "endTime": 91300,
                        "data": "mà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 91300,
                        "endTime": 91560,
                        "data": "Điều"
                    },
                    {
                        "startTime": 91560,
                        "endTime": 91830,
                        "data": "anh"
                    },
                    {
                        "startTime": 91830,
                        "endTime": 91830,
                        "data": "luôn"
                    },
                    {
                        "startTime": 91830,
                        "endTime": 92110,
                        "data": "giữ"
                    },
                    {
                        "startTime": 92110,
                        "endTime": 92370,
                        "data": "kín"
                    },
                    {
                        "startTime": 92370,
                        "endTime": 92640,
                        "data": "trong"
                    },
                    {
                        "startTime": 92640,
                        "endTime": 92910,
                        "data": "tim"
                    },
                    {
                        "startTime": 92910,
                        "endTime": 93170,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 93170,
                        "endTime": 93440,
                        "data": "Dù"
                    },
                    {
                        "startTime": 93440,
                        "endTime": 93700,
                        "data": "cho"
                    },
                    {
                        "startTime": 93700,
                        "endTime": 93970,
                        "data": "nắng"
                    },
                    {
                        "startTime": 93970,
                        "endTime": 93970,
                        "data": "tắt,"
                    },
                    {
                        "startTime": 93970,
                        "endTime": 94240,
                        "data": "xuân"
                    },
                    {
                        "startTime": 94240,
                        "endTime": 94510,
                        "data": "thay"
                    },
                    {
                        "startTime": 94510,
                        "endTime": 94760,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 94760,
                        "endTime": 95030,
                        "data": "Héo"
                    },
                    {
                        "startTime": 95030,
                        "endTime": 95290,
                        "data": "khô"
                    },
                    {
                        "startTime": 95290,
                        "endTime": 95290,
                        "data": "đi"
                    },
                    {
                        "startTime": 95290,
                        "endTime": 95560,
                        "data": "tháng"
                    },
                    {
                        "startTime": 95560,
                        "endTime": 95830,
                        "data": "năm"
                    },
                    {
                        "startTime": 95830,
                        "endTime": 95830,
                        "data": "xưa"
                    },
                    {
                        "startTime": 95830,
                        "endTime": 96630,
                        "data": "kia"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 96630,
                        "endTime": 96890,
                        "data": "Anh"
                    },
                    {
                        "startTime": 96890,
                        "endTime": 96890,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 96890,
                        "endTime": 97160,
                        "data": "ghi"
                    },
                    {
                        "startTime": 97160,
                        "endTime": 97690,
                        "data": "mãi"
                    },
                    {
                        "startTime": 97690,
                        "endTime": 98220,
                        "data": "trong"
                    },
                    {
                        "startTime": 98220,
                        "endTime": 101220,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 122750,
                        "endTime": 123010,
                        "data": "Chúng"
                    },
                    {
                        "startTime": 123010,
                        "endTime": 125130,
                        "data": "ta"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 125130,
                        "endTime": 125400,
                        "data": "Là"
                    },
                    {
                        "startTime": 125400,
                        "endTime": 125660,
                        "data": "áng"
                    },
                    {
                        "startTime": 125660,
                        "endTime": 125660,
                        "data": "mây"
                    },
                    {
                        "startTime": 125660,
                        "endTime": 125930,
                        "data": "bên"
                    },
                    {
                        "startTime": 125930,
                        "endTime": 126460,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 126460,
                        "endTime": 126730,
                        "data": "Vội"
                    },
                    {
                        "startTime": 126730,
                        "endTime": 126990,
                        "data": "vàng"
                    },
                    {
                        "startTime": 126990,
                        "endTime": 127260,
                        "data": "ngang"
                    },
                    {
                        "startTime": 127260,
                        "endTime": 128580,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 128580,
                        "endTime": 128850,
                        "data": "Chúng"
                    },
                    {
                        "startTime": 128850,
                        "endTime": 131450,
                        "data": "ta"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 131450,
                        "endTime": 131710,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 131710,
                        "endTime": 131970,
                        "data": "thể"
                    },
                    {
                        "startTime": 131970,
                        "endTime": 132240,
                        "data": "nâng"
                    },
                    {
                        "startTime": 132240,
                        "endTime": 133040,
                        "data": "niu"
                    },
                    {
                        "startTime": 133040,
                        "endTime": 133300,
                        "data": "những"
                    },
                    {
                        "startTime": 133300,
                        "endTime": 133830,
                        "data": "câu"
                    },
                    {
                        "startTime": 133830,
                        "endTime": 134370,
                        "data": "thề"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 134370,
                        "endTime": 134630,
                        "data": "Cứ"
                    },
                    {
                        "startTime": 134630,
                        "endTime": 134900,
                        "data": "như"
                    },
                    {
                        "startTime": 134900,
                        "endTime": 135170,
                        "data": "vậy"
                    },
                    {
                        "startTime": 135170,
                        "endTime": 136230,
                        "data": "thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 136230,
                        "endTime": 136500,
                        "data": "Không"
                    },
                    {
                        "startTime": 136500,
                        "endTime": 136760,
                        "data": "một"
                    },
                    {
                        "startTime": 136760,
                        "endTime": 137820,
                        "data": "lời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 137820,
                        "endTime": 138080,
                        "data": "Lặng"
                    },
                    {
                        "startTime": 138080,
                        "endTime": 138350,
                        "data": "lẽ"
                    },
                    {
                        "startTime": 138350,
                        "endTime": 138610,
                        "data": "thế"
                    },
                    {
                        "startTime": 138610,
                        "endTime": 138880,
                        "data": "chia"
                    },
                    {
                        "startTime": 138880,
                        "endTime": 140470,
                        "data": "xa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 140470,
                        "endTime": 140740,
                        "data": "Chiều"
                    },
                    {
                        "startTime": 140740,
                        "endTime": 141000,
                        "data": "mưa"
                    },
                    {
                        "startTime": 141000,
                        "endTime": 141280,
                        "data": "bên"
                    },
                    {
                        "startTime": 141280,
                        "endTime": 142070,
                        "data": "hiên"
                    },
                    {
                        "startTime": 142070,
                        "endTime": 142330,
                        "data": "vắng"
                    },
                    {
                        "startTime": 142330,
                        "endTime": 143660,
                        "data": "buồn"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 143660,
                        "endTime": 143930,
                        "data": "Còn"
                    },
                    {
                        "startTime": 143930,
                        "endTime": 143930,
                        "data": "ai"
                    },
                    {
                        "startTime": 143930,
                        "endTime": 144460,
                        "data": "thương"
                    },
                    {
                        "startTime": 144460,
                        "endTime": 145260,
                        "data": "ai,"
                    },
                    {
                        "startTime": 145260,
                        "endTime": 145790,
                        "data": "mong"
                    },
                    {
                        "startTime": 145790,
                        "endTime": 146580,
                        "data": "ai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 146580,
                        "endTime": 146850,
                        "data": "Điều"
                    },
                    {
                        "startTime": 146850,
                        "endTime": 147120,
                        "data": "anh"
                    },
                    {
                        "startTime": 147120,
                        "endTime": 147380,
                        "data": "luôn"
                    },
                    {
                        "startTime": 147380,
                        "endTime": 147650,
                        "data": "giữ"
                    },
                    {
                        "startTime": 147650,
                        "endTime": 147910,
                        "data": "kín"
                    },
                    {
                        "startTime": 147910,
                        "endTime": 148180,
                        "data": "trong"
                    },
                    {
                        "startTime": 148180,
                        "endTime": 148440,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 148440,
                        "endTime": 148440,
                        "data": "Thương"
                    },
                    {
                        "startTime": 148440,
                        "endTime": 148710,
                        "data": "em"
                    },
                    {
                        "startTime": 148710,
                        "endTime": 148970,
                        "data": "đôi"
                    },
                    {
                        "startTime": 148970,
                        "endTime": 149240,
                        "data": "mắt"
                    },
                    {
                        "startTime": 149240,
                        "endTime": 149500,
                        "data": "ướt"
                    },
                    {
                        "startTime": 149500,
                        "endTime": 149780,
                        "data": "nhòa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 149780,
                        "endTime": 150050,
                        "data": "Điều"
                    },
                    {
                        "startTime": 150050,
                        "endTime": 150050,
                        "data": "anh"
                    },
                    {
                        "startTime": 150050,
                        "endTime": 150300,
                        "data": "luôn"
                    },
                    {
                        "startTime": 150300,
                        "endTime": 150560,
                        "data": "giữ"
                    },
                    {
                        "startTime": 150560,
                        "endTime": 150830,
                        "data": "kín"
                    },
                    {
                        "startTime": 150830,
                        "endTime": 151100,
                        "data": "trong"
                    },
                    {
                        "startTime": 151100,
                        "endTime": 151370,
                        "data": "tim"
                    },
                    {
                        "startTime": 151370,
                        "endTime": 151900,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 151900,
                        "endTime": 151900,
                        "data": "Thương"
                    },
                    {
                        "startTime": 151900,
                        "endTime": 152170,
                        "data": "em"
                    },
                    {
                        "startTime": 152170,
                        "endTime": 152430,
                        "data": "đâu"
                    },
                    {
                        "startTime": 152430,
                        "endTime": 152430,
                        "data": "đó"
                    },
                    {
                        "startTime": 152430,
                        "endTime": 152690,
                        "data": "khóc"
                    },
                    {
                        "startTime": 152690,
                        "endTime": 152960,
                        "data": "òa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 152960,
                        "endTime": 153230,
                        "data": "Điều"
                    },
                    {
                        "startTime": 153230,
                        "endTime": 153230,
                        "data": "anh"
                    },
                    {
                        "startTime": 153230,
                        "endTime": 153500,
                        "data": "luôn"
                    },
                    {
                        "startTime": 153500,
                        "endTime": 153760,
                        "data": "giữ"
                    },
                    {
                        "startTime": 153760,
                        "endTime": 154030,
                        "data": "kín"
                    },
                    {
                        "startTime": 154030,
                        "endTime": 154300,
                        "data": "trong"
                    },
                    {
                        "startTime": 154300,
                        "endTime": 154560,
                        "data": "tim"
                    },
                    {
                        "startTime": 154560,
                        "endTime": 154830,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 154830,
                        "endTime": 155080,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 155080,
                        "endTime": 155080,
                        "data": "mai,"
                    },
                    {
                        "startTime": 155080,
                        "endTime": 155350,
                        "data": "nắng"
                    },
                    {
                        "startTime": 155350,
                        "endTime": 155610,
                        "data": "gió,"
                    },
                    {
                        "startTime": 155610,
                        "endTime": 155880,
                        "data": "sương"
                    },
                    {
                        "startTime": 155880,
                        "endTime": 156150,
                        "data": "hao"
                    },
                    {
                        "startTime": 156150,
                        "endTime": 156410,
                        "data": "gầy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 156410,
                        "endTime": 156410,
                        "data": "Có"
                    },
                    {
                        "startTime": 156410,
                        "endTime": 156680,
                        "data": "ai"
                    },
                    {
                        "startTime": 156680,
                        "endTime": 156940,
                        "data": "thương"
                    },
                    {
                        "startTime": 156940,
                        "endTime": 156940,
                        "data": "lắng"
                    },
                    {
                        "startTime": 156940,
                        "endTime": 157210,
                        "data": "lo"
                    },
                    {
                        "startTime": 157210,
                        "endTime": 157470,
                        "data": "cho"
                    },
                    {
                        "startTime": 157470,
                        "endTime": 158010,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 158010,
                        "endTime": 159070,
                        "data": "Whoo-whoo-whoo"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 159070,
                        "endTime": 159330,
                        "data": "Điều"
                    },
                    {
                        "startTime": 159330,
                        "endTime": 159330,
                        "data": "anh"
                    },
                    {
                        "startTime": 159330,
                        "endTime": 159600,
                        "data": "luôn"
                    },
                    {
                        "startTime": 159600,
                        "endTime": 159860,
                        "data": "giữ"
                    },
                    {
                        "startTime": 159860,
                        "endTime": 160130,
                        "data": "kín"
                    },
                    {
                        "startTime": 160130,
                        "endTime": 160390,
                        "data": "trong"
                    },
                    {
                        "startTime": 160390,
                        "endTime": 160660,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 160660,
                        "endTime": 160930,
                        "data": "Thương"
                    },
                    {
                        "startTime": 160930,
                        "endTime": 160930,
                        "data": "em"
                    },
                    {
                        "startTime": 160930,
                        "endTime": 161190,
                        "data": "anh"
                    },
                    {
                        "startTime": 161190,
                        "endTime": 161460,
                        "data": "mãi"
                    },
                    {
                        "startTime": 161460,
                        "endTime": 161720,
                        "data": "xin"
                    },
                    {
                        "startTime": 161720,
                        "endTime": 161990,
                        "data": "là"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 161990,
                        "endTime": 162250,
                        "data": "Điều"
                    },
                    {
                        "startTime": 162250,
                        "endTime": 162520,
                        "data": "anh"
                    },
                    {
                        "startTime": 162520,
                        "endTime": 162520,
                        "data": "luôn"
                    },
                    {
                        "startTime": 162520,
                        "endTime": 162790,
                        "data": "giữ"
                    },
                    {
                        "startTime": 162790,
                        "endTime": 163050,
                        "data": "kín"
                    },
                    {
                        "startTime": 163050,
                        "endTime": 163320,
                        "data": "trong"
                    },
                    {
                        "startTime": 163320,
                        "endTime": 163850,
                        "data": "tim"
                    },
                    {
                        "startTime": 163850,
                        "endTime": 163850,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 163850,
                        "endTime": 164110,
                        "data": "Thương"
                    },
                    {
                        "startTime": 164110,
                        "endTime": 164380,
                        "data": "em"
                    },
                    {
                        "startTime": 164380,
                        "endTime": 164380,
                        "data": "vì"
                    },
                    {
                        "startTime": 164380,
                        "endTime": 164640,
                        "data": "thương"
                    },
                    {
                        "startTime": 164640,
                        "endTime": 164910,
                        "data": "thôi"
                    },
                    {
                        "startTime": 164910,
                        "endTime": 165180,
                        "data": "mà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 165180,
                        "endTime": 165440,
                        "data": "Điều"
                    },
                    {
                        "startTime": 165440,
                        "endTime": 165440,
                        "data": "anh"
                    },
                    {
                        "startTime": 165440,
                        "endTime": 165710,
                        "data": "luôn"
                    },
                    {
                        "startTime": 165710,
                        "endTime": 165980,
                        "data": "giữ"
                    },
                    {
                        "startTime": 165980,
                        "endTime": 166250,
                        "data": "kín"
                    },
                    {
                        "startTime": 166250,
                        "endTime": 166510,
                        "data": "trong"
                    },
                    {
                        "startTime": 166510,
                        "endTime": 166780,
                        "data": "tim"
                    },
                    {
                        "startTime": 166780,
                        "endTime": 167050,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 167050,
                        "endTime": 167310,
                        "data": "Dù"
                    },
                    {
                        "startTime": 167310,
                        "endTime": 167580,
                        "data": "cho"
                    },
                    {
                        "startTime": 167580,
                        "endTime": 167580,
                        "data": "nắng"
                    },
                    {
                        "startTime": 167580,
                        "endTime": 167830,
                        "data": "tắt,"
                    },
                    {
                        "startTime": 167830,
                        "endTime": 168100,
                        "data": "xuân"
                    },
                    {
                        "startTime": 168100,
                        "endTime": 168360,
                        "data": "thay"
                    },
                    {
                        "startTime": 168360,
                        "endTime": 168630,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 168630,
                        "endTime": 168900,
                        "data": "Héo"
                    },
                    {
                        "startTime": 168900,
                        "endTime": 169160,
                        "data": "khô"
                    },
                    {
                        "startTime": 169160,
                        "endTime": 169160,
                        "data": "đi"
                    },
                    {
                        "startTime": 169160,
                        "endTime": 169430,
                        "data": "tháng"
                    },
                    {
                        "startTime": 169430,
                        "endTime": 169690,
                        "data": "năm"
                    },
                    {
                        "startTime": 169690,
                        "endTime": 169960,
                        "data": "xưa"
                    },
                    {
                        "startTime": 169960,
                        "endTime": 170490,
                        "data": "kia"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 170490,
                        "endTime": 170490,
                        "data": "Anh"
                    },
                    {
                        "startTime": 170490,
                        "endTime": 170760,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 170760,
                        "endTime": 171020,
                        "data": "ghi"
                    },
                    {
                        "startTime": 171020,
                        "endTime": 171560,
                        "data": "mãi"
                    },
                    {
                        "startTime": 171560,
                        "endTime": 171820,
                        "data": "trong"
                    },
                    {
                        "startTime": 171820,
                        "endTime": 174820,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 196010,
                        "endTime": 196270,
                        "data": "Điều"
                    },
                    {
                        "startTime": 196270,
                        "endTime": 196270,
                        "data": "anh"
                    },
                    {
                        "startTime": 196270,
                        "endTime": 196530,
                        "data": "luôn"
                    },
                    {
                        "startTime": 196530,
                        "endTime": 196800,
                        "data": "giữ"
                    },
                    {
                        "startTime": 196800,
                        "endTime": 197070,
                        "data": "kín"
                    },
                    {
                        "startTime": 197070,
                        "endTime": 197330,
                        "data": "trong"
                    },
                    {
                        "startTime": 197330,
                        "endTime": 198140,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 198140,
                        "endTime": 198410,
                        "data": "Giữ"
                    },
                    {
                        "startTime": 198410,
                        "endTime": 198670,
                        "data": "kín"
                    },
                    {
                        "startTime": 198670,
                        "endTime": 198920,
                        "data": "trong"
                    },
                    {
                        "startTime": 198920,
                        "endTime": 199190,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 199190,
                        "endTime": 199460,
                        "data": "Giữ"
                    },
                    {
                        "startTime": 199460,
                        "endTime": 199720,
                        "data": "mãi"
                    },
                    {
                        "startTime": 199720,
                        "endTime": 200260,
                        "data": "trong"
                    },
                    {
                        "startTime": 200260,
                        "endTime": 200790,
                        "data": "tim"
                    },
                    {
                        "startTime": 200790,
                        "endTime": 201320,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 201320,
                        "endTime": 201320,
                        "data": "Giữ"
                    },
                    {
                        "startTime": 201320,
                        "endTime": 201590,
                        "data": "mãi"
                    },
                    {
                        "startTime": 201590,
                        "endTime": 201860,
                        "data": "trong"
                    },
                    {
                        "startTime": 201860,
                        "endTime": 202390,
                        "data": "tim"
                    },
                    {
                        "startTime": 202390,
                        "endTime": 202650,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 202650,
                        "endTime": 202920,
                        "data": "Giữ"
                    },
                    {
                        "startTime": 202920,
                        "endTime": 203170,
                        "data": "mãi"
                    },
                    {
                        "startTime": 203170,
                        "endTime": 203710,
                        "data": "trong"
                    },
                    {
                        "startTime": 203710,
                        "endTime": 203970,
                        "data": "tim"
                    },
                    {
                        "startTime": 203970,
                        "endTime": 205510,
                        "data": "mình"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 205510,
                        "endTime": 208510,
                        "data": "Giữ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 211090,
                        "endTime": 211090,
                        "data": "Có"
                    },
                    {
                        "startTime": 211090,
                        "endTime": 211890,
                        "data": "anh"
                    },
                    {
                        "startTime": 211890,
                        "endTime": 212160,
                        "data": "nơi"
                    },
                    {
                        "startTime": 212160,
                        "endTime": 212430,
                        "data": "đó"
                    },
                    {
                        "startTime": 212430,
                        "endTime": 214280,
                        "data": "không"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 214280,
                        "endTime": 214540,
                        "data": "Có"
                    },
                    {
                        "startTime": 214540,
                        "endTime": 214810,
                        "data": "anh"
                    },
                    {
                        "startTime": 214810,
                        "endTime": 215070,
                        "data": "nơi"
                    },
                    {
                        "startTime": 215070,
                        "endTime": 216140,
                        "data": "đó"
                    },
                    {
                        "startTime": 216140,
                        "endTime": 219140,
                        "data": "không"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 220670,
                        "endTime": 220940,
                        "data": "Điều"
                    },
                    {
                        "startTime": 220940,
                        "endTime": 221200,
                        "data": "anh"
                    },
                    {
                        "startTime": 221200,
                        "endTime": 221200,
                        "data": "luôn"
                    },
                    {
                        "startTime": 221200,
                        "endTime": 221460,
                        "data": "giữ"
                    },
                    {
                        "startTime": 221460,
                        "endTime": 221730,
                        "data": "kín"
                    },
                    {
                        "startTime": 221730,
                        "endTime": 221990,
                        "data": "trong"
                    },
                    {
                        "startTime": 221990,
                        "endTime": 223780,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 223780,
                        "endTime": 224050,
                        "data": "Điều"
                    },
                    {
                        "startTime": 224050,
                        "endTime": 224310,
                        "data": "anh"
                    },
                    {
                        "startTime": 224310,
                        "endTime": 224310,
                        "data": "luôn"
                    },
                    {
                        "startTime": 224310,
                        "endTime": 224580,
                        "data": "giữ"
                    },
                    {
                        "startTime": 224580,
                        "endTime": 224840,
                        "data": "kín"
                    },
                    {
                        "startTime": 224840,
                        "endTime": 225110,
                        "data": "trong"
                    },
                    {
                        "startTime": 225110,
                        "endTime": 225370,
                        "data": "tim"
                    },
                    {
                        "startTime": 225370,
                        "endTime": 226930,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 226930,
                        "endTime": 227190,
                        "data": "Điều"
                    },
                    {
                        "startTime": 227190,
                        "endTime": 227190,
                        "data": "anh"
                    },
                    {
                        "startTime": 227190,
                        "endTime": 227460,
                        "data": "luôn"
                    },
                    {
                        "startTime": 227460,
                        "endTime": 227730,
                        "data": "giữ"
                    },
                    {
                        "startTime": 227730,
                        "endTime": 227990,
                        "data": "kín"
                    },
                    {
                        "startTime": 227990,
                        "endTime": 227990,
                        "data": "trong"
                    },
                    {
                        "startTime": 227990,
                        "endTime": 228520,
                        "data": "tim"
                    },
                    {
                        "startTime": 228520,
                        "endTime": 228790,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 228790,
                        "endTime": 229050,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 229050,
                        "endTime": 229050,
                        "data": "mai,"
                    },
                    {
                        "startTime": 229050,
                        "endTime": 229310,
                        "data": "nắng"
                    },
                    {
                        "startTime": 229310,
                        "endTime": 229580,
                        "data": "gió,"
                    },
                    {
                        "startTime": 229580,
                        "endTime": 229850,
                        "data": "sương"
                    },
                    {
                        "startTime": 229850,
                        "endTime": 230110,
                        "data": "hao"
                    },
                    {
                        "startTime": 230110,
                        "endTime": 230380,
                        "data": "gầy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 230380,
                        "endTime": 230380,
                        "data": "Có"
                    },
                    {
                        "startTime": 230380,
                        "endTime": 230650,
                        "data": "ai"
                    },
                    {
                        "startTime": 230650,
                        "endTime": 230910,
                        "data": "thương"
                    },
                    {
                        "startTime": 230910,
                        "endTime": 230910,
                        "data": "lắng"
                    },
                    {
                        "startTime": 230910,
                        "endTime": 231180,
                        "data": "lo"
                    },
                    {
                        "startTime": 231180,
                        "endTime": 231440,
                        "data": "cho"
                    },
                    {
                        "startTime": 231440,
                        "endTime": 232980,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 232980,
                        "endTime": 233240,
                        "data": "Điều"
                    },
                    {
                        "startTime": 233240,
                        "endTime": 233510,
                        "data": "anh"
                    },
                    {
                        "startTime": 233510,
                        "endTime": 233510,
                        "data": "luôn"
                    },
                    {
                        "startTime": 233510,
                        "endTime": 233770,
                        "data": "giữ"
                    },
                    {
                        "startTime": 233770,
                        "endTime": 234040,
                        "data": "kín"
                    },
                    {
                        "startTime": 234040,
                        "endTime": 234300,
                        "data": "trong"
                    },
                    {
                        "startTime": 234300,
                        "endTime": 236090,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 236090,
                        "endTime": 236360,
                        "data": "Điều"
                    },
                    {
                        "startTime": 236360,
                        "endTime": 236360,
                        "data": "anh"
                    },
                    {
                        "startTime": 236360,
                        "endTime": 236620,
                        "data": "luôn"
                    },
                    {
                        "startTime": 236620,
                        "endTime": 236890,
                        "data": "giữ"
                    },
                    {
                        "startTime": 236890,
                        "endTime": 237150,
                        "data": "kín"
                    },
                    {
                        "startTime": 237150,
                        "endTime": 237150,
                        "data": "trong"
                    },
                    {
                        "startTime": 237150,
                        "endTime": 237690,
                        "data": "tim"
                    },
                    {
                        "startTime": 237690,
                        "endTime": 239210,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 239210,
                        "endTime": 239480,
                        "data": "Điều"
                    },
                    {
                        "startTime": 239480,
                        "endTime": 239480,
                        "data": "anh"
                    },
                    {
                        "startTime": 239480,
                        "endTime": 239750,
                        "data": "luôn"
                    },
                    {
                        "startTime": 239750,
                        "endTime": 240010,
                        "data": "giữ"
                    },
                    {
                        "startTime": 240010,
                        "endTime": 240270,
                        "data": "kín"
                    },
                    {
                        "startTime": 240270,
                        "endTime": 240540,
                        "data": "trong"
                    },
                    {
                        "startTime": 240540,
                        "endTime": 240800,
                        "data": "tim"
                    },
                    {
                        "startTime": 240800,
                        "endTime": 241070,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 241070,
                        "endTime": 241340,
                        "data": "Dù"
                    },
                    {
                        "startTime": 241340,
                        "endTime": 241340,
                        "data": "cho"
                    },
                    {
                        "startTime": 241340,
                        "endTime": 241600,
                        "data": "nắng"
                    },
                    {
                        "startTime": 241600,
                        "endTime": 241870,
                        "data": "tắt,"
                    },
                    {
                        "startTime": 241870,
                        "endTime": 242130,
                        "data": "xuân"
                    },
                    {
                        "startTime": 242130,
                        "endTime": 242130,
                        "data": "thay"
                    },
                    {
                        "startTime": 242130,
                        "endTime": 242670,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 242670,
                        "endTime": 242670,
                        "data": "Héo"
                    },
                    {
                        "startTime": 242670,
                        "endTime": 242930,
                        "data": "khô"
                    },
                    {
                        "startTime": 242930,
                        "endTime": 243190,
                        "data": "đi"
                    },
                    {
                        "startTime": 243190,
                        "endTime": 243190,
                        "data": "tháng"
                    },
                    {
                        "startTime": 243190,
                        "endTime": 243470,
                        "data": "năm"
                    },
                    {
                        "startTime": 243470,
                        "endTime": 243720,
                        "data": "xưa"
                    },
                    {
                        "startTime": 243720,
                        "endTime": 244260,
                        "data": "kia"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 244260,
                        "endTime": 244520,
                        "data": "Anh"
                    },
                    {
                        "startTime": 244520,
                        "endTime": 244790,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 244790,
                        "endTime": 245060,
                        "data": "ghi"
                    },
                    {
                        "startTime": 245060,
                        "endTime": 245320,
                        "data": "mãi"
                    },
                    {
                        "startTime": 245320,
                        "endTime": 245590,
                        "data": "trong"
                    },
                    {
                        "startTime": 245590,
                        "endTime": 245850,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 245850,
                        "endTime": 246110,
                        "data": "Điều"
                    },
                    {
                        "startTime": 246110,
                        "endTime": 246110,
                        "data": "anh"
                    },
                    {
                        "startTime": 246110,
                        "endTime": 246380,
                        "data": "luôn"
                    },
                    {
                        "startTime": 246380,
                        "endTime": 246380,
                        "data": "giữ"
                    },
                    {
                        "startTime": 246380,
                        "endTime": 246650,
                        "data": "kín"
                    },
                    {
                        "startTime": 246650,
                        "endTime": 246910,
                        "data": "trong"
                    },
                    {
                        "startTime": 246910,
                        "endTime": 247190,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 247190,
                        "endTime": 247190,
                        "data": "Thương"
                    },
                    {
                        "startTime": 247190,
                        "endTime": 247440,
                        "data": "em"
                    },
                    {
                        "startTime": 247440,
                        "endTime": 247720,
                        "data": "đôi"
                    },
                    {
                        "startTime": 247720,
                        "endTime": 247720,
                        "data": "mắt"
                    },
                    {
                        "startTime": 247720,
                        "endTime": 247970,
                        "data": "ướt"
                    },
                    {
                        "startTime": 247970,
                        "endTime": 248240,
                        "data": "nhòa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 248240,
                        "endTime": 248510,
                        "data": "Điều"
                    },
                    {
                        "startTime": 248510,
                        "endTime": 248510,
                        "data": "anh"
                    },
                    {
                        "startTime": 248510,
                        "endTime": 248780,
                        "data": "luôn"
                    },
                    {
                        "startTime": 248780,
                        "endTime": 249040,
                        "data": "giữ"
                    },
                    {
                        "startTime": 249040,
                        "endTime": 249310,
                        "data": "kín"
                    },
                    {
                        "startTime": 249310,
                        "endTime": 249570,
                        "data": "trong"
                    },
                    {
                        "startTime": 249570,
                        "endTime": 249840,
                        "data": "tim"
                    },
                    {
                        "startTime": 249840,
                        "endTime": 250100,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 250100,
                        "endTime": 250370,
                        "data": "Thương"
                    },
                    {
                        "startTime": 250370,
                        "endTime": 250640,
                        "data": "em"
                    },
                    {
                        "startTime": 250640,
                        "endTime": 250640,
                        "data": "đâu"
                    },
                    {
                        "startTime": 250640,
                        "endTime": 250910,
                        "data": "đó"
                    },
                    {
                        "startTime": 250910,
                        "endTime": 250910,
                        "data": "khóc"
                    },
                    {
                        "startTime": 250910,
                        "endTime": 251440,
                        "data": "òa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 251440,
                        "endTime": 251700,
                        "data": "Điều"
                    },
                    {
                        "startTime": 251700,
                        "endTime": 251700,
                        "data": "anh"
                    },
                    {
                        "startTime": 251700,
                        "endTime": 251970,
                        "data": "luôn"
                    },
                    {
                        "startTime": 251970,
                        "endTime": 252220,
                        "data": "giữ"
                    },
                    {
                        "startTime": 252220,
                        "endTime": 252490,
                        "data": "kín"
                    },
                    {
                        "startTime": 252490,
                        "endTime": 252490,
                        "data": "trong"
                    },
                    {
                        "startTime": 252490,
                        "endTime": 252760,
                        "data": "tim"
                    },
                    {
                        "startTime": 252760,
                        "endTime": 253290,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 253290,
                        "endTime": 253290,
                        "data": "Ngày"
                    },
                    {
                        "startTime": 253290,
                        "endTime": 253560,
                        "data": "mai,"
                    },
                    {
                        "startTime": 253560,
                        "endTime": 253820,
                        "data": "nắng"
                    },
                    {
                        "startTime": 253820,
                        "endTime": 254090,
                        "data": "gió,"
                    },
                    {
                        "startTime": 254090,
                        "endTime": 254090,
                        "data": "sương"
                    },
                    {
                        "startTime": 254090,
                        "endTime": 254350,
                        "data": "hao"
                    },
                    {
                        "startTime": 254350,
                        "endTime": 254630,
                        "data": "gầy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 254630,
                        "endTime": 254890,
                        "data": "Có"
                    },
                    {
                        "startTime": 254890,
                        "endTime": 255160,
                        "data": "ai"
                    },
                    {
                        "startTime": 255160,
                        "endTime": 255160,
                        "data": "thương"
                    },
                    {
                        "startTime": 255160,
                        "endTime": 255420,
                        "data": "lắng"
                    },
                    {
                        "startTime": 255420,
                        "endTime": 255690,
                        "data": "lo"
                    },
                    {
                        "startTime": 255690,
                        "endTime": 255950,
                        "data": "cho"
                    },
                    {
                        "startTime": 255950,
                        "endTime": 256480,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 256480,
                        "endTime": 257270,
                        "data": "Whoo-whoo-whoo"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 257270,
                        "endTime": 257540,
                        "data": "Điều"
                    },
                    {
                        "startTime": 257540,
                        "endTime": 257800,
                        "data": "anh"
                    },
                    {
                        "startTime": 257800,
                        "endTime": 258070,
                        "data": "luôn"
                    },
                    {
                        "startTime": 258070,
                        "endTime": 258340,
                        "data": "giữ"
                    },
                    {
                        "startTime": 258340,
                        "endTime": 258610,
                        "data": "kín"
                    },
                    {
                        "startTime": 258610,
                        "endTime": 258870,
                        "data": "trong"
                    },
                    {
                        "startTime": 258870,
                        "endTime": 259140,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 259140,
                        "endTime": 259140,
                        "data": "Thương"
                    },
                    {
                        "startTime": 259140,
                        "endTime": 259400,
                        "data": "em"
                    },
                    {
                        "startTime": 259400,
                        "endTime": 259670,
                        "data": "anh"
                    },
                    {
                        "startTime": 259670,
                        "endTime": 259930,
                        "data": "mãi"
                    },
                    {
                        "startTime": 259930,
                        "endTime": 260200,
                        "data": "xin"
                    },
                    {
                        "startTime": 260200,
                        "endTime": 260460,
                        "data": "là"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 260460,
                        "endTime": 260730,
                        "data": "Điều"
                    },
                    {
                        "startTime": 260730,
                        "endTime": 260730,
                        "data": "anh"
                    },
                    {
                        "startTime": 260730,
                        "endTime": 260990,
                        "data": "luôn"
                    },
                    {
                        "startTime": 260990,
                        "endTime": 261250,
                        "data": "giữ"
                    },
                    {
                        "startTime": 261250,
                        "endTime": 261520,
                        "data": "kín"
                    },
                    {
                        "startTime": 261520,
                        "endTime": 261790,
                        "data": "trong"
                    },
                    {
                        "startTime": 261790,
                        "endTime": 262050,
                        "data": "tim"
                    },
                    {
                        "startTime": 262050,
                        "endTime": 262320,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 262320,
                        "endTime": 262590,
                        "data": "Thương"
                    },
                    {
                        "startTime": 262590,
                        "endTime": 262590,
                        "data": "em"
                    },
                    {
                        "startTime": 262590,
                        "endTime": 262850,
                        "data": "vì"
                    },
                    {
                        "startTime": 262850,
                        "endTime": 263120,
                        "data": "thương"
                    },
                    {
                        "startTime": 263120,
                        "endTime": 263390,
                        "data": "thôi"
                    },
                    {
                        "startTime": 263390,
                        "endTime": 263650,
                        "data": "mà"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 263650,
                        "endTime": 263920,
                        "data": "Điều"
                    },
                    {
                        "startTime": 263920,
                        "endTime": 263920,
                        "data": "anh"
                    },
                    {
                        "startTime": 263920,
                        "endTime": 264180,
                        "data": "luôn"
                    },
                    {
                        "startTime": 264180,
                        "endTime": 264450,
                        "data": "giữ"
                    },
                    {
                        "startTime": 264450,
                        "endTime": 264710,
                        "data": "kín"
                    },
                    {
                        "startTime": 264710,
                        "endTime": 264980,
                        "data": "trong"
                    },
                    {
                        "startTime": 264980,
                        "endTime": 265240,
                        "data": "tim"
                    },
                    {
                        "startTime": 265240,
                        "endTime": 265510,
                        "data": "này"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 265510,
                        "endTime": 265770,
                        "data": "Dù"
                    },
                    {
                        "startTime": 265770,
                        "endTime": 265770,
                        "data": "cho"
                    },
                    {
                        "startTime": 265770,
                        "endTime": 266040,
                        "data": "nắng"
                    },
                    {
                        "startTime": 266040,
                        "endTime": 266300,
                        "data": "tắt,"
                    },
                    {
                        "startTime": 266300,
                        "endTime": 266570,
                        "data": "xuân"
                    },
                    {
                        "startTime": 266570,
                        "endTime": 266570,
                        "data": "thay"
                    },
                    {
                        "startTime": 266570,
                        "endTime": 267100,
                        "data": "màu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 267100,
                        "endTime": 267100,
                        "data": "Héo"
                    },
                    {
                        "startTime": 267100,
                        "endTime": 267370,
                        "data": "khô"
                    },
                    {
                        "startTime": 267370,
                        "endTime": 267640,
                        "data": "đi"
                    },
                    {
                        "startTime": 267640,
                        "endTime": 267900,
                        "data": "tháng"
                    },
                    {
                        "startTime": 267900,
                        "endTime": 267900,
                        "data": "năm"
                    },
                    {
                        "startTime": 267900,
                        "endTime": 268160,
                        "data": "xưa"
                    },
                    {
                        "startTime": 268160,
                        "endTime": 268960,
                        "data": "kia"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 268960,
                        "endTime": 268960,
                        "data": "Anh"
                    },
                    {
                        "startTime": 268960,
                        "endTime": 269240,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 269240,
                        "endTime": 269500,
                        "data": "ghi"
                    },
                    {
                        "startTime": 269500,
                        "endTime": 270020,
                        "data": "mãi"
                    },
                    {
                        "startTime": 270020,
                        "endTime": 270290,
                        "data": "trong"
                    },
                    {
                        "startTime": 270290,
                        "endTime": 272680,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 272680,
                        "endTime": 272950,
                        "data": "Anh"
                    },
                    {
                        "startTime": 272950,
                        "endTime": 272950,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 272950,
                        "endTime": 273220,
                        "data": "ghi"
                    },
                    {
                        "startTime": 273220,
                        "endTime": 273500,
                        "data": "mãi"
                    },
                    {
                        "startTime": 273500,
                        "endTime": 273760,
                        "data": "trong"
                    },
                    {
                        "startTime": 273760,
                        "endTime": 275620,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 275620,
                        "endTime": 275880,
                        "data": "Anh"
                    },
                    {
                        "startTime": 275880,
                        "endTime": 275880,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 275880,
                        "endTime": 276150,
                        "data": "ghi"
                    },
                    {
                        "startTime": 276150,
                        "endTime": 276420,
                        "data": "mãi"
                    },
                    {
                        "startTime": 276420,
                        "endTime": 276680,
                        "data": "trong"
                    },
                    {
                        "startTime": 276680,
                        "endTime": 279680,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 284650,
                        "endTime": 284920,
                        "data": "Anh"
                    },
                    {
                        "startTime": 284920,
                        "endTime": 284920,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 284920,
                        "endTime": 285180,
                        "data": "ghi"
                    },
                    {
                        "startTime": 285180,
                        "endTime": 285450,
                        "data": "mãi"
                    },
                    {
                        "startTime": 285450,
                        "endTime": 285710,
                        "data": "trong"
                    },
                    {
                        "startTime": 285710,
                        "endTime": 287830,
                        "data": "tim"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 287830,
                        "endTime": 288100,
                        "data": "Anh"
                    },
                    {
                        "startTime": 288100,
                        "endTime": 288100,
                        "data": "nguyện"
                    },
                    {
                        "startTime": 288100,
                        "endTime": 288370,
                        "data": "ghi"
                    },
                    {
                        "startTime": 288370,
                        "endTime": 288630,
                        "data": "mãi"
                    },
                    {
                        "startTime": 288630,
                        "endTime": 288890,
                        "data": "trong"
                    },
                    {
                        "startTime": 288890,
                        "endTime": 289890,
                        "data": "tim"
                    }
                ]
            }
        ],
        "file": "https://static-zmp3.zmdcdn.me/lyrics/9/c/4/d/9c4dd5f270e46b064b90b5fba9c372d7.lrc",
        "enabledVideoBG": true,
        "streamingUrl": "https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/ZXv5MtUc9NA/37e9b00b1accf592acdd/127af9a7175ff801a14e/720/Chung-Ta-Cua-Hien-Tai.mp4?authen=exp=1721132712~acl=/ZXv5MtUc9NA/*~hmac=a98b043b315a32ee75ef5f14c9756035",
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
    "timestamp": 1720962810722
}
