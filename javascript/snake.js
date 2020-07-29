document.addEventListener("DOMContentLoaded",()=>{
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");
  var audioExplosion = new Audio('audios/explosion.wav');
  var audioChew = new Audio('audios/chew.wav');

  const width = 10;
  let currentIndex = 0; //first div in our grid
  let appleIndex = 0; //fist div in oir grid
  let currentSnake = [2,1,0]; //the div in our grid that is 2(head), 0(tail),1's (body)
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

//to start, restart the game
function startGame(){
  squares[currentSnake[0]].classList.remove("explosion");
  currentSnake.forEach(index => squares[index].classList.remove("snake"));

  squares[appleIndex].classList.remove("food");
  clearInterval(interval);
  score=0;
  randomApple();
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 1000;
  currentSnake = [2,1,0];
  currentIndex = 0;
  // currentSnake.forEach(index => squares[index].classList.add("snake"));

  squares[2].classList.add("snake");
  // squares[2].classList.add("head");
  squares[1].classList.add("snake");
  squares[0].classList.add("snake");
  interval = setInterval(moveOutcomes,intervalTime);
}

//function that deal with ALL the other outcomes of the Snake
function moveOutcomes(){

  //deals with snake hitting border and snake hitting itself
  if(
    (currentSnake[0] + width >= (width*width) && direction ===width) || //if snake hits bottom
    (currentSnake[0] % width === width -1 && direction === 1) || //if snake hist the right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
    (currentSnake[0] - width < 0 && direction === -width) ||//if snake hits tthe top
    squares[currentSnake[0] + direction].classList.contains("snake") //if snake hits itself
  ){
    squares[currentSnake[0]].classList.remove("snake");
    squares[currentSnake[0]].classList.add("explosion");
    audioExplosion.play();
    return clearInterval(interval);
  }

  const tail = currentSnake.pop(); // removes last item of the array and show it
  squares[tail].classList.remove("snake"); //removes class of snake from the tail
  // squares[tail].classList.remove("head");
  currentSnake.unshift(currentSnake[0] + direction); //gives direction to the head of the array

  //deals with snake getting the apple
if(squares[currentSnake[0]].classList.contains("food")){
  audioChew.play();
  squares[currentSnake[0]].classList.remove("food");
  squares[tail].classList.add("snake");
  currentSnake.push(tail);
  randomApple();
  score++;
  scoreDisplay.textContent = score;
  clearInterval(interval);
  intervalTime = intervalTime * speed;
  interval = setInterval(moveOutcomes,intervalTime);
}

squares[currentSnake[0]].classList.add("snake");
// squares[currentSnake[0]].classList.add("head");


}

function randomApple(){
  do{
    appleIndex = Math.floor(Math.random()*squares.length);
  } while(squares[appleIndex].classList.contains("snake"))
  squares[appleIndex].classList.add("food");
}






//assign function to keycodes
function control(e){
    //removing the class of Snake from all squares
    squares[currentIndex].classList.remove("snake");
    // squares[currentIndex].classList.remove("head");

    if(e.keyCode === 39){
      //press right arrow on keyboard snake will go right
      direction = 1;
    }else if(e.keyCode === 38){
      //press up arroa, snake will go back ten divs
      direction = -width;
    }else if(e.keyCode === 37){
      //if we press left, snake will go left one div
      direction = -1;
    }
    else if(e.keyCode === 40){
      //if we press down the snake head will appear
      direction = +width;
    }
  }

  document.addEventListener("keyup",control);
  startBtn.addEventListener("click",startGame);


});
