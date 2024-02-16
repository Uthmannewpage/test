// JavaScript for the slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Function to move to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Event listeners for the arrow buttons
document.querySelector('.carousel > div:first-child > div').addEventListener('click', nextSlide);
document.querySelector('.carousel > div:last-child > div').addEventListener('click', prevSlide);
