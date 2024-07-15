document.addEventListener("DOMContentLoaded", function () {
    var btnOne = document.querySelector(".btn-one");
    var btnTwo = document.querySelector(".btn-two");
    var btnThree = document.querySelector(".btn-three");

    var sectionOne = document.querySelector(".section-one");
    var sectionTwo = document.querySelector(".section-two");
    var sectionThree = document.querySelector(".section-three");

    var sections = [sectionOne, sectionTwo, sectionThree];
    var buttons = [btnOne, btnTwo, btnThree];

    var headerHeight = 80; // Chiều cao của header

    function removeActiveClass() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
    }

    function addActiveClass(index) {
        buttons[index].classList.add("active");
    }

    function handleScroll() {
        var position = window.scrollY + headerHeight;
        var heightSection = sectionOne.clientHeight;

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var offsetTop = section.offsetTop;
            var offsetBottom = offsetTop + heightSection;

            if (position >= offsetTop && position < offsetBottom) {
                removeActiveClass();
                addActiveClass(i);
            }
        }
    }

    function scrollToSection(index) {
        var offsetTop = sections[index].offsetTop - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    btnOne.addEventListener("click", function () {
        scrollToSection(0);
    });

    btnTwo.addEventListener("click", function () {
        scrollToSection(1);
    });

    btnThree.addEventListener("click", function () {
        scrollToSection(2);
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Gọi để cập nhật trạng thái ban đầu
});
