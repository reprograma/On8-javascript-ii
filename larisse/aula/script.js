/* #### O que deve ser feito?
* Ao clicar no botão "Vamos lá?", deve mostrar na tela as três imagens/gifs dos filmes
* Ao clicar no botão "Já sei! Conferir resposta", os nomes dos filmes devem aparecer um embaixo do outro
* Utilize função! ela será sua melhor amiga
***
*/

const movies = [
    "https://i.pinimg.com/originals/5f/cc/ed/5fcceda88047aafd4b0621e664634a29.gif",
    "https://i.pinimg.com/originals/9e/1c/7e/9e1c7e1c85eb2a20146ae0c816ec691d.gif",
    "https://media3.giphy.com/media/J5Ye1C92A0PB5LxdVn/giphy.gif"
]
const moviesTitle = [
    "Nasce uma estrela",
    "Meninas Malvadas",
    "Homecoming: A film by Beyoncé"
]
const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle")
const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById("displayMovie");

displayMovie.addEventListener("click", function () {
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i])
        displayMoviePoster.innerHTML += `<img width="600" src=${movies[i]} />`
    }

})
displayAnswer.addEventListener("click", function () {
    for (let i = 0; i < moviesTitle.length; i++) {
        console.log(moviesTitle[i])
        displayMovieTitle.innerHTML += `<li>${moviesTitle[i]}</li>`

    }

})


