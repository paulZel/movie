"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; //присваеваем ответ на вопрос
//когда записываем что-то в объект лучше использовать [] вместо . чтобы избавится 
//багов например кирилици или некотрых браузеров

personalMovieDB.movies[c] = d;

console.log(personalMovieDB);