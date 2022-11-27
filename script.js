function selectRandomItem(array) {
    array = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item ;
}

function selectPlayerChoice(e) {
    let playerSelection;  

    switch (e.target) {
        case buttonList[0]:
            playerSelection = "rock";
            break;
        case buttonList[1]:
            playerSelection = "paper";
            break;
        case buttonList[2]:
            playerSelection = "scissors";
            break;
        }
        return playerSelection;
}

function simulateRound(computerInput, playerInput) {
    const resultBox = document.querySelector("#result-box");
    resultBox.textContent = "";

    if (computerInput == playerInput) {
        resultBox.textContent = "The round is a draw";
        return 0;
    } else if (computerInput == "rock" && playerInput == "paper" ||
            computerInput == "paper" && playerInput == "scissors" ||
            computerInput == "scissors" && playerInput == "rock") 
            { resultBox.textContent = "Player wins round!";
            return 1;
        } else { 
            resultBox.textContent = "Computer wins round!";
            return -1;
        } 
        
    }


function outputRoundScore(input) {
    if (input === 1) {
        playerScore++
    } else playerScore + 0;
}
let playerScore = 0;

let buttonList = document.querySelectorAll("div.item-button-container > *");

buttonList = [...buttonList];

const scoreBox = document.querySelector("#score-box");

buttonList.forEach((button) => {
    button.addEventListener('click', (e) => {
        let roundResult = simulateRound(selectRandomItem(), selectPlayerChoice(e));
        outputRoundScore(roundResult);
        scoreBox.textContent = playerScore;
    })
})













