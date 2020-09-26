/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.


PASSO A PASSO
a. Criar uma array - OK 
b. Pegar o length da minha array - OK
c. Colocar no html o length da minha array no texto 
d. Colocar no html os nomes dos cachorros que estão na minha array


*/

const cachorros = ["Dakota", "Arizona", "Gloria", "Rex", "Bolinha"]
const tamanhoArray = cachorros.length
const resultado = document.getElementById("result");
const listaDeCachorros = document.getElementById("resultList")

resultado.textContent = `o array de cachorros tem ${tamanhoArray} itens`;

    for(let i=0; i < cachorros.length; i++) {
        listaDeCachorros.innerHTML += `<li>${cachorros[i]}</li>`
    }


// +=
// operador que faz com que cada vez que um item passe no loop ele seja incrementado

// textContent = Conteudo de texto => "string"
// innerHTML = Insere HTML => <h1></h2>


