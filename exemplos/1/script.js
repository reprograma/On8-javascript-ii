/* Primeira fase

------- 1. Crie uma Array com o nome de 4 colegas da reprograma! */

let alunas = ["ana clara", "marina", "fernanda", "luisa"]


//2. Usando um loop, faça uma iteração nessa array, dando console.log em todas as pessoas!
for(i=0;i<alunas.length;i++){
    console.log(alunas[i]);
}

//3. Escreva um comando que remova o _primeiro_ nome da array

alunas.shift();
//4. Escreva um comando que remova o _último_ nome da array
alunas.pop();

// 5. Escreva um comando que adicione o nome "Valentina" no começo da array
alunas.unshift("Valentina");

//6. Escreva um comando que adicione o seu nome no final da array
alunas.push("Julia Barbosa");

//7. Usando um loop, faça uma iteração por todo esse array e depois de dar console.log no _segundo_ nome, saia desse loop
for(i=1; i< alunas.length;i++){

    if(i > 1){
        break;
    }
    console.log(alunas[i]);

}

//8. Escreva um comando que faça uma cópia da array usando slice. Essa cópia NÃO DEVE incluir o _primeiro_ nem o _segundo_ nome
alunas.slice(2);

//9. Escreva um comando que indica o índice que o segundo nome está
alunas.indexOf("Fernanda");

//10. Escreva um comando que indica o índice que o nome "Juliana" está (deve retornar -1)

/*

------- 11. Vamos redefinir a variável "alunas" com o valor que ela começou. Usando o comando splice, remova o _quarto_ nome da array, adicione "elisa" e "flavia". Sua array deve ter esse resultado: "["ana clara", "marina", "elisa", "flavia", "luisa"]"

------- 12. Crie uma variável chamada comMarcela e concatene com a string "Karla"

------- 13. Guarde em uma variável o primeiro nome da array. Depois, sabendo que esse nome é composto, divida o mesmo em duas arrays.

/*