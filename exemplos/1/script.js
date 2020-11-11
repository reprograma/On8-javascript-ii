// Primeira fase

// ------- 1. Crie uma Array com o nome de 4 colegas da reprograma! 

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];


// ------- 2. Usando um loop, faça uma iteração nessa array, dando console.log em todas as pessoas! 

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// for(let i=0; i < alunas.length; i++) {
//     console.log(alunas[i]);
// }

// ------- 3. Escreva um comando que remova o _primeiro_ nome da array

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// alunas.shift(); //Tira o primero elemento do array e retorna ele, nesse caso era "ana clara". A array ficará apenas com três elementos ["marina", "fernanda", "luisa"], e marina passa a ser o elemento 0 agora


// ------- 4. Escreva um comando que remova o _último_ nome da array

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// alunas.pop(); //Tira o último elemento do array e retorna ele, nesse caso era "luisa". A array ficará apenas com três elementos ["ana clara", "marina", "fernanda"], e fernanda passa a ser o elemento último agora

// ------- 5. Escreva um comando que adicione o nome "Valentina" no começo da array

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// alunas.unshift("valentina"); //ele precisa do paramametro para que ele insira. Nesse caso, valentina é a primeira da lista. Ele sozinho sem paramnetro só informa a quantidade de elementos que exitem e aguarda o parametro

// ------- 6. Escreva um comando que adicione o seu nome no final da array

// let alunas = ["valentina", "ana clara", "marina", "fernanda", "luisa"];

// alunas.push("bruna"); //ele precisa do paramametro para que ele insira. Nesse caso, bruna é a última da lista. Ele sozinho sem paramnetro só informa a quantidade de elementos que exitem e aguarda o parametro

// ------- 7. Usando um loop, faça uma iteração por todo esse array e depois de dar console.log no _segundo_ nome, saia desse loop

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// for (let i = 0; i < alunas.length; i++) {

//     if(i > 1){ //Teve que ser um pois marina é o segundo elemento, mas está na posição 1,já que a primeira é 0
//         break;
//     }
//     console.log(alunas[i]); //Nesse caso ele vai mostrar ana clara e marina, e em seguida ele para
// }

// ------- 8. Escreva um comando que faça uma cópia da array usando slice. Essa cópia NÃO DEVE incluir o _primeiro_ nem o _segundo_ nome

// EXEMPLO A SEGUIR------------------------------------------------

// let mercado = ["banana", "tomate", "cebola", "cenoura", "alface", "alho poró"];
// mercado.slice(2); // Ele retirou as posições 0 e 1, então sobra: ["cebola", "cenoura", "alface", "alho poró"].
// mercado.slice(1, 3); // Ele retirou as posições 0, incluiu o 1 e 2, excluiu o restante, então sobra: ["tomate", "cebola"]. O primeiro paramentro passado é inclusivo e o último é exclusivo.

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];
// alunas.slice(2); //Retorna: ["fernanda", "luisa"];

// ------- 9. Escreva um comando que indica o índice que o segundo nome está

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];
// alunas.indexOf("marina"); //Ele retorna que marina está no indice 1

// ------- 10. Escreva um comando que indica o índice que o nome "Juliana" está (deve retornar -1)

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];
// alunas.indexOf("juliana"); //Ele retorna que marina está no indice -1, ou seja, esse elemento não existe (já que o indice começa no 0)

// ------- 11. Vamos redefinir a variável "alunas" com o valor que ela começou. Usando o comando splice, remova o _quarto_ nome da array, adicione "elisa" e "flavia". Sua array deve ter esse resultado: ["ana clara", "elisa", "flavia", "luisa"]

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];
// alunas.splice(1, 2,"elisa", "flavia"); //Ele vai substituir esses nomes justamente nas posições passadas. Ele nesse caso vai  retornar ["ana clara", "elisa", "flavia", "luisa"], onde ele tirou marina(1) e fernanda(2) e colocou elisa(1), flavia(2)


// ------- 12. Crie uma variável chamada comKarla e concatene com a string "Karla"

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// alunas.concat("Karla"); //Ele mostra ["ana clara", "marina", "fernanda", "luisa", "karla"]. Porém, se vc chama o array novamente o array não foi modificado, aparecendo como era anteriormente.

// const comKarla = alunas.concat ("karla"); //Ele agora vai mostrar ["ana clara", "marina", "fernanda", "luisa", "karla"]. Porém, para ver karla na lista de fato, deve chamar a variavel --comKarla-- e não a variavel --alunas--, pois a array original se mantém intacta

// ------- 13. Guarde em uma variável o primeiro nome da array. Depois, sabendo que esse nome é composto, divida o mesmo em duas arrays.

// let alunas = ["ana clara", "marina", "fernanda", "luisa"];

// let primeiraAluna = alunas[0];
// console.log(primeiraAluna); 

// primeiraAluna.split(" "); //Split (é um método de string e não de array) serve para dar uma separação no objeto string em duas strings (nesse caso nome ana clara é formada por duas palavras). Ele vai retornar ["ana", "clara"].
// primeiraAluna.split(""); //Ele vai retornar ["a", "n", "a", " ", "c" "l", "a", "r", "a"].
// primeiraAluna.split(" ", 1); //Ele vai retornar ["ana"]. Pois ele só guardou a primeira parte (parametro 1)









// EXEMPLO DE COMO DEVE SER UTILIZADO O SPLIT!!!-------------------------------

// let cliente = ["ludmila pereira de oliveira"];
// cliente.split(" ", 2); //Ele não vai funcionar porque não é método de array

// let cliente = "ludmila pereira de oliveira";
// cliente.split(" "); // Vai funcionar agora pois estamos aplicando em uma string


//  OBSERVAÇÃO DE UMA DÚVIDA DE DARLENE------------------------

// Pergunta: Se eu conseguiria imprimir a solução for sem o nome ana clara, uma vez que com o if

// ( i >1) imprimiria o elemento 0 e 1.
// Solução:
// let alunas = ["ana clara", "marina", "fernanda", "luisa"]

// for( let i = 0; alunas.length; i++){
//     if(i > 1 || alunas[i] == 'ana clara'){
//         continue
//     }
//     console.log(alunas[i])
// }  