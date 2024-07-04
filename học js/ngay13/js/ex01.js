// var items = document.querySelectorAll("ul a");
// 1.chọn thanh phần cha parentElement

// 2.chọn thành phần con : children (trả về cấp gần nhất )
// 3.chọn thành phần kế tiếp :nextElementSibling

// 4. Chọn thành phần phía trước previousElementSibling
// 5.firstElementChildren chọn element đầu tiên 
// 6.lastElementChildren chọn element cuối cùng
// Element là nội dung phải nằm trong thẻ html
// parentNode
// childNodes
// nextSibling
// previousSibling
// firstChild
// lastChild

// items.forEach(function (item) {
//     item.addEventListener("click", function (e) {
//         e.preventDefault();
//         // var li = this.parentElement;
//         // li.classList.add("active");
//         // Array.from(this.parentElement.children[1].children).forEach(function (li) {
//         //     li.classList.add("active");
//         // });
//         // console.log(this.nextElementSibling);
//         // console.log(this.previousElementSibling);
//     });
// })

var lists = document.querySelectorAll(".list");
console.log(lists.childrenNodes);
// console.log(lists.children);
// lists.firstChild.data = "123";