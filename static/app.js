const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function generateComputerChoice() {
  let computerChoice = POSSIBLE_CHOICES[Math.floor(Math.random() * 3)];
  console.log("computer: " + computerChoice);
  return computerChoice;
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
    playerScore++;
    computerScore++;
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || 
             (playerChoice === "paper" && computerChoice === "rock") || 
             (playerChoice === "scissors" && computerChoice === "paper")) {
    playerScore++;
  } else {
    computerScore++;
  }
  console.log("player score: " + playerScore);
  console.log("computer score: " + computerScore);
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