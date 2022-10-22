const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const startOverlay = document.querySelector("#overlay");

let missed = 0;

const phrasesToGuess = [
    "a penny for your thoughts",
    "bitting more than you can chew",
    "curiosity killed the cat",
    "hit the nail in the head",
    "kill two birds with one stone",
    "not playing with the full deck",
    "your guess is as good as mine",
    "look after your pennies and the pounds will look after themselves",
];

startGame.addEventListener('click', () =>{
    startOverlay.style.display = "none";
});

// Return a random phrase from an array
const getRandomPhraseAsArray = newPhraseRound => {
    const randomNumber = Math.floor(Math.random() * newPhraseRound.length);
    return newPhraseRound[randomNumber].split('');
  }
  
// adds the letter of a string to the display
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        const display = document.querySelector("ul");
        li.textContent = arr[i];
        display.append(li);
        if(arr[i] === " ") {
            li.className = "space"; 
        } else {
            li.className = "letter";
        }
    }
};
addPhraseToDisplay(getRandomPhraseAsArray(phrasesToGuess));

const checkLetter = button => {
    const alphabet = document.querySelectorAll("li.letter");
    let matchLetter = null;
    for ( let i = 0; i < alphabet.length; i++) {
        if ( button.textContent === alphabet[i].textContent) {
        alphabet[i].classList.add("show");
        matchLetter = button.textContent;
        
        }
     }
     return matchLetter;
}


// listen for the onscreen keyboard to be clicked, attach clicked to querty buttons and trigger checkletter
qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
    const button = e.target;    
    button.className = "chosen";
    button.disabled = true;
    const checkingLetter = checkLetter(button);
    if (checkingLetter === null) {
        const hearts = document.querySelectorAll(".tries img");
        hearts[missed].src = "../images/lostHeart.png";
        missed +=1;
    }
    } 
        //remove heart
    
});

//
// check if the game has been won or loss
const checkWin = () => {
    const letter = document.querySelectorAll(".letter");
    const show = document.querySelectorAll(".show");
    const headline = document.querySelector(".title");
        if (letter.length === show.length) {
            startOverlay.className = "win";
            headline.textConent = "You win!";
            startOverlay.style.display = "flex";
            reset();
        } else if ( missed > 4) {
            startOverlay.className = "lose";
            headline.textConent = "You lost :(";
            startOverlay.style.display = "flex";
            reset();
        }
    }




// function countToFive(start = 1) {
//     for(var i = start; i <=5; i+=1){
//       console.log(i);
//     }
//   }