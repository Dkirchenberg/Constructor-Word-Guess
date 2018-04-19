// Pick a random word

//While the word has not been guessed- show the player thier current progress

// Get a guess from  a player

// If the player wants to quit the game- stop the game

// Tell the player to guess a letter for a random word

//If the player guesses the word, update the player's progress 

// Congratulate the player



var name = prompt("What's your name?");
alert("Hello " + name);

var play = confirm("Would you like to play a guessing game?");
if (play) {
    alert("Ok, let's play!");
}
else{
    alert("Maybe next time?");
}

//Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

//Pick a random word
var word = words[Math.floor(Math.random())* words.length];

//Set up the answer array
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "-";
}
 var remainingLetters = word.length;

 //The game loop
 while (remainingLetters > 0) [
     //Game code goes here
     //Show the player their progress
     //Take input from the player
     //Update answerArray and remainingLetters for every correct guess
 ]

 alert(answerArray.join(" "));

 //Get a guess from the player
 var guess = prompt("Guess a letter, or click Cancel to stop playing.");
 if(guess === null) {
     //Exit the game loop
 }
 else if (guess.length !=+1) {
 alert("Please enter a single letter.");
 }
 else {
     //Update the game state with the guess
     for (var j = 0; j < word.length; j++) {
         if (word[j] ===guess) {
             answerArray[j] = guess;
             remainingLetters--;
         }
     }
     //The end of the game loop
 }

 alert(answerArray.join(" "));
 alert("Good job! The answer was " + word);