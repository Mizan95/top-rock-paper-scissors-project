function selectRandomItem(array) {
    array = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

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


simulateRound(selectRandomItem(), validatePlayerInput());
