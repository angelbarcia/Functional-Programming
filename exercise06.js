const movies = require("../resources/movies.json");

// find movies in genre "Comedy"

const comedyMovies = movies
    .filter(movie => movie.genres.some(genre => genre.name.includes("Comedy")))
    .map(movie => movie.title);
    return console.log (comedyMovies);
 

