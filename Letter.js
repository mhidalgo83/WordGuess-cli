var Letter = function(character) {
    //Takes input and converts to upper case
    this.character = character.toUpperCase();
    //Sets the guess to false
    this.correctGuess = false;
    //Function that takes in the user guess and displays the guess if true, or displays an underscore in place of the letter
	this.showCharacter = function() {
		if (this.correctGuess) {
			console.log(this.character);
		}
		else {
			console.log ("_");
		}

	}
}

//Test to make sure Letter.js is working. 
var lettertest = new Letter ("a");
lettertest.showCharacter();

// //export Letter constructor so that Word.js can use it.
module.exports = Letter