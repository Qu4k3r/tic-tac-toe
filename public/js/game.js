/* eslint-disable no-undef */
// const socket = io('http://localhost:3000');

// const game = document.getElementById('game');
const boxes = document.querySelectorAll('li');

let player1 = true;

const playGame = (e) => {
  if (player1) {
    e.target.innerText = 'X';
    e.target.className = 'x';
    player1 = false;
  } else {
    e.target.innerText = 'O';
    e.target.className = 'o';
    player1 = true;
  }
};

boxes.forEach((box) => {
  box.addEventListener('click', (e) => playGame(e));
});
