const myButton = document.getElementById("myButton");
const randomNumber = Math.floor(Math.random() * 11);
const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let cont = 0;
let inputTest = document.getElementById("myInput");
inputTest.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    inputTest.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    inputTest.value = inputTest.value.slice(0, -1);
  }
});
myButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  cont++;
  let input = document.getElementById("myInput");
  if (input.value === randomNumber.toString()) {
    const screen_1 = document.querySelector(".screen_1");
    screen_1.style.display = "none";
    const screen_2 = document.querySelector(".screen_2");
    screen_2.style.display = "flex";
    let tentativas = document.getElementById("tentativas");
    tentativas.innerText = cont;
  } else if (input.value > 10 || input.value < 0) {
    alert("Voce so pode escolher numeros entre 0 e 10!");
    input.value = "";
    input.focus();
  } else if (input.value === "") {
    alert("Voce precisa digitar algum numero entre 0 e 10!");
    input.focus();
  } else {
    alert("Voce errou!");
    input.value = "";
    input.focus();
  }
});
