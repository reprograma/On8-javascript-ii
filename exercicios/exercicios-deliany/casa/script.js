
// 1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 
// exemplo 1
let ages = [2, 10, 15, 20, 39, 58]
console.log(ages)
ages = ages.map(value=> value+2); //altera todos os valores mais 2
console.log('ages :' , ages);

// exemplo 2 retornar os valores impares
const impares = ages.filter(value => value%2 === 1)
console.log('impares:', impares);

// exemplo 
ages = ages.map(value =>(value % 2 === 1? value+1 : value));
console.log('ages :', ages);


// 2. Pedra, papel e tesoura 👊🏻 🗒 ✂ 

// ![pedra papel tesoura](assets/../../../assets/pedrapapeltesoura.jpg)

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

// **************************
// const possibilidadesArray = ['pedra', 'papel', 'tesoura']
// const computerChoice = possibilidadesArray
// const getPlayerChoice = document.getElementById('getPlayerChoice')
// // let inputado = playChoice.value
// // console.log(playChoice.value)
// //console.log("getPlayerChoice")
// playChoice.value
// getPlayerChoice.addEventListener('click', function(event){
//     event.preventDefault()
//     if (playerChoice == 'pedra' && computerChoice == [0]) {
//          if (computerChoice == [0]){
//              vencedor = 'empate'
//              console.log(vencedor)
//          }else if (computerChoice == [1])
//              vencedor = 'computador'
//              console.log(vencedor)
//          }else if(computerChoice == [2]){
//                  vencedor = 'você venceu'
//                  console.log(vencedor)
//          }
    
//      computerChoice = (Math.random() * 3)
//      switch(computerChoice){
//          case 0:
//              computerChoice = 'pedra';
//              console.log('vencedor')
//              break;
//              case 1:
//              computerChoice = 'papel';
//              console.log('vencedor')
//              break;
//              case 2:
//              computerChoice = 'tesoura';
//              console.log(vencedor)
//              break;
             
//      }
// }
// ******************

papel, pedra, tesoura;
const possibilidadesArray = ["pedra", "papel", "tesoura"]
const computerChoice = possibilidadesArray
const getPlayerChoice = document.getElementById("getPlayerChoice")
//console.log("getPlayerChoice")
 
getPlayerChoice.addEventListener("click"), function(){
    if (playerChoice == 'pedra') {
         if (computerChoice == 'pedra'){
             vencedor = 'empate'
             console.log(vencedor)
         }else if (computerChoice == papel){
             vencedor = 'computador'
             console.log(vencedor)
         }else if(computerChoice == tesoura){
                 vencedor = 'você venceu'
                 console.log(vencedor)
         }
     }
 
     computerChoice = (Math.random * 3)
     switch(computerChoice){
         case 0:
             computerChoice = 'pedra';
             break;
             case 1:
             computerChoice = 'papel';
             break;
             case 2:
             computerChoice = 'tesoura';
             break;
     }
    }
