let getPlayerChoice = document.getElementById('getPlayerChoice')


getPlayerChoice.addEventListener('click', result)

//resultado obtido através da ação
function result() {

    let playChoice = ['pedra', 'papel', 'tesoura']

    //toLowerCase = tranforma tudo em letra mínusca // replace válida o primeiro parâmetro e substitui pelo segundo parâmentro 
    //caso exista e elementos fora do parâmetro vaidado.
    let playerChoice = document.getElementById('playerChoice').value.toLowerCase().replace(/[^a-z]/g, '');


    //cria uma escolha aleatória com base na quantidade de index na array . ex: esse possui 3 elesmentos  0,1,2
    let computerChoice = Math.round(Math.random() * 2);

    if (computerChoice === 0) {
        computerChoice = playChoice[0]
    } else if (computerChoice === 1) {
        computerChoice = playChoice[1]
    } else {
        computerChoice = playChoice[2]
    }
    // ela está retornando toa a análise de possibilidade de jogadas
    compareMove(playerChoice, computerChoice)

}

//vai avaliar as possibilidades de jogadas e seus resultados
function compareMove(playerChoice, computerChoice) {

    let winner = document.getElementById('winner')

    if (playerChoice === computerChoice) {
        winner.innerHTML = `<p> O resultado é um empate!! </p>`
    }
    else if (playerChoice === 'pedra' && computerChoice === 'tesoura') {
        winner.innerHTML = `<p> A Pedra ganhou da Tesoura!! 
        Você ganhou do computador. </p>`
    }
    else if (playerChoice === 'pedra' && computerChoice === 'papel') {
        winner.innerHTML = `<p> O Papel ganhou da Pedra!!
             O computador ganhou de você.</p>`
    }
    else if (playerChoice === 'tesoura' && computerChoice === 'papel') {
        winner.innerHTML = `<p> O Tesoura ganhou do Papel!! 
            Você ganhou do computador.</p>`
    }
    else if (playerChoice === 'tesoura' && computerChoice === 'pedra') {
        winner.innerHTML = `<p> O Tesoura ganhou do Pedra!! 
            O computador ganhou.</p>`
    }
    else if (playerChoice === 'papel' && computerChoice === 'pedra') {
        winner.innerHTML = `<p> O Papel ganhou da Pedra!!
    Você ganhou do computador</p>`
    }
    else if (playerChoice === 'papel' && computerChoice === 'tesoura') {
        winner.innerHTML = `<p> O Papel ganhou da Pedra!!
        O computador ganhou.</p>`
    }
}


const voce = document.getElementById('playerChoice')


