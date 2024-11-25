const resultGame = document.getElementById("game-result");

const rockButton = document.querySelector(".far.fa-hand-rock");
const paperButton = document.querySelector(".far.fa-hand-paper");
const scissorsButton = document.querySelector(".far.fa-hand-scissors");

const optionsGame = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * optionsGame.length);
  const computerChoice = optionsGame[randomIndex];

  const playerChoiseCapitalize =
    String(playerChoice[0]).toUpperCase() + String(playerChoice).slice(1);

  let message = "";

  if (playerChoice === computerChoice)
    message = `It's a draw! You both chose ${playerChoice}.`;
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message = `Congratulations, you won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    message = `Sorry, the computer won! ${playerChoiseCapitalize} beats ${computerChoice}!`;
  }

  if (!message) {
    message = "Something went wrong. Please try again!";
  } else {
    resultGame.innerHTML = message;
  }
}

(function init() {
  rockButton.addEventListener("click", () => playGame("rock"));
  paperButton.addEventListener("click", () => playGame("paper"));
  scissorsButton.addEventListener("click", () => playGame("scissors"));
})();
