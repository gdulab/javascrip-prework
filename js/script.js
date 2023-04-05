const ROCK = 'kamień';
const SCISSORS = 'nożyce';
const PAPER = 'papier';

function buttonClicked(argButtonName) {
    clearMessages();
    console.log('ruch gracza to: ' + argButtonName);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(argButtonName, computerMove);
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId === 1) {
        return ROCK;
    }
    else if (argMoveId === 2) {
        return PAPER;
    }
    else if (argMoveId === 3) {
        return SCISSORS;
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "ROCK".');
        return ROCK;
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    const message = 'Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.';
    if (argPlayerMove == PAPER && argComputerMove == ROCK || argPlayerMove == ROCK && argComputerMove == SCISSORS || argPlayerMove == SCISSORS && argComputerMove == PAPER) // zamiast robić 3 else if można to zapisać w jednej linijce
    {
        printMessage('Wygrywasz!');
        printMessage(message);
    }
    else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!')
        printMessage('Zagraliśmy to samo.');
    }
    else {
        printMessage('Przegrywasz :(');
        printMessage(message);
    }

}
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () { buttonClicked(ROCK); });
buttonPaper.addEventListener('click', function () { buttonClicked(PAPER); });
buttonScissors.addEventListener('click', function () { buttonClicked(SCISSORS); });