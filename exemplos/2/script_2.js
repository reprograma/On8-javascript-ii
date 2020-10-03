/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.

PASSO A PASSO

a. criar um array
b. pegar o length da minha área
c. colocar no html o length da minha array no texto
d. colocar no html os nomes dos cachorros que estão na minha array

*/
const cachorros = ["Lilo", "Bilira", "Yoda", "Brutos", "Chiquinho"]
const tamanhoArray = cachorros.length
const resultado = document.getElementById("result");
const listaDeCachorros = document.getElementById("resultList")

resultado.textContent = `o array de cachorros tem ${tamanhoArray} itens`;

    for(let i=0; i < cachorros.length; i++) {
        listaDeCachorros.innerHTML += `<li>${cachorros[i]}</li>`
    }

  

/*


let input = document.getElementById('h1');

/*

*/