//Give me all the squares that have a black Pawn
var blackPawns = document.querySelectorAll(".blackPawn").length;

//Give me all the squares that have a white Pawn
var whitePawns = document.querySelectorAll(".whitePawn").length;

//Give me all the squares that are unoccupied
var squares = document.querySelectorAll(".unoccupied").length;

//Array to check if it is the first move of a pawn(first pawn move = one or two moves)
var blackPawnStart = [0,0,0,0,0,0,0,0];

//Array to check if it is the first move of a pawn(first pawn move = one or two moves)
var whitePawnStart = [0,0,0,0,0,0,0,0];

//Array of the letters in the board
var alphabetArray = ["a","b","c","d","e","f","g","h"];

//The id of the square that has the piece the user selected to move
var selectedId;

//The id number of the square that has the piece the user selected to move
var selectedIdNumber;

//The letter of the square that has the piece the user selected to move
var selectedIdLetter;

//The id of thesquare the user wants to move the piece
var selectedSquare;

//The id number of the square the user wants to move the piece
var selectedSquareNumber;

//The letter of the square the user wants to move the piece
var selectedSquareLetter;

//To know which turn is
var turnPlayer = "white";

//To know which playe is playing
var player;

document.addEventListener('DOMContentLoaded', () =>{
  addListenerBlack();
  addListenerWhite();
});

//Give all the blackPawns an event listener
//If the user clicks on a blackPawn do the numberLetterPawn function
function addListenerBlack(){
  for(var i = 0; i < blackPawns;i++){
    document.querySelectorAll(".blackPawn")[i].addEventListener("click", function(){ numberLetterPawn(this,"black")}, false );
  }
}


//Give all the whitePawns an event listener
//If the user clicks on a whitePawn do the numberLetterPawn function
function addListenerWhite(){
  for(var i = 0; i < whitePawns;i++){
    document.querySelectorAll(".whitePawn")[i].addEventListener("click", function(){ numberLetterPawn(this,"white")}, false );
  }
}


//Receives the square that has the piece the user wants to move
function numberLetterPawn(element,whiteOrBlack){
    //The id of the square that has the piece the user selected to move (Ex: 7b)
    selectedId = element.id;

    //Give this variable the number part of the id and turn it into an int
    selectedIdNumber = parseInt(selectedId[0]);

    //Give this variable the letter part of the id
    selectedIdLetter = selectedId[1];

    player = whiteOrBlack;

    console.log("selectedId: "+selectedId);
    console.log("selectedIdNumber: "+selectedIdNumber);
    console.log("selectedIdLetter: "+selectedIdLetter);
    console.log("player: "+player);
}

//Give all the unoccupied squares an event addEventListener
//We need this to know which square the user wants to move the piece
for(var i = 0; i < squares;i++){
    document.querySelectorAll(".unoccupied")[i].addEventListener("click",function(){
      //Give selectedSquare the id of the square the user wants to move the piece
       selectedSquare = this.id;
       console.log("selectedSquare: "+selectedSquare);

       //When you have selected the piece and the square you want to move it
       movePawn();
    });
}

function movePawn(){
  if(player===turnPlayer){
  //Get index of the letter from the selected piece
  indexPawnStart = alphabetArray.indexOf(selectedIdLetter);
  console.log("indexPawnStart: "+indexPawnStart);
  var enter = false;
  var addOrSubOne;
  var addOrSubTwo;
  var whiteOrBlackPawnClass;

  if(turnPlayer==="white"){
    if(whitePawnStart[indexPawnStart]===0){
      var enter = true;
      var addOrSubTwo = 2;
    }
    var addOrSubOne = 1;
    var whiteOrBlackPawnClass = "whitePawn";
  }
  else{
    if(blackPawnStart[indexPawnStart]===0){
      var enter = true;
      var addOrSubTwo = -2;
    }
    var addOrSubOne = -1;
    var whiteOrBlackPawnClass = "blackPawn";
  }

  //If the value is zero with the position of the index, it is the first time of the pawn and it can have two moves
  if(enter){
    //Turn into an int the number part of the square you want to move the piece
    selectedSquareNumber = parseInt(selectedSquare[0]);

    //Put into the variable the letter part of the id of the square you want to move the piece
    selectedSquareLetter = selectedSquare[1];
    console.log("selectedSquareNumber: "+selectedSquareNumber);
    console.log("selectedSquareLetter: "+selectedSquareLetter);

    //If it is the first time of the move of the Pawn(the first move can be one square or two squares)
    //You want to check that the target number part will be the original plus one or two
    //And also that the letter is the same as the original letter
    if((selectedSquareNumber===(selectedIdNumber+addOrSubOne) || selectedSquareNumber===(selectedIdNumber+addOrSubTwo))
    && selectedSquareLetter===selectedIdLetter)
    {
      console.log("entre1");
      //remove the blackPawn class from the original square
      var originalSquare = document.getElementById(selectedId).classList.remove(whiteOrBlackPawnClass);

      //the square that was abandoned now needs to habe the class of occupied
      var addUnoccupied = document.getElementById(selectedId).classList.add("unoccupied");

      //add the blackPawn class from the target square
      var targetSquare = document.getElementById(selectedSquare).classList.add(whiteOrBlackPawnClass);

      //remove occupied from target square
      var removeOccupied = document.getElementById(selectedSquare).classList.remove("unoccupied");

      if(turnPlayer === "black"){
        //Increment in one the array of the first time move of the pawn in the position according to the orignal square
        blackPawnStart[indexPawnStart] = 1;
        console.log("blackPawnStart: "+blackPawnStart);
        console.log("alphabetArray: "+alphabetArray);
      }
      else{
        whitePawnStart[indexPawnStart] = 1;
        console.log("blackPawnStart: "+whitePawnStart);
        console.log("alphabetArray: "+alphabetArray);
      }

    }

  }
  else{
    //Turn into an int the number part of the square you want to move the piece
    selectedSquareNumber = parseInt(selectedSquare[0]);

    //Put into the variable the letter part of the id of the square you want to move the piece
    selectedSquareLetter = selectedSquare[1];
    console.log("selectedSquareNumber: "+selectedSquareNumber);
    console.log("selectedSquareLetter: "+selectedSquareLetter);

    //The normal move of a pawn is one square
    //And also that the letter is the same as the original letter
    if(selectedSquareNumber===(selectedIdNumber+addOrSubOne) && selectedSquareLetter===selectedIdLetter)
    {
      console.log("entre1");
      //remove the blackPawn class from the original square
      var originalSquare = document.getElementById(selectedId).classList.remove(whiteOrBlackPawnClass);

      //add the blackPawn class from the target square
      var targetSquare = document.getElementById(selectedSquare).classList.add(whiteOrBlackPawnClass);
    }

  }

  if(turnPlayer==="white"){
    addListenerWhite();
    turnPlayer = "black";
  }
  else{
    addListenerBlack();
    turnPlayer = "white";
  }
}
}
