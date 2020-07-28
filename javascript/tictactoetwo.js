const square = document.querySelectorAll(".square");
var player = "X";
var arrayX = [];
var arrayO = [];
var arrayWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var number1 = false;
var number2 = false;
var number3 = false;

square.forEach(square => {
  square.addEventListener("click",()=>{
    if(player === "X")
    {
      if(!(square.classList.contains("cross") || square.classList.contains("circle")))
      {
        square.classList.add("cross");
        player = "O";
        arrayX.push(parseInt(square.id));
        arrayX.sort();
        console.log(arrayX);
        if(arrayX.length>=3){
          checkWin(arrayX,"X");
        }
      }
    }
    else{
      if(!(square.classList.contains("cross") || square.classList.contains("circle")))
      {
        square.classList.add("circle");
        player = "X";
        arrayO.push(parseInt(square.id));
        arrayO.sort();
        console.log(arrayO);
        if(arrayO.length>=3){
          checkWin(arrayO,"O");
        }
      }
    }

  });
});

function checkWin(arrayPlayer,typePlayer){
  console.log("hello");

loop1:
  for(element of arrayWin){
loop2:
    for(number of arrayPlayer){
          // console.log("New Loop");
          if(element[0]===number){
            // console.log(element[0]+" === "+number);
            number1=true;
            // console.log("number1: "+number1);
          }

          if(element[1]===number){
            // console.log(element[1]+" === "+number);
            number2=true;
            // console.log("number2: "+number2);
          }

          if(element[2]===number){
            // console.log(element[2]+" === "+number);
            number3=true;
            // console.log("number3: "+number3);
          }

          if(number1 && number2 && number3){
            alert("Player "+typePlayer+" wins!");
            setTimeout(function(){location.reload();},2000);
            break loop1;
          }
    }
    number1 = false;
    number2 = false;
    number3 = false;
  }

  if(arrayPlayer.length===5){
    alert("No more movements left. Play again!");
    setTimeout(function(){location.reload();},1000);
  }
}
