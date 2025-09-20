const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if(computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(human, computer) {
    if (human == computer) { 
        printTie();
    } else if ((human == "rock" && computer == "scissors") || 
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer == "paper")) {

        humanScore += 1
        printWinner("win", computer, human);
    } else {
        computerScore += 1
        printWinner("lose", computer, human);
    }

    printScore()
}

function printWinner(result, win, lose) {
    const winner = document.querySelector("#winner");
    winner.textContent = `You ${result}! ${win} beats ${lose}.`
}

function printScore() {
    const score = document.querySelector("#score");
    score.textContent = `Human = ${humanScore} | Computer = ${computerScore}`
}

function printTie() {
    const tie = document.querySelector("#winner");
    tie.textContent = `Its a tie!`
}