const apiUrl = "https://mqkl2g-8080.csb.app/questions";
const btnStart = document.querySelector(".btn-start");
const countdownTime = document.querySelector(".countdown-time");
const boxEl = document.querySelector(".inner-box");
const innerHead = document.querySelector(".inner-head");
const innerWrap = document.querySelector(".inner-wrap");
const resultBoard = document.querySelector(".result-board");
let innerTime;
let intervalId;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let score = 0;
let streak = 0;
let lastStreak = 0;

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

    document.querySelector(".current-question").innerText =
      currentQuestionIndex + 1;

    infoText.innerText = question.isMultiple
      ? "Bạn cần chọn nhiều đáp án."
      : "";

    updateInnerTime(8000, questions);
  } else {
    innerWrap.style.display = "none";
    innerHead.style.display = "none";
    resultBoard.style.display = "flex";
    document.querySelector(".final-score").innerText = score;
    document.querySelector(".streak-number").innerText = lastStreak;
    document.querySelector(".correct-number").innerText = correctAnswers;
    document.querySelector(".incorrect-number").innerText = 8 - correctAnswers;
  }
};

const checkAnswer = (item, isCorrect, questions) => {
  const innerItems = document.querySelectorAll(".answer .inner-item");

  if (isCorrect) {
    item.classList.add("correct");

    correctAnswers++;
    score += 600;

    streak = lastStreak + 1;
    lastStreak = streak;
  } else {
    item.classList.add("wrong");

    innerItems.forEach((innerItem, index) => {
      if (questions[currentQuestionIndex].answerOptions[index].isCorrect) {
        innerItem.classList.add("correct");
      }
    });

    lastStreak = 0;
    streak = 0;
  }

  const streakElements = document.querySelectorAll(".streak span");
  streakElements.forEach((span, index) => {
    span.style.backgroundColor = index < streak ? "green" : "transparent";
  });

  document.querySelector(".number").innerText = score;

  innerItems.forEach((innerItem) => {
    innerItem.onclick = null;
  });

  setTimeout(() => {
    currentQuestionIndex++;
    handleQuestion(questions);
  }, 1000);
};

const updateInnerTime = (duration, questions) => {
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
      currentQuestionIndex++;
      handleQuestion(questions);
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
      setTimeout(() => {
        countdownTime.classList.remove("active");
        callback();
      }, 1000);
    }
  }
  tick();
}

btnStart.addEventListener("click", () => {
  btnStart.style.display = "none";
  countdownTime.classList.add("active");

  countdown(3, () => {
    boxEl.style.display = "none";
    innerWrap.style.display = "flex";
    innerHead.style.display = "block";
    innerTime = document.querySelector(".inner-time");
    getQuestions();
  });
});

btnRestart.addEventListener("click", () => {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  score = 0;
  streak = 0;
  lastStreak = 0;
  resultBoard.style.display = "none";
  boxEl.style.display = "flex";
  btnStart.style.display = "block";
  innerWrap.style.display = "none";
  innerHead.style.display = "none";
});
