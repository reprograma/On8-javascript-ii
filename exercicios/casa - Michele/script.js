/*-1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 
*/
//---------------Método Join--------------

let arr=['tatu',3,1,2,'A']
let metodoJoin=arr.join('-')
console.log(metodoJoin)

//---------------Método Reverse--------------

let metodoReverse=arr.reverse()
console.log(metodoReverse)

//---------------Método Map--------------
let arr2=[9,3,5,1]
let metodoMap=arr2.map(function(itens){
    return itens*5
})
console.log(metodoMap)


/*-2. Pedra, papel e tesoura 👊🏻 🗒 ✂ 

![pedra papel tesoura](assets/../../../assets/pedrapapeltesoura.jpg)

* Crie um jogo onde você jogará contra o computador em pedra, papel e tesoura
##### funcionalidades
* Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
* Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar uma das possibilidades de jogada
* Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeado. Não deve haver vencedor se na jogada houver um empate: 

Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
Pedra x Papel 🗒 = Pedra perde, papel ganha
Pedra x Pedra 👊🏻 = Empate! */

//* Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer 

let inputEscolha=document.getElementById('playerChoice');
let inputBotao = document.querySelector('#getPlayerChoice');
let linhaWinner=document.getElementById('winner');

inputBotao.addEventListener('click', jogada);

let possibilidades=['pedra','papel','tesoura'];
let metodo=Math.floor(Math.random()*3);
let computerChoice=possibilidades[metodo];

function jogada(event){
    event.preventDefault();
    let escolha=inputEscolha.value
    let resultado=document.createElement('div');
    linhaWinner.appendChild(resultado);


if(escolha==='pedra' && computerChoice==='tesoura'){   
        linhaWinner.innerHTML='Você venceu! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
        linhaWinner.appendChild(resultado);
        linhaWinner.appendChild(resultado);   

}else if(escolha==='tesoura' && computerChoice==='pedra'){   
    linhaWinner.innerHTML='Computador ganhou! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);   

}
else if(escolha==='pedra' && computerChoice==='papel'){
  
    linhaWinner.innerHTML='Computador ganhou! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);

}else if(escolha==='papel' && computerChoice==='pedra'){
  
    linhaWinner.innerHTML='Você ganhou! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);

}
else if(escolha==='tesoura' && computerChoice==='papel'){
    linhaWinner.innerHTML='Você ganhou! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);

}else if(escolha==='papel' && computerChoice==='tesoura'){
    linhaWinner.innerHTML='Computador ganhou! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);
}
else if(escolha===computerChoice){
    linhaWinner.innerHTML='Empate! Jogada: você= '+escolha+' X '+'Computador= '+computerChoice;
    linhaWinner.appendChild(resultado);
    linhaWinner.appendChild(resultado);

}else if(escolha!=='pedra'||escolha!=='papel'||escolha!=='tesoura'){
    alert('Ops! Digite uma das opções dadas: pedra, papel ou tesoura')
}

}
