var btnOne = document.querySelector(".btn-one");
var btnTwo = document.querySelector(".btn-two");
var btnThree = document.querySelector(".btn-three");

var sectionOne = document.querySelector(".section-one");
var sectionTwo = document.querySelector(".section-two");
var sectionThree = document.querySelector(".section-three");



var btns = [btnOne, btnTwo, btnThree];

var heightSection = sectionOne.clientHeight;


var header = document.querySelector(".header");
var headerHeight =


    function removeActive() {
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }
    }
btns[0].classList.add("active");
function addActive(index) {
    btns[index].classList.add("active");

}
btnOne.addEventListener("click", function () {
    removeActive();
    addActive(0);
    window.scroll({
        top: 0,
        behavior: "smooth",
    });

});
btnTwo.addEventListener("click", function () {
    removeActive();
    addActive(1);
    window.scroll({
        top: heightSection,
        behavior: "smooth",
    });
});
btnThree.addEventListener("click", function () {
    removeActive();
    addActive(2);
    window.scroll({
        top: heightSection * 2,
        behavior: "smooth",
    });
});
// window.addEventListener("scroll", function () {
//     var position = window.scrollY;
//     if (position >= heightSection) {
//         removeActive();
//         addActive(1);
//     }
//     else if (position >= heightSection * 2) {
//         removeActive();
//         addActive(2);
//     }


// });



