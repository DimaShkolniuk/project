"use strict";

//alert('hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Your age?", "");
//console.log(answer + 5);

//const answers = [];

////answers[0] = prompt('Name?', '');
//answers[1] = prompt('Sorname?', '');
//answers[2] = prompt('Age?', '');

//console.log(typeof(answers));

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = "Dima";
//alert(`Hello, ${user}`);

console.log('arr' + " - oject");
console.log(4 + " - oject");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

    //incr++;
    //decr--;

    //console.log(incr);
    //console.log(decr);

    //console.log(incr++);  //Постфиксная форма
    //console.log(decr--);  //Постфиксная форма

    console.log(++incr);  //Префиксная форма
    console.log(--decr);  //Префиксная форма

    console.log(5%2);  //остаточное значение

    console.log(2*4 == '8'); //сравнение

    console.log(2 + 2 * 2 === 8);  //строгое сравнение
    console.log(2 + 2 * 2 !== 8);  // не равенство

    const isChecked = true;
        isClose = false;     
        console.log(isChecked && isClose);  // оператор И

        console.log(isChecked || isClose);  // оператор ИЛИ

        console.log(isChecked ||  !isClose); //оператор отрецания "!"

if (4 == 9) {  //всегда булиновое число true/false
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('So many');
} else {
    console.log('Ok');
}

//Условие       ответ если         Ответ если
//которое       правда              ложь
//выполнилось
const num = 51;
(num == 50) ? console.log('Ok') : console.log('So many');  // Тернарный оператор


const num = 51;

switch (num) { //проверка только строгого соответствия
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('True');
        break;
    default: 
        console.log("you must try");
        break;
}

// И запинается на ЛЖИ. Логичесий элемент && выводит либо первую ложь до каторой
// он доходит либо выводит значение последней правды которую он сравнивал.

const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Nice');
}

console.log(hamburger && fries);


const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'wwww');

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Nice');
} else {
    console.log('We go away');
}

//оператор ИЛИ запинается на правде. работает до 1 правды и возвращает это значение
//если не правда все, то выаодит последнее проверенно значение.

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries) {
    console.log('Nice');
} else {
    console.log('We go away');
}

let JohnReport, alexReport, samReport,mariaReport = 'done';

console.log(JohnReport || alexReport || samReport || mariaReport);


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Nice');
} else {
    console.log('We go away'); 
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

//опервтор НЕ (!) 

console.log(!0);

console.log( NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); //NaN
console.log( 1 && 2 && 3 ); //3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); //true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
} //Done

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
}
console.log((hamburger || cola || fries === 3 || nuggets)); //2

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
console.log((hamburger && cola || fries === 3 && nuggets)); //false


//цикл 1!
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

//цикл 2!
let num = 50;

do{
    console.log(num);
    num++;
}
while (num <= 55);


//цикл 3!
let num = 50;
// (начало цикла; условия остановки цикла; шаг цикла)
for (let i = 1; i < 10; i++) {
    if(i == 6) {
        //break; //остановиться
        continue; //исключить значение из цикла
    }
    console.log(i);
    
}

//цикл в цикле (23)

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// задача вложенного цыла

let result = '';
const length = 7;

for(let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.timeLog(result);

//Полная остановка цикла

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Thirt level: ${k}`);
        }
    }
}
//1
for (let i = 1; i < 101; i++) {
    console.log(i);
}

let num = 0;
while (num < 101){
    console.log(num);
    num++;
}

//2
for (let i = 11; i < 34; i++) {
    console.log(i);
}

let num = 11;
while (num < 34) {
    console.log(num);
    num++;
}
//3

for (count = 1; count < 100; count++) {
    count++;
    console.log(count);
}

let num = 0;
while(num < 100) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

//4
let sum = 0;
for (var i = 0; i <= 100; i++) {
    sum += i;
 }
console.log(sum);

let sum = 0;
let num = 0;

while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);

//5

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

const arrayOfNumbers = [];
let i = 5;
while (i < 11) {
    arrayOfNumbers[i - 5] = i;
    i++;
}
console.log(arrayOfNumbers);

//6

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (i = 0; i < arr.length; i++) {
    result [i] = arr [i];
}
console.log(result);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
let i = 0;

while (i < arr.length) {
    result[i] = arr [i];
    i++;
}
console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (i = 1; i <= data.length; i++) {
   result [i - 1] = data[data.length - i];
}
console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";

    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);