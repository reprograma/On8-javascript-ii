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