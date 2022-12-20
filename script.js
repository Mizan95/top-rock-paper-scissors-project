 // 17.12.22 - problem: when player icon "wins" comp icon, 
// it should glow gold


let playerScore;
let compScore;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerScoreBox = document.querySelector("#player-score-box");
const computerScoreBox = document.querySelector("#computer-score-box");

const finalWinnerBoxContainer = document.querySelector("#final-winner-box-container")
const finalWinnerBox = document.querySelector("#final-winner-box");




// Resets scores to 0 
// and displays 0 in player and comp score boxes
function resetScores() {
    playerScore = 0;
    compScore = 0;

    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}


// When a user clicks on a rock, paper, scissors button, game is started
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


// Turns scores into zero when game is started
resetScores()


// Enables game to start when rock, paper, scissor icons are clicked
startApplication()

    const playerItem = document.querySelector("#player-item");
    const computerItem = document.querySelector("#computer-item");

// takes userclick and stores as ROCK, PAPER or SCISSORS
// stores output of computerSelection
// updates scores from output of getWinner from input of userSelection and computerSelection
function simulateGame(event) {    
    let userSelection = event.target.id.toUpperCase();
    let computerSelection = generateComputerSelection();

    if (winningScoreReached()) {
    return;
    }
    
    showComputerItem(computerSelection, computerItem);

    showPlayerItem(event);
    
    let winner = getWinner(userSelection, computerSelection);
    
    updateScore(winner);

    displayWinner(winner);

    switch (winner) {
        case "PLAYER":
            glowItemGold(playerItem);
            break;
        case "COMPUTER":
            glowItemGold(computerItem);
            break;
        default:
            glowItemsGrey(playerItem, computerItem);
            break;
    }

    setTimeout(removeAllClasses, 3300, playerItem, computerItem);
}



function removeAllClasses(...rest) {
     rest.forEach(element => {
         element.className = "";
     })
}


function glowItemGold(...rest) {
    rest.forEach(item => setTimeout(() => {
        item.style.cssText = 'color: gold'
    }, 
    750));
    
    rest.forEach(item => setTimeout(() => {
        item.style.cssText = ''
    },
    2000));
}


function glowItemsGrey(...rest) {
       rest.forEach(item => setTimeout(() => {
        item.style.cssText = 'color: #754219'
    }, 
    750));
    
    rest.forEach(item => setTimeout(() => {
        item.style.cssText = ''
    },
    2000));
}


function removePlayerItem(event) {
    let array = event.target.classList;
    playerItem.classList.remove(...array);
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


// Returns when player score or comp score reaches 5
function winningScoreReached() {
    return playerScore === 5 || compScore === 5;
}


// Shows computer item when computer choice is generated
function showComputerItem(choice, displayedItem) {
    switch (choice) {
    case "ROCK":
        displayedItem.classList.add("fa-regular", "fa-hand-back-fist", "fa-5x")
        break;
    case "PAPER":
        displayedItem.classList.add("fa-regular", "fa-hand", "fa-5x")
        break;
    case "SCISSORS":
        displayedItem.classList.add("fa-regular", "fa-hand-scissors", "fa-5x")
        break;          
    }
}


function showPlayerItem(event) {
    let array = event.target.classList;
    playerItem.classList.add(...array);
}



// Compares user input with output of generateComputerSelection 
// and returns winner
function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){ 
    return "TIE";
    } else if (
        playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"
        ) {
        return "PLAYER"; 
    } else if (
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK"
        ) { 
       
        return "COMPUTER";
        }      
}


// displays winner in round result box after each round
function displayWinner(winner) {
    const roundResultBox = document.querySelector("#round-result-box");
    switch (winner){
        case "TIE":
                roundResultBox.textContent = "The result is a tie";
                break;
        case "PLAYER":
                roundResultBox.textContent = "You win the round!";
                break;
        case "COMPUTER":
                roundResultBox.textContent = "The computer wins the round!";
                break;
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



function receiveGameOver() {
    if (winningScoreReached()) {
        setTimeout(outputFinalWinner, 1000)
        setTimeout(displayPlayAgainMessage, 3000)
    } 
}




function displayPlayAgainMessage() {
    const f5Div = document.querySelector(".f5Div");
    f5Div.classList.toggle("press-f5-box")
}


// Displays scores in player and comp score boxes
function displayScores() {
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}


function outputFinalWinner() {    
    if (playerScore > compScore) {
        finalWinnerBox.textContent = "You are the final winner!";
    } else {
        finalWinnerBox.textContent = "The computer wins!";
    }   
    return;
}



