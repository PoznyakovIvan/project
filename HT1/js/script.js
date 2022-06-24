const numberOfFilms = +prompt('Сколько фильмов ві уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastSeenMovie = prompt('Один из последних просмотренных фильмов?', ''),
assessmentLastSeenMovie = +prompt('На сколько оцените его?', ''),
lastSeenMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
assessmentLastSeenMovie2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastSeenMovie] = [assessmentLastSeenMovie];
personalMovieDB.movies[lastSeenMovie2] = [assessmentLastSeenMovie2];

console.log(personalMovieDB);