var startBtn = document.querySelector(".start");
var timerScrn = document.querySelector("#timer-screen");
var time = 20;
var timer = "";
var scorescreen = document.querySelector(".score-screen");
var hsArray = JSON.parse(localStorage.getItem("scoreboard"))|| [];
var highscores = document.querySelector(".high-scores");

// On page load, for loop runs and pulls initials and scores from Storage, and shows the name, if nothing is in Storage, it pulls from an empty array. When pulling from storage, indexes through saved names and scores, puts them on screen as li elements.
for (var index = 0; index < hsArray.length; index++) {
  const nameScore = hsArray[index];
  var playerName = document.createElement("li");
  playerName.innerHTML = nameScore;
  highscores.appendChild(playerName);
}// Clicking Stat Quiz button to ask first question, deactivates display on start Screen, add to firstq div.

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
    console.log(event.target);
    if (!event.target.classList.contains("correct")) {
      time += - 3;
    } else {
      time += +3;
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
  var nameInput =document.querySelector("#initials")
  var initials = nameInput.value;
  var playerName = document.createElement("li");
  var finalScore = time;
  var highScore = initials +"       "+finalScore;
  //  New list items will be created and added to high-scores as li elements
  // initials will not load if input is empty
  if (initials==='') {
  }
  else{
  playerName.innerHTML = highScore;
  highscores.appendChild(playerName);
  hsArray.push(highScore)
  
  var hsArrayString = JSON.stringify(hsArray)
  
  localStorage.setItem("scoreboard", hsArrayString);
  function clear(){
  nameInput.value = ''
  }clear()
  }
  
});

var reset = document.querySelector(".reset");
reset.addEventListener("click", function (){
  var activeScrn = document.querySelector(".active");
  activeScrn.classList.remove("active");
  document.querySelector(".start-screen").classList.add("active")
  function resetTimer(){
    time= 20;
    timerScrn.textContent = time;
    
  }resetTimer()
})