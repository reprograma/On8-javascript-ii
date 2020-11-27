
getPlayerChoice.addEventListener("click", function () {

     const playerChoice = document.getElementById("playerChoice").value;
     const choices = ["pedra", "papel", "tesoura"];
        let winnerText = document.getElementById("winner");
   
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

      switch (playerChoice) {
      case choices[0]:
       
        if (computerChoice == playerChoice) {
          winnerText.innerHTML = "Empate! jogue novamente";
        } else if (
          computerChoice == choices[2] ||
          computerChoice == choices[3]
        ) {
        
          winnerText.innerHTML =
            `Você escolheu ${playerChoice} e ganhou! O computador escolheu ${computerChoice}`
        } else {
          winnerText.innerHTML =
            `O computador escolheu ${computerChoice} e ganhou! Você escolheu ${playerChoice}`
        }
        break;
      case choices[1]:
        
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
    
      default:
        alert(
          "Por favor verifique a ortografia e escreva uma das opções novamente."
        );
    }
  });

