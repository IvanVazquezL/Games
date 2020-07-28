const square = document.querySelectorAll(".square");
var arrayWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var arrayPosX = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var arrayPosO = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var player = "X";
var number1 = false;
var number2 = false;
var number3 = false;
var arrayX = [];
var arrayO = [];
var arrayCorners = [1,3,7,9];
var arrayCounterX;
var arrayCounterO;

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

square.forEach(square => {
  square.addEventListener("click",()=>{

      if(!(square.classList.contains("cross") || square.classList.contains("circle")))
      {
        console.log("**********************TURN PLAYER X**********************");
        square.classList.add("cross");
        arrayX.push(parseInt(square.id));
        // arrayX.sort();
        console.log("arrayX");
        console.log(JSON.stringify(arrayX));
        if(arrayX.length>=3){
          checkWin(arrayX,"X");
        }
        if(arrayX.length>=2){
          arrayCounterX = new Array(arrayPosX.length).fill(0);
          countMove(arrayPosX,arrayCounterX);
          // arrayCounterO = new Array(arrayPosO.length).fill(0);
          // countMoveO(arrayPosO,arrayCounterO);
        }
        console.log("**********************END TURN PLAYER X**********************");
        computerTurn();
      }

  });
});

// function countMoveO(arrayPosO,arrayCounterO){
//   //el array es el de los moviemientos ganadores posibles de X
//   var a = 0;
//   var i = 0;
//   for(element of arrayPosO){
//     for(number of arrayO){
//       var sum = 0;
//       console.log(element[0]+"==="+number);
//       if(element[0]===number){
//         sum++;
//       }
//       else if(element[1]===number){
//         sum++;
//       }
//       else if(element[2]===number){
//         sum++;
//       }
//       arrayCounterO[i] = arrayCounterO[i] + sum;
//       a++;
//     }
//     i++;
//   }
//
//   console.log("arrayPosO");
//     console.log(JSON.stringify(arrayPosO));
//
//   console.log("arrayCounterO");
//   console.log(JSON.stringify(arrayCounterO));
//
//
//
// }

function countMove(arrayPosX,arrayCounterX){
  //el array es el de los moviemientos ganadores posibles de X
  var a = 0;
  var i = 0;
  for(element of arrayPosX){
    for(number of arrayX){
      var sum = 0;
      console.log(element[0]+"==="+number);
      if(element[0]===number){
        sum++;
      }
      else if(element[1]===number){
        sum++;
      }
      else if(element[2]===number){
        sum++;
      }
      arrayCounterX[i] = arrayCounterX[i] + sum;
      a++;
    }
    i++;
  }

  console.log("arrayPosX");
    console.log(JSON.stringify(arrayPosX));

  console.log("arrayCounterX");
  console.log(JSON.stringify(arrayCounterX));



}

async function computerTurn(){

  console.log("**********************TURN COMPUTER**********************");

  //Remove from the possible winning moves of array O the id of the last player X move
console.log("arrayX");
  console.log(arrayX);
  remove(arrayX[arrayX.length-1],arrayPosO);

  if(arrayX.length===1){
    if(arrayX[0]!=5){
      // setTimeout(function(){document.getElementById('5').classList.add("circle");},400);
      await sleep(400);
      document.getElementById('5').classList.add("circle");

      arrayO.push(5);
    }
    else{
      const cornerId = arrayCorners[Math.floor(Math.random() * arrayCorners.length)];
      // setTimeout(function(){document.getElementById(String(cornerId)).classList.add("circle");},400);
      await sleep(400);
      document.getElementById(String(cornerId)).classList.add("circle");

      arrayO.push(cornerId);
    }
    // arrayO.sort();
    console.log("arrayO");
      console.log(JSON.stringify(arrayO));

    //Remove the id that playerO selected from the possible winning moves of X
    remove(arrayO[arrayO.length-1],arrayPosX);
  }
  else{
    //Max Number of repetitions of array with more ids occupied
    var maxNum = Math.max.apply(Math, arrayCounterX);
    console.log("maxNum");
    console.log(maxNum);

    //Max Number ARRAY WITH POSSIBLE WIn for player O
    // var maxNumO = Math.max.apply(Math, arrayCounterO);
    // console.log("maxNumO");
    // console.log(maxNumO);
    //
    // if(maxNumO==2){
    //   var index = arrayCounterO.indexOf(maxNumO);
    //   console.log("index");
    //   console.log(index);
    //
    //   console.log("arrayPosO");
    //   console.log(JSON.stringify(arrayPosO));
    //
    //   var idCircle = arrayPosO[index][0];
    //   var idCircle1 = arrayPosO[index][1];
    //   var idCircle2 = arrayPosO[index][2];
    //
    //   var turn = "O";
    // }
    // else{
      //Index of the max number
      var index = arrayCounterX.indexOf(maxNum);
      console.log("index");
      console.log(index);

      console.log("arrayPosX");
      console.log(JSON.stringify(arrayPosX));

      var idCircle = arrayPosX[index][0];
      var idCircle1 = arrayPosX[index][1];
      var idCircle2 = arrayPosX[index][2];

      var turn = "X";
    // }


    if(!(document.getElementById(String(idCircle)).classList.contains("cross"))){
      console.log("entrada1");
      // setTimeout(function(){document.getElementById(String(arrayPosX[index][0])).classList.add("circle");},400);
      await sleep(400);
      document.getElementById(String(idCircle)).classList.add("circle");

      arrayO.push(idCircle);
    } else if(!(document.getElementById(String(idCircle1)).classList.contains("cross"))){
      console.log("entrada2");
      // setTimeout(function(){document.getElementById(String(arrayPosX[index][1])).classList.add("circle");},400);
      await sleep(400);
      document.getElementById(String(idCircle1)).classList.add("circle");

      arrayO.push(idCircle1);
    }else if(!(document.getElementById(String(idCircle2)).classList.contains("cross"))){
      console.log("entrada3");
      console.log(idCircle2);
      // setTimeout(function(){
      //   console.log("indexentrada3");
      //   console.log(index);
      //   document.getElementById(String(arrayPosX[index][2])).classList.add("circle");},400);
      console.log(document.getElementById(String(idCircle2)).classList.contains("circle"));
      await sleep(400);
      document.getElementById(String(idCircle2)).classList.add("circle");

      arrayO.push(idCircle2);
    }

    // arrayO.sort();
    console.log("arrayO");
    console.log(JSON.stringify(arrayO));

    // if(turn==="X"){
    remove(arrayO[arrayO.length-1],arrayPosX);
  // }else{
  //   remove(arrayO[arrayO.length-1],arrayPosO);
  // }

  if(arrayO.length>=3)
  {
     checkWin(arrayO,"O");
  }

  }

  console.log("**********************END TURN COMPUTER**********************");
}

function remove(id,array){
  var counter = 0;
  var removeArray = [];

  for(element of array){
    if(element[0]===id || element[1]===id || element[2]===id){
      removeArray.push(counter);
    }
    counter++;
  }

  console.log("id");
  console.log(id);

  console.log("array");
  console.log(JSON.stringify(array));

  console.log("removeArray");
  console.log(removeArray);

  for(var i=removeArray.length-1; i >= 0; i--)
  {
    array.splice(removeArray[i],1);
  }

  console.log("array");
  console.log(JSON.stringify(array));
}


async function checkWin(arrayPlayer,typePlayer){

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
            await sleep(2000);
            location.reload();
            // setTimeout(function(){location.reload();},2000);
            break loop1;
          }
    }
    number1 = false;
    number2 = false;
    number3 = false;
  }

  if(arrayPlayer.length===5){
    alert("No more movements left. Play again!");
    // setTimeout(function(){location.reload();},1000);
    await sleep(1000);
    location.reload();
  }
}
