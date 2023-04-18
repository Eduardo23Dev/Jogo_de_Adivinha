const myButton = document.getElementById("myButton");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let cont = 0;
myButton.addEventListener("click", (ev) => {
  ev.preventDefault;
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
  } else if (input.value === "") {
    alert("Voce precisa digitar algum numero entre 0 e 10!");
  } else {
    alert("Voce errou!");
    input.value = "";
  }
});
