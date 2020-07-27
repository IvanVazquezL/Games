var numLanguages =document.querySelectorAll(".card").length;

for(var i=0;i<numLanguages;i++){
  document.querySelectorAll(".card")[i].addEventListener("click", function () {

    var language = document.querySelector(".card").children[1].children[0].innerText;

    switch (language) {
      case "JavaScript":
        location.href = "gamesJS.html";

        break;
      case "Python":

        break;
      case "Java":

        break;
      case "C#":

        break;
      case "C++":

        break;
      case "Memory Game":
        location.href = "memory.html";

        break;
      default:

    }

  });
}
