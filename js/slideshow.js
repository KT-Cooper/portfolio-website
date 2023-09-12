let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(this.timeoutID);
  showSlides(slideIndex += n-1);
  this.timeoutID = setTimeout(showSlides, 7500);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(this.timeoutID);
  showSlides(slideIndex = n-1);
  this.timeoutID = setTimeout(showSlides, 7500);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("slide-indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}