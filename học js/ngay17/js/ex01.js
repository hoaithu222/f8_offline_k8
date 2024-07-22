var lyric = lyric.data.sentences;
var audio = document.querySelector("audio");

var requestId;
var currentIndex;
var karaokeInner = document.querySelector(".karaoke-inner");

audio.addEventListener("play", function () {
    requestId = requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
    cancelAnimationFrame(requestId);
});

// function template(str) {
//     return `<p>${str}</p>`;
// }

function getSentence(index) {
    if (index < lyric.length) {
        return lyric[index].words.map(function (word) {
            return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.endTime}">${word.data}<span>${word.data}</span></span>`;
        }).join(" ");
    }
    return '';
}

function handleKaraoke() {
    var currentTime = audio.currentTime * 1000;
    fillColorWord(currentTime);
    var index = lyric.findIndex(function (item) {
        var words = item.words;
        var firstWord = words[0];
        var lastWord = words[words.length - 1];
        return currentTime >= firstWord.startTime && currentTime <= lastWord.endTime;
    });

    if (index !== -1 && index !== currentIndex) {
        if (index === 0) {
            karaokeInner.innerHTML = `<p>${getSentence(0)}</p><p>${getSentence(1)}</p>`;
        } else {
            var nextSentenceStr = getSentence(index + 1);
            setTimeout(function () {
                if (index % 2 !== 0) {
                    nextSentence(karaokeInner.children[0], nextSentenceStr);
                } else {
                    nextSentence(karaokeInner.children[1], nextSentenceStr);
                }
            }, 500);
        }
        currentIndex = index;
    }

    requestId = requestAnimationFrame(handleKaraoke);
}

function nextSentence(element, sentence) {
    element.style.transition = "opacity 0.6s linear";
    element.style.opacity = 0;
    setTimeout(function () {
        element.innerHTML = sentence;
        element.style.opacity = 1;
    }, 600);
}

function fillColorWord(currentTime) {
    var wordsList = karaokeInner.querySelectorAll('.word');
    wordsList.forEach(function (wordEl) {
        var startTime = wordEl.dataset.startTime;
        var endTime = wordEl.dataset.endTime;
        if (currentTime >= startTime && currentTime <= endTime) {
            var rate = (currentTime - startTime) / (endTime - startTime) * 100;
            wordEl.children[0].style.width = `${rate}%`;
        }
        if (currentTime > endTime) {
            wordEl.children[0].style.width = `100%`;
        }
    });
}

// Web Component, Custom Element, Shadow DOMs







