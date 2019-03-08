let userScore = 0;
var computerScore = 0;
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

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${userChoice.toUpperCase()}${smallUserWord} beats ${computerChoice.toUpperCase()}${smallCompWord}. You win`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  compScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${computerChoice.toUpperCase()}${smallCompWord} beats ${userChoice.toUpperCase()}${smallUserWord}. You lose`;
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${userChoice.toUpperCase()}${smallUserWord} equals ${computerChoice.toUpperCase()}${smallCompWord}. It's a draw`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + " vs " + computerChoice) {
    case "rock vs scissors":
    case "paper vs rock":
    case "scissors vs paper":
      win(userChoice, computerChoice);
      break;
    case "rock vs paper":
    case "paper vs scissors":
    case "scissors vs rock":
      lose(userChoice, computerChoice);
      break;
    case "rock vs rock":
    case "paper vs paper":
    case "scissor vs scissors":
      draw(userChoice, computerChoice);
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
