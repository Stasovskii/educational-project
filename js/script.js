"use strict";

alert('hello');

const result = confirm("ты тута?");
console.log(result);

const answer = prompt("есть 18?", "");
console.log(typeof(answer));

const answers = [];
answers[0] = prompt('как зовут?', '');
answers[1] = prompt('фамилия?', '');
answers[2] = prompt('сколько лет?', '');

document.write(answers);

    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', ''),
          c = prompt('Один из последних просмотренных фильмов?', ''),
          d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

