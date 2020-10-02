#### Para casa 

1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 


//Método reverse():
const saboresSorvete = [ "chocolate", "morango", "ninho", "nutella", "ovomaltine"];
saboresSorvete.reverse() //vai retornar o array ao contrário: (5) ["ovomaltine", "nutella", "ninho", "morango", "chocolate"]

//Método map():
const payment = [ 20, 30, 56];
payment.map(number => number * 2); // (3) [40, 60, 112]

//Método includes():
const saboresSorvete = [ "chocolate", "morango", "ninho", "nutella", "ovomaltine"];
saboresSorvete.includes("ninho"); //true



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

* EXTRA: Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer 
* Dica: use "alert"

