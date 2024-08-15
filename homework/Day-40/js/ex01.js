const apiUrl = "http://localhost:3000/questions";
const btnStart = document.querySelector(".btn-start");
const countdownTime = document.querySelector(".countdown-time");
const boxEl = document.querySelector(".inner-box");
const innerHead = document.querySelector(".inner-head");
const innerWrap = document.querySelector(".inner-wrap");
let innerTime;
let intervalId;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let score = 0;

const getQuestions = async () => {
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    handleQuestion(result);
  } catch (error) {
    console.error(error);
  }
};

const handleQuestion = (questions) => {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    const questionName = document.querySelector(".question-name");
    const innerItems = document.querySelectorAll(".answer .inner-item");
    const infoText = document.querySelector(".info-text");

    innerItems.forEach((item) => {
      item.classList.remove("correct", "wrong");
      item.onclick = null;
    });

    questionName.innerText = question.questionText;
    innerItems.forEach((item, index) => {
      item.innerText = question.answerOptions[index].answerText;
      item.onclick = () =>
        checkAnswer(item, question.answerOptions[index].isCorrect, questions);
    });

    infoText.innerText = question.isMultiple
      ? "Bạn cần chọn nhiều đáp án."
      : "";

    updateInnerTime(8000);
  } else {
    innerWrap.innerHTML = `<p>Bạn đã hoàn thành tất cả câu hỏi!</p>`;
  }
};

const checkAnswer = (item, isCorrect, questions) => {
  if (isCorrect) {
    item.classList.add("correct");
    correctAnswers++;
    score += 600;
  } else {
    item.classList.add("wrong");
  }

  document.querySelector(".current-question").innerText = correctAnswers;
  document.querySelector(".number").innerText = score;

  document.querySelectorAll(".answer .inner-item").forEach((item) => {
    item.onclick = null;
  });

  setTimeout(() => {
    currentQuestionIndex++;
    handleQuestion(questions);
  }, 1000);
};

const updateInnerTime = (duration) => {
  if (intervalId) clearInterval(intervalId);

  let elapsed = 0;
  const interval = 100;

  if (innerTime) innerTime.style.width = "100%";

  intervalId = setInterval(() => {
    elapsed += interval;
    const percentage = 100 - (elapsed / duration) * 100;
    innerTime.style.width = `${percentage}%`;

    if (elapsed >= duration) {
      clearInterval(intervalId);
      innerTime.style.width = "0%";
    }
  }, interval);
};

function countdown(seconds, callback) {
  function tick() {
    countdownTime.innerText = seconds;
    seconds--;
    if (seconds >= 0) {
      setTimeout(tick, 1000);
    } else {
      countdownTime.innerText = "GO!";
      if (callback) {
        setTimeout(() => {
          callback();
          getQuestions();
        }, 1000);
      }
    }
  }
  tick();
}

function nextFunction() {
  innerHead.innerHTML = `
    <div class="inner-time"></div>
    <div class="inner-item">
      <div class="counter">
        <div class="current-question">0</div>
        <div>/</div>
        <div class="total-question">8</div>
      </div>
      <div>Chuỗi</div>
      <p class="score">Score:<span class="number">0</span></p>
    </div>`;
  innerTime = document.querySelector(".inner-time");

  innerWrap.classList.add("active");
  boxEl.style.display = "none";
}

btnStart.addEventListener("click", () => {
  btnStart.style.display = "none";
  countdownTime.classList.add("active");
  countdown(3, nextFunction);
});
