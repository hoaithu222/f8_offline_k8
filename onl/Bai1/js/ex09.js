/*
DOM Navigation 
- chọn các element theo phân cấp : cha, con, ngang hàng (trước, sau)
- parentElement --> cha
- children --> con 
- nextElementSibling --> sau 
- previousElementSibling --> trước
*/

var menuLinkList = document.querySelectorAll("a");
menuLinkList.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (e) {
        e.preventDefault();
        // console.log(this);
        // this.parentElement.classList.add("active");
        // console.log(this.nextElementSibling.children);
        // không sử dụng được forEach chỉ sử dụng được for thường muốn sử dụng forEach thi sủ dụng array.from
        var children = this.nextElementSibling.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.add("children");
        }
    });
});
