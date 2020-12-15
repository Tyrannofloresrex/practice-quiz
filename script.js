var startBtn = document.querySelector(".start")
var timerScrn = document.querySelector("#timer-screen")
var time= 10
var timer
var scorescreen = document.querySelector(".score-screen")

// Clicking Stat Quiz button to ask first question, deactivates display on start Screen, add to firstq div.

startBtn.addEventListener("click", function(){
var startScrn = document.querySelector(".start-screen");
var quest1 = document.querySelector(".firstq")
  
startScrn.classList.remove("active");
  
quest1.classList.add("active")
  
timerScrn.classList.add("active")
  
timer=setInterval(function(){
timerScrn.textContent=time
time --
    if (time== -1){
      console.log("end")
    endquiz()
    
      // TODO:End quiz
    }
  },1000)

// TODO: add timer that counts down from 10 secs on click and disappears when time is up
})
// End game function

function endquiz(){
clearInterval(timer)
document.querySelector("#timer-screen").classList.remove("active")
// TODO:if the score-screen does not have the active element class, remove active tag and add it to score screen
var activeScrn = document.querySelector(".active")
  activeScrn.classList.remove("active")
  document.querySelector(".score-screen").classList.add("active")
}


var answerSels = document.querySelectorAll("li")
// The answer li's become an array as answerSels. Keep running loop while the index is less than the amount in array.
for (let index = 0; index < answerSels.length; index++) {
  
  var selAnswer = answerSels[index];
  // When an answer is selected, if correct, move to next screen, if incorrect, subtract Time, then move to next screen
  selAnswer.addEventListener("click", function () {
    
    if (!this.classList.contains("correct") ){
    // TODO:Add timer penalty for picking wrong answer
    }
    // Removes active class from current "screen" then applies it to the next sibling element (div) onthe HTML 
    var activeScrn = document.querySelector(".active")
    activeScrn.classList.remove("active")
    activeScrn.nextElementSibling.classList.add("active")
    // timerScrn.classList.remove("active")
    if (document.querySelector(".score-screen").classList.contains("active")){
      endquiz()
    }
  })
}

var enterNm = document.querySelector (".enterNm")
enterNm.addEventListener("click", function(){

var initials = document.querySelector("#initials").value
var highscores = document.querySelector(".high-scores")
var finalScore = time 
var playerName= document.createElement("li")
//  New list items will be created and added to high-scores as li elements
  playerName.innerHTML = initials
   highscores.appendChild(playerName + time)
//  TODO: Add player score alongside initials
//  TODO: Save initials and highscores to local storage
})
