// GAME

let playersOptions = ['pedra', 'papel', 'tesoura'];
console.log(playersOptions);

let playerChoice = playersOptions;
console.log(playerChoice);

let computerChoice = playersOptions;
console.log(computerChoice);

let button = document.querySelector('#getPlayerChoice');

button.addEventListener('click', function (event) {
    event.preventDefault();

    computerChoice = Math.random() * 3;

    if (playerChoice == computerChoice) {
        message.textContent = "Empate!";
    }

    else if (playerChoice == 'pedra' && computerChoice == 'papel') {
        message.textContent = "Seu oponente escolheu papel! Você perdeu!"
    }

    else if (playerChoice == [0] && computerChoice == [2]) {
        message.textContent = "Seu oponente escolheu tesoura! Você ganhou!"
    }

    else if (playerChoice == [1] && computerChoice == [0]) {
        message.textContent = "Seu oponente escolheu pedra! Você ganhou!"
    }

    else if (playerChoice == [1] && computerChoice == [2]) {
        message.textContent = "Seu oponente escolheu tesoura! Você perdeu!"
    }

    else if (playerChoice == [2] && computerChoice == [0]) {
        message.textContent = "Seu oponente escolheu pedra! Você perdeu!"
    }

    else if (playerChoice == [2] && computerChoice == [1]) {
        message.textContent = "Seu oponente escolheu papel! Você ganhou!"
    }

})
