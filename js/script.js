const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const getWord = async function() {
    const wordjson = await fetch(url);
    const data = await wordjson.json();
    const word = Math.floor(Math.random() * data.length);
}




const word = "magnolia";
const guessedLetters = [];

// Make the not guessed letters circle placeholders
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // reset message to empty
    message.innerText = "";
    // guess contains the user input value
    const guess = letterInput.value;
    // validate the input
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "Try again with a different letter.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = '';

    for (let letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress =function(guessedLetters) {
    const wordArray = word.toUpperCase().split('');
    const revealWord = [];
    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
           revealWord.push(letter);
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join('');
    checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed it!!</p>
`       playAgainButton.classList.remove("hide");
    }
}

playAgainButton.addEventListener("click", function () {

})