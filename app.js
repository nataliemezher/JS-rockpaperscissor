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
