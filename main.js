var modal = document.getElementById("modal");
var carousel = document.getElementById("modal2");

carousel.style.display = "none";

var close = document
  .getElementById("closeBtn")
  .addEventListener("click", function () {
    modal.style.display = "none";
    document.getElementById("overlay").style.display = "block";
  });

var accept = document
  .getElementById("acceptBtn")
  .addEventListener("click", function () {
    modal.style.display = "none";
    document.getElementById("overlay").style.display = "block";
  });

  var exit = document.getElementById("close").addEventListener('click', function(){
    carousel.style.display = "none";
    showModels.style.display = "block"
  })

  var showModels = document.getElementById("show").addEventListener('click', function(){
    carousel.style.display = "block";
    showModels.style.display = "none";
    })

  document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let bikeModels = document.getElementsByClassName('name');
    
    for(let i = 0; i < bikeModels.length; i++) {
      const currentName = bikeModels[i].textContent.toLowerCase();
  
      if (currentName.includes(searchQuery)) {
        bikeModels[i].style.display = "inline-block";
    } else {
        bikeModels[i].style.display = "none";
    }
  }

});


const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    showModels.style.background = "none";
}

function moveToPrevSlide() {
  hideAllSlides();
  if(slidePosition === 0){
      slidePosition = slides.length -1;
  } else {
      slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
  showModels.style.display = "none";
}

function hideAllSlides() {
    for(let slide of slides){
        slides[slidePosition].classList.remove("carousel-item-visible");
        slides[slidePosition].classList.add("carousel-item-hidden");
        
    }
}
