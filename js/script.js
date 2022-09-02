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
(num == 50) ? console.log('Ok') : console.log('So many');  // Тернарный оператор


const num = 51;

switch (num) { //проверка только сторого соответствия
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