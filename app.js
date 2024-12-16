const resultGame = document.getElementById("game-result");

const rockButton = document.querySelector(".far.fa-hand-rock");
const paperButton = document.querySelector(".far.fa-hand-paper");
const scissorsButton = document.querySelector(".far.fa-hand-scissors");

const optionsGame = ["rock", "paper", "scissors"];

function capitalize(choice) {
  if (typeof choice !== "string" || choice.length === 0) {
    return "";
  }
  return choice[0].toUpperCase() + choice.slice(1);
}

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * optionsGame.length);
  const computerChoice = optionsGame[randomIndex];

  let message = "";

  if (playerChoice === computerChoice)
    message = `It's a draw! You both chose ${playerChoice}.`;
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    message = `Congratulations, you won! ${capitalize(
      playerChoice
    )} beats ${capitalize(computerChoice)}!`;
  } else {
    message = `Sorry, the computer won! ${capitalize(
      computerChoice
    )} beats ${capitalize(playerChoice)}!`;
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
