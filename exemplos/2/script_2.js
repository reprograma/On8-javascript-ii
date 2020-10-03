/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 

1. Mostre na tela a quantidade de variáveis do array
2. Mostre os nomes dos cachorros.


*/



let cachorros = ["Dakota", "Arizona", "Gloria", "Rex", "Bolinha"]
let tamanhoCachorros = cachorros.length;
let resultado = document.querySelector('.result')

resultado.textContent = `o array tem ${tamanhoCachorros} bichinhos`;

for (let i = 0; i < cachorros.length; i++) {
        let nomes = document.createElement('li');
        let nomeDoguinho = document.createTextNode(cachorros[i]);
        nomes.appendChild(nomeDoguinho);
        console.log(nomes)
        
    const listaDogs = document.getElementById("resultList")
    listaDogs.appendChild(nomes);
}








// let feedback = document.createElement('p');
// let messageFeedback = document.createTextNode(`Olá, seu e-mail ${email} foi cadastrado com sucesso`);
// feedback.appendChild(messageFeedback);
// input.value = '';

// let messageContainer = document.querySelector('.mensagem');
// messageContainer.appendChild(feedback);