//ANOTAÇÕES DURANTE APRESENTAÇÃO DO EXERCÍCIO EM TEMPO REAL

/* Primeira fase

------- 1. Crie uma Array com o nome de 4 colegas da reprograma! */

/*let alunas = ["ana clara", "marina", "fernanda", "luisa"]

alunas=[]

new Array ('ana clara', 'marina', 'fernanda', 'luisa')
/*
------- 2. Usando um loop, faça uma iteração nessa array, dando console.log em todas as pessoas!
*/
/*for (let i=0; i > alunas.lenght; i++){
    console.log(alunas)

}

/*
------- 3. Escreva um comando que remova o _primeiro_ nome da array
*/

/*alunas.shift(); //remove o primeiro da array
'ana clara'

/*
------- 4. Escreva um comando que remova o _último_ nome da array
*/
/*alunas.pop(); //remove o último da lista da array
'luisa'
/*
------- 5. Escreva um comando que adicione o nome "Valentina" no começo da array
*/

/*alunas.unshift('valentina'); //adiciona no inicio


/*
------- 6. Escreva um comando que adicione o seu nome no final da array
*/
/*alunas.push('bruna'); //adiciona no final da array

/*
------- 7. Usando um loop, faça uma iteração por todo esse array e depois de dar console.log no _segundo_ nome, saia desse loop
*/
/*for(let i=0; i > alunas.length; i++){

    if(i > 1)
    break;

    console.log(alunas[i]);
}

/*
------- 8. Escreva um comando que faça uma cópia da array usando slice. Essa cópia NÃO DEVE incluir o _primeiro_ nem o _segundo_ nome
*/
/*let mercado = ['banana', 'tomate','cebola', 'ceneoura', 'alface'];

mercado.slice(1, 5);


/*
------- 9. Escreva um comando que indica o índice que o segundo nome está
*/
/*alunas.indexOf('marina'); // retorna o índece de marina q eh segundo elemento
alunas.indexOf('fernanda');

/*
------- 10. Escreva um comando que indica o índice que o nome "Juliana" está (deve retornar -1)
*/
/*alunas.indexOf('juliana');
-1


/*
------- 11. Vamos redefinir a variável "alunas" com o valor que ela começou. Usando o comando splice, remova o _quarto_ nome da array, adicione "elisa" e "flavia". Sua array deve ter esse resultado: "["ana clara", "marina", "elisa", "flavia", "luisa"]"
*/
/*let alunas = ["ana clara", "marina", "fernanda", "luisa"]

alunas.splice('elisa', 'flavia');
[] // esse comando primeiro remove e depois adiciona
// remove e exclui na mesma porporção e na mesma posiçao
/*alunas.splice('marcia', 'fernanda');

alunas.splice('elisa', 'fernanda');

alunas.splice(2, 1, 'elisa', 'flavia');


/*
------- 12. Crie uma variável chamada comKarla e concatene com a string "Karla"
*/

/*let comKarla= alunas.concat('karla');// acrescenta mas não torna original
//é como criar um fork git clone e nova branch


/*
------- 13. Guarde em uma variável o primeiro nome da array. Depois, sabendo que esse nome é composto, divida o mesmo em duas arrays.
*/
/*let alunas = ["ana clara", "marina", "fernanda", "luisa"]

const primeiraAluna = alunas[0];

primeiraAluna.split(''); // split - divide um objeto na array

// trocando posições na array

//OBSERVAÇÃO *** split = como método de string = não é método de array




// ATUALIZANDO DE ACORDO COM ANOTAÇÕES DA AULA ORIGINAL
/* Primeira fase
------- 1. Crie uma Array com o nome de 4 colegas da reprograma! */

let alunas = ["ana clara", "marina", "fernanda", "luisa"]


/*
------- 2. Usando um loop, faça uma iteração nessa array, dando console.log em todas as pessoas! */

for(let i=0; i < alunas.length; i++) {  //incrementar (++) ou decrementar (--)
    console.log(alunas[i])
}

i=0 => 0 < 4? => 0 => "ana clara";
i=1 => 1 < 4? => 1 => "marina"; 
i=2 => 2 < 4? => 2 => "fernanda"; 
i=3 => 3 < 4? => 3 => "luisa";
i=4 => 4 < 4? => cabou! => exit  


/*
------- 3. Escreva um comando que remova o _primeiro_ nome da array */

alunas.shift();
"ana clara"

(3): ["marina", "fernanda", "luisa"]

/*
------- 4. Escreva um comando que remova o _último_ nome da array */

alunas.pop();
"luisa"

(3): ["ana clara", "marina", "fernanda"]

/*
------- 5. Escreva um comando que adicione o nome "Valentina" no começo da array */

alunas.unshift("valentina");
(5): ["valentina", "ana clara", "marina", "fernanda", "luisa"]

/*
------- 6. Escreva um comando que adicione o seu nome no final da array */

alunas.push("bruna"); 
(5): ["ana clara", "marina", "fernanda", "luisa", "bruna"]

/* 
------- 7. Usando um loop, faça uma iteração por todo esse array e depois de dar console.log no _segundo_ nome, saia desse loop */

for(let i=0; i < alunas.length; i++) {

    if(i > 1) {
        break;
    }
    console.log(alunas[i])
}

/*
------- 8. Escreva um comando que faça uma cópia da array usando slice. Essa cópia NÃO DEVE incluir o _primeiro_ nem o _segundo_ nome */

alunas.slice(2)
(2) ["fernanda", "luisa"]

/*
------- 9. Escreva um comando que indica o índice que o segundo nome está */

alunas.indexOf("marina")
1

/*
------- 10. Escreva um comando que indica o índice que o nome "Juliana" está (deve retornar -1) */

alunas.indexOf("juliana")
-1 


/*
------- 11. Vamos redefinir a variável "alunas" com o valor que ela começou. Usando o comando splice, remova o _quarto_ nome da array, adicione "elisa" e "flavia". Sua array deve ter esse */

alunas.splice(2, 1, "elisa", "flavia");
quem sai: (2) ["marina", "fernanda"]
como fica: (4) ["ana clara", "elisa", "flavia", "luisa"]



/*
------- 12. Crie uma variável chamada comMarcela e concatene com a string "Karla" */

let novaArrayComKarla = alunas.concat("Karla")
comKarla
(5) ["ana clara", "marina", "fernanda", "luisa", "Karla"]
0: "ana clara"
1: "marina"
2: "fernanda"
3: "luisa"
4: "Karla"
length: 5

/* NÃO É MÉTODO DE ARRAY
------- ****13. Guarde em uma variável o primeiro nome da array. Depois, sabendo que esse nome é composto, divida o mesmo em duas arrays */

const primeiraAluna = alunas[0]
"ana clara"

primeiraAluna.split(" ")


