/*1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de
 manipulação de array diferentes com esses métodos. Use sua criatividade!*/
/*1º método*/
 const professores = ["João", "Fernando", "Luís"];
 console.log (professores.join(' e '));

 /*2º método*/
var cores = ["azul", "vermelho", "amarelo"];
cores.sort ()

 /*3º método*/
var criancas = ['Julia', 'Fernanda', 'Patricia'];
criacas.reverse(); 

console.log(criancas);

/*2. Pedra, papel e tesoura 👊🏻 🗒 ✂
Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
* Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar
 uma das possibilidades de jogada
 Dica: Math.random()
* Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeado.
 Não deve haver vencedor se na jogada houver um empate: 

Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
Pedra x Papel 🗒 = Pedra perde, papel ganha
Pedra x Pedra 👊🏻 = Empate!  

- Dica: use ```if/else/else if``` ou ```switch/case/break```

* Extra: Deixe o usuário saber quando ele não escrever as palavras corretamente! 
Crie um alerta de feedback para ele saber o que fazer
Dica: use 'alert'
*/


const jogadas = ["Pedra", "Papel", "Tesoura"];

function jogadaAleatoria(){
    const pegarIndex = Math.floor(Math.random()*jogadas.length);
    const computerChoice = jogadas[pegarIndex];
    console.log(computerChoice)
}
jogadaAleatoria()







    
