//Uma possível solução:

//botão que aciona o 'gatilho' do jogo
getPlayerChoice.addEventListener("click", function () {

    //guarda o valor preenchido pelo usuário 
    const playerChoice = document.getElementById("playerChoice").value;
    //guarda as opções de jogada
    const choices = ["pedra", "papel", "tesoura"];
    //guarda o texto que anuncia o vencedor
    let winnerText = document.getElementById("winner");
    //cria o fator "aleatório" da escolha do computador
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //cria as condições e possibilidades
    switch (playerChoice) {
      case choices[0]:
        //se as opções forem iguais - ex: pedra x pedra 
        if (computerChoice == playerChoice) {
          winnerText.innerHTML = "Empate! jogue novamente";
        } else if (
          computerChoice == choices[2] ||
          computerChoice == choices[3]
        ) {
        //iterando o texto com a variável, de acordo com a opção
          winnerText.innerHTML =
            `Você escolheu ${playerChoice} e ganhou! O computador escolheu ${computerChoice}`
        } else {
          winnerText.innerHTML =
            `O computador escolheu ${computerChoice} e ganhou! Você escolheu ${playerChoice}`
        }
        break;
      case choices[1]:
        //se as opções forem iguais - ex: pedra x pedra 
        if (computerChoice == playerChoice) {
          document.getElementById("winner").innerHTML =
            "Empate! Jogue novamente";
        } else if (
          computerChoice == choices[0] ||
          computerChoice == choices[4]
        ) {
          winnerText.innerHTML =
        `Você escolheu ${playerChoice} e ganhou! O computador escolheu ${computerChoice}`
        } else {
          winnerText.innerHTML =

        `O computador escolheu ${computerChoice} e ganhou! Você escolheu ${playerChoice}`
        }
        break;
      case choices[2]:
        if (computerChoice == playerChoice) {
          document.getElementById("winner").innerHTML =
            "Empate! jogue novamente";
        } else if (
          computerChoice == choices[1] ||
          computerChoice == choices[3]
        ) {
          winnerText.innerHTML =

            `Você escolheu ${playerChoice} e ganhou! O computador escolheu ${computerChoice}`
        } else {
          winnerText.innerHTML =

        `O computador escolheu ${computerChoice} e ganhou! Você escolheu ${playerChoice}`
        }
    //cria um alerta padrão para verificar ortografia das opções
      default:
        alert(
          "Por favor verifique a ortografia e escreva uma das opções novamente."
        );
    }
  });

