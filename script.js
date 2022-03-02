'use strict';

//selecting Elements
const player0EL = document.querySelector(`.player--0`);
const player1EL = document.querySelector(`.player--1`);
const score0El = document.getElementById(`score--0`);
const score1EL = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEL = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

score0El.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add(`hidden`);

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle(`player--active`);
  player1EL.classList.toggle(`player--active`);
};

//Roll DIce Function
btnRoll.addEventListener(`click`, function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEL.classList.remove(`hidden`);
  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    //change later
  } else {
    switchPlayer();
  }
});

document.getElementById(`score--${activePlayer}`).textContent =
  scores[activePlayer];

if (scores[activePlayer] >= 10) {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--winner`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
} else {
  switchPlayer();
}
