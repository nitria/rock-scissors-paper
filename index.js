var rock = document.querySelector(".rock");
var scissors = document.querySelector(".scissors");
var paper = document.querySelector(".paper");
var choices = ["Rock", "Scissors", "Paper"];
var playerScore = 0;
var aiScore = 0;

$(".rock").on("click", () => {
  $("#player").html("Rock");
  generateRandomChoice();
  game();
});

$(".scissors").on("click", () => {
  $("#player").html("Scissors");
  generateRandomChoice();
  game();
});

$(".paper").on("click", () => {
  $("#player").html("Paper");
  generateRandomChoice();
  game();
});

function game() {
  switch ($("#player").html() + $("#ai").html()) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      $(".showresult").html("you win");
      win();
      break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      $(".showresult").html("you lose malaka!");
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
function generateRandomChoice() {
  $("#ai").html(choices[Math.floor(Math.random() * choices.length)]);
}

//Function update score//
function win() {
  $(".playerscore").html((playerScore += 1));
}

function lose() {
  $(".aiscore").html((aiScore += 1));
}

$("#btn").on("click", () => {
  var playerName = $("input").val();
  $(".playerdiv")
    .children("h1")
    .html(playerName)
    .css("text-transform", "capitalize");
  $("input").val("");
});
