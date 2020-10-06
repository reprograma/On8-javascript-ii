// * Crie um jogo onde você jogará contra o computador em pedra, papel e tesoura

// ##### funcionalidades
// * Deve guardar as possibilidades de jogada (Adivinha aonde? isso mesmo, numa array!) 
// * Deve existir uma variável "computerChoice" que de forma aleatória consegue retornar uma das possibilidades de jogada
// - Dica: ```Math.random()```
// * Deve existir uma lógica onde cada jogada é analisada e um vencedor é nomeInputado. Não deve haver vencedor se na jogada houver um empate: 

// Pedra x Tesoura ✂ = Pedra ganha, tesoura perde
// Pedra x Papel 🗒 = Pedra perde, papel ganha
// Pedra x Pedra 👊🏻 = Empate!  

// - Dica: use ```if/else/else if``` ou ```switch/case/break```

// * EXTRA: Deixe o usuário saber quando ele não escrever as palavras corretamente! Crie um alerta de feedback para ele saber o que fazer 
// * Dica: use ```alert```

let nomeInput = document.getElementById('nome');
let legenda = document.querySelector('.jogadorLegenda');
let fotoComputador = document.querySelector('.computadorLegenda')

const img1 = document.getElementById('imgJogador')
const img2 = document.getElementById('imgComputador')

const div = document.querySelector('.jogador')
let aviso = document.getElementById('aviso')
let escolha = document.getElementById('escolha')

let computerChoice = ["pedra", "papel", "tesoura"]

const botao = document.getElementById('botao')
botao.addEventListener('click', play)

function play(event) {
    event.preventDefault();
    let escolhaComputador = Math.floor(Math.random() * computerChoice.length);
    console.log(escolhaComputador)

    let nomeJogador = nomeInput.value;
    let escolhaJogador = escolha.value;

    if (nomeJogador == undefined || escolhaJogador == '') {
        aviso.textContent = 'Preencha os campos!'
        aviso.style.color = 'red'
    }

    else if (escolhaJogador != 'pedra' && escolhaJogador != 'papel' && escolhaJogador != 'tesoura') {
        aviso.innerHTML = `Escreva uma das palavras a seguir: "<b>pedra</b>", "<b>papel</b>" ou "<b>tesoura</b>".`;
        aviso.style.color = 'red';
    }

    if(escolhaJogador == 'pedra') {
        img1.classList.add('imgdisplay');
        legenda.innerHTML = `<img src="img/pedra_jogador.svg"> ${nomeJogador}`;
    }
    if(escolhaJogador == 'papel'){
        img1.classList.add('imgdisplay');
        legenda.innerHTML = `<img src="img/papel_jogador.svg"> ${nomeJogador}`;
    }
    if(escolhaJogador == 'tesoura'){
        img1.classList.add('imgdisplay');
        legenda.innerHTML = `<img src="img/tesoura_jogador.svg"> ${nomeJogador}`;
    }
    if(escolhaComputador == 0){
        img2.classList.add('imgdisplay');
        fotoComputador.innerHTML = `<img src="img/pedra_computador.svg"> COMPUTADOR`;
    }
    if(escolhaComputador == 1){
        img2.classList.add('imgdisplay');
        fotoComputador.innerHTML = `<img src="img/papel_computador.svg"> COMPUTADOR`;
    }
    if(escolhaComputador == 2){
        img2.classList.add('imgdisplay');
        fotoComputador.innerHTML = `<img src="img/tesoura_computador.svg"> COMPUTADOR`;
    }

    if ((escolhaComputador == 0 && escolhaJogador =="pedra") ||
     (escolhaComputador == 1 && escolhaJogador =="papel") ||
     (escolhaComputador == 2 && escolhaJogador =="tesoura")) {
        aviso.innerHTML = `DEU EMPATEEEE!`
        aviso.style.color ='#bd62db';
    }

    if ((escolhaComputador == 0 && escolhaJogador =="papel") ||
     (escolhaComputador == 1 && escolhaJogador =="tesoura") ||
     (escolhaComputador == 2 && escolhaJogador =="pedra")) {
        aviso.innerHTML = `VOCÊ GANHOUUUUUUUUU`
        aviso.style.color ='#bd62db';
    }

    if ((escolhaComputador == 1 && escolhaJogador =="pedra") ||
    (escolhaComputador == 2 && escolhaJogador =="papel") ||
    (escolhaComputador == 0 && escolhaJogador =="tesoura")) {
       aviso.innerHTML = `TU PERDEUUUUhehehe`
       aviso.style.color ='#bd62db';
   }

 
}