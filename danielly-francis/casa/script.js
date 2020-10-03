  
  
  // possibilidades de jogada
  const possibilidadeJogada = ["pedra", "papel", "tesoura"];

  const userChoice 
  
  // escolhas do computador (aleatório)
  const computerChoice = Math.floor(Math.random (possibilidadeJogada) * 3);
   
  // lógica
  if (computerChoice == [0]) {
      computerChoice = "Pedra"
  }
  if (computerChoice == [1]) {
      computerChoice = "Papel"
  }
  if (computerChoice == [2]) {
      computerChoice = "Tesoura"
  }

  if (computerChoice == 'pedra') {
      if (userChoice == 'pedra') {
          resultado = 'Empate'
      }
      if (userChoice == 'Papel') {
          resultado = "Usuario ganhou"
      } else {
          resultado = "Computador Ganhou"
      }
  }

  if (computerChoice == 'Papel') {
      if (userChoice == 'Papel') {
          resultado = 'Empate'
      }
      if (userChoice == 'Tesoura') {
          resultado = "Usuario ganhou"
      } else {
          resultado = "Computador Ganhou"
      }
  }

  if (computerChoice == 'Tesoura') {
      if (userChoice == 'Tesoura') {
          resultado = 'Empate'
      }
      if (userChoice == 'Pedra') {
          resultado = "Usuario ganhou"
      } else {
          resultado = "Computador Ganhou"
      }
  }
