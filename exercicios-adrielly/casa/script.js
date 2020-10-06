//MÉTODO JOIN

// O método join() lista os elementos de um array e mostra em formato de String

// const vetor = ['adrielly', 15, 300, 'silva'];
// vetor = vetor.join('-');
// console.log(vetor);


//----------------------------------------------------------------------//

//MÉTODO reduce()

//o método reduce() cria um acumulador ou reduz o array a um valor único utilizando uma função que cria um valor único.

// const vetor = [10,26,14,8];
// const soma = vetor.reduce((total, valor) => total + valor, 0);
// console.log(soma);


//---------------------------------------------------------------------//


//MÉTODO map()

//o método map() cria um novo array e executa uma função sobre cada um dos items do array fonte.
// const vetor = [5,10,15,20];
// const newVetor = vetor.map(n => n * 5);
// console.log(newVetor) 



//---------------------------------------------------------------------//

//EXERCÍCIO PEDRA PAPEL E TESOURA

var playerChoice = document.getElementById("playerChoice");
const button = document.getElementById("getPlayerChoice");
const winner = document.getElementById("winner");

const array = ["pedra","papel","tesoura"];


function analiseJogadas(playerChoice,computerChoice){

    let ret = "";    
    if(playerChoice == "pedra" && computerChoice == "pedra"){
        ret = `<p> Empate. </p>`
        
        }
        
        else if(playerChoice == "pedra" && computerChoice == "papel"){
            ret = `<p> Computador venceu. </p>`
            
        }
        
        else if(playerChoice == "pedra" && computerChoice == "tesoura"){
            
            ret = `<p> Você venceu! </p>`
        }
        
        else if(playerChoice == "papel" && computerChoice == "pedra"){
          
            ret = `<p> Você venceu! </p>`
        }
        else if(playerChoice == "papel" && computerChoice == "papel"){
           
            ret = `<p> Empate! </p>`
        }
        
        else if(playerChoice == "papel" && computerChoice == "tesoura"){
           
            ret = `<p> Computador venceu! </p>`
        }
        else if(playerChoice == "tesoura" && computerChoice == "pedra"){
           
            ret = `<p> Computador venceu! </p>`
        }
        else if(playerChoice == "tesoura" && computerChoice == "papel"){
           
            ret = `<p> Você venceu! </p>`
        }
        else if(playerChoice == "tesoura" && computerChoice == "tesoura"){
           
            ret = `<p> Empate! </p>`
        }

        else{
            
            alert("Digite a palavra corretamente! ")
            ret = `<p> Digite corretamente! </p>`
        }
        
        winner.innerHTML = ret;
}

function random(n) {
    if(n>0 && n<20){
        return array[0];
    }
    else if(n>20 && n<30){
        return array[1];
    }
    else {
        return array[2];
    }

}



button.addEventListener("click", function(){

    var computerChoice = Math.floor(Math.random() * 30 );

    console.log(analiseJogadas(playerChoice.value, random(computerChoice)))
    playerChoice.value = "";
    

    
});

