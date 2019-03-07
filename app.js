const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerScore) {
    case "rs":
    case "pr":
    case "sp":
      console.log("User Wins");
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("User Loses");
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("Draw");
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  })
  paper_div.addEventListener('click', function() {
    game("paper");
  })
  scissors_div.addEventListener('click', function() {
    game("scissors");
  })
};

main();
