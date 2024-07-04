var listMenus = document.querySelectorAll("a");

var calcHeightSubmenu = function (element) {
    var css = {
        position: "absolute",
        top: "-50000px",
        left: "-50000px",
        display: "initial",
        height: "auto",

    }
    Object.assign(element.style, css);
    element.initialHeight = element.clientHeight;
    var css = {
        position: null,
        top: null,
        left: null,
        display: null,
        height: null,

    }
    Object.assign(element.style, css);
}
listMenus.forEach(function (item) {
    var subMenu = item.nextElementSibling;
    if (subMenu) {
        subMenu.parentElement.classList.add("has-children");
        calcHeightSubmenu(subMenu);
    }
    item.addEventListener("click", function (e) {
        e.preventDefault();
        if (subMenu) {
            var menuItemActive = document.querySelector(".menu li.active");
            item.parentElement.classList.toggle("active");
            if (menuItemActive) {
                menuItemActive.classList.remove("active");
            }
        }
    });
});



