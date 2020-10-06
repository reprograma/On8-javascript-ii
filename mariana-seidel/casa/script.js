/*1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! */

// 1.MÉTODO REVERSE > Inverte a ordem dos elementos do array //

let arrayCores = ['amarelo', 'azul', 'verde', 'rosa']

console.log(arrayCores.reverse())

// 2.MÉTODO toString > Converte os arrays para uma série separados por vírgula //

let arrayFrutas = ['laranja', 'morango', 'banana', 'abacaxi']

console.log(arrayFrutas.toString())

// 3. MÉTODO SORT > Ordena a array em ordem alfabética //

let arrayNomes = ['mari', 'ana', 'luiza', 'camila'];

console.log(arrayNomes.sort());


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

let computerChoice = ["pedra", "papel", "tesoura"]
let getPlayerChoice = document.getElementById("getPlayerChoice")
let texto = document.getElementById('winner')

getPlayerChoice.addEventListener('click', function(event){
    event.preventDefault()
    computerChoice = Math.floor(Math.random()*3)

    if ((playerChoice.value == 'pedra' && computerChoice == 0) || 
        (playerChoice.value == 'papel' && computerChoice == 1) ||
        (playerChoice.value == 'tesoura' && computerChoice == 2)){
            texto.textContent = `O jogo foi empate!`
    }

    if(playerChoice.value =='pedra' && computerChoice ==1){
        texto.textContent = 'O computador ganhou!'
    } else if (playerChoice.value =='pedra' && computerChoice ==2){
        texto.textContent = 'Você ganhou!'
    }
    
    if(playerChoice.value =='papel' && computerChoice ==0){
        texto.textContent = 'O computador ganhou!'
    } else if (playerChoice.value == 'papel' && computerChoice ==2){
        texto.textContent = 'Você ganhou!'
    }
   
    if(playerChoice.value =='tesoura' && computerChoice ==0){
        texto.textContent = 'O computador ganhou!'
    } else if (playerChoice.value == 'tesoura' && computerChoice ==1){
        texto.textContent = 'Você ganhou!'
    }


    if ((playerChoice.value != 'pedra') &&
        (playerChoice.value != 'papel') &&
        (playerChoice.value != 'tesoura')){ 
        alert('Preencha o campo de forma correta, escreva uma das opções abaixo:\npedra, papel ou tesoura')
    }

})



