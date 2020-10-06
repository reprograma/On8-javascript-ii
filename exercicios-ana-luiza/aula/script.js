const movies = ['https://media.giphy.com/media/pI2paNxecnUNW/giphy.gif', 
'https://media.giphy.com/media/v3zrOsLhw30D6/giphy.gif', 
'https://media.giphy.com/media/l0HU49MXasr6juD0A/giphy.gif']

const moviesTitle = ['Harry Potter', 'Mulan', 'Your Name']

const displayMoviePoster = document.getElementById('displayMoviePoster')
const displayMovieTitle = document.getElementById('displayMovieTitle')
const displayAnswer = document.getElementById('displayAnswer')
const displayMovie = document.getElementById('displayMovie')

displayMovie.addEventListener('click', function() {

    for (let i=0; i < movies.length; i++) {
        displayMoviePoster.innerHTML += `<img width='400' height='300' src=${movies[i]} />`
        displayMoviePoster.classList.add('display-movie-poster')        
    }

})

displayAnswer.addEventListener('click', function() {
    for (let i=0; i < moviesTitle.length; i++) {
        displayMovieTitle.innerHTML += `<li>${moviesTitle[i]}</li>`        
    }
})