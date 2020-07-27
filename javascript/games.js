var audioCorrect = new Audio('audios/correct.wav');
var audioIncorrect = new Audio('audios/incorrect.mp3');
var seconds = document.getElementById("countdown").textContent;
var message = document.querySelector(".message");
var sorry = document.querySelector(".sorry");
var scoreList = document.querySelector("ol");
var moves = 0;
var enter = 1;
var counter;

var winners = {
  "nameFirst" : "",
  "movesFirst": "",
  "timeFirst" : "",
  "nameSecond" : "",
  "movesSecond": "",
  "timeSecond" : "",
  "nameThird" : "",
  "movesThird": "",
  "timeThird" : "",
};

var myData = localStorage.getItem('objectToPass');
var storageNameFirst;
var storageMovesFirst;
var storageTimeFirst;
var storageNameSecond;
var storageMovesSecond;
var storageTimeSecond;
var storageNameThird;
var storageMovesThird;
var storageTimeThird;

var first;
var second;
var third;

function fillScoreBoard(){
  console.log("entre");
    console.log("entre2");
    if(!(localStorage.getItem('objectToPass')===null)){
      console.log("fill1");
      storageNameFirst = JSON.parse(myData).nameFirst;
      storageMovesFirst = JSON.parse(myData).movesFirst;
      storageTimeFirst = JSON.parse(myData).timeFirst;
      winners.nameFirst = storageNameFirst;
      winners.movesFirst = storageMovesFirst;
      winners.timeFirst = storageTimeFirst;

      scoreList.children[0].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;

      if(JSON.parse(myData).nameSecond!=="" && JSON.parse(myData).nameThird===""){
        console.log("fill2");
        console.log(JSON.parse(myData).nameSecond);
        storageNameFirst = JSON.parse(myData).nameFirst;
        storageMovesFirst = JSON.parse(myData).movesFirst;
        storageTimeFirst = JSON.parse(myData).timeFirst;
        winners.nameFirst = storageNameFirst;
        winners.movesFirst = storageMovesFirst;
        winners.timeFirst = storageTimeFirst;

        scoreList.children[0].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;

        storageNameSecond = JSON.parse(myData).nameSecond;
        storageMovesSecond = JSON.parse(myData).movesSecond;
        storageTimeSecond = JSON.parse(myData).timeSecond;
        winners.nameSecond = storageNameSecond;
        winners.movesSecond = storageMovesSecond;
        winners.timeSecond = storageTimeSecond;
        scoreList.children[1].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;
      }
      else if(JSON.parse(myData).nameThird!==""){
        console.log("fill3");
        storageNameFirst = JSON.parse(myData).nameFirst;
        storageMovesFirst = JSON.parse(myData).movesFirst;
        storageTimeFirst = JSON.parse(myData).timeFirst;
        winners.nameFirst = storageNameFirst;
        winners.movesFirst = storageMovesFirst;
        winners.timeFirst = storageTimeFirst;

        scoreList.children[0].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;

        storageNameSecond = JSON.parse(myData).nameSecond;
        storageMovesSecond = JSON.parse(myData).movesSecond;
        storageTimeSecond = JSON.parse(myData).timeSecond;
        winners.nameSecond = storageNameSecond;
        winners.movesSecond = storageMovesSecond;
        winners.timeSecond = storageTimeSecond;

        scoreList.children[1].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;

        storageNameThird = JSON.parse(myData).nameThird;
        storageMovesThird = JSON.parse(myData).movesThird;
        storageTimeThird = JSON.parse(myData).timeThird;
        winners.nameThird = storageNameThird;
        winners.movesThird = storageMovesThird;
        winners.timeThird = storageTimeThird;

        scoreList.children[2].textContent = storageNameThird+" Moves: "+storageMovesThird+" Time: "+storageTimeThird;
      }
    }
}

document.addEventListener('DOMContentLoaded', () =>{
  fillScoreBoard();
  const cardArray = [
    {
      name: "fries",
      emoji: "🍟",
    },
    {
      name: "fries",
      emoji: "🍟",
    },
    {
      name: "hamburger",
      emoji: "🍔",
    },
    {
      name: "hamburger",
      emoji: "🍔",
    },
    {
      name: "hotdog",
      emoji: "🌭",
    },
    {
      name: "hotdog",
      emoji: "🌭",
    },
    {
      name: "ice cream",
      emoji: "🍦",
    },
    {
      name: "ice cream",
      emoji: "🍦",
    },
    {
      name: "donut",
      emoji: "🍩",
    },
    {
      name: "donut",
      emoji: "🍩",
    },
    {
      name: "pizza",
      emoji: "🍕",
    },
    {
      name: "pizza",
      emoji: "🍕",
    },

  ];

cardArray.sort(()=>0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];



function createBoard(){
  for(let i = 0; i<cardArray.length;i++){
    var card = document.createElement('div');
    card.innerHTML = "🟥";
    card.className = "cards";
    card.addEventListener("click",flipCard);
    card.setAttribute ("data-id",i);
    grid.appendChild(card);
  }
}

function scoreboard(){
  var name= prompt("Enter your name");
  if(scoreList.children[0].textContent==="" && scoreList.children[1].textContent===""&&scoreList.children[2].textContent===""){
    scoreList.children[0].textContent = name+" Moves: "+moves+" Time: "+seconds;
    winners.nameFirst = name;
    winners.movesFirst = moves;
    winners.timeFirst = seconds;
    localStorage.setItem('objectToPass',JSON.stringify(winners));
  }
  else if(scoreList.children[1].textContent===""){
    if(seconds+moves > storageMovesFirst+storageTimeFirst){
      console.log("entrada1");
      scoreList.children[1].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameSecond = name;
      winners.movesSecond = moves;
      winners.timeSecond = seconds;
      localStorage.setItem('objectToPass',JSON.stringify(winners));
    }
    else{
      console.log("entrada2");
      scoreList.children[0].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameFirst = name;
      winners.movesFirst = moves;
      winners.timeFirst = seconds;

      scoreList.children[1].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;
      winners.nameSecond = storageNameFirst;
      winners.movesSecond = storageMovesFirst;
      winners.timeSecond = storageTimeFirst;

      localStorage.setItem('objectToPass',JSON.stringify(winners));

    }
  }
  else if(scoreList.children[2].textContent==="")
  {
    first = storageMovesFirst+storageTimeFirst;
    second = storageMovesSecond+storageTimeSecond;
    third = moves+seconds;
    if(third > second){
      console.log("entrada3");
      scoreList.children[2].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameThird = name;
      winners.movesThird = moves;
      winners.timeThird = seconds;
      localStorage.setItem('objectToPass',JSON.stringify(winners));
    }
    else if(third <= second && third > first){
      console.log("entrada4");
      scoreList.children[1].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameSecond = name;
      winners.movesSecond = moves;
      winners.timeSecond = seconds;

      scoreList.children[2].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;
      winners.nameThird = storageNameSecond;
      winners.movesThird = storageMovesSecond;
      winners.timeThird = storageTimeSecond;

      localStorage.setItem('objectToPass',JSON.stringify(winners));
    }
    else {
      console.log("entrada5");
      scoreList.children[0].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameFirst = name;
      winners.movesFirst = moves;
      winners.timeFirst = seconds;

      scoreList.children[1].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;
      winners.nameSecond = storageNameFirst;
      winners.movesSecond = storageMovesFirst;
      winners.timeSecond = storageTimeFirst;

      scoreList.children[2].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;
      winners.nameThird = storageNameSecond;
      winners.movesThird = storageMovesSecond;
      winners.timeThird = storageTimeSecond;

      localStorage.setItem('objectToPass',JSON.stringify(winners));

    }
  }
  else{
    first = storageMovesFirst+storageTimeFirst;
    second = storageMovesSecond+storageTimeSecond;
    third = storageMovesThird+storageTimeThird;
    fourth = moves+seconds;

    if(fourth < third && fourth > second){
      console.log("entrada6");
      scoreList.children[2].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameThird = name;
      winners.movesThird = moves;
      winners.timeThird = seconds;
      localStorage.setItem('objectToPass',JSON.stringify(winners));
    }
    else if(fourth <= second && fourth > first){
      console.log("entrada7");
      scoreList.children[1].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameSecond = name;
      winners.movesSecond = moves;
      winners.timeSecond = seconds;

      scoreList.children[2].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;
      winners.nameThird = storageNameSecond;
      winners.movesThird = storageMovesSecond;
      winners.timeThird = storageTimeSecond;

      localStorage.setItem('objectToPass',JSON.stringify(winners));
    }
    else if(fourth <= first){
      console.log("entrada9");
      scoreList.children[0].textContent = name+" Moves: "+moves+" Time: "+seconds;
      winners.nameFirst = name;
      winners.movesFirst = moves;
      winners.timeFirst = seconds;

      scoreList.children[1].textContent = storageNameFirst+" Moves: "+storageMovesFirst+" Time: "+storageTimeFirst;
      winners.nameSecond = storageNameFirst;
      winners.movesSecond = storageMovesFirst;
      winners.timeSecond = storageTimeFirst;

      scoreList.children[2].textContent = storageNameSecond+" Moves: "+storageMovesSecond+" Time: "+storageTimeSecond;
      winners.nameThird = storageNameSecond;
      winners.movesThird = storageMovesSecond;
      winners.timeThird = storageTimeSecond;

      localStorage.setItem('objectToPass',JSON.stringify(winners));

    }
    else
    {
      sorry.textContent = "Keep playing to make it to the scoreboard!"
    }
    }
  }

function checkForMatch(){
  var cards = document.querySelectorAll(".cards");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if(cardsChosen[0]===cardsChosen[1]){
    audioCorrect.play();
    cards[optionOneId].innerHTML = "🟦";
    cards[optionTwoId].innerHTML = "🟦";
    cardsWon.push(cardsChosen);
  }
  else{
    audioIncorrect.play();
    cards[optionOneId].innerHTML = "🟥";
    cards[optionTwoId].innerHTML = "🟥";
  }
  cardsChosen = [];
  cardsChosenId = [];
  moves = moves + 1;
  resultDisplay.textContent = moves;
  console.log("cardsWon");
  console.log(cardsWon.length);
  console.log("cardsArray");
  console.log(cardArray.length/2)

  if(cardsWon.length === cardArray.length/2){
    message.textContent ="Congratulations! You found them all!";
    clearInterval(counter);
    scoreboard();
  }
}

function countdown(){
  if(enter==1){
  counter = setInterval(function() {
    seconds++;
    document.getElementById("countdown").textContent = seconds;
}, 1000);
enter=0;
}
}

function flipCard(){
  if(this.textContent === "🟥"){
    countdown();
    var cardId = this.getAttribute("data-id");
    console.log(this);
    console.log(this.textContent);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.innerHTML = cardArray[cardId].emoji;
    if(cardsChosen.length===2){
      setTimeout(checkForMatch,500);
    }
  }
}

createBoard();

});
