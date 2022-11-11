function selectRandomItem(array) {
    array = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    console.log(item) ;
}

selectRandomItem();

let playerInput = prompt("Please enter your choice")


function playerInputValidation(input) {
    
    
    
    let inputCase = input.toLowerCase();
    switch (inputCase) {
        case "rock":
        case "paper":
        case "scissors":
                return inputCase;
        default:
                console.log("Please enter a valid option");
                break;
    }                       
}

// let computerInput = selectRandomItem(computerSelection);
 

// simulateRound(computerInput, playerInput);


// function simulateRound(playerInput, computerInput) {
//     computerInput == playerInput ? 
//     console.log("Draw") : 
//     computerInput == "rock" && playerInput == "paper" || 
//     computerInput == "paper" && playerInput == "scissors" || 
//     computerInput == "scissors" && playerInput == "rock" ? 
//     console.log("You win") :
//     console.log("You lose");
//     }


// round(playerInputValidation(playerInput), computerInput);
 
// loop through round function until 5 rounds have passed.
//  when 5 rounds have passed, if player has won more rounds, declare player winner 
// else if computer has won more rounds, declare computer winner
// else if both have same score, then declare draw

// for (let i = 0; i <= 5; i++) {
//     if (i < 5) {
        
//     }

// }