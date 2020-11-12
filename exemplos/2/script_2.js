/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.


*/

let nomesPets = ["Amora", "Ameixa", "Preta", "Clara", "Maya", "Jack", "Bubby", "Paçoca"];

let quantidadePets = nomesPets.length;

let titulo = document.getElementById('result');
titulo.textContent = `O array tem ${quantidadePets} de itens. Os pets são:`;

for (let i = 0; i < nomesPets.length; i++) {

    let lista = document.getElementById('resultList');
    // // textContent não entende tags no meio do texto
    // lista.textContent = `${nomesPets}` // Ele iria mostrar o texto um ao lado do outro, mas não em forma de lista. E para mostrar todos, teria que tirar o [i]

    // ou innerHTML que entende tags
    lista.innerHTML += `<li>${nomesPets[i]}</li>` // O operador += faz ele criar ele mesmo recebendo mais outro, tipo um loop. Ele ao contrario do de cima, consegue deixar em lista por aceitar as tags, e para imprimir todos, recebe o [i]
}

