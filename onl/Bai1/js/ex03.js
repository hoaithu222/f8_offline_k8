// Các thao tác của DOM HTML

/*
- Lấy nội dung html
- Thay đổi nội dung thẻ html
- Xóa thẻ html
- Thêm,sửa,xóa thuộc tính trong thẻ html
*/


// 1.innerHTML: nội dung HTML có thể lấy ra và thay đổi lại
// console.log(contentEl.innerHTML);
// thay thế

// contentEl.innerHTML = `<h2>Học JS không khó</h2>`;

// 2.innerText:chỉ lấy nội dung tự động xóa khoảng trắng
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học JS không khó</h2>`;// chỉ lấy text nên coi thẻ h2 là text luôn
// console.log(contentEl.innerText);
// 3.textContent: lấy nội dung nhưng giữ nguyên định dạng khoảng trắng có thể lấy ra và uppdate nội dung
// console.log(contentEl.textContent);

// contentEl.textContent = `<h2>Học JS không khó</h2>`;
// 4.Outer HTML :lấy chính nó và tất cả cái ở trong lấy cả các thứ trong HTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học JS không khó</h2>`;

//5.outerText khá giống innerText set trả về khác
// console.log(contentEl.outerHTML);
// contentEl.outerText = '<h2>Học JS không khó</h2>';//không còn content nữa thay thế luôn
// var btn = document.querySelector(".btn");
// var contentEl = document.querySelector(".content");
//  ===> cách 1
// var content = contentEl.innerHTML;
// btn.addEventListener("click", function () {
//     if (!contentEl.innerHTML) {
//         contentEl.innerHTML = content;
//         this.innerText = "Ẩn";
//     }
//     else {
//         contentEl.innerText = "";
//         this.innerText = "Hiện";
//     }
// });


//  ===> cách 2
// var btn = document.querySelector(".btn");
// var contentEl = document.querySelector(".content");
// var check = true;
// var oldContent = contentEl.innerHTML;

// var clickBtn = function () {
//     if (check) {
//         btn.innerHTML = "hiện";
//         contentEl.innerHTML = " ";
//     }
//     else {
//         btn.innerHTML = "ẩn";
//         contentEl.innerHTML = oldContent;
//     }
//     check = !check;
// }
// btn.addEventListener("click", clickBtn);

// var countEl = document.querySelector("h1 span");
// var count = 0;
// countEl.innerText = count;

// var plusBtn = document.querySelector(".plus-btn");
// var minusBtn = document.querySelector(".minus-btn");
// plusBtn.addEventListener("click", function () {
//     countEl.innerText = count++;
// });
// minusBtn.addEventListener("click", function () {
//     countEl.innerText = count--;
// });

