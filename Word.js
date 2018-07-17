var Letter = require("./Letter.js");

var Word = function (word) {
    //Guesses left...
    this.guessesLeft = 10;
    //The word...
    this.word = word;
    //Empty array to hold letter from the word...
    this.letters = [];
    //Splits the word into letters...
    var strArr = this.word.split("");
    //For loop that goes through each letter of the word...
    for (var i = 0; i < strArr.length; i++) {
        //Pushes the letters into the array...
        this.letters.push(new Letter(strArr[i]));
    }
    //Function to to pull letters from array and form a string...
    this.displayWord = function () {
        var wordDisplay = "";
        for (var i = 0; i < this.letters.length; i++) {
            wordDisplay += this.letters[i].showCharacter() + " ";
        }
        return wordDisplay;
    }
    // Function to make a guess...
    this.makeGuess = function (guess) {
        //Calls function from Letter, and passes in the guess (user generated)
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkLetter(guess);
            //Makes the makeGuess function true if this condition is met...
            if (this.letters[i].checkLetter(guess)) {
                return true;
            }
            //Default condition of makeGuess function, used for scoring...
        } return false;
    }
    //Checks to see if the win condition is met...
    this.hasWon = function () {
        var checkArray = "";
        for (var i = 0; i < this.letters.length; i++) {
            checkArray = this.letters[i].showCharacter();
            //Checks for any underscores in the word...
            if (checkArray === "_") {
                return false;
            }
        }
        console.log("You have won!");
        return true;
    }
    //Checks to see if the loss condition is met...
    this.hasLost = function () {
        console.log("Guesses left: " + this.guessesLeft);
        if (this.guessesLeft <= 0) {
            console.log("You have lost!");
            return true;
        }
    }
}
//Exports the constructor to the index...
module.exports = Word;