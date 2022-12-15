let playerScore = 0;
let compScore = 0;
let gameOver = false;


// rockButton.addEventListener('click', (e) => {simulateGame(e); console.log("It has worked")});
// paperButton.addEventListener('click', (e) => {simulateGame(e); console.log("Paper has worked")});

function startApplication() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");


    rockButton.addEventListener('click', (e) => {
        simulateGame(e);
        addOnclickClass(rockButton);
    });
    paperButton.addEventListener('click',  (e) => {
        simulateGame(e);
        addOnclickClass(paperButton);
    });
    scissorsButton.addEventListener('click',  (e) => {
        simulateGame(e);
        addOnclickClass(scissorsButton);
    });
    
}

function addOnclickClass(button) {
    button.classList.toggle('on-click')
}

function toggleRockAnimation(button) {
    button.classList
}

startApplication();

// core game
function simulateGame(e) {  
     if (isGameOver()) {
       outputFinalWinner();
         return;
     }

    
    let userSelection = e.target.id.toUpperCase();
    let computerSelection = generateComputerSelection();

    updateScore(getWinner(userSelection, computerSelection));

    if (isGameOver()) {
        outputFinalWinner();
        return;
    } 
}

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


function updateScore(roundWinner) {
    if (roundWinner === "PLAYER") {
        playerScore++;
    }
    else if (roundWinner === "COMPUTER") {
        compScore++;
    }
    else if (roundWinner === "TIE") {
        playerScore + 0;
        compScore + 0;
    }
    
    const playerScoreBox = document.querySelector("#player-score-box");
    const computerScoreBox = document.querySelector("#computer-score-box");

    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}


function isGameOver() {
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

function displayPlayAgainMessage() {
    const finalWinnerBoxContainer = document.querySelector("#final-winner-box-container")
    const playAgainMessage = document.createElement("div");

    finalWinnerBoxContainer.appendChild(playAgainMessage);
    
    playAgainMessage.textContent = "Why not press F5 to play again?";
    
    return;
}

// UI 

// function displayItems(playerChoice, computerChoice) {
//     const playerItem = document.querySelector("#player-item");
//     const computerItem = document.querySelector("#computer-item");
    
//     playerItem.textContent = playerChoice;
//     computerItem.textContent = computerChoice;
// }


// PROBLEM 1
// When user hovers mouse over rock icon,
// it should turn yellow

// Problem 2
// when user clicks rock icon, 
// it should turn blue

// Problem 3
// When user clicks on rock icon, 
// the same rock icon should appear in playerItemBox

// Problem 4
// When rock icon appears in playerItemBox,
// the glow should disappear

const playerItemBox = document.querySelector("#player-item");
const comItemBox = document.querySelector("#computer-item")

function appendI(playerBox, compBox) {
    let icon = document.createElement("i");
    let iconTwo = document.createElement("i");
    compBox.appendChild(icon);
    playerBox.appendChild(iconTwo);
}

appendI(playerItemBox, comItemBox);