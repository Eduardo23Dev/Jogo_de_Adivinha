function Game() {
  // Obter as referências dos elementos da tela que serão usados no jogo.
  const guessButton = document.getElementById("guessButton");
  const screen_1 = document.querySelector(".screen_1");
  const screen_2 = document.querySelector(".screen_2");
  const screen_3 = document.querySelector(".screen_3");
  const userLifes = document.querySelectorAll(".lifes img");
  const randomNumber = Math.floor(Math.random() * 11);
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let restLife = 3;

  // Obtenha a referência do campo de entrada de texto e adicione um manipulador de eventos para lidar com as teclas pressionadas.
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

  // Função para contar as vidas restantes e atualizar a exibição na tela.
  function lifesCount() {
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

  // Função para validar o palpite do usuário.
  function validateGuess() {
    let guess = document.getElementById("guess");
    if (guess.value === randomNumber.toString()) {
      const showCorrectRandomNum = document.getElementById(
        "showCorrectRandomNum"
      );
      showCorrectRandomNum.innerText = randomNumber;
      screen_1.style.display = "none";
      screen_2.style.display = "flex";
    } else if (guess.value === "" || guess.value > 10) {
      alert("Você precisa digitar algum numero entre 0 e 10 para prosseguir!");
      guess.focus();
    } else {
      if (
        guess.value - randomNumber.toString() === 1 ||
        randomNumber.toString() - guess.value === 1
      ) {
        alert("Uhhh quase :)");
        lifesCount();
      } else {
        lifesCount();
      }
      guess.value = "";
      guess.focus();
    }
  }

  // Adicione um manipulador de eventos para o botão tente.
  guessButton.addEventListener("click", validateGuess);
}

// Inicie o jogo.
Game();
