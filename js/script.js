"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// var name = 'Ivan';

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log('Ширина автомобиля: ' + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);


// let number = 4.6;

// console.log(4/0);
// console.log('string' * 9);

// const person = 'Alex';

// const bool = true;

// console.log(something);

// let und;

// console.log(und);

// const obj = {
//     name: 'Ivan',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18?', 'Ага');
// console.log(answer);
// console.log(typeof(answer));

// const answers = [];

// answers[0]= prompt('Как ваше имя?', '');
// answers[1]= prompt('Как ваша фамилия?', '');
// answers[2]= prompt('Сколько вам лет?', '');

// document.write(answers);

// alert('Hello');

// const result = confirm('Ты дурак?');
// console.log(result);

// const answer = prompt('Are you raedy to fuck?');
// console.log(answer);
// console.log(typeof(answer));
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user ='Ivan';

// alert(`Привет, ${user}`);

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
// decr = 10;

// ++incr; префиксная форма
// --decr; префиксная форма
//incr++;//Постфиксная форма 
// decr--;//Постфиксная форма 
// console.log(incr++);//Сначала возвращает старое значение
// console.log(--decr);
// console.log(2*4 == 8);
// console.log(2*4 == '8');
// console.log(2*4 === '8');

// const isChecked = false,
// isClose =false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
// console.log(isChecked || !isClose);
// console.log(2 + 2 * 2 == 8);
// console.log(2 + 2 * 2 != 8);
// console.log(2 + 2 * 2 !== '6');

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const hamburger = 5,
// fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// const hamburger = 2,
// fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Мы поели!');
// } else {
//     console.log('Мы уходим!');
// }
// const hamburger = 2,
// fries = 1,
// cola =0,
// nuggets = 2;

// if (hamburger || cola || fries) {
//     console.log('Мы поели!');
// } else {
//     console.log('Мы уходим!');
// }

// const hamburger = 2,
// fries = 1,
// cola =0,
// nuggets = 2;

// if (hamburger ===3 && cola ===2 || fries ===3 && nuggets ) {
//     console.log('Мы поели!');
// } else {
//     console.log('Мы уходим!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log(hamburger === 3 && cola || fries === 3 && nuggets);
}
