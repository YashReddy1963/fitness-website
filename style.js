//navigaiton bar toggle
function toggleNavbar(){
    const navbar = document.getElementById("navbar-hamburger")
    navbar.classList.toggle("hidden")
}

//moving slides container
var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    var i
    var slides = document.getElementsByClassName("slides")
    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "flex"
}