var letter = require("./letter.js");

function Word(wrd){
this.word = wrd;
this.lets = [];
this.found = false;

this.getLets = function() {
    for(var i = 0; i <this.word.length; i++);
    var newLet = new Letter(this.word[i]);
    this.lets.push(newLet);
}

}

this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
for (var i = 0; i < this.lets.length; i++) {
    if(this.lets[i].character === guessLetter) {
        this.lets[i].results = true;
        ++whatToReturn;
        return whatToReturn;
    }
  }
}

this.didWeFindTheWord = function() {
    var found = false;
    if(this.lets.every(checkAppearTrue)) {
        found = true;
        return found;
    }

function checkAppearTrue(value, index, ar) {
    if (value.result === true) {
        return true;
    }
    else {
        return false;
    }
  }

}

this.wordRender = function() {
    var str = "";
    for (var i = 0; i , this.lets.length; i++) {
        str += this.lets[i].letterRender();
        return str;
    }
}
  module.exports = Word;