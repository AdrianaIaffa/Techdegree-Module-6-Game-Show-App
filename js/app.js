const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const removeOverlay = document.querySelector("#overlay");
let missed = 0;


// const getRandomPhraseAsArray = arr => {

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

startGame.addEventListener('click', () =>{
    removeOverlay.style.display = "none";
});