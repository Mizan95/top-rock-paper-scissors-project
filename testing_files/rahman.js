function selectRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

function validatePlayerInput(inputCase) {
    if (inputCase == "scissors"  
        || inputCase == "rock" 
        || inputCase == "paper") {
            return inputCase;
        } else {
            throw "Please enter a valid option";
        }                 
}

function simulateRound(playerInput, computerInput) {
    try { validatePlayerInput(playerInput); 
    } catch (err) {
        console.log(err)
    } finally {
    if (computerInput == playerInput) {
        console.log("Draw");
    } else if (computerInput == "rock" && playerInput == "paper" 
    || computerInput == "paper" && playerInput == "scissors"
    || computerInput == "scissors" && playerInput == "rock") { 
        console.log("You win"); 
    } else {
        console.log("You lose");
    }
}
}


for (let i = 0; i <= 5; i++) {
    if (i < 5) {
        let computerSelection = ["rock", "paper", "scissors"];
        let computerInput = selectRandomItem(computerSelection);
        let playerInput = prompt("Please enter your choice").toLowerCase();
        simulateRound(playerInput, computerInput);
      
    }
}