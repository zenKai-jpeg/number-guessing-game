const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

 
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
let userInput = prompt('Guess the number between 1 and 100:');
let numberInput = Number(userInput)

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  if (numberInput > numberInMind) {
    console.log('Too big, try again.');
  } else if (numberInput < numberInMind) {
    console.log('Too small, try again');
  } else if (numberInput == numberInMind) {
    console.log('congratulation! you did it!')
    foundCorrectNumber = true;
  }


  // Bonus Point: prompt user and provide option for user to start a new game after winning
  while (foundCorrectNumber) {
  let continueGame = prompt('Do you want to continue playing? [Y/N]:');

  if (continueGame == 'Y') {
    foundCorrectNumber = false;
  } else if (continueGame == 'N') {
    break;
  } else {
    console.log("Please enter Y or N.")
  } 
  }
}