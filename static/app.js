const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');

const gameButtons = document.querySelectorAll('.game-buttons');
gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    playRound(button.id, generateComputerChoice());
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

// function playerSelection() {
//   let input;
//   do {
//     input = prompt("Enter rock, paper or scissors").toLowerCase();
//   } while (POSSIBLE_CHOICES.includes(input));
//   console.log("player: " + input);
//   return input;
// }

function playRound(playerChoice, computerChoice) {
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
}

// function game(numberOfRounds) {
//   for (let i = 0; i < numberOfRounds; i++) {
//     playRound(playerSelection(), getComputerChoice());
//   }
//   displayWinner();
// }

function displayWinner() {
  if (playerScore > computerScore) {
    console.log("player wins");
  } else if (playerScore < computerScore) {
    console.log("computer wins");
  } else {
    console.log("tie!");
  }
}

game(5);