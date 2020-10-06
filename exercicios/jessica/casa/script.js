/* MÉTODOS DE ARRAY 


// Método split()
// ele vai divirir um string em um array de strings
var nome = 'jessica-rayanne-guerra'.split('-')
console.log(nome)

// Método reduce() 
// Transforma os elementos do array em um único elemento
// no exemplo ele soma todos os números
const listaNumeros = [5, 2, 203];
const total = listaNumeros.reduce((total, currentElement) => total + currentElement);
console.log (total); 

//Método   Array.isArray ()      
// O Array.isArray retorna se a variável é um array ou não.
//Se for um array seu resultado será (true) se não for será (false)

const series = ['Revenge', 'Supernatural', 'Gossip Girl', 'Upload'];
var resultado = Array.isArray (series);
console.log (resultado);

*/




const jogadas = ['Pedra', 'Papel', 'Tesoura'] 
let botao = document.getElementById('getPlayerChoice');
const vencedor = document.getElementById('winner');
const computer = aleatoriedade();

let valido = false;

function aleatoriedade(){
    
    const numeros =Math.floor(Math.random() * 3);
     return jogadas[numeros];
};

botao.addEventListener('click', function (jogo) {
    const player = document.getElementById('playerChoice').value;

    if (player === jogadas[0]){
        valido = true; 
    }
    else if (player === jogadas[1]) {
        valido = true;
    } 
    else if (player === jogadas[2]) { 
        valido = true;
    }

    if (valido === true) {

        if (player === computer) {
        return alert(`Empate! Você e o Computador escolheram ${player}`);
    

        } else if (player === jogadas[0] && computer === jogadas[2]) {
                
            return alert(`Você ganhou. Você = ${player} e Computador = ${computer}`);

        } else if (player === jogadas[1] && computer === jogadas[0]) {
            
            return alert(`Você ganhou. Você = ${player} e Computador = ${computer}`);

        } else if (player === jogadas[2] && computer === jogadas[1]) {
            
            return alert(`Você ganhou. Você = ${player} e Computador = ${computer}`);

        } else if (player === jogadas[1] && computer === jogadas[2]){

            return alert(`Você perdeu. Você = ${player} e Computador = ${computer}`);

        } else if (player === jogadas[0] && computer === jogadas[1]){

            return alert(`Você perdeu. Você = ${player} e Computador = ${computer}`);

        } else if (player === jogadas[2] && computer === jogadas[0]){

            return alert(`Você perdeu. Você = ${player} e Computador = ${computer}`);
    
        } 
    } else {

        return alert('Digite "Pedra" ou "Papel" ou "Tesoura"');

    }   
});
