"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number !";
    checkBtn.disabled = true;
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".highScore").textContent = highScore;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score <= 1) {
      document.querySelector(".message").textContent = "Game Over!";
      checkBtn.disabled = true;
      document.body.style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score <= 1) {
      document.querySelector(".message").textContent = "Game Over!";
      checkBtn.disabled = true;
      document.body.style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  checkBtn.disabled = false;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
