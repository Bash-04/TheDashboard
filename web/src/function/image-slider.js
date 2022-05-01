var slideIndex = 1;
showDivs(slideIndex);

function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dotDiv = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotDiv.length; i++) {
    dotDiv[i].className = dotDiv[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dotDiv[slideIndex-1].className += " active";
}
