// Get references to elements
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));

let currentIndex = 0;

// Function to show a slide
function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Add active class to the current slide
    slides[index].classList.add('active');
}

// Function to switch to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex === slides.length) {
        currentIndex = 0; // Wrap around to the first slide
    }
    showSlide(currentIndex);
}

// Set an interval to automatically switch slides
setInterval(nextSlide, 3000); // Change slide every 3 seconds
