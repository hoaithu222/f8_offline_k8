
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var dotsContainer = document.querySelector('.dots');
var sliderWrapper = document.querySelector('.slider-wrapper');
var isDragging = false;
var startPos = 0;
var currentTranslate = 0;
var prevTranslate = 0;
var animationID;

// Tạo dots dựa trên số lượng slide
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('data-slide', i);
    dot.addEventListener('click', () => changeSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

function changeSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentSlide = index;
    updateSliderPosition();
    updateDots();
}

function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function touchStart(index) {
    return function (event) {
        currentSlide = index;
        startPos = getPositionX(event);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
    }
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    // Chuyển slide khi kéo đủ 10% chiều rộng của slide
    if (movedBy < -window.innerWidth / 10 && currentSlide < totalSlides - 1) {
        currentSlide += 1;
    }
    if (movedBy > window.innerWidth / 10 && currentSlide > 0) {
        currentSlide -= 1;
    }
    setPositionByIndex();
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    currentTranslate = currentSlide * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateDots();
}

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
});
