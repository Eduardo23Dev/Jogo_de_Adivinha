const myButton = document.getElementById("myButton");
const randomNumber = Math.floor(Math.random() * 11);
const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let guessCount = 0;
let guessInputValid = document.getElementById("guess");
guessInputValid.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    guessInputValid.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    guessInputValid.value = guessInputValid.value.slice(0, -1);
  }
});
myButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  guessCount++;
  let guessInput = document.getElementById("guess");
  if (guessInput.value === randomNumber.toString()) {
    const screen_1 = document.querySelector(".screen_1");
    screen_1.style.display = "none";
    const screen_2 = document.querySelector(".screen_2");
    screen_2.style.display = "flex";
    let attempts = document.getElementById("attempts");
    attempts.innerText = guessCount;
  } else if (guessInput.value > 10 || guessInput.value < 0) {
    alert("Voce so pode escolher numeros entre 0 e 10!");
    guessInput.value = "";
    guessInput.focus();
  } else if (guessInput.value === "") {
    alert("Voce precisa digitar algum numero entre 0 e 10!");
    guessInput.focus();
  } else {
    alert("Voce errou!");
    guessInput.value = "";
    guessInput.focus();
  }
});
