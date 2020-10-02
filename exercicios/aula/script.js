const inputFilme=document.getElementById('displayMovie');
const inputResposta=document.getElementById('displayAnswer');
const posterFilme=document.getElementById('displayMoviePoster');
const posterResposta=document.getElementById('displayMovieTitle');

let nomes=['Capadocia/Turquia ',' Coliseu/Italia ',' Fernando de Noronha/Brasil'];

inputFilme.addEventListener('click', filme);
function filme(event){
    event.preventDefault();
    let iserirFilme=document.createElement('div')

            iserirFilme.innerHTML= '<img width=400px margin=10px src="/exercicios/aula/img/capadocia-turquia.jpg"></img> <img margin=10px width=400px src="/exercicios/aula/img/coliseu-roma-italia.jpg" alt=""><img margin=10px width=400px src="/exercicios/aula/img/noronha.jpg" alt="">'    
    posterFilme.appendChild(iserirFilme)
    }
    
inputResposta.addEventListener('click', resposta);
function resposta(event){
    event.preventDefault();
    let iserirResposta=document.createElement('div')

    for(let i=0; i<nomes.length;i++){
        iserirResposta.innerHTML += nomes[i]+'-';
        posterResposta.appendChild(iserirResposta)
    }
    
}