var form = document.querySelector(".inner-form");
var nextEl = document.querySelectorAll(".next");
var prevEl = document.querySelectorAll(".prev");
var steps = document.querySelectorAll(".step");
var current = 0;

function showStep(step) {
    steps[step].classList.add("active");
    if (step > 0) {
        steps[step - 1].classList.remove("active");
    }
    if (step < steps.length - 1) {
        steps[step + 1].classList.remove("active");
    }
}
Array.from(nextEl).forEach(function (next) {
    next.addEventListener("click", function (e) {
        e.preventDefault();
        current++;
        showStep(current);

    });
});
Array.from(prevEl).forEach(function (prev) {
    prev.addEventListener("click", function (e) {
        e.preventDefault();
        current--;
        showStep(current);

    });
});
showStep(current);