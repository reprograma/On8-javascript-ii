/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.

PASSO A PASSO

a. Criar uma array
b. Pegar o lenght da minha array
c. Colocar no html o lenght da minha array no texto
d. Colocar no html os nomes dos cachorros que estão na minha array
*/

}

const cachorros = ["Dakota", "Arizona", "Gloria", "Rex", "Bolinha"]
const tamanhoArray = cachorros.length
const resultado = document.getElementById("result");
const listaDeCachorros = document.getElementById("resultList")

resultado.textContent = `o array de cachorros tem ${tamanhoArray} itens`;
//ou innerHTML
    for(let i=0; i < cachorros.length; i++) {
//console.log(cachorros[i])

    listaDeCachorros.innerHTML += `<li>${cachorros[i]}</li>`
    }
