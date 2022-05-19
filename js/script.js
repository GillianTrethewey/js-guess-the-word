const inputLetter = document.querySelector("input.letter");
const pMessage = document.querySelector("p.message");
const pWordInProgress = document.querySelector("p.word-in-progress");
const pRemaining = document.querySelector("p.remaining");
const ulGuessedLetters = document.querySelector("ul.guessed-letters");
const pRemainingSpan = document.querySelector("p.remaining span");
const buttonGuess = document.querySelector("button.guess");
const buttonPlayAgain = document.querySelector("button.play-again");
const word = "magnolia";

const placeholder = function (word) {
    let placeholderLetters = [];
    for (let letter of word) {
        placeholderLetters.push('●');
    }
    pWordInProgress.innerText = placeholderLetters.join('');
}

placeholder(word);

buttonGuess.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = inputLetter.value;
    console.log(guess);
    inputLetter.value="";

})