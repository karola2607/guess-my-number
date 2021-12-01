'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '👀 No secretNumber!';
    document.querySelector('body').style.backgroundColor = 'red';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct number!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'blue';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 🤔';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤢 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is to low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low 😢';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
