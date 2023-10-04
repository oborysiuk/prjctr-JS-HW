'use strict';

// Task #1
console.log("1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:");

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", 
                    "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map((str) => String(str).split(' '));

for (let i=0; i<initials.length; i++){

    initials[i] = initials[i].map((str) => String(str).slice(0,1)).join('.')+'.';
}

initials.sort();
console.log(initials);

// Task #2
console.log("2. Задача на фільтрування масиву:");

const userNames1 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let filteredNames = [];
const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];

// 1st method
console.log("через умовну конструкцію");

for (let i=0; i<userNames1.length; i++){
    if (vowels.includes(userNames1[i][0]))
        filteredNames.push(userNames1[i]);
}

console.log(filteredNames);

// 2nd method
console.log("через вбудований метод масивів");

filteredNames = userNames1.filter((el) => {return vowels.includes(el[0])});
console.log(filteredNames);

// Task #3
console.log("3. Задача на розворот числа:");

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = parseInt(currentMaxValue.toString().split("").reverse().join(""));

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

// Task #4
console.log("Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:");

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;
let flatArray;

flatArray = resultsArray.flat(Infinity);
productOfArray = flatArray[0];

for (let i=1; i<flatArray.length; i++){

    productOfArray = productOfArray*flatArray[i];
}

console.log(productOfArray);