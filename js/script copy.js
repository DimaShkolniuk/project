"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
     const a = prompt('Один из последних просмотренных фильмов?', ''),
           b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != " " && b != ' ' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
         
}   

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
    

    console.log(personalMovieDB);


//обьявляем функция
//function - говорит нам что это функция
//showFirstMessage - даем ей название (Формат имени: Глагол + то над чем выполняется действие)
//() - передаем аргументы функции
//{} - прописываем действия которые будут выполнятся

function showFirstMessage (text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello world');

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hello');
};

logger();

const calc = (a, b) => { return a + b};

//1

const usdCurr = 28;
const eurCurr = 32;
const discont = 0.9;

function convert(amount, curr) {
    console.log(curr * amount);
    return curr * amount;
}

function promotion(result) {
    console.log(result * discont);
}
const res = convert(500, usdCurr);
promotion(res);

promotion(convert(500, usdCurr));

convert (500, usdCurr);
convert (500, eurCurr);

text ();

function doNothing() {};
console.log(doNothing() === undefined);

//

function sayHello(name) {
    return `Привет, ${name}!`;
    
}
sayHello ("Антон");
console.log(sayHello ("Антон"));

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers (5);

console.log(returnNeighboringNumbers(5));

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    } 

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}
getMathResult(5, 3);
getMathResult(3, 10); 
getMathResult(10, 5);
getMathResult(10, '5'); 
getMathResult(10, 0);
getMathResult(20, -5);

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));

let a = 5;
let b = 10;

function multiply(a, b){
    return (a * b);
    
  }
  multiply(a, b);
  console.log(multiply(a, b));



const str = 'test';

console.log(str.length); // свойство подсчет длины строки

console.log(str.toUpperCase()); // метод - Пропись заглавными
console.log(str.toLowerCase()); // метод - Пропись маленькими

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // метод определения данних внутри страки

const logg = 'hello world';

console.log(logg.slice(6, 11)); // метод вырезания из строки
console.log(logg.substring(6, 11)); // метод 
console.log(logg.substr(0, 5)); // метод сколько символов нужно вырезать

const num = 12.2;

console.log(Math.round(num)); //округление чисел

const test = '12.2px';
console.log(parseInt(test)); // изменение системы исчисления(в число) и округляет его
console.log(parseFloat(test)); // изменение системы исчисления с плавающей точкой