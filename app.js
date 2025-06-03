// Create a function getComputerChoice
function getComputerChoice() {

    // generate a random number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;

    // return a word for each number
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

// Create a function getHumanChoice

function getHumanChoice() {
    // prompt the user for input (choice)
    let choice = prompt("Enter your choice: ");

    // return human choice
    return choice;
}

// Create function called playGame

function playGame() {
    const rounds = 5;

    // initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Create function playRound
    
    function playRound(humanChoice, computerChoice) {
    
        let h = humanChoice.toLowerCase();
        let c = computerChoice;
    
        if (h == c) {
            console.log("It's a Tie");
        }
    
        // R-P / R-S / P-R / P-S / S-R / S-P
    
        if (h == 'rock' && c == 'paper') {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (h == 'rock' && c == 'scissors') {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (h == 'paper' && c == 'rock') {
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else if (h == 'paper' && c == 'Scissors') {
            console.log('You lose! scissors beats Paper');
            computerScore++;
        } else if (h == 'scissors' && c == 'rock') {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (h == 'scissors' && c == 'paper') {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }

    }
    
    // play the game 5 times
    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    // print out the winner and the scores
    if (humanScore > computerScore) {
        console.log(`You Win! you scored ${humanScore} and computer scores ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You loose! you scored ${humanScore} and computer scores ${computerScore}`);
    } else {
        console.log(`Its a Tie! you scored ${humanScore} and computer scored ${computerScore}`);
    }
}

playGame();

