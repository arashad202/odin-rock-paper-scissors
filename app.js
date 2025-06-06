const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultContainer = document.querySelector('#result');

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const rounds = 5;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    let h = humanChoice.toLowerCase();
    let c = computerChoice;
    let result = "";

    if (h === c) {
        result = "It's a tie!";
    } else if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h === "scissors" && c === "paper")
    ) {
        humanScore++;
        result = `You win! ${h} beats ${c}`;
    } else {
        computerScore++;
        result = `You lose! ${c} beats ${h}`;
    }

    const para = document.createElement('p');
    para.textContent = result;
    resultContainer.appendChild(para);

    roundsPlayed++;

    if (roundsPlayed === rounds) {
        showFinalResult();
        disableButtons();
    }
}

function showFinalResult() {
    const finalPara = document.createElement('p');
    if (humanScore > computerScore) {
        finalPara.textContent = `🎉 You Win the Game! Final Score: You ${humanScore} - Computer ${computerScore}`;
    } else if (computerScore > humanScore) {
        finalPara.textContent = `💀 You Lose the Game. Final Score: You ${humanScore} - Computer ${computerScore}`;
    } else {
        finalPara.textContent = `🤝 It's a Tie! Final Score: You ${humanScore} - Computer ${computerScore}`;
    }
    finalPara.style.fontWeight = 'bold';
    resultContainer.appendChild(finalPara);
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Add event listeners (only once)
rockBtn.addEventListener('click', () => {
    if (roundsPlayed < rounds) {
        playRound('rock', getComputerChoice());
    }
});
paperBtn.addEventListener('click', () => {
    if (roundsPlayed < rounds) {
        playRound('paper', getComputerChoice());
    }
});
scissorsBtn.addEventListener('click', () => {
    if (roundsPlayed < rounds) {
        playRound('scissors', getComputerChoice());
    }
});
