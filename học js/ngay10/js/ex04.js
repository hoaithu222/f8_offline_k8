// DOM HTML giúp thao tác với thẻ html 

/*
- truy suất nội dụng
- thuộc tính
- xóa
- class 

*/
var contentEl = document.querySelector(".content");
// Lấy nội dung thẻ html 

// innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>HỌC LẬP TRÌNH KHÔNG KHÓ</h2>`
// innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>HỌC LẬP TRÌNH KHÔNG KHÓ</h2>`;
// textContent 
// console.log(contentEl.textContent);
// contentEl.textContent = `



//   <h2>Học lập trình để làm gì</h2>


// `;
// console.log(contentEl.textContent);

// outerHTML 

// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học lập trình không khó</h2>`;
// console.log(contentEl.outerHTML);
//outerText 
// contentEl.outerText = `<h2>Học lập trình không khó</h2>`;
// console.log(contentEl.outerText);
var countEl = document.querySelector("h1 span");
var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");

plusBtn.addEventListener("click", function () {
    countEl.innerText++;
});
minusBtn.addEventListener("click", function () {
    countEl.innerText--;
});
