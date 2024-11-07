const movies = require("../resources/movies.json");

// find movies with more than one director
const comedyMovies = movies
    .filter(movie => movie.directors.length> 1)
    .map(movie => movie.title);
    return console.log (comedyMovies);