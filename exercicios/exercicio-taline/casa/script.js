
let jogadasPossiveis = ['Pedra', 'Papel', 'Tesoura']
let jogada = document.getElementById('playerChoice');
let botao = document.getElementById('getPlayerChoice');
let resultado = document.getElementById('winner')

botao.addEventListener('click', function (event) {
    event.preventDefault();
    let computerChoice = Math.floor(Math.random() * jogadasPossiveis.length);
    let valor = jogada.value;
    if (valor == "pedra") {
        if (computerChoice == 1) {
            resultado.textContent = "Ops! Empate, o computador jogou pedra"
        } else if (computerChoice == 2) {
            resultado.textContent = "Que pena, você perdeu, papel enrola pedra :("
        } else {
            resultado.textContent = "Parabéns, você ganhou, pedra quebra tesoura :)"
        }
    }
    if (valor == "tesoura") {
        if (computerChoice == 1) {
            resultado.textContent = "Que pena, você perdeu, pedra quebra tesoura :("
        } else if (computerChoice == 2) {
            resultado.textContent = "Parabéns, você ganhou, tesoura corta papel :)"
        } else {
            resultado.textContent = "Ops! Empate, o computador jogou tesoura"
        }
    }
    if (valor == 'papel') {
        if (computerChoice == 1) {
            resultado.textContent = "Parabéns, você ganhou, papel enrola pedra :)"
        } else if (computerChoice == 2) {
            resultado.textContent = "Ops! Empate, o computador jogou papel"
        } else {
            resultado.textContent = "Que pena, você perdeu, tesoura corta papel :("
        }
    }
    if (valor != 'papel' && valor != 'tesoura' && valor != 'pedra') {
        alert('Por favor, escreva uma opção valida')
    }
});