import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout from "../components/helper.js";  
handleLogout();


/*---------------------------------------------slider------------------------------------------------*/ 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 1; // Start from the first actual image (since we added cloned slides)
const totalSlides = slides.length;

// Set initial position to the first actual image
slider.style.transform = `translateX(${-485 * currentIndex}px)`;

function slideToNext() {
  currentIndex++;
  slider.style.transition = 'transform 0.5s ease-in-out'; // Add smooth transition
  slider.style.transform = `translateX(${-485 * currentIndex}px)`;

  // When the last slide is reached (cloned first slide), reset to the first actual image
  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      slider.style.transition = 'none'; // Disable transition for the jump back
      currentIndex = 1; // Jump back to the first actual image
      slider.style.transform = `translateX(${-485 * currentIndex}px)`;
    }, 500); // Timeout must match the transition duration
  }
}

function slideToPrev() {
  currentIndex--;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${-485 * currentIndex}px)`;

  // When the first slide is reached (cloned last slide), reset to the last actual image
  if (currentIndex === 0) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentIndex = totalSlides - 2; // Jump back to the last actual image
      slider.style.transform = `translateX(${-485 * currentIndex}px)`;
    }, 500);
  }
}

// Auto-slide every 3 seconds
setInterval(slideToNext, 3000);
