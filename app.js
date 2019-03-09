let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  return choices[Math.floor(Math.random() * 3)];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${userChoice.toUpperCase()}${smallUserWord} beats ${computerChoice.toUpperCase()}${smallCompWord}. You win`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  compScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${computerChoice.toUpperCase()}${smallCompWord} beats ${userChoice.toUpperCase()}${smallUserWord}. You lose`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${userChoice.toUpperCase()}${smallUserWord} equals ${computerChoice.toUpperCase()}${smallCompWord}. It's a draw`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + " vs " + computerChoice) {
    case "rock vs scissor":
    case "paper vs rock":
    case "scissor vs paper":
      win(userChoice, computerChoice);
      break;
    case "rock vs paper":
    case "paper vs scissor":
    case "scissor vs rock":
      lose(userChoice, computerChoice);
      break;
    case "rock vs rock":
    case "paper vs paper":
    case "scissor vs scissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click', () => game("scissor"));
};

main();
