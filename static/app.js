const possibleChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return possibleChoices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());