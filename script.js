// computer makes a random selection

function selectRandomItem(array) {
    array = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item ;
}

// takes and validates player's input

function validatePlayerInput(input) {
    input = prompt("Please enter an option").toLowerCase();
    switch (input) {
        case "rock":
        case "paper":
        case "scissors":
            return input;
            break;
        default:
            throw "Please enter a valid option";
    }
}

// simulates a single round of game

function simulateRound(computerInput, playerInput) {
    if (computerInput == playerInput) {
        console.log("Draw");
    } else if (computerInput == "rock" && playerInput == "paper"
               || computerInput == "paper" && playerInput == "scissors"
               || computerInput == "scissors" && playerInput == "rock") 
                {
                console.log("You win");
        } else {
            console.log("You lose");
        }
}




// round(playerInputValidation(playerInput), computerInput);
 
// loop through round function until 5 rounds have passed.
//  when 5 rounds have passed, if player has won more rounds, declare player winner 
// else if computer has won more rounds, declare computer winner
// else if both have same score, then declare draw

// for (let i = 0; i <= 5; i++) {
//     if (i < 5) {
        
//     }

// }