// thêm sửa xóa thuộc tính 


// làm việc với thuộc tính 
// element.tenthuoctinh
// element.tenthuoctinh= giatri;


//==> chỉ hoạt động với HTML tương ứng

var a = document.querySelector("a");
// console.log(a);
// console.log(a.title);
// console.log(a.id);
// console.log(a.className);
// console.log(a.href);
// a.href = "https://f8.edu.vn";
// a.className = "nav-link";

// getAttribute(tenthuoctinh) setAttribute(tenthuoctinh,giatri)
// console.log(a.getAttribute("href"));
// a.setAttribute("width", 200);
// Data Attribute(Thuộc tính dùng để custom được sử dụng để xử lý JS)
// Cú pháp : data-*
// var width = a.getAttribute("data-width");
// console.log(width);
// a.setAttribute("data-height", 200);

// Dataset:Obeject có sẵn trong element Node giúp thao tác với Data Atrribute dưới  dạng Object


var width = a.dataset.width;// data-width
// console.log(width);
a.dataset.height = 100;
// console.log(a.dataset.height);
// có thể xóa
delete a.dataset.width;
// Thêm thuộc tính data-animation-duration mà sử dụng dataSet
a.dataset.animationDuration = 2;

a.dataset.animationTimingFunction = "ease";
// data-animation-timing-function

// xóa thuộc tính 
a.removeAttribute("id");
a.removeAttribute("class");
//  xóa thẻ html khác display node là xóa hẳn

a.remove();


// ClassList 

var contentEl = document.querySelector(".content");

console.log(contentEl.classList);
contentEl.classList.add('content-1', 'content-2', 'content-3');

// xóa class

contentEl.classList.remove("content-2");

contentEl.classList.replace("content-1", "content-11");
console.log(contentEl.classList.contains("content-3"));
// toggle có rồi xóa đi còn chưa có thì thêm vào


contentEl.classList.toggle("item");// thêm 
contentEl.classList.toggle("item");// xóa tại vì trên đã thêm




