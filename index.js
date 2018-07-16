// Connects to Word.js
var Word = require("./Word.js");
// Connects "inquirer"
var inquirer = require("inquirer");
//Array of words, one of which is randomly selected at the beginning of the game...
var words = ["this", "that", "other"];
//Empty variable...
var newWord;
//Choosing the word...
function wordChoice() {
    return words[Math.floor(Math.random() * words.length)];
}
//Store and displays the new word
function thing() {
    newWord = new Word(wordChoice());
    console.log(newWord.displayWord());
};

function theGame() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Hi! What's your name?",
        }, {
            type: "confirm",
            name: "playGame",
            message: "Would you like to play a word guess game?"
        },
    ]).then(function (startGame) {
        if (startGame.playGame) {
            console.log("Hello, " + startGame.name + ". Let's play!");
            wordChoice();
            thing();
            pickLetter();
        } else {
            console.log(startGame.name + ", I'm sorry to hear that. Have a nice day!");
        }
    });
    function pickLetter() {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Pick a letter."
            }
        ]).then(function (userGuess) {
            var guess = userGuess.guess.toUpperCase();
            newWord.makeGuess(guess);
            console.log(newWord.displayWord());
            if (newWord.hasWon()) {
                inquirer.prompt([
                    {
                        type: "confirm",
                        name: "playAgain",
                        message: "You have won! Would you like to play again?"
                    }
                ]).then(function (newGame) {
                    if (newGame.playAgain) {
                        wordChoice();   
                        thing();
                        pickLetter();
                    } else {
                        console.log("Thanks for playing!");
                    }
                })
            } else {
                pickLetter();
            }
        })
    }
}
theGame();
