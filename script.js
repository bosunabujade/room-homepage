const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("closebtn");
const body = document.getElementById('body');
const header = document.getElementById('header');
const left = document.getElementById("left");
const right = document.getElementById("right");
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");


hamburger.addEventListener('click', () => {
    mobileNav.style.display = "flex";
    body.classList.add("overlay");
})

closeBtn.addEventListener('click', () => {
    mobileNav.style.display = "none";
    body.classList.remove("overlay");
})

let currentSlide = 1;
let totalImages = 3


function whichSlide() {
    if (currentSlide == 1) {
        header.style.background = "url(./images/mobile-image-hero-1.jpg)"
        slide2.style.display = "none"
        slide3.style.display = "none"
        slide1.style.display = "flex"
    } if (currentSlide == 2) {
        header.style.background = "url(./images/mobile-image-hero-2.jpg)"
        slide1.style.display = "none"
        slide3.style.display = "none"
        slide2.style.display = "flex"
    } if (currentSlide == 3) {
        header.style.background = "url(./images/mobile-image-hero-3.jpg)"
        slide2.style.display = "none"
        slide1.style.display = "none"
        slide3.style.display = "flex"
    } if (currentSlide == 1 || body.style.width == '375px'){
        header.style.background = "url(./images/desktop-image-hero-1.jpg)"
        header.style.backgroundSize = "cover" 
        slide2.style.display = "none"
        slide3.style.display = "none"
        slide1.style.display = "flex"
    }
    if (currentSlide == 2 || body.style.width == '375px'){
        header.style.background = "url(./images/desktop-image-hero-2.jpg)"
        header.style.backgroundSize = "cover" 
        slide2.style.display = "none"
        slide3.style.display = "none"
        slide1.style.display = "flex"
    }
    if (currentSlide == 3 || body.style.width == '375px'){
        header.style.background = "url(./images/desktop-image-hero-3.jpg)"
        header.style.backgroundSize = "cover" 
        slide2.style.display = "none"
        slide3.style.display = "none"
        slide1.style.display = "flex"
    }
}

left.addEventListener('click', () => {
    decreaseImage();
    whichSlide();
})

right.addEventListener('click', () => {
   increaseImage();
   whichSlide();
})

function increaseImage() {
    ++currentSlide
    if (currentSlide > totalImages) {
        currentSlide = 1;
    }
}

function decreaseImage() {
    --currentSlide
    if (currentSlide < 1) {
        currentSlide = totalImages;
    }
}

