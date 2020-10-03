// Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos:

const getPlayerChoice = document.getElementById('getPlayerChoice')
let playerChoice = document.getElementById('playerChoice')
let computerChoice = ['pedra', 'papel', 'tesoura']
let winner = document.getElementById('winner')

getPlayerChoice.addEventListener("click", function (event) {

    computerChoice = Math.floor(Math.random() * 3)
    event.preventDefault()

    if (playerChoice.value == 'pedra') {
        if (computerChoice == [0]) {
            winner.innerHTML = 'Opa! Deu empate!'
            winner.style.color = 'grey'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [1]) {
            winner.innerHTML = 'O computador venceu! rsrs'
            winner.style.color = 'red'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [2]) {
            winner.innerHTML = 'Yay! Você venceu! o/'
            winner.style.color = '#159a15'
            winner.style.fontWeight = 'bold'
        }
    }

    if (playerChoice.value == 'papel') {
        if (computerChoice == [0]) {
            winner.innerHTML = 'Yay! Você venceu! o/'
            winner.style.color = '#159a15'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [1]) {
            winner.innerHTML = 'Opa! Deu empate!'
            winner.style.color = 'grey'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [2]) {
            winner.innerHTML = 'O computador venceu! rsrs'
            winner.style.color = 'red'
            winner.style.fontWeight = 'bold'
        }
    }

    if (playerChoice.value == 'tesoura') {
        if (computerChoice == [0]) {
            winner.innerHTML = 'O computador venceu! rsrs'
            winner.style.color = 'red'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [1]) {
            winner.innerHTML = 'Yay! Você venceu! o/'
            winner.style.color = '#159a15'
            winner.style.fontWeight = 'bold'
        }
        else if (computerChoice == [2]) {
            winner.innerHTML = 'Opa! Deu empate!'
            winner.style.color = 'grey'
            winner.style.fontWeight = 'bold'
        }
    }
})


