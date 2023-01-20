function toggleRead(x) {
	var dots = document.getElementById("dotdotdot" + x);
	var moreText = document.getElementById("more" + x);
	var btnText = document.getElementById("btn" + x);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

let slideIndex = [1, 1, 1, 1, 1, 1];
showSlides(0, slideIndex);
showSlides(1, slideIndex);
showSlides(2, slideIndex);
showSlides(3, slideIndex);
showSlides(4, slideIndex);
showSlides(5, slideIndex);

// Next/previous controls
function plusSlides(x, n) {
  showSlides(x, slideIndex[x] += n);
}

// Thumbnail image controls
function currentSlide(x, n) {
  showSlides(x, slideIndex[x] = n);
}

function showSlides(x, n) {
	let i;
	let slides = document.getElementsByClassName("mySlides fade " + x);
	//console.log(slides[2].style.display);
	let dots = document.getElementsByClassName("dot " + x);
	
	if (n > slides.length) {slideIndex[x] = 1}
	if (n < 1) {slideIndex[x] = slides.length}
  
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		
		dots[i].className = dots[i].className.replace(" active", "");
	}
	console.log(x);
	slides[slideIndex[x]-1].style.display = "block";
	dots[slideIndex[x]-1].className += " active";
}


// Get the button:
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
//window.addEventListener("scroll", scrollFunction());
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}