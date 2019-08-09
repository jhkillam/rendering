
function renderMovies(movies) {

    function buildMovieCard(obj) {
        
        return `
        <div class="movieCardContainer">
            <img width="150" src="${obj.poster}">
            <div class="movieInfo">
                <h3 class="movieTitle">${obj.title}</h3>
                <p class="movieYear">${obj.year}</p>
                <p class="noTextMargin">IMDB:</p>
                <p>${obj.imdbRating} / 10</p>
                <p class="noTextMargin">Rotten Tomatoes:</p>
                <p>${obj.rottenTomatoesRating * 100}%</p>
            </div>
        </div>`
    }

    let movieCards = movies.map(buildMovieCard).join("");
    return movieCards;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}