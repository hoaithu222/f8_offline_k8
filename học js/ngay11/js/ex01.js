//

var a = document.querySelector("a");
console.log(a.href);
console.log(a.id);
console.log(a.className);
console.log(a.target);

a.href = "https://google.com";
console.log(a.href);
// console.log(a.width);
// chỉ khả dụng với 1 số thuộc tính hợp lệ của thẻ html 
// getAttribute(tenthuoctinh) 
//  thay đổi giá trị setAttribute(teenthuoctinh, giá trị)
// xóa thuộc tính a.removeAttribute(tenthuoctinh)



console.log(a.getAttribute("width"));
a.setAttribute("width", "200");

a.removeAttribute("width");

// trong HTML , có 1 số thuộc tính do lập trình viên tự thêm và xử lý bằng js ===> gọi là data attribute 


console.log(a.getAttribute("data-width"));
a.setAttribute("data-width", "300");
console.log(a.getAttribute("data-width"));

// ngoài ra có thể truy cập vào data attribute bằng dataset object 
console.log(a.dataset);
console.log(a.dataset.width);
a.dataset.height = 100;
// thêm thuộc tính : data-animation-duration
a.dataset.animationDuration = "1s";
console.log(a.dataset.animationDuration)
a.dataset.animationTimingFunction = "ease";
delete a.dataset.width;
// console.log(a);

//ClassList 

// console.log(a.className);
// thêm 1 class mới
// a.className = a.className + "  text-1";
// console.log(a.classList);
a.classList.add("text-1", "text-2", "text-3", "text-4");
a.classList.remove("text-2");
// thay thế
a.classList.replace("text-1", "text-11");
// toggle có rồi thì sẽ xóa đi chưa có thì sẽ thêm vào 
a.classList.toggle("content");
a.classList.toggle("content");
// console.log(a.classList.contains("content"));

// gán sự kiện cho danh sách
// var liList = document.querySelectorAll("ul li");
// console.log(liList);
// liList.forEach(function (li) {
//     li.addEventListener("click", function () {
//         // sử dụng this cũng được sử dụng li cũng được

//         console.log(this);
//     });
// });
