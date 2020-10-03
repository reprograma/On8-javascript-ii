const movies = [
  "https://media3.giphy.com/media/Mj0gk1wnekXC0/giphy.gif",
  "https://media1.giphy.com/media/3s0ddui7kadGg/giphy.gif",
  "https://media0.giphy.com/media/QVF0LkZecO5lC/giphy.gif?cid=ecf05e4706d49f0d0ffee20aa87cdc808e7e7ebfcf2569a6&rid=giphy.gif",
];

const moviesTitle = ["Time 7", "Uchihas", "Sensei"];


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