//PRIMEIRO QUESITO

//MÉTODO JOIN - ESTE MÉTODO JUNTA OU SEPARA OS ELEMENTOS DA ARRAY. SE NÃO HOUVER NENHUM CARACTER, OS ELEMENTOS DA ARRAY SERÃO JUNTADOS E 
//SE HOUVER ALGUM CARACTER(,) OU (-), OS ELEMENTOS DA STRING SERÁ SEPARADO POR ELE.

/*const array = ['água', 'fogo', 'ar', 'terra']
console.log(array.join('')); // SAÍDA: águafogoarterra
console.log(array.join()); // SAÍDA: água,fogo,ar,terra
console.log(array.join('-')); // SAÍDA: água-fogo-ar-terra*/

//MÉTODO FILTER - ESTE MÉTODO FILTRA OS ELEMENTOS DA ARRAY

/*function filtro(value){
    return value >= 10;
}

const filtrado = ['10', '24', '89', '2', '35', '6']. filter(filtro);
console.log(filtrado) // SAÍDA: (4)  ['10', '24', '89', '35']
*/


//MÉTODO FILTER - ESTE MÉTODO TESTA SE TODOS OS ELEMENTOS DA ARRAY ATENDEM A CONDIÇÃO.
/*
function tester(element){
    return element >= 10;
}
const testando = ['10', '24', '89', '2', '35', '6'].every(tester)
const test = ['5', '4', '76', '22', '52'].every(tester)
const testa = ['1155', '48', '76', '22', '52'].every(tester)
console.log(testando) // SAÍDA: FALSE (POR QUE NEM TODOS SÃO MAIORES QUE 10)
console.log(test) // SAÍDA: FALSE (POR QUE NEM TODOS SÃO MAIORES QUE 10)
console.log(testa) // SAÍDA: TRUE (POR QUE TODOS OS ELEMENTOS SÃO MAIORES QUE 10)
*/


//SEGUNDO QUESITO - JOGO


let computerChoice = ["pedra", "papel", "tesoura"]
const getPlayerChoice = document.getElementById("getPlayerChoice")
//let playerChoice = possibilidadesArray
let inputado = playerChoice.value 

let resultado = document.getElementById('winner')

playerChoice.value
getPlayerChoice.addEventListener("click", function(event) {
   computerChoice = Math.floor(Math.random() * 3)
    event.preventDefault()
   

if (playerChoice.value == 'pedra') {
    if(computerChoice == [0]) {
        resultado.innerHTML = `O resultado deu empate`
    }
else if(computerChoice == [1]) {
    resultado.innerHTML = `O computador venceu`
}
else if (computerChoice == [2]) {
    resultado.innerHTML = `Você venceu! Uhuuu`
}
}


if (playerChoice.value == 'papel') {
    if(computerChoice == [0]) {
        resultado.innerHTML = `Você venceu! Uhuuuu`
    }
else if(computerChoice == [1]) {
    resultado.innerHTML = `O resultado deu empate`
}
else if (computerChoice == [2]) {
    resultado.innerHTML = `O computador venceu`
}
}

if (playerChoice.value == 'tesoura') {
    if(computerChoice == [0]) {
        resultado.innerHTML = `O computador venceu`
    }
else if(computerChoice == [1]) {
    resultado.innerHTML = `Você venceu! uhuuuu`
}
else if (computerChoice == [2]) {
    resultado.innerHTML = `O resultado deu empate.`
}
}
})



