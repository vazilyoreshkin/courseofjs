
'use strict';

/* a = 5;
console.log(a); */

/* var leftBorderWidth = 1;
let second = 2;
const pi = 3.14; */


/* console.log('string'*90);

let something;
console.log(something);


let person = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(person["age"]);
 */

/* let arr = ['plum.png','orange.jpeg','apple.bmp'];
console.log(arr['0']); */

/* alert('Hello world'); */

/* let answer = confirm('Are you here?');
console.log(answer); */


/* let answer = +prompt('Есть ли вам 18?', 'да');
console.log(typeof(answer));

console.log('arr' + ' - object');
console.log(5 + +' - object'); */

/* let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log('2' === '2');

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose); */

let money = +prompt('Какой ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let a = prompt('Введите обязательну статью расходов на месяц');
let b = prompt('Во сколько это обойдется?');
let c = prompt('Введите обязательну статью расходов на месяц');
let d = prompt('Во сколько это обойдется?');

appData.expenses[a] = b;
appData.expenses[c] = d;

alert('Ваши расходы за день составляют'+ appData.budget /30 + 'рублей');
