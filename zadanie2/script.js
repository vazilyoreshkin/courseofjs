
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

/* let money = +prompt('Какой ваш бюджет на месяц?');
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
 */

/*  if(2*4==7) {
     console.log('Верно!');
 } else {
     console.log('Не верно!');
 } */

 /* let num = 50;
 if (num < 49) {
     console.log('Неверно!')
 } else if (num > 100) {
     console.log('Много!')
 } else {
     console.log('Верно!')
 };

 (num = 50) ? console.log('Верно') : console.log('Неверно!');

 switch (num) {
     case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много');
        break;
    case num > 80:
        console.log('Все ещё много');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Что-то пошло не так!');
        break;
 }  


  */
/*  if (2*4 == 8) {
    console.log('Верно!');     
 } else {
     console.log('Неверно!');
 } */
/*  let num = 50;
/*  while (num < 55) {
     console.log(num);
     num++; 
 } */
/* do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
} */ 

let money = +prompt('Какой ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budjet : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

/* 
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательну статью расходов на месяц', ''),
        b = prompt('Во сколько это обойдется?', '');
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a !='' && b !='' && a.length < 50) {
            console.log('Done!');
            appData.expenses[a] = b;
        } else {
            console.log ('bad result');
        i--;
    }

}; */


/*цикл while*/


let i = 0;
    while (i < 2); {
    let a = prompt('Введите обязательну статью расходов на месяц', ''),
        b = prompt('Во сколько это обойдется?', '');
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
         } else {
            console.log ("bad result");
        i--;
     }

     i++;
     };


//цикл do while

/* let i = 0;
    let a = prompt('Введите обязательну статью расходов на месяц', ''),
        b = prompt('Во сколько это обойдется?', '');
    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
     do {
        console.log(i);
        i++
     }
     while (i < 2);
};
 */


appData.moneyPerDay = appData.budjet / 30 ;

alert('Ежедневный бюджет:' + appData.moneyPerDay );
if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
