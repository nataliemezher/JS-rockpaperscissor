let playerScoreing = 0;
let computerScoreing = 0;

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
      let computerNum = Math.floor(Math.random() * 3); //012 array
      let computerChoice = computerOption[computerNum];
      //console.log(computerChoice);

      comparingHands(this.textContent, computerChoice);

      //change hand-images
      playerHand.src = `./imgs/${this.textContent}.png`;
      computerHand.src = `./imgs/${computerChoice}.png`;
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
      playerScoreing++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer wins!";
      computerScoreing++;
      updateScore();
      return;
    }
    //checking if PAPER is chosen
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "Computer wins!";
      computerScoreing++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player wins!";
      playerScoreing++;
      updateScore();
      return;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = "Computer wins!";
      computerScoreing++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player wins!";
      playerScoreing++;
      updateScore();
      return;
    }
  } else {
    return "Something went wrong";
  }
}

function updateScore() {
  let playerScore = document.querySelector(".player-score p");
  let computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = playerScoreing; //0 at beginning,var from above
  computerScore.textContent = computerScoreing;
  //increment these when player/computer wins in function comparingHands
}

playGame();
