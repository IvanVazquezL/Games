let horizontalMatch;
let verticalMatch;
function place(id,x_pos, y_pos) {
  var element = document.getElementById(id);
  element.style.position = "absolute";
  element.style.left = x_pos+'px';
  element.style.top = y_pos+'px';
}


function update(){
   document.addEventListener('keydown', keyPress);
}

function keyPress(e) {
  var x = e.keyCode;

  var move = document.getElementById("move").getBoundingClientRect();

  var left = parseInt(move.left,10);
  var top = parseInt(move.top,10)

  switch (x) {
    //lEFT ARROW
    case 37:
     place('move', left -10,  top);
      break;

    //RIGTH ARROW
    case 39:
   place('move', left+10,  top);
      break;

    //UP ARROW
    case 38:
    place('move', left,  top-10);
      break;

    //DOWN ARROW
    case 40:
     place('move', left,  top+10);
      break;

    //SPACE
    case 32:
       alert("space!")
      break;
  }

  checkCollision();

}

function checkCollision(){
let div1 = document.getElementById('move').getBoundingClientRect();
let div1Top = div1.top;
let div1Left = div1.left;
let div1Right = div1.right;
let div1Bottom = div1.bottom;

let div2 = document.getElementById('monster').getBoundingClientRect();
let div2Top = div2.top;
let div2Left = div2.left;
let div2Right = div2.right;
let div2Bottom = div2.bottom;

console.log(" ");
console.log("spaceship");
console.log("div1Top:"+div1Top);
console.log("div1Left:"+div1Left);
console.log("div1Right:"+div1Right);
console.log("div1Bottom:"+div1Bottom);
console.log(" ");
console.log("monster");
console.log("div2Top:"+div2Top);
console.log("div2Left:"+div2Left);
console.log("div2Right:"+div2Right);
console.log("div2Bottom"+div2Bottom);
console.log(" ");

if ((div2Top > div1Top && div2Top < div1Bottom)||(div2Bottom > div1Top && div2Bottom < div1Bottom)) {
  verticalMatch = true;
} else{
  verticalMatch = false;
}

if ((div2Right > div1Left && div2Right < div1Right)||(div2Left < div1Right && div2Left > div1Left)) {
  horizontalMatch = true;
} else {
  horizontalMatch = false;
}

if (horizontalMatch && verticalMatch){
  let intersect = true
  console.log("true");
  document.getElementById('move').textContent="💥";
} else {
  let intersect = false
  console.log("false");
}
}
update();
