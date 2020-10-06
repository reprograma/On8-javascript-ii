// EXERCÍCIO 1:

// 1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade!

//  Método Map() ->  invocado a partir de  uma função de callback, que retorna um novo array transformado.

// let vencedores = [
//     {
//         nome: "Team Calor",
//         pais: "Brasil"
//     },
//     {
//         nome: "Team Kardashians",
//         pais: "EUA"
//     },
//     {
//         nome: "Team Neve",
//         pais: "Canadá"
//     }
// ];

// let podioPorPais = vencedores.map(function (item) {
//     return item.pais;
// });

// document.write(podioPorPais); // Retorna: Brasil,EUA,Canadá



// Método forEach() -> permite executar uma função para cada item de um array.

// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function tabuadaDe2(item) {
//     console.log(item * 6);
// }

// numeros.forEach(tabuadaDe2) // Retorna: (0,6,12,18,24,30,36,42,48,54,60)



// Método reduce() -> método reduz a matriz a um único valor.

// let total = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
//     return acumulador + valorAtual;
// }, 0)
// total == 6


// EXERCÍCIO 2:

// 2. Pedra, papel e tesoura


// * Crie um jogo onde você jogará contra o computador em pedra, papel e tesoura

// ##### funcionalidades
// * Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
// * Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar uma das possibilidades de jogada
// * Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeado. Não deve haver vencedor se na jogada houver um empate: 

// Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
// Pedra x Papel 🗒 = Pedra perde, papel ganha
// Pedra x Pedra 👊🏻 = Empate!  

// - Dica: use ```if/else/else if``` ou ```switch/case/break```

// * Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer 

let computerChoice = ["pedra", "papel", "tesoura"]
let getPlayerChoice = document.getElementById("getPlayerChoice")
let msg = document.getElementById('winner')
getPlayerChoice.addEventListener('click', function (event) {
    event.preventDefault()
    computerChoice = Math.floor(Math.random() * 3)
    if ((playerChoice.value == 'pedra' && computerChoice == 0) ||
        (playerChoice.value == 'papel' && computerChoice == 1) ||
        (playerChoice.value == 'tesoura' && computerChoice == 2)) {
        msg.textContent = `O jogo foi empate ✋!`
    }
    if (playerChoice.value == 'pedra' && computerChoice == 1) {
        msg.textContent = 'O computador ganhou 💻!'
    } else if (playerChoice.value == 'pedra' && computerChoice == 2) {
        msg.textContent = 'Você ganhou 👧🏽!'
    }
    if (playerChoice.value == 'papel' && computerChoice == 0) {
        msg.textContent = 'O computador ganhou 💻!'
    } else if (playerChoice.value == 'papel' && computerChoice == 2) {
        msg.textContent = 'Você ganhou 👧🏽!'
    }
    if (playerChoice.value == 'tesoura' && computerChoice == 0) {
        msg.textContent = 'O computador ganhou 💻!'
    } else if (playerChoice.value == 'tesoura' && computerChoice == 1) {
        msg.textContent = 'Você ganhou 👧🏽!'
    }
    if ((playerChoice.value != 'pedra') &&
        (playerChoice.value != 'papel') &&
        (playerChoice.value != 'tesoura')) {
        alert('Preencha o campo de forma correta, escreva uma das opções abaixo:\npedra, papel ou tesoura')
    }

})
