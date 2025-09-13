function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1

    if (computerChoice == 1) {
        computerChoice = "rock"
    } else if(computerChoice == 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getHumanChoice() {
    const humanChoice = prompt("Rock Paper Scissors:").toLowerCase();
    return humanChoice
}

function playRound(human, computer) {
    let humanScore = 0
    let computerScore = 0

    if (human == computer) { console.log("Its a tie!") }

    if ((human == "rock" && computer == "scissors") || 
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer == "paper")) {
            console.log(`You Win! ${human} beats ${computer}`)
        humanScore += 1
    }

    if ((human == "rock" && computer == "paper") || 
        (human == "paper" && computer == "scissors") ||
        (human == "scissrs" && computer == "rock")) {
            console.log(`You Lose! ${human} beats ${computer}`)
            computerScore += 1
    }

    return [humanScore, computerScore]
}

function playGame() {
    let scores = null

    for(let i = 0; i < 5; i++) {
        // console.log(i)
        let playerChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        // console.log(playerChoice)
        // console.log(computerChoice)

        scores = playRound(playerChoice, computerChoice);
    }

    scores[0] > scores[1] ? console.log("You won!") : console.log("The computer won!")
}

playGame();