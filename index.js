var choices = ["Rock", "Scissors", "Paper"];
var playerScore = 0;
var computerScore = 0;

$(".rock").on("click", () => {
  $("#playerChoice").html("Rock");
  generateRandomChoice();
  game();
  gameOver();
});

$(".scissors").on("click", () => {
  $("#playerChoice").html("Scissors");
  generateRandomChoice();
  game();
  gameOver();
});

$(".paper").on("click", () => {
  $("#playerChoice").html("Paper");
  generateRandomChoice();
  game();
  gameOver();
});

function game() {
  switch ($("#playerChoice").html() + $("#computerChoice").html()) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      $(".showresult").html("you win");
      win();
      break;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      $(".showresult").html("you lose");
      lose();
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      $(".showresult").html("draw");
      draw();
      break;
  }
}

//Random choice for AI//
function generateRandomChoice() {
  $("#computerChoice").html(
    choices[Math.floor(Math.random() * choices.length)]
  );
}

//Function update score//
var previous = null;
var previousText = null;
function win() {
  var currentText = $(".showresult").text();
  if (previous == previousText) {
    if (previousText == currentText) {
      $(".showresult").html("you're on fire");
    }
  }
  previous = previousText;
  previousText = currentText;

  $(".playerscore").html((playerScore += 1));
}

function lose() {
  var currentText = $(".showresult").text();
  if (previous == previousText) {
    if (previousText == currentText) {
      $(".showresult").html("go home malaka!");
    }
  }
  previous = previousText;
  previousText = currentText;

  $(".computerscore").html((computerScore += 1));
}

function draw() {
  var currentText = $(".showresult").text();
  if (previous == previousText) {
    if (previousText == currentText) {
      $(".showresult").html("it's a draw again");
    }
  }
  previous = previousText;
  previousText = currentText;
}

//Game over screen//
function gameOver() {
  var overlay;
  var restartGame;
  var text;
  if (playerScore == 10 || computerScore == 10) {
    overlay = $("<div class='overlay'></div>");

    text = $("<h1 class ='gameover'>Game Over</h1>");

    restartGame = $("<button id='restartGame'>Restart Game</button>");

    $("body").append(overlay);
    $(".overlay").append(text);
    $(".overlay").append(restartGame);
  }

  //Restart Game//
  $("#restartGame").on("click", () => {
    playerScore = 0;
    computerScore = 0;
    $("#playername").html("You:");
    $("#playerChoice").html("");
    $("#computerChoice").html("");
    $(".playerscore").html(playerScore);
    $(".computerscore").html(computerScore);
    $(".overlay").remove();
    $(".showresult").html("");
  });
}

//Button to enter your name//
$("#btn").on("click", () => {
  var playerName = $("input").val();
  $("h1")
    .children("#playername")
    .html(playerName + ":")
    .css("text-transform", "capitalize");
  $("input").val("");
});
