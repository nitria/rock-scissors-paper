var rock = document.querySelector(".rock");
var scissors = document.querySelector(".scissors");
var paper = document.querySelector(".paper");
var choices = ["Rock", "Scissors", "Paper"];
var playerScore = 0;
var aiScore = 0;

$(".rock").on("click", () => {
  $("#player").html("Rock");
  generateRandomCard();
  game();
});

$(".scissors").on("click", () => {
  $("#player").html("Scissors");
  generateRandomCard();
  game();
});

$(".paper").on("click", () => {
  $("#player").html("Paper");
  generateRandomCard();
  game();
});

function game() {
  switch ($("#player").html() + $("#ai").html()) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      $(".showresult").html("player wins");
      win();
      break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      $(".showresult").html("ai wins malaka!");
      lose();
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      $(".showresult").html("draw");
      break;
  }
}

//Random choice for AI//
function generateRandomCard() {
  $("#ai").html(choices[Math.floor(Math.random() * choices.length)]);
}

//Function update score//
function win() {
  $(".playerscore").html((playerScore += 1));
}

function lose() {
  $(".aiscore").html((aiScore += 1));
}
