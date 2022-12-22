

let playerScore;
let compScore;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerItem = document.querySelector("#player-item");
const computerItem = document.querySelector("#computer-item");

const playerScoreBox = document.querySelector("#player-score-box");
const computerScoreBox = document.querySelector("#computer-score-box");

const finalWinnerBoxContainer = document.querySelector("#final-winner-box-container")
const finalWinnerBox = document.querySelector("#final-winner-box");



// Turns scores into zero when game is started
resetScores()


// Enables game to start when rock, paper, scissor icons are clicked
startApplication()



// Resets scores to 0 
// and displays 0 in player and comp score boxes
function resetScores() {
    playerScore = 0;
    compScore = 0;

    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = compScore;
}

let isButtonDisabled = false; 

// When a user clicks on a rock, paper, scissors button, game is started
function startApplication() {
    rockButton.addEventListener('click', (e) => {
        if (isButtonDisabled) return; 
        
        simulateGame(e);
       
        isButtonDisabled = true; 
        rockButton.setAttribute('disabled', true); 
        
        setTimeout(() => { 
          isButtonDisabled = false; 
          rockButton.removeAttribute('disabled'); 
        }, 3000); 
    });

    paperButton.addEventListener('click', (e) => {
        

        if (isButtonDisabled) return; 
 
        simulateGame(e);
       
        isButtonDisabled = true; 
        paperButton.setAttribute('disabled', true); 
       
        setTimeout(() => { 
          isButtonDisabled = false; 
          paperButton.removeAttribute('disabled'); 
        }, 3000); 
    })


    scissorsButton.addEventListener('click', (e) => {
        if (isButtonDisabled == true) return; 
 
        simulateGame(e);
       
        isButtonDisabled = true; 
        scissorsButton.setAttribute('disabled', true); 

        setTimeout(() => { 
          isButtonDisabled = false; 
          scissorsButton.removeAttribute('disabled'); 
        }, 3000); 
   })
}


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

    setTimeout(displayWinner, 750, winner);

    changeItemColour(winner);
    
    setTimeout(removeAllClasses, 3000, playerItem, computerItem);
}


function changeItemColour(winner) {
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
    3000));
}


function glowItemsGrey(...rest) {
       rest.forEach(item => setTimeout(() => {
        item.style.cssText = 'color: #754219'
    }, 
    750));
    
    rest.forEach(item => setTimeout(() => {
        item.style.cssText = ''
    },
    3000));
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

const roundResultBox = document.querySelector("#round-result-box");

// displays winner in round result box after each round
function displayWinner(winner) {
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

    setTimeout(removeDisplay, 2550, roundResultBox);
}


function removeDisplay(box) {
    box.textContent = "";
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
        setTimeout(outputFinalWinner, 2000)
        setTimeout(() => {setInterval(displayPlayAgainMessage, 1000)}, 2500 ) 
    } 
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
}

function displayPlayAgainMessage() {
    const f5Div = document.querySelector(".f5Div");
    f5Div.classList.toggle("press-f5-box")
    setTimeout(() => {f5Div.classList.toggle("press-f5-box")}, 500) 
}






