
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

console.log(getHumanChoice());