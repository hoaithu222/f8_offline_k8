var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var dotsContainer = document.querySelector('.dots');
var sliderWrapper = document.querySelector('.carousel-inner');
var isDragging = false;
var startPos = 0;
var currentTranslate = 0;
var prevTranslate = 0;
var animationID;

for (var i = 0; i < totalSlides; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.setAttribute('data-slide', i);
    dot.addEventListener('click', function (i) {
        return function () {
            changeSlide(i);
        };
    }(i));
    dotsContainer.appendChild(dot);
}

var dots = document.querySelectorAll('.dot');

document.querySelector('.next').addEventListener('click', function () {
    changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', function () {
    changeSlide(currentSlide - 1);
});

function changeSlide(index) {
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    currentSlide = index;
    updateSliderPosition();
    updateDots();
}

function updateSliderPosition() {
    sliderWrapper.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function updateDots() {
    dots.forEach(function (dot, index) {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function touchStart(index) {
    return function (event) {
        currentSlide = index;
        startPos = getPositionX(event);
        isDragging = true;
        sliderWrapper.style.cursor = 'all-scroll';
        animationID = requestAnimationFrame(animation);
    };
}

function touchMove(event) {
    if (isDragging) {
        var currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    isDragging = false;
    sliderWrapper.style.cursor = 'auto';
    cancelAnimationFrame(animationID);
    var movedBy = currentTranslate - prevTranslate;

    if (movedBy < -window.innerWidth / 10 && currentSlide < totalSlides - 1) {
        currentSlide += 1;
    } else if (movedBy > window.innerWidth / 10 && currentSlide > 0) {
        currentSlide -= 1;
    }

    setPositionByIndex();
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) {
        requestAnimationFrame(animation);
    }
}

function setSliderPosition() {
    sliderWrapper.style.transform = 'translateX(' + currentTranslate + 'px)';
}

function setPositionByIndex() {
    currentTranslate = currentSlide * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateDots();
}

slides.forEach(function (slide, index) {
    var slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });

    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
});
