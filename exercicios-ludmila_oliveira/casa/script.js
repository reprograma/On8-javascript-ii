
// ---------------------------------------------------------MÉTODOS DO ARRAY---------------------------------------------------------------------------

// // JOIN - transforma os elementos do array em uma única string

// let cars = ['gol', 'logan', 'hb20', 'fusca'];
// console.log(cars.join(', ')); //resposta --> "gol, logan, hb20, fusca"

// // FILL - preenche o array com um elemento determinado de acordo com o parâmetro passado, onde o 1º é o valor, 2º index incial 3º é o index final

// const letter = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(letter.fill('i', 2, 4)); //resposta --> ["a", "b", "i", "i", "e", "f"]

// // SORT - ordena de forma crescente os elementos, através da conversão deles em strings e, em seguida, compara suas sequências de valores de unidades de código UTF-16.

// let cars = ['hb20', 'fusca', 'gol', 'logan', 'palio', 'uno', 'polo'];
// console.log(cars.sort()); //resposta --> ["fusca", "gol", "hb20", "logan", "palio", "polo", "uno"]




// ------------------------------------------------------------- JOGO PEDRA, PAPEL, TESOURA ---------------------------------------------------------------



// Este elemento é o botão que irá iniciar o evento
let getPlayerChoice = document.getElementById('getPlayerChoice');
let imgWinner = document.getElementById('img-winner');

// Ao acionar o botão com um click, ele vai executar a função automaticamente (por isso só chamamos ela pelo nome)
getPlayerChoice.addEventListener('click', result);

// Ela passa o resultado obtido através da ação
function result(){

    let playChoice = ['pedra', 'papel', 'tesoura'];

    let playerChoice = document.getElementById('playerChoice').value.toLowerCase().replace(/[^a-z]/g, ''); //.value pega o valor; toLowerCase substitui tudo por minusculo; replace ele valida o primeiro parâmetro e substitui pelo segundo parâmetro caso exista elementos fora do parâmetro validado

    let computerChoice = Math.round(Math.random() * 2); //Cria uma escolha aleatória com base na quantidade de index no array (ex: esse tem 3 elementos)


    if (computerChoice === 0) {
        computerChoice = playChoice[0]
    } else if (computerChoice === 1) {
        computerChoice = playChoice[1]
    } else {
        computerChoice = playChoice[2]
    }

    compareMove(playerChoice, computerChoice) //Ela está retornando toda a análise de possibilidade de jogadas

}

// Vai avaliar a possibilidade de jogadas e seus resultados
function compareMove(playerChoice, computerChoice){

    let winner = document.getElementById('winner');

    if (playerChoice === computerChoice) {
        imgWinner.src = " "
        winner.innerHTML = `<p> O Resultado é empate!! </p>`
    
    } else if (playerChoice === 'pedra' && computerChoice === 'tesoura') {
        imgWinner.src = "img/usuario.png"
        winner.innerHTML = `<p> A pedra ganhou da tesoura!! Você ganhou do computador. </p>`
    
    } else if (playerChoice === 'pedra' && computerChoice === 'papel') {
        imgWinner.src = "img/computador.png"
        winner.innerHTML = `<p> A papel ganhou da pedra!! O computador ganhou do você. </p>`
    
    } else if (playerChoice === 'tesoura' && computerChoice === 'papel') {
        imgWinner.src = "img/usuario.png"
        winner.innerHTML = `<p> A tesoura ganhou do papel!! Você ganhou do computador. </p>`
    
    } else if (playerChoice === 'tesoura' && computerChoice === 'pedra') {
        imgWinner.src = "img/computador.png"
        winner.innerHTML = `<p> A pedra ganhou da tesoura!! O computador ganhou do você. </p>`
    
    } else if (playerChoice === 'papel' && computerChoice === 'pedra') {
        imgWinner.src = "img/usuario.png"
        winner.innerHTML = `<p> A papel ganhou da pedra!! Você ganhou do computador. </p>`
    
    } else if (playerChoice === 'papel' && computerChoice === 'tesoura') {
        imgWinner.src = "img/computador.png"
        winner.innerHTML = `<p> A tesoura ganhou da papel!! O computador ganhou do você. </p>`
    }

}