var Letter = require("./Letter.js");

var Word = function (word) {
    //Guesses left in game, set to 10;
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
        }
    }
    this.hasWon = function () {
        var checkArray = "";
        for (var i = 0; i < this.letters.length; i++) {
            checkArray = this.letters[i].showCharacter();
            if (checkArray === "_") {
                return false;
            }
        }
        return true;
    }
    this.hasLost = function () {

    }

}


module.exports = Word;