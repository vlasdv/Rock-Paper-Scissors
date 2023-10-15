const possibleChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
  console.log("computer: " + computerChoice);
  return computerChoice;
}

function playerSelection() {
  let input;
  do {
    input = prompt("Enter rock, paper or scissors").toLowerCase();
  } while (!possibleChoices.includes(input));
  console.log("player: " + input);
  return input;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    playerScore++;
    computerScore++;
  } else if ((playerChoice === "rock" && computerChoice === "scissors") 
          || (playerChoice === "paper" && computerChoice === "rock") 
          || (playerChoice === "scissors" && computerChoice === "paper")) {
    playerScore++;
  } else {
    computerScore++;
  }
  console.log("player score: " + playerScore);
  console.log("computer score: " + computerScore);
}

function game(numberOfRounds) {
  for (let i = 0; i < numberOfRounds; i++) {
    playRound(playerSelection(), getComputerChoice());
  }
}

game(5);