const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  //1. დამიგენერირე რენდომ კამათლის გაგორება
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. ეკრანზე გამომიტანე კამათელი;
  diceEl.classList.remove("hidden");
  console.log(diceEl);
  diceEl.src = `dice-${dice}.png`;
  // 3. შეამოწმოს 1 გაგორდა თუ არა, თუ გაგორდა თამაში გადავიდეს მეორეზე
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});