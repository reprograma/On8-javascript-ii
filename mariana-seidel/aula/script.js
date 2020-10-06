/** Ao clicar no botão "Vamos lá?", deve mostrar na tela as três imagens/gifs dos filmes

* Ao clicar no botão "Já sei! Conferir resposta", os nomes dos filmes devem aparecer um embaixo do outro

* Utilize função! ela será sua melhor amiga
*/

const movies = ['https://media.giphy.com/media/GgMbJ5L0DzFnO/giphy.gif', 'https://media.giphy.com/media/QKO8gxZKCZ0v6/giphy.gif', 'https://media.giphy.com/media/l4EoOcRpQLTCIgNag/giphy.gif']
const moviesTitle = ['As Branquelas', 'Jurassic World', 'It: A Coisa']

const displayMoviePoster = document.getElementById('displayMoviePoster');
const displayMovieTitle = document.getElementById('displayMovieTitle');
const displayAnswer = document.getElementById('displayAnswer');
const displayMovie = document.getElementById('displayMovie');


displayMovie.addEventListener('click', function(){
    for(let i=0; i < movies.length; i++){
        displayMoviePoster.innerHTML += `<img width="600" src==${movies[i]}/>`
    }
})

displayAnswer.addEventListener('click', function(){
    for (let i=0; i < moviesTitle.length; i++){
        displayMovieTitle.innerHTML += `<li>${moviesTitle[i]}</li>`
    }
})