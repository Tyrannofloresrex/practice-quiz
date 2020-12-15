var startBtn = document.querySelector(".start");
var timerScrn = document.querySelector("#timer-screen");
var time = 20;
var timer = "";
var scorescreen = document.querySelector(".score-screen");

// Clicking Stat Quiz button to ask first question, deactivates display on start Screen, add to firstq div.

startBtn.addEventListener("click", function () {
  var startScrn = document.querySelector(".start-screen");
  var quest1 = document.querySelector(".firstq");

  startScrn.classList.remove("active");

  quest1.classList.add("active");

  timerScrn.classList.add("active");

  timer = setInterval(function () {
    timerScrn.textContent = time;
    time--;
    if (time == -1) {
      endquiz();
    }
  }, 1000);
});
// End game function

function endquiz() {
  clearInterval(timer);
  document.querySelector("#timer-screen").classList.remove("active");
  
  var activeScrn = document.querySelector(".active");
  
  activeScrn.classList.remove("active");
  document.querySelector(".score-screen").classList.add("active");
}

var answerSels = document.querySelectorAll("li");
// The answer li's become an array as answerSels. Keep running loop while the index is less than the amount in array.
for (let index = 0; index < answerSels.length; index++) {
  var selAnswer = answerSels[index];
  
  // When an answer is selected, if correct, move to next screen, if incorrect, subtract Time, then move to next screen
  
  selAnswer.addEventListener("click", function (event) {
  console.log(event.target)
    if (!event.target.classList.contains("correct")) {
      time = time - 2
      
    }
    // Removes active class from current "screen" then applies it to the next sibling element (div) onthe HTML
  
    var activeScrn = document.querySelector(".active");
    activeScrn.classList.remove("active");
    activeScrn.nextElementSibling.classList.add("active");
    
    // timerScrn.classList.remove("active")
    
    if (document.querySelector(".score-screen").classList.contains("active")) {
      endquiz();
    }
  });
}


  var enterNm = document.querySelector(".enterNm");
enterNm.addEventListener("click", function () {
  var initials = document.querySelector("#initials").value;
  var highscores = document.querySelector(".high-scores");
  var playerName = document.createElement("li");
  var finalScore = time;
  var highScore = initials + finalScore;
  //  New list items will be created and added to high-scores as li elements
  
  playerName.innerHTML = highScore;
  highscores.appendChild(playerName);
  localStorage.setItem = ("highscore", "highScore")
 
  console.log(setItem)
  
  //  TODO: Save initials and highscores to local storage
});
