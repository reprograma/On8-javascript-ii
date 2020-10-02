// Criando um jogo chamado: Pedra, Papel & Tesoura;

//Guardar as possibilidades de jogadas - Pedra - Papel - Tesoura

// Para criar as funcionalidades:
// 1. criar uma array
// 2. variável [computerChoice]
// 3. Math.random() - criando aleatoriedade
// 4. lógica de jogada para analisar vencedor
// 5. se houver empate - não existirá vencedor


// construir uma variável [computerChoice] de forma aleatória para retornar as possibilidades do jogo

// existir uma lógica para eleger um vencedor

// para as 3 possibilidades:
// pedra x tesoura = pedra ganha, tesoura perde
// pedra x papel = pedra perde, papel ganha
// pedra x pedra = empate!

// iremos trabalhar com if / else / else if

// ou iremos usar  switch / case / break

// *** extra: deixar o usuário saber quando ele não escrever as palavras corretamente!
// No caso, criar um alerta de feedback para ele saber o que fazer

// usar um 'alert'



// INICIANDO MINHA CRIAÇÃO com  Math.random:

function gerando(min, max){
    let possibilidades = max - min; 
    let num1 = Math.random()* possibilidades;
    //alert(num1);
    if (form1.jogadas.value==1){
        if (num1 > 2){
            alert ('Você escolheu Papel e ganhou de Pedra! Uhruuu!');
        } else if(num1 > 1){
            alert ('você escolheu Papel e perdeu para Tesoura. Sniff!');
        } else{
            alert('Você escolheu Papel e empatou com Papel!');
        }
    }else if (form1.jogadas.value==2){
        if (num1 > 2){
            alert ('Você escolheu Pedra e ganhou de Tesoura! Uhruuu!');
        } else if(num1 > 1){
            alert ('você escolheu Pedra e perdeu para Papel. Sniff!');
        } else{
            alert('Você escolheu Pedra e empatou com Pedra!');
        }
    }else if (form1.jogadas.value==3){
        if (num1 > 2){
            alert ('Você escolheu Tesoura e ganhou de Papel! Uhruuu!');
        } else if(num1 > 1){
            alert ('você escolheu Tesoura e perdeu para Pedra. Sniff!');
        } else{
            alert('Você escolheu Teoura e empatou com Tesoura!');
        }
    }

}
//<body onload='gerando(0,3)'>
// Criando o joguinho no bady, temos:

<body>
    <form name='form1' onsubmit='gerando(0,3)'>
        Digite 1 para papel, 2 para pedra e 3 para tesoura:
        <input type='text' name='jogadas'></input>
        <input type='submit' value='JOGAR'></input>
    </form>
</body>