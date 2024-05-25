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

//fitness api
function fitness(selectElement){
    var muscle = selectElement.value
    console.log('Slected element value is: ', muscle)
    var difficulty = 'intermediate'
    var type = 'cardio'
    var name = 'Skating'

    fetch('https://api.api-ninjas.com/v1/exercises?muscle='+muscle+'&difficulty='+difficulty,{
        method: 'GET',
        headers:{
            'X-Api-Key': '5LVeohRiAeSDc0PeRMwY1g==HamqaS7HJICTIrIT',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        return response.json()
    }).then(data =>{
        console.log(data)
        displaySuggestions(data)
    }).catch(error => {
        console.error("Error: ", error)
    })
}

function displaySuggestions(exercises) {
    var suggestionsContainer = document.getElementById('suggestions')
    suggestionsContainer.innerHTML = ''

    exercises.forEach(exercise => {
        var exerciseElement = document.createElement('div')
        exerciseElement.className = 'p-2 mb-2 bg-[#1f1f1f] rounded-lg'
        
        var nameElement = document.createElement('h3')
        nameElement.className = 'font-bold text-lg'
        nameElement.textContent = exercise.name

        var typeElement = document.createElement('p')
        typeElement.textContent = 'Type: ' + exercise.type

        var muscleElement = document.createElement('p')
        muscleElement.textContent = 'Muscle: ' + exercise.muscle

        var difficultyElement = document.createElement('p')
        difficultyElement.textContent = 'Difficulty: ' + exercise.difficulty
        
        var equipmentElement = document.createElement('p')
        equipmentElement.textContent = 'Equipment: ' + exercise.equipment

        var instructionsElement = document.createElement('p')
        instructionsElement.textContent = 'Instructions: ' + exercise.instructions

        exerciseElement.appendChild(nameElement)
        exerciseElement.appendChild(typeElement)
        exerciseElement.appendChild(muscleElement)
        exerciseElement.appendChild(difficultyElement)
        exerciseElement.appendChild(instructionsElement)

        suggestionsContainer.appendChild(exerciseElement)
    })
}

function resetToDefault(){
    const selectElement = document.getElementById("body_parts")
    selectElement.selectedIndex = 0
    console.clear()
}
