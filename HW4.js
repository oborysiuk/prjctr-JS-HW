"use strict";

//Task #1

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {

    let timerId = setInterval(() => {
        if (delay > 0) {
            console.log(delay); 
            delay -= 1;
        } else {
            console.log('BOOM!'); 
            clearInterval(timerId); 
        }
    }, 1000);
	
}

//Task #2

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {

    let timerId = setTimeout(function print(){
        if (delay > 0) {
            console.log(delay); 
            delay -= 1;
            timerId = setTimeout (print, 1000);
        } 
        else {
            console.log('BOOM!'); 
            clearTimeout(timerId); 
        }
    }, 1000);
	
}

//Task #3 

let food = {
	dish: 'pasta',
    kind: 'carbonara',
	frequency: 'every day',
	country: 'Italy',
	amount: 140,

	favourite() {
		console.log(`My favourite dish is ${this.dish} ${this.kind} and I'd like to eat it ${this.frequency}`);
	},
	contryOfOrigin() {
		console.log(`I'm planning to visit ${this.country} in the nearest future, home of the delicious carbonara`);
	},
	funFact(){
		console.log(`There are more than ${this.amount} kinds of ${this.dish} in ${this.country}`);
	}
}

food.favourite();
food.contryOfOrigin();
food.funFact();

//Task #4

let securedFoodFavourite = food.favourite.bind(food);// якийсь код
let securedFoodCountry = food.contryOfOrigin.bind(food);// якийсь код
let securedFoodFunFact = food.funFact.bind(food);// якийсь код

setTimeout(securedFoodFavourite, 1000); // виведе коректний результат
setTimeout(securedFoodCountry, 2000); // виведе коректний результат
setTimeout(securedFoodFunFact, 3000); // виведе коректний результат

//Task #5

function someFunction(a,b) {
    console.log(a*b);
}
 // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    return function(...number){
        setTimeout(function() {
            func(...number);
        }, seconds*1000);
    }
// тут ваш код для декоратора
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення
slowedSomeFunction(5,9); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'