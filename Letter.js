var Letter = function (character) {
	//Takes input and converts to upper case
	this.character = character.toUpperCase();
	//Sets the guess to false
	this.correctGuess = false;
	//Function that takes in the user guess and displays the guess if true, or displays an underscore in place of the letter
	this.showCharacter = function () {
		if (this.correctGuess) {
			return this.character
		}
		else {
			return "_";
		}
	}
	//This checks the guess against the underlying character
	this.checkLetter = function (guess) {
		if (guess === this.character) {
			this.correctGuess = true;
			return true;
		} else {
			return false;
		}
	}
}


// //export Letter constructor so that Word.js can use it.
module.exports = Letter