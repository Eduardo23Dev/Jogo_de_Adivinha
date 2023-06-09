function Game() {
  const guessButton = document.getElementById("guessButton");
  const randomNumber = Math.floor(Math.random() * 11);
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let guessCount = 0;
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
  function validateGuess() {
    guessCount++;
    let guess = document.getElementById("guess");

    if (guess.value === randomNumber.toString()) {
      const screen_1 = document.querySelector(".screen_1");
      screen_1.style.display = "none";
      const screen_2 = document.querySelector(".screen_2");
      screen_2.style.display = "flex";
      let attempts = document.getElementById("attempts");
      attempts.innerText = guessCount;
    } else if (guess.value > 10) {
      alert("Você so pode escolher numeros entre 0 e 10!");
      guess.value = "";
      guessCount--;
      guess.focus();
    } else if (guess.value === "") {
      alert("Você precisa digitar algum numero entre 0 e 10 para prosseguir!");
      guessCount--;
      guess.focus();
    } else {
      if (
        guess.value - randomNumber.toString() === 1 ||
        randomNumber.toString() - guess.value === 1
      ) {
        alert("Uhhh quase :)");
      } else {
        alert("Você errou!\nContinue tentando.");
      }
      guess.value = "";
      guess.focus();
    }
  }

  guessButton.addEventListener("click", validateGuess);
}
Game();
