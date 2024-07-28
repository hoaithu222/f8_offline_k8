document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector(".counter");
  const button = document.querySelector(".btn");
  let time = 30;
  let active = true;
  let lastTime = performance.now();

  function updateCounter(timestamp) {
    if (document.hidden) {
      lastTime = timestamp;
      return;
    }

    if (time > 0 && active) {
      const elapsed = timestamp - lastTime;
      if (elapsed >= 1000) {
        time--;
        counter.textContent = time;
        lastTime = timestamp;
      }
    } else if (time === 0) {
      button.disabled = false;
      button.addEventListener("click", function () {
        window.location.href = "https://fullstack-nodejs.fullstack.edu.vn/";
      });
    }

    requestAnimationFrame(updateCounter);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      active = false;
    } else {
      active = true;
    }
  });

  requestAnimationFrame(updateCounter);
});
