/* 1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 
Outros métodos de array: 
*/

/* .every()
Serve para testarmos se todos os elementos do Array passam em uma condição.

Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true.
*/

let numbers = ['1', '3', '6', '9'];
let result = numbers.every ((e) => e > 10);
console.log(result);

/* .some()
O .some() faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
*/

let numbers = ['2', '4', '8', '12'];
let result = numbers.some ((e) => e > 10);
console.log(result);

/* .reduce()
Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento.
O exemplo mais clássico é somar todos os valores de um Array.
*/

let numbers = ['2', '4', '8', '12'];
let total = numbers.reduce ((total, currentElement) => total + currentElement);
console.log(result);

