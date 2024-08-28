/*
Làm việc xử lý thời gian 
--> thư viện moment

-new Date() không có đối số thì sẽ lấy giờ hiện tại
-xử lý thời gian phía server 



*/

// const today = new Date();

// console.dir(today);

// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getYear());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth() + 1);

const targetDate = `Tue Aug 31 2024 23:59:59 GMT+0700`;
const targetDateEl = new Date(targetDate);

function countDown() {
  const date = new Date();
  const dayEL = document.querySelector(".day");
  const hoursEL = document.querySelector(".hours");
  const minutesEl = document.querySelector(".minutes");
  const secondsEL = document.querySelector(".seconds");
  let seconds = targetDateEl.getTime() - date.getTime();
  let day = Math.floor(seconds / (86400 * 1000));
  let hours = Math.floor((seconds % (86400 * 1000)) / (3600 * 1000));
  let minutes = Math.floor((seconds % (3600 * 1000)) / (60 * 1000));
  seconds = Math.floor((seconds % (60 * 1000)) / 1000);
  dayEL.innerText = day < 10 ? "0" + day : day;
  hoursEL.innerText = hours < 10 ? "0" + hours : hours;
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsEL.innerText = seconds < 10 ? "0" + seconds : seconds;
}
countDown();

setInterval(countDown, 1000);
