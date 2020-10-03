const movies = [
  "https://media.giphy.com/media/MulsHQoVJVtQc/giphy.gif",
  "https://media.giphy.com/media/1qlS5qjd4Fe2Q/giphy.gif",
  "https://media.giphy.com/media/naDW435TRibC/giphy.gif",
];

const moviesTitle = ["Homem de Ferro", "Capitão América", "Homem Aranha"];


const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle");

const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById("displayMovie");


displayMovie.addEventListener("click", function(){


    for( let i=0; i<movies.length;i++){
        console.log(movies[i]);

        displayMoviePoster.innerHTML += `<img width= "400px" height= "400px" src=${movies[i]} >`
    }
});