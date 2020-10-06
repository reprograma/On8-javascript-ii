/*1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 


/*2. Pedra, papel e tesoura 👊🏻 🗒 ✂ 

![pedra papel tesoura](assets/../../../assets/pedrapapeltesoura.jpg)

* Crie um jogo onde você jogará contra o computador em pedra, papel e tesoura
  
##### funcionalidades
* Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
* Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar uma das possibilidades de jogada
- Dica: ````Math.random()````
* Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeado. Não deve haver vencedor se na jogada houver um empate: 

Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
Pedra x Papel 🗒 = Pedra perde, papel ganha
Pedra x Pedra 👊🏻 = Empate!  

- Dica: use ```if/else/else if``` ou ```switch/case/break```

* Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer */


/* === RESOLUÇÃO === */

// 1. 3 métodos de Array

/*=== MÉTODO INCLUDES (DETERMINA SE UMA ARRAY CONTÉM UM ELEMENTO E RETORNO TRUE OU FALSE) ===*/

/*const nomes = ["Leandro", "Pedro", "Karla", "Jocelim"]
console.log(nomes.includes("mariana"))*/ 

/*=== MÉTODO TRIM  (REMOVE OS ESPAÇOS EM BRANCO NO INÍCIO OU FINAL)=== */

/* const nome = "     Hellen Catarina      "
resultado = nome.trim();

console.log(nome.trim()); */


/*=== MÉTODO SORT (INVERTE A ORDEM) === */

const nomes = ['Karla', 'Marina', 'Hellen', 'Jocelim', 'Leandro', 'Pedro']
nomes.sort();

 console.log(nomes)



 //2. Papel, Pedra e Tesoura
 
/*mensagem = prompt("Digite uma opção");

const computerChoice = Math.floor(Math.random()* 3);
    botao.addEventListener("click", (let, computerChoice = alert("Você escolhe pedra, papel ou tesoura?")) => {
         if (computerChoice == "pedra"){
        if (playerChoice == "pedra"){
            winner = "empate"
            console.log(winner)            
        } else if(playerChoice == "papel"){
            winner = "computer"
            console.log(winner)
        } else(playerChoice == "tesoura")
            winner = "você ganhou"
            console.log(winner)
        }

    if (playerChoice == "pedra"){
        if (computerChoice == "pedra"){
            winner = "empate"
            console.log(winner)
        } else if(computerChoice == "papel"){
            winner = "computer"
            console.log(winner)
        } else(computerChoice == "tesoura")
            winner = "você ganhou"
            console.log(winner)
        }
    
    })*/