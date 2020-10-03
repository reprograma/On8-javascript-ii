const movies = [
    "https://media1.giphy.com/media/jog2TsnJMXqX6/giphy.gif", 
    "https://media0.giphy.com/media/xwvT0qtK4FtgQ/giphy.gif",
    "https://media4.giphy.com/media/Yq9vuUmWSeBC8/giphy.webp?cid=ecf05e479qs6hvnitya0ihsq9w0ifwfmbg435syn4m30fyun&rid=giphy.webp",
]


const moviesTitle = [
    "Monstros SA", 
    "Mulher Maravilha",
    "Frozen",
]

const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle");

const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById("displayMovie");


 
displayMovie.addEventListener("click", function() {
    console.log('cliquei!')

    for(let i=0; i < movies.length; i++) { 
        console.log(movies[i])

        displayMoviePoster.innerHTML += `<img class="gif" src="${movies[i]}" /> ` 
    } 
})
