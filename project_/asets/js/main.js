document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".menu-toggle");
    var menu = document.querySelector(".header .inner-wrap .inner-menu ol");

    if (btn && menu) {
        btn.addEventListener("click", function () {
            menu.classList.toggle("active");
            btn.classList.toggle("active");

            var openIcon = btn.querySelector(".open-icon");
            var closeIcon = btn.querySelector(".close-icon");

            if (btn.classList.contains("active")) {
                openIcon.style.display = "none";
                closeIcon.style.display = "block";
            } else {
                openIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        });
    }
    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll(".header .inner-wrap .inner-menu ol a");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});





