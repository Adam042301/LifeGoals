let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideTimer;

function showSlides(n) {
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active-dot");
}

// Next/previous controls
function plusSlides(n) {
  clearTimeout(slideTimer);  // Reset timer on manual control
  slideIndex += n;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 5000); // Restart auto-slide
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 5000);
}

// Automatic slideshow
function autoSlide() {
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 5000);
}

// Initialize slideshow
showSlides(slideIndex);
slideTimer = setTimeout(autoSlide, 5000);




// Swipe Gesture Support
let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

slideshowContainer.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
}, false);

function handleGesture() {
  const swipeThreshold = 50; // Minimum distance in px to be considered a swipe
  if (touchEndX < touchStartX - swipeThreshold) {
    plusSlides(1); // Swipe Left -> Next Slide
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    plusSlides(-1); // Swipe Right -> Previous Slide
  }
}


// Pause on hover (desktop)
slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
slideshowContainer.addEventListener('mouseleave', resumeSlideshow);

// Pause on touch-hold (mobile)
slideshowContainer.addEventListener('touchstart', pauseSlideshow);
slideshowContainer.addEventListener('touchend', resumeSlideshow);

// Pause and resume functions
function pauseSlideshow() {
  clearTimeout(slideTimer);
}

function resumeSlideshow() {
  slideTimer = setTimeout(autoSlide, 5000);
}







// let slideIndex = 0;
// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot");

// function showSlides() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("active");
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1; }

//   slides[slideIndex - 1].classList.add("active");
//   dots[slideIndex - 1].className += " active";

//   setTimeout(showSlides, 6000); // Change image every 5 seconds
// }

// showSlides();









// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3500); // Change image every 2 seconds
// }