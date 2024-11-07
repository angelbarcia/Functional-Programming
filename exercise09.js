const movies = require("../resources/movies.json");

// find how many movies for each genre

const moviesPerGenre = movies
    .reduce((acc, movie) => {
        movie.genres.forEach(genre => {
            const genreName = genre.name;
            if (!acc[genreName]) {
                acc[genreName] = [];
            }
            acc[genreName].push(movie.title);
        });
        return acc;
    }, {});

console.log(moviesPerGenre);