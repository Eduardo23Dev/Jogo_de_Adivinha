function Game() {
  const guessButton = document.getElementById("guessButton");
  const screen_1 = document.querySelector(".screen_1");
  const screen_2 = document.querySelector(".screen_2");
  const screen_3 = document.querySelector(".screen_3");
  const randomNumber = Math.floor(Math.random() * 11);
  const userLifes = document.querySelectorAll(".lifes img");
  console.log(randomNumber);
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let guessInput = document.getElementById("guess");
  guessInput.focus();
  guessInput.addEventListener("keydown", (ev) => {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
      guessInput.value += ev.key;
      return;
    }
    if (ev.key === "Backspace") {
      guessInput.value = guessInput.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
      validateGuess();
    }
  });
  let restLife = 3;
  function validateGuess() {
    let guess = document.getElementById("guess");
    if (guess.value === randomNumber.toString()) {
      screen_1.style.display = "none";
      screen_2.style.display = "flex";
    } else if (guess.value > 10) {
      alert("Você so pode escolher numeros entre 0 e 10!");
      guess.value = "";

      guess.focus();
    } else if (guess.value === "") {
      alert("Você precisa digitar algum numero entre 0 e 10 para prosseguir!");
      guess.focus();
    } else {
      if (
        guess.value - randomNumber.toString() === 1 ||
        randomNumber.toString() - guess.value === 1
      ) {
        alert("Uhhh quase :)");
        if (restLife <= userLifes.length) {
          userLifes[restLife].remove();
          if (restLife != 0) {
            restLife--;
          } else if (restLife === 0) {
            screen_1.style.display = "none";
            screen_3.style.display = "flex";
            const showRandowNum = document.getElementById("showRandomNum");
            showRandowNum.innerText = randomNumber;
          }
        }
      } else {
        if (restLife <= userLifes.length) {
          userLifes[restLife].remove();
          if (restLife != 0) {
            restLife--;
          } else if (restLife === 0) {
            screen_1.style.display = "none";
            screen_3.style.display = "flex";
            const showRandowNum = document.getElementById("showRandomNum");
            showRandowNum.innerText = randomNumber;
          }
        }
      }

      guess.value = "";
      guess.focus();
    }
  }

  guessButton.addEventListener("click", validateGuess);
}
Game();
