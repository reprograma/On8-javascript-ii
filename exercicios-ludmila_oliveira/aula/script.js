/*
PASSO A PASSO/FUNCIONALIDADE/ O QUE O CLIENTE QUER?
* Ao clicar no botão "Vamos lá?", deve mostrar na tela as três Gifs dos filmes
* Ao clicar no botão "Já sei! Conferir resposta", os nomes dos filmes devem aparecer um embaixo do outro
* Utilize função! ela será sua melhor amiga
*/


const movies = [
    "https://media.giphy.com/media/KEYDQxKTqhR5Br8OAB/source.gif", 
    "https://media.giphy.com/media/l3V0G6RGynhmcetpK/giphy.gif",
    "https://media.giphy.com/media/YOxQtTKhejWAU/source.gif",
]


const moviesTitle = [
    "Parasita", 
    "O Iluminado",
    "O Fabuloso Destino de Amélie Poulain",
]

const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle");

const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById("displayMovie");


//no displayMovie (que é um botão) eu tenho um evento de "clique" que dispara uma ação! 
displayMovie.addEventListener("click", function() {

    for(let i=0; i < movies.length; i++) { 
        console.log(movies[i])

        displayMoviePoster.innerHTML += `<img width="600" src=${movies[i]} />`
    } //css-inline

})

displayAnswer.addEventListener("click", function() {
    

    for(let i=0; i < moviesTitle.length; i++) { 
        console.log(moviesTitle[i])

        displayMovieTitle.innerHTML += `<li>${moviesTitle[i]}</li>`
    } 

} )


