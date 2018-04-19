var prompt = require("prompt");

prompt.start();

var Word = require("./word.js");

var game = {
    wordBank: ["javascript", "monkey", "amazing", "pancake"],
    guessesRemaining: 10,
    currentWrd: null,
    startGame: function(wrd) {
        var randomWord = this.wordBank[Math.floor(Math.random()* this.wordBank.length)];
        this.currentWrd = new Word(randomWord);
        this.currentWrd.getLets();
        this.keepPrompting();
    },

    keepPrompting: function() {
        var self = this;
        prompt.get(["guessLetter"], function(err, result) {
            console.log("The letter or space you guessed is: " + result.guessLetter);
            var findHowManyOfUserGuess = self.currentWrdcheckIfLetterFound(result.guessLetter);
            console.log("Guess" + findHowManyofUserGuess);
            
            if(findHowManyOfUserGuess ===0) {
                console.log("That is incorrect!");
                self.guessesRemaining -= 1;
            }

            else {
                console.log("Correct!");
                if (self.currentWrd.didWeFindTheWord()) {
                    console.log("You won!");
                    return 1;
                }
                    else {
                        console.log("Guesses remaining: " + self.guessesRemaining);
                        console.log(self.currentWrd.wordRender());
                        if (self.guessesRemaining > 0 && self.currentWrd.found === false) {
                            self.keepPrompting();
                        }
                         else {
                             if (self.guessesRemaining === 0) {
                                 console.log("Game over");
                                 console.log("The word you were guessing was: " + self.randomWord);
                             }
                             else {
                                 console.log(self.currentWrd.wordRender());
                             }
                         }
                    }
            }
        });
    }
}

game.startGame();