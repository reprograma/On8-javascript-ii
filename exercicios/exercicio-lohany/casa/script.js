/*1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de
 array diferentes com esses métodos. Use sua criatividade!*/

/*---- Método Reverse (inverte a ordem dos elementos)-----/

let numeros [1 , 2, 3]
numeros.reverse()

/*------Método map (função de transformação)----/

let numeros = [1, 2, 3]
let novosNumeros = numeros.map(item => item * 10)// para multiplicar cada número por 10
console.log(novosNumeros); // logo ficará [10, 20, 30]

/*----- Método join(une vários elementos de uma array,tornando-os string)-----/

let numeros = [10, 20, 30]
numeros.join(','); //logo com esse parametro ficará: "10,20,30"

/* Jogo Pedra, Papel e Tesoura */


let computerChoice = ["pedra", "papel", "tesoura"]
const getPlayerChoice = document.getElementById("getPlayerChoice")
//let playerChoice = possibilidadesArray
let playerChoice = document.getElementById("playerChoice")
let resultado = document.getElementById('winner')

getPlayerChoice.addEventListener("click", function (event) {
    computerChoice = Math.floor(Math.random() * 3)
    event.preventDefault()


    if (playerChoice.value == 'pedra') {
        if (computerChoice == [0]) { 
            resultado.innerHTML = "O resultado deu empate"
        }
        else if (computerChoice == [1]) {
            resultado.innerHTML = "O computador venceu"
        }
        else if (computerChoice == [2]) {
            resultado.innerHTML = "Você venceu! Uhuuu"
        }
    }


    if (playerChoice.value == 'papel') {
        if (computerChoice == [0]) {
            resultado.innerHTML = "Você venceu! Uhuuuu"
        }
        else if (computerChoice == [1]) {
            resultado.innerHTML = "O resultado deu empate"
        }
        else if (computerChoice == [2]) {
            resultado.innerHTML = "O computador venceu"
        }
    }

    if (playerChoice.value == 'tesoura') {
        if (computerChoice == [0]) {
            resultado.innerHTML = "O computador venceu"
        }
        else if (computerChoice == [1]) {
            resultado.innerHTML = "Você venceu! uhuuuu"
        }
        else if (computerChoice == [2]) {
            resultado.innerHTML = "O resultado deu empate"
       
        }
    }
})