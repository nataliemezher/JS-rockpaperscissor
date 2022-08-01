let playerScore = 0;
let computerScore = 0;

let playButton = document.querySelector(".intro-game button");
let introShow = document.querySelector(".intro-game");
let match = document.querySelector(".game-match");

playButton.addEventListener("click", fadeIntro);

function fadeIntro() {
  introShow.classList.add("fadeout");
  match.classList.add("fadein");
}
function playGame() {
  let options = document.querySelectorAll(".options button");
  let playerHand = document.querySelector(".playerhand");
  let computerHand = document.querySelector(".computerhand");

  //make computerhand choose random
  let computerOption = ["rock", "paper", "scissors"];

  options.forEach((op) => {
    op.addEventListener("click", function () {
      let computerNum = Math.floor(Math.random() * 3);
      let computerChoice = computerOption[computerNum];
      //console.log(computerChoice);
    });
  });

  //console.log(computerNum);
}

function comparingHands(playerChoice, computerChoice) {
  let winner = document.querySelector(".winner");

  //checking if tie
  if (playerChoice === computerChoice) {
    winner.textContent = "It's a tie!";
    return;
    //checking if ROCK is chosen
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = "Player wins!";
      return;
    } else {
      winner.textContent = "Computer wins!";
      return;
    }
    //checking if PAPER is chosen
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "Computer Wins!";
      return;
    } else {
      winner.textContent = "Player Wins!";
      return;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = "Computer Wins!";
      return;
    } else {
      winner.textContent = "Player Wins!";
      return;
    }
  } else {
    return "Something went wrong";
  }
}

playGame();
