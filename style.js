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
        //if slides is more then lenght, then the first slid will be displayed
        slideIndex = 1
    }
    if(n<1){
        //if slide is less then 1, then the last slide will be displayed
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++){
        //hidding all the reviews
        slides[i].style.display = "none"
    }
    //displaying the reviews in fles
    slides[slideIndex - 1].style.display = "flex"
}

//Reset form
function resetForm(){
    document.getElementById("contactForm").reset()
}

//Submission form
function submitForm(event){
    event.preventDefault()
    console.log("Form Submitted")
    //to display the submit message
    document.getElementById("submitMessage").classList.remove("hidden")
    setTimeout(()=>{
        //to hide the message after 3 seconds
        document.getElementById("submitMessage").classList.add("hidden")
    }, 3000)
    //resetting the form
    resetForm()
}