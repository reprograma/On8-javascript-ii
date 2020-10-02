/*
2. Pedra, papel e tesoura 👊🏻 🗒 ✂ 

![pedra papel tesoura](assets/../../../assets/pedrapapeltesoura.jpg)

* Crie um jogo onde você jogará contra o computador em pedra, papel e tesoura
  
##### funcionalidades
* Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
* Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar uma das possibilidades de jogada
* Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeado. Não deve haver vencedor se na jogada houver um empate: 

Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
Pedra x Papel 🗒 = Pedra perde, papel ganha
Pedra x Pedra 👊🏻 = Empate!  

- Dica: use ```if/else/else if``` ou ```switch/case/break```

* Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer 

*/

let playerChoiceBox = document.getElementById ("playerChoiceBox");
let playerChoice = document.getElementById ("playerChoice");
let getPlayerChoice = document.getElementById ("getPlayerChoice");

let winner = document.getElementById ("winner");


function computerChoice () {
    let jogadasComputador = ["Pedra", "Papel", "Tesoura"];
    return Math.random();
  }


getPlayerChoice.addEventListener("click", function() {

    if (playerChoice == "Pedra" && computerChoice == "Tesoura") {
        winner.innerHTML = `Pedra ganha, tesoura perde`
    } 

    if (playerChoice == "Pedra" && computerChoice == "Papel") {
        winner.innerHTML = `Pedra perde, papel ganha`
    } 

    if (playerChoice == "Pedra" && computerChoice == "Pedra") {
        winner.innerHTML = `Empate!`
    } 

});