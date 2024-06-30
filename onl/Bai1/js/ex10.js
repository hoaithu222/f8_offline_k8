var menuLinkList = document.querySelectorAll("a");

menuLinkList.forEach(function (menuLink) {

    var submenu = menuLink.nextElementSibling;
    if (submenu) {
        submenu.parentElement.classList.add("has-children");
    }
    menuLink.addEventListener("click", function (e) {
        e.preventDefault();
        // lấy menu active củ lần mở trước 
        var menuItemActive = document.querySelector(".menu li.active");
        // để lấy active của lần mở trước --> không lấy được tra về null chỉ trong trường hợp mở 2 cái thì sẽ đóng cái lần đầu mở và mở cái tiếp theo 

        // thêm menu active của lần mở hiện tại
        menuLink.parentElement.classList.toggle("active");
        // xóa email active của lần mở trước
        if (menuItemActive) {
            menuItemActive.classList.remove("active");
        }
    });
});