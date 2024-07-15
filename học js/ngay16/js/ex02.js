
// DOMContentLoad ===> Sự kiện fire khi DOM TRee được hình thành
//load ==> sự kiện fire khi tất cả các tài nguyên trên trang web được tài xong

var init = function () {
    var navEl = document.querySelector("nav");
    var navHeight = navEl.clientHeight;
    var body = document.body;
    var navItems = navEl.children;
    body.style.paddingTop = `${navHeight}px`;
    if (navItems.length) {
        Array.from(navItems).forEach(function () {
            navItems.addEventListener("click", function () {
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
    var el = document.querySelector("#section-2");
    window.addEventListener("scroll", function () {
        var Observer = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            if (entry.isIntersecting) {
                var sectionId = entry.target.id;

                var sectionId = navEl.querySelector()
            }

        });



    });


};

// Intersection Observer API
// getBoundingClientRect() 
document.addEventListener("DOMContentLoaded", init);