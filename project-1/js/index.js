import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout from "../components/helper.js";
handleLogout();

/*---------------------------------------------slider-1------------------------------------------------*/
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 1;
const totalSlides = slides.length;

slider.style.transform = `translateX(${-485 * currentIndex}px)`;

function slideToNext() {
  currentIndex++;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-485 * currentIndex}px)`;

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentIndex = 1;
      slider.style.transform = `translateX(${-485 * currentIndex}px)`;
    }, 500);
  }
}

function slideToPrev() {
  currentIndex--;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-485 * currentIndex}px)`;

  if (currentIndex === 0) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentIndex = totalSlides - 2;
      slider.style.transform = `translateX(${-485 * currentIndex}px)`;
    }, 500);
  }
}

setInterval(slideToNext, 3000);

/*---------------------------------------------slider-2------------------------------------------------*/
const secondslider = document.querySelector("#second-slider");
const rightButton = document.querySelector(".slider-right-arrow");
const leftButton = document.querySelector(".slider-left-arrow");
const images = document.querySelectorAll("#second-slider img");
const imageWidth = 423;
const visibleImages = 3;
const totalImages = images.length;

let currentIndexx = 0;

secondslider.style.width = `${imageWidth * totalImages}px`;

const maxIndex = totalImages - visibleImages;

function updateArrowButtons() {
  leftButton.disabled = currentIndexx === 0;
  rightButton.disabled = currentIndexx === totalImages - visibleImages;
}

function moveToNextSlide() {
  if (currentIndexx < totalImages - visibleImages) {
    currentIndexx++;
    secondslider.style.transform = `translateX(-${
      currentIndexx * imageWidth
    }px)`;
  }
  updateArrowButtons();
}

function moveToPrevSlide() {
  if (currentIndexx > 0) {
    currentIndexx--;
    secondslider.style.transform = `translateX(-${
      currentIndexx * imageWidth
    }px)`;
  }
  updateArrowButtons();
}

updateArrowButtons();

rightButton.addEventListener("click", moveToNextSlide);
leftButton.addEventListener("click", moveToPrevSlide);
