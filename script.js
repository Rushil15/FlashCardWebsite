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

const nextButton = document.getElementById("next-btn")
const prevButton = document.getElementById("prev-btn")

nextButton.addEventListener("click", function(){
    if (showingTerm == true){
        showingTerm = false
    } else{
        currentIndex++
        showingTerm =true
    }
    displayCard()
})

prevButton.addEventListener("click", function(){
    if (showingTerm == true){
        showingTerm = false
        currentIndex--
    } else{
        showingTerm =true
    }
    displayCard()
})

// This line will display the card when the page is refreshed
window.onload = displayCard;