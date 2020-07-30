var dinosaur = document.getElementById("dinosaur");
var cactus = document.getElementById("cactus");
var score = document.getElementById("score");
var seconds = document.getElementById("score").textContent;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("keydown", async ()=>{
  if(event.key === "ArrowUp"){
    if(dinosaur.classList.contains("animate")){
      return;
    }
    dinosaur.classList.add("animate");
    await sleep(500);
    dinosaur.classList.remove("animate");
}

});

function countdown(){

  counter = setInterval(function() {
    seconds++;
    score.textContent = seconds;
  }, 1);
}

document.addEventListener('DOMContentLoaded', () =>{
  countdown();
});

var checkDead = setInterval(function(){
  var dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
  var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  console.log("dinosaurTop: "+dinosaurTop);
  console.log("cactusLeft: "+cactusLeft)
  if(cactusLeft<190 && cactusLeft>0
    && dinosaurTop>=250){
    cactus.style.animation = "none";
        clearInterval(counter);
    alert("You lost!");
    location.reload();
  }
},10);
