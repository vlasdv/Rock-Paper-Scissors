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
  console.log(playerScore);
  console.log(computerScore);
}

playRound(playerSelection(), getComputerChoice());