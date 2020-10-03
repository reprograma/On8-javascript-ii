## JAVASCRIPT II - Arrays

### Agenda 
26.09 
- O que é array?
- Propriedades e métodos de Array
- Manipulando arrays
- Revisão de efeitos básicos do Javascript
- Exemplos, exercícios e desafio para casa \o/ 
  - [Dontpad da aula](http://dontpad.com/reprograma-js2-arrays)

30.09
- Resolução do desafio
- Revisão dos principais conceitos
- Dúvidas, exemplos e próximos passos
  - [Dontpad para dúvidas](http://dontpad.com/reprograma-js2-arrays-duvidas ) 




---

### Arrays

Array é um tipo de variável que engloba uma lista de elementos. Normalmente é utilizada para agrupar variáveis que tem relação entre si.

Ao invés de declarar três variáveis diferentes, você pode declarar um array de variáveis:

```js
let sanduicheQueijo = "Queijo";
let sanduichePresunto = "Rosbife";
let sanduicheVegetariano = "Vegetariano";
```

```js
let sanduiches = ["Queijo", "Presunto", "Vegetariano"];
```

Você pode acessar cada elemento através da sua posição em um array:

```js
sanduiches[0]; // retorna a primeira posição do array "Queijo"
```

![arrays](assets/array.png)

___


### Length

É uma propriedade de Arrays que mostra o número de elementos contidos na mesma. Ou seja, mostra a quantidade de elementos dessa array

Exemplo:
```js
const roupas = ['tênis', 'camiseta', 'meia', 'blusa'];


console.log(roupas.length); // 4
```

Podemos usa-lo também para pegar o **último** item de uma array:

```js
const roupas = ['tênis', 'camiseta', 'meia', 'blusa'];


console.log(roupas[roupas.length - 1]); // 'blusa'
```

Os Arrays podem conter vários tipos de dados:

```js
   const vogais = 'aiueo'
   const misturado = ['1', 2, 'três', false, vogais, 5.6];

   console.log(misturado) // logs ["1", 2, "três", false, "abc", 5.6]
```


```js
sanduiches.length; // retorna 3, a quantidade de variáveis dentro do array
```

```js
sanduiches.forEach(function(item, index) {
  console.log(item, index);
  // Queijo 0
  // Rosbife 1
  // Vegetariano 2
});
```


Em javascript as posições sempre começam em 0. 
Pense em um esquema de elevador, onde:
0 => térreo => primeiro nível de um prédio

___

### Iterando por uma Array

```js
const arrayNomes = ['bruna', 'marisa', 'barbara', 'regina']

for (let i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i])
}   

logs:
bruna
marisa
barbara
regina

```

### Principais métodos de Array

> *Você não saberá que existe um método de array até usá-lo — Bruna Gil*
> 

* push( )
* pop( )
* slice( )
* splice( )
* concat( ) 
* includes( )
* shift( )
* unshift( )
* indexOf( )
* typeOf( )
* trim( )
* reverse( )

### Referências:
- [MDN - Arrays JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Arrays em Javascript](https://www.devmedia.com.br/javascript-arrays/4079)
- [Arrays in Javascript - INGLÊS](https://medium.com/swlh/arrays-in-javascript-e64b873ad801)

##### Videos
- MasterClass Manipulação do DOM com mais ou menos 1h de duração [rocketseat](https://www.youtube.com/watch?v=UftSB4DaRU4&ab_channel=Rocketseat)
- Introdução ao DOM [Curso em Vídeo](https://www.youtube.com/watch?v=WWZX8RWLxIk&ab_channel=CursoemV%C3%ADdeo): *ps recomendo todos os vídeos dessa playlist sobre javascript!*
- Arrays: [Curso grátis da Trybe](https://www.youtube.com/watch?v=defBuY0nLrc)



