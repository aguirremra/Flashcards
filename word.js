var Word = function() {
  this.guessesLeft = 10;
  this.words = ["tiger", "elephant", "gorilla","giraffe","turtle","rhinoceros","monkey","ostrich","koala","zebra"];
  this.wordToGuess = "";
  this.placeHolder = [];
  this.lettersGuessed = [];
  this.wins = 0;
  this.losses = 0;
  this.initGame = function() {
    this.wordToGuess = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
    this.displayWord();
  };
  this.displayWord = function() {
    for (i = 0; i < this.wordToGuess.length; i++) {
      this.placeHolder.push("__");
    }
    this.displayLetters();
    // console.log(this.wordToGuess);
  };
  this.displayLetters = function() {
    console.log('\n' + this.placeHolder.join(" ") + '\n');
  };
  this.checkLetter = function(letter) {
    if (this.wordToGuess.indexOf(letter) != -1) {
      //replace blank with letter pressed
      for (var i = 0; i < this.wordToGuess.length; i++) {
        if (letter === this.wordToGuess.charAt(i)) {
          this.placeHolder[i] = letter;
          this.displayLetters();
        }
      }
    } else {
      if (this.lettersGuessed.indexOf(letter) === -1) {
        this.guessesLeft--;
        console.log('\n' + "Guesses left: " + this.guessesLeft + '\n');
        this.lettersGuessed.push(letter);
        console.log("Letters Guessed: " + this.lettersGuessed + '\n');
        this.displayLetters();
      } else {
        console.log('\n' + "You already guessed that letter!" + '\n');
        this.displayLetters();
      }
    }
  };
  this.isWordGuessed = function() {
    //has the word been guessed yet?
    if (this.placeHolder.join("") === this.wordToGuess) {
      console.log("Right on! You're a genius!" + '\n');
      this.wins++;
      return true;
    }
  };
}

module.exports = Word;