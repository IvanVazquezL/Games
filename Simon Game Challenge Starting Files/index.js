var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];

$("body").keypress(function(event){
  if(event.key==="a"){
    nextSequence();
  }
})

function nextSequence(){
  //It goes from 0 to 3
  var randomNumber = Math.floor(Math.random()*4);
  randomChosenColor = buttonColor[randomNumber];

  gamePattern.push(randomChosenColor);

  console.log(gamePattern[gamePattern.length-1]);

  var id = gamePattern[gamePattern.length-1];

  console.log($("button#yellow"));
}
