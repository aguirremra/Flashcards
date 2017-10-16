Overview

In this week's assignment, you will create a flashcard command-line game using constructor functions.

Instructions - FLASHCARDS
The completed game should meet the following criteria:
The completed game should be able to receive user input using the inquirer or prompt npm packages.
Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:
Card: Used to create an object representing a Flashcard. A Flashcard should consist of 2 sides, one representing the keyword/statement and the other the answer. For simplicity, it is recommended to make the answer side's value limited to a maximum of two words.
Deck: A collection of Flashcards used to manage the Flashcards.
CliController: The CLI Controller should start by listing the available Decks the user has and allow them to select a Deck to view the Flashcards. After a deck is selected, the CLI Controller should allow the user to perform 4 different actions:
'answer' to check if they know the answer before flipping
'flip' to see the other side of the Card
'next' to move onto the next Card
'exit' to end the game
You must keep track of the user's guesses and prompt the user if they would like to end the game if none remain
Each constructor function should be in it's own file and be exported and required wherever needed.
Look into function prototypes and use them for a few of your constructor's methods.


HANGMAN
The completed game should meet the following criteria:
The completed game should be able to receive user input using the inquirer or prompt npm packages.
Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:
Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
Each constructor function should be in it's own file and be exported and required wherever needed.
Look into function prototypes and use them for a few of your constructor's methods.