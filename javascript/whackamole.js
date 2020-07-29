const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
var audioMonkey = new Audio('audios/monkey.wav');

let result = 0;
let currentTime = timeLeft.textContent;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomSquare(){
  square.forEach(squareDiv =>{
  squareDiv.textContent = "";
  squareDiv.classList.remove("mouse");
  });
  let randomPosition = square[Math.floor(Math.random()*9)];
  randomPosition.textContent = "🐒";
  randomPosition.classList.add("mouse");

  //assign the id of the randomPosition to hitPosition for us to us later
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener("mouseup", async ()=>{
    if(id.id ===hitPosition){
      result = result + 1;
      score.textContent = result;
      id.textContent = "💥";
      audioMonkey.play();
      await sleep(9000);

    }
  });
});

function moveMole(){
  let timerId = null;
  timerId = setInterval(randomSquare,900);
}

moveMole();

function countDown(){
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime === 0){
    clearInterval(timerId);
    alert("GAME OVER! Your final score is "+ result);
  }
}

let timerId = setInterval(countDown,1000);
