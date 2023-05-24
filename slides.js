// Base is from: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = [
  "samSlides",
  "bnbSlides",
  "grSlides",
  "snsSlides",
  "nrSlides",
  "cdSlides",
];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

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
  let dots;
  switch (no) {
    case 0:
      dots = document.getElementsByClassName("dot1");
      break;

    case 1:
      dots = document.getElementsByClassName("dot2");
      break;

    case 2:
      dots = document.getElementsByClassName("dot3");
      break;

    case 3:
      dots = document.getElementsByClassName("dot4");
      break;

    case 4:
      dots = document.getElementsByClassName("dot5");
      break;

    case 5:
      dots = document.getElementsByClassName("dot6");
      break;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no] - 1].className += " active";
}
