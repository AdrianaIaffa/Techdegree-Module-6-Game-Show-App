const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const removeOverlay = document.querySelector("#overlay");

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
    removeOverlay.style.display = "none";
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
    const alphabet = document.querySelectorAll(li);
    let matchLetter = null;
    for ( let i = 0; i < alphabet.length; i++) {
        if ( button.textContent === alphabet[i].textContent) {
        li.className = "show";
        let matchLetter = +1;
        return matchLetter;
        }
     }
}


// listen for the onscreen keyboard to be clicked, attach clicked to querty buttons and trigger checkletter
qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON' && checkLetter === true) {
    button.className = "chosen";
    } else if (checkLetter === false){
        //remove heart
    }
    );

//
// check if the game has been won or loss
//const checkWin = () => {

//}



// function countToFive(start = 1) {
//     for(var i = start; i <=5; i+=1){
//       console.log(i);
//     }
//   }