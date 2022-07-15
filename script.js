'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// document.getElementsByClassName('.easy').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(.easy);

// function levelselect() {
//   document.getElementsByClassName(".easy").innerHTML = "Hello World";
// }
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function difficultyselect() {
  let difficultlevel = event.target.className;

  if (difficultlevel === 'btn1 easy') {
    alert('Easy level selected');
    let secretNumber = getRndInteger(0, 10);
    console.log(secretNumber, typeof secretNumber);
    console.log(difficultlevel, typeof difficultlevel);
    game(secretNumber);
  } else if (difficultlevel === 'btn1 medium') {
    alert('Medium level selected');
    let secretNumber = getRndInteger(1, 100);
    console.log(secretNumber, typeof secretNumber);
    console.log(difficultlevel, typeof difficultlevel);
    game(secretNumber);
  } else if (difficultlevel === 'btn1 hard') {
    alert('Hard level selected');
    let secretNumber = getRndInteger(-500, 500);
    console.log(secretNumber, typeof secretNumber);
    console.log(difficultlevel, typeof difficultlevel);
    game(secretNumber);
  }
}

function game(secretNumber) {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        if (guess < secretNumber) {
          console.log(guess);
          addRow('greater', guess);
        } else {
          console.log(guess);
          addRow('less', guess);
        }
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });
}

function addRow(tableID, guessno) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode(guessno);
  console.log(guessno);
  newCell.appendChild(newText);
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  alert('Please select difficulty');

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
