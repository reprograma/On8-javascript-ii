/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.

*/



let pets = ['maya','mino','sahakira','blackwhat','teimosinho']

pets.length 

const resultado = documento.getElementbyid('result')

const cachorros = ["Dakota", "Arizona", "Gloria", "Rex", "Bolinha"]
const tamanhoArray = cachorros.length
const resultado = document.getElementById("result");
const listaDeCachorros = document.getElementById("resultList")

resultado.textContent = `o array de cachorros tem ${tamanhoArray} itens`;

    for(let i=0; i < cachorros.length; i++) {
        listaDeCachorros.innerHTML += `<li>${cachorros[i]}</li>`