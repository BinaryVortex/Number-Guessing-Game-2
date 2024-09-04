// Game logic
let randomNumber = Math.floor(Math.random() * 99) + 1;
let remainingChances = 10;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const message = document.querySelector('.message');
    const chancesElement = document.getElementById('chances');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 99) {
        message.textContent = "Please enter a number between 1 and 99.";
        return;
    }

    remainingChances--;
    chancesElement.textContent = remainingChances;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed it right!";
        message.style.color = "#4CAF50";
        disableInput();
    } else if (remainingChances === 0) {
        message.textContent = "Game over! The correct number was " + randomNumber;
        message.style.color = "#f44336";
        disableInput();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }

    updateProgressBar();
}

function disableInput() {
    document.getElementById('guess-input').disabled = true;
    document.querySelector('.check-btn').disabled = true;
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress');
    const progress = (10 - remainingChances) / 10;
    progressBar.style.transform = `scaleX(${progress})`;
}
