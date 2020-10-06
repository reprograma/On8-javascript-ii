/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.

*/

let nomesDoguinhos = ["Marley","Belinha","Thor","Xuxa","Negão"]
const quantidadeNomes = nomesDoguinhos.length

const titulo = document.getElementById('result')
titulo.textContent = 'O array de cachorros tem '+ quantidadeNomes + ' itens'

for(let i=0; i < quantidadeNomes; i++){
    const lista = document.getElementById('resultList')
    lista.innerHTML += `<li> ${nomesDoguinhos[i]}</li>`
}

// +=
// operador que faz com que cada vez que um item passe no loop ele seja incrementado

// textContent = Conteudo de texto => "string"
// innerHTML = Insere HTML => <h1></h2>


