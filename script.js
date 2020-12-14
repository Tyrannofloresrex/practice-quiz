var startBtn = document.querySelector(".start")
// Clicking Stat Quiz button to ask first question, deactivates display on start Screen, add to firstq div.
startBtn.addEventListener("click", function(){
  var startScrn = document.querySelector(".start-screen");
  var quest1 = document.querySelector(".firstq")
  startScrn.classList.remove("active");
  quest1.classList.add("active")

})

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
    
  })
}
var enterNm = document.querySelector (".enterNm")
enterNm.addEventListener("click", function(){

  var initials = document.querySelector("#initials").value
 var highscores = document.querySelector(".high-scores")
 
 var highScoreItem = document.createElement("li")
//  New list items will be created and added to high-scores as li elements
 highScoreItem.innerHTML = initials
 highscores.appendChild(highScoreItem)
})
