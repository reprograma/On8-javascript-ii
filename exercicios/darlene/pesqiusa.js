//1. Pesquisar 3 métodos de Array que não foram dados em sala de aula e criar 3 exemplos de manipulação de array diferentes com esses métodos. Use sua criatividade! 


// Array 1: O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

//exemplo 1

const array1 = [2, 4, 6, 6, 10, 12, 32, 124, 400]

const found = array1.find(Element => Element > 124)

console.log(found) // vai retornar 400

//exemplo 2
//Podemos usar o link para encontrar alguma informação expecífca em uma array e ele puxa todas as informações atreladas ao elemento que estamos solicitando

const listPeople = [
    {name: 'Camila', idade: 16},
    {name:'Geovana', idade: 15},
    {name: 'Ayka', idade: 18},
    {name: 'Camila', idade: 23}
];


const look = listPeople.find( information => information.name  === 'Camila' );

console.log(look)
//{name: "Camila", idade: 16}

//O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

//

function result (numbers){
    return numbers > 1;
}

[12, 5, 8, 1, 4].some(result)



//O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

var letters = ['a', 'b', 'c'];
var tellMe = letters.entries();

console.log(tellMe.next().value)