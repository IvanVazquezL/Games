var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var audioBlue = new Audio("sounds/blue.mp3");
var audioGreen = new Audio("sounds/green.mp3");
var audioRed = new Audio("sounds/red.mp3");
var audioWrong = new Audio("sounds/wrong.mp3");
var audioYellow = new Audio("sounds/yellow.mp3");
var userClickedPattern = [];
var gameStatus = "not started";
var level = 0;
var counter = 0;
var game;

$("body").keypress(function(event){
  if(event.key==="a" && gameStatus==="not started"){
    game="on going";
    nextSequence();
  }
})

function nextSequence(){
  //Change the game gameStatus
  gameStatus = "started";

  $("h1").text("Level "+level);

  //It goes from 0 to 3
  var randomNumber = Math.floor(Math.random()*4);

  //Get a random color from the array
  randomChosenColor = buttonColor[randomNumber];

  //Insert the color in the pattern of the game array
  gamePattern.push(randomChosenColor);

  console.log(gamePattern[gamePattern.length-1]);

  //Get the last color added
  var id = gamePattern[gamePattern.length-1];

  playSound(id);

  level++;

}

$(".btn").click(function(){

  if(game!="lost"){



  userChosenColor = this.id;

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  // checkAnswer(userClickedPattern.length);
  console.log("gamePattern: "+gamePattern);
  console.log("userClickedPattern: "+userClickedPattern);
  if(userClickedPattern[userClickedPattern.length-1]===gamePattern[counter]){
    console.log("success");
  }
  else{
    console.log("failure");
    audioWrong.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },1000);
    game="lost";
    setTimeout(startOver,1000);
  }

  counter++;

  if(level === counter){
    userClickedPattern = [];
    counter = 0;
    setTimeout(nextSequence,1000);
  }

  }
});

function playSound(id){

  switch (id) {
    case "blue":
      audioBlue.play();

      break;
    case "green":
      audioGreen.play();

      break;
    case "red":
      audioRed.play();

      break;
    case "yellow":
      audioYellow.play();

      break;
    default:
      audioWrong.play();
  }

  //Animation of flash of the new color
  $("div#"+id).fadeOut().fadeIn();

}

function startOver(){
  gameStatus = "not started";
  level = 0;
  counter = 0;
  gamePattern = [];
  userClickedPattern = [];
}
