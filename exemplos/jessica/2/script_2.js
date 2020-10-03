/* Segunda fase 

Hora de interagir com o DOM! Crie um array com no mínimo 5 nomes de cachorros (ou gatos, ou outro animal) 
*/
// 1. Mostre na tela a quantidade de variáveis do array
// 2. Mostre os nomes dos cachorros.

const doguinhos = ['apolo', 'bartolomeu', 'bethoveen', 'barbara', 'bella', 'bernardo', 'nico', 'lola', 'mico']
const tamanho = doguinhos.length;
const dogs = document.getElementById("result")
dogs.innerHTML = `<h1> o resultado do array é ${tamanho} </h1>` ;

const quantDogs = document.querySelector ('.result')

const nomeDogs = document.getElementById("resultList");
//nomeDogs.textContent = `${doguinhos}`

for (let i = 0; i < doguinhos.length; i++) {
    //console.log(doguinhos[i])
    //const element = doguinhos[i];
    nomeDogs.innerHTML += `<li> ${doguinhos[i]}</li>`
    
}

/* PASSO A PASSO 
a. criar um array
b. pegar o length da minha array
c. colocar no html o length da minha array no texto
d. colocar no html os nomes dos cachorros que estão na minha array

+= Operador loop do "innerHTML" no for length
nomeDogs.innerHTML = `<li> ${doguinhos[0]}</li>
nomeDogs.innerHTML = `<li> ${doguinhos[1]}</li>
nomeDogs.innerHTML = `<li> ${doguinhos[2]}</li>

ouuuu

nomeDogs.innerHTML += `<li> ${doguinhos[i]}</li>
*/