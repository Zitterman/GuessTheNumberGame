console.log("Page is ready!")

var guessTheNumber = {};

// create a random answer between 1 and 100
guessTheNumber.answer = Math.floor(Math.random() * 100);

// prompt the user to make a guess
guessTheNumber.promtUser = function() {
  var userGuess = prompt("Guess a number between 1 and 100.");
  this.compareGuess(userGuess);
};

// retrieve their guess and compare it to generated answer
guessTheNumber.compareGuess = function(userGuess) {
  if (userGuess == this.answer) {
    alert("Congratulations, you are a psychic genius!");
  } else {
    this.ifNotCorrect(userGuess);
  }
};

// if incorrect, determine if they guessed too high or low and prompt accordingly
guessTheNumber.ifNotCorrect = function(userGuess) {
  if (userGuess < this.answer) {
    alert("The answer is higher than " + userGuess + "!");
    guessTheNumber.promtUser();
  } else if (userGuess > this.answer) {
    alert("The answer is lower than " + userGuess + "!");
    guessTheNumber.promtUser();
  }
};

// needs to load first
$(document).ready(function(){
  guessTheNumber.promtUser();
});
