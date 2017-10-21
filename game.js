var inquirer = require("inquirer");
var Word = require("./word.js");
var newWord;

function playGame(){  
  inquirer.prompt([
  {
    name: "response",
    type: "list",
    choices: ["Yes","No"],
    message: "Do you want to play a new game of hangman?"
  }
  ]).then(function(answer){
    var response = answer.response;
    if(response === "Yes"){
      console.log('\n' + "Ok, let's play!. Hint: ZOO ANIMALS!")      
      newWord = new Word();
      newWord.initGame();
      getLetter();
    }else{
      console.log("Ok, good-bye!!")
      return;
    }
  })
}

function getLetter() {
  if (newWord.guessesLeft > 0) {
    inquirer.prompt([{
      name: "letter",
      type: "text",
      message: "Please enter a letter...",
      validate: function(string) {
        var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
        if (regEx.test(string)) {
          return true;
        } else {
          return false;
          console.log("Please enter ONLY a single letter");
        }
      }
    }]).then(function(userletter) {
      var letter = userletter.letter.toUpperCase();
      newWord.checkLetter(letter);
      if(newWord.isWordGuessed()){        
        playGame();
      }else{
        getLetter();        
      }
    });
  } else {
    console.log("Out of guesses!" + '\n');
    playGame();
  }
}


playGame();


