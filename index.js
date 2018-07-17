// Connects to Word.js
var Word = require("./Word.js");
// Connects "inquirer"
var inquirer = require("inquirer");
//Array of words, one of which is randomly selected at the beginning of the game...
var words = ["gose", "stout", "ipa", "quadrupel", "dubbel", "hefeweizen", "imperial stout", "barleywine", "blonde", "amber", "porter", "tripel"];
//Empty variable...
var newWord;
//Choosing the word...
function wordChoice() {
    return words[Math.floor(Math.random() * words.length)];
}
//Store and displays the new word
function display() {
    newWord = new Word(wordChoice());
    console.log(newWord.displayWord());
};
//Game logic
function theGame() {
    //Questions for the user
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
        //Takes in functions defined above to start the game...
    ]).then(function (startGame) {
        if (startGame.playGame) {
            console.log("Hello, " + startGame.name + ". Let's see if you can guess the beer style.");
            wordChoice();
            display();
            pickLetter();
            //If the user doesn't want to play...
        } else {
            console.log(startGame.name + ", I'm sorry to hear that. Have a nice day!");
        }
    });
    //Prompts user to pick a letter...
    function pickLetter() {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Pick a letter."
            }
            //Passes the guess to the Word constructor
        ]).then(function (userGuess) {
            var guess = userGuess.guess.toUpperCase();
            newWord.makeGuess(guess);
            //Determines if the amount of guesses needs to be reduced based on correct or incorrect guess...
            if (newWord.makeGuess(guess) === false) {
                newWord.guessesLeft--;
            }
            //Prints word to console...
            console.log(newWord.displayWord());
            //Checks the game state defined in the Word constructor...
            if (newWord.hasWon() || newWord.hasLost()) {
                //Asks if they want to play again...
                inquirer.prompt([
                    {
                        type: "confirm",
                        name: "playAgain",
                        message: "Would you like to play again?"
                    }
                    //Recurs the game based on the last prompt
                ]).then(function (newGame) {
                    if (newGame.playAgain) {
                        wordChoice();   
                        display();
                        pickLetter();
                    } else {
                        console.log("Thanks for playing!");
                    }
                })
                //If win/loss isn't met, it recurs the pickLetter function...
            } else {
                pickLetter();
            }
        })
    }
}
//Starts the game...
theGame();
