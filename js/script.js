'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('👀 No secretNumber!');
    document.querySelector('body').style.backgroundColor = 'red';

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('👍 Correct number!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'blue';

    //Add new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 🤔' : 'Too low 😢');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤢 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
