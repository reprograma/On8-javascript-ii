/*
1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade!

-----Método Reverse (inverte a ordem dos elementos)-----
  let numeros = [1 , 2, 3]
   numeros.reverse()


/*------Método map(função de transformação)--------*/
let numeros = [1, 2, 3] 
let novosNumeros = numeros.map(item => item * 10)// paraq eu multiplicar cada número por 10
console.log(novosNumeros); // logo ficará [10, 20, 30]


/*------Método join(une vários elementos de uma array,tornando-os string)--------*/
let numeros = [10, 20, 30]
numeros.join(','); //logo com esse parametro ficará:"10,20,30"




//exercio do jogo pedra, papel, tesoura

let possibilidades = ["pedra", "papel", "tesoura"];
let computerChoice = possibilidades
let input = document.querySelector('#playerChoiceBox');
let button = document.querySelector('.button');

for(let i=0; <possibilidades.length; i++){
    console.log(possibilidades[i]);
}
 let random = Math.floor(Match.random() * 3);
console.log(random);


button.addEventListener('click', function (event) {
    event.preventDefault();
    let possibilidades = input.value;
}

/*depois me embananei e não consegui evoluir, a partir daqui, entendi tudo na aula, mas no momento de montar, me complico, e ai vem as outras atividades atreladas, não consegui pensar...entrei nos plantões de dúvidas, verifiquei opniões com outras colegas, mas quero entender o que estou fazendo.Então fui até onde eu pude e o tempo disponível me permitiu ir. Desculpas ...futuramente me empenharei e estudadarei mais, espero que sem contratempos :(
    
    Obrigada*/
