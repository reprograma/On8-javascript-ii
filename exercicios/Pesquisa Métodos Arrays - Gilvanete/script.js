//Minha pesquisa de Métodos Arrays - Gilvanete

let arr1=[1, 2, 3, 4, 5];
//let arr2=['a', 'b', 'c'];
//let arr2=['6', '7', '8'];
let arr2=['s', 't', '8'];

// Concatenação -
let arrFinal=arr1.concat(arr2);

// Every - percorre todo o meu array e 
// todos os dados em busca de algo para verificação
// onde ele me retornar true or false
let everyx=arrFinal.every(
    function verifyElements(elem, ind, obj){
        return (typeof elem=='number');
    }
)
// Filter - vc filtra os elmentos que forem indicados no return
let filterx=arrFinal.filter(
    function verifyElements(elem, ind, obj){
        return (typeof elem=='string');
    }
)

// ForEach - vai percorrer todo o meu array
// e vai exibir os dados de acordo com o que quero na indicação data
// logo, posso filtrar os dados de acordo com minha necessidade
let data='';
let forEachx=arrFinal.forEach(
    function verifyElements(elem, ind, obj){
        //if(typeof elem=='string'){ 
            if(ind > 3){ 
            data+='ìndice '+ind+ ' : '+elem+ '\n';
         }
        
    }
)



// IndexOf - encontra a posição do meu objeto no meu array
let IndexOf=arrFinal.indexOf(4);
let IndexOf=arrFinal.indexOf('s');
// se eu colocar um valor que não existe:
let IndexOf=arrFinal.indexOf('p');
// ele vai retornar -1 no console

if(indexOfx== -1){
    alert('Esse dado não existe');
    // seria um tipo de validação que podemos fazer
    // Se colocar um valor existente - ele não apresenta nenhuma mensagem
    // se eu pesquisar '1'

    //let IndexOf=arrFinal.indexOf('1');

    // ele vai dizer q esse dado não existe
    // pq ele verifica tanto o dado quanto o tipo de dado
    // O número 1 é um dado inteiro
    // a partir do momento que eu coloco 'aspas' eu tenho uma string
    // por isso exibirá que esse dado não existe

}
 

console.log(indexOfx);
console.log(arrFinal);
//console.log(data);
//console.log(x);
