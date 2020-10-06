/* #### O que deve ser feito?

* Ao clicar no botão "Vamos lá?", deve mostrar na tela as três imagens/gifs dos filmes

* Ao clicar no botão "Já sei! Conferir resposta", os nomes dos filmes devem aparecer um embaixo do outro

* Utilize função! ela será sua melhor amiga

***
*/

const movies = [ 
    "https://biscoitoxadrez.files.wordpress.com/2016/07/meryl02.gif?w=356",
    "https://media.tenor.com/images/6a9635a4b80bb32d161fdcb7256d3e44/tenor.gif",
    "https://i.pinimg.com/originals/bf/30/9c/bf309ca5cdaaf18e30ff5cd1f5f666c5.gif"
 ]

const moviesTitle = [ 
    "Simplesmente Complicado",
    "High School Musical",
    "Truque de Mestre"
]

const displayMoviePoster = document.getElementById("displayMoviePoster");
const displayMovieTitle = document.getElementById("displayMovieTitle")
const displayAnswer = document.getElementById("displayAnswer");
const displayMovie = document.getElementById("displayMovie");


displayMovie.addEventListener("click", function() {
    for(let i=0; i < movies.length; i++) {
        console.log(movies[i])
        displayMoviePoster.innerHTML += `<img src=${movies[i]} />`
    }

})


displayAnswer.addEventListener("click", function() {
    for(let i=0; i < moviesTitle.length; i++) {
        console.log(moviesTitle[i])
        displayMovieTitle.innerHTML += `<li>${moviesTitle[i]}</li>`

    }

})





