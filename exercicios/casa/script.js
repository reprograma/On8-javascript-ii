let computerChoice = ['pedra', 'papel', 'tesoura']; 


let btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    let input = document.querySelector('.input');

        let jogadaComputador = computerChoice[Math.floor(Math.random() * 3)];

        if (input.value == "pedra" && input.value == jogadaComputador) {
            alert(`O computador jogou ${jogadaComputador}. Deu empate!`)

        } else if (input.value == "papel" && input.value == jogadaComputador) {
            alert(`O computador jogou ${jogadaComputador}. Deu empate!`)
        
        } else if (input.value == "tesoura" && input.value == jogadaComputador) {
            alert(`O computador jogou ${jogadaComputador}. Deu empate!`)
        
        } else if (input.value == "pedra" && jogadaComputador == "papel") {
            alert(`O computador jogou ${jogadaComputador}. Vc perdeu`)
        
        } else if (input.value == "papel" && jogadaComputador == "tesoura") {
            alert(`O computador jogou ${jogadaComputador}. Vc perdeu`)
        
        } else if(input.value == "tesoura" && jogadaComputador == "pedra") {
            alert(`O computador jogou ${jogadaComputador}. Vc perdeu`)
        
        } else if (input.value == "pedra" && jogadaComputador == "tesoura") {
            alert(`O computador jogou ${jogadaComputador}. Vc venceu`)
        
        } else if (input.value == "papel" && jogadaComputador == "pedra") {
            alert(`O computador jogou ${jogadaComputador}. Vc venceu`)
        
        } else if (input.value == "tesoura" && jogadaComputador == "papel") {
            alert(`O computador jogou ${jogadaComputador}. Vc venceu`)
        
        } 

})
