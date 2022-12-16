


let playerScore;
let compScore;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerScoreBox = document.querySelector("#player-score-box");
const computerScoreBox = document.querySelector("#computer-score-box");


// Resets scores to 0 
// and displays 0 in player and comp score boxes
function resetScores() {
    playerScore = 0;
    compScore = 0;
    
    
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}


// When a user clicks on a rock, paper, scissors button
function startApplication() {

    rockButton.addEventListener('click', (e) => {
        simulateGame(e);
    });
    paperButton.addEventListener('click',  (e) => {
        simulateGame(e);
    });
    scissorsButton.addEventListener('click',  (e) => {
        simulateGame(e);
    });
    
}

resetScores()
startApplication()

// takes event from click in startApplication 
// and stores id of element of event as ROCK, PAPER or SCISSORS in userSelection
// stores output of computerSelection in computerSelection
// updates scores from output of getWinner from input of userSelection and computerSelection
function simulateGame(e) {  
    let userSelection = e.target.id.toUpperCase();
    let computerSelection = generateComputerSelection();

    if (winningScoreReached()) {
    return;
    }
    
    let winner = getWinner(userSelection, computerSelection)
    
    updateScore(winner);
}


// generates computer selection of ROCK, PAPER, SCISSORS
function generateComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2: 
            return "SCISSORS";
    }
}

// Compares user input with output of generateComputerSelection 
// and returns winner
function getWinner(playerSelection, computerSelection) {
    const roundResultBox = document.querySelector("#round-result-box");

    if (playerSelection === computerSelection){ 
    roundResultBox.textContent = "The result is a tie";
    return "TIE";
    } else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
        ) {
        roundResultBox.textContent = "You win the round!";
        return "PLAYER"; 
    } else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
        ) { 
        roundResultBox.textContent = "The computer wins the round!";
        return "COMPUTER";
        }      
}


// From output of getWinner, updates player and comp scores
// Outputs final winner if player score or comp score reaches 5
function updateScore(roundWinner) {
    if (roundWinner === "PLAYER") {
        playerScore += 1;
    }
    else if (roundWinner === "COMPUTER") {
        compScore += 1;
    }
    else if (roundWinner === "TIE") {
        playerScore += 0;
        compScore += 0;
    }

    displayScores();

    receiveGameOver();

}

// helper function - checks if game is over 
function receiveGameOver() {
    if (winningScoreReached()) {
        outputFinalWinner();
    } 
}


// Displays scores in player and comp score boxes
function displayScores() {
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}


// Returns if player score or comp score reaches 5
function winningScoreReached() {
    return playerScore === 5 || compScore === 5;
}



function outputFinalWinner() {
    const finalWinnerBox = document.querySelector("#final-winner-box");
    

    if (playerScore > compScore) {
        finalWinnerBox.textContent = "You are the final winner!";
    } else {
        finalWinnerBox.textContent = "The computer wins!";
    }   
    return;
}

// const displayPlayAgainMessage = () => {
//     const finalWinnerBoxContainer = document.querySelector("#final-winner-box-container")
//     const playAgainMessage = document.createElement("div");

    
//     finalWinnerBoxContainer.appendChild(playAgainMessage);
    
//     playAgainMessage.textContent = "Why not press F5 to play again?";
    
//     return;
// }

// const playerItemBox = document.querySelector("#player-item");
// const comItemBox = document.querySelector("#computer-item")

// function appendI(playerBox, compBox) {
//     let icon = document.createElement("i");
//     let iconTwo = document.createElement("i");
//     compBox.appendChild(icon);
//     playerBox.appendChild(iconTwo);
// }

// appendI(playerItemBox, comItemBox);