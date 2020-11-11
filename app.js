// set score to sero
let userScore = 0;
let computerScore = 0;

// get all elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

// function to capitalize the first character of the string
function capitalizeFirstCharacter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userChoice_div = document.getElementById(user);
  computerChoice_div = document.getElementById(computer);
  result_p.innerHTML = `${capitalizeFirstCharacter(
    user
  )} beats ${capitalizeFirstCharacter(computer)}. You win!!! 🚀 `;
  userChoice_div.classList.add("green");
  setTimeout(() => userChoice_div.classList.remove("green"), 500);
  computerChoice_div.classList.add("red");
  setTimeout(() => computerChoice_div.classList.remove("red"), 500);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userChoice_div = document.getElementById(user);
  computerChoice_div = document.getElementById(computer);
  result_p.innerHTML = `${capitalizeFirstCharacter(user)}
     lost to
    ${capitalizeFirstCharacter(computer)}. Computer wins!!! 🚀 `;
  userChoice_div.classList.add("red");
  setTimeout(() => userChoice_div.classList.remove("red"), 500);
  computerChoice_div.classList.add("green");
  setTimeout(() => computerChoice_div.classList.remove("green"), 500);
}

function draw(user, computer) {
  result_p.innerHTML = `${capitalizeFirstCharacter(user)}
     equals
    ${capitalizeFirstCharacter(computer)} 
    . Its a draw ⌛ `;
  userChoice_div = document.getElementById(user);
  userChoice_div.classList.add("gray");
  setTimeout(() => userChoice_div.classList.remove("gray"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //   console.log("User Choice is " + userChoice);
  //   console.log("Computer Choice is " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function app() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissor_div.addEventListener("click", () => game("scissor"));
}

window.addEventListener("DOMContentLoaded", app);
