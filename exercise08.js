const movies = require("../resources/movies.json");
let yearStart = 1970;
let yearEnd = 1979
// find movies in 70s and in genre "Drama"
const comedyMovies = movies
    .filter(movie => movie.year >= yearStart && movie.year <= yearEnd && movie.genres.some(genre => genre.name.includes("Drama")))
    .map(movie => movie.title);
    return console.log (comedyMovies);