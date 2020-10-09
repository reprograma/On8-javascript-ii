// Exercicio 1, métodos map, filter e reduce

// Criar um novo array informando qual número é ou não par (0 para não e 1 para sim)
// let numbers = [1, 2, 3, 4, 5, 6];
// let output = numbers.map(num => num%2 ? 0 : 1);
// console.log(output);

// Criar um novo array apenas com o números pares.
// let numbers = [1, 2, 3, 4, 5, 6];
// let output = numbers.filter(n => !(n%2));
// console.log(output);

// Imprimir o resultado da soma de todos os números de um array
// let numbers = [1, 2, 3, 4, 5, 6];
// let output = numbers.reduce((total, valor) => total + valor, 0);
// console.log(output);

const choices = ["pedra", "papel", "tesoura"]
let output = document.getElementById("winner");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function analyzeAndShowWinner(player, computer) {
  let jogada = player + "x" + computer;
  switch (jogada) {
    case "pedraxtesoura":
    case "papelxpedra":
    case "tesouraxpapel":
      output.innerHTML = `Você escolheu ${player} e ganhou! O computador escolheu ${computer}`
      break;

    case "tesouraxpedra":
    case "pedraxpapel":
    case "papelxtesoura":
      output.innerHTML = `Você escolheu ${player} e perdeu! O computador escolheu ${computer}`
      break;

    case "pedraxpedra":
    case "papelxpapel":
    case "tesouraxtesoura":
      output.innerHTML = `Empate!`
      break;

    default:
      alert("Verifique sua jogada e escreva corretamente.")
  }
}

getPlayerChoice.addEventListener("click", function () {
    let playerChoice = document.getElementById("playerChoice").value.toLowerCase();
    let computerChoice = getComputerChoice();

    analyzeAndShowWinner(playerChoice, computerChoice)
});

