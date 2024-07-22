//DOMContentLoaded ==> Sự kiện fire khi DOM Tree được hình thành
//load ==> Sự kiện fire khi tất cả các tài nguyên trên trang web được tải xong
var init = function () {
    var navEl = document.querySelector("nav");
    var navHeight = navEl.clientHeight;
    var body = document.body;
    var navItems = navEl.children;
    body.style.paddingTop = `${navHeight}px`;
    if (navItems.length) {
        Array.from(navItems).forEach(function (navItem) {
            navItem.addEventListener("click", function () {
                var sectionId = this.dataset.target;
                if (!sectionId) {
                    return;
                }
                var sectionEl = document.querySelector(sectionId);
                var offsetTopSection = sectionEl.offsetTop - navHeight;
                window.scroll({
                    top: offsetTopSection,
                    behavior: "smooth",
                });
            });
        });
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var sectionId = entry.target.id;
                    var navItemActive = navEl.querySelector(".active");
                    var navItem = navEl.querySelector(
                        `button[data-target="#${sectionId}"]`
                    );
                    navItem.classList.add("active");
                    if (navItemActive) {
                        navItemActive.classList.remove("active");
                    }
                }
            });
        },
        {
            threshold: [0.5], //Giữa màn hình
        }
    );
    var sectionList = document.querySelectorAll("section");
    if (sectionList.length) {
        sectionList.forEach(function (sectionEl) {
            observer.observe(sectionEl);
        });
    }
};
document.addEventListener("DOMContentLoaded", init);