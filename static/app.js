const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return possibleChoices[Math.floor(Math.random() * 3)];
}

function playerSelection() {
  let input;
  do {
    input = prompt("Enter rock, paper or scissors").toLowerCase();
  } while (!possibleChoices.includes(input));
  return input;
}

console.log(getComputerChoice());
console.log(playerSelection());