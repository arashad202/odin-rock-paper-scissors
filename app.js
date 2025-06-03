
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