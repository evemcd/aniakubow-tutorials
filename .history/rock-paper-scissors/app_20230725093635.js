const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    if (randomNumber === 1) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {

    if (computerChoice === userChoice) {
        result = "it's a draw";
    }

    if (computerChoice === userChoice) {
        result = "it's a draw";
    }
}