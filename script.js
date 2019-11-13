/* 'use strict'; */

let money = "Ваш бюджет на месяц?",
    time = "Введите дату в формате YYYY-MM-DD";

let appData = {
    budget: "money",
    timeData: "time",
    expenses: {
        "answer" : "answerSecond"
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer = prompt("Введите обязательную статью расходов в этом месяце");
let answerSecond = prompt("Во сколько обойдется?");

