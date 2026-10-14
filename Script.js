let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const gameMessage_p = document.getElementById('game-message');

// Generates a random move for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Converts choice names into cleaner strings for messaging
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Evaluates game choices and updates scoreboards
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    
    if (userChoice === computerChoice) {
        // It's a draw
        gameMessage_p.innerText = `It's a tie! Both chose ${capitalize(userChoice)}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // Player wins
        userScore++;
        userScore_span.innerText = userScore;
        gameMessage_p.innerText = `You win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        // Computer wins
        computerScore++;
        computerScore_span.innerText = computerScore;
        gameMessage_p.innerText = `You lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
    }
}

// Clears all parameters back to operational defaults
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    gameMessage_p.innerText = "Make your move to start the game!";
}
