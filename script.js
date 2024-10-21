const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const displayStatement = document.getElementById("card-content")
    if (showingTerm == true){
        displayStatement.innerHTML = flashcards[currentIndex].term
    } else {
        displayStatement.innerHTML = flashcards[currentIndex].definition
    }  
}

const showDefinitionButton = document.getElementsByClassName("flashcard")[0]
const nextButton = document.getElementById("next-btn")
const prevButton = document.getElementById("prev-btn")
const addButton = document.getElementById("add-card-btn")


showDefinitionButton.addEventListener("click", function(){
    showingTerm = false
    displayCard()
})

nextButton.addEventListener("click", function(){    
    currentIndex++
    if (currentIndex === flashcards.length){
        currentIndex = 0
    }
    showingTerm = true
    displayCard()
})

prevButton.addEventListener("click", function(){
    if (currentIndex != 0){
        currentIndex--
    } else{
        currentIndex = (flashcards.length - 1)
    }
    showingTerm = true
    displayCard()
})

addButton.addEventListener("click", function(){
    const newTerm = document.getElementById("new-term")
    const newDefinition = document.getElementById("new-definition")

    if (newTerm.value != "" && newDefinition.value != ""){
        const newFlashCard = {term: newTerm.value, definition: newDefinition.value}
        flashcards.push(newFlashCard)
        newTerm.value = ""
        newDefinition.value = ""
    } 
})





// This line will display the card when the page is refreshed
window.onload = displayCard;