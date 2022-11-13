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
        alert("The round is a draw!") 
        return 0; 
    } else if (computerInput == "rock" && playerInput == "paper"
               || computerInput == "paper" && playerInput == "scissors"
               || computerInput == "scissors" && playerInput == "rock") 
                {
                alert("Player wins round!") 
                return 1; 
        } else {
            alert("Computer wins round!") 
            return -1; 
        }
}


// simulateRound(selectRandomItem(), validatePlayerInput());
 


//  simulate a 5 round game of rps.
//  keep track of player and computer score
// when 5 rounds is completed, report a winner for who has the higher score.

// loop simulateRound function to complete 5 rounds of game
// variable for player score, variable for computer score
// if output of simulateRound function is youWin, increment player score by 1,
// if output of simulateRound function is youLose, increment computer score by 1,
// after loop is completed, if player score is greater than computer score, print winner
//                          if player score is greater than computer score, print winner
//                          if scores are the same, declare a Draw



function game() {
    let playerScore = 0;
    let compScore = 0;
    
    for (let i = 0; i <= 5; i++) {
        if (i < 5) {
        let result = simulateRound(selectRandomItem(), validatePlayerInput());
            if (result == 1) {
                playerScore++;
            } else if (result == -1) {
                compScore++;
            } else {
                playerScore + 0;
                compScore + 0;
            } 
        }
    }

    if (playerScore > compScore) {
        console.log("After all 5 rounds, the winner is YOU!");
    } else if (playerScore < compScore) {
        console.log("After all 5 rounds, the winner is The Computer! (Haha, computers rule)");
    } else {
        console.log("After all 5 rounds, the result is a draw!");
    }
}

game();