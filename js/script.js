// 'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату и время в формате", "YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    itsTime: time,
    saving: true
}


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i--;
        }

    }
}

chooseExpenses();

function choseOptExpention() {
    for (let y = 0; y < 3; y++) {
        let a = prompt("Введите НЕобязательную статью расходов в этом месяце", ''),
            b = prompt("В какую сумму это обойдется", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('vell done');
            appData.optionalExpenses[a] = b;
        } else {
            y = y--;
        }
    }
}

choseOptExpention();



function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка")
    }
}

detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц составил:" + appData.monthIncome);
    }

}

checkSavings();










// let person = {
//     name: "Hommy",
//     age: 23,
//     isMaried: false
// };
// console.log(person.isMaried);
// let answer = prompt("Hells Bells","fuck","");
// console.log(answer);