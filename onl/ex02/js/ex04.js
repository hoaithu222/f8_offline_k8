var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slidesContainer = document.querySelector(".slides");
var slides = document.querySelectorAll(".slide");
var dotsContainer = document.getElementById("dots");
var currentIndex = 0;
var posX1 = 0;
var posX2 = 0;
var initialPosition = 0;
var finalPosition = 0;

slides[currentIndex].classList.add("active");

slides.forEach(function (slide, index) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) {
        dot.classList.add("active");
    }
    dot.setAttribute("data-index", index);
    dotsContainer.appendChild(dot);
});

var dots = document.querySelectorAll(".dot");

prev.addEventListener("click", function () {
    switchSlide("prev");
});

next.addEventListener("click", function () {
    switchSlide("next");
});

dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        var index = parseInt(this.getAttribute("data-index"));
        switchSlideTo(index);
    });
});

function switchSlide(direction) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    if (direction === "next") {
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}

function switchSlideTo(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = index;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
}

// Drag functionality
slidesContainer.addEventListener('mousedown', dragStart);
slidesContainer.addEventListener('touchstart', dragStart);
document.addEventListener('mousemove', dragMove);
document.addEventListener('touchmove', dragMove);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragStart(e) {
    e.preventDefault();
    initialPosition = slidesContainer.offsetLeft;
    if (e.type === "touchstart") {
        posX1 = e.touches[0].clientX;
    } else {
        posX1 = e.clientX;
    }
}

function dragMove(e) {
    if (posX1 === 0) return; // Exit if drag hasn't started
    var posX2;
    if (e.type === "touchmove") {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
    } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
    }
    slidesContainer.style.left = `${slidesContainer.offsetLeft - posX2}px`;
}

function dragEnd() {
    finalPosition = slidesContainer.offsetLeft;
    if (finalPosition - initialPosition < -496) {
        switchSlide("next");
    } else if (finalPosition - initialPosition > 400) {
        switchSlide("prev");
    } else {
        slidesContainer.style.left = `${initialPosition}px`;
    }
    posX1 = 0; // Reset posX1
}

// Adding window resize listener to update slide width dynamically
window.addEventListener('resize', function () {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.left = `-${currentIndex * slideWidth}px`;
});
