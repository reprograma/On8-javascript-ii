const movies = [
    "https://media.giphy.com/media/MCL6prm5SIeuFb91xZ/giphy.gif",
    "https://media.giphy.com/media/3o6ozgge4UJklqLgIg/giphy.gif",
    "https://media.giphy.com/media/t5XqW33a9VYSQ/giphy.gif",
]

const moviesTitle = [
    "Viva: A vida é uma festa",
    "Procurando Nemo",
    "Divertida Mente",
]

const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle");

const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById ("displayMovie");

displayMovie.addEventListener("click", function() {
    console.log('cliquei!')

    for(let i=0; i < movies.length; i++) {
    console.log(movies[i])

    displayMoviePoster.innerHTML += `<img src=${movies[i]} /> ` 
    }
})