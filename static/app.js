const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
const numberOfRounds = 5;

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');

const mainContainer = document.querySelector('.main-container');

const gameButtons = document.querySelectorAll('.game-buttons');
gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    playGame(button.id, generateComputerChoice());
  });
});

function generateComputerChoice() {
  let computerChoice = POSSIBLE_CHOICES[Math.floor(Math.random() * 3)];
  console.log("computer: " + computerChoice);
  return computerChoice;
}

function increasePlayerScore() {
  playerScore.textContent = Number(playerScore.textContent) + 1;
}

function increaseComputerScore() {
  computerScore.textContent = Number(computerScore.textContent) + 1;
}

function resetScore() {
  playerScore.textContent = '0';
  computerScore.textContent = '0';
}

function isWinnerFound() {
  return (+playerScore.textContent === numberOfRounds || +computerScore.textContent === numberOfRounds);   
}

function playGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    increasePlayerScore();
    increaseComputerScore();
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || 
             (playerChoice === "paper" && computerChoice === "rock") || 
             (playerChoice === "scissors" && computerChoice === "paper")) {
    increasePlayerScore();
  } else {
    increaseComputerScore();
  }
  console.log("player score: " + playerScore.textContent);
  console.log("computer score: " + computerScore.textContent);

  if (isWinnerFound()) {
    newGame(displayWinner(+playerScore.textContent, +computerScore.textContent));
  }
}

function displayWinner(player, computer) {
  let winnerText = '';
  if (player === 5 && computer === 5) {
    winnerText = 'Tie!';
  } else if (player === 5) {
    winnerText = 'You win!';
  } else if (computer === 5) {
    winnerText = 'Computer win!';
  }
  return winnerText;
}

function newGame(winnerText) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const gameDiv = mainContainer.removeChild(buttonsContainer);
  
  const newGameDiv = document.createElement('div');  
  const winnerParagraph = document.createElement('p');
  const restartButton = document.createElement('button');
  newGameDiv.className = 'new-game';
  winnerParagraph.textContent = winnerText;
  restartButton.textContent = 'Play again?';
  
  newGameDiv.appendChild(winnerParagraph);
  newGameDiv.appendChild(restartButton);
  mainContainer.insertBefore(newGameDiv, document.querySelector('.score-container'));

  restartButton.addEventListener('click', () => {
    resetScore();
    mainContainer.removeChild(newGameDiv);
    mainContainer.insertBefore(gameDiv, document.querySelector('.score-container'));
  });
}