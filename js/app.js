const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const removeOverlay = document.querySelector("#overlay");
const randomNumber = Math.floor( math.random() * phrasesToGuess.lenght + 1 );
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
// const getRandomPhraseAsArray = arr => {
    // phrasesToGuess[randomNumber]
// }

// const addPhraseToDisplay = arr => {

// }

// const checkLetter = button => {

// }

// const checkWin = () => {

// }

// startButton.addEventListener("click", () => {

// });

// qwerty.addEventListener("click", e => {

// });

// function countToFive(start = 1) {
//     for(var i = start; i <=5; i+=1){
//       console.log(i);
//     }
//   }