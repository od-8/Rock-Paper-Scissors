const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    printWinner();
});

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    printWinner();
});

const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    printWinner();
});

const winner = document.querySelector("#winner");
let computerScore = 0;
let humanScore = 0;

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
    clearWinner();

    if (human == computer) { 
    } else if ((human == "rock" && computer == "scissors") || 
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer == "paper")) {

        humanScore += 1;
    } else {
        computerScore += 1;
    }

    printScore();
}

function printWinner() {
    
    if (computerScore % 5 == 0 && computerScore > humanScore) {
        winner.textContent = `You Lose! The computer one.`;
    } else if (humanScore % 5 == 0 && humanScore > computerScore) {
        winner.textContent = `You Win! Congratulations.`;
    }
}

function clearWinner() {
    winner.textContent = "";
}

function printScore() {
    const score = document.querySelector("#score");
    score.textContent = `Human = ${humanScore} | Computer = ${computerScore}`;
}