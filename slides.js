// Base is from: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = [1, 1, 1];
let slideId = ["samSlides", "bnbSlides", "grSlides"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";

  // Handle dots
  switch (no) {
    case 0:
      let dots1 = document.getElementsByClassName("dot1");
      for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
      }
      dots1[slideIndex[no] - 1].className += " active";
      break;

    case 1:
      let dots2 = document.getElementsByClassName("dot2");
      for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
      }
      dots2[slideIndex[no] - 1].className += " active";
      break;

    case 2:
      let dots3 = document.getElementsByClassName("dot3");
      for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
      }
      dots3[slideIndex[no] - 1].className += " active";
  }
}
