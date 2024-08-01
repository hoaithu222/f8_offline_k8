// customEvent

// var rangeEL = document.querySelector("input");
// var finishedEvent = new CustomEvent("finish", {
//   //   detail: {
//   //     name: "f8",
//   //   },
// });
// finishedEvent.msg = "hello anh em";
// rangeEL.addEventListener("input", function (e) {
//   var value = this.value;
//   if (+value === 100) {
//     this.dispatchEvent(finishedEvent);
//   }
// });
// var input = document.querySelector("input");
// input.addEventListener("finish", function (e) {
//   console.log("Hoàn thành");
//   console.log(e);
// });

/*
Các bước tạo event 
- xác được logic của event 
- xác định element lắng nghe được event đó
*/

// var slider1 = document.querySelector(".slider-1");
// slider1.addEventListener("finish", function () {
//   console.log("đã xong");
// });

// var slider2 = document.querySelector(".slider-2");
// slider2.addEventListener("finish", function () {
//   console.log("Ok");
// });

// Trigger Event: tự động kích hoạt event

// var imageURl = `../image/photo-1.jpg`;

// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   var a = document.createElement("a");
//   a.href = imageURl;
//   a.download = "anh01.webp";
//   a.click();
// });

// var form = document.addEventListener("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var input = this.querySelector("input").value;
//   //   console.log(input);
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   form.submit();
// });

var inputEl = document.querySelector("input");
console.dir(inputEl);
HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");
var changeEvent = new Event("change");
inputEl.addEventListener("change", function () {
  console.log(`Quantity:${this.value}`);
});

plusBtn.addEventListener("click", function () {
  inputEl.value++;
  //   inputEl.dispatchEvent(changeEvent);
  inputEl.change();
});

minusBtn.addEventListener("click", function () {
  if (inputEl.value > 1) {
    inputEl.value--;
    // inputEl.dispatchEvent(changeEvent);
    inputEl.change();
  }
});
